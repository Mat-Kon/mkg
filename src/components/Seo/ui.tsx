import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedAt?: string;
};

const SITE_NAME = "Матвеев Мастер";
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

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
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
  useEffect(() => {
    const fullTitle = `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    if (description) setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    if (description) setMeta("property", "og:description", description);
    if (image) setMeta("property", "og:image", `${SITE_URL}${image}`);
    if (canonical) {
      setMeta("property", "og:url", `${SITE_URL}${canonical}`);
      setLink("canonical", `${SITE_URL}${canonical}`);
    }

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    if (description) setMeta("name", "twitter:description", description);
    if (image) setMeta("name", "twitter:image", `${SITE_URL}${image}`);
    if (type === "article" && publishedAt) {
      setMeta("property", "article:published_time", publishedAt);
    }
  }, [title, description, canonical, image, type, publishedAt]);

  return null;
};
