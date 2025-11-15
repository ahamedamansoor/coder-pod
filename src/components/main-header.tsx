import { SidebarTrigger } from './ui/sidebar';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Code } from 'lucide-react';

interface MainHeaderProps {
  onToggleEditor: () => void;
  isEditorOpen: boolean;
}

export function MainHeader({
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
        <Button variant="outline" onClick={onToggleEditor}>
          <Code className="mr-2 h-4 w-4" />
          Code Editor
        </Button>
      </div>
    </header>
  );
}
