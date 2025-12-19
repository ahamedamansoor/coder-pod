'use client';

import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { useRouter } from 'next/navigation';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import { RoomLobby } from '@/components/shared/room-lobby';
import { Users } from 'lucide-react';

export default function CollaborativeInterviewPage() {
    const { user } = useUser();
    const { signOut } = useSupabaseAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div
            style={{ width: '100vw', height: '100vh' }}
            className="flex flex-col overflow-hidden bg-background relative"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <InnovativeHeader
                currentPage="collaborative-interview"
                showNavigation={true}
                user={user}
                onLogout={handleLogout}
            />

            {/* Page Title */}
            <div className="flex-shrink-0 sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b">
                <LearningPathTitle
                    icon={Users}
                    title="Collaborative Interview"
                    subtitle="Practice coding interviews together in real-time. Create a room or join an existing session."
                />
            </div>

            {/* Main content */}
            <main className="flex-1 relative z-10 overflow-y-auto py-8">
                <RoomLobby />
            </main>
        </div>
    );
}
