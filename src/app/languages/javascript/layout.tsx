
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/shared/layout/main-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { notFound, useParams } from 'next/navigation';
import { JavascriptProvider } from './javascript-context';
import { JavascriptLayoutProvider, useJavascriptLayout } from './javascript-layout-context';
import { useLoading } from '@/hooks/use-loading';

function JavascriptTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useJavascriptLayout();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'javascript');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="javascript-topic-page"
        data-test="javascript-topic-page"
        className="flex h-screen bg-background w-screen"
      >
        <Sidebar>
          <TopicSidebar
            language={language}
            selectedTopicSlug={selectedTopicSlug}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <MainHeader
            onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
            isEditorOpen={isEditorOpen}
            showCodeEditorButton={false}
            showWebPlaygroundButton={true}
          />
          <main className="flex-1 flex overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


export default function JavascriptTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JavascriptProvider>
      <JavascriptLayoutProvider>
        <JavascriptTopicLayoutContent>
          {children}
        </JavascriptTopicLayoutContent>
      </JavascriptLayoutProvider>
    </JavascriptProvider>
  );
}
