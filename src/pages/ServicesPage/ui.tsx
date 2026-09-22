import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SERVICES,
  CATEGORY_LABELS,
  type Service,
  type ServiceCategory,
} from "@/data/services";
import { formatPrice } from "@/utils/format";
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
        <h1 className={styles.title}>Услуги и цены</h1>
        <p className={styles.subtitle}>
          Ниже — цены на работы. Материалы считаются отдельно. Доставка и подъём
          материалов — по договорённости.
        </p>
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
                  {CATEGORY_LABELS[cat]}
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
                      <div className={styles.rowName}>{s.name}</div>
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
          <strong>Важно:</strong> указанные цены — за работу. Стоимость
          материалов, доставки и подъёма на этаж рассчитывается отдельно и
          зависит от объекта.
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Хотите узнать точную стоимость?</h2>
          <p className={styles.ctaText}>
            Соберите нужные услуги в калькуляторе — покажу цену сразу.
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
    </div>
  );
};
