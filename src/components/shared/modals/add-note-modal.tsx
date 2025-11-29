'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Video, FileText, Code } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { languages } from '@/data/languages';
import { useAuth, useFirestore } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useLoading } from '@/hooks/use-loading';
import { useToast } from '@/hooks/use-toast';

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNoteAdded?: () => void;
}

export function AddNoteModal({ isOpen, onClose, onNoteAdded }: AddNoteModalProps) {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const { user } = useAuth();
  const firestore = useFirestore();
  const { showLoader, hideLoader } = useLoading();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to create a note.',
        variant: 'destructive',
      });
      onClose();
      return;
    }

    if (!title || !videoUrl || !selectedLanguage) {
      toast({
        title: 'Missing fields',
        description: 'Please fill out all fields.',
        variant: 'destructive',
      });
      return;
    }

    showLoader();
    try {
      if (!firestore) {
        throw new Error('Firestore is not initialized');
      }
      const notesCollectionRef = collection(firestore, 'notes');
      await addDoc(notesCollectionRef, {
        title,
        videoUrl,
        language: selectedLanguage,
        userId: user.uid,
        createdAt: new Date(),
      });

      toast({
        title: 'Note created!',
        description: 'Your new note has been saved successfully.',
      });

      setTitle('');
      setVideoUrl('');
      setSelectedLanguage('');
      if (onNoteAdded) {
        onNoteAdded();
      }
      onClose();
    } catch (error) {
      console.error('Error creating note:', error);
      toast({
        title: 'Error',
        description: 'There was a problem creating your note. Please try again.',
        variant: 'destructive',
      });
    } finally {
      hideLoader();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Note</DialogTitle>
          <DialogDescription>
            Add a title, a video URL, and select a language to create a new note.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="flex items-center text-sm font-medium text-foreground">
              <FileText className="mr-2 h-4 w-4" />
              Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter a title for your note"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="videoUrl" className="flex items-center text-sm font-medium text-foreground">
              <Video className="mr-2 h-4 w-4" />
              Video URL
            </Label>
            <Input
              id="videoUrl"
              type="url"
              placeholder="https://example.com/video"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="language" className="flex items-center text-sm font-medium text-foreground">
              <Code className="mr-2 h-4 w-4" />
              Language
            </Label>
            <Select onValueChange={setSelectedLanguage} value={selectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.slug} value={lang.slug}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Create Note
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
