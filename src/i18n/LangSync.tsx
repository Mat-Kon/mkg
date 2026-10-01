
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useT } from "./context";
import { DEFAULT_LANG, type Lang } from "./types";

const isValidLang = (value: string | undefined): value is Lang =>
  value === "ru" || value === "ka";

export const LangSync = () => {
  const { lang: urlLang } = useParams<{ lang: string }>();
  const { lang, setLang } = useT();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isValidLang(urlLang)) {
      if (urlLang !== lang) {
        setLang(urlLang);
      }
    } else if (urlLang) {
      // Некорректный префикс — редирект на дефолтный язык
      const rest = location.pathname.replace(/^\/[^/]+/, "");
      navigate(`/${DEFAULT_LANG}${rest}`, { replace: true });
    }
  }, [urlLang, lang, setLang, navigate, location.pathname]);

  return null;
};
