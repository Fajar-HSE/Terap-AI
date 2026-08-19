export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  featureImage: string | null;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  author: string;
};
