import type { Language } from './types';

export const git: Language = {
  slug: 'git',
  name: 'Git & GitHub',
  description: 'Master version control with Git and collaboration with GitHub - essential skills for every developer',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap to master Git and GitHub from basics to advanced workflows.' },

    // 1. GIT FUNDAMENTALS
    { slug: 'git-introduction', title: 'Introduction to Git', explanation: 'What is Git? Version control concepts, why developers need Git, and Git vs other VCS.', category: '1. Git Fundamentals' },
    { slug: 'git-installation', title: 'Installing Git', explanation: 'Installing Git on Windows, Mac, and Linux. Initial configuration with git config.', category: '1. Git Fundamentals' },
    { slug: 'git-basics-commands', title: 'Git Basic Commands', explanation: 'git init, git clone, git status, git add, git commit, git log - essential commands for daily use.', category: '1. Git Fundamentals' },
    { slug: 'git-history', title: 'Viewing History', explanation: 'git log, git show, git diff, git blame - exploring and understanding commit history.', category: '1. Git Fundamentals' },

    // 2. BRANCHING
    { slug: 'git-branching', title: 'Understanding Branches', explanation: 'What are branches? Why use them? Creating and managing branches for parallel development.', category: '2. Branching' },
    { slug: 'git-branch-commands', title: 'Branch Commands', explanation: 'git branch, git checkout, git switch - complete guide to branch operations.', category: '2. Branching' },
    { slug: 'git-branch-strategies', title: 'Branch Strategies', explanation: 'Feature branches, release branches, hotfixes - when and how to use different branch types.', category: '2. Branching' },

    // 3. MERGING
    { slug: 'git-merging', title: 'Merging Branches', explanation: 'git merge, fast-forward merges, three-way merges - combining branches effectively.', category: '3. Merging' },
    { slug: 'merge-conflicts', title: 'Resolving Merge Conflicts', explanation: 'Understanding conflicts, conflict markers, and strategies for resolving conflicts peacefully.', category: '3. Merging' },
    { slug: 'git-rebase', title: 'Git Rebase', explanation: 'git rebase, interactive rebase, rebase vs merge, golden rules of rebasing.', category: '3. Merging' },

    // 4. REMOTE REPOSITORIES
    { slug: 'git-remote-basics', title: 'Remote Repositories', explanation: 'Understanding remotes: git remote, git push, git pull, git fetch.', category: '4. Remote Repositories' },
    { slug: 'git-remote-workflows', title: 'Remote Workflows', explanation: 'Working with remotes, tracking branches, pushing and pulling safely.', category: '4. Remote Repositories' },
    { slug: 'git-ssh-https', title: 'SSH vs HTTPS', explanation: 'Understanding authentication methods, setting up SSH keys, when to use each.', category: '4. Remote Repositories' },

    // 5. GITHUB BASICS
    { slug: 'github-introduction', title: 'Introduction to GitHub', explanation: 'What is GitHub? Creating account, understanding GitHub interface, and GitHub vs Git.', category: '5. GitHub Basics' },
    { slug: 'github-repositories', title: 'GitHub Repositories', explanation: 'Creating repositories, cloning, README files, and repository settings.', category: '5. GitHub Basics' },
    { slug: 'github-profile', title: 'Optimizing Your Profile', explanation: 'Creating an impressive GitHub profile, pinned repositories, and contribution graph.', category: '5. GitHub Basics' },

    // 6. COLLABORATION
    { slug: 'github-collaboration', title: 'Collaborating on GitHub', explanation: 'Forking repositories, pull requests, code reviews, and collaboration workflows.', category: '6. Collaboration' },
    { slug: 'pull-requests', title: 'Mastering Pull Requests', explanation: 'Creating effective PRs, writing good descriptions, requesting reviews, and addressing feedback.', category: '6. Collaboration' },
    { slug: 'code-reviews', title: 'Code Reviews', explanation: 'How to review code effectively, giving constructive feedback, and best practices.', category: '6. Collaboration' },

    // 7. UNDOING CHANGES
    { slug: 'git-undoing-changes', title: 'Undoing Changes', explanation: 'git reset, git revert, git checkout --, git clean - undoing mistakes safely.', category: '7. Undoing Changes' },
    { slug: 'git-stashing', title: 'Git Stash', explanation: 'git stash, git stash pop, git stash apply - temporarily saving changes.', category: '7. Undoing Changes' },
    { slug: 'git-reflog', title: 'Git Reflog', explanation: 'Using reflog to recover lost commits and undo almost anything in Git.', category: '7. Undoing Changes' },

    // 8. TAGGING
    { slug: 'git-tagging', title: 'Git Tagging', explanation: 'Creating and managing tags: git tag, annotated tags, lightweight tags, pushing tags.', category: '8. Tagging' },
    { slug: 'releases', title: 'GitHub Releases', explanation: 'Creating releases on GitHub, associating tags with releases, and release notes.', category: '8. Tagging' },

    // 9. ADVANCED GIT
    { slug: 'git-cherry-pick', title: 'Cherry-pick Commits', explanation: 'git cherry-pick for applying specific commits from one branch to another.', category: '9. Advanced Git' },
    { slug: 'git-bisect', title: 'Git Bisect', explanation: 'Using git bisect to find bugs through binary search in commit history.', category: '9. Advanced Git' },
    { slug: 'git-submodules', title: 'Git Submodules', explanation: 'Managing dependencies with submodules, updating, and best practices.', category: '9. Advanced Git' },
    { slug: 'git-worktree', title: 'Git Worktree', explanation: 'Working on multiple branches simultaneously with git worktree.', category: '9. Advanced Git' },

    // 10. GITHUB FEATURES
    { slug: 'github-issues', title: 'GitHub Issues', explanation: 'Creating issues, milestones, labels, templates, and issue management.', category: '10. GitHub Features' },
    { slug: 'github-projects', title: 'GitHub Projects', explanation: 'Project boards, automation, tracking work with project management tools.', category: '10. GitHub Features' },
    { slug: 'github-actions', title: 'GitHub Actions', explanation: 'Introduction to CI/CD with GitHub Actions, workflows, triggers, and automation.', category: '10. GitHub Features' },
    { slug: 'github-pages', title: 'GitHub Pages', explanation: 'Hosting static websites directly from GitHub repositories.', category: '10. GitHub Features' },
    { slug: 'github-api', title: 'GitHub API', explanation: 'Using GitHub REST API and GraphQL for automation and integrations.', category: '10. GitHub Features' },

    // 11. WORKFLOWS
    { slug: 'git-workflows', title: 'Git Workflows', explanation: 'Popular workflows: Git Flow, GitHub Flow, GitLab Flow - choosing the right workflow.', category: '11. Workflows' },
    { slug: 'trunk-based-development', title: 'Trunk-Based Development', explanation: 'Understanding and implementing trunk-based development for rapid delivery.', category: '11. Workflows' },
    { slug: 'release-management', title: 'Release Management', explanation: 'Semantic versioning, release branches, and managing releases effectively.', category: '11. Workflows' },

    // 12. BEST PRACTICES
    { slug: 'git-best-practices', title: 'Git Best Practices', explanation: 'Commit message conventions, branch naming, repository hygiene, and professional practices.', category: '12. Best Practices' },
    { slug: 'commit-messages', title: 'Writing Good Commit Messages', explanation: 'Conventional commits, subject lines, body formatting, and why it matters.', category: '12. Best Practices' },
    { slug: 'repository-hygiene', title: 'Repository Hygiene', explanation: 'Keeping repositories clean, .gitignore, sensitive data, and maintenance.', category: '12. Best Practices' },

    // 13. SECURITY
    { slug: 'git-security', title: 'Git Security', explanation: 'SSH keys, HTTPS vs SSH, GPG signing, personal access tokens, and secure practices.', category: '13. Security' },
    { slug: 'scanning-secrets', title: 'Secret Scanning', explanation: 'Preventing secrets in repositories, using tools like git-secrets and GitHub secret scanning.', category: '13. Security' },

    // 14. PERFORMANCE
    { slug: 'git-performance', title: 'Git Performance', explanation: 'Optimizing large repositories, shallow clones, git gc, and handling large files.', category: '14. Performance' },
    { slug: 'git-lfs', title: 'Git LFS', explanation: 'Large File Storage for managing binary assets in Git repositories.', category: '14. Performance' },

    // 15. GUI TOOLS
    { slug: 'git-gui-tools', title: 'Git GUI Tools', explanation: 'Overview of Git GUI tools: GitHub Desktop, SourceTree, VS Code Git integration.', category: '15. GUI Tools' },
    { slug: 'git-aliases', title: 'Git Aliases & Config', explanation: 'Customizing Git with aliases, global configuration, and productivity tips.', category: '15. GUI Tools' },

    // 16. TROUBLESHOOTING
    { slug: 'git-troubleshooting', title: 'Troubleshooting Git', explanation: 'Common Git problems and solutions, debugging techniques, and recovery strategies.', category: '16. Troubleshooting' },
    { slug: 'git-internals', title: 'Git Internals', explanation: 'Understanding how Git works internally: .git directory, objects, refs, and the DAG.', category: '16. Troubleshooting' },

    // 17. ENTERPRISE GIT
    { slug: 'github-enterprise', title: 'GitHub Enterprise', explanation: 'GitHub Enterprise Cloud, Server, and enterprise features.', category: '17. Enterprise Git' },
    { slug: 'gitlab-basics', title: 'GitLab Basics', explanation: 'Introduction to GitLab, CI/CD, and differences from GitHub.', category: '17. Enterprise Git' },
    { slug: 'bitbucket-basics', title: 'Bitbucket Basics', explanation: 'Understanding Atlassian Bitbucket and its integration with Jira.', category: '17. Enterprise Git' },

    // 18. OPEN SOURCE
    { slug: 'open-source-contributions', title: 'Contributing to Open Source', explanation: 'Finding projects, making first contributions, and becoming a maintainer.', category: '18. Open Source' },
    { slug: 'licensing', title: 'Licensing and Legal', explanation: 'Choosing licenses, CLAs, and legal considerations for open source.', category: '18. Open Source' },
  ]
};
