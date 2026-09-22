type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export const Schema = ({ data }: Props) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};
