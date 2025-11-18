'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Loader2, Notebook, Plus, Trash2, Youtube } from 'lucide-react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, serverTimestamp, deleteDoc, doc, Query } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { MainHeader } from './main-header';
import { useMemoFirebase } from '@/firebase/provider';
import { Skeleton } from './ui/skeleton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SidebarProvider } from './ui/sidebar';
import { useLoading } from '@/hooks/use-loading';
import Image from 'next/image';

export function NotebookPageContent() {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteUrl, setNewNoteUrl] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { hideLoader } = useLoading();

  useEffect(() => {
    if (!isUserLoading) {
        hideLoader();
    }
  }, [isUserLoading, hideLoader]);

  const notesCollection = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    // Construct a direct reference to the subcollection
    return collection(firestore, `users/${user.uid}/notes`);
  }, [user, firestore]) as Query | null;

  const { data: notes, isLoading: isNotesLoading } = useCollection(notesCollection);

  const extractVideoId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle || !newNoteUrl || !user || !firestore || !notesCollection) return;

    const videoId = extractVideoId(newNoteUrl);
    if (!videoId) {
        toast({
            variant: 'destructive',
            title: 'Invalid YouTube URL',
            description: 'Please enter a valid YouTube video link.',
        });
        return;
    }

    setIsAdding(true);
    try {
      await addDoc(notesCollection, {
        userId: user.uid,
        title: newNoteTitle,
        youtubeUrl: newNoteUrl,
        videoId: videoId,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Note Added!',
        description: `Successfully saved "${newNoteTitle}".`,
      });
      setNewNoteTitle('');
      setNewNoteUrl('');

    } catch (error) {
      console.error("Failed to add note:", error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Could not save your note. Please try again.',
      });
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!user || !firestore) return;
    const noteRef = doc(firestore, `users/${user.uid}/notes`, noteId);
    try {
        await deleteDoc(noteRef);
        toast({
            title: "Note deleted",
            description: "Your note has been successfully removed.",
        });
    } catch (error) {
        console.error("Error deleting note:", error);
        toast({
            variant: "destructive",
            title: "Deletion failed",
            description: "Could not delete the note. Please try again.",
        });
    }
  };


  if (isUserLoading) {
    return <Skeleton className="h-screen w-screen" />;
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen bg-muted/40">
        <MainHeader onToggleEditor={() => {}} isEditorOpen={false} showCodeEditorButton={false} showWebPlaygroundButton={false} />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                  <Notebook className="w-16 h-16 mx-auto text-primary mb-4" />
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                      My Notebook
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Your personal space to save and organize useful learning resources.
                  </p>
              </div>

              <Card className="mb-8">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                          <Plus />
                          Add a New Note
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <form onSubmit={handleAddNote} className="space-y-4">
                          <Input
                              type="text"
                              placeholder="Note Title (e.g., 'Java Concurrency Tutorial')"
                              value={newNoteTitle}
                              onChange={(e) => setNewNoteTitle(e.target.value)}
                              required
                              disabled={isAdding}
                          />
                          <Input
                              type="url"
                              placeholder="YouTube Video URL"
                              value={newNoteUrl}
                              onChange={(e) => setNewNoteUrl(e.target.value)}
                              required
                              disabled={isAdding}
                          />
                          <Button type="submit" disabled={isAdding || !newNoteTitle || !newNoteUrl}>
                              {isAdding ? (
                                  <>
                                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                      Saving...
                                  </>
                              ) : "Save Note"}
                          </Button>
                      </form>
                  </CardContent>
              </Card>

              <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Saved Notes</h2>
                  {isNotesLoading ? (
                      <div className="grid md:grid-cols-2 gap-4">
                          <Skeleton className="h-48 w-full" />
                          <Skeleton className="h-48 w-full" />
                      </div>
                  ) : notes && notes.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {notes.map(note => (
                          <Card key={note.id} className="overflow-hidden">
                            <div className="relative aspect-video">
                               <a href={note.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src={`https://img.youtube.com/vi/${note.videoId}/hqdefault.jpg`}
                                    alt={`Thumbnail for ${note.title}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <Youtube className="w-12 h-12 text-white" />
                                </div>
                               </a>
                            </div>
                              <CardHeader>
                                  <div className="flex justify-between items-start">
                                      <div>
                                          <CardTitle className="hover:text-primary"><a href={note.youtubeUrl} target="_blank" rel="noopener noreferrer">{note.title}</a></CardTitle>
                                          <CardDescription>
                                            Saved on {note.createdAt ? new Date(note.createdAt.seconds * 1000).toLocaleDateString() : '...'}
                                          </CardDescription>
                                      </div>
                                      <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <Trash2 className="h-4 w-4 text-destructive"/>
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your note titled "{note.title}".
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleDeleteNote(note.id)}>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                  </div>
                              </CardHeader>
                          </Card>
                      ))}
                    </div>
                  ) : (
                      <Card className="text-center py-12">
                          <CardContent>
                              <p className="text-muted-foreground">You don't have any notes yet.</p>
                              <p className="text-muted-foreground">Add a title and a YouTube URL above to get started!</p>
                          </CardContent>
                      </Card>
                  )}
              </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
