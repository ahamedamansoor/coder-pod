import type { Language } from './types';
import { dsaRoadmapSections } from '@/data/dsa-roadmap';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const dsaTopics = dsaRoadmapSections.flatMap((section) =>
  section.groups.flatMap((group) =>
    group.items.map((item) => ({
      slug: `${section.slug}-${slugify(group.title)}-${slugify(item)}`,
      title: item,
      explanation: `${group.title} · ${section.title}`,
      category: `${section.title} · ${group.title}`,
    }))
  )
);

export const dsa: Language = {
  slug: 'dsa',
  name: 'Data Structures & Algorithms',
  topics: [
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'A comprehensive roadmap covering arrays through advanced topics like tries, segment trees, and union-find.',
    },
    ...dsaTopics,
  ],
};
