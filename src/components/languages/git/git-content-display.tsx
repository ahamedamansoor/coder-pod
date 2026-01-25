'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';

// Lazy load all the topic components
const GitIntroduction = lazy(() => import('@/components/languages/git/topics/git-introduction'));
const GitInstallation = lazy(() => import('@/components/languages/git/topics/git-installation'));
const GitBasicsCommands = lazy(() => import('@/components/languages/git/topics/git-basics-commands'));
const GitHistory = lazy(() => import('@/components/languages/git/topics/git-history'));
const GitBranching = lazy(() => import('@/components/languages/git/topics/git-branching'));
const GitBranchCommands = lazy(() => import('@/components/languages/git/topics/git-branch-commands'));
const GitBranchStrategies = lazy(() => import('@/components/languages/git/topics/git-branch-strategies'));
const GitMerging = lazy(() => import('@/components/languages/git/topics/git-merging'));
const MergeConflicts = lazy(() => import('@/components/languages/git/topics/git-conflicts'));
const GitRebase = lazy(() => import('@/components/languages/git/topics/git-rebase'));
// const GitRemoteBasics = lazy(() => import('@/components/languages/git/topics/git-remote-basics'));
// const GitRemoteWorkflows = lazy(() => import('@/components/languages/git/topics/git-remote-workflows'));
// const GitSshHttps = lazy(() => import('@/components/languages/git/topics/git-ssh-https'));
// const GithubIntroduction = lazy(() => import('@/components/languages/git/topics/github-introduction'));
// const GithubRepositories = lazy(() => import('@/components/languages/git/topics/github-repositories'));
// const GithubProfile = lazy(() => import('@/components/languages/git/topics/github-profile'));
// const GithubCollaboration = lazy(() => import('@/components/languages/git/topics/github-collaboration'));
// const PullRequests = lazy(() => import('@/components/languages/git/topics/pull-requests'));
// const CodeReviews = lazy(() => import('@/components/languages/git/topics/code-reviews'));
// const GitUndoingChanges = lazy(() => import('@/components/languages/git/topics/git-undoing-changes'));
// const GitStashing = lazy(() => import('@/components/languages/git/topics/git-stashing'));
// const GitReflog = lazy(() => import('@/components/languages/git/topics/git-reflog'));
// const GitTagging = lazy(() => import('@/components/languages/git/topics/git-tagging'));
// const Releases = lazy(() => import('@/components/languages/git/topics/releases'));
// const GitCherryPick = lazy(() => import('@/components/languages/git/topics/git-cherry-pick'));
// const GitBisect = lazy(() => import('@/components/languages/git/topics/git-bisect'));
// const GitSubmodules = lazy(() => import('@/components/languages/git/topics/git-submodules'));
// const GitWorktree = lazy(() => import('@/components/languages/git/topics/git-worktree'));
// const GithubIssues = lazy(() => import('@/components/languages/git/topics/github-issues'));
// const GithubProjects = lazy(() => import('@/components/languages/git/topics/github-projects'));
// const GithubActions = lazy(() => import('@/components/languages/git/topics/github-actions'));
// const GithubPages = lazy(() => import('@/components/languages/git/topics/github-pages'));
// const GithubApi = lazy(() => import('@/components/languages/git/topics/github-api'));
// const GitWorkflows = lazy(() => import('@/components/languages/git/topics/git-workflows'));
// const TrunkBasedDevelopment = lazy(() => import('@/components/languages/git/topics/trunk-based-development'));
// const ReleaseManagement = lazy(() => import('@/components/languages/git/topics/release-management'));
// const GitBestPractices = lazy(() => import('@/components/languages/git/topics/git-best-practices'));
// const CommitMessages = lazy(() => import('@/components/languages/git/topics/commit-messages'));
// const RepositoryHygiene = lazy(() => import('@/components/languages/git/topics/repository-hygiene'));
// const GitSecurity = lazy(() => import('@/components/languages/git/topics/git-security'));
// const ScanningSecrets = lazy(() => import('@/components/languages/git/topics/scanning-secrets'));
// const GitPerformance = lazy(() => import('@/components/languages/git/topics/git-performance'));
// const GitLfs = lazy(() => import('@/components/languages/git/topics/git-lfs'));
// const GitGuiTools = lazy(() => import('@/components/languages/git/topics/git-gui-tools'));
// const GitAliases = lazy(() => import('@/components/languages/git/topics/git-aliases'));
// const GitTroubleshooting = lazy(() => import('@/components/languages/git/topics/git-troubleshooting'));
// const GitInternals = lazy(() => import('@/components/languages/git/topics/git-internals'));
// const GithubEnterprise = lazy(() => import('@/components/languages/git/topics/github-enterprise'));
// const GitlabBasics = lazy(() => import('@/components/languages/git/topics/gitlab-basics'));
// const BitbucketBasics = lazy(() => import('@/components/languages/git/topics/bitbucket-basics'));
// const OpenSourceContributions = lazy(() => import('@/components/languages/git/topics/open-source-contributions'));
// const Licensing = lazy(() => import('@/components/languages/git/topics/licensing'));

