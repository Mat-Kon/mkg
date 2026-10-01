import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES, type Service, type ServiceCategory } from "@/data/services";
import { formatPrice } from "@/utils/format";
import { useT } from "@/i18n/context";
import { CONTACTS } from "@/data/contacts";
import { CategoryIcon } from "@/components/CategoryIcon";
import styles from "./index.module.scss";

const CATEGORY_ORDER: ServiceCategory[] = [
  "osteklenie",
  "remont",
  "otdelka",
  "electrika",
  "dop",
];

const groupByCategory = (): Record<ServiceCategory, Service[]> => {
  const grouped = {
    osteklenie: [],
    remont: [],
    otdelka: [],
    electrika: [],
    dop: [],
  } as Record<ServiceCategory, Service[]>;

  SERVICES.forEach((s) => {
    grouped[s.category].push(s);
  });

  return grouped;
};

export const ServicesPage = () => {
  const { t, lang } = useT();
  const grouped = groupByCategory();

  const [open, setOpen] = useState<Record<ServiceCategory, boolean>>({
    osteklenie: true,
    remont: false,
    otdelka: false,
    electrika: false,
    dop: false,
  });

  const toggle = (cat: ServiceCategory) => {
    setOpen((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className={styles.page}>
      <div className={`container ${styles.head}`}>
        <h1 className={styles.title}>{t.services.title}</h1>
        <p className={styles.subtitle}>{t.services.subtitle}</p>
      </div>

      <div className={`container ${styles.categories}`}>
        {CATEGORY_ORDER.map((cat) => {
          const items = grouped[cat];
          if (items.length === 0) return null;
          const isOpen = open[cat];

          return (
            <section key={cat} className={styles.category}>
              <button
                type="button"
                className={styles.categoryHeader}
                onClick={() => toggle(cat)}
                aria-expanded={isOpen}
              >
                <span className={styles.categoryIcon}>
                  <CategoryIcon category={cat} />
                </span>
                <span className={styles.categoryTitle}>
                  {t.services.categories[cat]}
                </span>
                <span className={styles.categoryCount}>{items.length}</span>
                <span
                  className={`${styles.categoryChevron} ${
                    isOpen ? styles.categoryChevronOpen : ""
                  }`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className={styles.list}>
                  {items.map((s) => (
                    <div key={s.id} className={styles.row}>
                      <div className={styles.rowName}>{s.name[lang]}</div>
                      <div className={styles.rowUnit}>{s.unit}</div>
                      <div className={styles.rowPrice}>
                        {formatPrice(s.price)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        <div className={styles.note}>
          <strong>{t.services.note.split(":")[0]}:</strong>
          {t.services.note.split(":").slice(1).join(":")}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>{t.services.ctaTitle}</h2>
          <p className={styles.ctaText}>{t.services.ctaText}</p>
          <div className={styles.ctaActions}>
            <Link to="/calculator" className={styles.primaryBtn}>
              {t.services.ctaButton}
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
    </div>
  );
};
