import { useT } from "./context";

export const useLocalizedPath = () => {
  const { lang } = useT();

  return (path: string): string => {
    if (path === "/") return `/${lang}`;
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  };
};
