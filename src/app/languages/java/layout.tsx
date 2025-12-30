
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { notFound, useParams, useRouter } from 'next/navigation';
import { JavaProvider } from './java-context';
import { JavaLayoutProvider, useJavaLayout } from './java-layout-context';
import { useLoading } from '@/hooks/use-loading';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { getRouteParam } from '@/lib/params';

function JavaTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const { isEditorOpen, setIsEditorOpen } = useJavaLayout();
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);
  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const language = languages.find((lang) => lang.slug === 'java');
  if (!language) {
    notFound();
  }
  const topicSlug = getRouteParam(params, 'topic');
  const selectedTopic = language.topics.find((t) => t.slug === topicSlug);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'what-is-java';

  return (
    <SidebarProvider>
      <div
        id="java-topic-page"
        data-test="java-topic-page"
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


export default function JavaTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JavaProvider>
      <JavaLayoutProvider>
        <JavaTopicLayoutContent>
          {children}
        </JavaTopicLayoutContent>
      </JavaLayoutProvider>
    </JavaProvider>
  );
}
