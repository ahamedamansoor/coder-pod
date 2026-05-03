'use client';

import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { useUser } from '@/hooks/use-auth-compat';
import { useAuth } from '@/hooks/use-auth-compat';
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';

export default function PrepareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <WebPlaygroundProvider>
      <div className="min-h-screen bg-background">
        <InnovativeHeader 
          currentPage="prepare" 
          user={user}
          onLogout={signOut}
        />
        <main>
          {children}
        </main>
      </div>
    </WebPlaygroundProvider>
  );
}
