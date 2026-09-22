import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const NAV = [
  { to: '/', label: 'Главная', end: true },
  { to: '/services', label: 'Услуги' },
  { to: '/calculator', label: 'Калькулятор' },
  { to: '/works', label: 'Мои работы' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'Обо мне' },
  { to: '/contacts', label: 'Контакты' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>◧</span>
          <span>Матвеев Мастер</span>
        </NavLink>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+79000000000" className={styles.phone}>
          +7 (900) 000-00-00
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
