'use client';

import { useState, useEffect } from 'react';
import { MapPin, BookOpen, ArrowRight, Layers, Code2, Server, TestTube, Briefcase, Brain } from 'lucide-react';
import { languages, roleBasedRoadmaps } from '@/data/languages';
import { cn } from '@/lib/utils';
import { LearningPathChartModal } from '@/components/shared/modals/learning-path-chart-modal';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { useRouter } from 'next/navigation';

// Minimal accent colors - just for the thin left border
const accentColors: Record<string, string> = {
  html: 'bg-orange-500',
  css: 'bg-blue-500',
  tailwind: 'bg-teal-500',
  javascript: 'bg-yellow-500',
  typescript: 'bg-blue-600',
  react: 'bg-cyan-500',
  vue: 'bg-emerald-500',
  nextjs: 'bg-slate-800',
  angular: 'bg-red-500',
  scss: 'bg-pink-500',
  java: 'bg-orange-600',
  spring: 'bg-green-500',
  'spring-boot': 'bg-green-600',
  'frontend-developer': 'bg-blue-600',
  'backend-developer': 'bg-slate-700',
  playwright: 'bg-green-500',
  rxjs: 'bg-purple-500',
  dsa: 'bg-violet-600',
};

const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'roles', label: 'Career Paths', icon: Briefcase },
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'algorithms', label: 'DSA', icon: Brain },
  { id: 'testing', label: 'Testing', icon: TestTube },
];

const categoryMap: Record<string, string[]> = {
  roles: ['frontend-developer', 'backend-developer'],
  frontend: ['html', 'css', 'tailwind', 'scss', 'javascript', 'typescript', 'react', 'vue', 'nextjs', 'angular', 'rxjs'],
  backend: ['java', 'spring', 'spring-boot'],
  algorithms: ['dsa'],
  testing: ['playwright'],
};

export default function RoadmapsPage() {
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<typeof languages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const [searchQuery, setSearchQuery] = useState('');

  // Combine all roadmaps
  const allRoadmaps = [...(roleBasedRoadmaps || []), ...languages];

  // Filter based on active category and search query
  const filteredRoadmaps = allRoadmaps.filter(r => {
    // Category filter
    const matchesCategory = activeCategory === 'all' || categoryMap[activeCategory]?.includes(r.slug);

    // Search filter
    const matchesSearch = !searchQuery ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLanguageClick = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsModalOpen(true);
  };

  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      className="flex flex-col overflow-hidden bg-background relative"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-slate-200/30 dark:bg-slate-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/20 dark:bg-slate-800/10 rounded-full blur-3xl" />
      </div>

      {/* Innovative Header */}
      <InnovativeHeader
        currentPage="roadmaps"
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 overflow-y-auto relative z-10">
        <div className="w-full">
          {/* Page Title - Scrolls with content */}
          <div className="flex-shrink-0 mb-4">
            <LearningPathTitle
              icon={MapPin}
              title="Learning Roadmaps"
              subtitle={`Explore ${allRoadmaps.length} roadmaps with ${allRoadmaps.reduce((acc, lang) => acc + (lang.topics?.filter(t => t.slug !== 'learning-plan').length ?? 0), 0)}+ topics`}
            />
          </div>

          {/* Innovative Filter Pills - Sticky */}
          <div className="sticky top-0 z-40 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 xl:-mx-12 xl:px-12 py-4 mb-6 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-200">
            <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto w-full">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 w-fit">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  const count = cat.id === 'all'
                    ? allRoadmaps.length
                    : categoryMap[cat.id]?.filter(slug => allRoadmaps.some(r => r.slug === slug)).length || 0;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        'relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap',
                        'transition-all duration-300 ease-out',
                        isActive
                          ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      )}
                    >
                      {/* Active indicator glow */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />
                      )}
                      <Icon className={cn(
                        'w-4 h-4 relative z-10 transition-transform duration-300',
                        isActive && 'scale-110'
                      )} />
                      <span className="relative z-10">{cat.label}</span>
                      <span className={cn(
                        'relative z-10 px-2 py-0.5 rounded-full text-xs font-semibold transition-colors duration-300',
                        isActive
                          ? 'bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                          : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-500 dark:text-slate-400'
                      )}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative w-full max-w-lg flex-shrink-0">
                <input
                  type="text"
                  placeholder="Search roadmaps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/60 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
                />
                <Code2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              </div>
            </div>
          </div>

          {/* Full Width Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {filteredRoadmaps.map((roadmap, index) => {
              const accentColor = accentColors[roadmap.slug] || 'bg-slate-500';
              const topicCount = roadmap.topics?.filter(t => t.slug !== 'learning-plan').length || 0;
              const isRoleBased = categoryMap.roles.includes(roadmap.slug);

              return (
                <div
                  key={roadmap.slug}
                  onClick={() => handleLanguageClick(roadmap)}
                  className="group cursor-pointer"
                >
                  {/* Clean Card */}
                  <div className={cn(
                    'relative h-full rounded-xl overflow-hidden',
                    'bg-white dark:bg-slate-900',
                    'border border-slate-200 dark:border-slate-800',
                    'shadow-sm hover:shadow-md',
                    'transition-all duration-200',
                    'hover:-translate-y-0.5'
                  )}>

                    {/* Thin Accent Line - Left Border */}
                    <div className={cn(
                      'absolute left-0 top-0 bottom-0 w-1',
                      accentColor
                    )} />

                    {/* Card Content */}
                    <div className="p-5 pl-6">
                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                            {roadmap.name}
                          </h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {isRoleBased ? 'Career Path' : 'Skill Path'}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 min-h-[2.5rem]">
                        {roadmap.description || `Master ${roadmap.name} with structured learning.`}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                          <BookOpen className="w-4 h-4" />
                          <span>{topicCount} topics</span>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredRoadmaps.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                No roadmaps in this category yet.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {selectedLanguage && (
        <LearningPathChartModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setTimeout(() => setSelectedLanguage(null), 300);
          }}
          language={selectedLanguage}
          completedTopics={new Set()}
          showProgress={false}
        />
      )}
    </div>
  );
}

