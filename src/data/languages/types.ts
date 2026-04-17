
export type Topic = {
  slug: string;
  title: string;
  explanation: string;
  category?: string; // Optional category for grouping
  isExternal?: boolean; // If true, this is a reference to another roadmap
  externalLink?: string; // Link to external roadmap or resource
  connectedRoadmap?: string; // Slug of connected roadmap that can be opened side by side
};

export type Subtopic = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  estimatedTime?: string;
};

export type Language = {
  slug: string;
  name: string;
  description?: string; // Optional description
  topics: Topic[];
  enabled?: boolean; // If false, language is hidden from display (default: true)
};
