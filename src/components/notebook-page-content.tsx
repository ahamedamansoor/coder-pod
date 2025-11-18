'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Loader2, Notebook, Youtube, Plus, Trash2 } from 'lucide-react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, serverTimestamp, deleteDoc, doc, Query } from 'firebase/firestore';
import { summarizeYoutubeUrl } from '@/ai/flows/summarize-youtube-url';
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

export function NotebookPageContent() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const { toast } = useToast();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const notesCollection = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return collection(firestore, `users/${user.uid}/notes`);
  }, [user, firestore]) as Query | null;

  const { data: notes, isLoading: isNotesLoading } = useCollection(notesCollection);

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!youtubeUrl || !user || !firestore) return;

    setIsSummarizing(true);
    try {
      const result = await summarizeYoutubeUrl({ youtubeUrl });
      
      await addDoc(notesCollection!, {
        userId: user.uid,
        title: result.title,
        summary: result.summary,
        sourceUrl: youtubeUrl,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Note Added!',
        description: `Successfully summarized "${result.title}".`,
      });
      setYoutubeUrl('');

    } catch (error) {
      console.error("Failed to add note:", error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Could not summarize the video. Please check the URL and try again.',
      });
    } finally {
      setIsSummarizing(false);
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
    <div className="flex flex-col min-h-screen bg-muted/40">
       <MainHeader onToggleEditor={() => {}} isEditorOpen={false} showCodeEditorButton={false} showWebPlaygroundButton={false} />
       <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <Notebook className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                    My AI-Powered Notebook
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Add a YouTube video URL to get an instant, AI-generated summary and save it to your notes.
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
                    <form onSubmit={handleAddNote} className="flex gap-4">
                        <div className="relative flex-1">
                            <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="url"
                                placeholder="https://www.youtube.com/watch?v=..."
                                value={youtubeUrl}
                                onChange={(e) => setYoutubeUrl(e.target.value)}
                                required
                                className="pl-10"
                                disabled={isSummarizing}
                            />
                        </div>
                        <Button type="submit" disabled={isSummarizing || !youtubeUrl}>
                            {isSummarizing ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Summarizing...
                                </>
                            ) : "Add Note"}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Saved Notes</h2>
                {isNotesLoading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-32 w-full" />
                        <Skeleton className="h-32 w-full" />
                    </div>
                ) : notes && notes.length > 0 ? (
                    notes.map(note => (
                        <Card key={note.id}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle>{note.title}</CardTitle>
                                        <CardDescription>
                                            <a href={note.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 text-sm mt-1">
                                                <Youtube className="h-4 w-4"/> Source Video
                                            </a>
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
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{note.summary}</p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Card className="text-center py-12">
                        <CardContent>
                            <p className="text-muted-foreground">You don't have any notes yet.</p>
                            <p className="text-muted-foreground">Add a YouTube URL above to get started!</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
       </main>
    </div>
  )
}
