'use client';
import { GitBranch, Github, Code, Users, Shield, Zap, Database, Settings, BookOpen, GitPullRequest, GitMerge, GitCommit, GitFork } from 'lucide-react';
import { useGit } from '@/app/languages/git/git-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Git - using orange/red theme to match Git branding
const categoryIcons = {
  'Git Fundamentals': { icon: GitBranch, color: 'text-orange-600', level: 'Beginner' },
  'Branching': { icon: GitFork, color: 'text-orange-500', level: 'Beginner' },
  'Merging': { icon: GitMerge, color: 'text-orange-700', level: 'Intermediate' },
  'Remote Repositories': { icon: Database, color: 'text-orange-600', level: 'Intermediate' },
  'GitHub Basics': { icon: Github, color: 'text-orange-500', level: 'Beginner' },
  'Collaboration': { icon: Users, color: 'text-orange-700', level: 'Intermediate' },
  'Undoing Changes': { icon: GitCommit, color: 'text-orange-600', level: 'Intermediate' },
  'Tagging': { icon: BookOpen, color: 'text-orange-500', level: 'Intermediate' },
  'Advanced Git': { icon: Code, color: 'text-orange-700', level: 'Advanced' },
  'GitHub Features': { icon: Zap, color: 'text-orange-600', level: 'Advanced' },
  'Workflows': { icon: GitPullRequest, color: 'text-orange-500', level: 'Advanced' },
  'Best Practices': { icon: Shield, color: 'text-orange-700', level: 'Intermediate' },
  'Security': { icon: Shield, color: 'text-orange-600', level: 'Advanced' },
  'Performance': { icon: Settings, color: 'text-orange-500', level: 'Advanced' },
  'GUI Tools': { icon: Code, color: 'text-orange-700', level: 'Beginner' },
  'Troubleshooting': { icon: Settings, color: 'text-orange-600', level: 'Advanced' },
  'Enterprise Git': { icon: Github, color: 'text-orange-500', level: 'Advanced' },
  'Open Source': { icon: Users, color: 'text-orange-700', level: 'Advanced' },
};

export const GitLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useGit();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
