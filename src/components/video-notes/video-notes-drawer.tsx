'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Youtube, Play, Clock, Search, X, Video, BookOpen, FileText, Link as LinkIcon, ExternalLink, Loader2 } from 'lucide-react';
import { languages } from '@/data/languages';

interface SavedNote {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'blog' | 'article' | 'documentation' | 'link';
  videoId?: string; // Only for YouTube videos
  language: string;
  createdAt: number;
}

interface VideoNotesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  languageSlug: string;
}

export function VideoNotesDrawer({ open, onOpenChange, languageSlug }: VideoNotesDrawerProps) {
  const [notes, setNotes] = useState<SavedNote[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState<SavedNote | null>(null);
  const [iframeError, setIframeError] = useState(false);

  const languageData = languages.find(l => l.slug === languageSlug);
  const STORAGE_KEY = 'video_notes';

  // Load notes from localStorage
  useEffect(() => {
    if (open) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const allNotes: SavedNote[] = JSON.parse(stored);
        // Filter by language and sort by createdAt descending
        const languageNotes = allNotes
          .filter(note => note.language === languageSlug)
          .sort((a, b) => b.createdAt - a.createdAt);
        setNotes(languageNotes);
      } else {
        setNotes([]);
      }
    }
  }, [open, languageSlug]);

  // Filter notes based on search
  const filteredNotes = searchQuery
    ? notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : notes;

  const handlePlayVideo = (note: SavedNote) => {
    setPlayingVideo(note);
  };

  // Get icon based on resource type
  const getResourceIcon = (type: SavedNote['type']) => {
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
  const getThumbnail = (note: SavedNote) => {
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
              {filteredNotes.length > 0 ? (
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
                          {new Date(note.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Found an interesting video, blog, or article?<br />
                    Save it from the Notes page for quick access!
                  </p>
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
                    {new Date(playingVideo.createdAt).toLocaleDateString()}
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
    </>
  );
}
