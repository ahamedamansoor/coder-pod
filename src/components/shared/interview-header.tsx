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
  Lightbulb
} from 'lucide-react';

interface InterviewHeaderProps {
  showBackButton?: boolean;
  currentLanguage?: string;
}

const languages = [
  {
    title: 'HTML',
    icon: <Code className="w-4 h-4" />,
    href: '/prepare/html/interview-questions',
    color: 'orange',
    status: 'available'
  },
  {
    title: 'CSS',
    icon: <Palette className="w-4 h-4" />,
    href: '/prepare/css/interview-questions',
    color: 'blue',
    status: 'available'
  },
  {
    title: 'JavaScript',
    icon: <FileText className="w-4 h-4" />,
    href: '/prepare/javascript/interview-questions',
    color: 'yellow',
    status: 'available'
  },
  {
    title: 'React',
    icon: <Play className="w-4 h-4" />,
    href: '/prepare/react/interview-questions',
    color: 'cyan',
    status: 'available'
  },
  {
    title: 'TypeScript',
    icon: <Code className="w-4 h-4" />,
    href: '#',
    color: 'blue',
    status: 'learning'
  }
];

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
                      languages.find(lang => lang.title === currentLanguage)?.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/40' :
                      languages.find(lang => lang.title === currentLanguage)?.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40' :
                      languages.find(lang => lang.title === currentLanguage)?.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/40' :
                      languages.find(lang => lang.title === currentLanguage)?.color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/40' :
                      'bg-slate-100 dark:bg-slate-900/40'
                    }`}>
                      <div className={
                        languages.find(lang => lang.title === currentLanguage)?.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                        languages.find(lang => lang.title === currentLanguage)?.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        languages.find(lang => lang.title === currentLanguage)?.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                        languages.find(lang => lang.title === currentLanguage)?.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                        'text-slate-600 dark:text-slate-400'
                      }>
                        {languages.find(lang => lang.title === currentLanguage)?.icon}
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
              {languages.map((language, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link 
                    href={language.href}
                    className="flex items-center gap-3 w-full px-2 py-2 cursor-pointer"
                  >
                    <div className={`p-1.5 rounded-md ${
                      language.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/40' :
                      language.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40' :
                      language.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/40' :
                      language.color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/40' :
                      'bg-slate-100 dark:bg-slate-900/40'
                    }`}>
                      <div className={
                        language.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                        language.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        language.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                        language.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                        'text-slate-600 dark:text-slate-400'
                      }>
                        {language.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{language.title}</div>
                      <div className="text-xs text-slate-500">
                        {language.status === 'available' ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
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
