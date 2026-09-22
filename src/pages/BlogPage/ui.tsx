import { Link } from "react-router-dom";
import { useBlogIndex } from "@/hooks/useBlog";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Seo } from "@/components/Seo";
import styles from "./index.module.scss";

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export const BlogPage = () => {
  const { data, loading, error } = useBlogIndex();

  return (
    <div className={styles.page}>
      <Seo
        title="Блог о ремонте окон и балконов"
        description="Статьи о ремонте окон ПВХ, остеклении и отделке балконов в Батуми. Опыт мастера, разбор ошибок, практические советы."
        canonical="/blog"
      />

      <div className={`container ${styles.head}`}>
        <h1 className={styles.title}>Блог</h1>
        <p className={styles.subtitle}>
          Пишу о ремонте и обслуживании окон и балконов. Делюсь опытом, разбираю
          частые ошибки и подсказываю, как сделать лучше.
        </p>
      </div>

      <div className={`container ${styles.grid}`}>
        {loading && <p className={styles.status}>Загрузка…</p>}
        {error && <p className={styles.status}>Не удалось загрузить статьи.</p>}

        {data?.posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
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
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingTime} мин чтения</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardTags}>
                {post.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
