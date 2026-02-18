export interface BlogPostAttributes {
  title: string;
  date: string; // ISO 8601 e.g. "2026-02-18"
  description: string;
  slug: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
}

export interface DocPageAttributes {
  title: string;
  order: number; // sidebar sort order
  description: string;
  draft?: boolean;
}
