'use client';

import React, { useState, useEffect } from 'react';
import { Layers, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, RefreshCw, ChevronLeft, ChevronRight, ArrowRight, Braces } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Step {
  step: number;
  index: number;
  stack: string[];
  currentChar: string;
  isValid: boolean;
  currentLine: number;
  description: string;
  action: 'init' | 'scan' | 'push' | 'pop' | 'check' | 'valid' | 'invalid' | 'done';
  highlighted: number[];
}

export default function StacksValidParentheses() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [stack, setStack] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const inputString = "((){[]})";
  const parentheses = inputString.split('');

  const steps: Step[] = [
    // Initialization
    { 
      step: 1, 
      index: -1, 
      stack: [], 
      currentChar: '', 
      isValid: true, 
      currentLine: 1, 
      description: '📋 Initialize: Create empty stack to track opening brackets. Ready to validate string!',
      action: 'init',
      highlighted: []
    },
    { 
      step: 2, 
      index: -1, 
      stack: [], 
      currentChar: '', 
      isValid: true, 
      currentLine: 2, 
      description: '📋 Initialize: Set index = 0 to start scanning from beginning of string.',
      action: 'init',
      highlighted: []
    },

    // Scan '(' at index 0
    { 
      step: 3, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 0 < 6? YES! Continue scanning.',
      action: 'scan',
      highlighted: [0]
    },
    { 
      step: 4, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 4, 
      description: '📍 Access: Get current character = string[0] = "(" (opening bracket)',
      action: 'scan',
      highlighted: [0]
    },
    { 
      step: 5, 
      index: 0, 
      stack: [], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 5, 
      description: '🔍 Check: Is "(" an opening bracket? YES! Need to push to stack.',
      action: 'check',
      highlighted: [0]
    },
    { 
      step: 6, 
      index: 0, 
      stack: ['('], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 6, 
      description: '➕ Push: Add "(" to stack. Stack now tracks this opening bracket.',
      action: 'push',
      highlighted: [0]
    },

    // Scan '(' at index 1
    { 
      step: 7, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 1 < 6? YES! Continue scanning.',
      action: 'scan',
      highlighted: [1]
    },
    { 
      step: 8, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 4, 
      description: '📍 Access: Get current character = string[1] = "(" (opening bracket)',
      action: 'scan',
      highlighted: [1]
    },
    { 
      step: 9, 
      index: 1, 
      stack: ['('], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 5, 
      description: '🔍 Check: Is "(" an opening bracket? YES! Need to push to stack.',
      action: 'check',
      highlighted: [1]
    },
    { 
      step: 10, 
      index: 1, 
      stack: ['(', '('], 
      currentChar: '(', 
      isValid: true, 
      currentLine: 6, 
      description: '➕ Push: Add "(" to stack. Stack now has two opening brackets.',
      action: 'push',
      highlighted: [1]
    },

    // Scan ')' at index 2
    { 
      step: 11, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 2 < 6? YES! Continue scanning.',
      action: 'scan',
      highlighted: [2]
    },
    { 
      step: 12, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      isValid: true, 
      currentLine: 4, 
      description: '📍 Access: Get current character = string[2] = ")" (closing bracket)',
      action: 'scan',
      highlighted: [2]
    },
    { 
      step: 13, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      isValid: true, 
      currentLine: 7, 
      description: '🔍 Check: Is ")" a closing bracket? YES! Need to validate with stack.',
      action: 'check',
      highlighted: [2]
    },
    { 
      step: 14, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      isValid: true, 
      currentLine: 8, 
      description: '⚖️ Validate: Check if stack is empty? NO! Stack has "(" available.',
      action: 'check',
      highlighted: [2]
    },
    { 
      step: 15, 
      index: 2, 
      stack: ['(', '('], 
      currentChar: ')', 
      isValid: true, 
      currentLine: 9, 
      description: '🔍 Match: Does ")" match stack top "("? YES! Valid pair found.',
      action: 'check',
      highlighted: [2]
    },
    { 
      step: 16, 
      index: 2, 
      stack: ['('], 
      currentChar: ')', 
      isValid: true, 
      currentLine: 10, 
      description: '➖ Pop: Remove matching "(" from stack. Pair successfully matched!',
      action: 'pop',
      highlighted: [2]
    },

    // Scan '{' at index 3
    { 
      step: 17, 
      index: 3, 
      stack: ['('], 
      currentChar: '{', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 3 < 6? YES! Continue scanning.',
      action: 'scan',
      highlighted: [3]
    },
    { 
      step: 18, 
      index: 3, 
      stack: ['('], 
      currentChar: '{', 
      isValid: true, 
      currentLine: 4, 
      description: '📍 Access: Get current character = string[3] = "{" (opening bracket)',
      action: 'scan',
      highlighted: [3]
    },
    { 
      step: 19, 
      index: 3, 
      stack: ['('], 
      currentChar: '{', 
      isValid: true, 
      currentLine: 5, 
      description: '🔍 Check: Is "{" an opening bracket? YES! Need to push to stack.',
      action: 'check',
      highlighted: [3]
    },
    { 
      step: 20, 
      index: 3, 
      stack: ['(', '{'], 
      currentChar: '{', 
      isValid: true, 
      currentLine: 6, 
      description: '➕ Push: Add "{" to stack. Stack now tracks mixed opening brackets.',
      action: 'push',
      highlighted: [3]
    },

    // Scan '[' at index 4
    { 
      step: 21, 
      index: 4, 
      stack: ['(', '{'], 
      currentChar: '[', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 4 < 6? YES! Continue scanning.',
      action: 'scan',
      highlighted: [4]
    },
    { 
      step: 22, 
      index: 4, 
      stack: ['(', '{'], 
      currentChar: '[', 
      isValid: true, 
      currentLine: 4, 
      description: '📍 Access: Get current character = string[4] = "[" (opening bracket)',
      action: 'scan',
      highlighted: [4]
    },
    { 
      step: 23, 
      index: 4, 
      stack: ['(', '{'], 
      currentChar: '[', 
      isValid: true, 
      currentLine: 5, 
      description: '🔍 Check: Is "[" an opening bracket? YES! Need to push to stack.',
      action: 'check',
      highlighted: [4]
    },
    { 
      step: 24, 
      index: 4, 
      stack: ['(', '{', '['], 
      currentChar: '[', 
      isValid: true, 
      currentLine: 6, 
      description: '➕ Push: Add "[" to stack. Stack now has three different opening brackets.',
      action: 'push',
      highlighted: [4]
    },

    // Scan ']' at index 5
    { 
      step: 25, 
      index: 5, 
      stack: ['(', '{', '['], 
      currentChar: ']', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 5 < 6? YES! Continue scanning.',
      action: 'scan',
      highlighted: [5]
    },
    { 
      step: 26, 
      index: 5, 
      stack: ['(', '{', '['], 
      currentChar: ']', 
      isValid: true, 
      currentLine: 4, 
      description: '📍 Access: Get current character = string[5] = "]" (closing bracket)',
      action: 'scan',
      highlighted: [5]
    },
    { 
      step: 27, 
      index: 5, 
      stack: ['(', '{', '['], 
      currentChar: ']', 
      isValid: true, 
      currentLine: 7, 
      description: '🔍 Check: Is "]" a closing bracket? YES! Need to validate with stack.',
      action: 'check',
      highlighted: [5]
    },
    { 
      step: 28, 
      index: 5, 
      stack: ['(', '{', '['], 
      currentChar: ']', 
      isValid: true, 
      currentLine: 8, 
      description: '⚖️ Validate: Check if stack is empty? NO! Stack has "[" available.',
      action: 'check',
      highlighted: [5]
    },
    { 
      step: 29, 
      index: 5, 
      stack: ['(', '{', '['], 
      currentChar: ']', 
      isValid: true, 
      currentLine: 9, 
      description: '🔍 Match: Does "]" match stack top "["? YES! Valid pair found.',
      action: 'check',
      highlighted: [5]
    },
    { 
      step: 30, 
      index: 5, 
      stack: ['(', '{'], 
      currentChar: ']', 
      isValid: true, 
      currentLine: 10, 
      description: '➖ Pop: Remove matching "[" from stack. Pair successfully matched!',
      action: 'pop',
      highlighted: [5]
    },

    // End of string - final validation
    { 
      step: 31, 
      index: 6, 
      stack: ['(', '{'], 
      currentChar: '', 
      isValid: true, 
      currentLine: 3, 
      description: '🔄 Scan: Check loop condition: index < string.length? 6 < 6? NO! End of string reached.',
      action: 'scan',
      highlighted: []
    },
    { 
      step: 32, 
      index: 6, 
      stack: ['(', '{'], 
      currentChar: '', 
      isValid: true, 
      currentLine: 12, 
      description: '🎯 Final Check: Loop complete. Now check if stack is empty for final validation.',
      action: 'done',
      highlighted: []
    },
    { 
      step: 33, 
      index: 6, 
      stack: ['(', '{'], 
      currentChar: '', 
      isValid: false, 
      currentLine: 13, 
      description: '❌ Invalid: Stack is NOT empty! Contains unmatched "(" and "{". String is INVALID!',
      action: 'invalid',
      highlighted: []
    },
    { 
      step: 34, 
      index: 6, 
      stack: ['(', '{'], 
      currentChar: '', 
      isValid: false, 
      currentLine: 14, 
      description: '🏁 Result: Return false. String "((){[]})" has unmatched opening brackets.',
      action: 'done',
      highlighted: []
    }
  ];

  const validParenthesesCode = `function isValidParentheses(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    // If it's an opening bracket, push to stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
    // If it's a closing bracket, check for match
    else if (char === ')' || char === '}' || char === ']') {
      // Stack empty? No matching opening bracket
      if (stack.length === 0) {
        return false;
      }
      
      const lastOpen = stack.pop();
      
      // Check if brackets match
      if (
        (char === ')' && lastOpen !== '(') ||
        (char === '}' && lastOpen !== '{') ||
        (char === ']' && lastOpen !== '[')
      ) {
        return false;
      }
    }
  }
  
  // Valid if all brackets were matched (stack empty)
  return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("()[]{}"));    // true
console.log(isValidParentheses("(]"));        // false
console.log(isValidParentheses("([)]"));      // false
console.log(isValidParentheses("{[]}"));      // true
console.log(isValidParentheses("((){[]})"));  // false (unmatched brackets)
console.log(isValidParentheses(""));          // true (empty string)`;

  const getCodeWithValues = (stepData: Step) => {
    return [
      { line: 1, code: 'function isValidParentheses(s) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  const stack = [];', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `stack: [${stepData.stack.join(', ')}]` : '' },
      { line: 3, code: '', active: false, indent: 0 },
      { line: 4, code: '  for (let i = 0; i < s.length; i++) {', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine === 3 ? `i: ${stepData.index}, s.length: ${parentheses.length}` : '' },
      { line: 5, code: '    const char = s[i];', active: stepData.currentLine === 4, indent: 2, values: stepData.currentLine === 4 && stepData.currentChar ? `char: '${stepData.currentChar}'` : '' },
      { line: 6, code: '', active: false, indent: 0 },
      { line: 7, code: '    // If it\'s an opening bracket, push to stack', active: false, indent: 2 },
      { line: 8, code: '    if (char === \'(\' || char === \'{\' || char === \'[\') {', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 && stepData.currentChar && '({['.includes(stepData.currentChar) ? 'true' : 'false' },
      { line: 9, code: '      stack.push(char);', active: stepData.currentLine === 6, indent: 3, values: stepData.currentLine === 6 && stepData.action === 'push' ? `stack.push('${stepData.currentChar}')` : '' },
      { line: 10, code: '    }', active: false, indent: 2 },
      { line: 11, code: '    // If it\'s a closing bracket, check for match', active: false, indent: 2 },
      { line: 12, code: '    else if (char === \')\' || char === \'}\' || char === \']\') {', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 && stepData.currentChar && ')}]'.includes(stepData.currentChar) ? 'true' : 'false' },
      { line: 13, code: '      // Stack empty? No matching opening bracket', active: false, indent: 3 },
      { line: 14, code: '      if (stack.length === 0) {', active: stepData.currentLine === 8, indent: 3, values: stepData.currentLine === 8 ? `stack.length: ${stepData.stack.length}` : '' },
      { line: 15, code: '        return false;', active: stepData.currentLine === 8 && stepData.stack.length === 0 ? 'return false' : '', indent: 4 },
      { line: 16, code: '      }', active: false, indent: 3 },
      { line: 17, code: '', active: false, indent: 0 },
      { line: 18, code: '      const lastOpen = stack.pop();', active: stepData.currentLine === 10, indent: 3, values: stepData.currentLine === 10 && stepData.action === 'pop' ? `lastOpen: '${stepData.stack[stepData.stack.length] || ''}'` : '' },
      { line: 19, code: '', active: false, indent: 0 },
      { line: 20, code: '      // Check if brackets match', active: false, indent: 3 },
      { line: 21, code: '      if (', active: false, indent: 3 },
      { line: 22, code: '        (char === \')\' && lastOpen !== \'(\') ||', active: stepData.currentLine === 9, indent: 4, values: stepData.currentLine === 9 && stepData.currentChar === ')' ? `')' !== '(' = false` : '' },
      { line: 23, code: '        (char === \'}\' && lastOpen !== \'{\') ||', active: false, indent: 4 },
      { line: 24, code: '        (char === \']\' && lastOpen !== \'[\')', active: false, indent: 4 },
      { line: 25, code: '      ) {', active: false, indent: 3 },
      { line: 26, code: '        return false;', active: false, indent: 4 },
      { line: 27, code: '      }', active: false, indent: 3 },
      { line: 28, code: '    }', active: false, indent: 2 },
      { line: 29, code: '  }', active: false, indent: 1 },
      { line: 30, code: '', active: false, indent: 0 },
      { line: 31, code: '  // Valid if all brackets were matched (stack empty)', active: false, indent: 1 },
      { line: 32, code: '  return stack.length === 0;', active: stepData.currentLine === 13, indent: 1, values: stepData.currentLine === 13 ? `${stepData.stack.length} === 0 = ${stepData.stack.length === 0}` : '' },
      { line: 33, code: '}', active: stepData.currentLine === 14, indent: 0 }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStack([...step.stack]);
    setCurrentIndex(step.index);
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
    setStack([]);
    setCurrentIndex(0);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Braces}
        category="DSA · Stacks"
        title="Valid Parentheses"
        description="Check if parentheses, brackets, and braces are properly balanced and nested using stack data structure"
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Beginner Friendly', variant: 'secondary' }
        ]}
      />

      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Stack Application', 'String Processing', 'Validation'].map((badge, index) => (
          <Badge
            key={`${badge}-${index}`}
            variant={index === 0 ? 'secondary' : 'outline'}
            className="text-sm"
          >
            {badge}
          </Badge>
        ))}
      </div>

      {/* What You'll Learn */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-slate-600" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Stack Operations</h4>
                  <p className="text-sm text-muted-foreground">Push opening brackets and pop for matching pairs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bracket Matching</h4>
                  <p className="text-sm text-muted-foreground">Validate closing brackets against stack top</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Edge Cases</h4>
                  <p className="text-sm text-muted-foreground">Handle empty strings and unmatched brackets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Time & Space Complexity</h4>
                  <p className="text-sm text-muted-foreground">Analyze O(n) time and O(n) space requirements</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Problem Statement */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding Valid Parentheses
          </CardTitle>
          <CardDescription>Learn to validate bracket sequences using stack data structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are Valid Parentheses */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Braces className="w-5 h-5" />
              What are Valid Parentheses?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                A string of parentheses is valid if every opening bracket has a corresponding closing bracket of the same type, and they are properly nested.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT EXAMPLE</div>
                  <div className="font-mono text-lg text-slate-900 dark:text-slate-100">"()[]{}"</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-900 dark:text-green-100 font-bold">true</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Examples */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-6">
              Validation Rules Explained with Examples
            </h4>
            
            {/* Rule 1: Basic Matching */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-green-700 dark:text-green-300">Rule 1: Every opening needs matching closing</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Basic</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-lg text-center mb-2">"(){}[]"</div>
                      <div className="flex items-center justify-center gap-4 text-xs">
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">()</span> ✓
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">{'{}'}</span> ✓
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">[]</span> ✓
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Each opening bracket has a corresponding closing bracket of the same type.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2: Correct Order */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Rule 2: Brackets must close in correct order</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">Order</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-lg text-center mb-2">"({[]})"</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-slate-600 dark:text-slate-400">Nesting order:</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">(</span>
                          <span className="bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded">{'{'}</span>
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">[</span>
                          <span className="text-slate-500">→</span>
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">]</span>
                          <span className="bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded">{'}'}</span>
                          <span className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Brackets close in reverse order of opening (LIFO - Last In, First Out).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 3: Invalid Cases */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-red-700 dark:text-red-300">Rule 3: Mismatched brackets are invalid</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">Invalid</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-lg text-center mb-2">"(]"</div>
                      <div className="flex items-center justify-center gap-4 text-xs">
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">(</span>
                        </span>
                        <span className="text-red-500">✗</span>
                        <span className="text-slate-600 dark:text-slate-400">
                          <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">]</span>
                        </span>
                        <span className="text-red-600 dark:text-red-400">Mismatch!</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explanation:</strong> Opening "(" expects closing ")", not "]".
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
                    <span className="font-semibold text-orange-700 dark:text-orange-300">Complex Example: "((){[]})"</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Step-by-Step</span>
                  </div>
                  <div className="space-y-4">
                    {/* Step breakdown */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">(</span>
                          <span className="text-slate-500">→ push to stack</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">(</span>
                          <span className="text-slate-500">→ push to stack</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">)</span>
                          <span className="text-slate-500">→ pop matching (</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded">{'{'}</span>
                          <span className="text-slate-500">→ push to stack</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">[</span>
                          <span className="text-slate-500">→ push to stack</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">]</span>
                          <span className="text-slate-500">→ pop matching [</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">7</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">{'}'}</span>
                          <span className="text-slate-500">→ pop matching {'{'}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">8</div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">)</span>
                          <span className="text-slate-500">→ pop matching (</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Stack empty →</span>
                          <span className="font-bold text-green-600 dark:text-green-400">VALID!</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="text-purple-600 dark:text-purple-400">(</span>
                        <span className="text-purple-600 dark:text-purple-400">(</span>
                        <span className="text-green-600 dark:text-green-400">)</span>
                        <span className="text-blue-600 dark:text-blue-400">{'{'}</span>
                        <span className="text-green-600 dark:text-green-400">[</span>
                        <span className="text-green-600 dark:text-green-400">]</span>
                        <span className="text-green-600 dark:text-green-400">{'}'}</span>
                        <span className="text-green-600 dark:text-green-400">)</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
                        Opening brackets
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-3 mr-1"></span>
                        Closing brackets
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Key Insight:</strong> Stack ensures LIFO order - last bracket opened must be first one closed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
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
                  <div className="font-semibold mb-2">Initialize Stack</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Create empty stack to track opening brackets:</div>
                    <div className="font-mono text-sm">const stack = [];</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Scan String</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Process each character:</div>
                    <div className="font-mono text-sm">for (let i = 0; i &lt; s.length; i++)</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Handle Opening Brackets</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Push opening brackets to stack:</div>
                    <div className="font-mono text-sm">if (char === &apos;(&apos; || char === &apos;&#123;&apos; || char === &apos;[&apos;) stack.push(char);</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Handle Closing Brackets</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Check if closing bracket matches stack top:</div>
                    <div className="font-mono text-sm">const lastOpen = stack.pop(); // Match and remove</div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Final Validation</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Valid if stack is empty (all matched):</div>
                    <div className="font-mono text-sm">return stack.length === 0;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>LIFO Principle: Stack ensures Last-In-First-Out bracket matching</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Nesting Order: Brackets must close in reverse order of opening</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Edge Cases: Empty string is valid, unmatched brackets make it invalid</span>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the stack algorithm validates parentheses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Control Buttons */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-3 justify-center">
              <Button
                onClick={isAnimating ? () => setIsAnimating(false) : handlePlay}
                disabled={isAnimating}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                {isAnimating ? 'Playing...' : 'Play Animation'}
              </Button>
              <Button
                onClick={handleReset}
                disabled={isAnimating}
                variant="outline"
                className="border-emerald-300 dark:border-emerald-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>

            {/* Animation Speed Controls */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Animation Speed:</span>
              {(['slow', 'normal', 'fast'] as const).map((speed) => (
                <label key={speed} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="speed"
                    value={speed}
                    checked={animationSpeed === speed}
                    onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                    disabled={isAnimating}
                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm capitalize">{speed}</span>
                </label>
              ))}
            </div>

            {/* Step Navigation */}
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0 || isAnimating}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
                <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                  Step {currentStep + 1} / {steps.length}
                </span>
              </div>
              
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1 || isAnimating}
                variant="outline"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Code Viewer with Variable Values */}
          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">valid-parentheses.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code Lines */}
              <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                        : ''
                    }`}
                  >
                    {/* Line Number */}
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    {/* Code with inline values */}
                    <code className="flex-1">
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

              {/* Variable State Panel */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">stack:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">[{stack.join(', ')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">index:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentIndex}</span>
                    </div>
                    {currentStepData.currentChar && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">char:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">'{currentStepData.currentChar}'</span>
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Step {currentStep + 1} / {steps.length}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description Card */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 bg-gradient-to-br ${
              currentStepData.action === 'invalid' 
                ? 'from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-950/40 border-red-300 dark:border-red-700' 
                : 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/40 border-green-300 dark:border-green-700'
            } shadow-sm`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${
                    currentStepData.action === 'invalid' ? 'bg-red-600' : 'bg-green-600'
                  }`}>
                    {currentStepData.action === 'invalid' ? (
                      <AlertCircle className="w-6 h-6 text-white" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${
                      currentStepData.action === 'invalid' 
                        ? 'text-red-700 dark:text-red-400' 
                        : 'text-green-700 dark:text-green-400'
                    }`}>
                      Step {currentStepData.step} of {steps.length}
                    </div>
                    <div className={`text-sm font-medium mt-0.5 ${
                      currentStepData.action === 'invalid' 
                        ? 'text-red-900 dark:text-red-100' 
                        : 'text-green-900 dark:text-green-100'
                    }`}>
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'scan' && '🔄 Scanning String'}
                      {currentStepData.action === 'push' && '➕ Push to Stack'}
                      {currentStepData.action === 'pop' && '➖ Pop from Stack'}
                      {currentStepData.action === 'check' && '🔍 Checking Bracket'}
                      {currentStepData.action === 'valid' && '✅ Valid Match'}
                      {currentStepData.action === 'invalid' && '❌ Invalid Match'}
                      {currentStepData.action === 'done' && '🎯 Final Result'}
                    </div>
                  </div>
                </div>
                <p className={`text-base leading-relaxed pl-14 ${
                  currentStepData.action === 'invalid' 
                    ? 'text-red-900 dark:text-red-50' 
                    : 'text-green-900 dark:text-green-50'
                }`}>
                  {currentStepData.description}
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
                    <span className="text-slate-500 dark:text-slate-400">Stack:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{stack.length}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {/* String visualization with better styling */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {parentheses.map((char, idx) => {
                    const isCurrent = currentStepData.index === idx;
                    const isHighlighted = currentStepData.highlighted.includes(idx);
                    const isProcessed = idx < currentStepData.index;
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Value Box with enhanced styling */}
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 transition-all duration-300 relative ${
                            isCurrent
                              ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white border-emerald-500 scale-105 ring-4 ring-emerald-300 shadow-lg'
                              : isHighlighted
                              ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white border-blue-500 scale-105 ring-4 ring-blue-300 shadow-lg'
                              : isProcessed
                              ? 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600 border-slate-400 scale-95 opacity-70'
                              : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 border-slate-300 hover:scale-105 transition-transform'
                          }`}
                        >
                          {char}
                        </div>
                        
                        {/* Index */}
                        <span className={`text-xs font-mono transition-colors duration-500 ${
                          isCurrent ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 
                          isProcessed ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'
                        }`}>
                          [{idx}]
                        </span>

                        {/* Enhanced Current Indicator */}
                        {isCurrent && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-3 py-1.5 rounded-full border-2 border-emerald-500 shadow-lg">
                              Processing
                            </div>
                            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-emerald-500"></div>
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
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-blue-600 dark:text-blue-400">Size: {stack.length}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 min-h-[100px] relative">
                      {stack.length === 0 ? (
                        <div className="text-slate-500 italic text-sm bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-lg">
                          Empty Stack
                        </div>
                      ) : (
                        <div className="flex items-end gap-2">
                          {[...stack].reverse().map((item, index) => (
                            <div
                              key={index}
                              className="relative group"
                            >
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${
                                  index === 0 
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
                              
                              {/* Top indicator */}
                              {index === 0 && (
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1 rounded shadow-md whitespace-nowrap">
                                  TOP
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
                    {currentStepData.action === 'push' && (
                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Push Operation
                        </div>
                      </div>
                    )}
                    
                    {currentStepData.action === 'pop' && (
                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Pop Operation
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Complexity Analysis
          </CardTitle>
          <CardDescription>Understanding the time and space complexity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">⏰ Time Complexity</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Best Case:</span>
                    <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Case:</span>
                    <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Worst Case:</span>
                    <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  We scan each character exactly once
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">💾 Space Complexity</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Best Case:</span>
                    <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(1)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Case:</span>
                    <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Worst Case:</span>
                    <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  Stack stores up to n opening brackets
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Implementation */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>
            Full JavaScript implementation of valid parentheses validation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet 
            code={validParenthesesCode}
            language="javascript"
            title="Valid Parentheses Implementation"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Ready for More */}
      <Alert className="border-green-200 dark:border-green-800">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Ready for More?</AlertTitle>
        <AlertDescription>
          Try implementing this with different approaches like using a hash map for bracket pairs or handling additional types of brackets!
        </AlertDescription>
      </Alert>
    </div>
  );
}
