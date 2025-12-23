'use client';

import Link from 'next/link';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { useRouter } from 'next/navigation';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import { RoomLobby } from '@/components/shared/room-lobby';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Users } from 'lucide-react';
import { featureFlags } from '@/config/feature-flags';

export default function CollaborativeInterviewPage() {
    const { user } = useUser();
    const { signOut } = useSupabaseAuth();
    const router = useRouter();
    const featureDisabled = !featureFlags.collaborativeInterview;

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (featureDisabled) {
        return (
            <div className="flex min-h-screen flex-col bg-background">
                <InnovativeHeader
                    currentPage="collaborative-interview"
                    showNavigation={true}
                    user={user}
                    onLogout={handleLogout}
                />

                <main className="flex flex-1 items-center justify-center px-4 py-8">
                    <Card className="w-full max-w-xl text-center">
                        <CardHeader className="space-y-3">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <CardTitle>Collaborative Interview is temporarily unavailable</CardTitle>
                            <CardDescription>
                                We&apos;re making some updates to this experience. Please check back soon.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                            <Link href="/" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto">
                                    Go Home
                                </Button>
                            </Link>
                            <Link href="/ai-interview" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto">
                                    Try AI Interview
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </main>
            </div>
        );
    }

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
