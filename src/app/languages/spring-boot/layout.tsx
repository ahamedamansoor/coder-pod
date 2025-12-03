'use client';

import React, { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { SpringBootProvider } from './spring-boot-context';
import { SpringBootLayoutProvider } from './spring-boot-layout-context';
import { InnovativeHeader } from '@/components/shared';
import { languages } from '@/data/languages';
import { useUser, useAuth } from '@/firebase';

export default function SpringBootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const auth = useAuth();

  const language = useMemo(() => languages.find(lang => lang.slug === 'spring-boot'), []);

  const selectedTopicSlug = useMemo(() => {
    if (!pathname) return 'learning-plan';
    const parts = pathname.split('/');
    return parts[parts.length - 1] || 'learning-plan';
  }, [pathname]);

  const handleLogout = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/');
    }
  };

  if (!language) return null;

  return (
    <SpringBootProvider>
      <SpringBootLayoutProvider>
        <div className="flex flex-col h-screen overflow-hidden bg-background">
          <InnovativeHeader 
            currentPage="learning"
            user={user}
            onLogout={handleLogout}
            showSidebarTrigger={true}
            showLanguageSwitcher={true}
          />

          <div className="flex flex-1 overflow-hidden">
            <div className="flex-shrink-0">
              <TopicSidebar
                language={language}
                selectedTopicSlug={selectedTopicSlug}
              />
            </div>

            <main className="flex-1 overflow-y-auto bg-background">
              <div className="h-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SpringBootLayoutProvider>
    </SpringBootProvider>
  );
}
