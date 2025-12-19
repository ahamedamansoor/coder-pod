import { supabase } from '@/lib/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';
import {
    InterviewSession,
    CodeSyncPayload,
    CursorSyncPayload,
    PresenceState,
    SessionMessage,
    generateRoomCode,
    getParticipantColor,
} from '@/types/collaborative.types';

class CollaborativeSessionService {
    private channels: Map<string, RealtimeChannel> = new Map();

    /**
     * Create a new collaborative interview session
     */
    async createSession(
        hostId: string,
        language: string = 'JavaScript',
        questionType: 'theory' | 'coding' | 'mcq' = 'coding'
    ): Promise<{ roomCode: string; session: InterviewSession }> {
        // Generate a unique room code
        let roomCode = generateRoomCode();
        let attempts = 0;
        const maxAttempts = 5;

        // Ensure room code is unique
        while (attempts < maxAttempts) {
            const { data: existing, error: checkError } = await supabase
                .from('interview_sessions')
                .select('id')
                .eq('room_code', roomCode)
                .single();

            // PGRST116 means no rows returned, which is what we want
            if (checkError?.code === 'PGRST116' || !existing) break;
            roomCode = generateRoomCode();
            attempts++;
        }

        if (attempts >= maxAttempts) {
            throw new Error('Failed to generate unique room code. Please try again.');
        }

        console.log('[Collaborative] Creating session with:', { roomCode, hostId, language, questionType });

        // Create the session in database
        const { data, error } = await supabase
            .from('interview_sessions')
            .insert({
                room_code: roomCode,
                host_id: hostId,
                language,
                question_type: questionType,
                status: 'waiting',
                code: getDefaultCode(language),
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating session:', error);
            // Throw the actual error message for debugging
            throw new Error(`Failed to create interview session: ${error.message || error.code || 'Unknown error'}`);
        }

        console.log('[Collaborative] Session created:', data);
        return { roomCode, session: data as InterviewSession };
    }

    /**
     * Join an existing session by room code
     */
    async joinSession(roomCode: string): Promise<InterviewSession | null> {
        const { data, error } = await supabase
            .from('interview_sessions')
            .select('*')
            .eq('room_code', roomCode.toUpperCase())
            .single();

        if (error || !data) {
            console.error('Error joining session:', error);
            return null;
        }

        // Check if session is still active
        if (data.status === 'ended') {
            throw new Error('This interview session has ended');
        }

        return data as InterviewSession;
    }

    /**
     * Get session by room code
     */
    async getSession(roomCode: string): Promise<InterviewSession | null> {
        const { data, error } = await supabase
            .from('interview_sessions')
            .select('*')
            .eq('room_code', roomCode.toUpperCase())
            .single();

        if (error) {
            return null;
        }

        return data as InterviewSession;
    }

    /**
     * Update session status
     */
    async updateSessionStatus(
        roomCode: string,
        status: 'waiting' | 'active' | 'ended'
    ): Promise<void> {
        const updateData: Record<string, any> = { status };

        if (status === 'ended') {
            updateData.ended_at = new Date().toISOString();
        }

        const { error } = await supabase
            .from('interview_sessions')
            .update(updateData)
            .eq('room_code', roomCode.toUpperCase());

        if (error) {
            console.error('Error updating session status:', error);
            throw new Error('Failed to update session status');
        }
    }

    /**
     * Save code to database (for persistence)
     */
    async saveCode(roomCode: string, code: string): Promise<void> {
        const { error } = await supabase
            .from('interview_sessions')
            .update({ code })
            .eq('room_code', roomCode.toUpperCase());

        if (error) {
            console.error('Error saving code:', error);
        }
    }

    /**
     * Subscribe to a room's realtime channel
     */
    subscribeToRoom(
        roomCode: string,
        userId: string,
        userName: string,
        isHost: boolean,
        callbacks: {
            onCodeChange?: (payload: CodeSyncPayload) => void;
            onCursorMove?: (payload: CursorSyncPayload) => void;
            onPresenceSync?: (state: Record<string, PresenceState[]>) => void;
            onPresenceJoin?: (state: PresenceState) => void;
            onPresenceLeave?: (state: PresenceState) => void;
            onSessionMessage?: (message: SessionMessage) => void;
        }
    ): RealtimeChannel {
        const channelName = `interview:${roomCode.toUpperCase()}`;

        // Check if already subscribed
        if (this.channels.has(channelName)) {
            return this.channels.get(channelName)!;
        }

        const participantIndex = Math.floor(Math.random() * 8);
        const color = getParticipantColor(participantIndex);

        const channel = supabase.channel(channelName, {
            config: {
                presence: {
                    key: userId,
                },
            },
        });

        // Handle code changes
        channel.on('broadcast', { event: 'code_change' }, ({ payload }) => {
            if (payload.userId !== userId && callbacks.onCodeChange) {
                callbacks.onCodeChange(payload as CodeSyncPayload);
            }
        });

        // Handle cursor movements
        channel.on('broadcast', { event: 'cursor_move' }, ({ payload }) => {
            if (payload.userId !== userId && callbacks.onCursorMove) {
                callbacks.onCursorMove(payload as CursorSyncPayload);
            }
        });

        // Handle session messages
        channel.on('broadcast', { event: 'session_message' }, ({ payload }) => {
            if (callbacks.onSessionMessage) {
                callbacks.onSessionMessage(payload as SessionMessage);
            }
        });

        // Handle presence
        channel
            .on('presence', { event: 'sync' }, () => {
                const state = channel.presenceState<PresenceState>();
                if (callbacks.onPresenceSync) {
                    callbacks.onPresenceSync(state);
                }
            })
            .on('presence', { event: 'join' }, ({ newPresences }) => {
                if (callbacks.onPresenceJoin && newPresences.length > 0) {
                    callbacks.onPresenceJoin(newPresences[0] as unknown as PresenceState);
                }
            })
            .on('presence', { event: 'leave' }, ({ leftPresences }) => {
                if (callbacks.onPresenceLeave && leftPresences.length > 0) {
                    callbacks.onPresenceLeave(leftPresences[0] as unknown as PresenceState);
                }
            });

        // Subscribe and track presence
        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await channel.track({
                    id: userId,
                    name: userName,
                    isHost,
                    color,
                    online_at: new Date().toISOString(),
                } as PresenceState);
            }
        });

        this.channels.set(channelName, channel);
        return channel;
    }

    /**
     * Broadcast code change to all participants
     */
    broadcastCodeChange(
        roomCode: string,
        code: string,
        cursorPosition: { line: number; column: number },
        userId: string,
        userName: string
    ): void {
        const channelName = `interview:${roomCode.toUpperCase()}`;
        const channel = this.channels.get(channelName);

        if (channel) {
            channel.send({
                type: 'broadcast',
                event: 'code_change',
                payload: {
                    type: 'code_change',
                    code,
                    cursorPosition,
                    userId,
                    userName,
                    timestamp: Date.now(),
                } as CodeSyncPayload,
            });
        }
    }

    /**
     * Broadcast cursor position to all participants
     */
    broadcastCursorMove(
        roomCode: string,
        cursorPosition: { line: number; column: number },
        selection: { startLine: number; startColumn: number; endLine: number; endColumn: number } | undefined,
        userId: string,
        userName: string,
        color: string
    ): void {
        const channelName = `interview:${roomCode.toUpperCase()}`;
        const channel = this.channels.get(channelName);

        if (channel) {
            channel.send({
                type: 'broadcast',
                event: 'cursor_move',
                payload: {
                    type: 'cursor_move',
                    cursorPosition,
                    selection,
                    userId,
                    userName,
                    color,
                } as CursorSyncPayload,
            });
        }
    }

    /**
     * Broadcast session message (start, end, user joined/left)
     */
    broadcastSessionMessage(
        roomCode: string,
        message: SessionMessage
    ): void {
        const channelName = `interview:${roomCode.toUpperCase()}`;
        const channel = this.channels.get(channelName);

        if (channel) {
            channel.send({
                type: 'broadcast',
                event: 'session_message',
                payload: message,
            });
        }
    }

    /**
     * Unsubscribe from a room
     */
    async unsubscribeFromRoom(roomCode: string): Promise<void> {
        const channelName = `interview:${roomCode.toUpperCase()}`;
        const channel = this.channels.get(channelName);

        if (channel) {
            await channel.unsubscribe();
            this.channels.delete(channelName);
        }
    }

    /**
     * End a session (host only)
     */
    async endSession(roomCode: string, userId: string, userName: string): Promise<void> {
        // Broadcast session end message
        this.broadcastSessionMessage(roomCode, {
            type: 'session_end',
            userId,
            userName,
            timestamp: Date.now(),
        });

        // Update session status in database
        await this.updateSessionStatus(roomCode, 'ended');

        // Unsubscribe from room
        await this.unsubscribeFromRoom(roomCode);
    }

    /**
     * Clean up all subscriptions
     */
    async cleanup(): Promise<void> {
        for (const [, channel] of this.channels) {
            await channel.unsubscribe();
        }
        this.channels.clear();
    }
}

// Helper function to get default code based on language
function getDefaultCode(language: string): string {
    const defaults: Record<string, string> = {
        'JavaScript': `// Welcome to the collaborative interview!
// Write your solution below

function solution() {
  // Your code here
}
`,
        'TypeScript': `// Welcome to the collaborative interview!
// Write your solution below

function solution(): void {
  // Your code here
}
`,
        'Python': `# Welcome to the collaborative interview!
# Write your solution below

def solution():
    # Your code here
    pass
`,
        'Java': `// Welcome to the collaborative interview!
// Write your solution below

public class Solution {
    public static void main(String[] args) {
        // Your code here
    }
}
`,
        'C++': `// Welcome to the collaborative interview!
// Write your solution below

#include <iostream>
using namespace std;

int main() {
    // Your code here
    return 0;
}
`,
    };

    return defaults[language] || `// Welcome to the collaborative interview!\n// Language: ${language}\n\n// Write your solution below\n`;
}

export const collaborativeSessionService = new CollaborativeSessionService();
