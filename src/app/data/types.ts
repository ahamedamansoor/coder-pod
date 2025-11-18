
export type Topic = {
  slug: string;
  title: string;
  explanation: string;
};

export type Language = {
  slug:string;
  name: string;
  topics: Topic[];
};
