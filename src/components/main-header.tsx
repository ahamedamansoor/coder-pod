import { languages } from '@/app/data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SidebarTrigger } from './ui/sidebar';
import { Logo } from './logo';
import { CodeEditorSheet } from './code-editor-sheet';

interface MainHeaderProps {
  selectedLanguageSlug: string;
  onLanguageChange: (slug: string) => void;
}

export function MainHeader({
  selectedLanguageSlug,
  onLanguageChange,
}: MainHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div className="hidden md:block">
          <Logo />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[200px]">
          <Select value={selectedLanguageSlug} onValueChange={onLanguageChange}>
            <SelectTrigger aria-label="Select Language">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.slug} value={lang.slug}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <CodeEditorSheet />
      </div>
    </header>
  );
}
