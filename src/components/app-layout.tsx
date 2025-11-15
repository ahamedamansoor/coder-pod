'use client';
import React, { useState, useMemo, useEffect } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { languages } from '@/app/data';
import { TopicSidebar } from './topic-sidebar';
import { MainHeader } from './main-header';
import { ContentDisplay } from './content-display';
import { CodeEditorSheet } from './code-editor-sheet';
import { Button } from './ui/button';
import { Code } from 'lucide-react';

export default function AppLayout() {
  const [selectedLanguageSlug, setSelectedLanguageSlug] = useState<string>(
    languages[0].slug
  );
  const [selectedTopicSlug, setSelectedTopicSlug] = useState<string | null>(
    languages[0].topics[0]?.slug ?? null
  );
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const selectedLanguage = useMemo(
    () => languages.find((lang) => lang.slug === selectedLanguageSlug)!,
    [selectedLanguageSlug]
  );
  
  const selectedTopic = useMemo(
    () => selectedLanguage.topics.find((topic) => topic.slug === selectedTopicSlug),
    [selectedLanguage, selectedTopicSlug]
  );

  const handleLanguageChange = (slug: string) => {
    setSelectedLanguageSlug(slug);
    const newLang = languages.find((l) => l.slug === slug);
    if (newLang?.topics.length) {
      setSelectedTopicSlug(newLang.topics[0].slug);
    } else {
      setSelectedTopicSlug(null);
    }
  };

  useEffect(() => {
    const lang = languages.find(l => l.slug === selectedLanguageSlug);
    if (lang && (!selectedTopicSlug || !lang.topics.find(t => t.slug === selectedTopicSlug))) {
      setSelectedTopicSlug(lang.topics[0]?.slug ?? null);
    }
  }, [selectedLanguageSlug, selectedTopicSlug]);

  return (
    <div className="flex h-screen bg-background">
      <SidebarProvider>
        <Sidebar>
          <TopicSidebar
            language={selectedLanguage}
            selectedTopicSlug={selectedTopicSlug}
            onTopicSelect={setSelectedTopicSlug}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col min-w-0">
          <MainHeader
            selectedLanguageSlug={selectedLanguageSlug}
            onLanguageChange={handleLanguageChange}
            onToggleEditor={() => setIsEditorOpen(!isEditorOpen)}
            isEditorOpen={isEditorOpen}
          />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              {selectedTopic ? (
                <ContentDisplay
                  key={`${selectedLanguage.slug}-${selectedTopic.slug}`}
                  topic={selectedTopic}
                  language={selectedLanguage}
                />
              ) : (
                <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
                  <p className="text-muted-foreground">
                    Select a topic to get started.
                  </p>
                </div>
              )}
            </main>
            <div 
              className={`transition-all duration-300 ease-in-out flex-shrink-0 ${isEditorOpen ? 'w-full md:w-2/5 lg:w-1/3 xl:w-[500px]' : 'w-0'}`}
            >
              <CodeEditorSheet />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
