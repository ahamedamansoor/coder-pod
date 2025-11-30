'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useUser, useFirestore } from '@/firebase';
import { languages } from '@/data/languages';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Loader2 } from 'lucide-react';
import { AddNoteModal } from '@/components/shared/modals/add-note-modal';

interface Note {
  id: string;
  title: string;
  videoUrl: string;
  language: string;
}

export default function NotesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUser();
  const firestore = useFirestore();

  const fetchNotes = async (language: string) => {
    if (!user || !firestore) return;
    setIsLoading(true);
    try {
      const notesCollectionRef = collection(firestore, 'notes');
      const q = query(
        notesCollectionRef,
        where('userId', '==', user.uid),
        where('language', '==', language)
      );
      const querySnapshot = await getDocs(q);
      const fetchedNotes: Note[] = [];
      querySnapshot.forEach((doc) => {
        fetchedNotes.push({ id: doc.id, ...doc.data() } as Note);
      });
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedLanguage && user) {
      fetchNotes(selectedLanguage);
    }
  }, [selectedLanguage, user, firestore]);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setNotes([]);
  };

  const onNoteAdded = () => {
    if (selectedLanguage) {
      fetchNotes(selectedLanguage);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4 sm:mb-0">My Notes</h1>
        {user && (
            <Button onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create New Note
            </Button>
        )}
      </div>

      {user && <AddNoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onNoteAdded={onNoteAdded} />}

      <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Select a Language</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {languages.map((lang) => (
            <Button
              key={lang.slug}
              onClick={() => handleLanguageSelect(lang.slug)}
              variant={selectedLanguage === lang.slug ? 'default' : 'outline'}
              className="flex items-center gap-2 text-lg px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              {lang.icon && <lang.icon className="h-6 w-6" />}
              <span>{lang.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {selectedLanguage ? (
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : notes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-shadow duration-300 border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">{note.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={note.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-words"
                    >
                      {note.videoUrl}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
                <p className="text-muted-foreground text-lg">You haven't added any notes for this language yet.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground text-lg">Please select a language to view your notes.</p>
        </div>
      )}
    </div>
  );
}
