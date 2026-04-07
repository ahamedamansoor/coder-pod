'use client';

import { useState, useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Youtube, Play, Clock, Search, X, Video, BookOpen, FileText, Link as LinkIcon, ExternalLink, Loader2, PlusCircle, Lock, Sparkles } from 'lucide-react';
import { languages } from '@/data/languages';
import { useToast } from '@/hooks/use-toast';
import { usePlayer } from '@/contexts/PlayerContext';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { ServiceFactory } from '@/services';
import { Note } from '@/types/notes.types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface VideoNotesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  languageSlug: string;
}

// Cache with TTL
interface CacheEntry {
  data: Note[];
  timestamp: number;
}

const notesCache = new Map<string, CacheEntry>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export function VideoNotesDrawer({ open, onOpenChange, languageSlug }: VideoNotesDrawerProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState<Note | null>(null);
  const [iframeError, setIframeError] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [resourceType, setResourceType] = useState<Note['type']>('video');

  const { toast } = useToast();
  const { setContent } = usePlayer();
  const { user } = useUser();
  const { currentSupabaseClient } = useSupabaseAuth();
  const languageData = languages.find(l => l.slug === languageSlug);
  const fetchInProgressRef = useRef(false);

  // Fetch notes from Supabase with caching
  const fetchNotes = async (forceRefresh = false) => {
    if (!user) {
      // Load from localStorage for non-authenticated users
      const localNotes = localStorage.getItem(`notes_${languageSlug}`);
      if (localNotes) {
        try {
          setNotes(JSON.parse(localNotes));
        } catch (error) {
          console.error('Error parsing local notes:', error);
          setNotes([]);
        }
      } else {
        setNotes([]);
      }
      return;
    }

    // Prevent concurrent fetches
    if (fetchInProgressRef.current) {
      return;
    }

    const cacheKey = `${user.uid}-${languageSlug}`;
    const cached = notesCache.get(cacheKey);
    const now = Date.now();

    // Use cache if valid and not forcing refresh
    if (!forceRefresh && cached && (now - cached.timestamp) < CACHE_TTL) {
      setNotes(cached.data);
      return;
    }

    fetchInProgressRef.current = true;
    setIsLoading(true);
    try {
      // Only use ServiceFactory for authenticated users
      const notesService = ServiceFactory.getNotesService();
      const allNotes = await notesService.getNotesByLanguage(user.uid, languageSlug, currentSupabaseClient);
      setNotes(allNotes);

      // Update cache
      notesCache.set(cacheKey, {
        data: allNotes,
        timestamp: now,
      });
    } catch (error) {
      console.error('Error fetching notes:', error);
      toast({
        title: 'Error loading resources',
        description: 'Failed to load your saved resources.',
        variant: 'destructive',
      });
      setNotes([]);
    } finally {
      setIsLoading(false);
      fetchInProgressRef.current = false;
    }
  };

  useEffect(() => {
    if (open) {
      fetchNotes();
    }
  }, [open, languageSlug, user]);

  // Filter notes based on search
  const filteredNotes = searchQuery
    ? notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : notes;

  const handlePlayVideo = (note: Note) => {
    // Always open in modal dialog
    setPlayingVideo(note);
  };

  // Extract YouTube video ID from URL
  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const resetForm = () => {
    setTitle('');
    setUrl('');
    setResourceType('video');
  };

  const openAddDialog = () => {
    if (!user) {
      // Show sign-in required modal for non-authenticated users
      setShowSignInModal(true);
      return;
    }
    resetForm();
    setIsAddDialogOpen(true);
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

    setIsSaving(true);
    try {
      let videoId: string | undefined;

      // Extract video ID if it's a YouTube video
      if (resourceType === 'video') {
        videoId = extractVideoId(url) || undefined;
      }

      const newNote: Note = {
        id: Date.now().toString(), // Simple ID for localStorage
        title: title.trim(),
        url: url.trim(),
        type: resourceType,
        videoId,
        language: languageSlug,
        favorited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user?.uid || 'local-user',
      };

      if (user) {
        // Save to Supabase for authenticated users using current client
        const notesService = ServiceFactory.getNotesService();
        await notesService.createNote(user.uid, {
          title: title.trim(),
          url: url.trim(),
          type: resourceType,
          videoId,
          language: languageSlug,
        }, currentSupabaseClient);
      } else {
        // Save to localStorage for non-authenticated users - completely bypass ServiceFactory
        const localNotes = localStorage.getItem(`notes_${languageSlug}`);
        const existingNotes = localNotes ? JSON.parse(localNotes) : [];
        existingNotes.push(newNote);
        localStorage.setItem(`notes_${languageSlug}`, JSON.stringify(existingNotes));

        // Update local state immediately for non-authenticated users
        setNotes(existingNotes);
      }

      toast({
        title: "✅ Resource Saved!",
        description: `Your ${resourceType} has been saved successfully.`,
      });

      // Only refresh from server for authenticated users
      if (user) {
        await fetchNotes(true);
      }

      setIsAddDialogOpen(false);
      resetForm();
    } catch (error: any) {
      console.error("Error saving note:", error);
      toast({
        title: "❌ Save Failed",
        description: error.message || "Failed to save resource. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Get icon based on resource type
  const getResourceIcon = (type: Note['type']) => {
    switch (type) {
      case 'video':
        return Youtube;
      case 'blog':
        return BookOpen;
      case 'article':
        return FileText;
      case 'documentation':
        return BookOpen;
      default:
        return LinkIcon;
    }
  };

  // Get thumbnail or fallback
  const getThumbnail = (note: Note) => {
    if (note.type === 'video' && note.videoId) {
      return `https://img.youtube.com/vi/${note.videoId}/mqdefault.jpg`;
    }
    return null;
  };

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto p-0 flex flex-col">
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              {languageData?.name || languageSlug} Resources
            </SheetTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Save interesting videos, blogs, articles & links for future reference
            </p>
          </SheetHeader>

          <div className="flex-1 flex flex-col px-6 py-4">
            {/* Search Bar */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search saved resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <span className="font-medium">{filteredNotes.length} resource{filteredNotes.length !== 1 ? 's' : ''}</span>
              {searchQuery && <span>• from {notes.length} total</span>}
            </div>

            {/* Resource List - Scrollable */}
            <div className="flex-1 overflow-y-auto -mx-6 px-6 space-y-2">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : filteredNotes.length > 0 ? (
                filteredNotes.map((note) => {
                  const ResourceIcon = getResourceIcon(note.type);
                  const thumbnail = getThumbnail(note);

                  return (
                    <div
                      key={note.id}
                      onClick={() => handlePlayVideo(note)}
                      className="group cursor-pointer rounded-lg border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 overflow-hidden flex gap-3 p-2"
                    >
                      {/* Thumbnail or Icon */}
                      <div className="relative w-32 h-20 flex-shrink-0 bg-muted overflow-hidden rounded flex items-center justify-center">
                        {thumbnail ? (
                          <>
                            <img
                              src={thumbnail}
                              alt={note.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-primary/10">
                            <ResourceIcon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                          </div>
                        )}
                      </div>

                      {/* Compact Info */}
                      <div className="flex-1 min-w-0 py-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                            {note.type}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                          {note.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {(note.createdAt instanceof Date ? note.createdAt : new Date(note.createdAt)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 px-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {searchQuery
                      ? `No resources found matching "${searchQuery}"`
                      : `No ${languageData?.name || languageSlug} resources saved yet`}
                  </p>
                  {!searchQuery && (
                    <>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        Found an interesting video, blog, or article?<br />
                        Sign in to add resources for quick access!
                      </p>
                      <Button
                        onClick={openAddDialog}
                        size="sm"
                        className="gap-2"
                      >
                        <PlusCircle className="w-4 h-4" />
                        Add Resource
                      </Button>
                    </>
                  )}
                  {searchQuery && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Try adjusting your search or add new resources here.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Resource Viewer Dialog */}
      <Dialog open={!!playingVideo} onOpenChange={() => {
        setPlayingVideo(null);
        setIframeError(false);
      }}>
        <DialogContent className="max-w-5xl p-0">
          {playingVideo && (
            <div>
              {/* Video Player or Link Preview */}
              {playingVideo.type === 'video' && playingVideo.videoId ? (
                <div className="aspect-video bg-black rounded-t-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${playingVideo.videoId}?autoplay=1`}
                    title={playingVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden flex items-center justify-center relative">
                  {!iframeError ? (
                    <>
                      <iframe
                        src={playingVideo.url}
                        title={playingVideo.title}
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        onError={() => setIframeError(true)}
                      />
                      {/* Loading overlay */}
                      <div className="absolute inset-0 bg-muted/50 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-8">
                      {(() => {
                        const ResourceIcon = getResourceIcon(playingVideo.type);
                        return <ResourceIcon className="w-16 h-16 text-primary/60 mx-auto mb-4" />;
                      })()}
                      <p className="text-sm font-medium mb-1 capitalize">{playingVideo.type}</p>
                      <p className="text-xs text-muted-foreground mb-4">This site can't be embedded</p>
                      <Button asChild>
                        <a href={playingVideo.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Open in New Tab
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Resource Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl font-bold flex-1">{playingVideo.title}</h2>
                  <div className="flex gap-2 flex-shrink-0">
                    <Badge variant="secondary" className="capitalize">
                      {playingVideo.type}
                    </Badge>
                    <Badge variant="outline">
                      {languageData?.name || playingVideo.language}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {(playingVideo.createdAt instanceof Date ? playingVideo.createdAt : new Date(playingVideo.createdAt)).toLocaleDateString()}
                  </span>
                  <a
                    href={playingVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in new tab
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Resource Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Learning Resource</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Resource Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Resource Type</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between capitalize">
                    {resourceType}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem onClick={() => setResourceType('video')}>
                    <Youtube className="w-4 h-4 mr-2" />
                    Video
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setResourceType('blog')}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Blog
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setResourceType('article')}>
                    <FileText className="w-4 h-4 mr-2" />
                    Article
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setResourceType('documentation')}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Documentation
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setResourceType('link')}>
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Title *</label>
              <Input
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* URL */}
            <div className="space-y-2">
              <label className="text-sm font-medium">URL *</label>
              <Input
                placeholder="https://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            {/* Language Badge */}
            <div className="pt-2">
              <Badge variant="secondary" className="gap-1">
                <BookOpen className="w-3 h-3" />
                {languageData?.name || languageSlug}
              </Badge>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddDialogOpen(false)}
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button onClick={handleSaveNote} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Save Resource
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Sign In Required Modal */}
      <Dialog open={showSignInModal} onOpenChange={setShowSignInModal}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            {/* Animated lock icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Sign In Required
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Save Resources</span> is available only for signed-in users
              </p>
            </div>

            {/* Feature benefits */}
            <div className="w-full space-y-3 text-left">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-slate-900 dark:text-white">Save and sync resources</p>
                  <p className="text-slate-600 dark:text-slate-400">Access across all devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-slate-900 dark:text-white">Organize your learning</p>
                  <p className="text-slate-600 dark:text-slate-400">Keep everything in one place</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col w-full gap-3 pt-2">
              <Link href="/login" className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Sign In to Continue
                </Button>
              </Link>
              <Button variant="ghost" onClick={() => setShowSignInModal(false)} className="w-full">
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
