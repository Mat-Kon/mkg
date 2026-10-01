import type { Lang } from "./types";
import ru from "./locales/ru.json";
import ka from "./locales/ka.json";

export type Translations = typeof ru;

export const TRANSLATIONS: Record<Lang, Translations> = {
  ru,
  ka: ka as Translations,
};
