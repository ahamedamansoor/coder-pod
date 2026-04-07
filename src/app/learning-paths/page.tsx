'use client';

import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Code2, Sparkles, Trophy, Target } from 'lucide-react';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { languages as allLanguages } from '@/data/languages';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { useUser } from '@/hooks/use-auth-compat';
import { unifiedCompletionService } from '@/services/unified-completion.service';

type Filter = 'all' | 'frontend' | 'backend' | 'testing';

// Accent gradients for cards
const accentMap: Record<string, string> = {
    javascript: 'from-amber-100/80 via-yellow-50/60 to-amber-100/80',
    html: 'from-rose-100/80 via-orange-50/60 to-rose-100/80',
    css: 'from-sky-100/80 via-blue-50/60 to-indigo-100/80',
    scss: 'from-pink-100/80 via-fuchsia-50/60 to-rose-100/80',
    react: 'from-cyan-100/80 via-sky-50/60 to-blue-100/80',
    java: 'from-orange-100/80 via-amber-50/60 to-pink-100/80',
    spring: 'from-emerald-100/80 via-green-50/60 to-lime-100/80',
    'spring-boot': 'from-teal-100/80 via-emerald-50/60 to-green-100/80',
    dsa: 'from-violet-100/80 via-indigo-50/60 to-blue-100/80',
    selenium: 'from-green-100/80 via-emerald-50/60 to-teal-100/80',
    rxjs: 'from-cyan-100/80 via-sky-50/60 to-indigo-100/80',
    git: 'from-orange-100/80 via-red-50/60 to-orange-100/80',
    postgresql: 'from-blue-100/80 via-indigo-50/60 to-purple-100/80',
    'frontend-system-design': 'from-purple-100/80 via-pink-50/60 to-indigo-100/80',
};

