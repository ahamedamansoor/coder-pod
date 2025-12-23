'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Target,
  Star,
  Filter,
  Search,
  GraduationCap,
  Copy,
  Check,
  Code2,
  Terminal,
  ChevronDown,
  ChevronUp,
  Building2,
  ExternalLink,
  Laptop,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { LearningPathTitle } from '@/components/shared/learning-path-title';
import { useUser } from '@/hooks/use-auth-compat';
import { supabase } from '@/lib/supabase';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  code?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category?: string;
  tips?: string[];
  companies?: string[]; // Top 3 companies that asked this question
  type?: 'theory' | 'practical'; // Question type
  practicalTask?: string; // For practical questions - what to build
}

interface InterviewQuestionsPageProps {
  title: string;
  description: string;
  questions: InterviewQuestion[];
  languageSlug: string;
  accentColor?: string;
  icon?: any;
}

interface UserPreferences {
  filterDifficulty: string;
  searchQuery: string;
}

export function InterviewQuestionsPage({
  title,
  description,
  questions,
  languageSlug,
  accentColor = 'from-blue-600 to-indigo-600',
  icon: IconComponent = GraduationCap,
}: InterviewQuestionsPageProps) {
  const { user } = useUser();
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { openWithContent } = useWebPlayground();
  
  const hasLoadedRef = useRef(false);
  const PREFERENCES_KEY = useMemo(() => `interview_preferences_${languageSlug}`, [languageSlug]);

  // Load preferences from localStorage
  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    const storedPrefs = localStorage.getItem(PREFERENCES_KEY);
    if (storedPrefs) {
      try {
        const prefs: UserPreferences = JSON.parse(storedPrefs);
        setFilterDifficulty(prefs.filterDifficulty || 'all');
        setSearchQuery(prefs.searchQuery || '');
      } catch (e) {
        console.error('Failed to parse preferences:', e);
      }
    }
  }, [PREFERENCES_KEY]);

  // Save preferences to localStorage
  const savePreferences = useCallback(() => {
    const prefs: UserPreferences = {
      filterDifficulty,
      searchQuery,
    };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
  }, [filterDifficulty, searchQuery, PREFERENCES_KEY]);

  // Auto-save preferences when they change
  useEffect(() => {
    savePreferences();
  }, [savePreferences]);

  // Flush preferences to DB on page unload
  useEffect(() => {
    if (!user) return;

    const flushPreferencesToDB = async () => {
      try {
        const prefs: UserPreferences = {
          filterDifficulty,
          searchQuery,
        };
        
        await supabase
          .from('users')
          .update({ 
            interview_preferences: {
              [languageSlug]: prefs
            }
          })
          .eq('id', user.uid);
      } catch (error) {
        console.error('Error saving preferences to DB:', error);
      }
    };

    const handleBeforeUnload = () => {
      flushPreferencesToDB();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [user, languageSlug, filterDifficulty, searchQuery]);


  // Filter questions
  const filteredQuestions = useMemo(() => {
    let result = [...questions];
    
    if (filterDifficulty !== 'all') {
      result = result.filter(q => q.difficulty === filterDifficulty);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(q => 
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query) ||
        q.companies?.some(c => c.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [questions, filterDifficulty, searchQuery]);


  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    Hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <LearningPathTitle
        icon={IconComponent}
        title={title}
        subtitle={description}
        action={
          <Badge variant="secondary" className="text-sm px-4 py-1.5 gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20">
            <Target className="w-4 h-4" />
            <span className="font-semibold">{questions.length}</span> Questions
          </Badge>
        }
      />

      {/* Filters Bar */}
      <Card className="p-4">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Difficulty:</span>
            {['all', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <Button
                key={diff}
                variant={filterDifficulty === diff ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterDifficulty(diff)}
                className="text-xs"
              >
                {diff === 'all' ? 'All' : diff}
              </Button>
            ))}
          </div>


          {/* Results count */}
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredQuestions.length}</span> of {questions.length} questions
          </div>
        </div>
      </Card>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={idx}
            difficultyColors={difficultyColors}
            accentColor={accentColor}
          />
        ))}
        {filteredQuestions.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No questions match your filters. Try adjusting your search or filters.</p>
          </Card>
        )}
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  difficultyColors,
  accentColor,
}: {
  question: InterviewQuestion;
  index: number;
  difficultyColors: Record<string, string>;
  accentColor?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { openWithContent } = useWebPlayground();

  const handleOpenPlayground = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Extract HTML, CSS, and JS from the code
    const code = question.code || '';
    let html = '';
    let css = '';
    let js = '';
    
    // If code contains full HTML document
    if (code.includes('<!DOCTYPE') || code.includes('<html')) {
      html = code;
    } else {
      // Try to extract sections
      const styleMatch = code.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      const scriptMatch = code.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
      
      if (styleMatch) {
        css = styleMatch[1].trim();
      }
      if (scriptMatch) {
        js = scriptMatch[1].trim();
      }
      
      // Remove style and script tags from HTML
      html = code
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .trim();
    }
    
    openWithContent(html, css, js, 'html');
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-sm font-mono text-muted-foreground">#{index + 1}</span>
              <Badge className={cn("text-xs", difficultyColors[question.difficulty])}>
                {question.difficulty}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
            
            {/* Company badges */}
            {question.companies && question.companies.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Building2 className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Asked by:</span>
                {question.companies.map((company, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-xs font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800"
                  >
                    {company}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {question.type === 'practical' && (
              <Button
                variant="default"
                size="sm"
                onClick={handleOpenPlayground}
                className="gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="text-xs">Try in Playground</span>
              </Button>
            )}
            <Button variant="ghost" size="sm">
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <CardContent className="pt-0 pb-4 space-y-4">
          {/* Practical Task Description */}
          {question.type === 'practical' && question.practicalTask && (
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-2">
                <Laptop className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-1">🎯 Practical Task:</p>
                  <p className="text-sm text-purple-800 dark:text-purple-200">{question.practicalTask}</p>
                </div>
              </div>
            </div>
          )}

          <div
            className="prose prose-sm dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: String(marked.parse(question.answer)) }}
          />
          {question.code && (
            <div className="mt-4">
              <CodeSnippet code={question.code} accent={accentColor} />
            </div>
          )}
          {question.tips && question.tips.length > 0 && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Tips:</p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                {question.tips.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

function CodeSnippet({ code, accent }: { code: string; accent?: string }) {
  const [copied, setCopied] = useState(false);
  const gradient = accent ? `bg-gradient-to-br ${accent}` : 'bg-gradient-to-br from-blue-500/50 via-indigo-500/40 to-purple-500/50';

  // Detect language from code content
  const detectLanguage = (code: string): string => {
    if (code.includes('<!DOCTYPE') || code.includes('<html') || code.includes('<div')) return 'HTML';
    if (code.includes('function') || code.includes('const') || code.includes('=>')) return 'JavaScript';
    if (code.includes('class') && code.includes(':')) return 'CSS';
    if (code.includes('def ') || code.includes('import ')) return 'Python';
    return 'Code';
  };

  const language = detectLanguage(code);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Escape HTML for display
  const escapeHtml = (code: string) => {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-slate-200/70 dark:border-slate-800/70 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Animated gradient background */}
      <div className={`absolute inset-0 opacity-40 blur-2xl pointer-events-none ${gradient} transition-opacity group-hover:opacity-60`} />
      
      {/* Top shine effect */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="relative z-10">
        {/* Header with copy button */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-slate-50/90 to-slate-100/90 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400 shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-green-400 shadow-sm" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                {language}
              </span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2 gap-1.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                <span className="text-xs text-green-600 dark:text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
        
        {/* Code content */}
        <div className="relative bg-gradient-to-br from-white/95 to-slate-50/95 dark:from-slate-950/95 dark:to-slate-900/95 backdrop-blur-sm">
          <div className="px-4 py-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm leading-relaxed font-mono text-slate-800 dark:text-slate-100">
              <code>{code}</code>
            </pre>
          </div>
          
          {/* Bottom fade effect */}
          <div className="absolute inset-x-0 bottom-0 h-8 pointer-events-none bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-slate-950/90 dark:via-slate-950/50" />
        </div>
        
        {/* Terminal-style bottom bar */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-800/50">
          <Terminal className="w-3 h-3 text-slate-500 dark:text-slate-400" />
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
            {code.split('\n').length} lines
          </span>
        </div>
      </div>
    </div>
  );
}
