import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const LINKS: { to: string; label: string }[] = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги и цены" },
  { to: "/works", label: "Мои работы" },
  { to: "/calculator", label: "Калькулятор" },
  { to: "/about", label: "Обо мне" },
  { to: "/contacts", label: "Контакты" },
];

export const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.text}>
          Возможно, страница переехала или вы ошиблись в адресе. Попробуйте
          начать с главной или перейдите в нужный раздел.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            На главную
          </Link>
          <Link to="/calculator" className={styles.secondaryBtn}>
            Рассчитать стоимость
          </Link>
        </div>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
