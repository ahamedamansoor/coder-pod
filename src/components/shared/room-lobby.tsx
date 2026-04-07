'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { collaborativeSessionService } from '@/services/collaborative-session.service';
import {
    Plus,
    Users,
    ArrowRight,
    Code,
    Loader2,
    Sparkles,
} from 'lucide-react';

const LANGUAGES = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'Go',
    'Rust',
    'Ruby',
    'PHP',
];

export function RoomLobby() {
    const router = useRouter();
    const { toast } = useToast();
    const { user, userProfile } = useSupabaseAuth();

    // Create room state
    const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
    const [questionType, setQuestionType] = useState<'theory' | 'coding' | 'mcq'>('coding');
    const [isCreating, setIsCreating] = useState(false);

    // Join room state
    const [roomCode, setRoomCode] = useState('');
    const [isJoining, setIsJoining] = useState(false);

    const handleCreateRoom = async () => {
        if (!user) {
            toast({
                variant: 'destructive',
                title: 'Login required',
                description: 'Please sign in to create an interview session',
            });
            return;
        }

        setIsCreating(true);
        try {
            const { roomCode } = await collaborativeSessionService.createSession(
                user.id,
                selectedLanguage,
                questionType
            );

            toast({
                title: 'Room created!',
                description: `Room code: ${roomCode}`,
            });

            router.push(`/collaborative-interview/${roomCode}`);
        } catch (error: any) {
            console.error('Error creating room:', error);
            toast({
                variant: 'destructive',
                title: 'Failed to create room',
                description: error.message || 'Please try again',
            });
        } finally {
            setIsCreating(false);
        }
    };

    const handleJoinRoom = async () => {
        if (!user) {
            toast({
                variant: 'destructive',
                title: 'Login required',
                description: 'Please sign in to join an interview session',
            });
            return;
        }

        if (!roomCode.trim()) {
            toast({
                variant: 'destructive',
                title: 'Room code required',
                description: 'Please enter a room code',
            });
            return;
        }

        setIsJoining(true);
        try {
            const session = await collaborativeSessionService.joinSession(roomCode.trim().toUpperCase());

            if (!session) {
                throw new Error('Room not found');
            }

            router.push(`/collaborative-interview/${session.room_code}`);
        } catch (error: any) {
            console.error('Error joining room:', error);
            toast({
                variant: 'destructive',
                title: 'Failed to join room',
                description: error.message || 'Please check the room code and try again',
            });
        } finally {
            setIsJoining(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Create/Join Tabs */}
            <Tabs defaultValue="create" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="create" className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create Room
                    </TabsTrigger>
                    <TabsTrigger value="join" className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Join Room
                    </TabsTrigger>
                </TabsList>

                {/* Create Room Tab */}
                <TabsContent value="create">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                Create Interview Room
                            </CardTitle>
                            <CardDescription>
                                Set up a new collaborative coding session and invite your interview partner
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Language Selection */}
                            <div className="space-y-2">
                                <Label htmlFor="language">Programming Language</Label>
                                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                    <SelectTrigger id="language">
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {LANGUAGES.map((lang) => (
                                            <SelectItem key={lang} value={lang}>
                                                {lang}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Question Type */}
                            <div className="space-y-2">
                                <Label>Interview Type</Label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { value: 'coding', label: 'Coding', icon: Code },
                                        { value: 'theory', label: 'Theory', icon: Sparkles },
                                    ].map(({ value, label, icon: Icon }) => (
                                        <Button
                                            key={value}
                                            type="button"
                                            variant={questionType === value ? 'default' : 'outline'}
                                            className="flex items-center gap-2"
                                            onClick={() => setQuestionType(value as 'coding' | 'theory' | 'mcq')}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {label}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Create Button */}
                            <Button
                                className="w-full"
                                size="lg"
                                onClick={handleCreateRoom}
                                disabled={isCreating || !user}
                            >
                                {isCreating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Creating Room...
                                    </>
                                ) : (
                                    <>
                                        <Plus className="w-4 h-4 mr-2" />
                                        Create Room
                                    </>
                                )}
                            </Button>

                            {!user && (
                                <p className="text-sm text-center text-muted-foreground">
                                    Please sign in to create a room
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Join Room Tab */}
                <TabsContent value="join">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ArrowRight className="w-5 h-5 text-blue-500" />
                                Join Interview Room
                            </CardTitle>
                            <CardDescription>
                                Enter the room code shared by your interviewer to join the session
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Room Code Input */}
                            <div className="space-y-2">
                                <Label htmlFor="roomCode">Room Code</Label>
                                <Input
                                    id="roomCode"
                                    placeholder="Enter 6-character room code"
                                    value={roomCode}
                                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                    maxLength={6}
                                    className="text-center text-lg font-mono tracking-widest"
                                />
                                <p className="text-xs text-muted-foreground text-center">
                                    Room codes are 6 characters (e.g., ABC123)
                                </p>
                            </div>

                            {/* Join Button */}
                            <Button
                                className="w-full"
                                size="lg"
                                onClick={handleJoinRoom}
                                disabled={isJoining || !user || roomCode.length < 6}
                            >
                                {isJoining ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    <>
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Join Room
                                    </>
                                )}
                            </Button>

                            {!user && (
                                <p className="text-sm text-center text-muted-foreground">
                                    Please sign in to join a room
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    {
                        icon: '🔄',
                        title: 'Real-time Sync',
                        description: 'Code changes appear instantly for both participants',
                    },
                    {
                        icon: '👥',
                        title: 'Live Presence',
                        description: 'See who is in the room and their cursor position',
                    },
                    {
                        icon: '🔗',
                        title: 'Easy Sharing',
                        description: 'Share room code or link to invite participants',
                    },
                ].map((feature) => (
                    <Card key={feature.title} className="bg-muted/30">
                        <CardContent className="pt-6 text-center">
                            <div className="text-2xl mb-2">{feature.icon}</div>
                            <h3 className="font-semibold mb-1">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default RoomLobby;
