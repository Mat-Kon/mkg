/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
import { TRANSLATIONS, type Translations } from "./index";

type I18nContextValue = {
  lang: "ru";
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const VALUE: I18nContextValue = {
  lang: "ru",
  t: TRANSLATIONS.ru,
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  return <I18nContext.Provider value={VALUE}>{children}</I18nContext.Provider>;
};

export const useT = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useT must be used within I18nProvider");
  }
  return ctx;
};
