'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Code2, Sparkles, Trophy, Target } from 'lucide-react';
import { InnovativeHeader } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { languages as allLanguages } from '@/data/languages';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { useUser } from '@/hooks/use-auth-compat';

type Filter = 'all' | 'frontend' | 'backend' | 'testing' | 'algorithms';

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
    rxjs: 'from-cyan-100/80 via-sky-50/60 to-indigo-100/80',
};

export default function LearningPathsPage() {
    const router = useRouter();
    const { user } = useUser();
    const { userProfile, signOut } = useSupabaseAuth();

    const [filter, setFilter] = useState<Filter>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [blockedLang, setBlockedLang] = useState<{ slug: string; name: string } | null>(null);
    const [startedPaths, setStartedPaths] = useState<Set<string>>(new Set());

    // Only show allowed slugs
    const allowedSlugs = useMemo(() => new Set(['html', 'css', 'scss', 'tailwind', 'javascript', 'dsa']), []);
    const frontendLanguages = ['html', 'css', 'javascript', 'scss', 'tailwind'];
    const backendLanguages: string[] = [];
    const testingLanguages: string[] = [];
    const algorithmLanguages = ['dsa'];

    const readySlugs = useMemo(() => new Set(['html', 'css', 'scss', 'tailwind', 'javascript', 'dsa']), []);

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

    const handleViewPath = (lang: { slug: string; name: string }) => {
        if (readySlugs.has(lang.slug)) {
            setStartedPaths((prev) => {
                const next = new Set(prev);
                next.add(lang.slug);
                return next;
            });
            router.push(`/languages/${lang.slug}/learning-plan`);
            return;
        }
        setBlockedLang({ slug: lang.slug, name: lang.name });
        setShowModal(true);
    };

    return (
        <div className="min-h-screen w-screen bg-background flex flex-col">
            <InnovativeHeader
                currentPage="learning"
                showNavigation
                user={user}
                onLogout={handleLogout}
            />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30 py-14 sm:py-16 lg:py-20">
                    <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
                    <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />
                    <div className="relative px-4 sm:px-6 lg:px-10 xl:px-14">
                        <div className="w-full max-w-none mx-auto text-center space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/60 dark:border-blue-800/50">
                                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-300 animate-pulse" />
                                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Learning Paths</span>
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                                    Follow curated paths to master every stack
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Pick a language or framework and jump into a structured path with progress tracking, milestones, and interactive lessons.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                <div className="relative w-full sm:w-96">
                                    <input
                                        type="text"
                                        placeholder="Search languages..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-5 py-3 pl-12 rounded-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/50 dark:border-slate-700/60 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-200"
                                    />
                                    <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                                </div>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {[
                                        { id: 'all', label: 'All' },
                                        { id: 'frontend', label: 'Frontend' },
                                        { id: 'backend', label: 'Backend' },
                                        { id: 'testing', label: 'Testing' },
                                        { id: 'algorithms', label: 'Algorithms' },
                                    ].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setFilter(option.id as Filter)}
                                            className={cn(
                                                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                                                filter === option.id
                                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                                    : 'bg-white/20 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-slate-800/60'
                                            )}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                    const completedTopicsArray = userProfile?.completedTopics?.[lang.slug] ?? [];
                                    const validTopicSlugs = new Set(topicList.map((t) => t.slug));
                                    const actualTopicCount = topicList.length;
                                    const validCompletedTopics = Array.isArray(completedTopicsArray)
                                        ? Array.from(new Set(completedTopicsArray)).filter((slug) => validTopicSlugs.has(slug))
                                        : [];
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
                                                    <div className={cn('w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2',
                                                        !hasTopics && 'border-slate-400 text-slate-500',
                                                        hasTopics && completionPercentage === 0 && 'border-slate-400 text-slate-500',
                                                        hasTopics && completionPercentage > 0 && completionPercentage < 100 && 'border-blue-500 text-blue-500',
                                                        hasTopics && isCompleted && 'border-green-500 text-green-500 bg-green-500/10'
                                                    )}>
                                                        {!hasTopics ? '--' : (isCompleted ? <Trophy className="w-5 h-5" /> : `${completionPercentage}%`)}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{lang.name}</h3>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">{actualTopicCount} Topics</p>
                                                </div>

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
                                                    {completionPercentage === 0 ? (
                                                        <span className="ml-1">{pillText}</span>
                                                    ) : (
                                                        <>
                                                            <span className="opacity-70">Next up:</span>{' '}
                                                            <span className="ml-1">{pillText}</span>
                                                        </>
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
