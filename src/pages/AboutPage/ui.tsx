import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import { CONTACTS } from "@/data/contacts";
import { ContactCta } from "@/components/ContactCta";
import styles from "./index.module.scss";

const PRINCIPLE_KEYS = [
  "punctuality",
  "responsibility",
  "warranty",
  "quality",
] as const;

const SKILL_KEYS = [
  "osteklenie",
  "remont",
  "otdelka",
  "electrika",
  "metall",
  "small",
] as const;

export const AboutPage = () => {
  const { t } = useT();

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>{t.about.badge}</div>
            <h1 className={styles.title}>{t.about.name}</h1>
            <p className={styles.lead}>{t.about.lead}</p>
            <div className={styles.heroActions}>
              <Link to="/calculator" className={styles.primaryBtn}>
                {t.contactCta.button}
              </Link>
              <a href={`tel:${CONTACTS.phone}`} className={styles.secondaryBtn}>
                {t.contactCta.phone}
              </a>
            </div>
          </div>

          <div className={styles.photoWrap}>
            <img src="/images/master.jpg" alt={t.about.photoAlt} />
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className={styles.numbers}>
        <div className={`container ${styles.numbersGrid}`}>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>12</div>
            <div className={styles.numberLabel}>{t.about.numbers.years}</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>500+</div>
            <div className={styles.numberLabel}>
              {t.about.numbers.worksDone}
            </div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>100%</div>
            <div className={styles.numberLabel}>{t.about.numbers.honestly}</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.story}>
            <h2 className={styles.sectionTitle}>{t.about.story.title}</h2>
            <p className={styles.paragraph}>{t.about.story.p1}</p>
            <p className={styles.paragraph}>{t.about.story.p2}</p>
            <p className={styles.paragraph}>{t.about.story.p3}</p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t.about.principles.title}</h2>
            <p className={styles.sectionSubtitle}>
              {t.about.principles.subtitle}
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {PRINCIPLE_KEYS.map((key) => {
              const item = t.about.principles.items[key];
              return (
                <div key={key} className={styles.principleCard}>
                  <div className={styles.principleTitle}>{item.title}</div>
                  <p className={styles.principleText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t.about.skills.title}</h2>
            <p className={styles.sectionSubtitle}>{t.about.skills.subtitle}</p>
          </div>
          <div className={styles.skillsGrid}>
            {SKILL_KEYS.map((key) => {
              const item = t.about.skills.items[key];
              return (
                <div key={key} className={styles.skillCard}>
                  <div className={styles.skillTitle}>{item.title}</div>
                  <p className={styles.skillText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.diff}>
            <h2 className={styles.diffTitle}>{t.about.difference.title}</h2>
            <p className={styles.diffText}>{t.about.difference.p1}</p>
            <p className={styles.diffText}>{t.about.difference.p2}</p>
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
};
