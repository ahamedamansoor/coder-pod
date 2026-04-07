'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { useRouter } from 'next/navigation';
import { ServiceFactory } from '@/services';
import { Note } from '@/types/notes.types';
import { enabledLanguages as languages } from '@/data/languages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  PlusCircle, Loader2, Search, Trash2, X,
  Youtube, Play, Clock, Filter, Code, BookmarkIcon, Link as LinkIcon, FileText, BookOpen, ExternalLink
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { usePlayer } from '@/contexts/PlayerContext';
import { FeatureGateModal } from '@/components/shared/feature-gate-modal';

// Using Note type from notes.types.ts

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [resourceType, setResourceType] = useState<Note['type']>('video');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [isSaving, setIsSaving] = useState(false);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [showFeatureGate, setShowFeatureGate] = useState(false);

  const { user, isUserLoading } = useUser();
  const { currentSupabaseClient } = useSupabaseAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { setContent } = usePlayer();

  // Prevent duplicate fetches
  const fetchInProgress = useRef(false);
  const hasFetchedOnce = useRef(false);
  const lastFetchedUserId = useRef<string | null>(null);

  const STORAGE_KEY = 'video_notes';

  // Extract YouTube video ID from URL
  const extractVideoId = (url: string): string | null => {
    console.log('🔍 Extracting video ID from URL:', url);

    const patterns = [
      // Standard YouTube watch URLs
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      // YouTube shorts URLs
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      // YouTube live URLs
      /youtube\.com\/live\/([a-zA-Z0-9_-]{11})/,
      // YouTube v URLs (alternative format)
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        console.log('✅ Video ID extracted:', match[1]);
        return match[1];
      }
    }
    console.log('❌ No video ID found for URL:', url);
    return null;
  };

  // Fetch saved resources from Supabase
  const fetchNotes = useCallback(async () => {
    console.log('📝 fetchNotes called, user:', user?.uid, 'fetchInProgress:', fetchInProgress.current);

    // Prevent duplicate calls
    if (fetchInProgress.current) {
      console.log('⚠️ Fetch already in progress, skipping...');
      return;
    }

    if (!user) {
      console.log('❌ No user - clearing notes');
      setNotes([]);
      setFilteredNotes([]);
      setIsLoading(false);
      setShowFeatureGate(true);
      return;
    }

    fetchInProgress.current = true;
    setIsLoading(true);
    console.log('🔄 Starting notes fetch for user:', user.uid);

    try {
      const notesService = ServiceFactory.getNotesService();
      console.log('📦 NotesService obtained, fetching...');

      const fetchedNotes = await notesService.getUserNotes(user.uid, currentSupabaseClient);
      console.log('✅ Notes fetched successfully:', fetchedNotes.length, 'notes');

      setNotes(fetchedNotes);
      setFilteredNotes(fetchedNotes);
      hasFetchedOnce.current = true;

      if (fetchedNotes.length === 0) {
        console.log('💡 No notes found - empty state will be shown');
      }
    } catch (error: any) {
      console.error("❌ Error fetching notes:", error);
      console.error("Error details:", {
        message: error?.message,
        code: error?.code,
        details: error?.details
      });

      // Only show toast if it's not a "table doesn't exist" error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('relation "notes" does not exist')) {
        console.warn('⚠️ Notes table does not exist in Supabase. Please run the SQL setup script.');
      } else {
        toast({
          title: "Error loading notes",
          description: errorMessage || "Failed to load your notes. Please try again.",
          variant: "destructive",
        });
      }

      setNotes([]);
      setFilteredNotes([]);
    } finally {
      setIsLoading(false);
      fetchInProgress.current = false;
      console.log('✔️ fetchNotes complete, loading state cleared');
    }
  }, [user, toast]);

  // Note: localStorage migration removed - using Supabase directly

  useEffect(() => {
    console.log('Notes page auth state:', {
      isUserLoading,
      hasUser: !!user,
      userId: user?.uid,
      lastFetchedUserId: lastFetchedUserId.current
    });

    if (isUserLoading) {
      // Set a timeout to prevent infinite loading
      const timeout = setTimeout(() => {
        console.error('⚠️ Auth loading timeout - forcing load completion');
        setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }

    if (!user) {
      console.log('No user - showing feature gate modal');
      setIsLoading(false);
      setShowFeatureGate(true);
      return;
    }

    // Only fetch if we haven't fetched for this user yet
    if (lastFetchedUserId.current === user.uid) {
      console.log('✋ Already fetched notes for this user, skipping...');
      setIsLoading(false); // Clear loading state when skipping
      return;
    }

    console.log('User authenticated - fetching notes for first time');
    lastFetchedUserId.current = user.uid;
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid, isUserLoading]);

  // Reset ref on unmount to prevent stale data on remount
  useEffect(() => {
    return () => {
      lastFetchedUserId.current = null;
    };
  }, []);

  // Filter notes based on search, language, and type
  useEffect(() => {
    let filtered = [...notes];

    if (searchQuery) {
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (languageFilter) {
      filtered = filtered.filter(note => note.language === languageFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter(note => note.type === typeFilter);
    }

    setFilteredNotes(filtered);
  }, [searchQuery, languageFilter, typeFilter, notes]);

  const handleLogout = async () => {
    router.push('/login');
  };

  const resetForm = () => {
    setTitle('');
    setUrl('');
    setResourceType('video');
    setSelectedLanguage('javascript');
  };

  const openCreateDialog = () => {
    if (!user) {
      setShowFeatureGate(true);
      return;
    }
    resetForm();
    setIsDialogOpen(true);
  };

  const handleSaveNote = async () => {
    if (!title.trim()) {
      toast({
        title: "Title Required",
        description: "Please enter a title.",
        variant: "destructive",
      });
      return;
    }

    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a URL.",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to save notes.",
        variant: "destructive",
      });
      return;
    }

    if (!currentSupabaseClient) {
      toast({
        title: "Connection Error",
        description: "Database connection not available. Please refresh the page.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      let videoId: string | undefined;

      // Extract video ID if it's a YouTube video
      if (resourceType === 'video') {
        videoId = extractVideoId(url) || undefined;
      }

      const notesService = ServiceFactory.getNotesService();
      await notesService.createNote(user.uid, {
        title: title.trim(),
        url: url.trim(),
        type: resourceType,
        videoId,
        language: selectedLanguage,
      }, currentSupabaseClient);

      toast({
        title: "✅ Resource Saved!",
        description: `Your ${resourceType} has been saved successfully.`,
      });

      await fetchNotes();
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      console.error("Error saving note:", error);
      console.error("Error details:", {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
        user: user?.uid,
        currentSupabaseClient: !!currentSupabaseClient
      });
      
      let errorMessage = "Failed to save resource. Please try again.";
      
      if (error?.message) {
        if (error.message.includes('duplicate key')) {
          errorMessage = "This resource already exists in your notes.";
        } else if (error.message.includes('permission')) {
          errorMessage = "You don't have permission to save notes. Please try logging out and back in.";
        } else if (error.message.includes('auth')) {
          errorMessage = "Authentication error. Please log in again.";
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: "❌ Save Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;

    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to delete notes.",
        variant: "destructive",
      });
      return;
    }

    try {
      const notesService = ServiceFactory.getNotesService();
      await notesService.deleteNote(noteId, user.uid, currentSupabaseClient);

      await fetchNotes();
      toast({
        title: "🗑️ Resource Deleted",
        description: "Resource has been deleted.",
      });
    } catch (error) {
      console.error("Error deleting note:", error);
      toast({
        title: "❌ Delete Failed",
        description: "Failed to delete resource.",
        variant: "destructive",
      });
    }
  };

  // Get icon based on resource type
  const getResourceIcon = (type: Note['type']) => {
    switch (type) {
      case 'video': return Youtube;
      case 'blog': return BookOpen;
      case 'article': return FileText;
      case 'documentation': return BookOpen;
      default: return LinkIcon;
    }
  };

  // Debug render state
  console.log('🎨 Render state:', {
    isUserLoading,
    isLoading,
    notesCount: notes.length,
    filteredCount: filteredNotes.length
  });

  if (isUserLoading) {
    console.log('⏳ Showing user loading screen');
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading notes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      <InnovativeHeader
        currentPage="notes"
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content - Scrollable */}
      <div className="flex-1 relative overflow-y-auto z-10">

        {/* Page Title - Scrolls with content */}
        <div className="flex-shrink-0 pt-6">
          <LearningPathTitle
            icon={BookmarkIcon}
            title="Learning Resources"
            subtitle="Save videos, blogs, articles & links for quick access — organize your learning materials in one place"
            action={
              notes.length > 0 ? (
                <Button
                  onClick={openCreateDialog}
                  size="lg"
                  className="gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add Resource
                </Button>
              ) : undefined
            }
          />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <div className="w-full">
            {/* Search and Filter Bar - Sticky */}
            <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md py-4 mb-6 flex flex-col sm:flex-row gap-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border/40 transition-all duration-200">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Resource Type Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 min-w-[140px] h-auto py-3">
                    <Filter className="w-4 h-4" />
                    {typeFilter ? typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1) : 'All Types'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => setTypeFilter(null)}>
                    <span className="font-medium">All Types</span>
                  </DropdownMenuItem>
                  {['video', 'blog', 'article', 'documentation', 'link'].map(type => {
                    const count = notes.filter(n => n.type === type).length;
                    if (count === 0) return null;
                    return (
                      <DropdownMenuItem key={type} onClick={() => setTypeFilter(type)}>
                        <div className="flex items-center justify-between w-full">
                          <span className="capitalize">{type}</span>
                          <Badge variant="secondary" className="ml-2">{count}</Badge>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Language Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 min-w-[160px] h-auto py-3">
                    <Code className="w-4 h-4" />
                    {languageFilter
                      ? languages.find(l => l.slug === languageFilter)?.name
                      : 'All Languages'
                    }
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => setLanguageFilter(null)}>
                    <span className="font-medium">All Languages</span>
                  </DropdownMenuItem>
                  {Array.from(new Set(notes.map(n => n.language))).sort().map(lang => {
                    const langData = languages.find(l => l.slug === lang);
                    const count = notes.filter(n => n.language === lang).length;
                    return (
                      <DropdownMenuItem key={lang} onClick={() => setLanguageFilter(lang)}>
                        <div className="flex items-center justify-between w-full">
                          <span>{langData?.name || lang}</span>
                          <Badge variant="secondary" className="ml-2">{count}</Badge>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Active Filters */}
            {(searchQuery || languageFilter || typeFilter) && (
              <div className="mb-4 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchQuery}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                  </Badge>
                )}
                {typeFilter && (
                  <Badge variant="secondary" className="gap-1 capitalize">
                    {typeFilter}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setTypeFilter(null)} />
                  </Badge>
                )}
                {languageFilter && (
                  <Badge variant="secondary" className="gap-1">
                    {languages.find(l => l.slug === languageFilter)?.name}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setLanguageFilter(null)} />
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Video Grid */}
          <div className="w-full">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading your resources...</p>
                </div>
              </div>
            ) : filteredNotes.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3">
                {filteredNotes.map((note) => {
                  const langData = languages.find(l => l.slug === note.language);
                  const ResourceIcon = getResourceIcon(note.type);
                  const hasThumb = note.type === 'video' && note.videoId;
                  const createdDate = note.createdAt instanceof Date ? note.createdAt : new Date(note.createdAt);

                  // Debug logging for thumbnail display
                  console.log('🎥 Processing note:', {
                    id: note.id,
                    title: note.title,
                    type: note.type,
                    videoId: note.videoId,
                    hasThumb,
                    url: note.url
                  });

                  return (
                    <div key={note.id} className="group">
                      <div className="rounded-lg border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50">
                        {/* Thumbnail or Icon */}
                        <div
                          className="relative aspect-video bg-muted cursor-pointer overflow-hidden flex items-center justify-center"
                          onClick={() => {
                            if (!note.url) {
                              toast({
                                title: 'Missing URL',
                                description: 'This resource does not have a URL saved.',
                                variant: 'destructive',
                              });
                              return;
                            }

                            // Open videos in floating player
                            if (note.type === 'video' && note.videoId) {
                              setContent({
                                id: note.id,
                                type: 'video',
                                url: note.url,
                                title: note.title,
                              });
                            } else {
                              // Open all non-video resources in new tab
                              window.open(note.url, '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          {hasThumb ? (
                            <>
                              <img
                                src={`https://img.youtube.com/vi/${note.videoId}/mqdefault.jpg`}
                                alt={note.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onLoad={() => {
                                  console.log('✅ Thumbnail loaded successfully for video:', note.videoId);
                                }}
                                onError={(e) => {
                                  console.log('❌ Thumbnail failed to load for video:', note.videoId);
                                  // Fallback to higher quality if mqdefault fails
                                  const target = e.target as HTMLImageElement;
                                  if (target.src.includes('mqdefault.jpg')) {
                                    console.log('🔄 Trying hqdefault.jpg fallback...');
                                    target.src = `https://img.youtube.com/vi/${note.videoId}/hqdefault.jpg`;
                                  } else if (target.src.includes('hqdefault.jpg')) {
                                    console.log('🔄 Trying maxresdefault.jpg fallback...');
                                    target.src = `https://img.youtube.com/vi/${note.videoId}/maxresdefault.jpg`;
                                  } else {
                                    console.log('❌ All thumbnail attempts failed, showing fallback icon');
                                    // If all fail, hide the image and show fallback
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `
                                        <div class="w-full h-full flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                          <svg class="w-10 h-10 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                          </svg>
                                        </div>
                                      `;
                                    }
                                  }
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                  <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                              <ResourceIcon className="w-10 h-10 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                            </div>
                          )}

                          {/* Type & Language Badges */}
                          <div className="absolute top-1.5 left-1.5 flex gap-1.5">
                            <Badge className="bg-black/60 backdrop-blur-sm text-white border-0 text-[10px] px-1.5 py-0.5 capitalize">
                              {note.type}
                            </Badge>
                            <Badge className="bg-black/60 backdrop-blur-sm text-white border-0 text-[10px] px-1.5 py-0.5">
                              {langData?.name || note.language}
                            </Badge>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-2.5">
                          <h3
                            className="font-semibold text-xs line-clamp-2 mb-1.5 cursor-pointer hover:text-primary transition-colors leading-tight"
                            onClick={() => {
                              if (!note.url) {
                                toast({
                                  title: 'Missing URL',
                                  description: 'This resource does not have a URL saved.',
                                  variant: 'destructive',
                                });
                                return;
                              }

                              // Open videos in floating player
                              if (note.type === 'video' && note.videoId) {
                                setContent({
                                  id: note.id,
                                  type: 'video',
                                  url: note.url,
                                  title: note.title,
                                });
                              } else {
                                // Open all non-video resources in new tab
                                window.open(note.url, '_blank', 'noopener,noreferrer');
                              }
                            }}
                          >
                            {note.title}
                          </h3>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteNote(note.id);
                              }}
                              className="p-1 rounded hover:bg-destructive/10 hover:text-destructive transition-colors"
                              title="Delete resource"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
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
                  <BookmarkIcon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No Resources Found</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  {searchQuery || languageFilter || typeFilter
                    ? "No resources match your filters. Try adjusting your search or filters."
                    : "Start building your resource library! Save videos, blogs, articles & links for quick access."}
                </p>
                <Button onClick={openCreateDialog} className="gap-2">
                  <PlusCircle className="w-5 h-5" />
                  Add Your First Resource
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Resource Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookmarkIcon className="w-5 h-5 text-primary" />
              Add Learning Resource
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Save videos, blog posts, articles, documentation & useful links
            </p>
          </DialogHeader>

          <div className="space-y-5 py-4">
            {/* Resource Type Selector */}
            <div>
              <label className="text-sm font-medium mb-2 block">Resource Type *</label>
              <div className="grid grid-cols-5 gap-2">
                {[{ type: 'video', icon: Youtube, label: 'Video' },
                { type: 'blog', icon: BookOpen, label: 'Blog' },
                { type: 'article', icon: FileText, label: 'Article' },
                { type: 'documentation', icon: BookOpen, label: 'Docs' },
                { type: 'link', icon: LinkIcon, label: 'Link' }].map(({ type, icon: Icon, label }) => (
                  <button
                    key={type}
                    onClick={() => setResourceType(type as Note['type'])}
                    className={cn(
                      "flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-all",
                      resourceType === type
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", resourceType === type ? "text-primary" : "text-muted-foreground")} />
                    <span className="text-xs font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Title *</label>
              <Input
                placeholder="E.g., React Hooks Tutorial, MDN CSS Grid Guide..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-11"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">URL *</label>
              <Input
                placeholder={resourceType === 'video' ? 'https://www.youtube.com/watch?v=...' : 'https://...'}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-11"
              />
              <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                Paste the {resourceType === 'video' ? 'YouTube video' : 'web page'} URL
              </p>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Programming Language *</label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full h-11">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <SelectValue placeholder="Select Language" />
                  </div>
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {languages.map(lang => (
                    <SelectItem key={lang.slug} value={lang.slug}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1.5">
                Organize resources by programming language
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isSaving}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveNote}
              disabled={isSaving || !title.trim() || !url.trim()}
              className="gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4" />
                  Add Resource
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Feature Gate Modal */}
      <FeatureGateModal
        isOpen={showFeatureGate}
        onClose={() => setShowFeatureGate(false)}
        featureName="Notes"
      />
    </div>
  );
}
