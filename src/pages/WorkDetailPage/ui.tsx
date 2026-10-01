import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useT } from "@/i18n/context";
import { findWork } from "@/data/works";
import { CONTACTS } from "@/data/contacts";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import styles from "./index.module.scss";

export const WorkDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useT();
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
          {t.workDetail.backLink}
        </Link>
      </div>

      <div className={styles.head}>
        <h1 className={styles.title}>{work.title[lang]}</h1>
        <p className={styles.short}>{work.short[lang]}</p>
      </div>

      <div className={`container ${styles.gallery}`}>
        <div className={styles.mainImageWrap}>
          <ImageWithFallback
            src={active.src}
            alt={active.alt[lang]}
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
                aria-label={`${work.title[lang]} — ${i + 1}`}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt[lang]}
                  className={styles.thumbImage}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.description}>
        <h2 className={styles.descTitle}>{t.workDetail.whatWasDone}</h2>
        <p className={styles.descText}>{work.description[lang]}</p>
      </div>

      <div className={`container ${styles.cta}`}>
        <h2 className={styles.ctaTitle}>{t.workDetail.similarCta}</h2>
        <p className={styles.ctaText}>{t.workDetail.similarText}</p>
        <div className={styles.ctaActions}>
          <Link to="/calculator" className={styles.primaryBtn}>
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
    </div>
  );
};
