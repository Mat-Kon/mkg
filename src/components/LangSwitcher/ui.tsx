import { useT } from "@/i18n/context";
import { LANGS, LANG_LABELS } from "@/i18n/types";
import styles from "./index.module.scss";

export const LangSwitcher = () => {
  const { lang, setLang } = useT();

  return (
    <div className={styles.switcher} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={`${styles.btn} ${l === lang ? styles.btnActive : ""}`}
          onClick={() => setLang(l)}
          aria-pressed={l === lang}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
};
