
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Notebook, Plus, Trash2, Play, Youtube, Loader2, FileText } from 'lucide-react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';

interface Note {
  id: string;
  content: string;
  type: 'note' | 'video';
  createdAt: any;
}

const YOUTUBE_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w-]{11})/;

function getYoutubeEmbedUrl(url: string): string | null {
  const match = url.match(YOUTUBE_REGEX);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export function NotebookPageContent() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const notesCollectionRef = useMemo(() => {
    if (!user || !firestore) return null;
    return collection(firestore, `users/${user.uid}/notes`);
  }, [user, firestore]);
  
  const notesQuery = useMemo(() => {
    if (!notesCollectionRef) return null;
    return query(notesCollectionRef, orderBy('createdAt', 'desc'));
  }, [notesCollectionRef]);

  const { data: notes, isLoading: isNotesLoading } = useCollection<Note>(notesQuery);

  const [newNote, setNewNote] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  
  const handleAddNote = async () => {
    if (!newNote.trim() || !notesCollectionRef) return;
    setIsAdding(true);
    
    const isVideo = YOUTUBE_REGEX.test(newNote);

    try {
      await addDoc(notesCollectionRef, {
        content: newNote.trim(),
        type: isVideo ? 'video' : 'note',
        createdAt: serverTimestamp(),
      });
      setNewNote('');
    } catch (error) {
      console.error("Error adding note: ", error);
      toast({
        variant: 'destructive',
        title: 'Could not save note',
        description: 'Please try again later.',
      });
    } finally {
      setIsAdding(false);
    }
  };
  
  const handleDeleteNote = async (noteId: string) => {
    if (!user || !firestore) return;
    try {
        const noteDocRef = doc(firestore, `users/${user.uid}/notes`, noteId);
        await deleteDoc(noteDocRef);
    } catch (error) {
        console.error("Error deleting note: ", error);
        toast({
            variant: 'destructive',
            title: 'Could not delete note',
            description: 'Please try again later.',
        });
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 w-full overflow-y-auto">
      <header className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
            <Notebook className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">AI Notebook</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Your personal space to jot down notes, save code snippets, or keep track of useful video links.
        </p>
      </header>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <Textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Type a note or paste a YouTube link..."
            rows={4}
            disabled={isAdding}
          />
          <Button onClick={handleAddNote} disabled={isAdding || !newNote.trim()}>
            {isAdding ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
            Add to Notebook
          </Button>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {(isNotesLoading || isUserLoading) ? (
            [...Array(3)].map((_, i) => <Skeleton key={i} className="h-24 w-full" />)
        ) : notes && notes.length > 0 ? (
          notes.map((note) => {
            const embedUrl = note.type === 'video' ? getYoutubeEmbedUrl(note.content) : null;
            const isPlaying = playingVideoId === note.id;

            return (
              <Card key={note.id} className="overflow-hidden">
                <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                        {note.type === 'video' ? <Youtube className="w-5 h-5 text-primary" /> : <FileText className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex-1">
                        {isPlaying ? (
                            <div className="aspect-video">
                                <iframe
                                    src={`${embedUrl}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-md"
                                ></iframe>
                            </div>
                        ) : (
                            <p className="text-sm text-foreground whitespace-pre-wrap break-words">{note.content}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                           {note.createdAt ? new Date(note.createdAt.seconds * 1000).toLocaleString() : 'Just now'}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {embedUrl && !isPlaying && (
                             <Button variant="ghost" size="icon" onClick={() => setPlayingVideoId(note.id)}>
                                <Play className="h-4 w-4" />
                            </Button>
                        )}
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteNote(note.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                    </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-muted-foreground">Your notebook is empty. Add a note above to get started!</p>
        )}
      </div>
    </div>
  );
}
