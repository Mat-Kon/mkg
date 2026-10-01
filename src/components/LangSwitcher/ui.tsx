import { useNavigate, useLocation } from "react-router-dom";
import { useT } from "@/i18n/context";
import { LANGS, LANG_LABELS, type Lang } from "@/i18n/types";
import styles from "./index.module.scss";

export const LangSwitcher = () => {
  const { lang, setLang } = useT();
  const navigate = useNavigate();
  const location = useLocation();

  const switchTo = (next: Lang) => {
    if (next === lang) return;

    setLang(next);

    // Меняем языковой префикс в URL, сохраняя остальной путь.
    // `/ru/blog/post` → `/ka/blog/post`
    // `/ru` → `/ka`
    const rest = location.pathname.replace(/^\/(ru|ka)(?=\/|$)/, "");
    navigate(`/${next}${rest}`, { replace: true });
  };

  return (
    <div className={styles.switcher} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={`${styles.btn} ${l === lang ? styles.btnActive : ""}`}
          onClick={() => switchTo(l)}
          aria-pressed={l === lang}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
};
