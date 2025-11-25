'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { languages } from '@/app/data';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function NotesLanguageSelectionPage() {
  const router = useRouter();

  const handleLanguageClick = (languageSlug: string) => {
    router.push(`/notes/${languageSlug}`);
  };

  const handleCreateNoteClick = () => {
    router.push('/notes/create');
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Select a Language</h1>
        <Button onClick={handleCreateNoteClick}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Note
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {languages.map((lang) => (
          <Card 
            key={lang.slug} 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-border" 
            onClick={() => handleLanguageClick(lang.slug)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-xl font-semibold text-foreground">
                {lang.icon && <lang.icon className="mr-3 h-8 w-8 text-primary" />}
                {lang.name}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
