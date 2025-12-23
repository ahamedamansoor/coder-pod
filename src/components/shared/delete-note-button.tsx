'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
} from '@/components/ui/alert-dialog';
import { Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DeleteNoteButtonProps {
  noteId: string;
  noteTitle?: string;
  onDelete?: (noteId: string) => Promise<void>;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'destructive' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
}

export function DeleteNoteButton({
  noteId,
  noteTitle = 'this note',
  onDelete,
  size = 'sm',
  variant = 'ghost',
  className = '',
  disabled = false,
}: DeleteNoteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(true);
    setIsOpen(false);

    try {
      if (onDelete) {
        await onDelete(noteId);
      }
      
      toast({
        title: "Note deleted",
        description: `"${noteTitle}" has been successfully deleted.`,
        duration: 3000,
      });
    } catch (error) {
      console.error('Error deleting note:', error);
      toast({
        title: "Error",
        description: "Failed to delete the note. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`${className} ${variant === 'destructive' ? 'hover:bg-destructive/10' : 'hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/20 dark:hover:text-red-400'} transition-colors`}
          disabled={disabled || isDeleting}
          title="Delete note"
        >
          {isDeleting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Trash2 className="w-4 h-4" />
          )}
        </Button>
      </AlertDialogTrigger>
      
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-destructive" />
            Delete Note
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete "{noteTitle}"? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-destructive hover:bg-destructive/90"
          >
            {isDeleting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Deleting...
              </>
            ) : (
              'Delete'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Usage example component for reference
export function DeleteNoteExample() {
  const handleDeleteNote = async (noteId: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Deleted note: ${noteId}`);
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold">Delete Note Button Examples</h3>
      
      <div className="flex flex-wrap gap-2">
        <DeleteNoteButton
          noteId="note-1"
          noteTitle="My Learning Notes"
          onDelete={handleDeleteNote}
          variant="ghost"
          size="sm"
        />
        
        <DeleteNoteButton
          noteId="note-2"
          noteTitle="Important Concepts"
          onDelete={handleDeleteNote}
          variant="outline"
          size="default"
        />
        
        <DeleteNoteButton
          noteId="note-3"
          noteTitle="Draft Article"
          onDelete={handleDeleteNote}
          variant="destructive"
          size="lg"
        />
      </div>
    </div>
  );
}
