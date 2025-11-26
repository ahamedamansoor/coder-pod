
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

  const frontendSlugs = new Set(['html', 'css', 'scss', 'javascript', 'react', 'rxjs']);
  const backendSlugs = new Set(['java', 'spring', 'spring-boot']);
  const dsaSlugs = new Set(['dsa']);

  const frontendLanguages = languages.filter((lang) => frontendSlugs.has(lang.slug));
  const backendLanguages = languages.filter((lang) => backendSlugs.has(lang.slug));
  const otherLanguages = languages.filter(
    (lang) => !frontendSlugs.has(lang.slug) && !backendSlugs.has(lang.slug) && !dsaSlugs.has(lang.slug)
  );
  const dsaLanguages = languages.filter((lang) => dsaSlugs.has(lang.slug));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full border border-blue-200/70 bg-white/80 text-blue-700 shadow-sm hover:shadow-md hover:bg-white transition-all dark:border-blue-900/40 dark:bg-slate-900/70 dark:text-blue-200">
          <Code className="mr-2 h-4 w-4" />
          {currentLanguage?.name || 'Select Language'}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 space-y-2">
        {frontendLanguages.length > 0 && (
          <div>
            <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase">Frontend</p>
            {frontendLanguages.map((lang) => (
              <DropdownMenuItem key={lang.slug} asChild>
                <Link href={`/${lang.slug}/learning-plan`}>{lang.name}</Link>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        {backendLanguages.length > 0 && (
          <div>
            <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase">Backend</p>
            {backendLanguages.map((lang) => (
              <DropdownMenuItem key={lang.slug} asChild>
                <Link href={`/${lang.slug}/learning-plan`}>{lang.name}</Link>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        {dsaLanguages.length > 0 && (
          <div>
            <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase">DSA</p>
            {dsaLanguages.map((lang) => (
              <DropdownMenuItem key={lang.slug} asChild>
                <Link href={`/${lang.slug}/learning-plan`}>{lang.name}</Link>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        {otherLanguages.length > 0 && (
          <div>
            <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase">Other</p>
            {otherLanguages.map((lang) => (
              <DropdownMenuItem key={lang.slug} asChild>
                <Link href={`/${lang.slug}/learning-plan`}>{lang.name}</Link>
              </DropdownMenuItem>
            ))}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
