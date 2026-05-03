import type { Language } from './types';
import { rxjsSections } from '@/data/rxjs-roadmap';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const rxjsTopics = rxjsSections.flatMap((section) =>
  section.items.map((item) => ({
    slug: `${section.slug}-${slugify(item)}`,
    title: item,
    explanation: section.title,
    category: section.title,
  }))
);

export const rxjs: Language = {
  slug: 'rxjs',
  name: 'RxJS',
  topics: [
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'Structured RxJS roadmap from observables to real-world patterns.',
    },
    {
      slug: 'interview-questions',
      title: 'Interview Q&A',
      explanation: 'A curated list of common RxJS interview questions and answers.',
    },
    ...rxjsTopics,
  ],
};
