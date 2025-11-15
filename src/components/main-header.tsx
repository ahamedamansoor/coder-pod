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
import { Button } from './ui/button';
import { Code } from 'lucide-react';

interface MainHeaderProps {
  selectedLanguageSlug: string;
  onLanguageChange: (slug: string) => void;
  onToggleEditor: () => void;
  isEditorOpen: boolean;
}

export function MainHeader({
  selectedLanguageSlug,
  onLanguageChange,
  onToggleEditor,
  isEditorOpen
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
        <Button variant="outline" onClick={onToggleEditor}>
          <Code className="mr-2 h-4 w-4" />
          Code Editor
        </Button>
      </div>
    </header>
  );
}
