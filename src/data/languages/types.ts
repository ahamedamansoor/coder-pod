
export type Topic = {
  slug: string;
  title: string;
  explanation: string;
  category?: string; // Optional category for grouping
};

export type Language = {
  slug:string;
  name: string;
  topics: Topic[];
};
