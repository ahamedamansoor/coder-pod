
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { notFound, useParams, useRouter } from 'next/navigation';
import { TailwindProvider } from './tailwind-context';
import { TailwindLayoutProvider, useTailwindLayout } from './tailwind-layout-context';
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { useLoading } from '@/hooks/use-loading';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';

function TailwindTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const { isEditorOpen, setIsEditorOpen } = useTailwindLayout();
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

  const language = languages.find((lang) => lang.slug === 'tailwind');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="tailwind-topic-page"
        data-test="tailwind-topic-page"
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
      <WebPlaygroundModal initialLanguage="tailwind" />
    </SidebarProvider>
  );
}


export default function TailwindTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebPlaygroundProvider>
      <TailwindProvider>
        <TailwindLayoutProvider>
          <TailwindTopicLayoutContent>
            {children}
          </TailwindTopicLayoutContent>
        </TailwindLayoutProvider>
      </TailwindProvider>
    </WebPlaygroundProvider>
  );
}
