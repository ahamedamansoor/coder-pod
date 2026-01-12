'use client';
import { GitBranch, Github, Code, Users, Shield, Zap, Database, Settings, BookOpen, GitPullRequest, GitMerge, GitCommit, GitFork } from 'lucide-react';
import { useGit } from '@/app/languages/git/git-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Git - using orange/red theme to match Git branding
const categoryIcons = {
  '1. Git Fundamentals': { icon: GitBranch, color: 'text-orange-600', level: 'Beginner' },
  '2. Branching': { icon: GitFork, color: 'text-orange-500', level: 'Beginner' },
  '3. Merging': { icon: GitMerge, color: 'text-orange-700', level: 'Intermediate' },
  '4. Remote Repositories': { icon: Database, color: 'text-orange-600', level: 'Intermediate' },
  '5. GitHub Basics': { icon: Github, color: 'text-orange-500', level: 'Beginner' },
  '6. Collaboration': { icon: Users, color: 'text-orange-700', level: 'Intermediate' },
  '7. Undoing Changes': { icon: GitCommit, color: 'text-orange-600', level: 'Intermediate' },
  '8. Tagging': { icon: BookOpen, color: 'text-orange-500', level: 'Intermediate' },
  '9. Advanced Git': { icon: Code, color: 'text-orange-700', level: 'Advanced' },
  '10. GitHub Features': { icon: Zap, color: 'text-orange-600', level: 'Advanced' },
  '11. Workflows': { icon: GitPullRequest, color: 'text-orange-500', level: 'Advanced' },
  '12. Best Practices': { icon: Shield, color: 'text-orange-700', level: 'Intermediate' },
  '13. Security': { icon: Shield, color: 'text-orange-600', level: 'Advanced' },
  '14. Performance': { icon: Settings, color: 'text-orange-500', level: 'Advanced' },
  '15. GUI Tools': { icon: Code, color: 'text-orange-700', level: 'Beginner' },
  '16. Troubleshooting': { icon: Settings, color: 'text-orange-600', level: 'Advanced' },
  '17. Enterprise Git': { icon: Github, color: 'text-orange-500', level: 'Advanced' },
  '18. Open Source': { icon: Users, color: 'text-orange-700', level: 'Advanced' },
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
