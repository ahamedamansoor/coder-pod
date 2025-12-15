'use client';

import { useState, useEffect } from 'react';
import { MapPin, BookOpen, Target } from 'lucide-react';
import { languages, roleBasedRoadmaps } from '@/data/languages';
import { cn } from '@/lib/utils';
import { LearningPathChartModal } from '@/components/shared/modals/learning-path-chart-modal';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';

const languageColors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  html: { 
    bg: 'bg-orange-500', 
    border: 'border-orange-500 shadow-orange-500/20', 
    text: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-500'
  },
  css: { 
    bg: 'bg-blue-500', 
    border: 'border-blue-500 shadow-blue-500/20', 
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500'
  },
  tailwind: { 
    bg: 'bg-teal-500', 
    border: 'border-teal-500 shadow-teal-500/20', 
    text: 'text-teal-600 dark:text-teal-400',
    iconBg: 'bg-teal-500'
  },
  javascript: { 
    bg: 'bg-yellow-500', 
    border: 'border-yellow-500 shadow-yellow-500/20', 
    text: 'text-yellow-600 dark:text-yellow-400',
    iconBg: 'bg-yellow-500'
  },
  typescript: { 
    bg: 'bg-indigo-500', 
    border: 'border-indigo-500 shadow-indigo-500/20', 
    text: 'text-indigo-600 dark:text-indigo-400',
    iconBg: 'bg-indigo-500'
  },
  react: { 
    bg: 'bg-cyan-500', 
    border: 'border-cyan-500 shadow-cyan-500/20', 
    text: 'text-cyan-600 dark:text-cyan-400',
    iconBg: 'bg-cyan-500'
  },
  vue: { 
    bg: 'bg-emerald-500', 
    border: 'border-emerald-500 shadow-emerald-500/20', 
    text: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500'
  },
  nextjs: { 
    bg: 'bg-slate-900', 
    border: 'border-slate-900 shadow-slate-900/20', 
    text: 'text-slate-900 dark:text-slate-300',
    iconBg: 'bg-slate-900'
  },
  angular: { 
    bg: 'bg-orange-600', 
    border: 'border-orange-600 shadow-orange-600/20', 
    text: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-600'
  },
  scss: { 
    bg: 'bg-pink-500', 
    border: 'border-pink-500 shadow-pink-500/20', 
    text: 'text-pink-600 dark:text-pink-400',
    iconBg: 'bg-pink-500'
  },
  java: { 
    bg: 'bg-red-500', 
    border: 'border-red-500 shadow-red-500/20', 
    text: 'text-red-600 dark:text-red-400',
    iconBg: 'bg-red-500'
  },
  spring: { 
    bg: 'bg-green-500', 
    border: 'border-green-500 shadow-green-500/20', 
    text: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-500'
  },
  'spring-boot': { 
    bg: 'bg-emerald-500', 
    border: 'border-emerald-500 shadow-emerald-500/20', 
    text: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500'
  },
  'frontend-developer': { 
    bg: 'bg-gradient-to-r from-blue-600 to-purple-600', 
    border: 'border-blue-600 shadow-blue-600/20', 
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-600'
  },
  'backend-developer': { 
    bg: 'bg-gradient-to-r from-slate-700 to-slate-900', 
    border: 'border-slate-700 shadow-slate-700/20', 
    text: 'text-slate-700 dark:text-slate-400',
    iconBg: 'bg-slate-700'
  },
  'playwright': { 
    bg: 'bg-gradient-to-r from-green-600 to-emerald-600', 
    border: 'border-green-600 shadow-green-600/20', 
    text: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-600'
  },
  rxjs: { 
    bg: 'bg-purple-500', 
    border: 'border-purple-500 shadow-purple-500/20', 
    text: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-500'
  },
  dsa: { 
    bg: 'bg-gradient-to-r from-violet-600 to-indigo-600', 
    border: 'border-violet-600 shadow-violet-600/20', 
    text: 'text-violet-600 dark:text-violet-400',
    iconBg: 'bg-violet-600'
  },
};

const languageCategories = [
  {
    title: 'Role-Based Roadmaps',
    languages: ['frontend-developer', 'backend-developer'],
  },
  {
    title: 'Frontend',
    languages: ['html', 'css', 'tailwind', 'scss', 'javascript', 'typescript', 'react', 'vue', 'nextjs', 'angular'],
  },
  {
    title: 'Backend',
    languages: ['java', 'spring', 'spring-boot'],
  },
  {
    title: 'Algorithms & Data Structures',
    languages: ['dsa'],
  },
  {
    title: 'Testing & Tools',
    languages: ['playwright'],
  },
];

