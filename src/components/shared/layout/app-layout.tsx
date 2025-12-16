
'use client';

import { Sidebar } from '@/components/ui/sidebar';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { MainHeader } from './main-header';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { open: isSidebarOpen } = useSidebar();
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const handleToggleEditor = () => {
        setIsEditorOpen(!isEditorOpen);
    };

    // ... (rest of the component remains the same)

    return (
        <div className="h-screen lg:flex">
            <Sidebar />
            <div
                className={cn(
                    'flex-1 transition-all duration-300',
                    isSidebarOpen && 'lg:ml-64'
                )}
            >
                <MainHeader 
                    onToggleEditor={handleToggleEditor}
                    isEditorOpen={isEditorOpen}
                />
                <main className="p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
