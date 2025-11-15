import type { Language } from '@/app/data';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Logo } from './logo';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';

interface TopicSidebarProps {
  language: Language;
  selectedTopicSlug: string | null;
  onTopicSelect: (slug: string) => void;
}

export function TopicSidebar({
  language,
  selectedTopicSlug,
  onTopicSelect,
}: TopicSidebarProps) {
  return (
    <>
      <SidebarHeader className="p-4">
        <Logo />
      </SidebarHeader>
      <Separator />
      <SidebarContent asChild>
        <ScrollArea>
          <SidebarMenu className="p-4">
            <p className="px-2 py-1 text-sm font-semibold text-muted-foreground">Topics</p>
            {language.topics.map((topic) => (
              <SidebarMenuItem key={topic.slug}>
                <SidebarMenuButton
                  onClick={() => onTopicSelect(topic.slug)}
                  isActive={selectedTopicSlug === topic.slug}
                  tooltip={topic.title}
                  className="justify-start"
                >
                  {topic.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
    </>
  );
}
