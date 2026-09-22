const GEL = "₾";

export const formatPrice = (value: number): string => {
  const rounded = Math.round(value);
  return `${rounded.toLocaleString("ru-RU")} ${GEL}`;
};
