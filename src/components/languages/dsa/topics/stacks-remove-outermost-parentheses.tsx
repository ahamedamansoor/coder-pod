'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Scissors, ArrowRight, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

interface Step {
  step: number;
  index: number;
  inputString: string;
  resultString: string;
  currentChar: string;
  left: number;
  right: number;
  currentLine: number;
  description: string;
  action: 'init' | 'loop-start' | 'loop-check' | 'examine' | 'compare' | 'update' | 'found' | 'result' | 'done' | 'calculate' | 'check';
  highlighted: number[];
  removedChars: number[];
}

export default function StacksRemoveOutermostParentheses() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific data
  const originalString = "(()())(())";
  const characters = originalString.split('');
  
  // Algorithm state
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(originalString.length - 1);
  const [currentResult, setCurrentResult] = useState(originalString);
  const [removedIndices, setRemovedIndices] = useState<number[]>([]);
  
  // Detailed steps following COMP_DSA_STRUC guidelines (minimum 25-35 for medium complexity)
  const steps: Step[] = [
    // INITIALIZATION (3 steps)
    { 
      step: 1, 
      index: -1, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '', 
      left: 0, 
      right: originalString.length - 1, 
      currentLine: 1, 
      description: '📋 Initialize: Create input string "(()())(())" for processing',
      action: 'init',
      highlighted: [],
      removedChars: []
    },
    { 
      step: 2, 
      index: -1, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '', 
      left: 0, 
      right: originalString.length - 1, 
      currentLine: 2, 
      description: '📋 Initialize: Set left pointer = 0 to start from beginning',
      action: 'init',
      highlighted: [],
      removedChars: []
    },
    { 
      step: 3, 
      index: -1, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '', 
      left: 0, 
      right: originalString.length - 1, 
      currentLine: 3, 
      description: '📋 Initialize: Set right pointer = 8 to start from end',
      action: 'init',
      highlighted: [],
      removedChars: []
    },
    
    // FIND LEFTMOST OPENING PARENTHESIS (4 steps)
    { 
      step: 4, 
      index: 0, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '(', 
      left: 0, 
      right: 8, 
      currentLine: 5, 
      description: '🔄 Loop Start: Scanning from left to find first "("',
      action: 'loop-start',
      highlighted: [0],
      removedChars: []
    },
    { 
      step: 5, 
      index: 0, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '(', 
      left: 0, 
      right: 8, 
      currentLine: 6, 
      description: '✅ Check: left < right? 0 < 8? YES! Continue scanning',
      action: 'loop-check',
      highlighted: [0],
      removedChars: []
    },
    { 
      step: 6, 
      index: 0, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '(', 
      left: 0, 
      right: 8, 
      currentLine: 7, 
      description: '📍 Access: s[left] = s[0] = "(" - Found opening bracket',
      action: 'examine',
      highlighted: [0],
      removedChars: []
    },
    { 
      step: 7, 
      index: 0, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '(', 
      left: 0, 
      right: 8, 
      currentLine: 8, 
      description: '🔍 Check: s[left] === "("? YES! Found leftmost opening bracket',
      action: 'compare',
      highlighted: [0],
      removedChars: []
    },
    
    // FIND RIGHTMOST CLOSING PARENTHESIS (4 steps)
    { 
      step: 8, 
      index: 8, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: ')', 
      left: 0, 
      right: 8, 
      currentLine: 10, 
      description: '🔄 Loop Start: Scanning from right to find last ")"',
      action: 'loop-start',
      highlighted: [8],
      removedChars: []
    },
    { 
      step: 9, 
      index: 8, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: ')', 
      left: 0, 
      right: 8, 
      currentLine: 11, 
      description: '✅ Check: left < right? 0 < 8? YES! Continue scanning',
      action: 'loop-check',
      highlighted: [0, 8],
      removedChars: []
    },
    { 
      step: 10, 
      index: 8, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: ')', 
      left: 0, 
      right: 8, 
      currentLine: 12, 
      description: '📍 Access: s[right] = s[8] = ")" - Found closing bracket',
      action: 'examine',
      highlighted: [8],
      removedChars: []
    },
    { 
      step: 11, 
      index: 8, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: ')', 
      left: 0, 
      right: 8, 
      currentLine: 13, 
      description: '🔍 Check: s[right] === ")"? YES! Found rightmost closing bracket',
      action: 'compare',
      highlighted: [8],
      removedChars: []
    },
    
    // VALIDATE PAIR (3 steps)
    { 
      step: 12, 
      index: -1, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 15, 
      description: '✅ Validation: left < right? 0 < 8? YES! Valid outermost pair',
      action: 'compare',
      highlighted: [0, 8],
      removedChars: []
    },
    { 
      step: 13, 
      index: -1, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 16, 
      description: '✅ Validation: s[left] === "(" and s[right] === ")"? YES! Valid pair',
      action: 'compare',
      highlighted: [0, 8],
      removedChars: []
    },
    { 
      step: 14, 
      index: -1, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 17, 
      description: '🎯 Found: Outermost pair identified at positions 0 and 8',
      action: 'found',
      highlighted: [0, 8],
      removedChars: []
    },
    
    // REMOVE OUTERMOST PAIR (8 steps)
    { 
      step: 15, 
      index: 0, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: '(', 
      left: 0, 
      right: 8, 
      currentLine: 19, 
      description: '✂️ Remove: Mark position 0 for removal (outermost "(")',
      action: 'update',
      highlighted: [0],
      removedChars: [0]
    },
    { 
      step: 16, 
      index: 8, 
      inputString: originalString, 
      resultString: originalString, 
      currentChar: ')', 
      left: 0, 
      right: 8, 
      currentLine: 20, 
      description: '✂️ Remove: Mark position 8 for removal (outermost ")" )',
      action: 'update',
      highlighted: [8],
      removedChars: [0, 8]
    },
    { 
      step: 17, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 21, 
      description: '📊 Build: Create result string removing marked characters',
      action: 'calculate',
      highlighted: [],
      removedChars: [0, 8]
    },
    { 
      step: 18, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 21, 
      description: '📊 Process: Skip character at index 0 (marked for removal)',
      action: 'calculate',
      highlighted: [],
      removedChars: [0, 8]
    },
    { 
      step: 19, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 21, 
      description: '📊 Process: Keep characters at indices 1-7',
      action: 'calculate',
      highlighted: [1, 2, 3, 4, 5, 6, 7],
      removedChars: [0, 8]
    },
    { 
      step: 20, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 21, 
      description: '📊 Process: Skip character at index 8 (marked for removal)',
      action: 'calculate',
      highlighted: [],
      removedChars: [0, 8]
    },
    { 
      step: 21, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 22, 
      description: '✅ Update: Result string = "()())(())" (outermost pair removed)',
      action: 'update',
      highlighted: [],
      removedChars: [0, 8]
    },
    { 
      step: 22, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 22, 
      description: '🎯 Result: Successfully removed outermost parentheses',
      action: 'result',
      highlighted: [],
      removedChars: [0, 8]
    },
    
    // EDGE CASES AND VALIDATION (5 steps)
    { 
      step: 23, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 24, 
      description: '🔍 Edge Case: What if no outermost pair exists?',
      action: 'check',
      highlighted: [],
      removedChars: [0, 8]
    },
    { 
      step: 24, 
      index: -1, 
      inputString: 'abc', 
      resultString: 'abc', 
      currentChar: '', 
      left: 0, 
      right: 2, 
      currentLine: 25, 
      description: '🔍 Edge Case: Input without parentheses returns unchanged',
      action: 'check',
      highlighted: [],
      removedChars: []
    },
    { 
      step: 25, 
      index: -1, 
      inputString: '()', 
      resultString: '', 
      currentChar: '', 
      left: 0, 
      right: 1, 
      currentLine: 26, 
      description: '🔍 Edge Case: Single pair results in empty string',
      action: 'check',
      highlighted: [],
      removedChars: []
    },
    { 
      step: 26, 
      index: -1, 
      inputString: '((()))', 
      resultString: '(())', 
      currentChar: '', 
      left: 0, 
      right: 5, 
      currentLine: 27, 
      description: '🔍 Edge Case: Nested pairs remove only outermost layer',
      action: 'check',
      highlighted: [0, 5],
      removedChars: [0, 5]
    },
    { 
      step: 27, 
      index: -1, 
      inputString: originalString, 
      resultString: '()())(())', 
      currentChar: '', 
      left: 0, 
      right: 8, 
      currentLine: 28, 
      description: '🎯 Algorithm complete! All edge cases considered',
      action: 'done',
      highlighted: [],
      removedChars: [0, 8]
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'function removeOuterParentheses(s) {', 
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
        code: '  let right = s.length - 1;', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `right=${stepData.right}` : ''
      },
      { 
        line: 4, 
        code: '', 
        active: stepData.currentLine === 4, 
        indent: 0,
        values: ''
      },
      { 
        line: 5, 
        code: '  // Find leftmost "(",', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: ''
      },
      { 
        line: 6, 
        code: '  while (left < right && s[left] !== "(") {', 
        active: stepData.currentLine === 6, 
        indent: 1,
        values: stepData.currentLine === 6 ? `${stepData.left < stepData.right && originalString[stepData.left] !== '(' ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 7, 
        code: '    left++;', 
        active: stepData.currentLine === 7, 
        indent: 2,
        values: stepData.currentLine === 7 ? `left=${stepData.left}` : ''
      },
      { 
        line: 8, 
        code: '  }', 
        active: stepData.currentLine === 8, 
        indent: 1,
        values: ''
      },
      { 
        line: 9, 
        code: '', 
        active: stepData.currentLine === 9, 
        indent: 0,
        values: ''
      },
      { 
        line: 10, 
        code: '  // Find rightmost ")",', 
        active: stepData.currentLine === 10, 
        indent: 1,
        values: ''
      },
      { 
        line: 11, 
        code: '  while (left < right && s[right] !== ")") {', 
        active: stepData.currentLine === 11, 
        indent: 1,
        values: stepData.currentLine === 11 ? `${stepData.left < stepData.right && originalString[stepData.right] !== ')' ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 12, 
        code: '    right--;', 
        active: stepData.currentLine === 12, 
        indent: 2,
        values: stepData.currentLine === 12 ? `right=${stepData.right}` : ''
      },
      { 
        line: 13, 
        code: '  }', 
        active: stepData.currentLine === 13, 
        indent: 1,
        values: ''
      },
      { 
        line: 14, 
        code: '', 
        active: stepData.currentLine === 14, 
        indent: 0,
        values: ''
      },
      { 
        line: 15, 
        code: '  // Validate outermost pair', 
        active: stepData.currentLine === 15, 
        indent: 1,
        values: ''
      },
      { 
        line: 16, 
        code: '  if (left < right && s[left] === "(" && s[right] === ")") {', 
        active: stepData.currentLine === 16, 
        indent: 1,
        values: stepData.currentLine === 16 ? `${stepData.left < stepData.right && originalString[stepData.left] === '(' && originalString[stepData.right] === ')' ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 17, 
        code: '    // Remove outermost pair', 
        active: stepData.currentLine === 17, 
        indent: 2,
        values: ''
      },
      { 
        line: 18, 
        code: '    let result = "";', 
        active: stepData.currentLine === 18, 
        indent: 2,
        values: stepData.currentLine === 18 ? `result=""` : ''
      },
      { 
        line: 19, 
        code: '    for (let i = 0; i < s.length; i++) {', 
        active: stepData.currentLine === 19, 
        indent: 2,
        values: ''
      },
      { 
        line: 20, 
        code: '      if (i !== left && i !== right) {', 
        active: stepData.currentLine === 20, 
        indent: 3,
        values: stepData.currentLine === 20 ? `i !== ${stepData.left} && i !== ${stepData.right}` : ''
      },
      { 
        line: 21, 
        code: '        result += s[i];', 
        active: stepData.currentLine === 21, 
        indent: 4,
        values: stepData.currentLine === 21 ? `result="${stepData.resultString}"` : ''
      },
      { 
        line: 22, 
        code: '      }', 
        active: stepData.currentLine === 22, 
        indent: 3,
        values: ''
      },
      { 
        line: 23, 
        code: '    }', 
        active: stepData.currentLine === 23, 
        indent: 2,
        values: ''
      },
      { 
        line: 24, 
        code: '    return result;', 
        active: stepData.currentLine === 24, 
        indent: 2,
        values: stepData.currentLine === 24 ? `return "${stepData.resultString}"` : ''
      },
      { 
        line: 25, 
        code: '  }', 
        active: stepData.currentLine === 25, 
        indent: 1,
        values: ''
      },
      { 
        line: 26, 
        code: '  return s; // No outermost pair found', 
        active: stepData.currentLine === 26, 
        indent: 2,
        values: stepData.currentLine === 26 ? `return "${stepData.inputString}"` : ''
      },
      { 
        line: 27, 
        code: '}', 
        active: stepData.currentLine === 27, 
        indent: 0,
        values: ''
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeft(step.left);
    setRight(step.right);
    setCurrentResult(step.resultString);
    setRemovedIndices([...step.removedChars]);
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
    setLeft(0);
    setRight(originalString.length - 1);
    setCurrentResult(originalString);
    setRemovedIndices([]);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Scissors}
        category="DSA · Stacks"
        title="Remove Outermost Parentheses"
        description="Remove the outermost layer of parentheses from a balanced string using two-pointer technique"
        colorTheme="orange"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Section 1: What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Scissors className="w-5 h-5" />
              What is Remove Outermost Parentheses?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given a balanced parentheses string, we need to remove the first opening parenthesis and the last closing parenthesis that form the outermost layer.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">"(()())(())"</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">"()())(())"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Examples */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6">
              Visual Examples of Removal
            </h4>
            
            {/* Example 1 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-green-700 dark:text-green-300">Example 1: Simple Case</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Basic</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-1 rounded">(</span>
                        <span className="text-slate-600 dark:text-slate-400">()()</span>
                        <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-1 rounded">)</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        ↓ Remove outermost pair
                      </div>
                      <div className="font-mono text-sm text-center mt-2">
                        <span className="text-slate-600 dark:text-slate-400">()()</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Remove the first "(" and last ")" that form the outermost layer.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Example 2: Nested Case</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">Nested</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-1 rounded">(</span>
                        <span className="text-purple-600 dark:text-purple-400">(())</span>
                        <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-1 rounded">)</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        ↓ Remove outermost pair only
                      </div>
                      <div className="font-mono text-sm text-center mt-2">
                        <span className="text-purple-600 dark:text-purple-400">(())</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Only the outermost pair is removed, inner nested structure remains.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-orange-700 dark:text-orange-300">Example 3: Complex Case</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Complex</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-1 rounded">(</span>
                        <span className="text-slate-600 dark:text-slate-400">()())(())</span>
                        <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-1 rounded">)</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        ↓ Remove outermost pair
                      </div>
                      <div className="font-mono text-sm text-center mt-2">
                        <span className="text-slate-600 dark:text-slate-400">()())(())</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Key Insight:</strong> Only the first "(" and last ")" are removed, regardless of internal structure.
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
              How the Two-Pointer Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize Two Pointers</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                    <div className="font-mono text-sm">left = 0 (start), right = n-1 (end)</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Find Leftmost Opening Bracket</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Search:</div>
                    <div className="font-mono text-sm">Move left pointer until s[left] === "("</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Find Rightmost Closing Bracket</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Search:</div>
                    <div className="font-mono text-sm">Move right pointer until s[right] === ")"</div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Build Result String</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Construction:</div>
                    <div className="font-mono text-sm">Include all characters except at left and right indices</div>
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
                <span>Two-pointer technique efficiently finds outermost boundaries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Only the first "(" and last ")" are removed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>String reconstruction preserves internal structure</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the two-pointer algorithm removes outermost parentheses</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">remove-outer-parentheses.js</span>
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
                      <span className="text-slate-500 dark:text-slate-400">Left:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Right:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].right}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Result:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].resultString}</span>
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
                      {steps[currentStep].action === 'calculate' && '📊 Calculating'}
                      {steps[currentStep].action === 'found' && '✅ Found!'}
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
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Left:</span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].left}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Right:</span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].right}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {/* Original String */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Original String:</div>
                  <div className="flex items-center justify-center gap-2">
                    {characters.map((char, idx) => {
                      const isLeftPointer = steps[currentStep].left === idx;
                      const isRightPointer = steps[currentStep].right === idx;
                      const isHighlighted = steps[currentStep].highlighted.includes(idx);
                      const isRemoved = steps[currentStep].removedChars.includes(idx);
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          <div
                            className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-300 ${
                              isRemoved
                                ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 border-red-500 line-through opacity-60'
                                : isHighlighted
                                ? 'bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 border-orange-500 scale-105'
                                : isLeftPointer
                                ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 border-blue-500 scale-105'
                                : isRightPointer
                                ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 border-green-500 scale-105'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 border-slate-300'
                            }`}
                          >
                            {char}
                          </div>
                          
                          <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                          {/* Pointer indicators */}
                          {isLeftPointer && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/80 px-2 py-0.5 rounded">
                              Left
                            </div>
                          )}
                          {isRightPointer && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/80 px-2 py-0.5 rounded">
                              Right
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Result String */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Result String:</div>
                  <div className="flex items-center justify-center">
                    <div className="font-mono text-lg text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg border border-orange-200 dark:border-orange-700">
                      {steps[currentStep].resultString || '(empty)'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
      <Card className="border-orange-200 dark:border-orange-800">
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
                We scan the string twice (once from left, once from right) and build the result in one pass.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We create a new string for the result, requiring O(n) additional space.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function removeOuterParentheses(s) {
  let left = 0;
  let right = s.length - 1;
  
  // Find leftmost "("
  while (left < right && s[left] !== "(") {
    left++;
  }
  
  // Find rightmost ")"
  while (left < right && s[right] !== ")") {
    right--;
  }
  
  // Validate outermost pair
  if (left < right && s[left] === "(" && s[right] === ")") {
    // Remove outermost pair
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (i !== left && i !== right) {
        result += s[i];
      }
    }
    return result;
  }
  
  return s; // No outermost pair found
}

// Example usage:
console.log(removeOuterParentheses("(()())(())")); // "()())(())"
console.log(removeOuterParentheses("()()"));       // "()"
console.log(removeOuterParentheses("(())"));       // "()"
console.log(removeOuterParentheses("abc"));         // "abc" (no change)`}
      />
    </div>
  );
}
