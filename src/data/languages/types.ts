
export type Topic = {
  slug: string;
  title: string;
  explanation: string;
  category?: string; // Optional category for grouping
  isExternal?: boolean; // If true, this is a reference to another roadmap
  externalLink?: string; // Link to external roadmap or resource
};

export type Language = {
  slug: string;
  name: string;
  description?: string; // Optional description
  topics: Topic[];
};
