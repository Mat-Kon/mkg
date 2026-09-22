import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findWork } from "@/data/works";
import { CONTACTS } from "@/data/contacts";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import styles from "./index.module.scss";

export const WorkDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = slug ? findWork(slug) : undefined;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!work) {
    return <NotFoundPage />;
  }

  const active = work.images[activeIndex];

  return (
    <div className={styles.page}>
      <div className={`container ${styles.breadcrumbs}`}>
        <Link to="/works" className={styles.backLink}>
          ← Все работы
        </Link>
      </div>

      <div className={`container ${styles.head}`}>
        <h1 className={styles.title}>{work.title}</h1>
        <p className={styles.short}>{work.short}</p>
      </div>

      <div className={`container ${styles.gallery}`}>
        <div className={styles.mainImageWrap}>
          <ImageWithFallback
            src={active.src}
            alt={active.alt}
            className={styles.mainImage}
            loading="eager"
          />
        </div>

        {work.images.length > 1 && (
          <div className={styles.thumbs}>
            {work.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`${styles.thumb} ${
                  i === activeIndex ? styles.thumbActive : ""
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Показать фото ${i + 1}`}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className={styles.thumbImage}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={`container ${styles.description}`}>
        <h2 className={styles.descTitle}>Что было сделано</h2>
        <p className={styles.descText}>{work.description}</p>
      </div>

      <div className={`container ${styles.cta}`}>
        <h2 className={styles.ctaTitle}>Хотите похожий результат?</h2>
        <p className={styles.ctaText}>
          Рассчитайте стоимость своих работ — покажу цену сразу.
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
    </div>
  );
};
