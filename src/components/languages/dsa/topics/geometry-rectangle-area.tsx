'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Square,
  Maximize2, Move, ArrowRight, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

const styleTag = (
  <style jsx>{`
    @keyframes sweepLine {
      0% { 
        transform: translateX(-100%);
        opacity: 0.3;
      }
      50% { 
        opacity: 1;
      }
      100% { 
        transform: translateX(100%);
        opacity: 0.3;
      }
    }
    
    @keyframes rectangleGrow {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes highlightPulse {
      0%, 100% { 
        background-color: rgb(34 197 94);
        transform: scale(1);
      }
      50% { 
        background-color: rgb(74 222 128);
        transform: scale(1.1);
      }
    }
    
    .sweep-line {
      animation: sweepLine 3s linear infinite;
    }
    
    .rectangle-active {
      animation: rectangleGrow 0.8s ease-in-out;
    }
    
    .highlight-pulse {
      animation: highlightPulse 1s ease-in-out;
    }
  `}</style>
);

export default function RectangleArea() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data - rectangles with coordinates
  const rectangles = [
    { id: 1, x1: 1, y1: 1, x2: 4, y2: 3, color: 'bg-blue-500' },
    { id: 2, x1: 2, y1: 2, x2: 5, y2: 5, color: 'bg-green-500' },
    { id: 3, x1: 3, y1: 1, x2: 6, y2: 4, color: 'bg-purple-500' },
    { id: 4, x1: 5, y1: 3, x2: 8, y2: 6, color: 'bg-orange-500' }
  ];

  // Algorithm state
  const [currentRect, setCurrentRect] = useState(-1);
  const [sweepX, setSweepX] = useState(0);
  const [activeIntervals, setActiveIntervals] = useState<number[][]>([]);
  const [totalArea, setTotalArea] = useState(0);
  const [currentArea, setCurrentArea] = useState(0);
  const [prevX, setPrevX] = useState(0);

  // Comprehensive steps following the DSA template (35-50 steps for O(n log n) algorithm)
  const steps = [
    // INITIALIZATION (5 steps)
    {
      step: 1,
      currentLine: 1,
      description: '📋 Initialize: Create rectangles array with coordinates',
      action: 'init',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 2,
      currentLine: 2,
      description: '📋 Initialize: Set totalArea = 0',
      action: 'init',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 3,
      currentLine: 3,
      description: '📋 Initialize: Set prevX = 0 (previous sweep position)',
      action: 'init',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 4,
      currentLine: 4,
      description: '📋 Initialize: Create empty activeIntervals array',
      action: 'init',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 5,
      currentLine: 5,
      description: '📋 Initialize: Set sweepX = 0 (current sweep position)',
      action: 'init',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },

    // CREATE EVENTS (8 steps)
    {
      step: 6,
      currentLine: 8,
      description: '🔄 Create Events: Start processing rectangles',
      action: 'loop-start',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 7,
      currentLine: 9,
      description: '📍 Rectangle 1: Create start event at x=1, y=[1,3]',
      action: 'create-event',
      currentRect: 0,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [0]
    },
    {
      step: 8,
      currentLine: 10,
      description: '📍 Rectangle 1: Create end event at x=4, y=[1,3]',
      action: 'create-event',
      currentRect: 0,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [0]
    },
    {
      step: 9,
      currentLine: 11,
      description: '📍 Rectangle 2: Create start event at x=2, y=[2,5]',
      action: 'create-event',
      currentRect: 1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [1]
    },
    {
      step: 10,
      currentLine: 12,
      description: '📍 Rectangle 2: Create end event at x=5, y=[2,5]',
      action: 'create-event',
      currentRect: 1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [1]
    },
    {
      step: 11,
      currentLine: 13,
      description: '📍 Rectangle 3: Create start event at x=3, y=[1,4]',
      action: 'create-event',
      currentRect: 2,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [2]
    },
    {
      step: 12,
      currentLine: 14,
      description: '📍 Rectangle 3: Create end event at x=6, y=[1,4]',
      action: 'create-event',
      currentRect: 2,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [2]
    },
    {
      step: 13,
      currentLine: 15,
      description: '📍 Rectangle 4: Create start event at x=5, y=[3,6]',
      action: 'create-event',
      currentRect: 3,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [3]
    },

    // SORT EVENTS (3 steps)
    {
      step: 14,
      currentLine: 17,
      description: '📊 Sort Events: Sort all events by x-coordinate',
      action: 'sort',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 15,
      currentLine: 18,
      description: '✅ Sorted Order: x=1,2,3,4,5,5,6,8 (8 events total)',
      action: 'sort',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },
    {
      step: 16,
      currentLine: 19,
      description: '🔄 Process Events: Start sweep line algorithm',
      action: 'loop-start',
      currentRect: -1,
      sweepX: 0,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: []
    },

    // EVENT 1: x=1 (Rectangle 1 starts) - 6 steps
    {
      step: 17,
      currentLine: 21,
      description: '🔄 Event 1: Process event at x=1 (Rectangle 1 starts)',
      action: 'loop-start',
      currentRect: 0,
      sweepX: 1,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [0]
    },
    {
      step: 18,
      currentLine: 22,
      description: '📊 Calculate Area: width = 1-0 = 1, height = 0, area = 0',
      action: 'calculate',
      currentRect: 0,
      sweepX: 1,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [0]
    },
    {
      step: 19,
      currentLine: 23,
      description: '✅ Update: totalArea = 0 + 0 = 0',
      action: 'update',
      currentRect: 0,
      sweepX: 1,
      activeIntervals: [],
      totalArea: 0,
      currentArea: 0,
      prevX: 0,
      highlighted: [0]
    },
    {
      step: 20,
      currentLine: 24,
      description: '👉 Add Interval: Add [1,3] to activeIntervals',
      action: 'update',
      currentRect: 0,
      sweepX: 1,
      activeIntervals: [[1, 3]],
      totalArea: 0,
      currentArea: 0,
      prevX: 1,
      highlighted: [0]
    },
    {
      step: 21,
      currentLine: 25,
      description: '✅ Update: prevX = 1 (move sweep position)',
      action: 'update',
      currentRect: 0,
      sweepX: 1,
      activeIntervals: [[1, 3]],
      totalArea: 0,
      currentArea: 0,
      prevX: 1,
      highlighted: [0]
    },
    {
      step: 22,
      currentLine: 26,
      description: '➡️ Next Event: Move to x=2',
      action: 'move',
      currentRect: 0,
      sweepX: 2,
      activeIntervals: [[1, 3]],
      totalArea: 0,
      currentArea: 0,
      prevX: 1,
      highlighted: [0]
    },

    // EVENT 2: x=2 (Rectangle 2 starts) - 6 steps
    {
      step: 23,
      currentLine: 21,
      description: '🔄 Event 2: Process event at x=2 (Rectangle 2 starts)',
      action: 'loop-start',
      currentRect: 1,
      sweepX: 2,
      activeIntervals: [[1, 3]],
      totalArea: 0,
      currentArea: 0,
      prevX: 1,
      highlighted: [0, 1]
    },
    {
      step: 24,
      currentLine: 22,
      description: '📊 Calculate Area: width = 2-1 = 1, height = 2, area = 2',
      action: 'calculate',
      currentRect: 1,
      sweepX: 2,
      activeIntervals: [[1, 3]],
      totalArea: 0,
      currentArea: 2,
      prevX: 1,
      highlighted: [0, 1]
    },
    {
      step: 25,
      currentLine: 23,
      description: '✅ Update: totalArea = 0 + 2 = 2',
      action: 'update',
      currentRect: 1,
      sweepX: 2,
      activeIntervals: [[1, 3]],
      totalArea: 2,
      currentArea: 2,
      prevX: 1,
      highlighted: [0, 1]
    },
    {
      step: 26,
      currentLine: 24,
      description: '👉 Add Interval: Add [2,5] to activeIntervals',
      action: 'update',
      currentRect: 1,
      sweepX: 2,
      activeIntervals: [[1, 3], [2, 5]],
      totalArea: 2,
      currentArea: 2,
      prevX: 1,
      highlighted: [0, 1]
    },
    {
      step: 27,
      currentLine: 25,
      description: '✅ Update: prevX = 2 (move sweep position)',
      action: 'update',
      currentRect: 1,
      sweepX: 2,
      activeIntervals: [[1, 3], [2, 5]],
      totalArea: 2,
      currentArea: 2,
      prevX: 2,
      highlighted: [0, 1]
    },
    {
      step: 28,
      currentLine: 26,
      description: '➡️ Next Event: Move to x=3',
      action: 'move',
      currentRect: 1,
      sweepX: 3,
      activeIntervals: [[1, 3], [2, 5]],
      totalArea: 2,
      currentArea: 2,
      prevX: 2,
      highlighted: [0, 1]
    },

    // EVENT 3: x=3 (Rectangle 3 starts) - 6 steps
    {
      step: 29,
      currentLine: 21,
      description: '🔄 Event 3: Process event at x=3 (Rectangle 3 starts)',
      action: 'loop-start',
      currentRect: 2,
      sweepX: 3,
      activeIntervals: [[1, 3], [2, 5]],
      totalArea: 2,
      currentArea: 2,
      prevX: 2,
      highlighted: [0, 1, 2]
    },
    {
      step: 30,
      currentLine: 22,
      description: '📊 Calculate Area: width = 3-2 = 1, height = 3, area = 3',
      action: 'calculate',
      currentRect: 2,
      sweepX: 3,
      activeIntervals: [[1, 3], [2, 5]],
      totalArea: 2,
      currentArea: 3,
      prevX: 2,
      highlighted: [0, 1, 2]
    },
    {
      step: 31,
      currentLine: 23,
      description: '✅ Update: totalArea = 2 + 3 = 5',
      action: 'update',
      currentRect: 2,
      sweepX: 3,
      activeIntervals: [[1, 3], [2, 5]],
      totalArea: 5,
      currentArea: 3,
      prevX: 2,
      highlighted: [0, 1, 2]
    },
    {
      step: 32,
      currentLine: 24,
      description: '👉 Add Interval: Add [1,4] to activeIntervals',
      action: 'update',
      currentRect: 2,
      sweepX: 3,
      activeIntervals: [[1, 3], [2, 5], [1, 4]],
      totalArea: 5,
      currentArea: 3,
      prevX: 2,
      highlighted: [0, 1, 2]
    },
    {
      step: 33,
      currentLine: 25,
      description: '✅ Update: prevX = 3 (move sweep position)',
      action: 'update',
      currentRect: 2,
      sweepX: 3,
      activeIntervals: [[1, 3], [2, 5], [1, 4]],
      totalArea: 5,
      currentArea: 3,
      prevX: 3,
      highlighted: [0, 1, 2]
    },
    {
      step: 34,
      currentLine: 26,
      description: '➡️ Next Event: Move to x=4',
      action: 'move',
      currentRect: 2,
      sweepX: 4,
      activeIntervals: [[1, 3], [2, 5], [1, 4]],
      totalArea: 5,
      currentArea: 3,
      prevX: 3,
      highlighted: [0, 1, 2]
    },

    // EVENT 4: x=4 (Rectangle 1 ends) - 6 steps
    {
      step: 35,
      currentLine: 21,
      description: '🔄 Event 4: Process event at x=4 (Rectangle 1 ends)',
      action: 'loop-start',
      currentRect: 0,
      sweepX: 4,
      activeIntervals: [[1, 3], [2, 5], [1, 4]],
      totalArea: 5,
      currentArea: 3,
      prevX: 3,
      highlighted: [1, 2]
    },
    {
      step: 36,
      currentLine: 22,
      description: '📊 Calculate Area: width = 4-3 = 1, height = 3, area = 3',
      action: 'calculate',
      currentRect: 0,
      sweepX: 4,
      activeIntervals: [[1, 3], [2, 5], [1, 4]],
      totalArea: 5,
      currentArea: 3,
      prevX: 3,
      highlighted: [1, 2]
    },
    {
      step: 37,
      currentLine: 23,
      description: '✅ Update: totalArea = 5 + 3 = 8',
      action: 'update',
      currentRect: 0,
      sweepX: 4,
      activeIntervals: [[1, 3], [2, 5], [1, 4]],
      totalArea: 8,
      currentArea: 3,
      prevX: 3,
      highlighted: [1, 2]
    },
    {
      step: 38,
      currentLine: 24,
      description: '👉 Remove Interval: Remove [1,3] from activeIntervals',
      action: 'update',
      currentRect: 0,
      sweepX: 4,
      activeIntervals: [[2, 5], [1, 4]],
      totalArea: 8,
      currentArea: 3,
      prevX: 3,
      highlighted: [1, 2]
    },
    {
      step: 39,
      currentLine: 25,
      description: '✅ Update: prevX = 4 (move sweep position)',
      action: 'update',
      currentRect: 0,
      sweepX: 4,
      activeIntervals: [[2, 5], [1, 4]],
      totalArea: 8,
      currentArea: 3,
      prevX: 4,
      highlighted: [1, 2]
    },
    {
      step: 40,
      currentLine: 26,
      description: '➡️ Next Event: Move to x=5',
      action: 'move',
      currentRect: 0,
      sweepX: 5,
      activeIntervals: [[2, 5], [1, 4]],
      totalArea: 8,
      currentArea: 3,
      prevX: 4,
      highlighted: [1, 2]
    },

    // EVENT 5: x=5 (Rectangle 2 ends, Rectangle 4 starts) - 8 steps
    {
      step: 41,
      currentLine: 21,
      description: '🔄 Event 5a: Process event at x=5 (Rectangle 2 ends)',
      action: 'loop-start',
      currentRect: 1,
      sweepX: 5,
      activeIntervals: [[2, 5], [1, 4]],
      totalArea: 8,
      currentArea: 3,
      prevX: 4,
      highlighted: [1, 2]
    },
    {
      step: 42,
      currentLine: 22,
      description: '📊 Calculate Area: width = 5-4 = 1, height = 3, area = 3',
      action: 'calculate',
      currentRect: 1,
      sweepX: 5,
      activeIntervals: [[2, 5], [1, 4]],
      totalArea: 8,
      currentArea: 3,
      prevX: 4,
      highlighted: [1, 2]
    },
    {
      step: 43,
      currentLine: 23,
      description: '✅ Update: totalArea = 8 + 3 = 11',
      action: 'update',
      currentRect: 1,
      sweepX: 5,
      activeIntervals: [[2, 5], [1, 4]],
      totalArea: 11,
      currentArea: 3,
      prevX: 4,
      highlighted: [1, 2]
    },
    {
      step: 44,
      currentLine: 24,
      description: '👉 Remove Interval: Remove [2,5] from activeIntervals',
      action: 'update',
      currentRect: 1,
      sweepX: 5,
      activeIntervals: [[1, 4]],
      totalArea: 11,
      currentArea: 3,
      prevX: 4,
      highlighted: [2]
    },
    {
      step: 45,
      currentLine: 25,
      description: '✅ Update: prevX = 5 (move sweep position)',
      action: 'update',
      currentRect: 1,
      sweepX: 5,
      activeIntervals: [[1, 4]],
      totalArea: 11,
      currentArea: 3,
      prevX: 5,
      highlighted: [2]
    },
    {
      step: 46,
      currentLine: 21,
      description: '🔄 Event 5b: Process event at x=5 (Rectangle 4 starts)',
      action: 'loop-start',
      currentRect: 3,
      sweepX: 5,
      activeIntervals: [[1, 4]],
      totalArea: 11,
      currentArea: 3,
      prevX: 5,
      highlighted: [2, 3]
    },
    {
      step: 47,
      currentLine: 24,
      description: '👉 Add Interval: Add [3,6] to activeIntervals',
      action: 'update',
      currentRect: 3,
      sweepX: 5,
      activeIntervals: [[1, 4], [3, 6]],
      totalArea: 11,
      currentArea: 3,
      prevX: 5,
      highlighted: [2, 3]
    },
    {
      step: 48,
      currentLine: 26,
      description: '➡️ Next Event: Move to x=6',
      action: 'move',
      currentRect: 3,
      sweepX: 6,
      activeIntervals: [[1, 4], [3, 6]],
      totalArea: 11,
      currentArea: 3,
      prevX: 5,
      highlighted: [2, 3]
    },

    // EVENT 6: x=6 (Rectangle 3 ends) - 6 steps
    {
      step: 49,
      currentLine: 21,
      description: '🔄 Event 6: Process event at x=6 (Rectangle 3 ends)',
      action: 'loop-start',
      currentRect: 2,
      sweepX: 6,
      activeIntervals: [[1, 4], [3, 6]],
      totalArea: 11,
      currentArea: 3,
      prevX: 5,
      highlighted: [2, 3]
    },
    {
      step: 50,
      currentLine: 22,
      description: '📊 Calculate Area: width = 6-5 = 1, height = 3, area = 3',
      action: 'calculate',
      currentRect: 2,
      sweepX: 6,
      activeIntervals: [[1, 4], [3, 6]],
      totalArea: 11,
      currentArea: 3,
      prevX: 5,
      highlighted: [2, 3]
    },
    {
      step: 51,
      currentLine: 23,
      description: '✅ Update: totalArea = 11 + 3 = 14',
      action: 'update',
      currentRect: 2,
      sweepX: 6,
      activeIntervals: [[1, 4], [3, 6]],
      totalArea: 14,
      currentArea: 3,
      prevX: 5,
      highlighted: [2, 3]
    },
    {
      step: 52,
      currentLine: 24,
      description: '👉 Remove Interval: Remove [1,4] from activeIntervals',
      action: 'update',
      currentRect: 2,
      sweepX: 6,
      activeIntervals: [[3, 6]],
      totalArea: 14,
      currentArea: 3,
      prevX: 5,
      highlighted: [3]
    },
    {
      step: 53,
      currentLine: 25,
      description: '✅ Update: prevX = 6 (move sweep position)',
      action: 'update',
      currentRect: 2,
      sweepX: 6,
      activeIntervals: [[3, 6]],
      totalArea: 14,
      currentArea: 3,
      prevX: 6,
      highlighted: [3]
    },
    {
      step: 54,
      currentLine: 26,
      description: '➡️ Next Event: Move to x=8',
      action: 'move',
      currentRect: 2,
      sweepX: 8,
      activeIntervals: [[3, 6]],
      totalArea: 14,
      currentArea: 3,
      prevX: 6,
      highlighted: [3]
    },

    // EVENT 7: x=8 (Rectangle 4 ends) - 6 steps
    {
      step: 55,
      currentLine: 21,
      description: '🔄 Event 7: Process event at x=8 (Rectangle 4 ends)',
      action: 'loop-start',
      currentRect: 3,
      sweepX: 8,
      activeIntervals: [[3, 6]],
      totalArea: 14,
      currentArea: 3,
      prevX: 6,
      highlighted: [3]
    },
    {
      step: 56,
      currentLine: 22,
      description: '📊 Calculate Area: width = 8-6 = 2, height = 3, area = 6',
      action: 'calculate',
      currentRect: 3,
      sweepX: 8,
      activeIntervals: [[3, 6]],
      totalArea: 14,
      currentArea: 6,
      prevX: 6,
      highlighted: [3]
    },
    {
      step: 57,
      currentLine: 23,
      description: '✅ Update: totalArea = 14 + 6 = 20',
      action: 'update',
      currentRect: 3,
      sweepX: 8,
      activeIntervals: [[3, 6]],
      totalArea: 20,
      currentArea: 6,
      prevX: 6,
      highlighted: [3]
    },
    {
      step: 58,
      currentLine: 24,
      description: '👉 Remove Interval: Remove [3,6] from activeIntervals',
      action: 'update',
      currentRect: 3,
      sweepX: 8,
      activeIntervals: [],
      totalArea: 20,
      currentArea: 6,
      prevX: 6,
      highlighted: []
    },
    {
      step: 59,
      currentLine: 25,
      description: '✅ Update: prevX = 8 (move sweep position)',
      action: 'update',
      currentRect: 3,
      sweepX: 8,
      activeIntervals: [],
      totalArea: 20,
      currentArea: 6,
      prevX: 8,
      highlighted: []
    },
    {
      step: 60,
      currentLine: 26,
      description: '➡️ Next Event: No more events',
      action: 'move',
      currentRect: 3,
      sweepX: 8,
      activeIntervals: [],
      totalArea: 20,
      currentArea: 6,
      prevX: 8,
      highlighted: []
    },

    // COMPLETION (3 steps)
    {
      step: 61,
      currentLine: 28,
      description: '🎯 Algorithm Complete: All events processed',
      action: 'done',
      currentRect: -1,
      sweepX: 8,
      activeIntervals: [],
      totalArea: 20,
      currentArea: 0,
      prevX: 8,
      highlighted: []
    },
    {
      step: 62,
      currentLine: 29,
      description: '✅ Final Result: Total rectangle area = 20 square units',
      action: 'result',
      currentRect: -1,
      sweepX: 8,
      activeIntervals: [],
      totalArea: 20,
      currentArea: 0,
      prevX: 8,
      highlighted: []
    },
    {
      step: 63,
      currentLine: 30,
      description: '🎯 Return totalArea = 20',
      action: 'result',
      currentRect: -1,
      sweepX: 8,
      activeIntervals: [],
      totalArea: 20,
      currentArea: 0,
      prevX: 8,
      highlighted: []
    }
  ];

  // Helper functions
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { 
        line: 1, 
        code: 'function calculateRectangleArea(rectangles) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  let totalArea = 0;', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `totalArea=${stepData.totalArea}` : ''
      },
      { 
        line: 3, 
        code: '  let prevX = 0;', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `prevX=${stepData.prevX}` : ''
      },
      { 
        line: 4, 
        code: '  let activeIntervals = [];', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `activeIntervals=${JSON.stringify(stepData.activeIntervals)}` : ''
      },
      { 
        line: 5, 
        code: '  let sweepX = 0;', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: stepData.currentLine === 5 ? `sweepX=${stepData.sweepX}` : ''
      },
      { 
        line: 6, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 7, 
        code: '  // Create events for sweep line', 
        active: false, 
        indent: 1 
      },
      { 
        line: 8, 
        code: '  let events = [];', 
        active: stepData.currentLine === 8, 
        indent: 1 
      },
      { 
        line: 9, 
        code: '  for (let rect of rectangles) {', 
        active: stepData.currentLine >= 9 && stepData.currentLine <= 15, 
        indent: 1 
      },
      { 
        line: 10, 
        code: '    events.push({x: rect.x1, type: "start", y: [rect.y1, rect.y2]});', 
        active: stepData.currentLine >= 10 && stepData.currentLine <= 15, 
        indent: 2,
        values: stepData.currentLine >= 10 && stepData.currentLine <= 15 && stepData.currentRect >= 0 ? `rect=${stepData.currentRect + 1}` : ''
      },
      { 
        line: 11, 
        code: '    events.push({x: rect.x2, type: "end", y: [rect.y1, rect.y2]});', 
        active: stepData.currentLine >= 11 && stepData.currentLine <= 15, 
        indent: 2,
        values: stepData.currentLine >= 11 && stepData.currentLine <= 15 && stepData.currentRect >= 0 ? `rect=${stepData.currentRect + 1}` : ''
      },
      { 
        line: 12, 
        code: '  }', 
        active: false, 
        indent: 1 
      },
      { 
        line: 13, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 14, 
        code: '  // Sort events by x-coordinate', 
        active: false, 
        indent: 1 
      },
      { 
        line: 15, 
        code: '  events.sort((a, b) => a.x - b.x);', 
        active: stepData.currentLine === 15, 
        indent: 1 
      },
      { 
        line: 16, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 17, 
        code: '  // Process events with sweep line', 
        active: false, 
        indent: 1 
      },
      { 
        line: 18, 
        code: '  for (let event of events) {', 
        active: stepData.currentLine >= 18 && stepData.currentLine <= 27, 
        indent: 1 
      },
      { 
        line: 19, 
        code: '    // Calculate area for this segment', 
        active: stepData.currentLine >= 19 && stepData.currentLine <= 27, 
        indent: 2 
      },
      { 
        line: 20, 
        code: '    let width = event.x - prevX;', 
        active: stepData.currentLine >= 20 && stepData.currentLine <= 27, 
        indent: 2,
        values: stepData.currentLine >= 20 && stepData.currentLine <= 27 ? `width=${stepData.sweepX - stepData.prevX}` : ''
      },
      { 
        line: 21, 
        code: '    let height = calculateHeight(activeIntervals);', 
        active: stepData.currentLine >= 21 && stepData.currentLine <= 27, 
        indent: 2,
        values: stepData.currentLine >= 21 && stepData.currentLine <= 27 ? `height=${stepData.currentArea}` : ''
      },
      { 
        line: 22, 
        code: '    totalArea += width * height;', 
        active: stepData.currentLine >= 22 && stepData.currentLine <= 27, 
        indent: 2,
        values: stepData.currentLine >= 22 && stepData.currentLine <= 27 ? `+=${(stepData.sweepX - stepData.prevX) * stepData.currentArea}` : ''
      },
      { 
        line: 23, 
        code: '    // Update active intervals', 
        active: stepData.currentLine >= 23 && stepData.currentLine <= 27, 
        indent: 2 
      },
      { 
        line: 24, 
        code: '    if (event.type === "start") {', 
        active: stepData.currentLine >= 24 && stepData.currentLine <= 27, 
        indent: 2 
      },
      { 
        line: 25, 
        code: '      activeIntervals.push(event.y);', 
        active: stepData.currentLine >= 25 && stepData.currentLine <= 27, 
        indent: 3,
        values: stepData.currentLine >= 25 && stepData.currentLine <= 27 ? `push=${JSON.stringify(stepData.activeIntervals)}` : ''
      },
      { 
        line: 26, 
        code: '    } else {', 
        active: stepData.currentLine >= 26 && stepData.currentLine <= 27, 
        indent: 2 
      },
      { 
        line: 27, 
        code: '      activeIntervals = removeInterval(activeIntervals, event.y);', 
        active: stepData.currentLine >= 27, 
        indent: 3,
        values: stepData.currentLine >= 27 ? `remove=${JSON.stringify(stepData.activeIntervals)}` : ''
      },
      { 
        line: 28, 
        code: '    }', 
        active: false, 
        indent: 2 
      },
      { 
        line: 29, 
        code: '    prevX = event.x;', 
        active: stepData.currentLine >= 29, 
        indent: 2,
        values: stepData.currentLine >= 29 ? `prevX=${stepData.prevX}` : ''
      },
      { 
        line: 30, 
        code: '  }', 
        active: false, 
        indent: 1 
      },
      { 
        line: 31, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 32, 
        code: '  return totalArea;', 
        active: stepData.currentLine >= 32, 
        indent: 1,
        values: stepData.currentLine >= 32 ? `return ${stepData.totalArea}` : ''
      },
      { 
        line: 33, 
        code: '}', 
        active: false, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentRect(step.currentRect);
    setSweepX(step.sweepX);
    setActiveIntervals(step.activeIntervals);
    setTotalArea(step.totalArea);
    setCurrentArea(step.currentArea);
    setPrevX(step.prevX);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 3500,
      normal: 2500,
      fast: 1500
    };
    const delay = speedMap[animationSpeed];

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnimating(false), 2000);
        }
      }, index * delay);
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsAnimating(false);
    goToStep(0);
  };

  return (
    <div className="space-y-6">
      {styleTag}
      
      <PageHeader
        icon={Square}
        category="DSA · Computational Geometry"
        title="Rectangle Area"
        description="Calculate total area covered by overlapping rectangles using sweep line algorithm. Perfect for understanding computational geometry and interval management."
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(n log n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Sweep Line', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is Rectangle Area */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Maximize2 className="w-5 h-5" />
              What is Rectangle Area Problem?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given multiple rectangles on a 2D plane, calculate the total area covered by their union. 
                Overlapping areas should only be counted once!
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-sm">
                    rectangles = [<br/>
                    &nbsp;&nbsp;{`{x1:1, y1:1, x2:4, y2:3},`}<br/>
                    &nbsp;&nbsp;{`{x1:2, y1:2, x2:5, y2:5},`}<br/>
                    &nbsp;&nbsp;{`{x1:3, y1:1, x2:6, y2:4},`}<br/>
                    &nbsp;&nbsp;{`{x1:5, y1:3, x2:8, y2:6}`}<br/>
                    ]
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-sm text-green-900 dark:text-green-100">
                    Total Area = 20 square units
                  </div>
                </div>
              </div>

              {/* Visual Problem Diagram */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-4">PROBLEM DIAGRAM:</div>
                <div className="flex justify-center">
                  <svg width="400" height="250" className="border border-slate-200 rounded">
                    {/* Rectangle 1 */}
                    <rect x="50" y="150" width="80" height="50" fill="#3b82f6" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2"/>
                    <text x="90" y="180" textAnchor="middle" className="text-sm font-bold fill-white dark:fill-slate-200">R1</text>
                    
                    {/* Rectangle 2 */}
                    <rect x="90" y="100" width="80" height="80" fill="#10b981" fillOpacity="0.6" stroke="#10b981" strokeWidth="2"/>
                    <text x="130" y="145" textAnchor="middle" className="text-sm font-bold fill-white dark:fill-slate-200">R2</text>
                    
                    {/* Rectangle 3 */}
                    <rect x="130" y="150" width="80" height="50" fill="#8b5cf6" fillOpacity="0.6" stroke="#8b5cf6" strokeWidth="2"/>
                    <text x="170" y="180" textAnchor="middle" className="text-sm font-bold fill-white dark:fill-slate-200">R3</text>
                    
                    {/* Rectangle 4 */}
                    <rect x="210" y="100" width="80" height="80" fill="#f97316" fillOpacity="0.6" stroke="#f97316" strokeWidth="2"/>
                    <text x="250" y="145" textAnchor="middle" className="text-sm font-bold fill-white dark:fill-slate-200">R4</text>
                    
                    {/* Overlap areas highlighted */}
                    <rect x="90" y="150" width="40" height="30" fill="#ef4444" fillOpacity="0.8"/>
                    <rect x="130" y="150" width="40" height="30" fill="#ef4444" fillOpacity="0.8"/>
                    <rect x="210" y="150" width="40" height="30" fill="#ef4444" fillOpacity="0.8"/>
                    
                    {/* Labels */}
                    <text x="200" y="40" textAnchor="middle" className="text-lg font-bold fill-slate-700 dark:fill-slate-300">Overlapping Areas</text>
                    <text x="200" y="60" textAnchor="middle" className="text-sm fill-slate-500 dark:fill-slate-400">Count only ONCE!</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Problem Breakdown */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Step-by-Step Problem Breakdown
            </h4>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Understand Individual Areas</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Each rectangle's individual area:</div>
                    <div className="font-mono text-xs space-y-1">
                      Rectangle 1: (4-1) × (3-1) = 3 × 2 = 6 sq units<br/>
                      Rectangle 2: (5-2) × (5-2) = 3 × 3 = 9 sq units<br/>
                      Rectangle 3: (6-3) × (4-1) = 3 × 3 = 9 sq units<br/>
                      Rectangle 4: (8-5) × (6-3) = 3 × 3 = 9 sq units
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="400" height="160">
                      <rect x="30" y="80" width="40" height="25" fill="#3b82f6" fillOpacity="0.6" stroke="#3b82f6"/>
                      <text x="50" y="100" textAnchor="middle" className="text-sm fill-white dark:fill-slate-200">6</text>
                      
                      <rect x="90" y="50" width="40" height="40" fill="#10b981" fillOpacity="0.6" stroke="#10b981"/>
                      <text x="110" y="75" textAnchor="middle" className="text-sm fill-white dark:fill-slate-200">9</text>
                      
                      <rect x="150" y="80" width="40" height="40" fill="#8b5cf6" fillOpacity="0.6" stroke="#8b5cf6"/>
                      <text x="170" y="105" textAnchor="middle" className="text-sm fill-white dark:fill-slate-200">9</text>
                      
                      <rect x="210" y="50" width="40" height="40" fill="#f97316" fillOpacity="0.6" stroke="#f97316"/>
                      <text x="230" y="75" textAnchor="middle" className="text-sm fill-white dark:fill-slate-200">9</text>
                      
                      <text x="140" y="30" textAnchor="middle" className="text-base font-bold fill-slate-700 dark:fill-slate-300">Individual Areas</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Identify Overlapping Regions</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Find where rectangles overlap:</div>
                    <div className="font-mono text-xs space-y-1">
                      R1 ∩ R2: Area = 2 × 1 = 2 sq units<br/>
                      R2 ∩ R3: Area = 3 × 2 = 6 sq units<br/>
                      R3 ∩ R4: Area = 1 × 1 = 1 sq units
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="400" height="160">
                      <rect x="30" y="80" width="40" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6"/>
                      <rect x="60" y="50" width="40" height="40" fill="#10b981" fillOpacity="0.3" stroke="#10b981"/>
                      <rect x="90" y="80" width="40" height="40" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6"/>
                      <rect x="120" y="50" width="40" height="40" fill="#f97316" fillOpacity="0.3" stroke="#f97316"/>
                      
                      {/* Highlight overlaps */}
                      <rect x="60" y="80" width="15" height="15" fill="#ef4444" fillOpacity="0.8"/>
                      <rect x="90" y="80" width="15" height="25" fill="#ef4444" fillOpacity="0.8"/>
                      <rect x="120" y="80" width="15" height="15" fill="#ef4444" fillOpacity="0.8"/>
                      
                      <text x="95" y="30" textAnchor="middle" className="text-base font-bold fill-slate-700 dark:fill-slate-300">Overlapping Areas</text>
                      <text x="67" y="145" textAnchor="middle" className="text-sm text-red-600 dark:text-red-400 font-bold">2</text>
                      <text x="97" y="145" textAnchor="middle" className="text-sm text-red-600 dark:text-red-400 font-bold">6</text>
                      <text x="127" y="145" textAnchor="middle" className="text-sm text-red-600 dark:text-red-400 font-bold">1</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Apply Union Formula</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Inclusion-Exclusion Principle:</div>
                    <div className="font-mono text-xs space-y-1">
                      Total = Sum(Individual) - Sum(Overlaps)<br/>
                      Total = (6 + 9 + 9 + 9) - (2 + 6 + 1)<br/>
                      Total = 33 - 9 = 24 sq units
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
                    <div className="text-xs text-yellow-800 dark:text-yellow-200">
                      <strong>⚠️ Challenge:</strong> For many rectangles, counting all overlaps becomes complex!
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Sweep Line Solution</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Efficient O(n log n) approach:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">Create events at rectangle edges</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">Sort events by x-coordinate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">Sweep line and track active y-intervals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">Calculate area = height × width</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="400" height="140">
                      {/* Sweep line animation */}
                      <line x1="70" y1="25" x2="70" y2="100" stroke="#ef4444" strokeWidth="4" strokeDasharray="6,3"/>
                      <text x="70" y="18" textAnchor="middle" className="text-sm font-bold text-red-600 dark:text-red-400">Sweep</text>
                      
                      {/* Rectangles */}
                      <rect x="30" y="60" width="50" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6"/>
                      <rect x="50" y="35" width="50" height="35" fill="#10b981" fillOpacity="0.3" stroke="#10b981"/>
                      <rect x="70" y="60" width="50" height="25" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6"/>
                      
                      <text x="200" y="60" textAnchor="middle" className="text-lg font-bold fill-slate-700 dark:fill-slate-300">Efficient Solution!</text>
                      <text x="200" y="80" textAnchor="middle" className="text-base text-green-600 dark:text-green-400">O(n log n)</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Approaches
            </h4>
            
            {/* Valid Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Sweep Line Algorithm ✓</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Optimal</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Efficient O(n log n) solution using event-based processing. Perfect for large numbers of rectangles.
                  </div>
                </div>
              </div>
            </div>

            {/* Invalid Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500 mt-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-red-700 dark:text-red-300">Brute Force ✗</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">Inefficient</span>
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400">
                    O(n²) solution checking all rectangle pairs. Too slow for large inputs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Solution Walkthrough */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Complete Algorithm Solution Walkthrough
            </h4>
            
            <div className="space-y-6">
              {/* Phase 1: Event Creation */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Phase 1: Create Sweep Events</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Convert each rectangle to start/end events:</div>
                    <div className="font-mono text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 dark:text-blue-400">R1:</span>
                        <span>Start at x=1, y=[1,3] → End at x=4, y=[1,3]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 dark:text-green-400">R2:</span>
                        <span>Start at x=2, y=[2,5] → End at x=5, y=[2,5]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 dark:text-purple-400">R3:</span>
                        <span>Start at x=3, y=[1,4] → End at x=6, y=[1,4]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600 dark:text-orange-400">R4:</span>
                        <span>Start at x=5, y=[3,6] → End at x=8, y=[3,6]</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="450" height="180">
                      <text x="225" y="25" textAnchor="middle" className="text-base font-bold fill-slate-700 dark:fill-slate-300">Event Creation Process</text>
                      
                      {/* Rectangle 1 */}
                      <rect x="30" y="100" width="80" height="40" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6"/>
                      <line x1="30" y1="85" x2="30" y2="150" stroke="#3b82f6" strokeWidth="2"/>
                      <text x="30" y="78" textAnchor="middle" className="text-sm font-bold text-blue-600 dark:text-blue-400">START</text>
                      <line x1="110" y1="85" x2="110" y2="150" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2"/>
                      <text x="110" y="78" textAnchor="middle" className="text-sm font-bold text-blue-600 dark:text-blue-400">END</text>
                      
                      {/* Rectangle 2 */}
                      <rect x="150" y="70" width="80" height="50" fill="#10b981" fillOpacity="0.3" stroke="#10b981"/>
                      <line x1="150" y1="55" x2="150" y2="135" stroke="#10b981" strokeWidth="2"/>
                      <text x="150" y="48" textAnchor="middle" className="text-sm font-bold text-green-600 dark:text-green-400">START</text>
                      <line x1="230" y1="55" x2="230" y2="135" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2"/>
                      <text x="230" y="48" textAnchor="middle" className="text-sm font-bold text-green-600 dark:text-green-400">END</text>
                      
                      <text x="225" y="165" textAnchor="middle" className="text-sm text-slate-500 dark:text-slate-400">8 Events Total (4 Start + 4 End)</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phase 2: Sorting */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Phase 2: Sort Events by X-Coordinate</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Sorted order ensures left-to-right processing:</div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded">
                      [x=1,start], [x=2,start], [x=3,start], [x=4,end], [x=5,end], [x=5,start], [x=6,end], [x=8,end]
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="450" height="130">
                      <text x="225" y="25" textAnchor="middle" className="text-base font-bold fill-slate-700 dark:fill-slate-300">Timeline Visualization</text>
                      
                      {/* Timeline */}
                      <line x1="30" y1="60" x2="420" y2="60" stroke="#64748b" strokeWidth="2"/>
                      
                      {/* Event markers */}
                      {[1, 2, 3, 4, 5, 6, 8].map((x, i) => (
                        <g key={i}>
                          <line x1={30 + x * 45} y1="55" x2={30 + x * 45} y2="65" stroke="#64748b" strokeWidth="2"/>
                          <text x={30 + x * 45} y="85" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">{x}</text>
                          <text x={30 + x * 45} y="45" textAnchor="middle" className="text-sm font-bold fill-slate-700 dark:fill-slate-300">
                            {x === 1 ? 'R1↑' : x === 2 ? 'R2↑' : x === 3 ? 'R3↑' : x === 4 ? 'R1↓' : x === 5 ? 'R2↓/R4↑' : x === 6 ? 'R3↓' : 'R4↓'}
                          </text>
                        </g>
                      ))}
                      
                      <text x="225" y="115" textAnchor="middle" className="text-sm text-slate-500 dark:text-slate-400">↑ = Start Event, ↓ = End Event</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phase 3: Sweep Line Processing */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Phase 3: Sweep Line Processing</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Process each event, maintaining active intervals:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=1:</span>
                        <span>Add [1,3] → Active: [[1,3]] → Area += 0×2 = 0</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=2:</span>
                        <span>Add [2,5] → Active: [[1,3],[2,5]] → Area += 1×2 = 2</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=3:</span>
                        <span>Add [1,4] → Active: [[1,3],[2,5],[1,4]] → Area += 1×3 = 3</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=4:</span>
                        <span>Remove [1,3] → Active: [[2,5],[1,4]] → Area += 1×3 = 3</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=5:</span>
                        <span>Remove [2,5], Add [3,6] → Area += 1×3 = 3</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=6:</span>
                        <span>Remove [1,4] → Active: [[3,6]] → Area += 1×3 = 3</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-600">At x=8:</span>
                        <span>Remove [3,6] → Active: [] → Area += 2×3 = 6</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="450" height="150">
                      <text x="225" y="25" textAnchor="middle" className="text-base font-bold fill-slate-700 dark:fill-slate-300">Active Intervals Visualization</text>
                      
                      {/* Show active intervals at different x positions */}
                      <g transform="translate(0, 40)">
                        <text x="70" y="0" textAnchor="middle" className="text-sm font-bold fill-slate-700 dark:fill-slate-300">x=2</text>
                        <rect x="50" y="15" width="30" height="50" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b"/>
                        <text x="65" y="45" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[1,3]</text>
                        
                        <text x="180" y="0" textAnchor="middle" className="text-sm font-bold fill-slate-700 dark:fill-slate-300">x=3</text>
                        <rect x="155" y="5" width="30" height="30" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b"/>
                        <text x="170" y="25" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[1,3]</text>
                        <rect x="185" y="15" width="30" height="50" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b"/>
                        <text x="200" y="45" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[2,5]</text>
                        
                        <text x="320" y="0" textAnchor="middle" className="text-sm font-bold fill-slate-700 dark:fill-slate-300">x=5</text>
                        <rect x="295" y="15" width="30" height="50" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b"/>
                        <text x="310" y="45" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[1,4]</text>
                        <rect x="325" y="5" width="30" height="50" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b"/>
                        <text x="340" y="35" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[3,6]</text>
                      </g>
                      
                      <text x="225" y="135" textAnchor="middle" className="text-sm text-green-600 dark:text-green-400 font-bold">Total Area: 20 square units</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phase 4: Interval Merging */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Phase 4: Interval Merging Algorithm</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Merge overlapping y-intervals to calculate height:</div>
                    <div className="font-mono text-xs space-y-2">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                        <strong>Example at x=3:</strong><br/>
                        Input: [[1,3], [2,5], [1,4]]<br/>
                        Sort: [[1,3], [1,4], [2,5]]<br/>
                        Merge: [1,3] ∪ [1,4] = [1,4], [1,4] ∪ [2,5] = [1,5]<br/>
                        Result: [[1,5]] → Height = 5-1 = 4
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg width="450" height="130">
                      <text x="225" y="25" textAnchor="middle" className="text-base font-bold fill-slate-700 dark:fill-slate-300">Interval Merging Process</text>
                      
                      {/* Original intervals */}
                      <g transform="translate(30, 40)">
                        <text x="75" y="0" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">Original</text>
                        <rect x="25" y="10" width="40" height="10" fill="#3b82f6" fillOpacity="0.7"/>
                        <text x="45" y="19" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[1,3]</text>
                        <rect x="35" y="25" width="40" height="10" fill="#10b981" fillOpacity="0.7"/>
                        <text x="55" y="34" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[2,5]</text>
                        <rect x="45" y="40" width="40" height="10" fill="#8b5cf6" fillOpacity="0.7"/>
                        <text x="65" y="49" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">[1,4]</text>
                      </g>
                      
                      {/* Arrow */}
                      <path d="M 140 65 L 190 65" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
                        </marker>
                      </defs>
                      
                      {/* Merged interval */}
                      <g transform="translate(210, 40)">
                        <text x="75" y="0" textAnchor="middle" className="text-sm fill-slate-700 dark:fill-slate-300">Merged</text>
                        <rect x="40" y="20" width="70" height="15" fill="#10b981" fillOpacity="0.9"/>
                        <text x="75" y="32" textAnchor="middle" className="text-sm font-bold fill-slate-700 dark:fill-slate-300">[1,5]</text>
                        <text x="75" y="50" textAnchor="middle" className="text-sm text-green-600 dark:text-green-400 font-bold">Height = 4</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Final Result */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">✓</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Final Result</div>
                  <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">20 square units</div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        ✓ Efficient O(n log n) solution<br/>
                        ✓ Handles any number of rectangles<br/>
                        ✓ No double-counting of overlaps
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span><strong>Sweep Line:</strong> Vertical line moving from left to right</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span><strong>Active Intervals:</strong> Y-intervals currently covered at sweep position</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span><strong>Interval Merging:</strong> Combine overlapping y-intervals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span><strong>Area Calculation:</strong> Height × Width between events</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Move className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the sweep line algorithm processes the rectangles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="slow"
                checked={animationSpeed === 'slow'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'slow')}
                disabled={isAnimating}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Slow</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="normal"
                checked={animationSpeed === 'normal'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'normal')}
                disabled={isAnimating}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Normal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="fast"
                checked={animationSpeed === 'fast'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'fast')}
                disabled={isAnimating}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </label>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Code Viewer */}
          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">sweep-line.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">sweepX:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].sweepX}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">totalArea:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].totalArea}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">activeIntervals:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{JSON.stringify(steps[currentStep].activeIntervals)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description Card */}
          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-600">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'create-event' && '📝 Creating Events'}
                      {steps[currentStep].action === 'sort' && '🔄 Sorting Events'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Processing Event'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Area'}
                      {steps[currentStep].action === 'update' && '✅ Updating State'}
                      {steps[currentStep].action === 'move' && '➡️ Moving Sweep Line'}
                      {steps[currentStep].action === 'done' && '🎯 Algorithm Complete'}
                      {steps[currentStep].action === 'result' && '✅ Final Result'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Rectangle 1</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Rectangle 2</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Rectangle 3</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Rectangle 4</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="relative" style={{ height: '400px', width: '100%' }}>
                  {/* Grid Background */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* Coordinate System */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {/* X-axis */}
                    <line x1="40" y1="360" x2="760" y2="360" stroke="#64748b" strokeWidth="2"/>
                    <text x="770" y="365" className="text-xs fill-slate-600 dark:fill-slate-400">X</text>
                    
                    {/* Y-axis */}
                    <line x1="40" y1="40" x2="40" y2="360" stroke="#64748b" strokeWidth="2"/>
                    <text x="25" y="35" className="text-xs fill-slate-600 dark:fill-slate-400">Y</text>
                    
                    {/* X-axis labels */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <g key={i}>
                        <text x={40 + i * 90} y="380" className="text-xs fill-slate-600 dark:fill-slate-400" textAnchor="middle">{i}</text>
                        <line x1={40 + i * 90} y1="355" x2={40 + i * 90} y2="365" stroke="#64748b" strokeWidth="1"/>
                      </g>
                    ))}
                    
                    {/* Y-axis labels */}
                    {[0, 1, 2, 3, 4, 5, 6].map(i => (
                      <g key={i}>
                        <text x="30" y={360 - i * 50} className="text-xs fill-slate-600 dark:fill-slate-400" textAnchor="end">{i}</text>
                        <line x1="35" y1={360 - i * 50} x2="45" y2={360 - i * 50} stroke="#64748b" strokeWidth="1"/>
                      </g>
                    ))}

                    {/* Rectangles */}
                    {rectangles.map((rect, idx) => {
                      const isActive = steps[currentStep].currentRect === idx;
                      const isHighlighted = steps[currentStep].highlighted?.includes(idx);
                      
                      return (
                        <rect
                          key={rect.id}
                          x={40 + rect.x1 * 90}
                          y={360 - rect.y2 * 50}
                          width={(rect.x2 - rect.x1) * 90}
                          height={(rect.y2 - rect.y1) * 50}
                          className={`${rect.color} ${isActive ? 'rectangle-active' : ''} ${
                            isHighlighted ? 'highlight-pulse' : ''
                          } transition-all duration-700`}
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity={isActive || isHighlighted ? 0.8 : 0.4}
                        />
                      );
                    })}

                    {/* Sweep Line */}
                    <line
                      x1={40 + steps[currentStep].sweepX * 90}
                      y1="40"
                      x2={40 + steps[currentStep].sweepX * 90}
                      y2="360"
                      stroke="#ef4444"
                      strokeWidth="4"
                      strokeDasharray="8,4"
                      className={isAnimating ? 'sweep-line' : ''}
                      filter="url(#glow)"
                    />
                    
                    {/* Sweep Line Label */}
                    <text
                      x={40 + steps[currentStep].sweepX * 90}
                      y="30"
                      className="text-sm font-bold"
                      fill="#ef4444"
                      textAnchor="middle"
                      filter="url(#glow)"
                    >
                      Sweep: x={steps[currentStep].sweepX}
                    </text>

                    {/* Active Intervals Visualization */}
                    {steps[currentStep].activeIntervals.length > 0 && (
                      <g>
                        {steps[currentStep].activeIntervals.map((interval, idx) => (
                          <rect
                            key={idx}
                            x={40 + steps[currentStep].sweepX * 90 + 10}
                            y={360 - interval[1] * 50}
                            width="40"
                            height={(interval[1] - interval[0]) * 50}
                            fill="#fbbf24"
                            fillOpacity="0.7"
                            stroke="#f59e0b"
                            strokeWidth="3"
                            className="transition-all duration-500"
                            rx="2"
                          />
                        ))}
                      </g>
                    )}

                    {/* Area Display */}
                    <text
                      x="400"
                      y="25"
                      className="text-lg font-bold"
                      fill="#10b981"
                      textAnchor="middle"
                      filter="url(#glow)"
                    >
                      Total Area: {steps[currentStep].totalArea} sq units
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(n log n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Creating events: O(n), Sorting events: O(n log n), Processing events: O(n log n)
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Events array: O(n), Active intervals: O(n), Additional variables: O(1)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function calculateRectangleArea(rectangles) {
  let totalArea = 0;
  let prevX = 0;
  let activeIntervals = [];
  
  // Create events for sweep line
  let events = [];
  for (let rect of rectangles) {
    events.push({x: rect.x1, type: "start", y: [rect.y1, rect.y2]});
    events.push({x: rect.x2, type: "end", y: [rect.y1, rect.y2]});
  }
  
  // Sort events by x-coordinate
  events.sort((a, b) => a.x - b.x);
  
  // Process events with sweep line
  for (let event of events) {
    // Calculate area for this segment
    let width = event.x - prevX;
    let height = calculateHeight(activeIntervals);
    totalArea += width * height;
    
    // Update active intervals
    if (event.type === "start") {
      activeIntervals.push(event.y);
    } else {
      activeIntervals = removeInterval(activeIntervals, event.y);
    }
    prevX = event.x;
  }
  
  return totalArea;
}

function calculateHeight(intervals) {
  if (intervals.length === 0) return 0;
  
  // Merge overlapping intervals
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    let last = merged[merged.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }
  
  // Calculate total height
  let height = 0;
  for (let interval of merged) {
    height += interval[1] - interval[0];
  }
  
  return height;
}

function removeInterval(intervals, target) {
  return intervals.filter(interval => 
    interval[0] !== target[0] || interval[1] !== target[1]
  );
}`}
      />

    </div>
  );
}
