'use client';

import { Language, Topic } from '@/data/languages';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface TopicNavigationProps {
  currentTopic: Topic;
  language: Language;
}

export function TopicNavigation({ currentTopic, language }: TopicNavigationProps) {
  // Filter out special topics (learning-plan, interview-questions, version-updates)
  const navigableTopics = language.topics.filter(
    topic => !['learning-plan', 'interview-questions', 'version-updates'].includes(topic.slug)
  );

  // Find current topic index
  const currentIndex = navigableTopics.findIndex(t => t.slug === currentTopic.slug);
  
  // If current topic is not navigable (e.g., learning-plan), don't show navigation
  if (currentIndex === -1) {
    return null;
  }

  const previousTopic = currentIndex > 0 ? navigableTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < navigableTopics.length - 1 ? navigableTopics[currentIndex + 1] : null;

  // Don't show if there's no previous or next topic
  if (!previousTopic && !nextTopic) {
    return null;
  }

  return (
    <div className="mt-16 pt-8 border-t border-border">
      <div className="flex items-center justify-between gap-4">
        {/* Previous Topic */}
        {previousTopic ? (
          <Link 
            href={`/languages/${language.slug}/${previousTopic.slug}`}
            className="flex-1 group"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-blue-400 dark:hover:border-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Previous Topic</p>
                    <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {previousTopic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {previousTopic.explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Center Divider with Icon */}
        <div className="flex-shrink-0">
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Next Topic */}
        {nextTopic ? (
          <Link 
            href={`/languages/${language.slug}/${nextTopic.slug}`}
            className="flex-1 group"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-emerald-400 dark:hover:border-emerald-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Next Topic</p>
                    <h3 className="font-semibold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {nextTopic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {nextTopic.explanation}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {/* Mobile View - Stacked */}
      <div className="md:hidden mt-4 space-y-4">
        {previousTopic && (
          <Link href={`/languages/${language.slug}/${previousTopic.slug}`}>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="truncate">{previousTopic.title}</span>
            </Button>
          </Link>
        )}
        {nextTopic && (
          <Link href={`/languages/${language.slug}/${nextTopic.slug}`}>
            <Button variant="outline" className="w-full justify-end gap-2">
              <span className="truncate">{nextTopic.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
