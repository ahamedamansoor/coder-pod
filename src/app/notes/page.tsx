'use client';

import { useState, useEffect } from 'react';
import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { languages } from '@/data/languages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  PlusCircle, Loader2, Search, Trash2, X, 
  Youtube, Play, Clock, Filter, Code, BookmarkIcon, Link as LinkIcon, FileText, BookOpen, ExternalLink, Sparkles
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import AIProviderModal from '@/components/dashboard/GeminiKeyModal';

interface SavedNote {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'blog' | 'article' | 'documentation' | 'link';
  videoId?: string;
  language: string;
  createdAt: number;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<SavedNote[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<SavedNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAiKeyModal, setShowAiKeyModal] = useState(false);
  
  // Form states
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [resourceType, setResourceType] = useState<SavedNote['type']>('video');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [isSaving, setIsSaving] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { setContent } = usePlayer();

  const STORAGE_KEY = 'video_notes';

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

  // Fetch saved resources from localStorage
  const fetchNotes = () => {
    setIsLoading(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const fetchedNotes: SavedNote[] = JSON.parse(stored);
        // Sort by createdAt descending
        fetchedNotes.sort((a, b) => b.createdAt - a.createdAt);
        setNotes(fetchedNotes);
        setFilteredNotes(fetchedNotes);
      } else {
        setNotes([]);
        setFilteredNotes([]);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      setNotes([]);
      setFilteredNotes([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
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
    if (auth) {
      await auth.signOut();
      router.push('/login');
    }
  };

  const resetForm = () => {
    setTitle('');
    setUrl('');
    setResourceType('video');
    setSelectedLanguage('javascript');
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleSaveNote = () => {
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

      const newNote: SavedNote = {
        id: Date.now().toString(),
        title: title.trim(),
        url: url.trim(),
        type: resourceType,
        videoId,
        language: selectedLanguage,
        createdAt: Date.now(),
      };

      const updatedNotes = [newNote, ...notes];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
      
      toast({
        title: "✅ Resource Saved!",
        description: `Your ${resourceType} has been saved successfully.`,
      });
      
      fetchNotes();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error("Error saving note:", error);
      toast({
        title: "❌ Save Failed",
        description: "Failed to save resource. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteNote = (noteId: string) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;

    try {
      const updatedNotes = notes.filter(note => note.id !== noteId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
      
      fetchNotes();
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
  const getResourceIcon = (type: SavedNote['type']) => {
    switch (type) {
      case 'video': return Youtube;
      case 'blog': return BookOpen;
      case 'article': return FileText;
      case 'documentation': return BookOpen;
      default: return LinkIcon;
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
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      <InnovativeHeader
        currentPage="notes"
        user={user}
        onLogout={handleLogout}
      />

      {/* Page Title - Fixed */}
      <div className="flex-shrink-0">
        <LearningPathTitle
          icon={BookmarkIcon}
          title="Learning Resources"
          subtitle="Save videos, blogs, articles & links for quick access — organize your learning materials in one place"
          action={
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setShowAiKeyModal(true)}
                variant="outline"
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50"
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                AI Settings
              </Button>
              <Button 
                onClick={openCreateDialog}
                size="lg"
                className="gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                Add Resource
              </Button>
            </div>
          }
        />
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 relative overflow-y-auto">

        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full">
            {/* Search and Filter Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-3">
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
                  <Button variant="outline" className="gap-2 min-w-[140px]">
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
                  <Button variant="outline" className="gap-2 min-w-[160px]">
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
                  
                  return (
                    <div key={note.id} className="group">
                      <div className="rounded-lg border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50">
                        {/* Thumbnail or Icon */}
                        <div 
                          className="relative aspect-video bg-muted cursor-pointer overflow-hidden flex items-center justify-center"
                          onClick={() => {
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
                              {new Date(note.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
                {[{type: 'video', icon: Youtube, label: 'Video'}, 
                  {type: 'blog', icon: BookOpen, label: 'Blog'}, 
                  {type: 'article', icon: FileText, label: 'Article'}, 
                  {type: 'documentation', icon: BookOpen, label: 'Docs'}, 
                  {type: 'link', icon: LinkIcon, label: 'Link'}].map(({type, icon: Icon, label}) => (
                  <button
                    key={type}
                    onClick={() => setResourceType(type as SavedNote['type'])}
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-11">
                    <span className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      {languages.find(l => l.slug === selectedLanguage)?.name || 'Select Language'}
                    </span>
                    <Filter className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-h-[300px] overflow-y-auto">
                  {languages.map(lang => (
                    <DropdownMenuItem 
                      key={lang.slug} 
                      onClick={() => setSelectedLanguage(lang.slug)}
                      className="cursor-pointer"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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

      {/* AI Provider Modal */}
      <AIProviderModal
        isOpen={showAiKeyModal}
        onClose={() => setShowAiKeyModal(false)}
        onSave={async (provider, apiKey) => {
          // Persist locally (client-side only)
          localStorage.setItem('ai_api_key', apiKey);
          localStorage.setItem('ai_provider', provider);
          // Basic non-empty validation
          const isValid = !!apiKey && apiKey.trim().length > 0;
          if (isValid) {
            toast({
              title: 'AI Provider Connected!',
              description: `Successfully configured ${provider}`,
            });
          }
          return isValid;
        }}
      />
    </div>
  );
}
