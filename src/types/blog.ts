export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] };

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readingTime: number;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  blocks: BlogBlock[];
};

export type BlogIndex = {
  posts: BlogPostMeta[];
};
