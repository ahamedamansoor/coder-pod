'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, TrendingUp, Droplets, CloudRain
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function StacksTrappingRainWater() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [heights] = useState([0,1,0,2,1,0,1,3,2,1,2,1]);
  
  // Algorithm state
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [leftMax, setLeftMax] = useState(0);
  const [rightMax, setRightMax] = useState(0);
  const [water, setWater] = useState(0);
  const [totalWater, setTotalWater] = useState(0);
  const [currentWater, setCurrentWater] = useState(0);

  // Steps array - comprehensive breakdown following COMP_DSA_STRUC guidelines
  const steps = [
    // INITIALIZATION (4 steps)
    {
      step: 1,
      left: 0,
      right: 0,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 1,
      description: '📋 Initialize: Set left pointer to 0 (start of array)',
      action: 'init',
      highlighted: []
    },
    {
      step: 2,
      left: 0,
      right: 0,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 2,
      description: '📋 Initialize: Set right pointer to n-1 (end of array)',
      action: 'init',
      highlighted: []
    },
    {
      step: 3,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 3,
      description: '📋 Initialize: Set leftMax = 0 (track maximum height from left)',
      action: 'init',
      highlighted: []
    },
    {
      step: 4,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 4,
      description: '📋 Initialize: Set rightMax = 0 (track maximum height from right)',
      action: 'init',
      highlighted: []
    },

    // ITERATION 1 - left=0, right=11 (6 steps)
    {
      step: 5,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=0, right=11, checking if left < right',
      action: 'loop-start',
      highlighted: [0, 11]
    },
    {
      step: 6,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (0 < 11)',
      action: 'loop-check',
      highlighted: [0, 11]
    },
    {
      step: 7,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(0) <= rightMax(0)? YES! Process left side',
      action: 'compare',
      highlighted: [0]
    },
    {
      step: 8,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[0] = 0',
      action: 'examine',
      highlighted: [0]
    },
    {
      step: 9,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[0](0) >= leftMax(0)? YES! Update leftMax',
      action: 'check',
      highlighted: [0]
    },
    {
      step: 10,
      left: 0,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 10,
      description: '➕ Update: leftMax = max(0, 0) = 0, Move left++',
      action: 'update',
      highlighted: [0]
    },

    // ITERATION 2 - left=1, right=11 (6 steps)
    {
      step: 11,
      left: 1,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=1, right=11, checking if left < right',
      action: 'loop-start',
      highlighted: [1, 11]
    },
    {
      step: 12,
      left: 1,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (1 < 11)',
      action: 'loop-check',
      highlighted: [1, 11]
    },
    {
      step: 13,
      left: 1,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(0) <= rightMax(0)? YES! Process left side',
      action: 'compare',
      highlighted: [1]
    },
    {
      step: 14,
      left: 1,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[1] = 1',
      action: 'examine',
      highlighted: [1]
    },
    {
      step: 15,
      left: 1,
      right: 11,
      leftMax: 0,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[1](1) >= leftMax(0)? YES! Update leftMax',
      action: 'check',
      highlighted: [1]
    },
    {
      step: 16,
      left: 1,
      right: 11,
      leftMax: 1,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 10,
      description: '➕ Update: leftMax = max(0, 1) = 1, Move left++',
      action: 'update',
      highlighted: [1]
    },

    // ITERATION 3 - left=2, right=11 (6 steps)
    {
      step: 17,
      left: 2,
      right: 11,
      leftMax: 1,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=2, right=11, checking if left < right',
      action: 'loop-start',
      highlighted: [2, 11]
    },
    {
      step: 18,
      left: 2,
      right: 11,
      leftMax: 1,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (2 < 11)',
      action: 'loop-check',
      highlighted: [2, 11]
    },
    {
      step: 19,
      left: 2,
      right: 11,
      leftMax: 1,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(1) <= rightMax(0)? NO! Process right side',
      action: 'compare',
      highlighted: [11]
    },
    {
      step: 20,
      left: 2,
      right: 11,
      leftMax: 1,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 11,
      description: '📍 Access: heights[right] = heights[11] = 1',
      action: 'examine',
      highlighted: [11]
    },
    {
      step: 21,
      left: 2,
      right: 11,
      leftMax: 1,
      rightMax: 0,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 12,
      description: '🔍 Check: heights[11](1) >= rightMax(0)? YES! Update rightMax',
      action: 'check',
      highlighted: [11]
    },
    {
      step: 22,
      left: 2,
      right: 11,
      leftMax: 1,
      rightMax: 1,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 13,
      description: '➕ Update: rightMax = max(0, 1) = 1, Move right--',
      action: 'update',
      highlighted: [11]
    },

    // ITERATION 4 - left=2, right=10 (6 steps)
    {
      step: 23,
      left: 2,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=2, right=10, checking if left < right',
      action: 'loop-start',
      highlighted: [2, 10]
    },
    {
      step: 24,
      left: 2,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (2 < 10)',
      action: 'loop-check',
      highlighted: [2, 10]
    },
    {
      step: 25,
      left: 2,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(1) <= rightMax(1)? YES! Process left side',
      action: 'compare',
      highlighted: [2]
    },
    {
      step: 26,
      left: 2,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[2] = 0',
      action: 'examine',
      highlighted: [2]
    },
    {
      step: 27,
      left: 2,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 0,
      totalWater: 0,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[2](0) >= leftMax(1)? NO! Calculate water',
      action: 'check',
      highlighted: [2]
    },
    {
      step: 28,
      left: 2,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 1,
      currentLine: 10,
      description: '💧 Calculate: water += leftMax(1) - heights[2](0) = 1, Move left++',
      action: 'calculate',
      highlighted: [2]
    },

    // ITERATION 5 - left=3, right=10 (6 steps)
    {
      step: 29,
      left: 3,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=3, right=10, checking if left < right',
      action: 'loop-start',
      highlighted: [3, 10]
    },
    {
      step: 30,
      left: 3,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (3 < 10)',
      action: 'loop-check',
      highlighted: [3, 10]
    },
    {
      step: 31,
      left: 3,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(1) <= rightMax(1)? YES! Process left side',
      action: 'compare',
      highlighted: [3]
    },
    {
      step: 32,
      left: 3,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[3] = 2',
      action: 'examine',
      highlighted: [3]
    },
    {
      step: 33,
      left: 3,
      right: 10,
      leftMax: 1,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[3](2) >= leftMax(1)? YES! Update leftMax',
      action: 'check',
      highlighted: [3]
    },
    {
      step: 34,
      left: 3,
      right: 10,
      leftMax: 2,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 10,
      description: '➕ Update: leftMax = max(1, 2) = 2, Move left++',
      action: 'update',
      highlighted: [3]
    },

    // ITERATION 6 - left=4, right=10 (6 steps)
    {
      step: 35,
      left: 4,
      right: 10,
      leftMax: 2,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=4, right=10, checking if left < right',
      action: 'loop-start',
      highlighted: [4, 10]
    },
    {
      step: 36,
      left: 4,
      right: 10,
      leftMax: 2,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (4 < 10)',
      action: 'loop-check',
      highlighted: [4, 10]
    },
    {
      step: 37,
      left: 4,
      right: 10,
      leftMax: 2,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(2) <= rightMax(1)? NO! Process right side',
      action: 'compare',
      highlighted: [10]
    },
    {
      step: 38,
      left: 4,
      right: 10,
      leftMax: 2,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 11,
      description: '📍 Access: heights[right] = heights[10] = 2',
      action: 'examine',
      highlighted: [10]
    },
    {
      step: 39,
      left: 4,
      right: 10,
      leftMax: 2,
      rightMax: 1,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 12,
      description: '🔍 Check: heights[10](2) >= rightMax(1)? YES! Update rightMax',
      action: 'check',
      highlighted: [10]
    },
    {
      step: 40,
      left: 4,
      right: 10,
      leftMax: 2,
      rightMax: 2,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 13,
      description: '➕ Update: rightMax = max(1, 2) = 2, Move right--',
      action: 'update',
      highlighted: [10]
    },

    // ITERATION 7 - left=4, right=9 (6 steps)
    {
      step: 41,
      left: 4,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=4, right=9, checking if left < right',
      action: 'loop-start',
      highlighted: [4, 9]
    },
    {
      step: 42,
      left: 4,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (4 < 9)',
      action: 'loop-check',
      highlighted: [4, 9]
    },
    {
      step: 43,
      left: 4,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(2) <= rightMax(2)? YES! Process left side',
      action: 'compare',
      highlighted: [4]
    },
    {
      step: 44,
      left: 4,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[4] = 1',
      action: 'examine',
      highlighted: [4]
    },
    {
      step: 45,
      left: 4,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 1,
      totalWater: 1,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[4](1) >= leftMax(2)? NO! Calculate water',
      action: 'check',
      highlighted: [4]
    },
    {
      step: 46,
      left: 4,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 2,
      totalWater: 2,
      currentWater: 1,
      currentLine: 10,
      description: '💧 Calculate: water += leftMax(2) - heights[4](1) = 1, Move left++',
      action: 'calculate',
      highlighted: [4]
    },

    // ITERATION 8 - left=5, right=9 (6 steps)
    {
      step: 47,
      left: 5,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 2,
      totalWater: 2,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=5, right=9, checking if left < right',
      action: 'loop-start',
      highlighted: [5, 9]
    },
    {
      step: 48,
      left: 5,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 2,
      totalWater: 2,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (5 < 9)',
      action: 'loop-check',
      highlighted: [5, 9]
    },
    {
      step: 49,
      left: 5,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 2,
      totalWater: 2,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(2) <= rightMax(2)? YES! Process left side',
      action: 'compare',
      highlighted: [5]
    },
    {
      step: 50,
      left: 5,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 2,
      totalWater: 2,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[5] = 0',
      action: 'examine',
      highlighted: [5]
    },
    {
      step: 51,
      left: 5,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 2,
      totalWater: 2,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[5](0) >= leftMax(2)? NO! Calculate water',
      action: 'check',
      highlighted: [5]
    },
    {
      step: 52,
      left: 5,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 3,
      totalWater: 3,
      currentWater: 1,
      currentLine: 10,
      description: '💧 Calculate: water += leftMax(2) - heights[5](0) = 1, Move left++',
      action: 'calculate',
      highlighted: [5]
    },

    // ITERATION 9 - left=6, right=9 (6 steps)
    {
      step: 53,
      left: 6,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 3,
      totalWater: 3,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=6, right=9, checking if left < right',
      action: 'loop-start',
      highlighted: [6, 9]
    },
    {
      step: 54,
      left: 6,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 3,
      totalWater: 3,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (6 < 9)',
      action: 'loop-check',
      highlighted: [6, 9]
    },
    {
      step: 55,
      left: 6,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 3,
      totalWater: 3,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(2) <= rightMax(2)? YES! Process left side',
      action: 'compare',
      highlighted: [6]
    },
    {
      step: 56,
      left: 6,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 3,
      totalWater: 3,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[6] = 1',
      action: 'examine',
      highlighted: [6]
    },
    {
      step: 57,
      left: 6,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 3,
      totalWater: 3,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[6](1) >= leftMax(2)? NO! Calculate water',
      action: 'check',
      highlighted: [6]
    },
    {
      step: 58,
      left: 6,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 1,
      currentLine: 10,
      description: '💧 Calculate: water += leftMax(2) - heights[6](1) = 1, Move left++',
      action: 'calculate',
      highlighted: [6]
    },

    // ITERATION 10 - left=7, right=9 (6 steps)
    {
      step: 59,
      left: 7,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=7, right=9, checking if left < right',
      action: 'loop-start',
      highlighted: [7, 9]
    },
    {
      step: 60,
      left: 7,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (7 < 9)',
      action: 'loop-check',
      highlighted: [7, 9]
    },
    {
      step: 61,
      left: 7,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(2) <= rightMax(2)? YES! Process left side',
      action: 'compare',
      highlighted: [7]
    },
    {
      step: 62,
      left: 7,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 8,
      description: '📍 Access: heights[left] = heights[7] = 3',
      action: 'examine',
      highlighted: [7]
    },
    {
      step: 63,
      left: 7,
      right: 9,
      leftMax: 2,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 9,
      description: '🔍 Check: heights[7](3) >= leftMax(2)? YES! Update leftMax',
      action: 'check',
      highlighted: [7]
    },
    {
      step: 64,
      left: 7,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 10,
      description: '➕ Update: leftMax = max(2, 3) = 3, Move left++',
      action: 'update',
      highlighted: [7]
    },

    // ITERATION 11 - left=8, right=9 (6 steps)
    {
      step: 65,
      left: 8,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=8, right=9, checking if left < right',
      action: 'loop-start',
      highlighted: [8, 9]
    },
    {
      step: 66,
      left: 8,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 6,
      description: '✅ Loop Check: left < right? YES! (8 < 9)',
      action: 'loop-check',
      highlighted: [8, 9]
    },
    {
      step: 67,
      left: 8,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 7,
      description: '🔍 Compare: leftMax(3) <= rightMax(2)? NO! Process right side',
      action: 'compare',
      highlighted: [9]
    },
    {
      step: 68,
      left: 8,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 11,
      description: '📍 Access: heights[right] = heights[9] = 1',
      action: 'examine',
      highlighted: [9]
    },
    {
      step: 69,
      left: 8,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 4,
      totalWater: 4,
      currentWater: 0,
      currentLine: 12,
      description: '🔍 Check: heights[9](1) >= rightMax(2)? NO! Calculate water',
      action: 'check',
      highlighted: [9]
    },
    {
      step: 70,
      left: 8,
      right: 9,
      leftMax: 3,
      rightMax: 2,
      water: 5,
      totalWater: 5,
      currentWater: 1,
      currentLine: 13,
      description: '💧 Calculate: water += rightMax(2) - heights[9](1) = 1, Move right--',
      action: 'calculate',
      highlighted: [9]
    },

    // ITERATION 12 - left=8, right=8 (3 steps)
    {
      step: 71,
      left: 8,
      right: 8,
      leftMax: 3,
      rightMax: 2,
      water: 5,
      totalWater: 5,
      currentWater: 0,
      currentLine: 5,
      description: '🔄 Loop Start: left=8, right=8, checking if left < right',
      action: 'loop-start',
      highlighted: [8]
    },
    {
      step: 72,
      left: 8,
      right: 8,
      leftMax: 3,
      rightMax: 2,
      water: 5,
      totalWater: 5,
      currentWater: 0,
      currentLine: 6,
      description: '❌ Loop Check: left < right? NO! (8 >= 8) - Loop ends',
      action: 'loop-complete',
      highlighted: [8]
    },
    {
      step: 73,
      left: 8,
      right: 8,
      leftMax: 3,
      rightMax: 2,
      water: 5,
      totalWater: 5,
      currentWater: 0,
      currentLine: 14,
      description: '✅ Result: Return total water = 5',
      action: 'result',
      highlighted: []
    },
    {
      step: 74,
      left: 8,
      right: 8,
      leftMax: 3,
      rightMax: 2,
      water: 5,
      totalWater: 5,
      currentWater: 0,
      currentLine: 15,
      description: '🎯 Algorithm Complete! Total trapped water = 5',
      action: 'done',
      highlighted: []
    }
  ];

  // Helper functions
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { 
        line: 1, 
        code: 'function trapRainWater(heights) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  let left = 0;', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `left=${stepData.left}` : ''
      },
      { 
        line: 3, 
        code: '  let right = heights.length - 1;', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `right=${stepData.right}` : ''
      },
      { 
        line: 4, 
        code: '  let leftMax = 0;', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `leftMax=${stepData.leftMax}` : ''
      },
      { 
        line: 5, 
        code: '  let rightMax = 0;', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: stepData.currentLine === 5 ? `rightMax=${stepData.rightMax}` : ''
      },
      { 
        line: 6, 
        code: '  let water = 0;', 
        active: stepData.currentLine === 6, 
        indent: 1,
        values: stepData.currentLine === 6 ? `water=${stepData.water}` : ''
      },
      { 
        line: 7, 
        code: '  while (left < right) {', 
        active: stepData.currentLine === 7, 
        indent: 1 
      },
      { 
        line: 8, 
        code: '    if (leftMax <= rightMax) {', 
        active: stepData.currentLine === 8, 
        indent: 2 
      },
      { 
        line: 9, 
        code: '      if (heights[left] >= leftMax) {', 
        active: stepData.currentLine === 9, 
        indent: 3 
      },
      { 
        line: 10, 
        code: '        leftMax = heights[left];', 
        active: stepData.currentLine === 10, 
        indent: 4,
        values: stepData.currentLine === 10 ? `leftMax=${stepData.leftMax}` : ''
      },
      { 
        line: 11, 
        code: '      } else {', 
        active: stepData.currentLine === 11, 
        indent: 3 
      },
      { 
        line: 12, 
        code: '        water += leftMax - heights[left];', 
        active: stepData.currentLine === 12, 
        indent: 4,
        values: stepData.currentLine === 12 ? `water+=${stepData.currentWater}` : ''
      },
      { 
        line: 13, 
        code: '      }', 
        active: stepData.currentLine === 13, 
        indent: 3 
      },
      { 
        line: 14, 
        code: '      left++;', 
        active: stepData.currentLine === 14, 
        indent: 3 
      },
      { 
        line: 15, 
        code: '    } else {', 
        active: stepData.currentLine === 15, 
        indent: 2 
      },
      { 
        line: 16, 
        code: '      if (heights[right] >= rightMax) {', 
        active: stepData.currentLine === 16, 
        indent: 3 
      },
      { 
        line: 17, 
        code: '        rightMax = heights[right];', 
        active: stepData.currentLine === 17, 
        indent: 4,
        values: stepData.currentLine === 17 ? `rightMax=${stepData.rightMax}` : ''
      },
      { 
        line: 18, 
        code: '      } else {', 
        active: stepData.currentLine === 18, 
        indent: 3 
      },
      { 
        line: 19, 
        code: '        water += rightMax - heights[right];', 
        active: stepData.currentLine === 19, 
        indent: 4,
        values: stepData.currentLine === 19 ? `water+=${stepData.currentWater}` : ''
      },
      { 
        line: 20, 
        code: '      }', 
        active: stepData.currentLine === 20, 
        indent: 3 
      },
      { 
        line: 21, 
        code: '      right--;', 
        active: stepData.currentLine === 21, 
        indent: 3 
      },
      { 
        line: 22, 
        code: '    }', 
        active: stepData.currentLine === 22, 
        indent: 2 
      },
      { 
        line: 23, 
        code: '  }', 
        active: stepData.currentLine === 23, 
        indent: 1 
      },
      { 
        line: 24, 
        code: '  return water;', 
        active: stepData.currentLine === 24, 
        indent: 1,
        values: stepData.currentLine === 24 ? `return=${stepData.totalWater}` : ''
      },
      { 
        line: 25, 
        code: '}', 
        active: stepData.currentLine === 25, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeft(step.left);
    setRight(step.right);
    setLeftMax(step.leftMax);
    setRightMax(step.rightMax);
    setWater(step.water);
    setTotalWater(step.totalWater);
    setCurrentWater(step.currentWater);
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

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        icon={CloudRain}
        category="DSA · Stacks · Monotonic Stack"
        title="Trapping Rain Water"
        description="Calculate how much water can be trapped after raining using two-pointer approach"
        colorTheme="blue"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Hard', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              What is Trapping Rain Water?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given an array of non-negative integers representing an elevation map, calculate how much water can be trapped after raining.
              </p>
              
              {/* Visual Elevation Map */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">ELEVATION MAP EXAMPLE:</div>
                <div className="flex items-end justify-center gap-1 mb-4" style={{ height: '200px' }}>
                  {heights.map((height, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      <div 
                        className="w-10 bg-gray-600 dark:bg-gray-500 border border-gray-700 dark:border-gray-400 rounded-t-sm transition-all duration-500"
                        style={{ height: `${(height / 3) * 160}px` }}
                      >
                        <div className="text-white text-xs font-bold text-center pt-2">
                          {height}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                  Calculate water trapped between the bars
                </div>
              </div>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">heights = [0,1,0,2,1,0,1,3,2,1,2,1]</div>
                  <div className="text-xs text-slate-500 mt-1">12 bars representing elevation map</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-500">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-blue-700 dark:text-blue-300">5</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Total trapped water units</div>
                </div>
              </div>

              {/* Visual Solution */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">WATER TRAPPING VISUALIZATION:</div>
                <div className="flex items-end justify-center gap-1 mb-2" style={{ height: '200px' }}>
                  {heights.map((height, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      {/* Water */}
                      {height < 2 && (
                        <div 
                          className="w-10 bg-blue-400 dark:bg-blue-500 border border-blue-500 dark:border-blue-400 rounded-b-sm absolute bottom-0"
                          style={{ height: `${((2 - height) / 3) * 160}px` }}
                        ></div>
                      )}
                      {/* Bar */}
                      <div 
                        className="w-10 bg-gray-600 dark:bg-gray-500 border border-gray-700 dark:border-gray-400 rounded-t-sm relative z-10"
                        style={{ height: `${(height / 3) * 160}px` }}
                      >
                        <div className="text-white text-xs font-bold text-center pt-2">
                          {height}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Blue areas show trapped water (total = 5 units)
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
            
            {/* Good Strategy */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Two-Pointer Approach (Optimal)</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">O(n) ✓</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Use two pointers moving inward, tracking max heights from both sides
                  </div>
                  <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                    left=0, right=n-1, leftMax=0, rightMax=0, water=0
                  </div>
                </div>
              </div>
            </div>

            {/* Bad Strategy */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-red-700 dark:text-red-300">Brute Force (Slow)</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">O(n²) ✗</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    For each position, find left and right max, then calculate water
                  </div>
                  <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                    For each i: water += min(maxLeft, maxRight) - height[i]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              How the Two-Pointer Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize Pointers</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Set up two pointers and max trackers:</div>
                    <div className="font-mono text-sm">left=0, right=n-1, leftMax=0, rightMax=0</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Compare Max Heights</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Always process the side with smaller max height:</div>
                    <div className="font-mono text-sm">if leftMax &lt;= rightMax: process left, else: process right</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Calculate Water</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">If current height is less than max, add water:</div>
                    <div className="font-mono text-sm">water += max(height) - currentHeight</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Move Pointers</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Update max height and move the processed pointer:</div>
                    <div className="font-mono text-sm">leftMax = max(leftMax, heights[left]), left++</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-blue-200 dark:border-blue-700">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Two-Pointer Technique: Process from both ends simultaneously</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Max Height Tracking: Maintain leftMax and rightMax for water calculation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Greedy Approach: Always process the smaller side first</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the two-pointer algorithm processes each position</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls - Line 1 */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control - Line 2 */}
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </label>
          </div>

          {/* Navigation Controls - Line 3 */}
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
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
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">trapRainWater.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">left:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.left}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">right:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.right}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">leftMax:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.leftMax}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">rightMax:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.rightMax}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">water:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.water}</span>
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
                      Step {currentStepData.step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'loop-start' && '🔄 Loop Iteration'}
                      {currentStepData.action === 'loop-check' && '⏸️ Checking Condition'}
                      {currentStepData.action === 'compare' && '🔍 Comparing Max Heights'}
                      {currentStepData.action === 'examine' && '📍 Examining Position'}
                      {currentStepData.action === 'check' && '🔍 Checking Height'}
                      {currentStepData.action === 'update' && '➕ Updating Max'}
                      {currentStepData.action === 'calculate' && '💧 Calculating Water'}
                      {currentStepData.action === 'loop-complete' && '🎯 Loop Complete'}
                      {currentStepData.action === 'result' && '✅ Final Result'}
                      {currentStepData.action === 'done' && '🎯 Algorithm Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-green-200 dark:bg-green-800 border border-green-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Left</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-200 dark:bg-red-800 border border-red-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Right</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 border border-blue-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Water</span>
                  </div>
                </div>
              </div>
              
              {/* Elevation Map Visualization */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-end justify-center gap-1 mb-4" style={{ height: '200px' }}>
                  {heights.map((height, idx) => {
                    const isLeft = currentStepData.left === idx;
                    const isRight = currentStepData.right === idx;
                    const hasWater = currentStepData.water > 0 && height < Math.max(currentStepData.leftMax, currentStepData.rightMax);
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Water */}
                        {hasWater && height < Math.max(currentStepData.leftMax, currentStepData.rightMax) && (
                          <div 
                            className="w-10 bg-blue-400 dark:bg-blue-500 border border-blue-500 dark:border-blue-400 rounded-b-sm absolute bottom-0"
                            style={{ height: `${((Math.max(currentStepData.leftMax, currentStepData.rightMax) - height) / 3) * 160}px` }}
                          ></div>
                        )}
                        {/* Bar */}
                        <div
                          className={`w-10 border-2 rounded-t-sm transition-all duration-700 ${
                            isLeft
                              ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-110 ring-4 ring-green-300 animate-pulse'
                              : isRight
                              ? 'bg-red-200 dark:bg-red-800 border-red-500 scale-110 ring-4 ring-red-300 animate-pulse'
                              : 'bg-gray-600 dark:bg-gray-500 border-gray-700 dark:border-gray-400'
                          }`}
                          style={{ height: `${(height / 3) * 160}px` }}
                        >
                          <div className={`text-xs font-bold text-center pt-2 ${
                            isLeft ? 'text-green-700 dark:text-green-300' :
                            isRight ? 'text-red-700 dark:text-red-300' :
                            'text-white'
                          }`}>
                            {height}
                          </div>
                        </div>
                        
                        {/* Index */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                        {/* Left Indicator */}
                        {isLeft && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pb-2">
                            <div className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/80 px-4 py-1 rounded border border-green-500 shadow-md min-w-[100px] text-center">
                              Left: {height}
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-green-500"></div>
                          </div>
                        )}

                        {/* Right Indicator */}
                        {isRight && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pb-2">
                            <div className="text-xs font-bold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/80 px-4 py-1 rounded border border-red-500 shadow-md min-w-[100px] text-center">
                              Right: {height}
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-red-500"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Pointers Visualization */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">LEFT SIDE:</div>
                    <div className="text-sm font-mono text-green-800 dark:text-green-200">
                      Index: {currentStepData.left}, Height: {currentStepData.left > -1 ? heights[currentStepData.left] : 'N/A'}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                      LeftMax: {currentStepData.leftMax}
                    </div>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-700">
                    <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">RIGHT SIDE:</div>
                    <div className="text-sm font-mono text-red-800 dark:text-red-200">
                      Index: {currentStepData.right}, Height: {currentStepData.right < heights.length ? heights[currentStepData.right] : 'N/A'}
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                      RightMax: {currentStepData.rightMax}
                    </div>
                  </div>
                </div>

                {/* Water Calculation */}
                {currentStepData.currentWater > 0 && (
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">WATER CALCULATION:</div>
                    <div className="text-sm font-mono text-blue-800 dark:text-blue-200">
                      Water += {currentStepData.currentWater} = {currentStepData.water}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      Total Trapped: {currentStepData.totalWater} units
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Each element is visited exactly once by either the left or right pointer, giving linear time complexity.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Only constant extra space is used for pointers and variables, no additional data structures needed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function trapRainWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  
  while (left < right) {
    if (leftMax <= rightMax) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        water += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        water += rightMax - heights[right];
      }
      right--;
    }
  }
  
  return water;
}

// Example usage:
console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 5
console.log(trapRainWater([4,2,0,3,2,5])); // Output: 9`}
      />
    </div>
  );
}
