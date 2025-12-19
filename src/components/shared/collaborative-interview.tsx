'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { collaborativeSessionService } from '@/services/collaborative-session.service';
import {
    InterviewSession,
    Participant,
    CodeSyncPayload,
    CursorSyncPayload,
    PresenceState,
    getParticipantColor,
} from '@/types/collaborative.types';
import {
    Users,
    Copy,
    Check,
    LogOut,
    Play,
    Square,
    Link2,
    Wifi,
    WifiOff,
    Crown,
    Circle,
} from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface CollaborativeInterviewProps {
    roomCode: string;
    session: InterviewSession;
}

export function CollaborativeInterview({ roomCode, session }: CollaborativeInterviewProps) {
    const { user, userProfile } = useSupabaseAuth();
    const { toast } = useToast();
    const { theme } = useTheme();
    const router = useRouter();
    const editorRef = useRef<any>(null);
    const isRemoteChange = useRef(false);
    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // State
    const [code, setCode] = useState(session.code || '');
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const [showEndDialog, setShowEndDialog] = useState(false);
    const [sessionStatus, setSessionStatus] = useState(session.status);
    const [myColor, setMyColor] = useState(getParticipantColor(0));
    const [remoteCursors, setRemoteCursors] = useState<Map<string, CursorSyncPayload>>(new Map());

    const isHost = user?.id === session.host_id;
    const userName = userProfile?.name || user?.email?.split('@')[0] || 'Anonymous';

    // Subscribe to realtime updates
    useEffect(() => {
        if (!user) return;

        const channel = collaborativeSessionService.subscribeToRoom(
            roomCode,
            user.id,
            userName,
            isHost,
            {
                onCodeChange: (payload: CodeSyncPayload) => {
                    isRemoteChange.current = true;
                    setCode(payload.code);

                    // Update remote cursor
                    setRemoteCursors(prev => {
                        const newMap = new Map(prev);
                        newMap.set(payload.userId, {
                            type: 'cursor_move',
                            cursorPosition: payload.cursorPosition,
                            userId: payload.userId,
                            userName: payload.userName,
                            color: getParticipantColor(Array.from(prev.keys()).indexOf(payload.userId)),
                        });
                        return newMap;
                    });
                },
                onCursorMove: (payload: CursorSyncPayload) => {
                    setRemoteCursors(prev => {
                        const newMap = new Map(prev);
                        newMap.set(payload.userId, payload);
                        return newMap;
                    });
                },
                onPresenceSync: (state) => {
                    const users: Participant[] = [];
                    let colorIndex = 0;

                    Object.values(state).forEach((presences) => {
                        presences.forEach((presence: PresenceState) => {
                            const color = getParticipantColor(colorIndex++);
                            if (presence.id === user.id) {
                                setMyColor(color);
                            }
                            users.push({
                                id: presence.id,
                                name: presence.name,
                                isHost: presence.isHost,
                                isOnline: true,
                                color,
                            });
                        });
                    });

                    setParticipants(users);
                    setIsConnected(true);
                },
                onPresenceJoin: (presence) => {
                    toast({
                        title: 'User joined',
                        description: `${presence.name} joined the interview`,
                    });
                },
                onPresenceLeave: (presence) => {
                    setRemoteCursors(prev => {
                        const newMap = new Map(prev);
                        newMap.delete(presence.id);
                        return newMap;
                    });

                    toast({
                        title: 'User left',
                        description: `${presence.name} left the interview`,
                    });
                },
                onSessionMessage: (message) => {
                    if (message.type === 'session_end') {
                        toast({
                            title: 'Session ended',
                            description: 'The host has ended this interview session',
                        });
                        router.push('/collaborative-interview');
                    } else if (message.type === 'session_start') {
                        setSessionStatus('active');
                        toast({
                            title: 'Interview started!',
                            description: 'The collaborative coding session has begun',
                        });
                    }
                },
            }
        );

        return () => {
            collaborativeSessionService.unsubscribeFromRoom(roomCode);
        };
    }, [user, roomCode, userName, isHost, toast, router]);

    // Handle code changes
    const handleCodeChange = useCallback((value: string | undefined) => {
        const newCode = value || '';
        setCode(newCode);

        // Don't broadcast if this was a remote change
        if (isRemoteChange.current) {
            isRemoteChange.current = false;
            return;
        }

        if (!user) return;

        // Get cursor position
        const position = editorRef.current?.getPosition();
        const cursorPosition = position
            ? { line: position.lineNumber, column: position.column }
            : { line: 1, column: 1 };

        // Broadcast code change
        collaborativeSessionService.broadcastCodeChange(
            roomCode,
            newCode,
            cursorPosition,
            user.id,
            userName
        );

        // Debounce save to database
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }
        saveTimeoutRef.current = setTimeout(() => {
            collaborativeSessionService.saveCode(roomCode, newCode);
        }, 2000);
    }, [user, roomCode, userName]);

    // Handle cursor movement
    const handleEditorMount = useCallback((editor: any) => {
        editorRef.current = editor;

        // Track cursor position changes
        editor.onDidChangeCursorPosition((e: any) => {
            if (!user) return;

            const position = e.position;
            const selection = editor.getSelection();

            collaborativeSessionService.broadcastCursorMove(
                roomCode,
                { line: position.lineNumber, column: position.column },
                selection ? {
                    startLine: selection.startLineNumber,
                    startColumn: selection.startColumn,
                    endLine: selection.endLineNumber,
                    endColumn: selection.endColumn,
                } : undefined,
                user.id,
                userName,
                myColor
            );
        });
    }, [user, roomCode, userName, myColor]);

    // Copy room link
    const copyRoomLink = useCallback(() => {
        const link = `${window.location.origin}/collaborative-interview/${roomCode}`;
        navigator.clipboard.writeText(link);
        setHasCopied(true);
        toast({
            title: 'Link copied!',
            description: 'Share this link with your interview partner',
        });
        setTimeout(() => setHasCopied(false), 2000);
    }, [roomCode, toast]);

    // Start session (host only)
    const startSession = useCallback(async () => {
        if (!isHost || !user) return;

        await collaborativeSessionService.updateSessionStatus(roomCode, 'active');
        setSessionStatus('active');

        collaborativeSessionService.broadcastSessionMessage(roomCode, {
            type: 'session_start',
            userId: user.id,
            userName,
            timestamp: Date.now(),
        });

        toast({
            title: 'Interview started!',
            description: 'The collaborative coding session has begun',
        });
    }, [isHost, user, roomCode, userName, toast]);

    // End session (host only)
    const endSession = useCallback(async () => {
        if (!isHost || !user) return;

        await collaborativeSessionService.endSession(roomCode, user.id, userName);
        router.push('/collaborative-interview');
    }, [isHost, user, roomCode, userName, router]);

    // Leave session (non-host)
    const leaveSession = useCallback(async () => {
        await collaborativeSessionService.unsubscribeFromRoom(roomCode);
        router.push('/collaborative-interview');
    }, [roomCode, router]);

    // Get Monaco language from session language
    const getMonacoLanguage = (lang: string): string => {
        const langMap: Record<string, string> = {
            'JavaScript': 'javascript',
            'TypeScript': 'typescript',
            'Python': 'python',
            'Java': 'java',
            'C++': 'cpp',
            'C#': 'csharp',
            'Go': 'go',
            'Rust': 'rust',
            'Ruby': 'ruby',
            'PHP': 'php',
        };
        return langMap[lang] || 'javascript';
    };

    return (
        <div className="flex h-[calc(100vh-80px)] gap-4 p-4">
            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {isConnected ? (
                                <Wifi className="w-4 h-4 text-green-500" />
                            ) : (
                                <WifiOff className="w-4 h-4 text-red-500" />
                            )}
                            <span className="text-sm text-muted-foreground">
                                {isConnected ? 'Connected' : 'Connecting...'}
                            </span>
                        </div>
                        <Badge variant="outline" className="font-mono">
                            Room: {roomCode}
                        </Badge>
                        <Badge variant={sessionStatus === 'active' ? 'default' : 'secondary'}>
                            {sessionStatus === 'waiting' ? 'Waiting to start' : sessionStatus === 'active' ? 'In Progress' : 'Ended'}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={copyRoomLink}
                                    >
                                        {hasCopied ? (
                                            <Check className="w-4 h-4 mr-2" />
                                        ) : (
                                            <Link2 className="w-4 h-4 mr-2" />
                                        )}
                                        {hasCopied ? 'Copied!' : 'Share Link'}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Copy invite link</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        {isHost ? (
                            <>
                                {sessionStatus === 'waiting' && (
                                    <Button size="sm" onClick={startSession}>
                                        <Play className="w-4 h-4 mr-2" />
                                        Start Interview
                                    </Button>
                                )}
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => setShowEndDialog(true)}
                                >
                                    <Square className="w-4 h-4 mr-2" />
                                    End Session
                                </Button>
                            </>
                        ) : (
                            <Button variant="outline" size="sm" onClick={leaveSession}>
                                <LogOut className="w-4 h-4 mr-2" />
                                Leave
                            </Button>
                        )}
                    </div>
                </div>

                {/* Code Editor */}
                <Card className="flex-1 overflow-hidden">
                    <CardContent className="p-0 h-full">
                        <Editor
                            height="100%"
                            language={getMonacoLanguage(session.language)}
                            theme={theme === 'dark' ? 'vs-dark' : 'light'}
                            value={code}
                            onChange={handleCodeChange}
                            onMount={handleEditorMount}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                lineNumbers: 'on',
                                wordWrap: 'on',
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                                padding: { top: 16, bottom: 16 },
                            }}
                        />
                    </CardContent>
                </Card>
            </div>

            {/* Sidebar - Participants */}
            <Card className="w-64 flex flex-col">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4" />
                        Participants ({participants.length})
                    </CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="flex-1 p-2">
                    <ScrollArea className="h-full">
                        <div className="space-y-2">
                            {participants.map((participant) => (
                                <div
                                    key={participant.id}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                    <div className="relative">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                                            style={{ backgroundColor: participant.color }}
                                        >
                                            {participant.name.charAt(0).toUpperCase()}
                                        </div>
                                        {participant.isOnline && (
                                            <Circle
                                                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 text-green-500 fill-green-500"
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-medium truncate">
                                                {participant.name}
                                                {participant.id === user?.id && ' (You)'}
                                            </span>
                                            {participant.isHost && (
                                                <Crown className="w-3 h-3 text-yellow-500" />
                                            )}
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {participant.isHost ? 'Interviewer' : 'Interviewee'}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {participants.length < 2 && (
                                <div className="p-4 text-center text-sm text-muted-foreground">
                                    <p>Waiting for another participant...</p>
                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="mt-2"
                                        onClick={copyRoomLink}
                                    >
                                        <Copy className="w-3 h-3 mr-1" />
                                        Copy invite link
                                    </Button>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

            {/* End Session Dialog */}
            <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>End Interview Session?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will end the interview for all participants. The code will be saved, but the session cannot be resumed.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={endSession}>
                            End Session
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default CollaborativeInterview;
