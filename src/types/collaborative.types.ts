// Types for collaborative interview sessions

export interface InterviewSession {
  id: string;
  room_code: string;
  host_id: string;
  language: string;
  question_type: 'theory' | 'coding' | 'mcq';
  status: 'waiting' | 'active' | 'ended';
  code: string;
  created_at: string;
  ended_at?: string;
}

export interface Participant {
  id: string;
  name: string;
  email?: string;
  isHost: boolean;
  cursorPosition?: CursorPosition;
  isOnline: boolean;
  color: string;
}

export interface CursorPosition {
  line: number;
  column: number;
}

export interface CodeSyncPayload {
  type: 'code_change';
  code: string;
  cursorPosition: CursorPosition;
  userId: string;
  userName: string;
  timestamp: number;
}

export interface CursorSyncPayload {
  type: 'cursor_move';
  cursorPosition: CursorPosition;
  selection?: {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
  };
  userId: string;
  userName: string;
  color: string;
}

export interface PresenceState {
  id: string;
  name: string;
  email?: string;
  isHost: boolean;
  color: string;
  online_at: string;
}

export interface SessionMessage {
  type: 'session_start' | 'session_end' | 'user_joined' | 'user_left';
  userId: string;
  userName: string;
  timestamp: number;
  data?: Record<string, any>;
}

// Room code generator helper
export function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars like 0, O, 1, I
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Participant colors for cursor indicators
export const PARTICIPANT_COLORS = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#96CEB4', // Green
  '#FFEAA7', // Yellow
  '#DDA0DD', // Plum
  '#98D8C8', // Mint
  '#F7DC6F', // Gold
];

export function getParticipantColor(index: number): string {
  return PARTICIPANT_COLORS[index % PARTICIPANT_COLORS.length];
}
