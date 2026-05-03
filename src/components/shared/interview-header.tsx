'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Code,
  Palette,
  FileText,
  Play,
  Lightbulb,
  Layers,
  Target,
  Database,
  TestTube,
  Globe,
  Sparkles,
  Server,
  Building2,
  TrendingUp
} from 'lucide-react';
import { enabledLanguages, languages } from '@/data/languages';

// Language data synchronized with prepare page
const languagesData = [
  {
    title: 'HTML',
    icon: <Code className="w-4 h-4" />,
    color: 'orange',
    href: '/prepare/html/interview-questions',
    status: 'available',
    companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']
  },
  {
    title: 'CSS',
    icon: <Palette className="w-4 h-4" />,
    color: 'blue',
    href: '/prepare/css/interview-questions',
    status: 'available',
    companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']
  },
  {
    title: 'JavaScript',
    icon: <FileText className="w-4 h-4" />,
    color: 'yellow',
    href: '/prepare/javascript/interview-questions',
    status: 'available',
    companies: ['Google', 'Meta', 'Netflix', 'Tesla', 'Twitter']
  },
  {
    title: 'Node.js',
    icon: <Server className="w-4 h-4" />,
    color: 'green',
    href: '/prepare/nodejs/interview-questions',
    status: 'available',
    companies: ['Netflix', 'Uber', 'LinkedIn', 'PayPal', 'Walmart']
  },
  {
    title: 'React',
    icon: <Layers className="w-4 h-4" />,
    color: 'cyan',
    href: '/prepare/react/interview-questions',
    status: 'available',
    companies: ['Meta', 'Netflix', 'Airbnb', 'Uber', 'Spotify']
  },
  {
    title: 'TypeScript',
    icon: <Code className="w-4 h-4" />,
    color: 'indigo',
    href: '/prepare/typescript/interview-questions',
    status: 'available',
    companies: ['Microsoft', 'Google', 'Meta', 'Amazon', 'Slack']
  },
  {
    title: 'Angular',
    icon: <Target className="w-4 h-4" />,
    color: 'red',
    href: '/prepare/angular/interview-questions',
    status: 'available',
    companies: ['Google', 'Microsoft', 'IBM', 'Accenture', 'Deloitte']
  },
  {
    title: 'Vue.js',
    icon: <Sparkles className="w-4 h-4" />,
    color: 'green',
    href: '/prepare/vue/interview-questions',
    status: 'available',
    companies: ['Google', 'Netflix', 'Adobe', 'GitLab', '阿里巴巴']
  },
  {
    title: 'Java',
    icon: <Server className="w-4 h-4" />,
    color: 'orange',
    href: '/prepare/java/interview-questions',
    status: 'available',
    companies: ['Google', 'Amazon', 'Microsoft', 'Oracle', 'IBM']
  },
  {
    title: 'RxJS',
    icon: <Database className="w-4 h-4" />,
    color: 'purple',
    href: '/prepare/rxjs/interview-questions',
    status: 'available',
    companies: ['Netflix', 'Google', 'Microsoft', 'Meta', 'Amazon']
  }
];

// Categories matching prepare page structure
const categories = [
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'testing', label: 'Testing', icon: TestTube },
  { id: 'devops', label: 'DevOps', icon: Target },
];

const categoryMap: Record<string, string[]> = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Angular', 'Vue.js', 'RxJS'],
  backend: ['Java', 'Node.js'],
  database: [],
  testing: [],
  devops: [],
};

// Get all languages grouped by category (synchronized with prepare page)
const getLanguagesByCategory = () => {
  const grouped: Record<string, typeof languagesData> = {};
  
  categories.forEach(category => {
    const categoryLanguages = languagesData.filter(lang => 
      categoryMap[category.id]?.includes(lang.title)
    );
    
    if (categoryLanguages.length > 0) {
      grouped[category.id] = categoryLanguages;
    }
  });
  
  return grouped;
};

interface InterviewHeaderProps {
  showBackButton?: boolean;
  currentLanguage?: string;
}

// Icon mapping for different languages (synchronized with prepare page)
const getIcon = (title: string) => {
  const language = languagesData.find(lang => lang.title === title);
  return language ? language.icon : <Code className="w-4 h-4" />;
};

// Color mapping for different languages (synchronized with prepare page)
const getColor = (title: string) => {
  const language = languagesData.find(lang => lang.title === title);
  return language ? language.color : 'slate';
};

