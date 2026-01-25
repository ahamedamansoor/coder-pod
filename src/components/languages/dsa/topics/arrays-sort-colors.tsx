'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Flag, ArrowRight
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function SortColors() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [colors] = useState(['red', 'white', 'blue', 'white', 'red', 'blue', 'white', 'red']);
  const [low, setLow] = useState(0);
  const [mid, setMid] = useState(0);
  const [high, setHigh] = useState(7);
  const [currentAction, setCurrentAction] = useState('');
  const [comparing, setComparing] = useState<number | null>(null);
  const [swapping, setSwapping] = useState<[number, number] | null>(null);

  // Steps array - COMPREHENSIVE BREAKDOWN
  const steps = [
    // INITIALIZATION (8 steps)
    {
      step: 1,
      description: '📋 Start Algorithm: Beginning Dutch National Flag sort',
      action: 'init',
      currentLine: 7,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Algorithm start',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 2,
      description: '📋 Initialize: Set low = 0 (start of array - red boundary)',
      action: 'init',
      currentLine: 8,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Initialize low pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 3,
      description: '📋 Initialize: Set mid = 0 (current examination position)',
      action: 'init',
      currentLine: 8,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Initialize mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 4,
      description: '📋 Calculate: high = nums.length - 1 = 8 - 1 = 7',
      action: 'init',
      currentLine: 8,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Calculate high pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 5,
      description: '📋 Initialize: Set high = 7 (end of array - blue boundary)',
      action: 'init',
      currentLine: 8,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Initialize high pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 6,
      description: '📋 Array Sections: Reds[0..-1], Whites[0..-1], Unknown[0..7], Blues[8..7]',
      action: 'init',
      currentLine: 8,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Section boundaries set',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 7,
      description: '🔄 Prepare Loop: Ready to examine first element',
      action: 'init',
      currentLine: 9,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Loop preparation',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 8,
      description: '✅ Loop Check: mid(0) <= high(7)? YES! Continue processing...',
      action: 'loop-check',
      currentLine: 10,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Loop condition true',
      comparing: 0,
      swapping: null as [number, number] | null,
    },

    // ITERATION 1 - Process RED at index 0 (8 steps)
    {
      step: 9,
      description: '🔄 Loop Iteration 1: Starting with mid = 0',
      action: 'loop-start',
      currentLine: 10,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Iteration 1 start',
      comparing: 0,
      swapping: null as [number, number] | null,
    },
    {
      step: 10,
      description: '📍 Access: nums[mid] = nums[0]',
      action: 'access',
      currentLine: 11,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Access element',
      comparing: 0,
      swapping: null as [number, number] | null,
    },
    {
      step: 11,
      description: '🔍 Value: nums[0] = "red"',
      action: 'examine',
      currentLine: 11,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Color identified',
      comparing: 0,
      swapping: null as [number, number] | null,
    },
    {
      step: 12,
      description: '✅ Check: nums[0] === 0 (RED)? YES!',
      action: 'check',
      currentLine: 11,
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Red confirmed',
      comparing: 0,
      swapping: null as [number, number] | null,
    },
    {
      step: 13,
      description: '🔄 Action: Swap nums[low] and nums[mid] (both at index 0)',
      action: 'swap-red',
      currentLine: 2,  // Point to swap function
      low: 0,
      mid: 0,
      high: 7,
      currentAction: 'Swap red to left',
      comparing: 0,
      swapping: [0, 0] as [number, number],
    },
    {
      step: 14,
      description: '📊 Update: low++ (0 → 1)',
      action: 'update',
      currentLine: 13,
      low: 1,
      mid: 0,
      high: 7,
      currentAction: 'Move low pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 15,
      description: '📊 Update: mid++ (0 → 1)',
      action: 'update',
      currentLine: 13,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Move mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 16,
      description: '✅ Complete: Red moved to left section successfully',
      action: 'complete',
      currentLine: 13,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Red positioned',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 2 - Process WHITE at index 1 (7 steps)
    {
      step: 17,
      description: '🔄 Loop Iteration 2: Now mid = 1',
      action: 'loop-start',
      currentLine: 10,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Iteration 2 start',
      comparing: 1,
      swapping: null as [number, number] | null,
    },
    {
      step: 18,
      description: '✅ Loop Check: mid(1) <= high(7)? YES!',
      action: 'loop-check',
      currentLine: 10,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Continue loop',
      comparing: 1,
      swapping: null as [number, number] | null,
    },
    {
      step: 19,
      description: '📍 Access: nums[mid] = nums[1]',
      action: 'access',
      currentLine: 11,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Access element',
      comparing: 1,
      swapping: null as [number, number] | null,
    },
    {
      step: 20,
      description: '🔍 Value: nums[1] = "white"',
      action: 'examine',
      currentLine: 11,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Color identified',
      comparing: 1,
      swapping: null as [number, number] | null,
    },
    {
      step: 21,
      description: '❌ Check: nums[1] === 0 (RED)? NO!',
      action: 'check',
      currentLine: 14,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'Not red',
      comparing: 1,
      swapping: null as [number, number] | null,
    },
    {
      step: 22,
      description: '✅ Check: nums[1] === 1 (WHITE)? YES!',
      action: 'check',
      currentLine: 14,
      low: 1,
      mid: 1,
      high: 7,
      currentAction: 'White confirmed',
      comparing: 1,
      swapping: null as [number, number] | null,
    },
    {
      step: 23,
      description: '📊 Update: mid++ (1 → 2) - white already in correct position',
      action: 'update',
      currentLine: 15,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Move mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 3 - Process BLUE at index 2 (9 steps)
    {
      step: 24,
      description: '🔄 Loop Iteration 3: Now mid = 2',
      action: 'loop-start',
      currentLine: 10,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Iteration 3 start',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 25,
      description: '✅ Loop Check: mid(2) <= high(7)? YES!',
      action: 'loop-check',
      currentLine: 10,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Continue loop',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 26,
      description: '📍 Access: nums[mid] = nums[2]',
      action: 'access',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Access element',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 27,
      description: '🔍 Value: nums[2] = "blue"',
      action: 'examine',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Color identified',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 28,
      description: '❌ Check: nums[2] === 0 (RED)? NO!',
      action: 'check',
      currentLine: 16,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Not red',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 29,
      description: '❌ Check: nums[2] === 1 (WHITE)? NO!',
      action: 'check',
      currentLine: 16,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Not white',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 30,
      description: '✅ Else: Must be BLUE (2)',
      action: 'check',
      currentLine: 16,
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Blue confirmed',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 31,
      description: '🔄 Action: Swap nums[mid] and nums[high] (indices 2 and 7)',
      action: 'swap-blue',
      currentLine: 2,  // Point to swap function
      low: 1,
      mid: 2,
      high: 7,
      currentAction: 'Swap blue to right',
      comparing: 2,
      swapping: [2, 7] as [number, number],
    },
    {
      step: 32,
      description: '📊 Update: high-- (7 → 6) - blue moved to right section',
      action: 'update',
      currentLine: 18,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Move high pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 4 - Process BLUE at index 2 (after swap) (9 steps)
    {
      step: 33,
      description: '🔄 Loop Iteration 4: Still mid = 2 (new element after swap)',
      action: 'loop-start',
      currentLine: 10,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Iteration 4 start',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 34,
      description: '✅ Loop Check: mid(2) <= high(6)? YES!',
      action: 'loop-check',
      currentLine: 10,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Continue loop',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 35,
      description: '📍 Access: nums[mid] = nums[2] (swapped element)',
      action: 'access',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Access swapped element',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 36,
      description: '🔍 Value: nums[2] = "blue" (new element)',
      action: 'examine',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Color identified',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 37,
      description: '❌ Check: nums[2] === 0 (RED)? NO!',
      action: 'check',
      currentLine: 16,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Not red',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 38,
      description: '❌ Check: nums[2] === 1 (WHITE)? NO!',
      action: 'check',
      currentLine: 16,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Not white',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 39,
      description: '✅ Else: Must be BLUE (2)',
      action: 'check',
      currentLine: 16,
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Blue confirmed',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 40,
      description: '🔄 Action: Swap nums[mid] and nums[high] (indices 2 and 6)',
      action: 'swap-blue',
      currentLine: 2,  // Point to swap function
      low: 1,
      mid: 2,
      high: 6,
      currentAction: 'Swap blue to right',
      comparing: 2,
      swapping: [2, 6] as [number, number],
    },
    {
      step: 41,
      description: '📊 Update: high-- (6 → 5) - another blue moved to right',
      action: 'update',
      currentLine: 18,
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Move high pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 5 - Process RED at index 2 (after swap) (9 steps)
    {
      step: 42,
      description: '🔄 Loop Iteration 5: Still mid = 2 (new element after swap)',
      action: 'loop-start',
      currentLine: 10,
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Iteration 5 start',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 43,
      description: '✅ Loop Check: mid(2) <= high(5)? YES!',
      action: 'loop-check',
      currentLine: 10,
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Continue loop',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 44,
      description: '📍 Access: nums[mid] = nums[2] (swapped element)',
      action: 'access',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Access swapped element',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 45,
      description: '🔍 Value: nums[2] = "red" (new element)',
      action: 'examine',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Color identified',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 46,
      description: '✅ Check: nums[2] === 0 (RED)? YES!',
      action: 'check',
      currentLine: 11,
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Red confirmed',
      comparing: 2,
      swapping: null as [number, number] | null,
    },
    {
      step: 47,
      description: '🔄 Action: Swap nums[low] and nums[mid] (indices 1 and 2)',
      action: 'swap-red',
      currentLine: 2,  // Point to swap function
      low: 1,
      mid: 2,
      high: 5,
      currentAction: 'Swap red to left',
      comparing: 2,
      swapping: [1, 2] as [number, number],
    },
    {
      step: 48,
      description: '📊 Update: low++ (1 → 2)',
      action: 'update',
      currentLine: 13,
      low: 2,
      mid: 2,
      high: 5,
      currentAction: 'Move low pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 49,
      description: '📊 Update: mid++ (2 → 3)',
      action: 'update',
      currentLine: 13,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Move mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 50,
      description: '✅ Complete: Red moved to left section successfully',
      action: 'complete',
      currentLine: 13,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Red positioned',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 6 - Process WHITE at index 3 (7 steps)
    {
      step: 51,
      description: '🔄 Loop Iteration 6: Now mid = 3',
      action: 'loop-start',
      currentLine: 10,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Iteration 6 start',
      comparing: 3,
      swapping: null as [number, number] | null,
    },
    {
      step: 52,
      description: '✅ Loop Check: mid(3) <= high(5)? YES!',
      action: 'loop-check',
      currentLine: 10,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Continue loop',
      comparing: 3,
      swapping: null as [number, number] | null,
    },
    {
      step: 53,
      description: '📍 Access: nums[mid] = nums[3]',
      action: 'access',
      currentLine: 11,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Access element',
      comparing: 3,
      swapping: null as [number, number] | null,
    },
    {
      step: 54,
      description: '🔍 Value: nums[3] = "white"',
      action: 'examine',
      currentLine: 11,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Color identified',
      comparing: 3,
      swapping: null as [number, number] | null,
    },
    {
      step: 55,
      description: '❌ Check: nums[3] === 0 (RED)? NO!',
      action: 'check',
      currentLine: 14,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'Not red',
      comparing: 3,
      swapping: null as [number, number] | null,
    },
    {
      step: 56,
      description: '✅ Check: nums[3] === 1 (WHITE)? YES!',
      action: 'check',
      currentLine: 14,
      low: 2,
      mid: 3,
      high: 5,
      currentAction: 'White confirmed',
      comparing: 3,
      swapping: null as [number, number] | null,
    },
    {
      step: 57,
      description: '📊 Update: mid++ (3 → 4) - white already in correct position',
      action: 'update',
      currentLine: 15,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'Move mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 7 - Process WHITE at index 4 (7 steps)
    {
      step: 58,
      description: '🔄 Loop Iteration 7: Now mid = 4',
      action: 'loop-start',
      currentLine: 10,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'Iteration 7 start',
      comparing: 4,
      swapping: null as [number, number] | null,
    },
    {
      step: 59,
      description: '✅ Loop Check: mid(4) <= high(5)? YES!',
      action: 'loop-check',
      currentLine: 10,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'Continue loop',
      comparing: 4,
      swapping: null as [number, number] | null,
    },
    {
      step: 60,
      description: '📍 Access: nums[mid] = nums[4]',
      action: 'access',
      currentLine: 11,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'Access element',
      comparing: 4,
      swapping: null as [number, number] | null,
    },
    {
      step: 61,
      description: '🔍 Value: nums[4] = "white"',
      action: 'examine',
      currentLine: 11,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'Color identified',
      comparing: 4,
      swapping: null as [number, number] | null,
    },
    {
      step: 62,
      description: '❌ Check: nums[4] === 0 (RED)? NO!',
      action: 'check',
      currentLine: 14,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'Not red',
      comparing: 4,
      swapping: null as [number, number] | null,
    },
    {
      step: 63,
      description: '✅ Check: nums[4] === 1 (WHITE)? YES!',
      action: 'check',
      currentLine: 14,
      low: 2,
      mid: 4,
      high: 5,
      currentAction: 'White confirmed',
      comparing: 4,
      swapping: null as [number, number] | null,
    },
    {
      step: 64,
      description: '📊 Update: mid++ (4 → 5) - white already in correct position',
      action: 'update',
      currentLine: 15,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'Move mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // ITERATION 8 - Process WHITE at index 5 (7 steps)
    {
      step: 65,
      description: '🔄 Loop Iteration 8: Now mid = 5',
      action: 'loop-start',
      currentLine: 10,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'Iteration 8 start',
      comparing: 5,
      swapping: null as [number, number] | null,
    },
    {
      step: 66,
      description: '✅ Loop Check: mid(5) <= high(5)? YES! (last element)',
      action: 'loop-check',
      currentLine: 10,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'Final iteration',
      comparing: 5,
      swapping: null as [number, number] | null,
    },
    {
      step: 67,
      description: '📍 Access: nums[mid] = nums[5]',
      action: 'access',
      currentLine: 11,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'Access element',
      comparing: 5,
      swapping: null as [number, number] | null,
    },
    {
      step: 68,
      description: '🔍 Value: nums[5] = "white"',
      action: 'examine',
      currentLine: 11,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'Color identified',
      comparing: 5,
      swapping: null as [number, number] | null,
    },
    {
      step: 69,
      description: '❌ Check: nums[5] === 0 (RED)? NO!',
      action: 'check',
      currentLine: 14,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'Not red',
      comparing: 5,
      swapping: null as [number, number] | null,
    },
    {
      step: 70,
      description: '✅ Check: nums[5] === 1 (WHITE)? YES!',
      action: 'check',
      currentLine: 14,
      low: 2,
      mid: 5,
      high: 5,
      currentAction: 'White confirmed',
      comparing: 5,
      swapping: null as [number, number] | null,
    },
    {
      step: 71,
      description: '📊 Update: mid++ (5 → 6) - white already in correct position',
      action: 'update',
      currentLine: 15,
      low: 2,
      mid: 6,
      high: 5,
      currentAction: 'Move mid pointer',
      comparing: null,
      swapping: null as [number, number] | null,
    },

    // LOOP TERMINATION (4 steps)
    {
      step: 72,
      description: '🔄 Loop Iteration 9: Now mid = 6',
      action: 'loop-start',
      currentLine: 10,
      low: 2,
      mid: 6,
      high: 5,
      currentAction: 'Final check',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 73,
      description: '❌ Loop Check: mid(6) <= high(5)? NO! Loop terminates.',
      action: 'loop-complete',
      currentLine: 10,
      low: 2,
      mid: 6,
      high: 5,
      currentAction: 'Loop ends',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 74,
      description: '🎯 Final State: Array sections - Reds[0..1], Whites[2..5], Blues[6..7]',
      action: 'result',
      currentLine: 21,
      low: 2,
      mid: 6,
      high: 5,
      currentAction: 'Sections finalized',
      comparing: null,
      swapping: null as [number, number] | null,
    },
    {
      step: 75,
      description: '✅ Sorting Complete: [red, red, white, white, white, white, blue, blue]',
      action: 'result',
      currentLine: 21,
      low: 2,
      mid: 6,
      high: 5,
      currentAction: 'Algorithm complete',
      comparing: null,
      swapping: null as [number, number] | null,
    },
  ];

  // Helper functions
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const getSwapValues = () => {
      if (stepData.swapping && stepData.action === 'swap-red') {
        const [i, j] = stepData.swapping;
        return `temp=${colors[i]}, nums[${i}]=${colors[j]}, nums[${j}]=${colors[i]}`;
      } else if (stepData.swapping && stepData.action === 'swap-blue') {
        const [i, j] = stepData.swapping;
        return `temp=${colors[i]}, nums[${i}]=${colors[j]}, nums[${j}]=${colors[i]}`;
      }
      return '';
    };

    return [
      { 
        line: 1, 
        code: 'function swap(nums, i, j) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  const temp = nums[i];', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.swapping && stepData.action && (stepData.action === 'swap-red' || stepData.action === 'swap-blue') ? getSwapValues() : ''
      },
      { 
        line: 3, 
        code: '  nums[i] = nums[j];', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.swapping && stepData.action && (stepData.action === 'swap-red' || stepData.action === 'swap-blue') ? `nums[${stepData.swapping[0]}]=${colors[stepData.swapping[1]]}` : ''
      },
      { 
        line: 4, 
        code: '  nums[j] = temp;', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.swapping && stepData.action && (stepData.action === 'swap-red' || stepData.action === 'swap-blue') ? `nums[${stepData.swapping[1]}]=${colors[stepData.swapping[0]]}` : ''
      },
      { 
        line: 5, 
        code: '}', 
        active: stepData.currentLine === 5, 
        indent: 0 
      },
      { 
        line: 6, 
        code: '', 
        active: stepData.currentLine === 6, 
        indent: 0 
      },
      { 
        line: 7, 
        code: 'function sortColors(nums) {', 
        active: stepData.currentLine === 7, 
        indent: 0 
      },
      { 
        line: 8, 
        code: '  let low = 0, mid = 0, high = nums.length - 1;', 
        active: stepData.currentLine === 8, 
        indent: 1,
        values: stepData.currentLine === 8 ? `low=${stepData.low}, mid=${stepData.mid}, high=${stepData.high}` : ''
      },
      { 
        line: 9, 
        code: '  ', 
        active: stepData.currentLine === 9, 
        indent: 1 
      },
      { 
        line: 10, 
        code: '  while (mid <= high) {', 
        active: stepData.currentLine === 10, 
        indent: 1,
        values: stepData.currentLine === 10 ? `${stepData.mid} <= ${stepData.high}` : ''
      },
      { 
        line: 11, 
        code: '    if (nums[mid] === 0) { // RED', 
        active: stepData.currentLine === 11, 
        indent: 2,
        values: stepData.currentLine === 11 ? `nums[${stepData.mid}]=${colors[stepData.mid]}` : ''
      },
      { 
        line: 12, 
        code: '      swap(nums, low, mid);', 
        active: stepData.currentLine === 12, 
        indent: 2,
        values: stepData.currentLine === 12 && stepData.swapping ? `swap(nums, ${stepData.swapping[0]}, ${stepData.swapping[1]})` : ''
      },
      { 
        line: 13, 
        code: '      low++; mid++;', 
        active: stepData.currentLine === 13, 
        indent: 2,
        values: stepData.currentLine === 13 ? `low=${stepData.low+1}, mid=${stepData.mid+1}` : ''
      },
      { 
        line: 14, 
        code: '    } else if (nums[mid] === 1) { // WHITE', 
        active: stepData.currentLine === 14, 
        indent: 2 
      },
      { 
        line: 15, 
        code: '      mid++;', 
        active: stepData.currentLine === 15, 
        indent: 2,
        values: stepData.currentLine === 15 ? `mid=${stepData.mid+1}` : ''
      },
      { 
        line: 16, 
        code: '    } else { // BLUE', 
        active: stepData.currentLine === 16, 
        indent: 2 
      },
      { 
        line: 17, 
        code: '      swap(nums, mid, high);', 
        active: stepData.currentLine === 17, 
        indent: 2,
        values: stepData.currentLine === 17 && stepData.swapping ? `swap(nums, ${stepData.swapping[0]}, ${stepData.swapping[1]})` : ''
      },
      { 
        line: 18, 
        code: '      high--;', 
        active: stepData.currentLine === 18, 
        indent: 2,
        values: stepData.currentLine === 18 ? `high=${stepData.high-1}` : ''
      },
      { 
        line: 19, 
        code: '    }', 
        active: stepData.currentLine === 19, 
        indent: 2 
      },
      { 
        line: 20, 
        code: '  }', 
        active: stepData.currentLine === 20, 
        indent: 1 
      },
      { 
        line: 21, 
        code: '  return nums;', 
        active: stepData.currentLine === 21, 
        indent: 1 
      },
      { 
        line: 22, 
        code: '}', 
        active: stepData.currentLine === 22, 
        indent: 0 
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLow(step.low);
    setMid(step.mid);
    setHigh(step.high);
    setCurrentAction(step.currentAction);
    setComparing(step.comparing);
    setSwapping(step.swapping);
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

  const getColorClass = (color: string, index: number) => {
    const isComparing = comparing === index;
    const isSwapping = swapping && swapping.includes(index);
    const isLow = index === low;
    const isMid = index === mid;
    const isHigh = index === high;
    
    if (isSwapping) {
      return 'bg-yellow-200 dark:bg-yellow-800 border-yellow-500 scale-110 ring-4 ring-yellow-300 animate-pulse';
    }
    
    if (isComparing) {
      return 'scale-110 ring-4 ring-blue-300';
    }
    
    if (isLow) {
      return 'ring-4 ring-green-300';
    }
    
    if (isMid) {
      return 'ring-4 ring-blue-300';
    }
    
    if (isHigh) {
      return 'ring-4 ring-red-300';
    }
    
    switch(color) {
      case 'red': return 'bg-red-500 border-red-600';
      case 'white': return 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600';
      case 'blue': return 'bg-blue-500 border-blue-600';
      default: return 'bg-gray-300 border-gray-400';
    }
  };

  const getSortedColors = () => {
    // Simulate the sorted state at current step
    const sorted = [...colors];
    if (currentStep >= 33) {
      return ['red', 'red', 'white', 'white', 'white', 'white', 'blue', 'blue'];
    }
    return sorted;
  };

  return (
    <>
      <PageHeader
        icon={Flag}
        category="DSA · Arrays"
        title="Sort Colors (Dutch National Flag)"
        description="Learn to sort an array with three colors (red, white, blue) in a single pass using three pointers"
        colorTheme="orange"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Three Pointers', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down the Dutch National Flag problem with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Flag className="w-5 h-5" />
              What is the Dutch National Flag Problem?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given an array containing three colors (red, white, blue), sort them in a single pass 
                so that all reds come first, then whites, then blues.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-red-500 rounded"></div>
                    <div className="w-10 h-10 bg-white dark:bg-slate-700 border rounded"></div>
                    <div className="w-10 h-10 bg-blue-500 rounded"></div>
                    <div className="w-10 h-10 bg-white dark:bg-slate-700 border rounded"></div>
                    <div className="w-10 h-10 bg-red-500 rounded"></div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    Unsorted colors in random order
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-red-500 rounded"></div>
                    <div className="w-10 h-10 bg-red-500 rounded"></div>
                    <div className="w-10 h-10 bg-white dark:bg-slate-700 border rounded"></div>
                    <div className="w-10 h-10 bg-white dark:bg-slate-700 border rounded"></div>
                    <div className="w-10 h-10 bg-blue-500 rounded"></div>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Sorted: reds → whites → blues
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pointers Strategy */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Three Pointers Strategy
            </h4>
            
            <div className="space-y-6">
              {/* Pointer Explanations */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-700 dark:text-green-300">Low Pointer</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Marks the boundary of the red section. Everything before low is red.
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Mid Pointer</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Current element being examined. Moves through the array.
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-red-700 dark:text-red-300">High Pointer</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Marks the boundary of the blue section. Everything after high is blue.
                  </div>
                </div>
              </div>

              {/* Visual Array with Pointers */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">Array Partitioning:</div>
                <div className="flex items-center gap-1">
                  <div className="flex-1 h-12 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-green-700 dark:text-green-300">RED</span>
                  </div>
                  <div className="flex-1 h-12 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">WHITE</span>
                  </div>
                  <div className="flex-1 h-12 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-red-700 dark:text-red-300">BLUE</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">[0 ... low-1]</span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">[low ... mid-1]</span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">[mid ... high]</span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">[high+1 ... n-1]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Algorithm Steps
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">If RED (0)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Swap with low pointer, then increment both low and mid
                    </div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded mt-2">
                      swap(nums, low, mid); low++; mid++;
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">If WHITE (1)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Already in correct position, just increment mid
                    </div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded mt-2">
                      mid++;
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">If BLUE (2)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Swap with high pointer, then decrement high (don't increment mid)
                    </div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded mt-2">
                      swap(nums, mid, high); high--;
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
                <span className="text-slate-700 dark:text-slate-300">Single pass algorithm: O(n) time complexity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">In-place sorting: O(1) space complexity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">Three pointers maintain boundaries of three sections</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">Mid pointer doesn't increment when swapping with high</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Flag className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the three pointers sort the colors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700"
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
                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-orange-100 to-orange-100 dark:from-orange-900/40 dark:to-orange-900/40 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <span className="text-sm font-bold text-orange-900 dark:text-orange-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">sort-colors.js</span>
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
                        ? 'bg-orange-50 dark:bg-orange-900/20 border-l-2 border-orange-400 dark:border-orange-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-orange-600 dark:text-orange-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-orange-600 dark:text-orange-400 font-semibold">
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
                      <span className="text-slate-500 dark:text-slate-400">low:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].low}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">mid:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].mid}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">high:</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">{steps[currentStep].high}</span>
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
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'loop-check' && '✅ Loop Check'}
                      {steps[currentStep].action === 'access' && '📍 Access Element'}
                      {steps[currentStep].action === 'examine' && '🔍 Examining Element'}
                      {steps[currentStep].action === 'check' && '✅ Checking Condition'}
                      {steps[currentStep].action === 'swap-red' && '🔄 Swapping Red'}
                      {steps[currentStep].action === 'swap-blue' && '🔄 Swapping Blue'}
                      {steps[currentStep].action === 'update' && '📊 Updating Pointers'}
                      {steps[currentStep].action === 'complete' && '✅ Operation Complete'}
                      {steps[currentStep].action === 'loop-complete' && '🎯 Loop Complete'}
                      {steps[currentStep].action === 'result' && '🎯 Sorting Complete'}
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
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-500 dark:text-slate-400">low</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-500 dark:text-slate-400">mid</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-slate-500 dark:text-slate-400">high</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {getSortedColors().map((color, idx) => {
                    const isLow = idx === low;
                    const isMid = idx === mid;
                    const isHigh = idx === high;
                    const isComparing = comparing === idx;
                    const isSwapping = swapping && swapping.includes(idx);
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-3">
                        {/* Pointer indicators */}
                        <div className="h-6 flex items-center gap-1">
                          {isLow && (
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                              low
                            </div>
                          )}
                          {isMid && (
                            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">
                              mid
                            </div>
                          )}
                          {isHigh && (
                            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                              high
                            </div>
                          )}
                        </div>
                        
                        {/* Color box */}
                        <div
                          className={`w-16 h-16 rounded-lg border-2 transition-all duration-700 flex items-center justify-center ${
                            getColorClass(color, idx)
                          }`}
                        >
                          <span className="text-white font-bold text-sm">
                            {color === 'red' ? 'R' : color === 'white' ? 'W' : 'B'}
                          </span>
                        </div>
                        
                        {/* Index */}
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          [{idx}]
                        </div>
                        
                        {/* Status indicators */}
                        {isComparing && (
                          <div className="absolute -top-8 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            Examining
                          </div>
                        )}
                        {isSwapping && (
                          <div className="absolute -top-8 bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                            Swapping
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Array sections visualization */}
                <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Array Sections:</div>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span>Reds: [0 to {low-1}]</span>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Whites: [{low} to {mid-1}]</span>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span>Unknown: [{mid} to {high}]</span>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Blues: [{high+1} to 7]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Code Example */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Flag className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Complete Code Example
          </CardTitle>
          <CardDescription>See the full implementation with function call and output</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            code={`// Helper function to swap elements in array
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function sortColors(nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  
  while (mid <= high) {
    if (nums[mid] === 0) { // RED
      // Swap with low pointer
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) { // WHITE
      // Already in correct position
      mid++;
    } else { // BLUE
      // Swap with high pointer
      swap(nums, mid, high);
      high--;
      // Don't increment mid here!
    }
  }
  
  return nums;
}

// Test the function with different examples
console.log("=== Sort Colors (Dutch National Flag) ===");

// Example 1: Mixed colors
const arr1 = [2, 0, 2, 1, 1, 0];
console.log("Before:", arr1);
const result1 = sortColors(arr1);
console.log("After :", result1); // [0, 0, 1, 1, 2, 2]

// Example 2: Already sorted
const arr2 = [0, 0, 1, 1, 2, 2];
console.log("\\nBefore:", arr2);
const result2 = sortColors(arr2);
console.log("After :", result2); // [0, 0, 1, 1, 2, 2]

// Example 3: Reverse order
const arr3 = [2, 2, 1, 1, 0, 0];
console.log("\\nBefore:", arr3);
const result3 = sortColors(arr3);
console.log("After :", result3); // [0, 0, 1, 1, 2, 2]

// Example 4: All reds
const arr4 = [0, 0, 0, 0];
console.log("\\nBefore:", arr4);
const result4 = sortColors(arr4);
console.log("After :", result4); // [0, 0, 0, 0]

// Example 5: All blues
const arr5 = [2, 2, 2, 2];
console.log("\\nBefore:", arr5);
const result5 = sortColors(arr5);
console.log("After :", result5); // [2, 2, 2, 2]

// Example 6: Single element
const arr6 = [1];
console.log("\\nBefore:", arr6);
const result6 = sortColors(arr6);
console.log("After :", result6); // [1]

// Helper function to convert numbers to colors for display
function colorsToString(arr) {
  return arr.map(num => num === 0 ? 'red' : num === 1 ? 'white' : 'blue').join(', ');
}

console.log("\\n=== Color Representation ===");
console.log("Result 1:", colorsToString(result1)); // red, red, white, white, blue, blue

// Step-by-step demonstration of swap function
console.log("\\n=== Swap Function Demonstration ===");
const swapDemo = [3, 7];
console.log("Before swap:", swapDemo);
swap(swapDemo, 0, 1);
console.log("After swap :", swapDemo); // [7, 3]`}
            language="javascript"
            title="sort-colors.js"
          />
        </CardContent>
      </Card>
    </>
  );
}
