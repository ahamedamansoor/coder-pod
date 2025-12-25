import { GitBranch } from 'lucide-react';

export const gitCheatsheet = {
  id: 'git',
  name: 'Git Commands',
  description: 'Master Git from your first commit to advanced version control workflows',
  icon: GitBranch,
  colorTheme: 'rose' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Git',
      commands: [
        {
          command: 'Installation and Setup',
          description: 'Install Git and configure basic settings',
          usage: 'git config commands',
          example: '# Install Git (Windows)\n# Download from git-scm.com\n\n# Install Git (macOS)\nbrew install git\n\n# Install Git (Ubuntu/Debian)\nsudo apt-get install git\n\n# Configure user name and email\ngit config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"',
        },
        {
          command: 'git init',
          description: 'Initialize a new Git repository',
          usage: 'git init [directory]',
          example: 'git init my-project\ngit init  # Initialize current directory\n# Creates .git directory with repository metadata',
        },
        {
          command: 'git clone',
          description: 'Clone an existing repository',
          usage: 'git clone <url> [directory]',
          example: 'git clone https://github.com/user/repo.git\ngit clone git@github.com:user/repo.git  # SSH\ngit clone https://github.com/user/repo.git my-folder  # Custom name',
        },
        {
          command: 'git help',
          description: 'Get help for Git commands',
          usage: 'git help <command>',
          example: 'git help commit\ngit help branch\ngit help --guide  # Show guides\ngit help --help  # Show help system',
        },
        {
          command: 'git version',
          description: 'Check Git version',
          usage: 'git version',
          example: 'git version\n# Shows: git version 2.39.0',
        },
      ],
    },
    {
      title: 'Basic Repository Workflow',
      commands: [
        {
          command: 'git status',
          description: 'Show the working tree status',
          usage: 'git status [options]',
          example: 'git status\ngit status -s  # Short format\ngit status --porcelain  # Script-friendly format',
        },
        {
          command: 'git add',
          description: 'Add files to the staging area',
          usage: 'git add <file>',
          example: 'git add file.txt\ngit add *.js  # All .js files\ngit add .  # Current directory\ngit add -A  # All changes including deletions',
        },
        {
          command: 'git commit',
          description: 'Record changes to the repository',
          usage: 'git commit -m "message"',
          example: 'git commit -m "Add login feature"\ngit commit -am "Quick fix"  # Add and commit\ngit commit  # Opens editor for message',
        },
        {
          command: 'git log',
          description: 'Show commit history',
          usage: 'git log [options]',
          example: 'git log\ngit log --oneline  # Compact format\ngit log -5  # Last 5 commits\ngit log --graph  # Show branch graph',
        },
        {
          command: 'git diff',
          description: 'Show changes between commits',
          usage: 'git diff [options]',
          example: 'git diff  # Unstaged changes\ngit diff --staged  # Staged changes\ngit diff HEAD  # All changes\ngit diff file.txt  # Specific file',
        },
      ],
    },
    {
      title: 'Basic File Operations',
      commands: [
        {
          command: 'git rm',
          description: 'Remove files from the working tree',
          usage: 'git rm <file>',
          example: 'git rm file.txt\ngit rm --cached file.txt  # Remove from index only\ngit rm -r folder/  # Remove directory',
        },
        {
          command: 'git mv',
          description: 'Move or rename files',
          usage: 'git mv <old> <new>',
          example: 'git mv oldname.js newname.js\ngit mv src/old.js lib/new.js',
        },
        {
          command: 'git restore',
          description: 'Restore working tree files',
          usage: 'git restore <file>',
          example: 'git restore file.txt  # Discard changes\ngit restore --staged file.txt  # Unstage\ngit restore --source=HEAD file.txt  # From HEAD',
        },
        {
          command: 'git clean',
          description: 'Remove untracked files',
          usage: 'git clean [options]',
          example: 'git clean -n  # Dry run\ngit clean -f  # Force remove\ngit clean -fd  # Remove files and directories',
        },
      ],
    },
    {
      title: 'Viewing History and Changes',
      commands: [
        {
          command: 'git show',
          description: 'Show commit details',
          usage: 'git show <commit>',
          example: 'git show HEAD  # Last commit\ngit show abc123  # Specific commit\ngit show HEAD~2  # Two commits back\ngit show HEAD:file.txt  # File at commit',
        },
        {
          command: 'git blame',
          description: 'Show who modified each line',
          usage: 'git blame <file>',
          example: 'git blame file.txt\ngit blame -L 10,20 file.txt  # Lines 10-20\ngit blame -c file.txt  # Compact format',
        },
        {
          command: 'git shortlog',
          description: 'Summarize git log output',
          usage: 'git shortlog [options]',
          example: 'git shortlog\ngit shortlog -sn  # Summary by author\ngit shortlog -n  # Sort by number of commits',
        },
        {
          command: 'git diff --stat',
          description: 'Show diff statistics',
          usage: 'git diff --stat',
          example: 'git diff --stat\ngit diff --stat main..feature  # Between branches',
        },
      ],
    },
    {
      title: 'Basic Configuration',
      commands: [
        {
          command: 'git config',
          description: 'Get and set configuration',
          usage: 'git config [options]',
          example: 'git config --list  # List all config\ngit config user.name  # Get specific value\ngit config --global user.name "John Doe"\ngit config --global core.editor "code --wait"',
        },
        {
          command: 'git config --global',
          description: 'Set global configuration',
          usage: 'git config --global <key> <value>',
          example: 'git config --global init.defaultBranch main\ngit config --global pull.rebase false\ngit config --global core.autocrlf input  # Linux/macOS\ngit config --global core.autocrlf true  # Windows',
        },
        {
          command: 'git config alias',
          description: 'Create command aliases',
          usage: 'git config --global alias.<name> <command>',
          example: 'git config --global alias.st status\ngit config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.cm "commit -m"',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Branching Fundamentals',
      commands: [
        {
          command: 'git branch',
          description: 'List, create, or delete branches',
          usage: 'git branch [branch-name]',
          example: 'git branch  # List local branches\ngit branch feature-x  # Create branch\ngit branch -a  # List all branches\ngit branch -v  # Show last commit',
        },
        {
          command: 'git checkout',
          description: 'Switch branches or restore files',
          usage: 'git checkout <branch>',
          example: 'git checkout main\ngit checkout -b feature-x  # Create and switch\ngit checkout -- file.txt  # Restore file\ngit checkout abc123  # Checkout commit',
        },
        {
          command: 'git switch',
          description: 'Switch branches (modern alternative)',
          usage: 'git switch <branch>',
          example: 'git switch main\ngit switch -c feature-x  # Create and switch\ngit switch -d feature-x  # Delete branch',
        },
        {
          command: 'git branch -d',
          description: 'Delete branches',
          usage: 'git branch -d <branch>',
          example: 'git branch -d feature-x  # Delete merged branch\ngit branch -D feature-x  # Force delete\ngit branch -r -d origin/feature-x  # Delete remote tracking',
        },
        {
          command: 'git branch -m',
          description: 'Rename branches',
          usage: 'git branch -m <old> <new>',
          example: 'git branch -m old-name new-name\ngit branch -m new-name  # Rename current branch',
        },
      ],
    },
    {
      title: 'Merging and Integration',
      commands: [
        {
          command: 'git merge',
          description: 'Merge branches together',
          usage: 'git merge <branch>',
          example: 'git merge feature-x\ngit merge --no-ff feature-x  # No fast-forward\ngit merge --no-commit feature-x  # Merge without commit',
        },
        {
          command: 'git merge --abort',
          description: 'Abort a conflicted merge',
          usage: 'git merge --abort',
          example: 'git merge --abort\n# Returns to pre-merge state',
        },
        {
          command: 'git mergetool',
          description: 'Launch merge tool',
          usage: 'git mergetool',
          example: 'git mergetool\n# Launches configured merge tool\n# Configure with: git config merge.tool vscode',
        },
        {
          command: 'Handling Merge Conflicts',
          description: 'Resolve merge conflicts manually',
          usage: 'Edit conflicted files',
          example: '# Edit files with conflict markers\n# <<<<<<< HEAD\n# Your changes\n# =======\n# Their changes\n# >>>>>>> feature-x\n\n# After editing:\ngit add conflicted-file.txt\ngit commit',
        },
      ],
    },
    {
      title: 'Remote Repository Management',
      commands: [
        {
          command: 'git remote',
          description: 'Manage remote repositories',
          usage: 'git remote [command]',
          example: 'git remote -v  # List remotes\ngit remote show origin  # Show remote details\ngit remote prune origin  # Remove stale branches',
        },
        {
          command: 'git remote add',
          description: 'Add a remote repository',
          usage: 'git remote add <name> <url>',
          example: 'git remote add origin https://github.com/user/repo.git\ngit remote add upstream https://github.com/original/repo.git',
        },
        {
          command: 'git remote remove',
          description: 'Remove a remote repository',
          usage: 'git remote remove <name>',
          example: 'git remote remove origin\ngit remote rm upstream  # Same as remove',
        },
        {
          command: 'git remote rename',
          description: 'Rename a remote repository',
          usage: 'git remote rename <old> <new>',
          example: 'git remote rename origin upstream\ngit remote rename fork origin',
        },
        {
          command: 'git remote set-url',
          description: 'Change remote URL',
          usage: 'git remote set-url <name> <url>',
          example: 'git remote set-url origin git@github.com:user/repo.git\ngit remote set-url --push origin https://github.com:user/repo.git',
        },
      ],
    },
    {
      title: 'Synchronization with Remotes',
      commands: [
        {
          command: 'git fetch',
          description: 'Download objects and refs from remote',
          usage: 'git fetch [remote]',
          example: 'git fetch origin\ngit fetch --all  # All remotes\ngit fetch --prune  # Remove stale refs',
        },
        {
          command: 'git pull',
          description: 'Fetch and integrate with remote',
          usage: 'git pull [remote] [branch]',
          example: 'git pull origin main\ngit pull --rebase origin main\ngit pull  # Pull from default remote',
        },
        {
          command: 'git push',
          description: 'Update remote refs along with associated objects',
          usage: 'git push [remote] [branch]',
          example: 'git push origin main\ngit push -u origin feature-x  # Set upstream\ngit push --all origin  # Push all branches',
        },
        {
          command: 'git push --force',
          description: 'Force push updates',
          usage: 'git push --force [remote] [branch]',
          example: 'git push --force origin main\ngit push --force-with-lease origin main  # Safer force push',
        },
        {
          command: 'git push --delete',
          description: 'Delete remote branch',
          usage: 'git push <remote> --delete <branch>',
          example: 'git push origin --delete feature-x\ngit push origin :feature-x  # Alternative syntax',
        },
      ],
    },
    {
      title: 'Tagging Releases',
      commands: [
        {
          command: 'git tag',
          description: 'Create, list, delete or verify tags',
          usage: 'git tag [options]',
          example: 'git tag  # List all tags\ngit tag -l "v1.*"  # List pattern\ngit tag -n  # Show annotations',
        },
        {
          command: 'git tag lightweight',
          description: 'Create lightweight tag',
          usage: 'git tag <name>',
          example: 'git tag v1.0.0\ngit tag v1.0.0 abc123  # Tag specific commit',
        },
        {
          command: 'git tag annotated',
          description: 'Create annotated tag',
          usage: 'git tag -a <tag> -m "message"',
          example: 'git tag -a v1.0.0 -m "Release version 1.0.0"\ngit tag -a v1.0.0 abc123 -m "Tag specific commit"',
        },
        {
          command: 'git tag -d',
          description: 'Delete tags',
          usage: 'git tag -d <tag>',
          example: 'git tag -d v1.0.0\ngit push origin --delete v1.0.0  # Delete remote tag',
        },
        {
          command: 'git push --tags',
          description: 'Push tags to remote',
          usage: 'git push --tags',
          example: 'git push --tags\ngit push origin v1.0.0  # Push specific tag',
        },
      ],
    },
    {
      title: 'Undoing Changes',
      commands: [
        {
          command: 'git reset',
          description: 'Reset current HEAD to specified state',
          usage: 'git reset [mode] <commit>',
          example: 'git reset HEAD~1  # Mixed reset (default)\ngit reset --soft HEAD~1  # Keep changes staged\ngit reset --hard HEAD~1  # Discard all changes',
        },
        {
          command: 'git reset <file>',
          description: 'Unstage files',
          usage: 'git reset <file>',
          example: 'git reset file.txt\ngit reset HEAD file.txt  # Unstage specific file',
        },
        {
          command: 'git revert',
          description: 'Revert existing commits',
          usage: 'git revert <commit>',
          example: 'git revert HEAD  # Revert last commit\ngit revert abc123  # Revert specific commit\ngit revert -n abc123  # Revert without committing',
        },
        {
          command: 'git commit --amend',
          description: 'Amend the most recent commit',
          usage: 'git commit --amend [options]',
          example: 'git commit --amend  # Edit message\ngit commit --amend -m "New message"\ngit commit --amend --no-edit  # Keep message',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Rebase Operations',
      commands: [
        {
          command: 'git rebase',
          description: 'Reapply commits on top of another base tip',
          usage: 'git rebase <upstream>',
          example: 'git rebase main\ngit rebase origin/main\ngit rebase --interactive HEAD~3  # Interactive rebase',
        },
        {
          command: 'git rebase -i',
          description: 'Interactive rebase for editing history',
          usage: 'git rebase -i <commit>',
          example: 'git rebase -i HEAD~3  # Last 3 commits\n# Commands: pick, reword, edit, squash, fixup, drop',
        },
        {
          command: 'git rebase --continue',
          description: 'Continue rebase after resolving conflicts',
          usage: 'git rebase --continue',
          example: '# After resolving conflicts:\ngit add conflicted-file.txt\ngit rebase --continue',
        },
        {
          command: 'git rebase --abort',
          description: 'Abort rebase and return to original state',
          usage: 'git rebase --abort',
          example: 'git rebase --abort\n# Cancels current rebase operation',
        },
        {
          command: 'git rebase --skip',
          description: 'Skip current patch and continue',
          usage: 'git rebase --skip',
          example: 'git rebase --skip\n# Skips current commit during rebase',
        },
      ],
    },
    {
      title: 'Cherry-Picking and Patching',
      commands: [
        {
          command: 'git cherry-pick',
          description: 'Apply changes from existing commits',
          usage: 'git cherry-pick <commit>',
          example: 'git cherry-pick abc123\ngit cherry-pick abc123 def456  # Multiple commits\ngit cherry-pick main..feature  # Range',
        },
        {
          command: 'git cherry-pick --continue',
          description: 'Continue cherry-pick after resolving conflicts',
          usage: 'git cherry-pick --continue',
          example: '# After resolving conflicts:\ngit add conflicted-file.txt\ngit cherry-pick --continue',
        },
        {
          command: 'git cherry-pick --abort',
          description: 'Abort cherry-pick operation',
          usage: 'git cherry-pick --abort',
          example: 'git cherry-pick --abort\n# Cancels current cherry-pick',
        },
        {
          command: 'git cherry-pick -n',
          description: 'Cherry-pick without committing',
          usage: 'git cherry-pick -n <commit>',
          example: 'git cherry-pick -n abc123\n# Applies changes without creating commit',
        },
        {
          command: 'git format-patch',
          description: 'Prepare patches for email submission',
          usage: 'git format-patch [options]',
          example: 'git format-patch HEAD~3  # Last 3 commits\ngit format-patch origin/main..HEAD  # Since divergence',
        },
      ],
    },
    {
      title: 'Stashing Changes',
      commands: [
        {
          command: 'git stash',
          description: 'Stash away changes in a dirty working directory',
          usage: 'git stash [options]',
          example: 'git stash\ngit stash save "Work in progress"\ngit stash -u  # Include untracked files\ngit stash -a  # Include ignored files',
        },
        {
          command: 'git stash list',
          description: 'List stashes',
          usage: 'git stash list',
          example: 'git stash list\n# Shows: stash@{0}, stash@{1}, etc.',
        },
        {
          command: 'git stash pop',
          description: 'Apply and remove a stash',
          usage: 'git stash pop [stash]',
          example: 'git stash pop\ngit stash pop stash@{2}\ngit stash pop --index  # Restore index',
        },
        {
          command: 'git stash apply',
          description: 'Apply a stash without removing it',
          usage: 'git stash apply [stash]',
          example: 'git stash apply\ngit stash apply stash@{1}\ngit stash apply --index',
        },
        {
          command: 'git stash drop',
          description: 'Remove a single stash',
          usage: 'git stash drop [stash]',
          example: 'git stash drop\ngit stash drop stash@{0}',
        },
        {
          command: 'git stash clear',
          description: 'Remove all stashes',
          usage: 'git stash clear',
          example: 'git stash clear\n# WARNING: Removes all stashed changes',
        },
        {
          command: 'git stash branch',
          description: 'Create and checkout a new branch from a stash',
          usage: 'git stash branch <branch> [stash]',
          example: 'git stash branch feature-x stash@{0}',
        },
      ],
    },
    {
      title: 'Interactive Staging',
      commands: [
        {
          command: 'git add -p',
          description: 'Add patches interactively',
          usage: 'git add -p [file]',
          example: 'git add -p\ngit add -p file.txt\n# Commands: y/n/q/a/d/s/e/?',
        },
        {
          command: 'git add -e',
          description: 'Edit current patch interactively',
          usage: 'git add -e [file]',
          example: 'git add -e\ngit add -e file.txt\n# Opens editor to edit patch',
        },
        {
          command: 'git add -i',
          description: 'Interactive staging interface',
          usage: 'git add -i',
          example: 'git add -i\n# Interactive menu: status, update, revert, add untracked, patch, diff, quit, help',
        },
        {
          command: 'git reset -p',
          description: 'Unstage patches interactively',
          usage: 'git reset -p [file]',
          example: 'git reset -p\ngit reset -p file.txt\n# Interactive un-staging',
        },
        {
          command: 'git checkout -p',
          description: 'Discard patches interactively',
          usage: 'git checkout -p [file]',
          example: 'git checkout -p\ngit checkout -p file.txt\n# Interactive discard changes',
        },
      ],
    },
    {
      title: 'Advanced History Inspection',
      commands: [
        {
          command: 'git log advanced',
          description: 'Advanced log options',
          usage: 'git log [options]',
          example: 'git log --oneline --graph --all\ngit log --author="John" --since="2 weeks ago"\ngit log --grep="fix" --no-merges\ngit log --stat --summary',
        },
        {
          command: 'git log --follow',
          description: 'Show file history including renames',
          usage: 'git log --follow <file>',
          example: 'git log --follow file.txt\ngit log --follow --stat file.txt',
        },
        {
          command: 'git log -S',
          description: 'Find commits that introduced or removed a string',
          usage: 'git log -S<string>',
          example: 'git log -S"functionName"\ngit log -S"TODO" --source --all',
        },
        {
          command: 'git log -L',
          description: 'Trace evolution of line range',
          usage: 'git log -L <range>:<file>',
          example: 'git log -L 10,20:file.txt\ngit log -L :main.c:main  # Trace function',
        },
        {
          command: 'git reflog',
          description: 'Show reference logs',
          usage: 'git reflog [options]',
          example: 'git reflog\ngit reflog show HEAD\ngit reflog --relative-date',
        },
      ],
    },
    {
      title: 'Advanced Diff Operations',
      commands: [
        {
          command: 'git diff advanced',
          description: 'Advanced diff options',
          usage: 'git diff [options]',
          example: 'git diff --word-diff\ngit diff --color-words\ngit diff --dirstat\ngit diff --compact-summary',
        },
        {
          command: 'git diff branch...branch',
          description: 'Show changes on unique commits',
          usage: 'git diff branch1...branch2',
          example: 'git diff main...feature\ngit diff origin/main...HEAD',
        },
        {
          command: 'git diff --cached',
          description: 'Show staged changes',
          usage: 'git diff --cached [file]',
          example: 'git diff --cached\ngit diff --cached file.txt\ngit diff --staged  # Same as --cached',
        },
        {
          command: 'git diff --check',
          description: 'Check for whitespace errors',
          usage: 'git diff --check',
          example: 'git diff --check\ngit diff --cached --check',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Git Hooks and Automation',
      commands: [
        {
          command: 'git hooks',
          description: 'Manage Git hooks for automation',
          usage: 'Hooks in .git/hooks/',
          example: '# Pre-commit hook example\ncat > .git/hooks/pre-commit << EOF\n#!/bin/sh\nnpm test\nEOF\nchmod +x .git/hooks/pre-commit',
        },
        {
          command: 'pre-commit hook',
          description: 'Run before each commit',
          usage: '.git/hooks/pre-commit',
          example: '#!/bin/sh\n# Run linting\nnpm run lint\nif [ $? -ne 0 ]; then\n    echo "Linting failed"\n    exit 1\nfi',
        },
        {
          command: 'pre-push hook',
          description: 'Run before each push',
          usage: '.git/hooks/pre-push',
          example: '#!/bin/sh\n# Run tests\nnpm test\nif [ $? -ne 0 ]; then\n    echo "Tests failed"\n    exit 1\nfi',
        },
        {
          command: 'post-checkout hook',
          description: 'Run after checkout',
          usage: '.git/hooks/post-checkout',
          example: '#!/bin/sh\n# Install dependencies if package.json changed\nif [ "$3" = "1" ]; then\n    if [ -f "package.json" ]; then\n        npm install\n    fi\nfi',
        },
        {
          command: 'husky setup',
          description: 'Modern Git hooks with Husky',
          usage: 'npm install husky --save-dev',
          example: 'npm install husky --save-dev\nnpx husky install\nnpx husky add .husky/pre-commit "npm test"\ngit add .husky/pre-commit',
        },
      ],
    },
    {
      title: 'Submodules Management',
      commands: [
        {
          command: 'git submodule add',
          description: 'Add a new submodule',
          usage: 'git submodule add <url> [path]',
          example: 'git submodule add https://github.com/user/lib.git lib\ngit submodule add https://github.com/user/theme.git themes/default',
        },
        {
          command: 'git submodule init',
          description: 'Initialize submodules',
          usage: 'git submodule init',
          example: 'git submodule init\n# Sets up configuration for submodules',
        },
        {
          command: 'git submodule update',
          description: 'Update submodules',
          usage: 'git submodule update [options]',
          example: 'git submodule update\ngit submodule update --init --recursive\ngit submodule update --remote',
        },
        {
          command: 'git clone --recurse-submodules',
          description: 'Clone with submodules',
          usage: 'git clone --recurse-submodules <url>',
          example: 'git clone --recurse-submodules https://github.com/user/repo.git\ngit clone --recursive https://github.com/user/repo.git',
        },
        {
          command: 'git submodule foreach',
          description: 'Execute command in each submodule',
          usage: 'git submodule foreach <command>',
          example: 'git submodule foreach git pull origin main\ngit submodule foreach "git status"',
        },
        {
          command: 'git submodule sync',
          description: 'Synchronize submodule URLs',
          usage: 'git submodule sync',
          example: 'git submodule sync\ngit submodule update --init',
        },
      ],
    },
    {
      title: 'Worktrees and Parallel Development',
      commands: [
        {
          command: 'git worktree add',
          description: 'Create a new working tree',
          usage: 'git worktree add <path> [branch]',
          example: 'git worktree add ../feature-x feature-x\ngit worktree add ../hotfix hotfix\ngit worktree add ../experiment -b experiment',
        },
        {
          command: 'git worktree list',
          description: 'List all working trees',
          usage: 'git worktree list',
          example: 'git worktree list\n# Shows all working trees and their branches',
        },
        {
          command: 'git worktree prune',
          description: 'Prune working tree information',
          usage: 'git worktree prune',
          example: 'git worktree prune\n# Remove working tree info for deleted directories',
        },
        {
          command: 'git worktree remove',
          description: 'Remove a working tree',
          usage: 'git worktree remove <path>',
          example: 'git worktree remove ../feature-x\ngit worktree remove --force ../experiment',
        },
        {
          command: 'git worktree move',
          description: 'Move a working tree',
          usage: 'git worktree move <old-path> <new-path>',
          example: 'git worktree move ../feature-x ../features/feature-x',
        },
      ],
    },
    {
      title: 'Advanced Repository Operations',
      commands: [
        {
          command: 'git bisect',
          description: 'Binary search for bugs',
          usage: 'git bisect <command>',
          example: 'git bisect start\ngit bisect bad  # Current commit is bad\ngit bisect good abc123  # Known good commit\ngit bisect run npm test  # Automated testing\ngit bisect reset  # End bisect',
        },
        {
          command: 'git fsck',
          description: 'Verify database connectivity and integrity',
          usage: 'git fsck [options]',
          example: 'git fsck\ngit fsck --full\ngit fsck --unreachable\ngit fsck --lost-found',
        },
        {
          command: 'git gc',
          description: 'Cleanup unnecessary files and optimize repository',
          usage: 'git gc [options]',
          example: 'git gc\ngit gc --aggressive\ngit gc --prune=now',
        },
        {
          command: 'git prune',
          description: 'Prune all unreachable objects',
          usage: 'git prune [options]',
          example: 'git prune\ngit prune --verbose\ngit prune --expire=now',
        },
        {
          command: 'git repack',
          description: 'Pack unpacked objects',
          usage: 'git repack [options]',
          example: 'git repack\ngit repack -a -d  # Pack all objects\ngit repack -a -d --depth=250 --window=250',
        },
      ],
    },
    {
      title: 'Advanced Filtering and Rewriting',
      commands: [
        {
          command: 'git filter-branch',
          description: 'Rewrite branches',
          usage: 'git filter-branch [options]',
          example: 'git filter-branch --tree-filter "rm -f password.txt" HEAD\ngit filter-branch --env-filter "export GIT_AUTHOR_NAME=\'New Name\'" HEAD',
        },
        {
          command: 'git filter-repo',
          description: 'Modern alternative to filter-branch',
          usage: 'git filter-repo [options]',
          example: 'pip3 install git-filter-repo\ngit filter-repo --invert-paths --path file.txt\ngit filter-repo --replace-text <(echo "old==>new")',
        },
        {
          command: 'git replace',
          description: 'Create, list, delete refs to replace objects',
          usage: 'git replace <command>',
          example: 'git replace abc123 def456\ngit replace --list\ngit replace --delete abc123',
        },
        {
          command: 'git notes',
          description: 'Add or inspect object notes',
          usage: 'git notes [command]',
          example: 'git notes add -m "Note for commit" HEAD\ngit notes show HEAD\ngit notes remove HEAD',
        },
      ],
    },
    {
      title: 'Performance and Optimization',
      commands: [
        {
          command: 'git maintenance',
          description: 'Repository maintenance operations',
          usage: 'git maintenance <command>',
          example: 'git maintenance start\ngit maintenance run\ngit maintenance stop\ngit maintenance register',
        },
        {
          command: 'git commit-graph',
          description: 'Write and verify commit-graph files',
          usage: 'git commit-graph <command>',
          example: 'git commit-graph write\ngit commit-graph verify\ngit commit-graph write --reachable',
        },
        {
          command: 'git multi-pack-index',
          description: 'Write and verify multi-pack-index',
          usage: 'git multi-pack-index <command>',
          example: 'git multi-pack-index write\ngit multi-pack-index verify\ngit multi-pack-index expire',
        },
        {
          command: 'git sparse-checkout',
          description: 'Initialize and modify sparse-checkout',
          usage: 'git sparse-checkout <command>',
          example: 'git sparse-checkout init\ngit sparse-checkout set src/\ngit sparse-checkout disable',
        },
        {
          command: 'git partial-clone',
          description: 'Clone with partial history',
          usage: 'git clone --filter=<filter>',
          example: 'git clone --filter=blob:none https://github.com/user/repo.git\ngit clone --filter=tree:0 https://github.com/user/repo.git',
        },
      ],
    },
    {
      title: 'Advanced Configuration and Aliases',
      commands: [
        {
          command: 'git config advanced',
          description: 'Advanced configuration options',
          usage: 'git config [options]',
          example: 'git config --global core.pager "less -FRX"\ngit config --global merge.conflictstyle diff3\ngit config --global pull.ff only\ngit config --global push.autoSetupRemote true',
        },
        {
          command: 'git attributes',
          description: 'Define attributes per path',
          usage: '.gitattributes file',
          example: '# .gitattributes\n*.text text\n*.binary binary\n*.md text eol=lf\n*.js text eol=lf\n*.ps1 text eol=crlf\n*.png binary\n*.jpg binary',
        },
        {
          command: 'git ignore advanced',
          description: 'Advanced ignore patterns',
          usage: '.gitignore patterns',
          example: '# .gitignore\n*.log\nnode_modules/\n.env\n.env.*\n!.env.example\nbuild/\ndist/\n# Negate pattern\n!important.log\n# Directory specific\ntmp/\n# Global ignore\ngit config --global core.excludesfile ~/.gitignore',
        },
        {
          command: 'git advanced aliases',
          description: 'Complex command aliases',
          usage: 'git config --global alias.<name>',
          example: 'git config --global alias.lg "log --graph --pretty=format:\'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset\' --abbrev-commit --date=relative"\ngit config --global alias.unstage "reset HEAD --"\ngit config --global alias.last "log -1 HEAD"\ngit config --global alias.visual "!gitk"',
        },
      ],
    },
    {
      title: 'Platform Integration and Tools',
      commands: [
        {
          command: 'GitHub CLI (gh)',
          description: 'GitHub command line interface',
          usage: 'gh <command>',
          example: 'gh auth login\ngh repo create my-repo\ngh pr create --title "New feature"\ngh issue list\ngh release create v1.0.0',
        },
        {
          command: 'GitLab CLI (glab)',
          description: 'GitLab command line interface',
          usage: 'glab <command>',
          example: 'glab auth login\nglab mr create --title "Merge request"\nglab issue list\nglab ci view',
        },
        {
          command: 'Git LFS',
          description: 'Git Large File Storage',
          usage: 'git lfs <command>',
          example: 'git lfs install\ngit lfs track "*.psd"\ngit lfs track "*.zip"\ngit add .gitattributes\ngit add largefile.psd\ngit commit -m "Add large file"',
        },
        {
          command: 'Git Credential Manager',
          description: 'Secure credential storage',
          usage: 'git config credential.helper',
          example: 'git config --global credential.helper manager\n# Windows: Git Credential Manager\n# macOS: osxkeychain\n# Linux: libsecret',
        },
        {
          command: 'Git GUI Tools',
          description: 'Graphical interface tools',
          usage: 'Various GUI applications',
          example: 'gitk  # Repository viewer\ngit gui  # Commit interface\n# Third-party:\n# SourceTree, GitKraken, GitHub Desktop, VS Code Git integration',
        },
      ],
    },
    {
      title: 'Advanced Workflows and Strategies',
      commands: [
        {
          command: 'Git Flow',
          description: 'Branching model for releases',
          usage: 'git flow <command>',
          example: '# Install git flow\n# macOS: brew install git-flow\n# Ubuntu: sudo apt-get install git-flow\n\ngit flow init\ngit flow feature start feature-x\ngit flow feature finish feature-x\ngit flow release start v1.0.0\ngit flow release finish v1.0.0',
        },
        {
          command: 'GitHub Flow',
          description: 'Simple workflow for continuous deployment',
          usage: 'Standard Git commands',
          example: 'git checkout -b feature-x\n# Make changes\ngit add .\ngit commit -m "Add feature X"\ngit push origin feature-x\n# Create pull request\n# Merge after review\ngit checkout main\ngit pull origin main\ngit branch -d feature-x',
        },
        {
          command: 'GitLab Flow',
          description: 'Environment-based workflow',
          usage: 'Environment branches',
          example: 'git checkout -b feature-x\n# Work on feature\ngit checkout production\ngit merge feature-x\ngit checkout staging\ngit merge production\ngit checkout production\ngit merge staging',
        },
        {
          command: 'Trunk Based Development',
          description: 'Short-lived branches on trunk',
          usage: 'Feature branches',
          example: 'git checkout -b feature-x\n# Small changes\ngit commit -m "Add feature X"\ngit push origin feature-x\n# Immediately merge to main\ngit checkout main\ngit pull origin main\ngit branch -d feature-x',
        },
        {
          command: 'Release Management',
          description: 'Semantic versioning and releases',
          usage: 'Tags and release branches',
          example: '# Create release branch\ngit checkout -b release/v1.2.0\n# Bump version\n# Fix bugs\n# Merge to main\ngit checkout main\ngit merge release/v1.2.0\ngit tag -a v1.2.0 -m "Release version 1.2.0"\ngit push origin v1.2.0',
        },
      ],
    },
  ],
};
