'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth, useFirestore } from '@/firebase';
import { languages } from '@/data/languages';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { AddNoteModal } from '@/components/shared/modals/add-note-modal';

interface Note {
  id: string;
  title: string;
  videoUrl: string;
  language: string;
}

export default function AllNotesPage() {
  const [notesByLanguage, setNotesByLanguage] = useState<Record<string, Note[]>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const firestore = useFirestore();

  useEffect(() => {
    const fetchNotes = async () => {
      if (!user || !firestore) return;

      const notesCollectionRef = collection(firestore, 'notes');
      const q = query(notesCollectionRef, where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      
      const fetchedNotes: Note[] = [];
      querySnapshot.forEach((doc) => {
        fetchedNotes.push({ id: doc.id, ...doc.data() } as Note);
      });

      const groupedNotes = fetchedNotes.reduce((acc, note) => {
        if (!acc[note.language]) {
          acc[note.language] = [];
        }
        acc[note.language].push(note);
        return acc;
      }, {} as Record<string, Note[]>);

      setNotesByLanguage(groupedNotes);
    };

    fetchNotes();
  }, [user, firestore]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-foreground">All Notes</h1>
        <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New Note
        </Button>
      </div>

      <AddNoteModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="space-y-12">
        {languages.map((lang) => (
          <div key={lang.slug}>
            <h2 className="text-3xl font-semibold text-foreground mb-6 flex items-center">
              {lang.icon && <lang.icon className="mr-3 h-8 w-8 text-primary" />}
              {lang.name}
            </h2>
            {notesByLanguage[lang.slug] && notesByLanguage[lang.slug].length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notesByLanguage[lang.slug].map((note) => (
                  <Card key={note.id} className="hover:shadow-lg transition-shadow duration-300 border-border">
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
              <p className="text-muted-foreground italic">No notes found for {lang.name}.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
