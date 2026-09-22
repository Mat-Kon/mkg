import { Link, useParams } from "react-router-dom";
import { useBlogPost } from "@/hooks/useBlog";
import type { BlogBlock } from "@/types/blog";
import { CONTACTS } from "@/data/contacts";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Seo } from "@/components/Seo";
import { Schema } from "@/components/Schema";
import { NotFoundPage } from "@/pages/NotFoundPage";
import styles from "./index.module.scss";

const SITE_URL = "https://matveev-master.ge";

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("ru-RU", {
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
  }
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, loading, error } = useBlogPost(slug as string);

  if (loading) {
    return (
      <div className={`container ${styles.page}`}>
        <p className={styles.status}>Загрузка…</p>
      </div>
    );
  }

  if (error || !post) {
    return <NotFoundPage />;
  }

  return (
    <article className={styles.page}>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        publishedAt={post.date}
      />
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `${SITE_URL}${post.cover}`,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Person",
            name: "Матвеев Константин",
          },
          publisher: {
            "@type": "Organization",
            name: "Матвеев Мастер",
          },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }}
      />

      <div className={`container ${styles.breadcrumbs}`}>
        <Link to="/blog" className={styles.backLink}>
          ← Все статьи
        </Link>
      </div>

      <header className={`container ${styles.head}`}>
        <div className={styles.meta}>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime} мин чтения</span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.lead}>{post.excerpt}</p>
        <div className={styles.tags}>
          {post.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
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
        <h2 className={styles.ctaTitle}>Нужен мастер по окнам и балконам?</h2>
        <p className={styles.ctaText}>
          Работаю в Батуми и рядом. Выезд на замер бесплатный.
        </p>
        <div className={styles.ctaActions}>
          <Link to="/calculator" className={styles.primaryBtn}>
            Открыть калькулятор
          </Link>
        </div>
        <div className={styles.ctaContacts}>
          <a
            href={`https://wa.me/${CONTACTS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.whatsapp}`}
          >
            WhatsApp
          </a>
          <a
            href={`https://t.me/${CONTACTS.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.telegram}`}
          >
            Telegram
          </a>
          <a
            href={`mailto:${CONTACTS.email}`}
            className={`${styles.contactBtn} ${styles.email}`}
          >
            Почта
          </a>
          <a
            href={`tel:${CONTACTS.phone}`}
            className={`${styles.contactBtn} ${styles.phone}`}
          >
            Позвонить
          </a>
        </div>
      </div>
    </article>
  );
};
