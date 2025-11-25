
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth, useUser } from '@/firebase';
import { LogOut, Menu, Settings, User as UserIcon } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { ThemeToggle } from './theme-toggle';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { useState } from 'react';

export function MainHeader() {
    const { isSidebarOpen, setSidebarOpen } = useSidebar();
    const { user } = useUser();
    const auth = useAuth();
    const [isPlaygroundOpen, setPlaygroundOpen] = useState(false);

    const handleLogout = async () => {
        await auth.signOut();
    };

    return (
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                    <Menu className="h-5 w-5" />
                </Button>
                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button onClick={() => setPlaygroundOpen(true)}>Open Playground</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8">
                                {user?.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />}
                                <AvatarFallback>{user?.displayName?.[0] || 'U'}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user?.displayName}</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user?.email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <UserIcon className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <WebPlaygroundModal isOpen={isPlaygroundOpen} onClose={() => setPlaygroundOpen(false)} />
        </header>
    );
}
