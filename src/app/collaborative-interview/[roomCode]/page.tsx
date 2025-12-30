'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { InnovativeHeader } from '@/components/shared';
import { CollaborativeInterview } from '@/components/shared/collaborative-interview';
import { collaborativeSessionService } from '@/services/collaborative-session.service';
import { InterviewSession } from '@/types/collaborative.types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { featureFlags } from '@/config/feature-flags';
import { getRouteParam } from '@/lib/params';

export default function CollaborativeInterviewRoomPage() {
    const params = useParams();
    const router = useRouter();
    const { user, isUserLoading: isAuthLoading } = useUser();
    const { signOut } = useSupabaseAuth();
    const featureDisabled = !featureFlags.collaborativeInterview;

    const roomCode = getRouteParam(params, 'roomCode') || '';

    const [session, setSession] = useState<InterviewSession | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Load session data
    useEffect(() => {
        async function loadSession() {
            if (featureDisabled) {
                return;
            }

            if (!roomCode) {
                setError('Invalid room code');
                setIsLoading(false);
                return;
            }

            try {
                const sessionData = await collaborativeSessionService.getSession(roomCode);

                if (!sessionData) {
                    setError('Room not found. Please check the room code and try again.');
                    setIsLoading(false);
                    return;
                }

                if (sessionData.status === 'ended') {
                    setError('This interview session has ended.');
                    setIsLoading(false);
                    return;
                }

                setSession(sessionData);
            } catch (err: any) {
                console.error('Error loading session:', err);
                setError(err.message || 'Failed to load session');
            } finally {
                setIsLoading(false);
            }
        }

        if (!isAuthLoading) {
            loadSession();
        }
    }, [roomCode, isAuthLoading, featureDisabled]);

    if (featureDisabled) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <InnovativeHeader
                    currentPage={'collaborative-interview'}
                    showNavigation={true}
                    user={user}
                    onLogout={handleLogout}
                />
                <div className="flex-1 flex items-center justify-center p-4">
                    <Card className="max-w-xl w-full text-center">
                        <CardHeader className="space-y-3">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <CardTitle>Collaborative Interview is temporarily unavailable</CardTitle>
                            <CardDescription>
                                We&apos;re making some updates to live interview rooms. Existing room links are disabled for now.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center">
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
                </div>
            </div>
        );
    }

    // Show loading state
    if (isLoading || isAuthLoading) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <InnovativeHeader
                    currentPage={'collaborative-interview'}
                    showNavigation={true}
                    user={user}
                    onLogout={handleLogout}
                />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
                        <p className="text-muted-foreground">Loading interview room...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Show error state
    if (error || !session) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <InnovativeHeader
                    currentPage={'collaborative-interview'}
                    showNavigation={true}
                    user={user}
                    onLogout={handleLogout}
                />
                <div className="flex-1 flex items-center justify-center p-4">
                    <Card className="max-w-md w-full">
                        <CardContent className="pt-6 text-center">
                            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                            <h2 className="text-xl font-semibold mb-2">Unable to Join Room</h2>
                            <p className="text-muted-foreground mb-6">{error || 'Session not found'}</p>
                            <Link href="/collaborative-interview">
                                <Button>
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Lobby
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    // Show login prompt if not authenticated
    if (!user) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <InnovativeHeader
                    currentPage={'collaborative-interview'}
                    showNavigation={true}
                    user={user}
                    onLogout={handleLogout}
                />
                <div className="flex-1 flex items-center justify-center p-4">
                    <Card className="max-w-md w-full">
                        <CardContent className="pt-6 text-center">
                            <h2 className="text-xl font-semibold mb-2">Sign In Required</h2>
                            <p className="text-muted-foreground mb-6">
                                Please sign in to join this interview session.
                            </p>
                            <Link href="/login">
                                <Button>Sign In</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    // Show the collaborative interview
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <InnovativeHeader
                currentPage={'collaborative-interview'}
                showNavigation={true}
                user={user}
                onLogout={handleLogout}
            />
            <CollaborativeInterview roomCode={roomCode} session={session} />
        </div>
    );
}
