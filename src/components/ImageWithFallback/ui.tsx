import { useState } from "react";
import styles from "./index.module.scss";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export const ImageWithFallback = ({
  src,
  alt,
  className,
  loading = "lazy",
}: Props) => {
  const [failed, setFailed] = useState<boolean>(false);

  if (failed) {
    return (
      <div
        className={`${styles.placeholder} ${className ?? ""}`}
        aria-label={alt}
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className={styles.label}>Фото скоро появится</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
};
