'use client';

import { useState, useEffect } from 'react';
import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { usePlayer } from '@/contexts/PlayerContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Loader2, Search, Bookmark, BookmarkCheck, ExternalLink, 
  Newspaper, TrendingUp, Code, X, Filter, Clock, Heart, Video, Podcast, Sparkles
} from 'lucide-react';
import { InnovativeHeader } from '@/components/shared';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  tag_list?: string[];
  type_of?: 'article' | 'video_article' | 'podcast_episode';
  user?: {
    name: string;
    username: string;
    profile_image: string;
  };
  public_reactions_count?: number;
  comments_count?: number;
  reading_time_minutes?: number;
}

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

export default function DiscoverPage() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<DevToArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [contentType, setContentType] = useState<'all' | 'article' | 'video' | 'podcast'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { setContent } = usePlayer();

  const STORAGE_KEY = 'bookmarked_tech_news';
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
  
  // Tech-related keywords for content filtering
  const TECH_KEYWORDS = [
    'programming', 'code', 'developer', 'software', 'web', 'app', 'api',
    'javascript', 'python', 'java', 'react', 'typescript', 'css', 'html',
    'database', 'server', 'cloud', 'devops', 'tutorial', 'framework',
    'algorithm', 'data', 'frontend', 'backend', 'fullstack', 'mobile',
    'computer', 'tech', 'development', 'engineering', 'nodejs', 'angular',
    'vue', 'docker', 'kubernetes', 'aws', 'azure', 'git', 'linux', 'sql'
  ];

  // Filter to ensure tech relevance
  const isTechRelated = (title: string, description: string): boolean => {
    const text = `${title} ${description}`.toLowerCase();
    return TECH_KEYWORDS.some(keyword => text.includes(keyword));
  };

  const CONTENT_TYPES = [
    { name: 'All', value: 'all', icon: Sparkles },
    { name: 'Articles', value: 'article', icon: Newspaper },
    { name: 'Videos', value: 'video', icon: Video },
    { name: 'Podcasts', value: 'podcast', icon: Podcast },
  ];
  const POPULAR_TAGS = [
    { name: 'All', slug: '', icon: TrendingUp },
    { name: 'JavaScript', slug: 'javascript', icon: Code },
    { name: 'React', slug: 'react', icon: Code },
    { name: 'Python', slug: 'python', icon: Code },
    { name: 'TypeScript', slug: 'typescript', icon: Code },
    { name: 'Web Dev', slug: 'webdev', icon: Code },
    { name: 'DevOps', slug: 'devops', icon: Code },
    { name: 'AI/ML', slug: 'ai', icon: Code },
  ];

  // Fetch YouTube videos
  const fetchYouTubeVideos = async (query: string) => {
    if (!YOUTUBE_API_KEY) {
      console.warn('YouTube API key not configured');
      return [];
    }

    try {
      // Build tech-focused search query
      let searchQuery = '';
      if (selectedTag) {
        searchQuery = `${selectedTag} programming tutorial coding`;
      } else {
        searchQuery = 'programming tutorial software development coding';
      }
      
      // YouTube Category 28 = Science & Technology
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&videoCategoryId=28&q=${encodeURIComponent(searchQuery)}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) return [];

      const data = await response.json();
      
      // Filter and map results
      const videos = data.items?.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        cover_image: item.snippet.thumbnails.medium.url,
        published_at: item.snippet.publishedAt,
        tag_list: [selectedTag || 'programming'],
        type_of: 'video_article' as const,
        user: {
          name: item.snippet.channelTitle,
          username: item.snippet.channelId,
          profile_image: item.snippet.thumbnails.default.url,
        },
      })) || [];
      
      // Extra filter to ensure tech relevance
      return videos.filter(video => 
        isTechRelated(video.title, video.description)
      );
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      return [];
    }
  };

  // Fetch Podcasts from iTunes API (free, no API key needed)
  const fetchPodcasts = async (query: string) => {
    try {
      // Build tech-focused search query with genre filter
      let searchQuery = '';
      if (selectedTag) {
        searchQuery = `${selectedTag} programming software development`;
      } else {
        searchQuery = 'software engineering programming developer tech';
      }
      
      // Add technology genre filter (genreId 1318 = Technology)
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&media=podcast&entity=podcastEpisode&limit=30&genreId=1318`
      );

      if (!response.ok) return [];

      const data = await response.json();
      
      // Filter and map results
      const podcasts = data.results?.map((item: any) => ({
        id: item.trackId || item.collectionId,
        title: item.trackName || item.collectionName,
        description: item.description || item.shortDescription || 'No description available',
        url: item.trackViewUrl || item.collectionViewUrl,
        cover_image: item.artworkUrl600 || item.artworkUrl100,
        published_at: item.releaseDate,
        tag_list: [selectedTag || 'programming'],
        type_of: 'podcast_episode' as const,
        user: {
          name: item.artistName || item.collectionName,
          username: item.artistName || 'podcast',
          profile_image: item.artworkUrl100 || item.artworkUrl60,
        },
      })) || [];
      
      // Extra filter to ensure tech relevance
      return podcasts.filter(podcast => 
        isTechRelated(podcast.title, podcast.description)
      );
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      return [];
    }
  };

  // Fetch content from DEV.to API and YouTube
  const fetchArticles = async (pageNum: number = 1) => {
    setIsLoading(true);
    try {
      const tagParam = selectedTag ? `&tag=${selectedTag}` : '';
      
      let allContent: DevToArticle[] = [];

      // Fetch DEV.to articles if showing articles or all
      if (contentType === 'all' || contentType === 'article') {
        const response = await fetch(
          `https://dev.to/api/articles?per_page=50&page=${pageNum}${tagParam}`
        );
        
        if (response.ok) {
          const devData: DevToArticle[] = await response.json();
          allContent = [...allContent, ...devData];
        }
      }

      // Fetch YouTube videos if showing videos or all
      if (contentType === 'all' || contentType === 'video') {
        const youtubeData = await fetchYouTubeVideos(selectedTag);
        allContent = [...allContent, ...youtubeData];
      }

      // Fetch iTunes podcasts if showing podcasts or all
      if (contentType === 'all' || contentType === 'podcast') {
        const podcastData = await fetchPodcasts(selectedTag);
        allContent = [...allContent, ...podcastData];
      }
      
      // Sort by published date
      allContent.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
      
      if (pageNum === 1) {
        setArticles(allContent);
        setFilteredArticles(allContent);
      } else {
        setArticles(prev => [...prev, ...allContent]);
        setFilteredArticles(prev => [...prev, ...allContent]);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: '❌ Failed to Fetch Content',
        description: 'Could not load content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Search articles using DEV.to API
  const searchArticles = async (query: string) => {
    if (!query.trim()) {
      fetchArticles(1);
      return;
    }

    setIsSearching(true);
    setIsLoading(true);
    try {
      // DEV.to doesn't have a direct search API, so we'll use Google Custom Search or filter locally
      // For now, we'll fetch recent articles and filter by query
      const response = await fetch(
        `https://dev.to/api/articles?per_page=100${selectedTag ? `&tag=${selectedTag}` : ''}`
      );
      const data: DevToArticle[] = await response.json();
      
      // Filter articles by search query (title, description, tags)
      const filtered = data.filter(article => {
        const searchLower = query.toLowerCase();
        return (
          article.title?.toLowerCase().includes(searchLower) ||
          article.description?.toLowerCase().includes(searchLower) ||
          article.tag_list?.some(tag => tag.toLowerCase().includes(searchLower)) ||
          article.user?.name?.toLowerCase().includes(searchLower)
        );
      });
      
      setArticles(filtered);
      setFilteredArticles(filtered);
      
      if (filtered.length === 0) {
        toast({
          title: '🔍 No Results',
          description: `No articles found for "${query}". Try different keywords.`,
        });
      }
    } catch (error) {
      console.error('Error searching articles:', error);
      toast({
        title: '❌ Search Failed',
        description: 'Could not search articles. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setIsSearching(false);
    }
  };

  // Load bookmarked articles from localStorage
  const loadBookmarks = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const bookmarked: BookmarkedArticle[] = JSON.parse(stored);
        setBookmarkedIds(new Set(bookmarked.map(b => b.id)));
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      fetchArticles(1);
    }
    loadBookmarks();
  }, [selectedTag, contentType]);

  // Handle search with debounce
  useEffect(() => {
    if (!searchQuery) {
      fetchArticles(1);
      return;
    }

    const timer = setTimeout(() => {
      searchArticles(searchQuery);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery, selectedTag]);

  const handleLogout = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/login');
    }
  };

  const toggleBookmark = (article: DevToArticle) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let bookmarks: BookmarkedArticle[] = stored ? JSON.parse(stored) : [];
      
      const isBookmarked = bookmarkedIds.has(article.id);
      
      if (isBookmarked) {
        // Remove bookmark
        bookmarks = bookmarks.filter(b => b.id !== article.id);
        setBookmarkedIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(article.id);
          return newSet;
        });
        toast({
          title: '📑 Bookmark Removed',
          description: 'Article removed from your bookmarks.',
        });
      } else {
        // Add bookmark
        const newBookmark: BookmarkedArticle = {
          id: article.id,
          title: article.title,
          url: article.url,
          cover_image: article.cover_image,
          published_at: article.published_at,
          tag_list: article.tag_list,
          user: article.user,
          bookmarkedAt: Date.now(),
        };
        bookmarks.unshift(newBookmark);
        setBookmarkedIds(prev => new Set(prev).add(article.id));
        toast({
          title: '✅ Bookmarked!',
          description: 'Article saved to your bookmarks.',
        });
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      toast({
        title: '❌ Bookmark Failed',
        description: 'Could not save bookmark. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const loadMoreArticles = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
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
        currentPage="discover"
        user={user}
        onLogout={handleLogout}
      />

      {/* Header Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 border-b bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/10">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Discover
                </h1>
                <p className="text-sm text-muted-foreground">Articles, videos & podcasts from DEV Community</p>
              </div>
            </div>
            <Button 
              variant="outline"
              onClick={() => router.push('/bookmarks')}
              className="gap-2"
            >
              <BookmarkCheck className="w-4 h-4" />
              My Bookmarks
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <p className="text-xs text-muted-foreground font-medium">Total Content</p>
              </div>
              <p className="text-2xl font-bold">{articles.length}</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <BookmarkCheck className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-muted-foreground font-medium">Bookmarked</p>
              </div>
              <p className="text-2xl font-bold">{bookmarkedIds.size}</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <p className="text-xs text-muted-foreground font-medium">Trending</p>
              </div>
              <p className="text-2xl font-bold">{selectedTag || 'All'}</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Filter className="w-4 h-4 text-orange-600" />
                <p className="text-xs text-muted-foreground font-medium">Filtered</p>
              </div>
              <p className="text-2xl font-bold">{filteredArticles.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full">
          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, description, tags, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 h-12 rounded-xl"
              />
              {isSearching && (
                <div className="absolute right-12 top-1/2 -translate-y-1/2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                </div>
              )}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Content Type Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Type:</span>
              {CONTENT_TYPES.map(type => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.value}
                    onClick={() => setContentType(type.value as any)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-sm",
                      contentType === type.value
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-background border-border hover:border-primary/50"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {type.name}
                  </button>
                );
              })}
            </div>

            {/* Tag Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {POPULAR_TAGS.map(tag => (
                <button
                  key={tag.slug}
                  onClick={() => setSelectedTag(tag.slug)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all whitespace-nowrap",
                    selectedTag === tag.slug
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                      : "bg-card border-border hover:border-primary/50"
                  )}
                >
                  <tag.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tag.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {isLoading && page === 1 ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading content...</p>
              </div>
            </div>
          ) : filteredArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {filteredArticles.map((article) => {
                  const isBookmarked = bookmarkedIds.has(article.id);
                  const publishedDate = new Date(article.published_at);
                  
                  return (
                    <div key={article.id} className="group">
                      <div className="rounded-xl border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                        {/* Cover Image */}
                        {article.cover_image ? (
                          <div className="relative aspect-video bg-muted overflow-hidden">
                            <img
                              src={article.cover_image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleBookmark(article);
                                }}
                                className={cn(
                                  "p-2 rounded-full backdrop-blur-sm transition-all",
                                  isBookmarked
                                    ? "bg-yellow-500 text-white shadow-lg"
                                    : "bg-black/50 text-white hover:bg-black/70"
                                )}
                                title={isBookmarked ? "Remove bookmark" : "Bookmark"}
                              >
                                {isBookmarked ? (
                                  <BookmarkCheck className="w-4 h-4" />
                                ) : (
                                  <Bookmark className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 flex items-center justify-center relative">
                            <Newspaper className="w-16 h-16 text-primary/20" />
                            <div className="absolute top-2 right-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleBookmark(article);
                                }}
                                className={cn(
                                  "p-2 rounded-full backdrop-blur-sm transition-all",
                                  isBookmarked
                                    ? "bg-yellow-500 text-white shadow-lg"
                                    : "bg-black/50 text-white hover:bg-black/70"
                                )}
                              >
                                {isBookmarked ? (
                                  <BookmarkCheck className="w-4 h-4" />
                                ) : (
                                  <Bookmark className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="p-4 flex-1 flex flex-col">
                          {/* Content Type Badge & Tags */}
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            {article.type_of === 'video_article' && (
                              <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                                <Video className="w-3 h-3 mr-1" />
                                Video
                              </Badge>
                            )}
                            {article.type_of === 'podcast_episode' && (
                              <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                                <Podcast className="w-3 h-3 mr-1" />
                                Podcast
                              </Badge>
                            )}
                            {article.tag_list?.slice(0, 3).map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Title */}
                          <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors leading-snug">
                            {article.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                            {article.description}
                          </p>

                          {/* Author & Stats */}
                          <div className="flex items-center justify-between pt-3 border-t">
                            {article.user ? (
                              <div className="flex items-center gap-2">
                                <img
                                  src={article.user.profile_image}
                                  alt={article.user.name}
                                  className="w-8 h-8 rounded-full"
                                />
                                <div className="min-w-0">
                                  <p className="text-xs font-medium truncate">{article.user.name}</p>
                                  {article.reading_time_minutes && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <Clock className="w-3 h-3" />
                                      {article.reading_time_minutes} min read
                                    </div>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Newspaper className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-medium text-muted-foreground">DEV Community</p>
                                </div>
                              </div>
                            )}

                            {/* Read/Watch/Listen Button */}
                            {article.type_of === 'video_article' ? (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setContent({
                                    id: article.id,
                                    title: article.title,
                                    url: article.url,
                                    type: 'video',
                                    coverImage: article.cover_image || undefined,
                                    author: article.user?.name,
                                  });
                                }}
                                className="gap-1"
                              >
                                <Video className="w-3 h-3" />
                                Watch
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="ghost"
                                asChild
                                className="gap-1"
                              >
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                  {article.type_of === 'podcast_episode' ? (
                                    <>
                                      <Podcast className="w-3 h-3" />
                                      Listen
                                    </>
                                  ) : (
                                    <>
                                      <ExternalLink className="w-3 h-3" />
                                      Read
                                    </>
                                  )}
                                </a>
                              </Button>
                            )}
                          </div>

                          {/* Reactions */}
                          <div className="flex items-center gap-3 mt-3 pt-3 border-t text-xs text-muted-foreground">
                            {article.public_reactions_count !== undefined && (
                              <span className="flex items-center gap-1">
                                <Heart className="w-3.5 h-3.5" />
                                {article.public_reactions_count}
                              </span>
                            )}
                            <span>{article.public_reactions_count !== undefined && '• '}{publishedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More Button */}
              {!searchQuery && filteredArticles.length >= 30 * page && (
                <div className="mt-8 text-center">
                  <Button
                    onClick={loadMoreArticles}
                    disabled={isLoading}
                    className="gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Load More Articles
                        <TrendingUp className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 mb-6">
                <Newspaper className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {searchQuery
                  ? `No articles match "${searchQuery}". Try a different search term.`
                  : "No articles available. Please try again later."}
              </p>
              {searchQuery && (
                <Button onClick={() => setSearchQuery('')} variant="outline">
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
