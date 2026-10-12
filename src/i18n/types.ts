export type Lang = "ru" | "ka";

export const LANGS: Lang[] = ["ru", "ka"];

export const DEFAULT_LANG: Lang = "ru";

export const LANG_LABELS: Record<Lang, string> = {
  ru: "RU",
  ka: "KA",
};

export type NavKey =
  | "home"
  | "services"
  | "calculator"
  | "works"
  | "blog"
  | "about"
  | "contacts";
