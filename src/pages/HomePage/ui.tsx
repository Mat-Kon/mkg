import { Link } from "react-router-dom";
import { CONTACTS } from "@/data/contacts";
import { WORKS } from "@/data/works";
import styles from "./index.module.scss";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type Feature = {
  title: string;
  text: string;
};

type Step = {
  num: string;
  title: string;
  text: string;
};

type Review = {
  name: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    title: "Личный контроль",
    text: "Работаю сам, без посредников. Вы всегда знаете, кто и что делает.",
  },
  {
    title: "Опыт с 2010 года",
    text: "14 лет ремонтирую окна и балконы. Знаю, где что может пойти не так.",
  },
  {
    title: "Честная смета",
    text: "Считаю при вас, без «дополнительных» сюрпризов в конце.",
  },
  {
    title: "Гарантия на работы",
    text: "Даю гарантию на все виды работ. Что-то не так — приеду и исправлю.",
  },
];

const STEPS: Step[] = [
  {
    num: "01",
    title: "Заявка",
    text: "Позвоните, напишите в WhatsApp или Telegram — отвечу быстро.",
  },
  {
    num: "02",
    title: "Замер",
    text: "Приеду на объект бесплатно, посмотрю, что нужно сделать.",
  },
  {
    num: "03",
    title: "Смета",
    text: "Посчитаю стоимость и сроки. Согласуем — начну работу.",
  },
  {
    num: "04",
    title: "Работы",
    text: "Делаю аккуратно и в срок. Убираю за собой.",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Ирина",
    text: "Отрегулировал все окна, заменил уплотнители. Быстро, аккуратно, по делу. Рекомендую.",
  },
  {
    name: "Артём",
    text: "Отделал балкон под ключ. Всё чётко по смете, никаких накруток. Доволен результатом.",
  },
  {
    name: "Марина",
    text: "Помог с остеклением и заменил стеклопакет. Приятно иметь дело с мастером, а не с фирмой.",
  },
];

const SERVICES_PREVIEW = [
  "Остекление балконов и лоджий",
  "Ремонт и регулировка окон ПВХ",
  "Замена стеклопакетов и фурнитуры",
  "Отделка балконов под ключ",
  "Москитные сетки и отливы",
  "Монтаж подоконников и плинтусов",
];

export const HomePage = () => {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Частный мастер · Тбилиси</div>
            <h1 className={styles.heroTitle}>
              Ремонт и обслуживание окон и балконов
            </h1>
            <p className={styles.heroText}>
              Приеду, посмотрю, посчитаю. Сделаю аккуратно и в срок. Работаю
              сам, без посредников — вы платите только за работу.
            </p>
            <div className={styles.heroActions}>
              <Link to="/calculator" className={styles.primaryBtn}>
                Рассчитать стоимость
              </Link>
              <a href={`tel:${CONTACTS.phone}`} className={styles.secondaryBtn}>
                Позвонить
              </a>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardTitle}>Бесплатный выезд</div>
            <p className={styles.heroCardText}>
              Приеду на замер, посмотрю объём и назову точную цену. Без
              обязательств.
            </p>
            <ul className={styles.heroCardList}>
              <li>Замер и смета — бесплатно</li>
              <li>Работаю с 2010 года</li>
              <li>Гарантия на все работы</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className={styles.trust}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>14+</div>
            <div className={styles.trustLabel}>лет опыта</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>0 ₾</div>
            <div className={styles.trustLabel}>за выезд и замер</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>1 год</div>
            <div className={styles.trustLabel}>гарантия на работы</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>200+</div>
            <div className={styles.trustLabel}>выполненных объектов</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Чем я могу помочь</h2>
            <p className={styles.sectionSubtitle}>
              Ремонт, обслуживание и отделка окон и балконов — от мелких работ
              до проектов под ключ.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES_PREVIEW.map((title) => (
              <div key={title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>◧</div>
                <div className={styles.serviceTitle}>{title}</div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link to="/services" className={styles.textLink}>
              Все услуги и цены →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Почему меня выбирают</h2>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureTitle}>{f.title}</div>
                <p className={styles.featureText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Как я работаю</h2>
          </div>
          <div className={styles.stepsGrid}>
            {STEPS.map((s) => (
              <div key={s.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Отзывы клиентов</h2>
          </div>
          <div className={styles.reviewsGrid}>
            {REVIEWS.map((r) => (
              <div key={r.name} className={styles.reviewCard}>
                <p className={styles.reviewText}>«{r.text}»</p>
                <div className={styles.reviewName}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Мои работы</h2>
            <p className={styles.sectionSubtitle}>
              Несколько объектов, которые я сделал в Батуми и рядом.
            </p>
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
                  alt={work.title}
                  className={styles.workImage}
                />
                <div className={styles.workOverlay} />
                <div className={styles.workContent}>
                  <div className={styles.workTitle}>{work.title}</div>
                  <div className={styles.workShort}>{work.short}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.sectionCta}>
            <Link to="/works" className={styles.textLink}>
              Все работы →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>
            Узнайте стоимость работ за 1 минуту
          </h2>
          <p className={styles.ctaText}>
            Выберите нужные услуги и укажите объём — покажу цену сразу.
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
      </section>
    </>
  );
};
