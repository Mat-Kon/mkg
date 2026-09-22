import { Link } from "react-router-dom";
import { WORKS } from "@/data/works";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import styles from "./index.module.scss";

export const WorksPage = () => {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.head}`}>
        <h1 className={styles.title}>Мои работы</h1>
        <p className={styles.subtitle}>
          Объекты, которые я сделал в Батуми и окрестностях. Нажмите на
          карточку, чтобы посмотреть фотографии и подробности.
        </p>
      </div>

      <div className={`container ${styles.grid}`}>
        {WORKS.map((work) => (
          <Link
            key={work.slug}
            to={`/works/${work.slug}`}
            className={styles.card}
          >
            <ImageWithFallback
              src={work.cover}
              alt={work.title}
              className={styles.cardImage}
            />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{work.title}</div>
              <div className={styles.cardShort}>{work.short}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
