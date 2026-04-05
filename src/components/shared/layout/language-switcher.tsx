
'use client';
import { useState, useMemo } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { enabledLanguages as languages } from '@/data/languages';
import { useRouter } from 'next/navigation';
import { ChevronDown, Code, Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({
  currentLanguageSlug,
}: {
  currentLanguageSlug?: string;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const currentLanguage = languages.find(
    (lang) => lang.slug === currentLanguageSlug
  );

  const handleLanguageSelect = (slug: string) => {
    router.push(`/languages/${slug}/learning-plan`);
    setSearchQuery(''); // Reset search on selection
  };

  const frontendSlugs = new Set(['html', 'css', 'scss', 'tailwind', 'javascript', 'typescript', 'react', 'vue', 'nextjs', 'angular', 'rxjs']);
  const backendSlugs = new Set(['java', 'spring', 'spring-boot', 'python']);
  const dsaSlugs = new Set(['dsa']);
  const testingSlugs = new Set(['playwright', 'selenium']);
  const toolsSlugs = new Set(['git']);
  const excludedSlugs = new Set(['python']); // Languages to exclude from dropdown

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    // Filter out excluded languages first
    const availableLanguages = languages.filter((lang) => !excludedSlugs.has(lang.slug));
    
    if (!searchQuery.trim()) {
      return {
        frontend: availableLanguages.filter((lang) => frontendSlugs.has(lang.slug)),
        backend: availableLanguages.filter((lang) => backendSlugs.has(lang.slug)),
        testing: availableLanguages.filter((lang) => testingSlugs.has(lang.slug)),
        dsa: availableLanguages.filter((lang) => dsaSlugs.has(lang.slug)),
        tools: availableLanguages.filter((lang) => toolsSlugs.has(lang.slug)),
        other: availableLanguages.filter(
          (lang) => !frontendSlugs.has(lang.slug) && !backendSlugs.has(lang.slug) && !dsaSlugs.has(lang.slug) && !testingSlugs.has(lang.slug) && !toolsSlugs.has(lang.slug)
        ),
      };
    }

    const query = searchQuery.toLowerCase();
    const matchingLanguages = availableLanguages.filter((lang) =>
      lang.name.toLowerCase().includes(query) || lang.slug.toLowerCase().includes(query)
    );

    return {
      frontend: matchingLanguages.filter((lang) => frontendSlugs.has(lang.slug)),
      backend: matchingLanguages.filter((lang) => backendSlugs.has(lang.slug)),
      testing: matchingLanguages.filter((lang) => testingSlugs.has(lang.slug)),
      dsa: matchingLanguages.filter((lang) => dsaSlugs.has(lang.slug)),
      tools: matchingLanguages.filter((lang) => toolsSlugs.has(lang.slug)),
      other: matchingLanguages.filter(
        (lang) => !frontendSlugs.has(lang.slug) && !backendSlugs.has(lang.slug) && !dsaSlugs.has(lang.slug) && !testingSlugs.has(lang.slug) && !toolsSlugs.has(lang.slug)
      ),
    };
  }, [searchQuery, frontendSlugs, backendSlugs, testingSlugs, dsaSlugs, toolsSlugs, excludedSlugs]);

  return (
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="group relative overflow-hidden rounded-full border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm transition-all hover:bg-white/80 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-slate-800/60 dark:bg-slate-950/50 dark:text-slate-100">
          <Code className="relative z-10 mr-2 h-4 w-4" />
          <span
            className={cn(
              'relative z-10 max-w-[10rem] truncate font-semibold',
              !currentLanguage && 'text-slate-500 dark:text-slate-400'
            )}
          >
            {currentLanguage?.name || 'Select Language'}
          </span>
          <ChevronDown className="relative z-10 ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        {/* Search Bar */}
        <div className="p-2 border-b sticky top-0 bg-background z-10">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-9"
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="max-h-[400px]">
          <div className="p-2 space-y-3">
            {filteredLanguages.frontend.length > 0 && (
              <div>
                <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Frontend ({filteredLanguages.frontend.length})
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {filteredLanguages.frontend.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => handleLanguageSelect(lang.slug)}
                      className="cursor-pointer text-sm"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            )}

            {filteredLanguages.backend.length > 0 && (
              <div>
                <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Backend ({filteredLanguages.backend.length})
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {filteredLanguages.backend.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => handleLanguageSelect(lang.slug)}
                      className="cursor-pointer text-sm"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            )}

            {filteredLanguages.testing.length > 0 && (
              <div>
                <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Testing ({filteredLanguages.testing.length})
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {filteredLanguages.testing.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => handleLanguageSelect(lang.slug)}
                      className="cursor-pointer text-sm"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            )}

            {filteredLanguages.dsa.length > 0 && (
              <div>
                <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  DSA ({filteredLanguages.dsa.length})
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {filteredLanguages.dsa.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => handleLanguageSelect(lang.slug)}
                      className="cursor-pointer text-sm"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            )}

            {filteredLanguages.tools.length > 0 && (
              <div>
                <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Tools ({filteredLanguages.tools.length})
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {filteredLanguages.tools.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => handleLanguageSelect(lang.slug)}
                      className="cursor-pointer text-sm"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            )}

            {filteredLanguages.other.length > 0 && (
              <div>
                <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Other ({filteredLanguages.other.length})
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {filteredLanguages.other.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => handleLanguageSelect(lang.slug)}
                      className="cursor-pointer text-sm"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {searchQuery && 
             filteredLanguages.frontend.length === 0 && 
             filteredLanguages.backend.length === 0 && 
             filteredLanguages.testing.length === 0 && 
             filteredLanguages.dsa.length === 0 && 
             filteredLanguages.tools.length === 0 &&
             filteredLanguages.other.length === 0 && (
              <div className="text-center py-6 text-sm text-muted-foreground">
                No languages found matching "{searchQuery}"
              </div>
            )}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
