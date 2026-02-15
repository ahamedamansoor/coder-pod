export type NoteType = 'article' | 'video' | 'link' | 'doc' | 'blog' | 'documentation';

export interface Note {
  id: string;
  userId: string;
  title: string;
  description?: string;
  type: NoteType;
  language: string;
  url?: string;
  videoId?: string;
  content?: string;
  tags?: string[];
  favorited: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateNoteData {
  title: string;
  description?: string;
  type: NoteType;
  language: string;
  url?: string;
  videoId?: string;
  content?: string;
  tags?: string[];
  favorited?: boolean;
}

export interface UpdateNoteData {
  title?: string;
  description?: string;
  url?: string;
  videoId?: string;
  content?: string;
  tags?: string[];
  favorited?: boolean;
}
