import { Link, useParams } from "react-router-dom";
import { useT } from "@/i18n/context";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { useBlogPost } from "@/hooks/useBlog";
import type { BlogBlock } from "@/types/blog";
import { CONTACTS } from "@/data/contacts";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { NotFoundPage } from "@/pages/NotFoundPage";
import styles from "./index.module.scss";
import { Seo } from "@/components/Seo";

const formatDate = (iso: string, lang: string): string =>
  new Date(iso).toLocaleDateString(lang === "ka" ? "ka-GE" : "ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const renderBlock = (block: BlogBlock, i: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className={styles.paragraph}>
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={i} className={styles.heading}>
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={i} className={styles.list}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={i} className={styles.figure}>
          <ImageWithFallback
            src={block.src}
            alt={block.alt}
            className={styles.image}
          />
          {block.caption && (
            <figcaption className={styles.caption}>{block.caption}</figcaption>
          )}
        </figure>
      );
    case "quote":
      return (
        <blockquote key={i} className={styles.quote}>
          <p className={styles.quoteText}>{block.text}</p>
          {block.author && (
            <cite className={styles.quoteAuthor}>— {block.author}</cite>
          )}
        </blockquote>
      );
  }
};

type ContentProps = {
  slug: string;
  lang: "ru" | "ka";
};

const BlogPostContent = ({ slug, lang }: ContentProps) => {
  const { t } = useT();
  const lp = useLocalizedPath();
  const { data: post, loading, error } = useBlogPost(slug, lang);

  if (loading) {
    return (
      <div className={`container ${styles.page}`}>
        <p className={styles.status}>{t.blogPost.loading}</p>
      </div>
    );
  }

  if (error || !post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        image={post.cover}
        type="article"
        publishedAt={post.date}
      />
      <article className={styles.page}>
        <div className={`container ${styles.breadcrumbs}`}>
          <Link to={lp("/blog")} className={styles.backLink}>
            {t.blogPost.backLink}
          </Link>
        </div>

        <header className={`container ${styles.head}`}>
          <div className={styles.meta}>
            <span>{formatDate(post.date, lang)}</span>
            <span>·</span>
            <span>
              {post.readingTime} {t.blog.readingTime}
            </span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.lead}>{post.excerpt}</p>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={`container ${styles.coverWrap}`}>
          <ImageWithFallback
            src={post.cover}
            alt={post.title}
            className={styles.cover}
            loading="eager"
          />
        </div>

        <div className={`container ${styles.content}`}>
          {post.blocks.map(renderBlock)}
        </div>

        <div className={`container ${styles.cta}`}>
          <h2 className={styles.ctaTitle}>{t.contactCta.title}</h2>
          <p className={styles.ctaText}>{t.contactCta.text}</p>
          <div className={styles.ctaActions}>
            <Link to={lp("/calculator")} className={styles.primaryBtn}>
              {t.contactCta.button}
            </Link>
          </div>
          <div className={styles.ctaContacts}>
            <a
              href={`https://wa.me/${CONTACTS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactBtn} ${styles.whatsapp}`}
            >
              {t.contactCta.whatsapp}
            </a>
            <a
              href={`https://t.me/${CONTACTS.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactBtn} ${styles.telegram}`}
            >
              {t.contactCta.telegram}
            </a>
            <a
              href={`mailto:${CONTACTS.email}`}
              className={`${styles.contactBtn} ${styles.email}`}
            >
              {t.contactCta.email}
            </a>
            <a
              href={`tel:${CONTACTS.phone}`}
              className={`${styles.contactBtn} ${styles.phone}`}
            >
              {t.contactCta.phone}
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useT();

  if (!slug) {
    return <NotFoundPage />;
  }

  return <BlogPostContent key={`${slug}-${lang}`} slug={slug} lang={lang} />;
};
