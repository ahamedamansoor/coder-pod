'use client';

import { useState, useEffect } from 'react';
import { MapPin, BookOpen, Target } from 'lucide-react';
import { languages, roleBasedRoadmaps } from '@/data/languages';
import { cn } from '@/lib/utils';
import { LearningPathChartModal } from '@/components/shared/modals/learning-path-chart-modal';
import { InnovativeHeader } from '@/components/shared';

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
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 dark:bg-primary/4 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/6 dark:bg-primary/3 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}></div>
      </div>
      
      {/* Innovative Header */}
      <InnovativeHeader currentPage="roadmaps" />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-8 bg-transparent relative">
        <div className="max-w-7xl mx-auto">
          {/* Professional Hero Section */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Visual Learning Paths</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Learning Roadmaps
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore role-based career roadmaps and skill-based learning paths. Visualize your journey from beginner to expert.
            </p>
            
            {/* Stats Row */}
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{languages.length + (roleBasedRoadmaps?.length || 0)} Roadmaps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {[...languages, ...(roleBasedRoadmaps || [])].reduce((acc, lang) => acc + (lang.topics?.filter(t => t.slug !== 'learning-plan').length ?? 0), 0)}+ Topics
                </span>
              </div>
            </div>
          </div>

          {/* Categorized Language Cards */}
          <div className="space-y-12">
            {languageCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                  </div>
                  {category.title === 'Role-Based Roadmaps' && (
                    <p className="text-sm text-muted-foreground">
                      Visual reference guides showing complete skill trees for career paths (view only)
                    </p>
                  )}
                  {category.title === 'Frontend' && (
                    <p className="text-sm text-muted-foreground">
                      Interactive learning paths with detailed topic content and progress tracking
                    </p>
                  )}
                  {category.title === 'Backend' && (
                    <p className="text-sm text-muted-foreground">
                      Interactive learning paths with detailed topic content and progress tracking
                    </p>
                  )}
                </div>

                {/* Language Cards Grid */}
                <div className="flex flex-wrap gap-3">
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
                        onMouseEnter={() => setHoveredCard(language.slug)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={cn(
                          "cursor-pointer transition-all duration-200",
                          "animate-in fade-in duration-300"
                        )}
                        style={{ animationDelay: `${(categoryIndex * 100) + (index * 50)}ms` }}
                      >
                        <div className={cn(
                          "px-5 py-3 rounded-xl",
                          "bg-white dark:bg-slate-900",
                          "border border-slate-200 dark:border-slate-700",
                          "transition-all duration-200",
                          isHovered && "shadow-sm"
                        )}>
                          <div className="flex items-center gap-2.5">
                            {/* Color Indicator */}
                            <div className={cn(
                              "w-2 h-2 rounded-full transition-colors duration-200",
                              isHovered ? colors.iconBg : "bg-slate-300 dark:bg-slate-600"
                            )} />
                            
                            {/* Language Name */}
                            <span className="text-sm font-medium text-foreground">
                              {language.name}
                            </span>
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
