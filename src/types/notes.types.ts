import { Timestamp } from 'firebase/firestore';

export type NoteType = 'video' | 'blog' | 'article' | 'documentation' | 'link';

export interface Note {
  id: string;
  userId: string;
  title: string;
  url: string;
  type: NoteType;
  videoId?: string;
  language: string;
  createdAt: Timestamp | Date;
  updatedAt?: Timestamp | Date;
}

export interface CreateNoteData {
  title: string;
  url: string;
  type: NoteType;
  videoId?: string;
  language: string;
}

export interface UpdateNoteData {
  title?: string;
  url?: string;
  type?: NoteType;
  language?: string;
}
