import { Link } from "react-router-dom";
import styles from "./index.module.scss";

type FooterLink = {
  to: string;
  label: string;
};

const NAV_LINKS: FooterLink[] = [
  { to: '/services', label: 'Услуги' },
  { to: '/calculator', label: 'Калькулятор' },
  { to: '/works', label: 'Мои работы' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'Обо мне' },
  { to: '/contacts', label: 'Контакты' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <div className={styles.brand}>
            <span>Матвеев Мастер</span>
          </div>
          <p className={styles.muted}>
            Ремонтирую и обслуживаю окна и балконы. Работаю с 2014 года. Приеду
            на замер бесплатно.
          </p>
        </div>

        <div className={styles.col}>
          <div className={styles.title}>Навигация</div>
          <nav className={styles.links}>
            {NAV_LINKS.map((item) => (
              <Link key={item.to} to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.col}>
          <div className={styles.title}>Контакты</div>
          <div className={styles.links}>
            <a href="tel:+79000000000" className={styles.link}>
              +995 511-305-189
            </a>
            <a href="mailto:info@matveev-master.ru" className={styles.link}>
              sec.matkon@gmail.com
            </a>
            <span className={styles.muted}>г. Батуми</span>
            <span className={styles.muted}>Пн–Вс: 9:00 – 20:00</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {year} Матвеев Мастер. Все права защищены.</span>
          {/* <span className={styles.muted}>ИНН 000000000000</span> */}
        </div>
      </div>
    </footer>
  );
};
