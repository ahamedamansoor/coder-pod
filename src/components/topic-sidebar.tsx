
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
  
  const gettingStartedTopics = language.topics.filter(t => 
    ['what-is-java', 'history-of-java', 'features-of-java', 'jdk-jre-jvm', 'setting-up-environment', 'first-java-program', 'how-java-works', 'comments-in-java'].includes(t.slug)
  );
  
  const basicOutputTopics = language.topics.filter(t => 
    ['print-statements-and-format-specifiers', 'escape-sequences'].includes(t.slug)
  );

  const variablesAndDataTypesTopics = language.topics.filter(t => 
    ['variables', 'data-types', 'type-casting', 'constants', 'literals'].includes(t.slug)
  );

  const operatorsTopics = language.topics.filter(t => 
    ['arithmetic-operators', 'assignment-operators', 'comparison-operators', 'logical-operators', 'bitwise-operators', 'ternary-operator', 'operator-precedence'].includes(t.slug)
  );

  const userInputTopics = language.topics.filter(t =>
    ['scanner-class', 'reading-different-types', 'input-validation'].includes(t.slug)
  );

  const otherTopics = language.topics.filter(t => 
    ![
      'learning-plan', 
      ...gettingStartedTopics.map(t => t.slug), 
      ...basicOutputTopics.map(t => t.slug), 
      ...variablesAndDataTypesTopics.map(t => t.slug), 
      ...operatorsTopics.map(t => t.slug),
      ...userInputTopics.map(t => t.slug)
    ].includes(t.slug)
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
                <p className="px-2 py-1 text-xl font-semibold text-muted-foreground">Learning Path</p>
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
            
            <div className='space-y-4'>
              <p className="px-2 py-1 text-xl font-semibold text-muted-foreground">Topics</p>
              
              {gettingStartedTopics.length > 0 && (
                <div className="space-y-2">
                  <p className="px-2 text-md font-semibold text-foreground">Getting Started</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {gettingStartedTopics.map((topic) => (
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

              {basicOutputTopics.length > 0 && (
                <div className="space-y-2">
                  <p className="px-2 text-md font-semibold text-foreground">Basic Output</p>
                  <div className="ml-2 border-l pl-2 space-y-1">
                    {basicOutputTopics.map((topic) => (
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

              {variablesAndDataTypesTopics.length > 0 && (
                 <div className="space-y-2">
                  <p className="px-2 text-md font-semibold text-foreground">Variables & Data Types</p>
                  <div className="ml-2 border-l pl-2 spacey-1">
                    {variablesAndDataTypesTopics.map((topic) => (
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

              {operatorsTopics.length > 0 && (
                 <div className="space-y-2">
                  <p className="px-2 text-md font-semibold text-foreground">Operators</p>
                  <div className="ml-2 border-l pl-2 spacey-1">
                    {operatorsTopics.map((topic) => (
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

              {userInputTopics.length > 0 && (
                 <div className="space-y-2">
                  <p className="px-2 text-md font-semibold text-foreground">User Input</p>
                  <div className="ml-2 border-l pl-2 spacey-1">
                    {userInputTopics.map((topic) => (
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
