
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
  const learningPlanTopic = language.topics.find(t => t.slug === 'learning-plan');
  
  const whatIsJavaTopics = language.topics.filter(t => ['what-is-java', 'history-of-java', 'features-of-java', 'jdk-jre-jvm'].includes(t.slug));
  const setupTopics = language.topics.filter(t => ['setting-up-environment'].includes(t.slug));
  const firstJavaProgramTopics = language.topics.filter(t => ['first-java-program'].includes(t.slug));
  const howJavaWorksTopics = language.topics.filter(t => ['how-java-works'].includes(t.slug));
  const commentsTopics = language.topics.filter(t => ['comments-in-java'].includes(t.slug));
  const fundamentalTopics = language.topics.filter(t => ['variables', 'data-types', 'type-casting', 'print-formats'].includes(t.slug));

  const otherTopics = language.topics.filter(t => 
    !['learning-plan', 'what-is-java', 'history-of-java', 'features-of-java', 'jdk-jre-jvm', 'how-java-works', 'setting-up-environment', 'first-java-program', 'comments-in-java', 'variables', 'data-types', 'type-casting', 'print-formats'].includes(t.slug)
  );

  return (
    <>
      <SidebarHeader className="p-4">
        <Logo />
      </SidebarHeader>
      <Separator />
      <SidebarContent asChild>
        <ScrollArea>
          <SidebarMenu className="p-4 space-y-4">
            {learningPlanTopic && (
              <div>
                <p className="px-2 py-1 text-sm font-semibold text-muted-foreground">Learning Path</p>
                <SidebarMenuItem key={learningPlanTopic.slug}>
                  <SidebarMenuButton
                    onClick={() => onTopicSelect(learningPlanTopic.slug)}
                    isActive={selectedTopicSlug === learningPlanTopic.slug}
                    tooltip={learningPlanTopic.title}
                    className="justify-start"
                  >
                    {learningPlanTopic.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            )}
            
            <div className='space-y-2'>
              <p className="px-2 py-1 text-sm font-semibold text-muted-foreground">Topics</p>
              
              {whatIsJavaTopics.length > 0 && (
                <div className="space-y-1">
                  <p className="px-2 py-1 text-sm font-medium text-muted-foreground/80">What is Java?</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {whatIsJavaTopics.map((topic) => (
                      <SidebarMenuItem key={topic.slug}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(topic.slug)}
                          isActive={selectedTopicSlug === topic.slug}
                          tooltip={topic.title}
                          className="justify-start text-sm"
                        >
                          {topic.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              )}

              {setupTopics.length > 0 && (
                <div className="space-y-1">
                  <p className="px-2 py-1 text-sm font-medium text-muted-foreground/80">Environment</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {setupTopics.map((topic) => (
                      <SidebarMenuItem key={topic.slug}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(topic.slug)}
                          isActive={selectedTopicSlug === topic.slug}
                          tooltip={topic.title}
                          className="justify-start text-sm"
                        >
                          {topic.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              )}

              {firstJavaProgramTopics.length > 0 && (
                <div className="space-y-1">
                  <p className="px-2 py-1 text-sm font-medium text-muted-foreground/80">First Java Program</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {firstJavaProgramTopics.map((topic) => (
                      <SidebarMenuItem key={topic.slug}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(topic.slug)}
                          isActive={selectedTopicSlug === topic.slug}
                          tooltip={topic.title}
                          className="justify-start text-sm"
                        >
                          {topic.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              )}

              {howJavaWorksTopics.length > 0 && (
                <div className="space-y-1">
                  <p className="px-2 py-1 text-sm font-medium text-muted-foreground/80">How Java Works</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {howJavaWorksTopics.map((topic) => (
                      <SidebarMenuItem key={topic.slug}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(topic.slug)}
                          isActive={selectedTopicSlug === topic.slug}
                          tooltip={topic.title}
                          className="justify-start text-sm"
                        >
                          {topic.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              )}

              {commentsTopics.length > 0 && (
                <div className="space-y-1">
                  <p className="px-2 py-1 text-sm font-medium text-muted-foreground/80">Comments</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {commentsTopics.map((topic) => (
                      <SidebarMenuItem key={topic.slug}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(topic.slug)}
                          isActive={selectedTopicSlug === topic.slug}
                          tooltip={topic.title}
                          className="justify-start text-sm"
                        >
                          {topic.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              )}

              {fundamentalTopics.length > 0 && (
                 <div className="space-y-1">
                  <p className="px-2 py-1 text-sm font-medium text-muted-foreground/80">Fundamentals</p>
                  <div className="ml-2 border-l pl-2 spacey-1">
                    {fundamentalTopics.map((topic) => (
                      <SidebarMenuItem key={topic.slug}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(topic.slug)}
                          isActive={selectedTopicSlug === topic.slug}
                          tooltip={topic.title}
                          className="justify-start text-sm"
                        >
                          {topic.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              )}


              {otherTopics.map((topic) => (
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
            </div>

          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
    </>
  );
}
