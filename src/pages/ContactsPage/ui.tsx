import { CONTACTS } from "@/data/contacts";
import styles from "./index.module.scss";

const CONTACT_ITEMS = [
  {
    key: "phone",
    label: "Телефон",
    value: CONTACTS.phoneDisplay,
    href: `tel:${CONTACTS.phone}`,
    icon: "📞",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "Написать в WhatsApp",
    href: `https://wa.me/${CONTACTS.whatsapp}`,
    icon: "💬",
    external: true,
  },
  {
    key: "telegram",
    label: "Telegram",
    value: `@${CONTACTS.telegram}`,
    href: `https://t.me/${CONTACTS.telegram}`,
    icon: "✈️",
    external: true,
  },
  {
    key: "email",
    label: "Email",
    value: CONTACTS.email,
    href: `mailto:${CONTACTS.email}`,
    icon: "✉️",
  },
];

export const ContactsPage = () => {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.head}`}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.subtitle}>
          Свяжитесь удобным способом — отвечу в течение рабочего дня. Работаю в
          Батуми и рядом, выезд на замер бесплатный.
        </p>
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <h2 className={styles.sectionTitle}>Как со мной связаться</h2>
          <div className={styles.contactList}>
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>{item.icon}</span>
                <span className={styles.contactBody}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  <span className={styles.contactValue}>{item.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoTitle}>Режим работы</div>
            <div className={styles.infoRow}>
              <span>Понедельник – Воскресенье</span>
              <span>9:00 – 21:00</span>
            </div>
            <div className={styles.infoRow}>
              <span>Выезд на замер</span>
              <span>по договорённости</span>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoTitle}>География работ</div>
            <div className={styles.infoText}>
              Батуми и ближайшие населённые пункты. По сложным проектам выезжаю
              в соседние города — уточняйте по телефону.
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.map}>
            <div className={styles.map}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5632b6c869d7996c291314fc87d8ce705298b6d3ecde06ea4e07de316fe8f6a&source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта — Батуми"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.final}`}>
        <div className={styles.finalCard}>
          <h2 className={styles.finalTitle}>Не знаете, с чего начать?</h2>
          <p className={styles.finalText}>
            Соберите нужные услуги в калькуляторе — покажу стоимость сразу. Или
            напишите мне в любой мессенджер, расскажу, что и как лучше.
          </p>
          <div className={styles.finalActions}>
            <a
              href={`https://wa.me/${CONTACTS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.whatsapp}`}
            >
              Написать в WhatsApp
            </a>
            <a
              href={`https://t.me/${CONTACTS.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.telegram}`}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