// Map topic slugs to components
const topicComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'git-introduction': GitIntroduction,
  'git-installation': GitInstallation,
  'git-basics-commands': GitBasicsCommands,
  'git-history': GitHistory,
  'git-branching': GitBranching,
  'git-branch-commands': GitBranchCommands,
  'git-branch-strategies': GitBranchStrategies,
  'git-merging': GitMerging,
  'merge-conflicts': MergeConflicts,
  'git-rebase': GitRebase,
  // 'git-remote-basics': GitRemoteBasics,
  // 'git-remote-workflows': GitRemoteWorkflows,
  // 'git-ssh-https': GitSshHttps,
  // 'github-introduction': GithubIntroduction,
  // 'github-repositories': GithubRepositories,
  // 'github-profile': GithubProfile,
  // 'github-collaboration': GithubCollaboration,
  // 'pull-requests': PullRequests,
  // 'code-reviews': CodeReviews,
  // 'git-undoing-changes': GitUndoingChanges,
  // 'git-stashing': GitStashing,
  // 'git-reflog': GitReflog,
  // 'git-tagging': GitTagging,
  // 'releases': Releases,
  // 'git-cherry-pick': GitCherryPick,
  // 'git-bisect': GitBisect,
  // 'git-submodules': GitSubmodules,
  // 'git-worktree': GitWorktree,
  // 'github-issues': GithubIssues,
  // 'github-projects': GithubProjects,
  // 'github-actions': GithubActions,
  // 'github-pages': GithubPages,
  // 'github-api': GithubApi,
  // 'git-workflows': GitWorkflows,
  // 'trunk-based-development': TrunkBasedDevelopment,
  // 'release-management': ReleaseManagement,
  // 'git-best-practices': GitBestPractices,
  // 'commit-messages': CommitMessages,
  // 'repository-hygiene': RepositoryHygiene,
  // 'git-security': GitSecurity,
  // 'scanning-secrets': ScanningSecrets,
  // 'git-performance': GitPerformance,
  // 'git-lfs': GitLfs,
  // 'git-gui-tools': GitGuiTools,
  // 'git-aliases': GitAliases,
  // 'git-troubleshooting': GitTroubleshooting,
  // 'git-internals': GitInternals,
  // 'github-enterprise': GithubEnterprise,
  // 'gitlab-basics': GitlabBasics,
  // 'bitbucket-basics': BitbucketBasics,
  // 'open-source-contributions': OpenSourceContributions,
  // 'licensing': Licensing,
};

interface GitContentDisplayProps {
  topic: Topic;
  language: Language;
}

export const GitContentDisplay: React.FC<GitContentDisplayProps> = ({ topic, language }) => {
  const TopicComponent = topicComponents[topic.slug];

  if (!TopicComponent) {
    return (
      <GenericContentDisplay
        topic={topic}
        language={language}
      >
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <TopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
};
