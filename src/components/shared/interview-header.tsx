'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  Sparkles
} from 'lucide-react';
import { enabledLanguages } from '@/data/languages';

// Languages that are shown on the prepare page dashboard
const dashboardLanguages = enabledLanguages.filter(lang => 
  ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Angular', 'Vue.js'].includes(lang.name)
);

interface InterviewHeaderProps {
  showBackButton?: boolean;
  currentLanguage?: string;
}

// Icon mapping for different languages
const getIcon = (title: string) => {
  switch (title) {
    case 'HTML': return <Code className="w-4 h-4" />;
    case 'CSS': return <Palette className="w-4 h-4" />;
    case 'SCSS': return <Palette className="w-4 h-4" />;
    case 'Tailwind': return <Palette className="w-4 h-4" />;
    case 'JavaScript': return <FileText className="w-4 h-4" />;
    case 'TypeScript': return <Code className="w-4 h-4" />;
    case 'React': return <Layers className="w-4 h-4" />;
    case 'Angular': return <Target className="w-4 h-4" />;
    case 'Vue.js': return <Sparkles className="w-4 h-4" />;
    case 'DSA': return <Database className="w-4 h-4" />;
    case 'Selenium': return <TestTube className="w-4 h-4" />;
    case 'Python': return <Globe className="w-4 h-4" />;
    default: return <Code className="w-4 h-4" />;
  }
};

// Color mapping for different languages
const getColor = (title: string) => {
  switch (title) {
    case 'HTML': return 'orange';
    case 'CSS': return 'blue';
    case 'SCSS': return 'pink';
    case 'Tailwind': return 'cyan';
    case 'JavaScript': return 'yellow';
    case 'TypeScript': return 'indigo';
    case 'React': return 'cyan';
    case 'Angular': return 'red';
    case 'Vue.js': return 'green';
    case 'DSA': return 'green';
    case 'Selenium': return 'green';
    case 'Python': return 'blue';
    default: return 'slate';
  }
};

export default function InterviewHeader({ showBackButton = true, currentLanguage }: InterviewHeaderProps) {
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
            <DropdownMenuContent align="start" className="w-48">
              {dashboardLanguages.map((language, index) => {
                const color = getColor(language.name);
                return (
                  <DropdownMenuItem key={index} asChild>
                    <Link 
                      href={`/prepare/${language.slug}/interview-questions`}
                      className="flex items-center gap-3 w-full px-2 py-2 cursor-pointer"
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
                          'text-slate-600 dark:text-slate-400'
                        }>
                          {getIcon(language.name)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{language.name}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
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
