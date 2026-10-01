import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { useBlogIndex } from "@/hooks/useBlog";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import styles from "./index.module.scss";
import { Seo } from "@/components/Seo";

const formatDate = (iso: string, lang: string): string =>
  new Date(iso).toLocaleDateString(lang === "ka" ? "ka-GE" : "ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export const BlogPage = () => {
  const { t, lang } = useT();
  const lp = useLocalizedPath();
  const { data, loading, error } = useBlogIndex(lang);

  return (
    <>
      <Seo title={t.blog.title} description={t.blog.subtitle} />

      <div className={styles.page}>
        <div className={`container ${styles.head}`}>
          <h1 className={styles.title}>{t.blog.title}</h1>
          <p className={styles.subtitle}>{t.blog.subtitle}</p>
        </div>

        <div className={`container ${styles.grid}`}>
          {loading && <p className={styles.status}>{t.blog.loading}</p>}
          {error && <p className={styles.status}>{t.blog.errorLoad}</p>}

          {data?.posts.map((post) => (
            <Link
              key={post.slug}
              to={lp(`/blog/${post.slug}`)}
              className={styles.card}
            >
              <div className={styles.cardImageWrap}>
                <ImageWithFallback
                  src={post.cover}
                  alt={post.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>{formatDate(post.date, lang)}</span>
                  <span>·</span>
                  <span>
                    {post.readingTime} {t.blog.readingTime}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardTags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
