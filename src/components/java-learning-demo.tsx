
'use client';
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, BookOpen, CheckCircle, Trophy, Sparkles, Code, ArrowRight, MousePointer2, Monitor, Zap, Target } from 'lucide-react';
import { Button } from './ui/button';

export const JavaLearningDemo = ({ autoPlay = false }: { autoPlay?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentStep, setCurrentStep] = useState(0);
  const [moduleExpanded, setModuleExpanded] = useState(false);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [progressPercent, setProgressPercent] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, show: false });
  const [clickEffect, setClickEffect] = useState({ show: false, x: 0, y: 0 });

  const steps = [
    { action: 'intro', duration: 2000 },
    { action: 'moveCursorToModule', duration: 1500 },
    { action: 'clickModule', duration: 500 },
    { action: 'expandModule', duration: 800 },
    { action: 'moveCursorToTopic1', duration: 1000 },
    { action: 'clickTopic1', duration: 500 },
    { action: 'completeTopic1', duration: 800 },
    { action: 'moveCursorToTopic2', duration: 1000 },
    { action: 'clickTopic2', duration: 500 },
    { action: 'completeTopic2', duration: 800 },
    { action: 'moveCursorToTopic3', duration: 1000 },
    { action: 'clickTopic3', duration: 500 },
    { action: 'completeTopic3', duration: 800 },
    { action: 'updateProgress', duration: 1500 },
    { action: 'celebration', duration: 2000 },
    { action: 'reset', duration: 2000 }
  ];

  useEffect(() => {
    if (autoPlay && !isPlaying) {
      handlePlayPause();
    }
  }, [autoPlay]);

  useEffect(() => {
    if (isPlaying && currentStep < steps.length) {
      const step = steps[currentStep];
      const timer = setTimeout(() => {
        executeStep(step.action);
        setCurrentStep(currentStep + 1);
      }, step.duration);

      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length && isPlaying) {
        setIsPlaying(false);
    }
  }, [isPlaying, currentStep]);

  const executeStep = (action: string) => {
    switch(action) {
      case 'intro':
        setCursorPos({ x: 50, y: 20, show: true });
        break;
      case 'moveCursorToModule':
        setCursorPos({ x: 50, y: 35, show: true });
        break;
      case 'clickModule':
        setClickEffect({ show: true, x: 50, y: 35 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'expandModule':
        setModuleExpanded(true);
        break;
      case 'moveCursorToTopic1':
        setCursorPos({ x: 50, y: 45, show: true });
        break;
      case 'clickTopic1':
        setClickEffect({ show: true, x: 50, y: 45 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'completeTopic1':
        setCompletedTopics(['topic1']);
        setProgressPercent(33);
        break;
      case 'moveCursorToTopic2':
        setCursorPos({ x: 50, y: 53, show: true });
        break;
      case 'clickTopic2':
        setClickEffect({ show: true, x: 50, y: 53 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'completeTopic2':
        setCompletedTopics(['topic1', 'topic2']);
        setProgressPercent(66);
        break;
      case 'moveCursorToTopic3':
        setCursorPos({ x: 50, y: 61, show: true });
        break;
      case 'clickTopic3':
        setClickEffect({ show: true, x: 50, y: 61 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'completeTopic3':
        setCompletedTopics(['topic1', 'topic2', 'topic3']);
        setProgressPercent(100);
        break;
      case 'updateProgress':
        setCursorPos({ x: 50, y: 25, show: true });
        break;
      case 'celebration':
        setCursorPos({ show: false, x: 0, y: 0 });
        break;
      case 'reset':
        resetDemo(true);
        break;
    }
  };

  const resetDemo = (keepPlaying = false) => {
    setIsPlaying(keepPlaying);
    setCurrentStep(0);
    setModuleExpanded(false);
    setCompletedTopics([]);
    setProgressPercent(0);
    setCursorPos({ x: 0, y: 0, show: false });
    setClickEffect({ show: false, x: 0, y: 0 });
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (currentStep >= steps.length -1) {
        resetDemo(true);
      } else {
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="w-full bg-card p-4 sm:p-8 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground">How It Works</h1>
          </div>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-8">Watch the Interactive Demo</p>
          
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePlayPause}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-3 hover:scale-110 transition-transform shadow-2xl"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-6 h-6" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" /> {currentStep > 0 && currentStep < steps.length -1 ? 'Resume' : 'Play'}
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="relative bg-background rounded-xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 overflow-hidden aspect-[16/9]">
          {cursorPos.show && (
            <div
              className="absolute pointer-events-none z-50 transition-all duration-1000 ease-in-out"
              style={{
                left: `${cursorPos.x}%`,
                top: `${cursorPos.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <MousePointer2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-bounce" />
            </div>
          )}

          {clickEffect.show && (
            <div
              className="absolute pointer-events-none z-50"
              style={{
                left: `${clickEffect.x}%`,
                top: `${clickEffect.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/50 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary/80 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          <div className="mb-4 sm:mb-8 bg-muted/50 rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-lg border">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <Target className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                <span className="text-base sm:text-xl font-bold text-foreground">Your Progress</span>
              </div>
              <span className="text-2xl sm:text-4xl font-bold text-primary">{progressPercent}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4 sm:h-6 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{ width: `${progressPercent}%` }}
              >
                {progressPercent > 0 && (
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground animate-spin" />
                )}
              </div>
            </div>
          </div>

          <div className="bg-card border-2 sm:border-4 border-primary/20 rounded-lg sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-500">
            <div className="bg-primary/10 text-foreground p-3 sm:p-6 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="text-3xl sm:text-5xl">🚀</div>
                  <div>
                    <h2 className="text-lg sm:text-3xl font-bold mb-1">Getting Started</h2>
                    <p className="text-muted-foreground text-xs sm:text-base">Week 1 • 3 topics</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-800 ease-in-out overflow-hidden ${
                moduleExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-3 sm:p-6 space-y-2 sm:space-y-4">
                <div
                  className={`bg-background border-2 sm:border-3 rounded-lg sm:rounded-xl p-2 sm:p-5 transition-all duration-500 ${
                    completedTopics.includes('topic1')
                      ? 'border-green-400 bg-green-500/5 shadow-lg scale-105'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    {completedTopics.includes('topic1') ? (
                      <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8 text-green-600 animate-bounce" />
                    ) : (
                      <div className="w-5 h-5 sm:w-8 sm:h-8 border-2 sm:border-4 border-muted rounded-full"></div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-xl font-bold text-foreground">What is Java?</h3>
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-background border-2 sm:border-3 rounded-lg sm:rounded-xl p-2 sm:p-5 transition-all duration-500 ${
                    completedTopics.includes('topic2')
                      ? 'border-green-400 bg-green-500/5 shadow-lg scale-105'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    {completedTopics.includes('topic2') ? (
                      <CheckCircle className="w-5 h-5 sm:w-8 sm-h-8 text-green-600 animate-bounce" />
                    ) : (
                      <div className="w-5 h-5 sm:w-8 sm:h-8 border-2 sm:border-4 border-muted rounded-full"></div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-xl font-bold text-foreground">Setting Up</h3>
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-background border-2 sm:border-3 rounded-lg sm:rounded-xl p-2 sm:p-5 transition-all duration-500 ${
                    completedTopics.includes('topic3')
                      ? 'border-green-400 bg-green-500/5 shadow-lg scale-105'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    {completedTopics.includes('topic3') ? (
                      <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8 text-green-600 animate-bounce" />
                    ) : (
                      <div className="w-5 h-5 sm:w-8 sm-h-8 border-2 sm:border-4 border-muted rounded-full"></div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-xl font-bold text-foreground">Hello World</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {progressPercent === 100 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 dark:bg-black/50 animate-pulse">
              <div className="bg-card rounded-xl sm:rounded-3xl p-6 sm:p-12 shadow-2xl transform scale-110 animate-bounce border">
                <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center">
                  Module Complete! 🎉
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
