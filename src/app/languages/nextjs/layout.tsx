'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { notFound, useParams, useRouter } from 'next/navigation';
import { NextjsProvider } from './nextjs-context';
import { NextjsLayoutProvider, useNextjsLayout } from './nextjs-layout-context';
import { useLoading } from '@/hooks/use-loading';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';

function NextjsTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const { isEditorOpen, setIsEditorOpen } = useNextjsLayout();
  const { hideLoader } = useLoading();
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const language = languages.find((lang) => lang.slug === 'nextjs');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="nextjs-topic-page"
        data-test="nextjs-topic-page"
        className="flex h-screen bg-background w-screen"
      >
        <Sidebar>
          <TopicSidebar
            language={language}
            selectedTopicSlug={selectedTopicSlug}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <InnovativeHeader
            currentPage="learning"
            user={user}
            onLogout={handleLogout}
            showSidebarTrigger={true}
            showLanguageSwitcher={true}
          />
          <main className="flex-1 flex overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


export default function NextjsTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextjsProvider>
      <NextjsLayoutProvider>
        <NextjsTopicLayoutContent>
          {children}
        </NextjsTopicLayoutContent>
      </NextjsLayoutProvider>
    </NextjsProvider>
  );
}
