'use client';

import { useState, useEffect } from 'react';
import { useAuth, useUser } from '@/hooks/use-auth-compat';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Loader2, Search, BookmarkCheck, ExternalLink, 
  Newspaper, Trash2, X, Clock, ArrowLeft
} from 'lucide-react';
import { InnovativeHeader } from '@/components/shared';
import { useToast } from '@/hooks/use-toast';

interface BookmarkedArticle {
  id: number;
  title: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  tag_list: string[];
  user: {
    name: string;
    username: string;
  };
  bookmarkedAt: number;
}

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkedArticle[]>([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState<BookmarkedArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const STORAGE_KEY = 'bookmarked_tech_news';

  // Load bookmarks from localStorage
  const loadBookmarks = () => {
    setIsLoading(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data: BookmarkedArticle[] = JSON.parse(stored);
        // Sort by bookmarkedAt descending
        data.sort((a, b) => b.bookmarkedAt - a.bookmarkedAt);
        setBookmarks(data);
        setFilteredBookmarks(data);
      } else {
        setBookmarks([]);
        setFilteredBookmarks([]);
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
      setBookmarks([]);
      setFilteredBookmarks([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  // Filter bookmarks based on search
  useEffect(() => {
    if (searchQuery) {
      const filtered = bookmarks.filter(bookmark =>
        bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBookmarks(filtered);
    } else {
      setFilteredBookmarks(bookmarks);
    }
  }, [searchQuery, bookmarks]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } finally {
      router.push('/login');
    }
  };

  const removeBookmark = (id: number) => {
    try {
      const updatedBookmarks = bookmarks.filter(b => b.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookmarks));
      setBookmarks(updatedBookmarks);
      toast({
        title: '🗑️ Bookmark Removed',
        description: 'Article removed from your bookmarks.',
      });
    } catch (error) {
      console.error('Error removing bookmark:', error);
      toast({
        title: '❌ Remove Failed',
        description: 'Could not remove bookmark. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-background">
      <InnovativeHeader
        currentPage="bookmarks"
        user={user}
        onLogout={handleLogout}
      />

      {/* Header Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 border-b bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-amber-50/50 dark:from-yellow-950/20 dark:via-orange-950/10 dark:to-amber-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                <BookmarkCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  My Bookmarks
                </h1>
                <p className="text-sm text-muted-foreground">Your saved articles</p>
              </div>
            </div>
            <Button 
              variant="outline"
              onClick={() => router.push('/discover')}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Discover
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <BookmarkCheck className="w-4 h-4 text-yellow-600" />
                <p className="text-xs text-muted-foreground font-medium">Total Bookmarks</p>
              </div>
              <p className="text-2xl font-bold">{bookmarks.length}</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Search className="w-4 h-4 text-orange-600" />
                <p className="text-xs text-muted-foreground font-medium">Filtered</p>
              </div>
              <p className="text-2xl font-bold">{filteredBookmarks.length}</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-1">
                <Newspaper className="w-4 h-4 text-amber-600" />
                <p className="text-xs text-muted-foreground font-medium">Unique Tags</p>
              </div>
              <p className="text-2xl font-bold">
                {new Set(bookmarks.flatMap(b => b.tag_list)).size}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search bookmarked articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 h-12 rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
          </div>

          {/* Bookmarks Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading bookmarks...</p>
              </div>
            </div>
          ) : filteredBookmarks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBookmarks.map((bookmark) => {
                const bookmarkedDate = new Date(bookmark.bookmarkedAt);
                
                return (
                  <div key={bookmark.id} className="group">
                    <div className="rounded-xl border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      {/* Cover Image */}
                      {bookmark.cover_image ? (
                        <div className="relative aspect-video bg-muted overflow-hidden">
                          <img
                            src={bookmark.cover_image}
                            alt={bookmark.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeBookmark(bookmark.id);
                              }}
                              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-lg transition-colors"
                              title="Remove bookmark"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-950 dark:to-orange-950 flex items-center justify-center relative">
                          <Newspaper className="w-16 h-16 text-primary/20" />
                          <div className="absolute top-2 right-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeBookmark(bookmark.id);
                              }}
                              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col">
                        {/* Tags */}
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          {bookmark.tag_list.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg line-clamp-2 mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                          {bookmark.title}
                        </h3>

                        {/* Author & Date */}
                        <div className="flex items-center justify-between pt-3 border-t">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="min-w-0">
                              <p className="text-xs font-medium truncate">{bookmark.user.name}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                Saved {bookmarkedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </div>
                            </div>
                          </div>

                          {/* Read Button */}
                          <Button
                            size="sm"
                            variant="ghost"
                            asChild
                            className="gap-1 flex-shrink-0"
                          >
                            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" />
                              Read
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 mb-6">
                <BookmarkCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No Bookmarks Yet</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {searchQuery
                  ? `No bookmarks match "${searchQuery}". Try a different search.`
                  : "Start bookmarking interesting content from the Discover page!"}
              </p>
              <div className="flex gap-3 justify-center">
                {searchQuery && (
                  <Button onClick={() => setSearchQuery('')} variant="outline">
                    Clear Search
                  </Button>
                )}
                <Button onClick={() => router.push('/discover')} className="gap-2">
                  <Newspaper className="w-4 h-4" />
                  Browse Content
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
