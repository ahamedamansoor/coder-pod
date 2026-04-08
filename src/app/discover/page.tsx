'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useRouter } from 'next/navigation';
import { usePlayer } from '@/contexts/PlayerContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Loader2, Search, ExternalLink,
  Newspaper, TrendingUp, Code, X, Filter, Clock, Heart, Video, Podcast, Sparkles
} from 'lucide-react';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface DevToArticle {
  id: number | string;
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

export default function DiscoverPage() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<DevToArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [contentType, setContentType] = useState<'all' | 'article' | 'video' | 'podcast'>('all');
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [videoPage, setVideoPage] = useState(1);
  const [hasMoreVideos, setHasMoreVideos] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const { setContent } = usePlayer();

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
    { name: 'Podcasts', value: 'podcast', icon: Podcast },
  ];
  const POPULAR_TAGS = [
    { name: 'All', slug: '', icon: TrendingUp },
    { name: 'JavaScript', slug: 'javascript', icon: Code },
    { name: 'React', slug: 'react', icon: Code },
    { name: 'Angular', slug: 'angular', icon: Code },
    { name: 'Vue', slug: 'vue', icon: Code },
    { name: 'Next.js', slug: 'nextjs', icon: Code },
    { name: 'React Native', slug: 'react-native', icon: Code },
    { name: 'Python', slug: 'python', icon: Code },
    { name: 'TypeScript', slug: 'typescript', icon: Code },
    { name: 'Web Dev', slug: 'webdev', icon: Code },
    { name: 'UI/UX', slug: 'ui-ux', icon: Code },
    { name: 'Frontend Design', slug: 'frontend-design', icon: Code },
    { name: 'System Design', slug: 'system-design', icon: Code },
    { name: 'DevOps', slug: 'devops', icon: Code },
    { name: 'AI/ML', slug: 'ai', icon: Code },
  ];

  // Import channel database (250+ channels organized efficiently)
  const { getChannelsForTag, getDefaultChannels } = require('@/data/youtube-channels');

  // Fetch YouTube videos using Invidious API (no API key, no limits!)
  const fetchYouTubeVideos = async (query: string): Promise<DevToArticle[]> => {
    try {
      // Build search query based on tag and user input
      let searchQuery = '';
      if (query) {
        searchQuery = `${query} full course tutorial`;
      } else if (selectedTag) {
        searchQuery = `${selectedTag} full course tutorial programming`;
      } else {
        searchQuery = 'programming full course tutorial';
      }

      // Simplified: Use RSS feeds directly - most reliable method
      console.log('Fetching videos from curated YouTube channels via RSS feeds...');
      const channelIds = selectedTag
        ? getChannelsForTag(selectedTag)
        : getDefaultChannels();
      return await fetchFromRSSFeeds(channelIds, query);

    } catch (error) {
      console.error('Error fetching videos:', error);
      toast({
        title: '❌ Video Fetch Error',
        description: 'Failed to load videos.',
        variant: 'destructive',
      });
      return [];
    }
  };

  // Fallback: Fetch from RSS feeds if Invidious fails
  const fetchFromRSSFeeds = async (channelIds: string[], query: string): Promise<DevToArticle[]> => {
    try {
      const promises = channelIds.map(async (channelId) => {
        try {
          // Use our API route to avoid CORS issues
          const response = await fetch(`/api/youtube-rss?channelId=${channelId}`);

          if (!response.ok) {
            // Silently fail for individual channels - Invidious should be working
            return [];
          }

          const xmlText = await response.text();

          // Check if XML is valid
          if (!xmlText || xmlText.trim().length === 0) {
            console.error(`Empty response for channel ${channelId}`);
            return [];
          }

          // Parse XML to extract video data
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

          // Check for XML parsing errors
          const parseError = xmlDoc.querySelector('parsererror');
          if (parseError) {
            console.error(`XML parse error for channel ${channelId}:`, parseError.textContent);
            return [];
          }

          const entries = xmlDoc.querySelectorAll('entry');

          if (entries.length === 0) {
            console.log(`No entries found for channel ${channelId}`);
            return [];
          }

          const videos = Array.from(entries).map((entry) => {
            const videoId = entry.querySelector('videoId')?.textContent || '';
            const title = entry.querySelector('title')?.textContent || '';
            const published = entry.querySelector('published')?.textContent || '';
            const author = entry.querySelector('author name')?.textContent || '';
            const mediaGroup = entry.querySelector('group');
            const description = mediaGroup?.querySelector('description')?.textContent || '';
            const thumbnail = mediaGroup?.querySelector('thumbnail')?.getAttribute('url') || '';

            return {
              id: videoId,
              title,
              description,
              url: `https://www.youtube.com/watch?v=${videoId}`,
              cover_image: thumbnail,
              published_at: published,
              tag_list: [selectedTag || 'programming'],
              type_of: 'video_article' as const,
              user: {
                name: author,
                username: channelId,
                // Use UI Avatars to generate profile picture from channel name
                profile_image: `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=0D8ABC&color=fff&size=128`,
              },
            };
          });

          return videos;
        } catch (error) {
          console.error(`Error fetching from channel ${channelId}:`, error);
          return [];
        }
      });

      const results = await Promise.all(promises);
      const allVideos = results.flat();

      console.log(`Fetched ${allVideos.length} total videos from ${channelIds.length} channels`);

      if (allVideos.length === 0) {
        toast({
          title: '⚠️ No Videos Found',
          description: 'Could not fetch videos from RSS feeds. Channels might be down.',
          variant: 'destructive',
        });
        return [];
      }

      // STRICT keywords for FULL COURSES only
      const mustHaveKeywords = [
        'full course', 'complete course', 'full tutorial', 'complete tutorial',
        'crash course', 'bootcamp', 'full guide', 'complete guide',
        'from scratch', 'zero to hero', 'beginner to advanced',
        'step by step course', 'comprehensive tutorial', 'complete training',
        'full stack course', 'entire course', 'full project',
        'hours', 'hour course', 'hour tutorial',
        'free course', 'complete bootcamp', 'full bootcamp'
      ];

      // Keywords to exclude (shorts, clips, quick tips, single concepts)
      const excludeKeywords = [
        'short', 'shorts', '#shorts', 'quick tip', 'in 60 seconds',
        'in 1 minute', 'in 5 minutes', 'in 10 minutes', 'quick', 'fast',
        'rapid', 'speedrun', 'brief', 'intro to', 'introduction',
        'what is', 'explained', 'overview', 'summary', 'part 1', 'episode'
      ];

      // STRICT FILTER: Only include videos that are clearly full courses
      let filteredVideos = allVideos.filter(video => {
        const titleLower = video.title.toLowerCase();
        const descLower = video.description.toLowerCase();
        const text = `${titleLower} ${descLower}`;

        // Must have at least one "full course" keyword
        const hasCourseKeyword = mustHaveKeywords.some(keyword =>
          text.includes(keyword.toLowerCase())
        );
        if (!hasCourseKeyword) return false; // STRICT: Exclude if not a course

        // Exclude shorts and quick videos even if they claim to be courses
        const hasExcludedKeyword = excludeKeywords.some(keyword =>
          text.includes(keyword.toLowerCase())
        );
        if (hasExcludedKeyword) return false;

        return true; // Only full courses pass this filter
      });

      // Filter by search query if provided
      if (query) {
        const searchLower = query.toLowerCase();
        filteredVideos = filteredVideos.filter(video =>
          video.title.toLowerCase().includes(searchLower) ||
          video.description.toLowerCase().includes(searchLower)
        );
      }

      // Extra filter to ensure tech relevance
      filteredVideos = filteredVideos.filter(video =>
        isTechRelated(video.title, video.description)
      );

      // Sort: Prioritize course content, then by date
      filteredVideos.sort((a, b) => {
        const aHasCourse = mustHaveKeywords.some(k =>
          a.title.toLowerCase().includes(k) || a.description.toLowerCase().includes(k)
        );
        const bHasCourse = mustHaveKeywords.some(k =>
          b.title.toLowerCase().includes(k) || b.description.toLowerCase().includes(k)
        );

        // Course content first
        if (aHasCourse && !bHasCourse) return -1;
        if (!aHasCourse && bHasCourse) return 1;

        // Then by date
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      });

      console.log(`After filtering: ${filteredVideos.length} FULL COURSES found`);

      // If no courses found after strict filtering, show helpful message
      if (filteredVideos.length === 0) {
        console.log('No full courses found in recent videos. Try different tags or search.');
        toast({
          title: '📚 No Full Courses Found',
          description: 'Try a different tag (JavaScript, Python, React) or search for specific courses.',
        });
        return [];
      }

      return filteredVideos.slice(0, 30);
    } catch (error) {
      console.error('Error fetching from RSS feeds:', error);
      return [];
    }
  };

  // Variety-enhancing helper: Shuffle array randomly
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Variety-enhancing helper: Get random search terms for diversity
  const getVariedSearchTerms = (baseTag: string) => {
    const variations = [
      `${baseTag} tutorial`,
      `${baseTag} guide`,
      `${baseTag} development`,
      `${baseTag} programming`,
      `${baseTag} tips`,
      `${baseTag} best practices`,
      `${baseTag} learning`,
      baseTag, // Base term
    ];
    // Pick a random variation
    return variations[Math.floor(Math.random() * variations.length)];
  };

  // Fetch Podcasts from iTunes API (free, no API key needed)
  const fetchPodcasts = async (query: string): Promise<DevToArticle[]> => {
    try {
      // Build tech-focused search query with genre filter
      // If query is provided (from search), use it; otherwise use tag
      let searchQuery = '';
      if (query) {
        // User search takes precedence
        searchQuery = `${query} programming software development`;
      } else if (selectedTag) {
        // VARIETY: Use varied search terms for different results each time
        const variedTerm = getVariedSearchTerms(selectedTag);
        searchQuery = `${variedTerm} software development`;
      } else {
        // VARIETY: Rotate through different default searches
        const defaultSearches = [
          'software engineering programming',
          'web development technology',
          'coding developer tips',
          'tech programming best practices',
          'software developer tutorials',
        ];
        searchQuery = defaultSearches[Math.floor(Math.random() * defaultSearches.length)];
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
      let techPodcasts = podcasts.filter((podcast: any) =>
        isTechRelated(podcast.title, podcast.description)
      );

      // VARIETY: Shuffle results for different content each time
      return shuffleArray(techPodcasts);
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
        // VARIETY: Randomly pick from multiple pages for diverse content
        const randomPageOffset = Math.floor(Math.random() * 3); // 0, 1, or 2
        const fetchPage = pageNum + randomPageOffset;

        const response = await fetch(
          `https://dev.to/api/articles?per_page=50&page=${fetchPage}${tagParam}`
        );

        if (response.ok) {
          const devData: DevToArticle[] = await response.json();
          // VARIETY: Shuffle articles for different order each time
          const shuffledData = shuffleArray(devData);
          allContent = [...allContent, ...shuffledData];
        }
      }

      // Fetch iTunes podcasts if showing podcasts or all
      if (contentType === 'all' || contentType === 'podcast') {
        const podcastData = await fetchPodcasts(selectedTag);
        allContent = [...allContent, ...podcastData];
      }

      // VARIETY: Mix up sort order occasionally for diversity
      const sortMethods = [
        // Sort by date (70% chance)
        () => allContent.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()),
        // Sort by reactions if available (15% chance)
        () => allContent.sort((a, b) => (b.public_reactions_count || 0) - (a.public_reactions_count || 0)),
        // Random shuffle (15% chance)
        () => { allContent = shuffleArray(allContent); },
      ];

      const rand = Math.random();
      if (rand < 0.70) {
        sortMethods[0](); // Date sort
      } else if (rand < 0.85) {
        sortMethods[1](); // Reactions sort
      } else {
        sortMethods[2](); // Random shuffle
      }

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

  // Search content across all types based on current filter
  const searchArticles = async (query: string) => {
    if (!query.trim()) {
      fetchArticles(1);
      return;
    }

    setIsSearching(true);
    setIsLoading(true);
    try {
      let allContent: DevToArticle[] = [];

      // Search DEV.to articles if showing articles or all
      // Don't use tag filter when searching - search query takes precedence
      if (contentType === 'all' || contentType === 'article') {
        // VARIETY: Fetch from multiple pages and combine for diverse search results
        const pagesToFetch = [1, 2]; // Fetch first 2 pages for more variety
        const articlePromises = pagesToFetch.map(async (page) => {
          const response = await fetch(
            `https://dev.to/api/articles?per_page=50&page=${page}`
          );
          if (response.ok) {
            return await response.json();
          }
          return [];
        });

        const allArticles = (await Promise.all(articlePromises)).flat();
        const filtered = allArticles.filter((article: any) => {
          const searchLower = query.toLowerCase();
          return (
            article.title?.toLowerCase().includes(searchLower) ||
            article.description?.toLowerCase().includes(searchLower) ||
            article.tag_list?.some((tag: string) => tag.toLowerCase().includes(searchLower)) ||
            article.user?.name?.toLowerCase().includes(searchLower)
          );
        });
        // VARIETY: Shuffle search results
        allContent = [...allContent, ...shuffleArray(filtered)];
      }

      // Search YouTube videos if showing videos or all
      if (contentType === 'all' || contentType === 'video') {
        const videos = await fetchYouTubeVideos(query);
        allContent = [...allContent, ...videos];
      }

      // Search podcasts if showing podcasts or all
      if (contentType === 'all' || contentType === 'podcast') {
        const podcasts = await fetchPodcasts(query);
        allContent = [...allContent, ...podcasts];
      }

      // VARIETY: Shuffle search results for diversity
      allContent = shuffleArray(allContent);

      setArticles(allContent);
      setFilteredArticles(allContent);

      if (allContent.length === 0) {
        toast({
          title: '🔍 No Results',
          description: `No content found for "${query}". Try different keywords.`,
        });
      }
    } catch (error) {
      console.error('Error searching content:', error);
      toast({
        title: '❌ Search Failed',
        description: 'Could not search content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setIsSearching(false);
    }
  };


  // Load more videos
  const loadMoreVideos = async () => {
    if (!hasMoreVideos || isLoadingMore) return;

    setIsLoadingMore(true);
    try {
      const newVideos = await fetchYouTubeVideos(searchQuery);

      if (newVideos.length === 0) {
        setHasMoreVideos(false);
        toast({
          title: '✅ All Videos Loaded',
          description: 'No more videos available.',
        });
      } else {
        // Filter out duplicates by ID
        setArticles(prev => {
          const existingIds = new Set(prev.map(item => item.id));
          const uniqueNewVideos = newVideos.filter(video => !existingIds.has(video.id));

          if (uniqueNewVideos.length === 0) {
            setHasMoreVideos(false);
            return prev;
          }

          return [...prev, ...uniqueNewVideos];
        });

        setFilteredArticles(prev => {
          const existingIds = new Set(prev.map(item => item.id));
          const uniqueNewVideos = newVideos.filter(video => !existingIds.has(video.id));
          return [...prev, ...uniqueNewVideos];
        });

        setVideoPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error loading more videos:', error);
      toast({
        title: '❌ Load More Failed',
        description: 'Could not load more videos.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      fetchArticles(1);
    }
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
    router.push('/login');
  };

  const loadMoreArticles = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  };

  if (isUserLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading discover...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      <InnovativeHeader
        currentPage="discover"
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto relative z-10">

        {/* Page Title - Scrolls with content */}
        <div className="flex-shrink-0 pt-6">
          <LearningPathTitle
            icon={Sparkles}
            title="Discover"
            subtitle="A comprehensive collection of articles & podcasts from DEV Community — stay updated with the latest tech content"
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 pb-6">
          {/* Search and Filters - Sticky */}
          <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md py-4 mb-6 space-y-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border/40 transition-all duration-200">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, description, tags, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 h-12 rounded-xl bg-card/50 focus:bg-card transition-colors"
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
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 flex items-center justify-center relative">
                            <Newspaper className="w-16 h-16 text-primary/20" />
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
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                              {article.user ? (
                                <>
                                  <img
                                    src={article.user.profile_image}
                                    alt={article.user.name}
                                    className="w-6 h-6 rounded-full object-cover bg-muted flex-shrink-0"
                                    onError={(e) => {
                                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(article.user?.name || 'User')}&background=random&color=fff&size=64`;
                                    }}
                                  />
                                  <div className="min-w-0">
                                    <p className="text-xs font-medium truncate">{article.user.name}</p>
                                    {article.reading_time_minutes && (
                                      <p className="text-xs text-muted-foreground">{article.reading_time_minutes} min</p>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Newspaper className="w-3 h-3 text-primary" />
                                  </div>
                                  <p className="text-xs font-medium text-muted-foreground">DEV Community</p>
                                </>
                              )}
                            </div>

                            {/* Action Button */}
                            <div className="flex items-center gap-1">
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
                                  className="h-8 px-2 gap-1"
                                >
                                  <Video className="w-3 h-3" />
                                  <span className="text-xs">Watch</span>
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  asChild
                                  className="h-8 px-2 gap-1"
                                >
                                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    {article.type_of === 'podcast_episode' ? (
                                      <>
                                        <Podcast className="w-3 h-3" />
                                        <span className="text-xs">Listen</span>
                                      </>
                                    ) : (
                                      <>
                                        <ExternalLink className="w-3 h-3" />
                                        <span className="text-xs">Read</span>
                                      </>
                                    )}
                                  </a>
                                </Button>
                              )}
                            </div>
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

              {/* Load More Button - Only for articles */}
              {!searchQuery &&
                (contentType === 'all' || contentType === 'article') &&
                filteredArticles.length >= 30 * page && (
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
                          Load More Content
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
