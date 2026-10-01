import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import { CONTACTS } from "@/data/contacts";
import { WORKS } from "@/data/works";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ServiceIcon, type ServiceIconName } from "@/components/ServiceIcon";
import styles from "./index.module.scss";

type ServicePreview = {
  icon: ServiceIconName;
  labelKey:
    | "osteklenie"
    | "remont"
    | "steklopaket"
    | "otdelka"
    | "setka"
    | "montazh";
};

const SERVICES_PREVIEW: ServicePreview[] = [
  { icon: "osteklenie", labelKey: "osteklenie" },
  { icon: "remont", labelKey: "remont" },
  { icon: "steklopaket", labelKey: "steklopaket" },
  { icon: "otdelka", labelKey: "otdelka" },
  { icon: "setka", labelKey: "setka" },
  { icon: "montazh", labelKey: "montazh" },
];

const FEATURE_KEYS = ["control", "experience", "honest", "warranty"] as const;
const STEP_KEYS = ["request", "measure", "estimate", "work"] as const;

export const HomePage = () => {
  const { t, lang } = useT();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>{t.home.hero.badge}</div>
            <h1 className={styles.heroTitle}>{t.home.hero.title}</h1>
            <p className={styles.heroText}>{t.home.hero.text}</p>
            <div className={styles.heroActions}>
              <Link to="/calculator" className={styles.primaryBtn}>
                {t.home.hero.ctaPrimary}
              </Link>
              <a href={`tel:${CONTACTS.phone}`} className={styles.secondaryBtn}>
                {t.home.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardTitle}>{t.home.hero.cardTitle}</div>
            <p className={styles.heroCardText}>{t.home.hero.cardText}</p>
            <ul className={styles.heroCardList}>
              <li>{t.home.hero.cardList.measure}</li>
              <li>{t.home.hero.cardList.since}</li>
              <li>{t.home.hero.cardList.warranty}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className={styles.trust}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>10+</div>
            <div className={styles.trustLabel}>{t.home.trust.years}</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>0 ₾</div>
            <div className={styles.trustLabel}>{t.home.trust.freeVisit}</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>1 год</div>
            <div className={styles.trustLabel}>{t.home.trust.warranty}</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>500+</div>
            <div className={styles.trustLabel}>{t.home.trust.worksDone}</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t.home.services.title}</h2>
            <p className={styles.sectionSubtitle}>{t.home.services.subtitle}</p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES_PREVIEW.map((item) => (
              <div key={item.labelKey} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <ServiceIcon name={item.icon} size={26} />
                </div>
                <div className={styles.serviceTitle}>
                  {t.home.services.items[item.labelKey]}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link to="/services" className={styles.textLink}>
              {t.home.services.allServices}
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t.home.features.title}</h2>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURE_KEYS.map((key) => {
              const item = t.home.features.items[key];
              return (
                <div key={key} className={styles.featureCard}>
                  <div className={styles.featureTitle}>{item.title}</div>
                  <p className={styles.featureText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t.home.steps.title}</h2>
          </div>
          <div className={styles.stepsGrid}>
            {STEP_KEYS.map((key, i) => {
              const item = t.home.steps.items[key];
              const num = String(i + 1).padStart(2, "0");
              return (
                <div key={key} className={styles.stepCard}>
                  <div className={styles.stepNum}>{num}</div>
                  <div className={styles.stepTitle}>{item.title}</div>
                  <p className={styles.stepText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t.home.works.title}</h2>
            <p className={styles.sectionSubtitle}>{t.home.works.subtitle}</p>
          </div>

          <div className={styles.worksGrid}>
            {WORKS.slice(0, 3).map((work) => (
              <Link
                key={work.slug}
                to={`/works/${work.slug}`}
                className={styles.workCard}
              >
                <ImageWithFallback
                  src={work.cover}
                  alt={work.title[lang]}
                  className={styles.workImage}
                />
                <div className={styles.workOverlay} />
                <div className={styles.workContent}>
                  <div className={styles.workTitle}>{work.title[lang]}</div>
                  <div className={styles.workShort}>{work.short[lang]}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.sectionCta}>
            <Link to="/works" className={styles.textLink}>
              {t.home.works.allWorks}
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>{t.home.finalCta.title}</h2>
          <p className={styles.ctaText}>{t.home.finalCta.text}</p>
          <div className={styles.ctaActions}>
            <Link to="/calculator" className={styles.primaryBtn}>
              {t.home.finalCta.button}
            </Link>
          </div>

          <div className={styles.ctaContacts}>
            <a
              href={`https://wa.me/${CONTACTS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactBtn} ${styles.whatsapp}`}
            >
              {t.home.finalCta.whatsapp}
            </a>
            <a
              href={`https://t.me/${CONTACTS.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactBtn} ${styles.telegram}`}
            >
              {t.home.finalCta.telegram}
            </a>
            <a
              href={`mailto:${CONTACTS.email}`}
              className={`${styles.contactBtn} ${styles.email}`}
            >
              {t.home.finalCta.email}
            </a>
            <a
              href={`tel:${CONTACTS.phone}`}
              className={`${styles.contactBtn} ${styles.phone}`}
            >
              {t.home.finalCta.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
