
'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { languages } from '@/app/data';
import Link from 'next/link';
import { ChevronDown, Code } from 'lucide-react';

export function LanguageSwitcher({
  currentLanguageSlug,
}: {
  currentLanguageSlug?: string;
}) {
  const currentLanguage = languages.find(
    (lang) => lang.slug === currentLanguageSlug
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Code className="mr-2 h-4 w-4" />
          {currentLanguage?.name || 'Select Language'}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.slug} asChild>
            <Link href={`/${lang.slug}/learning-plan`}>{lang.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
