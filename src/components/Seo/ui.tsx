import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type JsonLd = Record<string, unknown>;

type Props = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedAt?: string;
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
};

const SITE_NAME = "Матвеев Мастер";
const SITE_URL = "https://mkbalkon.ru"; 
const DEFAULT_IMAGE = "/images/og-default.jpg";

const upsertMeta = (
  attr: "name" | "property",
  key: string,
  content: string,
) => {
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

const removeMeta = (attr: "name" | "property", key: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (el) el.remove();
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]:not([hreflang])`,
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const JSON_LD_ID = "seo-jsonld";

const setJsonLd = (data: JsonLd | JsonLd[] | undefined) => {
  const existing = document.getElementById(JSON_LD_ID);
  if (existing) existing.remove();
  if (!data) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = JSON_LD_ID;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

const absoluteImage = (image?: string) => {
  const src = image ?? DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`;
};

export const Seo = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedAt,
  noindex = false,
  jsonLd,
}: Props) => {
  const location = useLocation();

  // canonical и og:url — всегда чистый путь без query/hash
  const cleanPath = canonical ?? location.pathname;
  const currentUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const fullTitle = `${title} — ${SITE_NAME}`;
  const absoluteImg = absoluteImage(image);

  useEffect(() => {
    document.title = fullTitle;

    // Обычные meta
    if (description) upsertMeta("name", "description", description);

    // Robots
    if (noindex) {
      upsertMeta("name", "robots", "noindex, follow");
    } else {
      removeMeta("name", "robots");
    }

    // Open Graph
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "ru_RU");
    upsertMeta("property", "og:url", currentUrl);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", absoluteImg);

    // Article-специфичное
    if (type === "article") {
      if (publishedAt) {
        upsertMeta("property", "article:published_time", publishedAt);
      }
    } else {
      removeMeta("property", "article:published_time");
    }

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    if (description) upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImg);

    // Canonical
    upsertLink("canonical", currentUrl);

    // JSON-LD
    setJsonLd(jsonLd);

    return () => {
      // При размонтировании очищаем JSON-LD, чтобы не накапливался
      setJsonLd(undefined);
    };
  }, [
    fullTitle,
    description,
    type,
    publishedAt,
    currentUrl,
    absoluteImg,
    noindex,
    jsonLd,
  ]);

  return null;
};
