'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Loader2, Notebook, Youtube, Plus, Trash2, PlayCircle } from 'lucide-react';
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
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SidebarProvider } from './ui/sidebar';
import { useLoading } from '@/hooks/use-loading';

// Helper to extract YouTube video ID
function getYoutubeVideoId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}


export function NotebookPageContent() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [title, setTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const notesCollection = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return collection(firestore, `users/${user.uid}/notes`);
  }, [user, firestore]) as Query | null;

  const { data: notes, isLoading: isNotesLoading } = useCollection(notesCollection);

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!youtubeUrl || !title || !user || !firestore) return;

    if (!getYoutubeVideoId(youtubeUrl)) {
        toast({
            variant: 'destructive',
            title: 'Invalid YouTube URL',
            description: 'Please enter a valid YouTube video URL.',
        });
        return;
    }

    setIsAdding(true);
    try {
      await addDoc(notesCollection!, {
        userId: user.uid,
        title: title,
        youtubeUrl: youtubeUrl,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Note Added!',
        description: `Successfully saved "${title}".`,
      });
      setYoutubeUrl('');
      setTitle('');

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
                      My Video Notebook
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Save and watch your favorite educational YouTube videos in one place.
                  </p>
              </div>

              <Card className="mb-8">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                          <Plus />
                          Add a New Video Note
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <form onSubmit={handleAddNote} className="flex flex-col sm:flex-row gap-4">
                            <Input
                                type="text"
                                placeholder="Note Title (e.g., 'React Hooks Tutorial')"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="flex-1"
                                disabled={isAdding}
                            />
                            <div className="relative flex-1">
                              <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                  type="url"
                                  placeholder="https://www.youtube.com/watch?v=..."
                                  value={youtubeUrl}
                                  onChange={(e) => setYoutubeUrl(e.target.value)}
                                  required
                                  className="pl-10"
                                  disabled={isAdding}
                              />
                            </div>
                          <Button type="submit" disabled={isAdding || !youtubeUrl || !title}>
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
                      <div className="space-y-4">
                          <Skeleton className="h-24 w-full" />
                          <Skeleton className="h-24 w-full" />
                      </div>
                  ) : notes && notes.length > 0 ? (
                      notes.map(note => {
                        const videoId = getYoutubeVideoId(note.youtubeUrl);
                        return (
                          <Card key={note.id}>
                              <CardHeader>
                                  <div className="flex justify-between items-start">
                                      <div>
                                          <CardTitle>{note.title}</CardTitle>
                                          <CardDescription>
                                              <a href={note.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 text-sm mt-1">
                                                  <Youtube className="h-4 w-4"/> View on YouTube
                                              </a>
                                          </CardDescription>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {videoId && (
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="secondary" size="sm">
                                                        <PlayCircle className="mr-2 h-4 w-4" /> Watch
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-4xl h-auto aspect-video p-0 border-0">
                                                    <iframe
                                                        className="w-full h-full rounded-lg"
                                                        src={`https://www.youtube.com/embed/${videoId}`}
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </DialogContent>
                                            </Dialog>
                                        )}
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
                                                  This action cannot be undone. This will permanently delete your note.
                                              </AlertDialogDescription>
                                              </AlertDialogHeader>
                                              <AlertDialogFooter>
                                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                                              <AlertDialogAction onClick={() => handleDeleteNote(note.id)}>Delete</AlertDialogAction>
                                              </AlertDialogFooter>
                                          </AlertDialogContent>
                                      </AlertDialog>
                                      </div>
                                  </div>
                              </CardHeader>
                          </Card>
                        )
                      })
                  ) : (
                      <Card className="text-center py-12">
                          <CardContent>
                              <p className="text-muted-foreground">You don't have any notes yet.</p>
                              <p className="text-muted-foreground">Add a video title and YouTube URL above to get started!</p>
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
