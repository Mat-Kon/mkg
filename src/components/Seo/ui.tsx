import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useT } from "@/i18n/context";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedAt?: string;
};

const SITE_NAME = "Matveev Master";
const SITE_URL = "https://matveev-master.ge";

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string, hreflang?: string) => {
  // Ищем <link> с конкретным rel и (если есть) hreflang
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const Seo = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedAt,
}: Props) => {
  const { lang } = useT();
  const location = useLocation();

  // Если canonical не передан — берём путь из URL без языкового префикса
  const rawPath =
    (canonical ?? location.pathname.replace(/^\/(ru|ka)/, "")) || "/";

  useEffect(() => {
    const fullTitle = `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    if (description) setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", lang === "ka" ? "ka_GE" : "ru_RU");
    if (description) setMeta("property", "og:description", description);
    if (image) setMeta("property", "og:image", `${SITE_URL}${image}`);

    // Canonical — на текущий язык
    const currentUrl = `${SITE_URL}/${lang}${rawPath === "/" ? "" : rawPath}`;
    setMeta("property", "og:url", currentUrl);
    setLink("canonical", currentUrl);

    // hreflang для всех языков
    setLink(
      "alternate",
      `${SITE_URL}/ru${rawPath === "/" ? "" : rawPath}`,
      "ru",
    );
    setLink(
      "alternate",
      `${SITE_URL}/ka${rawPath === "/" ? "" : rawPath}`,
      "ka",
    );
    setLink(
      "alternate",
      `${SITE_URL}/ru${rawPath === "/" ? "" : rawPath}`,
      "x-default",
    );

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    if (description) setMeta("name", "twitter:description", description);
    if (image) setMeta("name", "twitter:image", `${SITE_URL}${image}`);
    if (type === "article" && publishedAt) {
      setMeta("property", "article:published_time", publishedAt);
    }
  }, [title, description, canonical, image, type, publishedAt, lang, rawPath]);

  return null;
};
