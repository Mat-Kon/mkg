import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
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
  title,
  text,
  buttonLabel,
  buttonLink = "/calculator",
  className,
}: Props) => {
  const { t } = useT();
  const lp = useLocalizedPath();

  return (
    <div className={`container ${styles.cta} ${className ?? ""}`}>
      <h2 className={styles.ctaTitle}>{title ?? t.contactCta.title}</h2>
      <p className={styles.ctaText}>{text ?? t.contactCta.text}</p>

      <div className={styles.ctaActions}>
        <Link to={lp(buttonLink)} className={styles.primaryBtn}>
          {buttonLabel ?? t.contactCta.button}
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
  );
};