export default function RoadmapsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<typeof languages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Force style recalculation on mount to prevent cached styles
  useEffect(() => {
    // Force browser to recalculate all styles
    document.documentElement.classList.remove('force-refresh');
    void document.documentElement.offsetHeight; // Trigger reflow
    document.documentElement.classList.add('force-refresh');
    
    // Add cache-busting meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Cache-Control';
    meta.content = 'no-cache, no-store, must-revalidate';
    document.head.appendChild(meta);
    
    const pragma = document.createElement('meta');
    pragma.httpEquiv = 'Pragma';
    pragma.content = 'no-cache';
    document.head.appendChild(pragma);
    
    const expires = document.createElement('meta');
    expires.httpEquiv = 'Expires';
    expires.content = '0';
    document.head.appendChild(expires);
    
    // Clean up
    return () => {
      document.documentElement.classList.remove('force-refresh');
      document.head.removeChild(meta);
      document.head.removeChild(pragma);
      document.head.removeChild(expires);
    };
  }, []);

  const handleLanguageClick = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsModalOpen(true);
  };

  return (
    <div 
      style={{ width: '100vw', height: '100vh' }}
      className="flex flex-col overflow-hidden bg-background relative"
    >
      {/* Simplified Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient (no animation) */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 dark:bg-primary/2 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl"></div>
      </div>
      
      {/* Innovative Header */}
      <InnovativeHeader currentPage="roadmaps" />

      {/* Page Title - Fixed */}
      <div className="flex-shrink-0">
        <LearningPathTitle
          icon={MapPin}
          title="Learning Roadmaps"
          subtitle={`Explore role-based career roadmaps and skill-based learning paths. Visualize your journey from beginner to expert — ${languages.length + (roleBasedRoadmaps?.length || 0)} roadmaps with ${[...languages, ...(roleBasedRoadmaps || [])].reduce((acc, lang) => acc + (lang.topics?.filter(t => t.slug !== 'learning-plan').length ?? 0), 0)}+ topics`}
        />
      </div>

      {/* Main Content - Scrollable */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 bg-transparent relative overflow-y-auto" style={{ willChange: 'scroll-position' }}>
        
        <div className="w-full relative z-10">

          {/* Categorized Language Cards */}
          <div className="space-y-12">
            {languageCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="opacity-100"
              >
                {/* Category Header */}
                <div className="mb-8 relative">
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-3">
                      {/* Category icon */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/10">
                        <div className="w-5 h-5 rounded-lg bg-primary/60" />
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground">
                          {category.title}
                        </h2>
                      </div>
                      
                      {/* Simple gradient line */}
                      <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                    </div>
                    
                    {category.title === 'Role-Based Roadmaps' && (
                      <p className="text-sm text-muted-foreground pl-14">
                        Visual reference guides showing complete skill trees for career paths (view only)
                      </p>
                    )}
                    {category.title === 'Frontend' && (
                      <p className="text-sm text-muted-foreground pl-14">
                        Interactive learning paths with detailed topic content and progress tracking
                      </p>
                    )}
                    {category.title === 'Backend' && (
                      <p className="text-sm text-muted-foreground pl-14">
                        Interactive learning paths with detailed topic content and progress tracking
                      </p>
                    )}
                    {category.title === 'Testing & Tools' && (
                      <p className="text-sm text-muted-foreground pl-14">
                        Modern testing frameworks and essential development tools
                      </p>
                    )}
                  </div>
                </div>

                {/* Language Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2.5">
                  {category.languages.map((langSlug, index) => {
                    // Check if this is a role-based roadmap or regular language
                    const language = category.title === 'Role-Based Roadmaps' 
                      ? roleBasedRoadmaps?.find(l => l.slug === langSlug)
                      : languages.find(l => l.slug === langSlug);
                    if (!language) return null;
                    
                    const colors = languageColors[language.slug];
                    const isHovered = hoveredCard === language.slug;
                    
                    return (
                      <div
                        key={language.slug}
                        onClick={() => handleLanguageClick(language)}
                        className="group relative cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02] hover:z-10"
                        style={{ willChange: 'transform' }}
                      >
                        {/* Simplified glow on hover */}
                        <div className={cn(
                          "absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                          "bg-gradient-to-r",
                          colors.bg.replace('bg-', 'from-') + '/30',
                          "to-primary/10"
                        )} />
                        
                        {/* Main card */}
                        <div className={cn(
                          "relative px-3 py-2.5 rounded-lg overflow-hidden",
                          "bg-white/80 dark:bg-slate-900/80",
                          "border border-slate-200/60 dark:border-slate-700/60",
                          "transition-all duration-200 ease-out",
                          "group-hover:shadow-lg group-hover:shadow-primary/10",
                          "group-hover:border-primary/40"
                        )}>
                          
                          {/* Colored accent bar */}
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-1 h-0 group-hover:h-full transition-all duration-200">
                            <div className={cn(
                              "w-full h-full rounded-r-full",
                              colors.iconBg
                            )} />
                          </div>
                          
                          <div className="relative flex items-center gap-2.5 group-hover:pl-2 transition-all duration-200">
                            {/* Icon badge - appears on hover */}
                            <div className="w-0 group-hover:w-6 opacity-0 group-hover:opacity-100 transition-all duration-200 overflow-hidden">
                              <div className={cn(
                                "w-6 h-6 rounded-md flex items-center justify-center",
                                colors.iconBg,
                                "shadow-sm"
                              )}>
                                <div className="w-3 h-3 rounded-sm bg-white/90" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xs font-semibold transition-transform duration-200 leading-tight truncate text-slate-900 dark:text-slate-100 group-hover:translate-x-0.5">
                                {language.name}
                              </h3>
                              <p className={cn(
                                "text-[10px] font-medium transition-colors duration-200 mt-0.5 text-muted-foreground",
                                "group-hover:" + colors.text.split(' ')[0]
                              )}>
                                {language.topics?.filter(t => t.slug !== 'learning-plan').length || 0} topics
                              </p>
                            </div>
                            
                            {/* Arrow */}
                            <svg 
                              className={cn(
                                "w-3.5 h-3.5 transition-all duration-200 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0",
                                colors.text.split(' ')[0]
                              )} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
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
