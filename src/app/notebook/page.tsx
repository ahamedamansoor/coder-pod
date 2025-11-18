'use client';
import { NotebookPageContent } from '@/components/notebook-page-content';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function NotebookPage() {
    return (
        <Suspense fallback={<Skeleton className="h-screen w-screen" />}>
            <NotebookPageContent />
        </Suspense>
    )
}
