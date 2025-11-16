
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
        setCursorPos({ x: 50, y: 48, show: true });
        break;
      case 'clickTopic1':
        setClickEffect({ show: true, x: 50, y: 48 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'completeTopic1':
        setCompletedTopics(['topic1']);
        setProgressPercent(33);
        break;
      case 'moveCursorToTopic2':
        setCursorPos({ x: 50, y: 62, show: true });
        break;
      case 'clickTopic2':
        setClickEffect({ show: true, x: 50, y: 62 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'completeTopic2':
        setCompletedTopics(['topic1', 'topic2']);
        setProgressPercent(66);
        break;
      case 'moveCursorToTopic3':
        setCursorPos({ x: 50, y: 76, show: true });
        break;
      case 'clickTopic3':
        setClickEffect({ show: true, x: 50, y: 76 });
        setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 300);
        break;
      case 'completeTopic3':
        setCompletedTopics(['topic1', 'topic2', 'topic3']);
        setProgressPercent(100);
        break;
      case 'updateProgress':
        setCursorPos({ x: 50, y: 15, show: true });
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
    <div className="w-full bg-card p-4 sm:p-6 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-3">
            <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">Watch the Interactive Demo</p>
          
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePlayPause}
              className="px-6 py-3 rounded-full font-bold text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" /> {currentStep > 0 && currentStep < steps.length -1 ? 'Resume' : 'Play'}
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="relative bg-background rounded-xl shadow-2xl p-4 overflow-hidden aspect-[16/9]">
          {cursorPos.show && (
            <div
              className="absolute pointer-events-none z-50 transition-all duration-1000 ease-in-out"
              style={{
                left: `${cursorPos.x}%`,
                top: `${cursorPos.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <MousePointer2 className="w-6 h-6 text-primary animate-bounce" />
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
                <div className="w-8 h-8 bg-primary/50 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 w-8 h-8 bg-primary/80 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          <div className="mb-4 bg-muted/50 rounded-lg p-3 shadow-inner border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Your Progress</span>
              </div>
              <span className="text-xl font-bold text-primary">{progressPercent}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{ width: `${progressPercent}%` }}
              >
                {progressPercent > 0 && (
                  <Sparkles className="w-2 h-2 text-primary-foreground animate-spin" />
                )}
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-lg overflow-hidden shadow-md transition-all duration-500">
            <div className="bg-primary/10 text-foreground p-4 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h2 className="text-base font-bold">Getting Started</h2>
                    <p className="text-muted-foreground text-xs">Week 1 • 3 topics</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-800 ease-in-out overflow-hidden ${
                moduleExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-3 space-y-2">
                <div
                  className={`bg-background border-2 rounded-lg p-3 transition-all duration-500 ${
                    completedTopics.includes('topic1')
                      ? 'border-green-400 bg-green-500/5 shadow-md scale-105'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {completedTopics.includes('topic1') ? (
                      <CheckCircle className="w-5 h-5 text-green-600 animate-bounce" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted rounded-full"></div>
                    )}
                    <h3 className="text-sm font-bold text-foreground">What is Java?</h3>
                  </div>
                </div>
                <div
                  className={`bg-background border-2 rounded-lg p-3 transition-all duration-500 ${
                    completedTopics.includes('topic2')
                      ? 'border-green-400 bg-green-500/5 shadow-md scale-105'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {completedTopics.includes('topic2') ? (
                      <CheckCircle className="w-5 h-5 text-green-600 animate-bounce" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted rounded-full"></div>
                    )}
                    <h3 className="text-sm font-bold text-foreground">Setting Up</h3>
                  </div>
                </div>

                <div
                  className={`bg-background border-2 rounded-lg p-3 transition-all duration-500 ${
                    completedTopics.includes('topic3')
                      ? 'border-green-400 bg-green-500/5 shadow-md scale-105'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {completedTopics.includes('topic3') ? (
                      <CheckCircle className="w-5 h-5 text-green-600 animate-bounce" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted rounded-full"></div>
                    )}
                     <h3 className="text-sm font-bold text-foreground">Hello World</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {progressPercent === 100 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/30 backdrop-blur-sm animate-in fade-in-50">
              <div className="bg-card rounded-xl p-6 shadow-2xl transform scale-100 animate-bounce border">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
                <h2 className="text-2xl font-bold text-foreground text-center">
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
