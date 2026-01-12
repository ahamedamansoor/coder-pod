'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Calculator, ArrowRight, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

interface Step {
  step: number;
  index: number;
  stack: string[];
  currentChar: string;
  score: number;
  currentLine: number;
  description: string;
  action: 'init' | 'loop-start' | 'loop-check' | 'examine' | 'calculate' | 'compare' | 'update' | 'found' | 'result' | 'done';
  highlighted: number[];
  depth: number;
}

export default function StacksScoreOfParentheses() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific data
  const inputString = "(()(()))";
  const parentheses = inputString.split('');
  
  // Algorithm state
  const [stack, setStack] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  
  // Detailed steps following COMP_DSA_STRUC guidelines (minimum 25-35 for medium complexity)
  const steps: Step[] = [
    // INITIALIZATION (3 steps)
    { 
      step: 1, 
      index: -1, 
      stack: [], 
      currentChar: '', 
      score: 0, 
      currentLine: 1, 
      description: '📋 Initialize: Create empty stack to track opening brackets and calculate depth',
      action: 'init',
      highlighted: [],
      depth: 0
    },
    { 
      step: 2, 
      index: -1, 
      stack: [], 
      currentChar: '', 
      score: 0, 
      currentLine: 2, 
      description: '📋 Initialize: Set score = 0 to accumulate total score',
      action: 'init',
      highlighted: [],
      depth: 0
    },
    { 
      step: 3, 
      index: -1, 
      stack: [], 
      currentChar: '', 
      score: 0, 
      currentLine: 3, 
      description: '📋 Initialize: Set index i = 0 to start scanning from beginning',
      action: 'init',
      highlighted: [],
      depth: 0
    },
    
    // ITERATION 1: First '(' at index 0 (5 steps)
    { 
      step: 4, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      score: 0, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: Starting with i = 0, examining first character',
      action: 'loop-start',
      highlighted: [0],
      depth: 0
    },
    { 
      step: 5, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      score: 0, 
      currentLine: 5, 
      description: '✅ Loop Check: i(0) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [0],
      depth: 0
    },
    { 
      step: 6, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      score: 0, 
      currentLine: 6, 
      description: '📍 Access: s[0] = "(" - Found opening bracket',
      action: 'examine',
      highlighted: [0],
      depth: 0
    },
    { 
      step: 7, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      score: 0, 
      currentLine: 7, 
      description: '🔍 Check: Is "(" an opening bracket? YES!',
      action: 'compare',
      highlighted: [0],
      depth: 0
    },
    { 
      step: 8, 
      index: 0, 
      stack: ['('], 
      currentChar: '(', 
      score: 0, 
      currentLine: 8, 
      description: '✅ Update: Push "(" to stack. Stack: ["("]. Depth = 1',
      action: 'update',
      highlighted: [0],
      depth: 1
    },
    
    // ITERATION 2: Second '(' at index 1 (5 steps)
    { 
      step: 9, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      score: 0, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 1, examining second character',
      action: 'loop-start',
      highlighted: [1],
      depth: 1
    },
    { 
      step: 10, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      score: 0, 
      currentLine: 5, 
      description: '✅ Loop Check: i(1) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [1],
      depth: 1
    },
    { 
      step: 11, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      score: 0, 
      currentLine: 6, 
      description: '📍 Access: s[1] = "(" - Found opening bracket',
      action: 'examine',
      highlighted: [1],
      depth: 1
    },
    { 
      step: 12, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      score: 0, 
      currentLine: 7, 
      description: '🔍 Check: Is "(" an opening bracket? YES!',
      action: 'compare',
      highlighted: [1],
      depth: 1
    },
    { 
      step: 13, 
      index: 1, 
      stack: ['(', '('], 
      currentChar: '(', 
      score: 0, 
      currentLine: 8, 
      description: '✅ Update: Push "(" to stack. Stack: ["(", "("]. Depth = 2',
      action: 'update',
      highlighted: [1],
      depth: 2
    },
    
    // ITERATION 3: First ')' at index 2 - SCORE CALCULATION (7 steps)
    { 
      step: 14, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 0, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 2, examining third character',
      action: 'loop-start',
      highlighted: [2],
      depth: 2
    },
    { 
      step: 15, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 0, 
      currentLine: 5, 
      description: '✅ Loop Check: i(2) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [2],
      depth: 2
    },
    { 
      step: 16, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 0, 
      currentLine: 6, 
      description: '📍 Access: s[2] = ")" - Found closing bracket',
      action: 'examine',
      highlighted: [2],
      depth: 2
    },
    { 
      step: 17, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 0, 
      currentLine: 9, 
      description: '🔍 Check: Is ")" a closing bracket? YES!',
      action: 'compare',
      highlighted: [2],
      depth: 2
    },
    { 
      step: 18, 
      index: 2, 
      stack: ['('], 
      currentChar: ')', 
      score: 0, 
      currentLine: 10, 
      description: '✅ Update: Pop from stack. Stack: ["("]. Current depth = 1',
      action: 'update',
      highlighted: [2],
      depth: 1
    },
    { 
      step: 19, 
      index: 2, 
      stack: ['('], 
      currentChar: ')', 
      score: 0, 
      currentLine: 11, 
      description: '🔍 Check: Previous char s[1] = "("? YES! Direct "()" pair found',
      action: 'compare',
      highlighted: [1, 2],
      depth: 1
    },
    { 
      step: 20, 
      index: 2, 
      stack: ['('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 12, 
      description: '📊 Calculate: Add 2^depth = 2^1 = 2 to score. Score: 0 → 2',
      action: 'calculate',
      highlighted: [1, 2],
      depth: 1
    },
    
    // ITERATION 4: Third '(' at index 3 (5 steps)
    { 
      step: 21, 
      index: 3, 
      stack: ['('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 3, examining fourth character',
      action: 'loop-start',
      highlighted: [3],
      depth: 1
    },
    { 
      step: 22, 
      index: 3, 
      stack: ['('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 5, 
      description: '✅ Loop Check: i(3) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [3],
      depth: 1
    },
    { 
      step: 23, 
      index: 3, 
      stack: ['('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 6, 
      description: '📍 Access: s[3] = "(" - Found opening bracket',
      action: 'examine',
      highlighted: [3],
      depth: 1
    },
    { 
      step: 24, 
      index: 3, 
      stack: ['('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 7, 
      description: '🔍 Check: Is "(" an opening bracket? YES!',
      action: 'compare',
      highlighted: [3],
      depth: 1
    },
    { 
      step: 25, 
      index: 3, 
      stack: ['(', '('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 8, 
      description: '✅ Update: Push "(" to stack. Stack: ["(", "("]. Depth = 2',
      action: 'update',
      highlighted: [3],
      depth: 2
    },
    
    // ITERATION 5: Fourth '(' at index 4 (5 steps)
    { 
      step: 26, 
      index: 4, 
      stack: ['(', '('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 4, examining fifth character',
      action: 'loop-start',
      highlighted: [4],
      depth: 2
    },
    { 
      step: 27, 
      index: 4, 
      stack: ['(', '('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 5, 
      description: '✅ Loop Check: i(4) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [4],
      depth: 2
    },
    { 
      step: 28, 
      index: 4, 
      stack: ['(', '('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 6, 
      description: '📍 Access: s[4] = "(" - Found opening bracket',
      action: 'examine',
      highlighted: [4],
      depth: 2
    },
    { 
      step: 29, 
      index: 4, 
      stack: ['(', '('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 7, 
      description: '🔍 Check: Is "(" an opening bracket? YES!',
      action: 'compare',
      highlighted: [4],
      depth: 2
    },
    { 
      step: 30, 
      index: 4, 
      stack: ['(', '(', '('], 
      currentChar: '(', 
      score: 2, 
      currentLine: 8, 
      description: '✅ Update: Push "(" to stack. Stack: ["(", "(", "("]. Depth = 3',
      action: 'update',
      highlighted: [4],
      depth: 3
    },
    
    // ITERATION 6: Second ')' at index 5 - SCORE CALCULATION (7 steps)
    { 
      step: 31, 
      index: 5, 
      stack: ['(', '(', '('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 5, examining sixth character',
      action: 'loop-start',
      highlighted: [5],
      depth: 3
    },
    { 
      step: 32, 
      index: 5, 
      stack: ['(', '(', '('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 5, 
      description: '✅ Loop Check: i(5) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [5],
      depth: 3
    },
    { 
      step: 33, 
      index: 5, 
      stack: ['(', '(', '('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 6, 
      description: '📍 Access: s[5] = ")" - Found closing bracket',
      action: 'examine',
      highlighted: [5],
      depth: 3
    },
    { 
      step: 34, 
      index: 5, 
      stack: ['(', '(', '('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 9, 
      description: '🔍 Check: Is ")" a closing bracket? YES!',
      action: 'compare',
      highlighted: [5],
      depth: 3
    },
    { 
      step: 35, 
      index: 5, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 10, 
      description: '✅ Update: Pop from stack. Stack: ["(", "("]. Current depth = 2',
      action: 'update',
      highlighted: [5],
      depth: 2
    },
    { 
      step: 36, 
      index: 5, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 2, 
      currentLine: 11, 
      description: '🔍 Check: Previous char s[4] = "("? YES! Direct "()" pair found',
      action: 'compare',
      highlighted: [4, 5],
      depth: 2
    },
    { 
      step: 37, 
      index: 5, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 12, 
      description: '📊 Calculate: Add 2^depth = 2^2 = 4 to score. Score: 2 → 6',
      action: 'calculate',
      highlighted: [4, 5],
      depth: 2
    },
    
    // ITERATION 7: Third ')' at index 6 - SCORE CALCULATION (7 steps)
    { 
      step: 38, 
      index: 6, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 6, examining seventh character',
      action: 'loop-start',
      highlighted: [6],
      depth: 2
    },
    { 
      step: 39, 
      index: 6, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 5, 
      description: '✅ Loop Check: i(6) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [6],
      depth: 2
    },
    { 
      step: 40, 
      index: 6, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 6, 
      description: '📍 Access: s[6] = ")" - Found closing bracket',
      action: 'examine',
      highlighted: [6],
      depth: 2
    },
    { 
      step: 41, 
      index: 6, 
      stack: ['(', '('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 9, 
      description: '🔍 Check: Is ")" a closing bracket? YES!',
      action: 'compare',
      highlighted: [6],
      depth: 2
    },
    { 
      step: 42, 
      index: 6, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 10, 
      description: '✅ Update: Pop from stack. Stack: ["("]. Current depth = 1',
      action: 'update',
      highlighted: [6],
      depth: 1
    },
    { 
      step: 43, 
      index: 6, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 11, 
      description: '🔍 Check: Previous char s[5] = ")"? NO! Not a direct pair',
      action: 'compare',
      highlighted: [5, 6],
      depth: 1
    },
    { 
      step: 44, 
      index: 6, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 13, 
      description: '⏭️ Skip: No score added - only direct "()" pairs contribute',
      action: 'update',
      highlighted: [5, 6],
      depth: 1
    },
    
    // ITERATION 8: Final ')' at index 7 - SCORE CALCULATION (7 steps)
    { 
      step: 45, 
      index: 7, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 4, 
      description: '🔄 Loop Iteration: i = 7, examining final character',
      action: 'loop-start',
      highlighted: [7],
      depth: 1
    },
    { 
      step: 46, 
      index: 7, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 5, 
      description: '✅ Loop Check: i(7) < s.length(8)? YES! Continue scanning...',
      action: 'loop-check',
      highlighted: [7],
      depth: 1
    },
    { 
      step: 47, 
      index: 7, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 6, 
      description: '📍 Access: s[7] = ")" - Found closing bracket',
      action: 'examine',
      highlighted: [7],
      depth: 1
    },
    { 
      step: 48, 
      index: 7, 
      stack: ['('], 
      currentChar: ')', 
      score: 6, 
      currentLine: 9, 
      description: '🔍 Check: Is ")" a closing bracket? YES!',
      action: 'compare',
      highlighted: [7],
      depth: 1
    },
    { 
      step: 49, 
      index: 7, 
      stack: [], 
      currentChar: ')', 
      score: 6, 
      currentLine: 10, 
      description: '✅ Update: Pop from stack. Stack: []. Current depth = 0',
      action: 'update',
      highlighted: [7],
      depth: 0
    },
    { 
      step: 50, 
      index: 7, 
      stack: [], 
      currentChar: ')', 
      score: 6, 
      currentLine: 11, 
      description: '🔍 Check: Previous char s[6] = ")"? NO! Not a direct pair',
      action: 'compare',
      highlighted: [6, 7],
      depth: 0
    },
    { 
      step: 51, 
      index: 7, 
      stack: [], 
      currentChar: ')', 
      score: 6, 
      currentLine: 13, 
      description: '⏭️ Skip: No score added - only direct "()" pairs contribute',
      action: 'update',
      highlighted: [6, 7],
      depth: 0
    },
    
    // TERMINATION (3 steps)
    { 
      step: 52, 
      index: 8, 
      stack: [], 
      currentChar: '', 
      score: 6, 
      currentLine: 5, 
      description: '🎯 Loop Check: i(8) < s.length(8)? NO! Loop complete',
      action: 'result',
      highlighted: [],
      depth: 0
    },
    { 
      step: 53, 
      index: 8, 
      stack: [], 
      currentChar: '', 
      score: 6, 
      currentLine: 15, 
      description: '✅ Return: Final score = 6 for "(()(()))"',
      action: 'result',
      highlighted: [],
      depth: 0
    },
    { 
      step: 54, 
      index: 8, 
      stack: [], 
      currentChar: '', 
      score: 6, 
      currentLine: 15, 
      description: '🎯 Algorithm complete! Successfully calculated score using stack depth tracking',
      action: 'done',
      highlighted: [],
      depth: 0
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'function scoreOfParentheses(s) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  let score = 0;', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `score=${stepData.score}` : ''
      },
      { 
        line: 3, 
        code: '  let stack = [];', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `stack=[${stepData.stack.join(',')}]` : ''
      },
      { 
        line: 4, 
        code: '  for (let i = 0; i < s.length; i++) {', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `i=${stepData.index}` : ''
      },
      { 
        line: 5, 
        code: '    if (i < s.length) {', 
        active: stepData.currentLine === 5, 
        indent: 2,
        values: stepData.currentLine === 5 ? `${stepData.index < 8 ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 6, 
        code: '      const char = s[i];', 
        active: stepData.currentLine === 6, 
        indent: 2,
        values: stepData.currentLine === 6 ? `char="${stepData.currentChar}"` : ''
      },
      { 
        line: 7, 
        code: '      if (char === "(") {', 
        active: stepData.currentLine === 7, 
        indent: 2,
        values: stepData.currentLine === 7 ? `${stepData.currentChar === '(' ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 8, 
        code: '        stack.push(char);', 
        active: stepData.currentLine === 8, 
        indent: 3,
        values: stepData.currentLine === 8 ? `stack=[${stepData.stack.join(',')}]` : ''
      },
      { 
        line: 9, 
        code: '      } else if (char === ")") {', 
        active: stepData.currentLine === 9, 
        indent: 2,
        values: stepData.currentLine === 9 ? `${stepData.currentChar === ')' ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 10, 
        code: '        stack.pop();', 
        active: stepData.currentLine === 10, 
        indent: 3,
        values: stepData.currentLine === 10 ? `stack=[${stepData.stack.join(',')}]` : ''
      },
      { 
        line: 11, 
        code: '        if (s[i - 1] === "(") {', 
        active: stepData.currentLine === 11, 
        indent: 3,
        values: stepData.currentLine === 11 ? `${stepData.index > 0 && inputString[stepData.index - 1] === '(' ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 12, 
        code: '          score += 1 << stack.length;', 
        active: stepData.currentLine === 12, 
        indent: 4,
        values: stepData.currentLine === 12 ? `score+=${1 << stepData.depth}` : ''
      },
      { 
        line: 13, 
        code: '        }', 
        active: stepData.currentLine === 13, 
        indent: 3,
        values: ''
      },
      { 
        line: 14, 
        code: '      }', 
        active: stepData.currentLine === 14, 
        indent: 2,
        values: ''
      },
      { 
        line: 15, 
        code: '    }', 
        active: stepData.currentLine === 15, 
        indent: 2,
        values: ''
      },
      { 
        line: 16, 
        code: '  }', 
        active: stepData.currentLine === 16, 
        indent: 1,
        values: ''
      },
      { 
        line: 17, 
        code: '  return score;', 
        active: stepData.currentLine === 17, 
        indent: 1,
        values: stepData.currentLine === 17 ? `return ${stepData.score}` : ''
      },
      { 
        line: 18, 
        code: '}', 
        active: stepData.currentLine === 18, 
        indent: 0,
        values: ''
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStack([...step.stack]);
    setCurrentIndex(step.index);
    setCurrentScore(step.score);
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
    setStack([]);
    setCurrentIndex(0);
    setCurrentScore(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Calculator}
        category="DSA · Stacks"
        title="Score of Parentheses"
        description="Calculate the score of a balanced parentheses string using stack-based depth tracking"
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card - MOST IMPORTANT */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Section 1: What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              What is Score of Parentheses?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given a balanced parentheses string, we need to calculate its score based on these rules:
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">"(()(()))"</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-6">
              Scoring Rules Explained with Examples
            </h4>
            
            {/* Rule 1: Basic Pair */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-green-700 dark:text-green-300">Rule 1: "()" = 1 point</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Basic</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-lg text-center mb-2">"()"</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        Direct pair = 1 point
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> A direct "()" pair contributes exactly 1 point to the score.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2: Addition */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Rule 2: AB = A + B points</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">Addition</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-lg text-center mb-2">"()()"</div>
                      <div className="flex items-center justify-center gap-4 text-xs">
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">"()"</span> = 1
                        </span>
                        <span className="text-slate-500">+</span>
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">"()"</span> = 1
                        </span>
                        <span className="text-slate-500">=</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">2</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Concatenated strings add their individual scores. Each "()" pair is scored separately.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 3: Nesting with Visual Breakdown */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">Rule 3: (A) = 2 × score(A)</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded">Nesting</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-lg text-center mb-3">"(())"</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-slate-600 dark:text-slate-400">Outer pair doubles inner:</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">"("</span>
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">"()"</span>
                          <span className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">")"</span>
                          <span className="text-slate-500">=</span>
                          <span className="text-slate-600 dark:text-slate-400">2 ×</span>
                          <span className="font-bold text-green-600 dark:text-green-400">1</span>
                          <span className="text-slate-500">=</span>
                          <span className="font-bold text-purple-600 dark:text-purple-400">2</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Nested pairs double the score of the inner content. The depth determines the power of 2.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complex Example with Step-by-Step */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-orange-700 dark:text-orange-300">Complex Example: "(()(()))"</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Step-by-Step</span>
                  </div>
                  <div className="space-y-4">
                    {/* Step breakdown */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">"()"</span>
                          <span className="text-slate-500">at depth 1 =</span>
                          <span className="font-bold text-green-600 dark:text-green-400">2¹ = 2</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">"()"</span>
                          <span className="text-slate-500">at depth 2 =</span>
                          <span className="font-bold text-green-600 dark:text-green-400">2² = 4</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Total score =</span>
                          <span className="font-bold text-green-600 dark:text-green-400">2 + 4 = 6</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="text-purple-600 dark:text-purple-400">(</span>
                        <span className="text-purple-600 dark:text-purple-400">(</span>
                        <span className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-1 rounded">)</span>
                        <span className="text-purple-600 dark:text-purple-400">(</span>
                        <span className="text-purple-600 dark:text-purple-400">(</span>
                        <span className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-1 rounded">)</span>
                        <span className="text-purple-600 dark:text-purple-400">)</span>
                        <span className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-1 rounded">)</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                        Direct pairs that contribute to score
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Key Insight:</strong> Only direct "()" pairs contribute to the score. The depth of each pair determines its value (2^depth).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Stack Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Track Depth with Stack</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Push opening brackets:</div>
                    <div className="font-mono text-sm">stack.push('(') → tracks current depth</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Find Direct Pairs</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Check previous character:</div>
                    <div className="font-mono text-sm">if (s[i-1] === '(') → direct "()" pair</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Calculate Score Based on Depth</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Use bit shifting for 2^depth:</div>
                    <div className="font-mono text-sm">score += 1 &lt;&lt; stack.length</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Stack depth determines the power of 2 for scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Only direct "()" pairs contribute to the score</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Bit shifting (1 &lt;&lt; n) efficiently calculates 2^n</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the stack-based algorithm calculates the score</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls - Line 1 */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700"
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
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-100 dark:from-purple-900/40 dark:to-purple-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">score-of-parentheses.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">
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
                      <span className="text-slate-500 dark:text-slate-400">Score:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].score}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Stack:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">[{steps[currentStep].stack.join(',')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Depth:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].depth}</span>
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
                      {steps[currentStep].action === 'examine' && '📍 Examining Character'}
                      {steps[currentStep].action === 'compare' && '🔍 Comparing'}
                      {steps[currentStep].action === 'update' && '✅ Updating State'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Score'}
                      {steps[currentStep].action === 'result' && '🎯 Result'}
                      {steps[currentStep].action === 'done' && '🎯 Complete'}
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
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Score:</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].score}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Depth:</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].depth}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {/* String visualization with better animations */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {parentheses.map((char, idx) => {
                    const isCurrent = steps[currentStep].index === idx;
                    const isHighlighted = steps[currentStep].highlighted.includes(idx);
                    const isProcessed = idx < steps[currentStep].index;
                    const isDirectPair = steps[currentStep].action === 'calculate' && 
                                       steps[currentStep].highlighted.includes(idx);
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Connection lines for direct pairs */}
                        {isDirectPair && char === ')' && idx > 0 && 
                         steps[currentStep].highlighted.includes(idx - 1) && (
                          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-6 bg-green-500 z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                        )}
                        
                        {/* Value Box with enhanced styling */}
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 transition-all duration-300 relative ${
                            isDirectPair && char === ')'
                              ? 'bg-gradient-to-br from-green-400 to-green-600 text-white border-green-500 scale-105 ring-4 ring-green-300 shadow-xl'
                              : isDirectPair && char === '('
                              ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white border-blue-500 scale-105 ring-4 ring-blue-300 shadow-xl'
                              : isCurrent
                              ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white border-purple-500 scale-105 ring-4 ring-purple-300 shadow-lg'
                              : isProcessed
                              ? 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600 border-slate-400 scale-95 opacity-70'
                              : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 border-slate-300 hover:scale-105 transition-transform'
                          }`}
                        >
                          {char}
                          
                          {/* Score addition indicator */}
                          {isDirectPair && char === ')' && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                              +{1 << steps[currentStep].depth}
                            </div>
                          )}
                        </div>
                        
                        {/* Index */}
                        <span className={`text-xs font-mono transition-colors duration-500 ${
                          isCurrent ? 'text-purple-600 dark:text-purple-400 font-bold' : 
                          isProcessed ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'
                        }`}>
                          [{idx}]
                        </span>

                        {/* Enhanced Current Indicator */}
                        {isCurrent && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/80 px-3 py-1.5 rounded-full border-2 border-purple-500 shadow-lg">
                              Processing
                            </div>
                            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-purple-500"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Enhanced Stack Visualization */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-700 shadow-lg w-full max-w-md">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-sm font-semibold text-blue-900 dark:text-blue-100">Stack State</h5>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-blue-600 dark:text-blue-400">Depth: {stack.length}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 min-h-[100px] relative">
                      {stack.length === 0 ? (
                        <div className="text-slate-500 italic text-sm bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-lg">
                          Empty Stack
                        </div>
                      ) : (
                        <div className="flex items-end gap-2">
                          {stack.map((item, index) => (
                            <div
                              key={index}
                              className="relative group"
                            >
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${
                                  index === stack.length - 1 
                                    ? 'from-blue-500 to-blue-600 shadow-lg scale-110' 
                                    : 'from-blue-400 to-blue-500'
                                } text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md transition-all duration-300 hover:scale-105`}
                                style={{
                                  transform: `translateY(${index * 4}px)`,
                                  opacity: 1 - index * 0.15
                                }}
                              >
                                {item}
                              </div>
                              
                              {/* Depth indicator */}
                              {index === stack.length - 1 && (
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1 rounded shadow-md whitespace-nowrap">
                                  Depth {index + 1}
                                </div>
                              )}
                              
                              {/* Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                                <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg">
                                  Position {index + 1}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Stack operations indicator */}
                    {steps[currentStep].action === 'update' && (
                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full">
                          {steps[currentStep].currentChar === '(' ? (
                            <>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Push Operation
                            </>
                          ) : (
                            <>
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              Pop Operation
                            </>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Return Score Display - Only show at the end */}
                    {steps[currentStep].action === 'done' && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-300 dark:border-green-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                              <Calculator className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-green-800 dark:text-green-200">Final Score</div>
                              <div className="text-xs text-green-600 dark:text-green-400">
                                Calculated from {steps[currentStep].score} points
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            {steps[currentStep].score}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Score calculation visualization */}
                {steps[currentStep].action === 'calculate' && (
                  <div className="mt-6 flex justify-center">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border-2 border-green-200 dark:border-green-700 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Calculator className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm">
                          <div className="font-semibold text-green-800 dark:text-green-200">Score Calculation</div>
                          <div className="text-green-600 dark:text-green-400">
                            2^{steps[currentStep].depth} = {1 << steps[currentStep].depth} points
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          +{1 << steps[currentStep].depth}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
      <Card className="border-purple-200 dark:border-purple-800">
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
                We scan the string exactly once, performing O(1) operations for each character. No nested loops or recursive calls.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                In the worst case (all opening brackets), the stack stores n/2 characters. Average case is much better.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function scoreOfParentheses(s) {
  let score = 0;
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      stack.pop();
      
      if (s[i - 1] === '(') {
        // Direct "()" pair found
        // Add 2^depth to score using bit shifting
        score += 1 << stack.length;
      }
    }
  }
  
  return score;
}

// Example usage:
console.log(scoreOfParentheses("(()(()))")); // Output: 6
console.log(scoreOfParentheses("()()"));     // Output: 2
console.log(scoreOfParentheses("(())"));     // Output: 2`}
      />
    </div>
  );
}
