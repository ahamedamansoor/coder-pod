'use client';
'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';

export function DsaContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  return <GenericContentDisplay topic={topic} language={language} />;
}
