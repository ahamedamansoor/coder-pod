'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { GitBranch, Github, Code, Users, Shield, Zap, Database, Settings, BookOpen, GitPullRequest, GitMerge, GitCommit, GitFork, Lightbulb, CheckCircle2, AlertTriangle, ArrowRight, Clock, GitCompare, History, Terminal } from 'lucide-react';

interface GitTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function GitIntroduction({ onOpenWebPlayground }: GitTopicProps) {
  // Animated Git workflow example
  const gitWorkflowHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Git Workflow Animation</title>
  <style>
    body {
      margin: 0;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: system-ui, sans-serif;
      min-height: 100vh;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .workflow-container {
      width: 100%;
      max-width: 1200px;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .workflow {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }

    .area {
      flex: 1;
      min-width: 200px;
      height: 200px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }

    .area:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .working-directory {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    }

    .staging-area {
      background: linear-gradient(135deg, #f59e0b, #d97706);
    }

    .repository {
      background: linear-gradient(135deg, #10b981, #059669);
    }

    .area-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      animation: float 3s ease-in-out infinite;
    }

    .working-directory .area-icon {
      animation-delay: 0s;
    }

    .staging-area .area-icon {
      animation-delay: 0.5s;
    }

    .repository .area-icon {
      animation-delay: 1s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .area-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .area-desc {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .arrow {
      position: absolute;
      height: 4px;
      background: linear-gradient(90deg, transparent, #fff, transparent);
      animation: flow 2s linear infinite;
      z-index: 10;
    }

    .arrow-1 {
      width: 80px;
      top: 50%;
      left: calc(33.33% - 40px);
      transform: translateY(-50%);
    }

    .arrow-2 {
      width: 80px;
      top: 50%;
      right: calc(33.33% - 40px);
      transform: translateY(-50%);
    }

    @keyframes flow {
      0% { 
        background-position: -80px 0;
      }
      100% { 
        background-position: 80px 0;
      }
    }

    .commands {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
    }

    .command {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem 2rem;
      border-radius: 10px;
      font-family: monospace;
      font-size: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }

    .command.highlighted {
      background: rgba(251, 191, 36, 0.3);
      border-color: #fbbf24;
      box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
      transform: scale(1.1);
    }

    .file {
      position: absolute;
      background: rgba(255, 255, 255, 0.95);
      color: #333;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: bold;
      z-index: 20;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }

    .file:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }

    .file-app {
      top: 20px;
      right: 20px;
      left: auto;
    }

    .file-style {
      top: 60px;
      right: 20px;
      left: auto;
    }

    @keyframes slideToStaging {
      0% { 
        opacity: 1;
        transform: translateX(0);
      }
      100% { 
        opacity: 1;
        transform: translateX(400px);
      }
    }

    @keyframes slideToRepository {
      0% { 
        opacity: 1;
        transform: translateX(400px);
      }
      100% { 
        opacity: 1;
        transform: translateX(800px);
      }
    }

    .description {
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 15px;
      margin-top: 2rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .description h3 {
      margin-bottom: 1rem;
      color: #fbbf24;
    }

    .start-button {
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      color: #333;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 2rem;
      transition: all 0.3s ease;
    }

    .start-button:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(251, 191, 36, 0.3);
    }

    .start-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <div class="workflow-container">
    <h1>🔄 Git Workflow in Action</h1>
    
    <button class="start-button" onclick="startAnimation()">Start Animation</button>
    
    <div class="workflow">
      <div class="area working-directory">
        <div class="area-icon">📝</div>
        <div class="area-title">Working Directory</div>
        <div class="area-desc">Where you edit files</div>
        <div class="file file-app" id="file-app">app.js</div>
        <div class="file file-style" id="file-style">styles.css</div>
      </div>
      
      <div class="arrow arrow-1"></div>
      
      <div class="area staging-area">
        <div class="area-icon">📦</div>
        <div class="area-title">Staging Area</div>
        <div class="area-desc">Prepare changes</div>
      </div>
      
      <div class="arrow arrow-2"></div>
      
      <div class="area repository">
        <div class="area-icon">🏛️</div>
        <div class="area-title">Repository</div>
        <div class="area-desc">Permanent storage</div>
      </div>
    </div>

    <div class="commands">
      <div class="command" id="cmd-add">git add</div>
      <div class="command" id="cmd-commit">git commit</div>
      <div class="command" id="cmd-push">git push</div>
    </div>

    <div class="description">
      <h3>Watch the Git Workflow</h3>
      <p>Click "Start Animation" to see how files move through Git's three main areas. Each command highlights as the files progress through the workflow.</p>
    </div>
  </div>

  <script>
    function startAnimation() {
      const button = document.querySelector('.start-button');
      button.disabled = true;
      button.textContent = 'Animation Running...';
      
      // Reset any previous animations
      resetAnimation();
      
      // Phase 1: Files move to staging area, highlight git add
      setTimeout(() => {
        highlightCommand('cmd-add');
        moveFilesToStaging();
      }, 500);
      
      // Phase 2: Highlight git commit
      setTimeout(() => {
        highlightCommand('cmd-commit');
      }, 3500);
      
      // Phase 3: Files move to repository, highlight git push
      setTimeout(() => {
        highlightCommand('cmd-push');
        moveFilesToRepository();
      }, 5500);
      
      // Reset button after animation
      setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Start Animation';
        clearHighlights();
      }, 8500);
    }
    
    function highlightCommand(cmdId) {
      clearHighlights();
      document.getElementById(cmdId).classList.add('highlighted');
    }
    
    function clearHighlights() {
      document.querySelectorAll('.command').forEach(cmd => {
        cmd.classList.remove('highlighted');
      });
    }
    
    function moveFilesToStaging() {
      const fileApp = document.getElementById('file-app');
      const fileStyle = document.getElementById('file-style');
      
      fileApp.style.animation = 'slideToStaging 3s ease-in-out forwards';
      fileStyle.style.animation = 'slideToStaging 3s ease-in-out forwards 0.5s';
    }
    
    function moveFilesToRepository() {
      const fileApp = document.getElementById('file-app');
      const fileStyle = document.getElementById('file-style');
      
      // Start continuous slide from current position to repository
      fileApp.style.animation = 'slideToRepository 3s ease-in-out forwards';
      fileStyle.style.animation = 'slideToRepository 3s ease-in-out forwards 0.5s';
    }
    
    function resetAnimation() {
      const fileApp = document.getElementById('file-app');
      const fileStyle = document.getElementById('file-style');
      
      // Reset file positions to original working directory right corner
      fileApp.style.animation = 'none';
      fileStyle.style.animation = 'none';
      fileApp.style.left = 'auto';
      fileApp.style.right = '20px';
      fileStyle.style.left = 'auto';
      fileStyle.style.right = '20px';
      
      // Force reflow
      void fileApp.offsetWidth;
      void fileStyle.offsetWidth;
    }
  </script>
</body>
</html>`;

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitBranch}
        category="Git & GitHub · Git Fundamentals"
        title="Introduction to Git"
        description="Master version control - the essential skill every developer needs. Learn how Git tracks changes, enables collaboration, and saves your work from disasters!"
        colorTheme="blue"
      />

      {/* Section 1: What is Git? */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <GitBranch className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is Git?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                The magical time machine that transforms how developers create and collaborate
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              Imagine you're writing a story, but you're afraid of making mistakes. What if you want to explore different plot twists but ruin the entire narrative? 
              <strong> Git is your magical time machine for creative work!</strong>
            </p>
            <p className="mb-4">
              Git is a <strong className="text-blue-600 dark:text-blue-400">version control system</strong> that remembers every version of your work. 
              It's like having a super-powered "Save As" button that creates a timeline of your project, letting you travel back to any moment, explore parallel ideas, and collaborate with others without chaos.
            </p>
          </div>

          {/* Visual Metaphor */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-lg text-orange-900 dark:text-orange-100">Before Git 😱</h4>
              </div>
              <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                <li>• Lost work when computer crashes</li>
                <li>• Can't undo major mistakes</li>
                <li>• No way to track what changed</li>
                <li>• Collaboration creates file conflicts</li>
                <li>• Fear of experimenting with new ideas</li>
                <li>• Endless "final_v2_final_FINAL" files</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-bold text-lg text-emerald-900 dark:text-emerald-100">With Git 🎉</h4>
              </div>
              <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                <li>• Every change automatically saved</li>
                <li>• Time travel to any previous version</li>
                <li>• Complete history of your project</li>
                <li>• Seamless team collaboration</li>
                <li>• Freedom to experiment safely</li>
                <li>• Professional development workflow</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: The Magic Behind Git */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            The Magic Behind Git: How It Transforms Development
          </CardTitle>
          <CardDescription className="text-base">
            Understand the core concepts that make Git revolutionary for developers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Core Concepts Visualization */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
            <h4 className="text-lg font-semibold mb-4 text-center text-purple-900 dark:text-purple-100">🎭 Git's Superpowers</h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                <div className="text-3xl mb-2">⏰</div>
                <h5 className="font-bold text-purple-900 dark:text-purple-100">Time Travel</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">Jump to any moment in your project's history</p>
              </div>
              
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                <div className="text-3xl mb-2">🌳</div>
                <h5 className="font-bold text-purple-900 dark:text-purple-100">Parallel Worlds</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">Explore ideas in separate branches</p>
              </div>
              
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                <div className="text-3xl mb-2">🤝</div>
                <h5 className="font-bold text-purple-900 dark:text-purple-100">Team Harmony</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">Work together without conflicts</p>
              </div>
              
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                <div className="text-3xl mb-2">🛡️</div>
                <h5 className="font-bold text-purple-900 dark:text-purple-100">Safety Net</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">Never lose your work again</p>
              </div>
            </div>
          </div>

          {/* The Three Areas Concept */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🏛️ Git's Three Magical Areas</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <Terminal className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Working Directory</h5>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Your creative workspace where you edit files. This is where ideas come to life and changes happen naturally.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
                <Database className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-3" />
                <h5 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Staging Area</h5>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  The preparation room where you select which changes to save. Think of it as choosing the perfect ingredients for your recipe.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <GitCommit className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Repository</h5>
                <p className="text-sm text-emerald-800 dark:text-emerald-200">
                  The permanent library where all your saved versions live. Each save point is a chapter in your project's story.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Why Git Changed Everything */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Lightbulb className="w-7 h-7" />
            Why Git Revolutionized Software Development
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* For Individual Creators */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100">For Individual Developers</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-800 dark:text-blue-200">Creative Freedom:</strong>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Experiment boldly without fear of breaking your work</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-800 dark:text-blue-200">Perfect Memory:</strong>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Never lose track of why you made certain decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-800 dark:text-blue-200">Time Travel:</strong>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Return to any previous version instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-800 dark:text-blue-200">Peace of Mind:</strong>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Your work is automatically backed up and safe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Teams */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <GitPullRequest className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100">For Team Collaboration</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-purple-800 dark:text-purple-200">Harmonious Work:</strong>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Multiple people contribute without conflicts</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-purple-800 dark:text-purple-200">Quality Control:</strong>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Review and improve each other's work</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-purple-800 dark:text-purple-200">Clear History:</strong>
                    <p className="text-sm text-purple-700 dark:text-purple-300">See who contributed what and when</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-purple-800 dark:text-purple-200">Global Impact:</strong>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Join worldwide open-source collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Git Workflow Animation */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          srcDoc={gitWorkflowHtml}
          className="w-full h-[600px] border-0 rounded-xl"
          title="Git Workflow Animation"
          sandbox="allow-scripts allow-same-origin"
          scrolling="yes"
        />
      </div>

      {/* Section 5: Key Git Concepts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Lightbulb className="w-7 h-7" />
            Essential Git Concepts Every Developer Should Understand
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <GitCommit className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
              <h4 className="font-bold text-lg text-orange-900 dark:text-orange-100">Commit</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                A snapshot of your project at a specific moment. Like saving your game with a description of what you just accomplished!
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <GitBranch className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100">Branch</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                A parallel timeline for your project. Perfect for trying new ideas without affecting your main work.
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <GitMerge className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
              <h4 className="font-bold text-lg text-emerald-900 dark:text-emerald-100">Merge</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-200">
                Combining different timelines. Like bringing the best ideas from parallel universes back together!
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <Database className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100">Repository</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                The complete library of your project's history. Every commit, branch, and merge stored safely.
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <History className="w-6 h-6 text-amber-600 dark:text-amber-400 mb-3" />
              <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100">History</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                The complete timeline of your project's evolution. Never forget how you got to where you are.
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <Github className="w-6 h-6 text-rose-600 dark:text-rose-400 mb-3" />
              <h4 className="font-bold text-lg text-rose-900 dark:text-rose-100">Remote</h4>
              <p className="text-sm text-rose-800 dark:text-rose-200">
                Your project's home in the cloud. Enables collaboration with developers worldwide and keeps your work safe.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: The Git Philosophy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Shield className="w-7 h-7" />
            The Git Philosophy: Principles That Guide Modern Development
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/20 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="text-lg font-semibold mb-4 text-center">🎯 Core Principles</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">Everything is Trackable</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Every change, every decision, every contribution is recorded and can be reviewed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">Branch and Merge Freely</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Create branches for ideas, experiment safely, merge the best results.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">Distributed by Nature</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Everyone has the complete history, enabling offline work and resilience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">Collaborate Globally</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Work with anyone, anywhere, without stepping on each other's work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      </div>
  );
}
