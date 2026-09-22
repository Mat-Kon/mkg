import type { ServiceCategory } from "@/data/services";

type Props = {
  category: ServiceCategory;
  size?: number;
};

export const CategoryIcon = ({ category, size = 22 }: Props) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (category) {
    case "osteklenie":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      );
    case "remont":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5L21 12l-9 9-3-3 9-9-1.3-1.3z" />
          <path d="M3 21l3-3" />
        </svg>
      );
    case "otdelka":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="6" />
          <rect x="3" y="12" width="18" height="9" />
        </svg>
      );
    case "electrika":
      return (
        <svg {...common}>
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "dop":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
  }
};
