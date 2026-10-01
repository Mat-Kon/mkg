import { useEffect, useState } from "react";
import type { BlogIndex, BlogPost } from "@/types/blog";
import type { Lang } from "@/i18n/types";

type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export const useBlogIndex = (lang: Lang): State<BlogIndex> => {
  const [state, setState] = useState<State<BlogIndex>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetch(`/blog/index.${lang}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: BlogIndex) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setState({
            data: null,
            loading: false,
            error: e instanceof Error ? e.message : "Ошибка загрузки",
          });
      });

    return () => {
      cancelled = true;
    };
  }, [lang]);

  return state;
};

type PostResult =
  | { status: "ok"; data: BlogPost }
  | { status: "not-found" }
  | { status: "error"; message: string };

export const useBlogPost = (slug: string, lang: Lang): State<BlogPost> => {
  const [result, setResult] = useState<PostResult | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/blog/${slug}.${lang}.json`)
      .then((r) => {
        if (r.status === 404) {
          if (!cancelled) setResult({ status: "not-found" });
          return null;
        }
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: BlogPost | null) => {
        if (data && !cancelled) setResult({ status: "ok", data });
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setResult({
            status: "error",
            message: e instanceof Error ? e.message : "Ошибка",
          });
      });

    return () => {
      cancelled = true;
    };
  }, [slug, lang]);

  if (result === null) {
    return { data: null, loading: true, error: null };
  }
  if (result.status === "ok") {
    return { data: result.data, loading: false, error: null };
  }
  if (result.status === "not-found") {
    return { data: null, loading: false, error: "not-found" };
  }
  return { data: null, loading: false, error: result.message };
};