function LearningPathsPageContent() {
    const router = useRouter();
    const { user } = useUser();
    const { userProfile, signOut } = useSupabaseAuth();

    const [filter, setFilter] = useState<Filter>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [blockedLang, setBlockedLang] = useState<{ slug: string; name: string } | null>(null);
    const [startedPaths, setStartedPaths] = useState<Set<string>>(new Set());
    const [completionData, setCompletionData] = useState<{ [language: string]: string[] }>({});
    const [isCompletionLoading, setIsCompletionLoading] = useState(false);

    // Only show allowed slugs
    const allowedSlugs = useMemo(() => new Set(['html', 'css', 'scss', 'tailwind', 'javascript', 'selenium', 'dsa']), []);
    const frontendLanguages = ['html', 'css', 'javascript', 'scss', 'tailwind', 'dsa'];
    const backendLanguages: string[] = [];
    const testingLanguages: string[] = ['selenium'];
    const algorithmLanguages: string[] = [];
    const versionControlLanguages: string[] = [];

    const readySlugs = useMemo(() => new Set(['html', 'css', 'scss', 'tailwind', 'javascript', 'selenium', 'dsa']), []);

    // Load completion data from unified service
    useEffect(() => {
        if (user) {
            // First fetch fresh data from server, then fall back to cache
            const fetchInitialData = async () => {
                setIsCompletionLoading(true);
                try {
                    await unifiedCompletionService.fetchAllCompletionData(user.uid);
                } catch (error) {
                    console.error('❌ Error fetching initial completion data:', error);
                }
                // Get the data (either fresh or from cache)
                const data = unifiedCompletionService.getAllCompletionData();
                setCompletionData(data);
                setIsCompletionLoading(false);
            };
            
            fetchInitialData();
        }
    }, [user?.uid]); // Use user.uid instead of user object

    // Listen for storage changes to update completion data
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'completion_data') {
                const data = unifiedCompletionService.getAllCompletionData();
                setCompletionData(data);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const filteredLanguages = useMemo(() => {
        return allLanguages.filter((lang) => {
            if (!allowedSlugs.has(lang.slug)) return false;
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesSearch =
                    lang.name.toLowerCase().includes(query) ||
                    lang.description?.toLowerCase().includes(query) ||
                    lang.slug.toLowerCase().includes(query);
                if (!matchesSearch) return false;
            }

            if (filter === 'all') return true;
            if (filter === 'frontend') return frontendLanguages.includes(lang.slug);
            if (filter === 'backend') return backendLanguages.includes(lang.slug);
            if (filter === 'testing') return testingLanguages.includes(lang.slug);
            if (filter === 'algorithms') return algorithmLanguages.includes(lang.slug);
            return true;
        });
    }, [filter, searchQuery, allowedSlugs]);

    const handleLogout = async () => {
        await signOut();
        router.push('/login');
    };

    const handleViewPath = async (lang: { slug: string; name: string }) => {
        if (readySlugs.has(lang.slug)) {
            // Mark as started
            setStartedPaths((prev) => {
                const next = new Set(prev);
                next.add(lang.slug);
                return next;
            });
            
            // Fetch completion data only for this specific language
            if (user) {
                try {
                    console.log(`Fetching completion data for ${lang.slug}...`);
                    await unifiedCompletionService.fetchLanguageCompletionData(user.uid, lang.slug);
                    const data = unifiedCompletionService.getAllCompletionData();
                    setCompletionData(data);
                    console.log(`Updated completion data for ${lang.slug}:`, data[lang.slug]);
                } catch (error) {
                    console.error(`Error fetching completion data for ${lang.slug}:`, error);
                }
            }
            
            router.push(`/languages/${lang.slug}/learning-plan`);
            return;
        }
        setBlockedLang({ slug: lang.slug, name: lang.name });
        setShowModal(true);
    };

    return (
        <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
            <InnovativeHeader
                currentPage="learning"
                showNavigation
                user={user}
                onLogout={handleLogout}
            />

            <main className="flex-1 overflow-y-auto relative z-10 h-[calc(100vh-64px)]">
                {/* Hero */}
                {/* Header Section - Scrolls with content */}
                <div className="flex-shrink-0 pt-6">
                    <LearningPathTitle
                        icon={Sparkles}
                        title="Follow curated paths to master every stack"
                        subtitle="Pick a language or framework and jump into a structured path with progress tracking, milestones, and interactive lessons."
                    />
                </div>

                {/* Search and Filters - Sticky */}
                <div className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-4 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-200 mb-6">
                    <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto w-full">
                        <div className="w-full relative flex justify-center">
                            {/* Faded edges to indicate scroll */}
                            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide p-1 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 max-w-full w-auto mx-auto lg:mx-0 snap-x">
                                {[
                                    { id: 'all', label: 'All' },
                                    { id: 'frontend', label: 'Frontend' },
                                    { id: 'backend', label: 'Backend' },
                                    { id: 'testing', label: 'Testing' },
                                ].map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setFilter(option.id as Filter)}
                                        className={cn(
                                            'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 snap-center',
                                            filter === option.id
                                                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                                        )}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full max-w-lg flex-shrink-0">
                            <input
                                type="text"
                                placeholder="Search languages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/60 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
                            />
                            <Code2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                        </div>
                    </div>
                </div>

                {/* Paths grid */}
                <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12">
                    <div className="w-full max-w-none mx-auto">
                        {filteredLanguages.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-4">
                                    <Sparkles className="w-4 h-4 animate-pulse" />
                                    <span>Coming soon</span>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    We&apos;re working on this content and it will be available soon.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setFilter('all');
                                    }}
                                    className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
                                >
                                    Reset filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filteredLanguages.map((lang) => {
                                    const summary = lang.description ?? lang.topics?.[0]?.explanation ?? 'Interactive lessons curated for every learning style.';
                                    const fallbackFocusLabel = lang.topics?.find((topic) => topic.category)?.category ?? 'Core Track';
                                    const accent = accentMap[lang.slug] ?? 'from-slate-200 to-slate-300';

                                    const topicList = lang.topics?.filter((t) => t.slug !== 'learning-plan') ?? [];
                                    // Use completionData state instead of getCompletedTopics function
                                    const completedTopicsArray = completionData[lang.slug] || [];
                                    
                                    const validTopicSlugs = new Set(topicList.map((t) => t.slug));
                                    const actualTopicCount = topicList.length;
                                    const validCompletedTopics = completedTopicsArray.filter((slug) => validTopicSlugs.has(slug));
                                    const completedCount = validCompletedTopics.length;
                                    const hasTopics = actualTopicCount > 0;
                                    let completionPercentage = hasTopics
                                        ? Math.min(100, Math.round((completedCount / actualTopicCount) * 100))
                                        : 0;

                                    const hasStartedLocally = hasTopics && startedPaths.has(lang.slug);
                                    if (hasStartedLocally && completionPercentage === 0) {
                                        completionPercentage = 1; // reflect started state
                                    }
                                    const isStarted = completedCount > 0 || hasStartedLocally;
                                    const isCompleted = completionPercentage === 100;
                                    const nextTopic = topicList.find((topic) => !validCompletedTopics.includes(topic.slug));
                                    const cleanCategory = (value?: string) => value ? value.replace(/^\d+\.?\s*/, '').trim() : 'Core Track';
                                    const focusLabel = cleanCategory(nextTopic?.category || fallbackFocusLabel);
                                    const nextUpText = !hasTopics
                                        ? 'Content coming soon'
                                        : completionPercentage === 0
                                            ? 'Start your learning journey'
                                            : isCompleted
                                                ? 'Review & reinforce concepts'
                                                : nextTopic
                                                    ? nextTopic.title
                                                    : isStarted
                                                        ? 'Jump into the learning plan'
                                                        : 'Start your learning journey';
                                    const pillText = completionPercentage === 0 ? 'Start your learning journey' : nextUpText;
                                    const leftCountLabel = hasTopics
                                        ? `${Math.max(actualTopicCount - completedCount, 0)} left`
                                        : 'Coming soon';

                                    return (
                                        <div
                                            key={lang.slug}
                                            className={cn(
                                                'group relative h-full overflow-hidden rounded-2xl block',
                                                'bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl',
                                                'border border-white/40 dark:border-white/10',
                                                'shadow-[0_8px_32px_rgba(31,38,135,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
                                                'transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl'
                                            )}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            </div>

                                            <div className="relative p-5 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <Badge variant="secondary" className="bg-white/70 dark:bg-white/10 text-xs text-slate-700 dark:text-slate-300">
                                                        {focusLabel}
                                                    </Badge>
                                                    {user && (
                                                        <div className={cn('w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2',
                                                            !hasTopics && 'border-slate-400 text-slate-500',
                                                            hasTopics && completionPercentage === 0 && 'border-slate-400 text-slate-500',
                                                            hasTopics && completionPercentage > 0 && completionPercentage < 100 && 'border-blue-500 text-blue-500',
                                                            hasTopics && isCompleted && 'border-green-500 text-green-500 bg-green-500/10'
                                                        )}>
                                                            {!hasTopics ? '--' : (isCompleted ? <Trophy className="w-5 h-5" /> : `${completionPercentage}%`)}
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{lang.name}</h3>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">{actualTopicCount} Topics</p>
                                                </div>

                                                {user && (
                                                    <div className="flex gap-3 text-xs">
                                                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/60 dark:bg-white/[0.06] border border-white/40 dark:border-white/10">
                                                            <Trophy className="w-3 h-3 text-amber-400" />
                                                            <span className="text-slate-900 dark:text-white font-medium">
                                                                {hasTopics ? `${completedCount}/${actualTopicCount}` : '0/—'}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/60 dark:bg-white/[0.06] border border-white/40 dark:border-white/10">
                                                            <Target className="w-3 h-3 text-blue-400" />
                                                            <span className="text-slate-900 dark:text-white font-medium">{leftCountLabel}</span>
                                                        </div>
                                                    </div>
                                                )}

                                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{summary}</p>

                                                <div
                                                    className={cn(
                                                        'rounded-xl p-3 text-xs font-semibold',
                                                        'flex items-center gap-2',
                                                        'bg-white/70 text-slate-900 border border-white/50 shadow-sm',
                                                        'dark:bg-slate-900/70 dark:text-white dark:border-slate-800',
                                                        'backdrop-blur-md'
                                                    )}
                                                >
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-[10px] font-bold shadow">
                                                        ↗
                                                    </span>
                                                    <div className="flex-1">
                                                        {user ? (
                                                            completionPercentage === 0 ? (
                                                                <span className="ml-1">{pillText}</span>
                                                            ) : (
                                                                <>
                                                                    <span className="opacity-70">Next up:</span>{' '}
                                                                    <span className="ml-1">{pillText}</span>
                                                                </>
                                                            )
                                                        ) : (
                                                            <span className="ml-1">Start your learning journey</span>
                                                        )}
                                                    </div>
                                                </div>

                                                <button
                                                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm transition-all duration-200 hover:shadow-lg"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleViewPath(lang);
                                                    }}
                                                >
                                                    View Learning Path
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="max-w-md rounded-2xl border border-blue-200/60 dark:border-blue-800/50 bg-white dark:bg-slate-950 shadow-2xl">
                    <div className="absolute -top-16 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl pointer-events-none" />
                    <DialogHeader className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200/70 dark:border-blue-800/50 text-sm font-semibold text-blue-700 dark:text-blue-300 w-fit">
                            <Sparkles className="w-4 h-4 animate-pulse" />
                            Coming Soon
                        </div>
                        <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                            {blockedLang?.name || 'This path'} is on the way
                        </DialogTitle>
                        <DialogDescription className="text-base text-slate-600 dark:text-slate-300">
                            We&apos;re polishing the {blockedLang?.name || 'selected'} learning path to make it great. You&apos;ll be able to explore it as soon as it&apos;s ready.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                            🚀
                        </div>
                        <div className="text-sm text-slate-700 dark:text-slate-200">
                            Stay tuned! We&apos;re prioritizing this content based on demand.
                        </div>
                    </div>
                    <DialogFooter className="mt-6">
                        <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/20"
                            onClick={() => setShowModal(false)}
                        >
                            Keep Exploring
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default function LearningPathsPage() {
    return <LearningPathsPageContent />;
}
