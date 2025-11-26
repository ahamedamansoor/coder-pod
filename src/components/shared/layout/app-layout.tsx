
'use client';

import { Sidebar } from '@/components/ui/sidebar';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { MainHeader } from './main-header';
import { useAuth, useUser, useFirestore } from '@/firebase';
import { useRouter, useSearchParams } from 'next/navigation';
import { collection, doc, onSnapshot, orderBy, query, where } from 'firebase/firestore';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { isSidebarOpen, setSidebarOpen } = useSidebar();
    const { user, isUserLoading } = useUser();
    const auth = useAuth();
    const firestore = useFirestore();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
        }
    }, [user, isUserLoading, router]);

    useEffect(() => {
        if (user && firestore) {
            const userDocRef = doc(firestore, 'users', user.uid);
            const unsubscribe = onSnapshot(userDocRef, (doc) => {
                if (doc.exists()) {
                    setUserRole(doc.data().role || 'user');
                }
            });
            return () => unsubscribe();
        }
    }, [user, firestore]);

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
                <MainHeader />
                <main className="p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
