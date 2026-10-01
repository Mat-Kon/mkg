import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import type { NavKey } from "@/i18n/types";
import styles from "./index.module.scss";

const LINKS: { to: string; labelKey: NavKey }[] = [
  { to: "/", labelKey: "home" },
  { to: "/services", labelKey: "services" },
  { to: "/works", labelKey: "works" },
  { to: "/blog", labelKey: "blog" },
  { to: "/calculator", labelKey: "calculator" },
  { to: "/about", labelKey: "about" },
  { to: "/contacts", labelKey: "contacts" },
];

export const NotFoundPage = () => {
  const { t } = useT();
  const lp = useLocalizedPath();

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>{t.notFound.title}</h1>
        <p className={styles.text}>{t.notFound.text}</p>

        <div className={styles.actions}>
          <Link to={lp("/")} className={styles.primaryBtn}>
            {t.notFound.primary}
          </Link>
          <Link to={lp("/calculator")} className={styles.secondaryBtn}>
            {t.notFound.secondary}
          </Link>
        </div>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <Link key={l.to} to={lp(l.to)} className={styles.link}>
              {t.nav[l.labelKey]}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
