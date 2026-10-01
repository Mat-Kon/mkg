import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import type { NavKey } from "@/i18n/types";
import { CONTACTS } from "@/data/contacts";
import styles from "./index.module.scss";

type FooterLink = {
  to: string;
  labelKey: NavKey;
};

const NAV_LINKS: FooterLink[] = [
  { to: "/services", labelKey: "services" },
  { to: "/calculator", labelKey: "calculator" },
  { to: "/works", labelKey: "works" },
  { to: "/blog", labelKey: "blog" },
  { to: "/about", labelKey: "about" },
  { to: "/contacts", labelKey: "contacts" },
];

export const Footer = () => {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <div className={styles.brand}>
            <span>Matveev Master</span>
          </div>
          <p className={styles.muted}>{t.footer.tagline}</p>
        </div>

        <div className={styles.col}>
          <div className={styles.title}>{t.footer.navTitle}</div>
          <nav className={styles.links}>
            {NAV_LINKS.map((item) => (
              <Link key={item.to} to={item.to} className={styles.link}>
                {t.nav[item.labelKey]}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.col}>
          <div className={styles.title}>{t.footer.contactsTitle}</div>
          <div className={styles.links}>
            <a href={`tel:${CONTACTS.phone}`} className={styles.link}>
              {CONTACTS.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACTS.email}`} className={styles.link}>
              {CONTACTS.email}
            </a>
            <span className={styles.muted}>{t.footer.address}</span>
            <span className={styles.muted}>{t.footer.hours}</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>
            © {year} {t.footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};
