import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { WORKS } from "@/data/works";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import styles from "./index.module.scss";
import { Seo } from "@/components/Seo";

export const WorksPage = () => {
  const { t, lang } = useT();
  const lp = useLocalizedPath();

  return (
    <>
      <Seo title={t.works.title} description={t.works.subtitle} />
      <div className={styles.page}>
        <div className={`container ${styles.head}`}>
          <h1 className={styles.title}>{t.works.title}</h1>
          <p className={styles.subtitle}>{t.works.subtitle}</p>
        </div>

        <div className={`container ${styles.grid}`}>
          {WORKS.map((work) => (
            <Link
              key={work.slug}
              to={lp(`/works/${work.slug}`)}
              className={styles.card}
            >
              <ImageWithFallback
                src={work.cover}
                alt={work.title[lang]}
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{work.title[lang]}</div>
                <div className={styles.cardShort}>{work.short[lang]}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
