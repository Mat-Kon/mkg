import { Link } from "react-router-dom";
import { CONTACTS } from "@/data/contacts";
import styles from "./index.module.scss";

type Props = {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonLink?: string;
  className?: string;
};

export const ContactCta = ({
  title = "Нужен мастер по окнам и балконам?",
  text = "Работаю в Батуми и рядом. Выезд на замер бесплатный.",
  buttonLabel = "Открыть калькулятор",
  buttonLink = "/calculator",
  className,
}: Props) => {
  return (
    <div className={`container ${styles.cta} ${className ?? ""}`}>
      <h2 className={styles.ctaTitle}>{title}</h2>
      <p className={styles.ctaText}>{text}</p>

      <div className={styles.ctaActions}>
        <Link to={buttonLink} className={styles.primaryBtn}>
          {buttonLabel}
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
  );
};
