import { useT } from "@/i18n/context";
import { CONTACTS } from "@/data/contacts";
import styles from "./index.module.scss";

export const ContactsPage = () => {
  const { t } = useT();

  const contactItems = [
    {
      key: "phone",
      label: t.contacts.phoneLabel,
      value: CONTACTS.phoneDisplay,
      href: `tel:${CONTACTS.phone}`,
      icon: "📞",
      external: false,
    },
    {
      key: "whatsapp",
      label: t.contacts.whatsappLabel,
      value: t.contacts.whatsappValue,
      href: `https://wa.me/${CONTACTS.whatsapp}`,
      icon: "💬",
      external: true,
    },
    {
      key: "telegram",
      label: t.contacts.telegramLabel,
      value: `@${CONTACTS.telegram}`,
      href: `https://t.me/${CONTACTS.telegram}`,
      icon: "✈️",
      external: true,
    },
    {
      key: "email",
      label: t.contacts.emailLabel,
      value: CONTACTS.email,
      href: `mailto:${CONTACTS.email}`,
      icon: "✉️",
      external: false,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={`container ${styles.head}`}>
        <h1 className={styles.title}>{t.contacts.title}</h1>
        <p className={styles.subtitle}>{t.contacts.subtitle}</p>
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <h2 className={styles.sectionTitle}>{t.contacts.howTitle}</h2>
          <div className={styles.contactList}>
            {contactItems.map((item) => (
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
            <div className={styles.infoTitle}>{t.contacts.hoursTitle}</div>
            <div className={styles.infoRow}>
              <span>{t.contacts.hoursDays}</span>
              <span>{t.contacts.hoursTime}</span>
            </div>
            <div className={styles.infoRow}>
              <span>{t.contacts.hoursVisit}</span>
              <span>{t.contacts.hoursVisitValue}</span>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoTitle}>{t.contacts.geoTitle}</div>
            <div className={styles.infoText}>{t.contacts.geoText}</div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5632b6c869d7996c291314fc87d8ce705298b6d3ecde06ea4e07de316fe8f6a&source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title={t.contacts.mapTitle}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className={`container ${styles.final}`}>
        <div className={styles.finalCard}>
          <h2 className={styles.finalTitle}>{t.contacts.finalTitle}</h2>
          <p className={styles.finalText}>{t.contacts.finalText}</p>
          <div className={styles.finalActions}>
            <a
              href={`https://wa.me/${CONTACTS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.whatsapp}`}
            >
              {t.contacts.finalWhatsapp}
            </a>
            <a
              href={`https://t.me/${CONTACTS.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.telegram}`}
            >
              {t.contacts.finalTelegram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