function InterviewHeader({ showBackButton = true, currentLanguage }: InterviewHeaderProps) {
  // Show header on dashboard, show Pro Tip on interview pages
  const isDashboard = currentLanguage === "Dashboard";

  return (
    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Back Button and Dropdown */}
      {showBackButton && (
        <div className="flex items-center gap-3">
          <Link href="/prepare">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {currentLanguage && currentLanguage !== "Dashboard" ? (
                  <>
                    <div className={`p-1 rounded-md ${
                      getColor(currentLanguage) === 'orange' ? 'bg-orange-100 dark:bg-orange-900/40' :
                      getColor(currentLanguage) === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40' :
                      getColor(currentLanguage) === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/40' :
                      getColor(currentLanguage) === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/40' :
                      getColor(currentLanguage) === 'pink' ? 'bg-pink-100 dark:bg-pink-900/40' :
                      getColor(currentLanguage) === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-900/40' :
                      getColor(currentLanguage) === 'red' ? 'bg-red-100 dark:bg-red-900/40' :
                      getColor(currentLanguage) === 'green' ? 'bg-green-100 dark:bg-green-900/40' :
                      getColor(currentLanguage) === 'purple' ? 'bg-purple-100 dark:bg-purple-900/40' :
                      'bg-slate-100 dark:bg-slate-900/40'
                    }`}>
                      <div className={
                        getColor(currentLanguage) === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                        getColor(currentLanguage) === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        getColor(currentLanguage) === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                        getColor(currentLanguage) === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                        getColor(currentLanguage) === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                        getColor(currentLanguage) === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                        getColor(currentLanguage) === 'red' ? 'text-red-600 dark:text-red-400' :
                        getColor(currentLanguage) === 'green' ? 'text-green-600 dark:text-green-400' :
                        getColor(currentLanguage) === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        'text-slate-600 dark:text-slate-400'
                      }>
                        {getIcon(currentLanguage)}
                      </div>
                    </div>
                    <span className="font-medium">{currentLanguage}</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4" />
                    All Languages
                  </>
                )}
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80 max-h-96 overflow-y-auto">
              {Object.entries(getLanguagesByCategory()).map(([categoryId, languages]) => {
                const category = categories.find(c => c.id === categoryId);
                if (!category || languages.length === 0) return null;
                
                const CategoryIcon = category.icon;
                
                return (
                  <div key={categoryId} className="py-1">
                    {/* Category Header */}
                    <div className="px-2 py-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50">
                      <CategoryIcon className="w-3 h-3" />
                      {category.label}
                      <span className="ml-auto text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                        {languages.length}
                      </span>
                    </div>
                    
                    {/* Languages in this category */}
                    {languages.map((language, index) => {
                      const color = getColor(language.title);
                      const isCurrentLanguage = currentLanguage === language.title;
                      
                      return (
                        <DropdownMenuItem key={`${categoryId}-${index}`} asChild>
                          <Link 
                            href={language.href}
                            className={`flex items-center gap-3 w-full px-2 py-2.5 cursor-pointer ml-4 transition-colors ${
                              isCurrentLanguage ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                            }`}
                          >
                            <div className={`p-1.5 rounded-md ${
                              color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/40' :
                              color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40' :
                              color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/40' :
                              color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/40' :
                              color === 'pink' ? 'bg-pink-100 dark:bg-pink-900/40' :
                              color === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-900/40' :
                              color === 'red' ? 'bg-red-100 dark:bg-red-900/40' :
                              color === 'green' ? 'bg-green-100 dark:bg-green-900/40' :
                              color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/40' :
                              'bg-slate-100 dark:bg-slate-900/40'
                            }`}>
                              <div className={
                                color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                                color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                                color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                                color === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                                color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                                color === 'red' ? 'text-red-600 dark:text-red-400' :
                                color === 'green' ? 'text-green-600 dark:text-green-400' :
                                color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                'text-slate-600 dark:text-slate-400'
                              }>
                                {getIcon(language.title)}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <div className="font-medium text-sm truncate">{language.title}</div>
                                {isCurrentLanguage && (
                                  <span className="px-1.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                                    Current
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <Building2 className="w-3 h-3 text-slate-400" />
                                <div className="flex gap-1">
                                  {language.companies.slice(0, 2).map((company, idx) => (
                                    <span key={idx} className="text-xs text-slate-500 dark:text-slate-400">
                                      {company}
                                    </span>
                                  ))}
                                  {language.companies.length > 2 && (
                                    <span className="text-xs text-slate-400">
                                      +{language.companies.length - 2}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                    
                    {/* Add separator between categories */}
                    {categoryId !== Object.keys(getLanguagesByCategory()).pop() && (
                      <DropdownMenuSeparator className="my-1" />
                    )}
                  </div>
                );
              })}
              
              {/* "All Languages" option at the bottom */}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link 
                  href="/prepare"
                  className="flex items-center gap-3 w-full px-2 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <div className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-900/40">
                    <BookOpen className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">View All Languages</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Browse the complete dashboard</div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {/* Show Pro Tip only on interview pages, not on dashboard */}
      {!isDashboard && (
        <div className="w-full sm:flex-1 flex justify-center">
          <div className="relative overflow-hidden rounded-xl border border-gradient-to-r from-emerald-200 via-green-200 to-emerald-200 dark:from-emerald-800/50 dark:via-green-800/50 dark:to-emerald-800/50 bg-gradient-to-br from-emerald-50/90 via-green-50/90 to-emerald-50/90 dark:from-emerald-950/40 dark:via-green-950/40 dark:to-emerald-950/40 backdrop-blur-sm shadow-lg shadow-green-500/10">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-emerald-500/5 animate-pulse" />
            
            <div className="relative px-2 py-0.5">
              <div className="flex flex-col items-center gap-0.5 text-sm">
                <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50 px-3 py-1 rounded-full">
                  <Lightbulb className="w-4 h-4" />
                  <span className="font-semibold">Pro Tip</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1 text-emerald-600 dark:text-emerald-400 text-center">
                  <span className="font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-green-200 dark:hover:bg-green-900/50 hover:scale-105 hover:shadow-md active:scale-95">Easy</span>
                  <span className="text-emerald-500">→</span>
                  <span className="font-semibold text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-yellow-200 dark:hover:bg-yellow-900/50 hover:scale-105 hover:shadow-md active:scale-95">Medium</span>
                  <span className="text-emerald-500">→</span>
                  <span className="font-semibold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-red-200 dark:hover:bg-red-900/50 hover:scale-105 hover:shadow-md active:scale-95">Hard</span>
                  <span className="text-emerald-600 dark:text-emerald-400">• Try to answer before expanding! Take notes on challenging concepts.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InterviewHeader;
