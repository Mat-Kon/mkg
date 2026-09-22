import { Link } from "react-router-dom";
import { CONTACTS } from "@/data/contacts";
import styles from "./index.module.scss";

type Principle = {
  title: string;
  text: string;
};

type Skill = {
  title: string;
  text: string;
};

const PRINCIPLES: Principle[] = [
  {
    title: "Пунктуальность",
    text: "Приезжаю в назначенное время. Если задерживаюсь — предупреждаю заранее.",
  },
  {
    title: "Ответственность",
    text: "Делаю сам или с проверенным помощником. Отвечаю за результат лично.",
  },
  {
    title: "Гарантия",
    text: "На все работы даю гарантию. Что-то пошло не так — приеду и исправлю.",
  },
  {
    title: "Качество",
    text: "Делаю так, чтобы не пришлось переделывать. Лучше чуть дольше, но на совесть.",
  },
];

const SKILLS: Skill[] = [
  {
    title: "Остекление",
    text: "Балконы, лоджии, окна — от простых до сложных конструкций.",
  },
  {
    title: "Ремонт окон ПВХ",
    text: "Регулировка, замена фурнитуры, стеклопакетов, уплотнителей.",
  },
  {
    title: "Отделка балконов",
    text: "Стены, потолок, пол, утепление, финишная отделка под ключ.",
  },
  {
    title: "Электрика",
    text: "Проводка, вывод кабеля, подключение точек на балконе.",
  },
  {
    title: "Металлоконструкции",
    text: "Сварочные работы, крыши, козырьки, усиление конструкций.",
  },
  {
    title: "Мелкий ремонт",
    text: "Плинтусы, подоконники, отливы, москитные сетки — всё по дому.",
  },
];

export const AboutPage = () => {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Мастер · Батуми</div>
            <h1 className={styles.title}>Матвеев Константин</h1>
            <p className={styles.lead}>
              Ремонтирую и обслуживаю окна и балконы с 2014 года. Работаю в
              Батуми и рядом — сам, без посредников.
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

          <div className={styles.photoWrap}>
            {/* Замени на своё фото:
                <img src="/images/master.jpg" alt="Матвеев Константин" /> */}
            <img src="/images/master.jpg" alt="Матвеев Константин" />
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className={styles.numbers}>
        <div className={`container ${styles.numbersGrid}`}>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>12</div>
            <div className={styles.numberLabel}>лет опыта</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>5</div>
            <div className={styles.numberLabel}>объектов в месяц</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>500+</div>
            <div className={styles.numberLabel}>выполненных работ</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.numberValue}>100%</div>
            <div className={styles.numberLabel}>работаю на совесть</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.story}>
            <h2 className={styles.sectionTitle}>Обо мне</h2>
            <p className={styles.paragraph}>
              По образованию я инженер-электромеханик. Но по-настоящему нашёл
              себя в работе руками — когда видишь, как из старого балкона
              получается тёплое и аккуратное помещение, это лучше любой бумажной
              работы.
            </p>
            <p className={styles.paragraph}>
              Начинал в 2014 году. С тех пор сделал сотни объектов. Работаю в
              основном сам, иногда с проверенным помощником — но за результат
              всегда отвечаю лично.
            </p>
            <p className={styles.paragraph}>
              В этой сфере, к сожалению, встречаются разные подходы к работе.
              Кто-то делает быстро и забывает, кто-то — не берётся за сложное,
              кто-то пропадает после монтажа. Я выбрал для себя другой путь:
              работать честно и оставаться на связи, даже когда работа уже
              сдана. Потому что репутация важнее одной сделки.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Мои принципы</h2>
            <p className={styles.sectionSubtitle}>
              Четыре вещи, на которых держится вся моя работа.
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} className={styles.principleCard}>
                <div className={styles.principleTitle}>{p.title}</div>
                <p className={styles.principleText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Что я умею</h2>
            <p className={styles.sectionSubtitle}>
              Полный цикл работ по окнам и балконам — от монтажа до финишной
              отделки.
            </p>
          </div>
          <div className={styles.skillsGrid}>
            {SKILLS.map((s) => (
              <div key={s.title} className={styles.skillCard}>
                <div className={styles.skillTitle}>{s.title}</div>
                <p className={styles.skillText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.diff}>
            <h2 className={styles.diffTitle}>
              Чем я отличаюсь от оконных фирм
            </h2>
            <p className={styles.diffText}>
              Мне не всё равно, что будет с вашим балконом или окном после
              монтажа. Я не просто ставлю стекло и уезжаю — я рассказываю, что и
              как лучше сделать, чтобы результат радовал вас годы. Иногда проще
              сразу заложить чуть больше, чем переделывать через год.
            </p>
            <p className={styles.diffText}>
              Поэтому ко мне возвращаются и рекомендуют друзьям.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Хотите рассчитать свой объект?</h2>
          <p className={styles.ctaText}>
            Соберите нужные услуги в калькуляторе — покажу цену сразу.
          </p>
          <div className={styles.ctaActions}>
            <Link to="/calculator" className={styles.primaryBtnLight}>
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
    </div>
  );
};
