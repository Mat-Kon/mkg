export type ServiceIconName =
  | "osteklenie"
  | "remont"
  | "steklopaket"
  | "otdelka"
  | "setka"
  | "montazh";

type Props = {
  name: ServiceIconName;
  size?: number;
};

export const ServiceIcon = ({ name, size = 28 }: Props) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "osteklenie":
      // Балкон / окно с рамами
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="21" x2="21" y2="23" />
        </svg>
      );

    case "remont":
      // Гаечный ключ + отвёртка
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5L21 12l-9 9-3-3 9-9-1.3-1.3z" />
          <path d="M3 21l3-3" />
          <circle cx="6" cy="18" r="1.5" />
        </svg>
      );

    case "steklopaket":
      // Два вложенных прямоугольника — стеклопакет
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <rect x="6.5" y="7.5" width="11" height="9" />
          <line x1="12" y1="4" x2="12" y2="7.5" />
        </svg>
      );

    case "otdelka":
      // Валик / кисть
      return (
        <svg {...common}>
          <rect x="3" y="4" width="14" height="6" rx="1" />
          <path d="M17 7h3v6h-8v4" />
          <rect x="10.5" y="17" width="3" height="4" rx="0.5" />
        </svg>
      );

    case "setka":
      // Сетка — решётка 3×3
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      );

    case "montazh":
      // Молоток + планка (монтаж подоконника/плинтуса)
      return (
        <svg {...common}>
          <path d="M14 4l6 6-3 3-6-6 3-3z" />
          <path d="M11 7L3 15v3h3l8-8" />
        </svg>
      );
  }
};
