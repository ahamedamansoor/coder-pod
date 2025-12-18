'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Brackets, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight, ArrowDown, ArrowUp } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ValidParentheses() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stack, setStack] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [matchedPair, setMatchedPair] = useState<{open: string, close: string} | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testString = "({[]})";
  
  const steps = [
    { 
      step: 1,
      stack: [],
      index: -1,
      char: '',
      valid: true,
      matched: null,
      currentLine: 2,
      description: '📋 Initialize: Validate "({[]})" - check if all brackets are properly opened and closed in correct order.'
    },
    { 
      step: 2,
      stack: [],
      index: -1,
      char: '',
      valid: true,
      matched: null,
      currentLine: 3,
      description: '📚 Create Stack: Initialize empty stack to track opening brackets. Stack will help match pairs.'
    },
    { 
      step: 3,
      stack: [],
      index: 0,
      char: '(',
      valid: true,
      matched: null,
      currentLine: 5,
      description: '🔁 Loop Start: i = 0. Process first character: "(" (opening parenthesis).'
    },
    { 
      step: 4,
      stack: [],
      index: 0,
      char: '(',
      valid: true,
      matched: null,
      currentLine: 6,
      description: '📝 Get Character: char = s[0] = "(". Now check if it\'s opening or closing bracket.'
    },
    { 
      step: 5,
      stack: [],
      index: 0,
      char: '(',
      valid: true,
      matched: null,
      currentLine: 8,
      description: '❓ Check Type: Is "(" an opening bracket? Yes! It\'s one of (, {, [.'
    },
    { 
      step: 6,
      stack: ['('],
      index: 0,
      char: '(',
      valid: true,
      matched: null,
      currentLine: 9,
      description: '➕ Push to Stack: stack.push("("). Stack now has 1 element. Wait for matching closing bracket.'
    },
    { 
      step: 7,
      stack: ['('],
      index: 1,
      char: '{',
      valid: true,
      matched: null,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 1. Process next character: "{" (opening curly brace).'
    },
    { 
      step: 8,
      stack: ['('],
      index: 1,
      char: '{',
      valid: true,
      matched: null,
      currentLine: 8,
      description: '❓ Check Type: Is "{" an opening bracket? Yes! Another opening bracket.'
    },
    { 
      step: 9,
      stack: ['(', '{'],
      index: 1,
      char: '{',
      valid: true,
      matched: null,
      currentLine: 9,
      description: '➕ Push to Stack: stack.push("{"). Stack now has 2 elements: ["(", "{"].'
    },
    { 
      step: 10,
      stack: ['(', '{'],
      index: 2,
      char: '[',
      valid: true,
      matched: null,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 2. Process next character: "[" (opening square bracket).'
    },
    { 
      step: 11,
      stack: ['(', '{'],
      index: 2,
      char: '[',
      valid: true,
      matched: null,
      currentLine: 8,
      description: '❓ Check Type: Is "[" an opening bracket? Yes! Third opening bracket in a row.'
    },
    { 
      step: 12,
      stack: ['(', '{', '['],
      index: 2,
      char: '[',
      valid: true,
      matched: null,
      currentLine: 9,
      description: '➕ Push to Stack: stack.push("["). Stack now has 3 elements: ["(", "{", "["].'
    },
    { 
      step: 13,
      stack: ['(', '{', '['],
      index: 3,
      char: ']',
      valid: true,
      matched: null,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 3. Process next character: "]" (closing square bracket).'
    },
    { 
      step: 14,
      stack: ['(', '{', '['],
      index: 3,
      char: ']',
      valid: true,
      matched: null,
      currentLine: 11,
      description: '❓ Check Type: Is "]" a closing bracket? Yes! Now we need to match it with stack top.'
    },
    { 
      step: 15,
      stack: ['(', '{', '['],
      index: 3,
      char: ']',
      valid: true,
      matched: null,
      currentLine: 12,
      description: '❓ Check Stack: Is stack empty? No! Stack has 3 elements. Can try to match.'
    },
    { 
      step: 16,
      stack: ['(', '{', '['],
      index: 3,
      char: ']',
      valid: true,
      matched: null,
      currentLine: 15,
      description: '👀 Peek Stack: top = stack[stack.length-1] = "[". Check if "[" matches with "]".'
    },
    { 
      step: 17,
      stack: ['(', '{', '['],
      index: 3,
      char: ']',
      valid: true,
      matched: null,
      currentLine: 16,
      description: '✅ Check Match: Does "[" match "]"? Yes! Valid pair. They match correctly.'
    },
    { 
      step: 18,
      stack: ['(', '{'],
      index: 3,
      char: ']',
      valid: true,
      matched: {open: '[', close: ']'},
      currentLine: 17,
      description: '🗑️ Pop Stack: stack.pop() removes "[". Matched pair: [ ] ✓. Stack now: ["(", "{"].'
    },
    { 
      step: 19,
      stack: ['(', '{'],
      index: 4,
      char: '}',
      valid: true,
      matched: null,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 4. Process next character: "}" (closing curly brace).'
    },
    { 
      step: 20,
      stack: ['(', '{'],
      index: 4,
      char: '}',
      valid: true,
      matched: null,
      currentLine: 11,
      description: '❓ Check Type: Is "}" a closing bracket? Yes! Match with stack top.'
    },
    { 
      step: 21,
      stack: ['(', '{'],
      index: 4,
      char: '}',
      valid: true,
      matched: null,
      currentLine: 15,
      description: '👀 Peek Stack: top = "{". Check if "{" matches with "}".'
    },
    { 
      step: 22,
      stack: ['(', '{'],
      index: 4,
      char: '}',
      valid: true,
      matched: null,
      currentLine: 16,
      description: '✅ Check Match: Does "{" match "}"? Yes! Valid pair. They match correctly.'
    },
    { 
      step: 23,
      stack: ['('],
      index: 4,
      char: '}',
      valid: true,
      matched: {open: '{', close: '}'},
      currentLine: 17,
      description: '🗑️ Pop Stack: stack.pop() removes "{". Matched pair: { } ✓. Stack now: ["("].'
    },
    { 
      step: 24,
      stack: ['('],
      index: 5,
      char: ')',
      valid: true,
      matched: null,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 5. Process last character: ")" (closing parenthesis).'
    },
    { 
      step: 25,
      stack: ['('],
      index: 5,
      char: ')',
      valid: true,
      matched: null,
      currentLine: 11,
      description: '❓ Check Type: Is ")" a closing bracket? Yes! Match with stack top.'
    },
    { 
      step: 26,
      stack: ['('],
      index: 5,
      char: ')',
      valid: true,
      matched: null,
      currentLine: 15,
      description: '👀 Peek Stack: top = "(". Check if "(" matches with ")".'
    },
    { 
      step: 27,
      stack: ['('],
      index: 5,
      char: ')',
      valid: true,
      matched: null,
      currentLine: 16,
      description: '✅ Check Match: Does "(" match ")"? Yes! Valid pair. They match correctly.'
    },
    { 
      step: 28,
      stack: [],
      index: 5,
      char: ')',
      valid: true,
      matched: {open: '(', close: ')'},
      currentLine: 17,
      description: '🗑️ Pop Stack: stack.pop() removes "(". Matched pair: ( ) ✓. Stack now empty!'
    },
    { 
      step: 29,
      stack: [],
      index: 6,
      char: '',
      valid: true,
      matched: null,
      currentLine: 23,
      description: '🔚 Loop End: i = 6, but 6 < 6 is false. Exit loop. All characters processed!'
    },
    { 
      step: 30,
      stack: [],
      index: -1,
      char: '',
      valid: true,
      matched: null,
      currentLine: 25,
      description: '✅ Check Final: Is stack empty? Yes! All brackets matched. Stack length = 0.'
    },
    { 
      step: 31,
      stack: [],
      index: -1,
      char: '',
      valid: true,
      matched: null,
      currentLine: 26,
      description: '🎉 Return Result: return true. String "({[]})" is valid! All brackets properly matched!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const showString = `s = "${testString}"`;
    const showStack = `stack = [${stepData.stack.map(c => `"${c}"`).join(', ')}]`;
    const showIndex = stepData.index >= 0 ? `i = ${stepData.index}` : '';
    const showChar = stepData.char ? `char = "${stepData.char}"` : '';
    const showTop = stepData.stack.length > 0 ? `top = "${stepData.stack[stepData.stack.length - 1]}"` : 'top = undefined';
    
    return [
      { line: 1, code: 'function isValid(s) {', active: stepData.currentLine === 1, indent: 0, values: showString },
      { line: 2, code: `  const stack = [];`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: showStack },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  for (let i = 0; i < s.length; i++) {`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: showIndex },
      { line: 5, code: `    const char = s[i];`, active: stepData.currentLine === 6, indent: 2, values: showChar },
      { line: 6, code: `    `, active: false, indent: 2 },
      { line: 7, code: `    if (char === '(' || char === '{' || char === '[') {`, active: stepData.currentLine === 8, indent: 2, values: stepData.char ? `"${stepData.char}" is opening? ${stepData.currentLine === 8 && ['(', '{', '['].includes(stepData.char) ? 'Yes' : 'No'}` : '' },
      { line: 8, code: `      stack.push(char);`, active: stepData.currentLine === 9, indent: 3, values: stepData.currentLine === 9 ? `push "${stepData.char}"` : '' },
      { line: 9, code: `    } else {`, active: stepData.currentLine === 11, indent: 2 },
      { line: 10, code: `      if (stack.length === 0) return false;`, active: stepData.currentLine === 12, indent: 3, values: stepData.currentLine === 12 ? `empty? ${stepData.stack.length === 0 ? 'Yes' : 'No'}` : '' },
      { line: 11, code: `      `, active: false, indent: 3 },
      { line: 12, code: `      const top = stack[stack.length - 1];`, active: stepData.currentLine === 15, indent: 3, values: stepData.currentLine === 15 ? showTop : '' },
      { line: 13, code: `      const matches = (top === '(' && char === ')') ||`, active: stepData.currentLine === 16, indent: 3 },
      { line: 14, code: `                      (top === '{' && char === '}') ||`, active: stepData.currentLine === 16, indent: 3 },
      { line: 15, code: `                      (top === '[' && char === ']');`, active: stepData.currentLine === 16, indent: 3, values: stepData.currentLine === 16 && stepData.char ? `match? Yes` : '' },
      { line: 16, code: `      `, active: false, indent: 3 },
      { line: 17, code: `      if (!matches) return false;`, active: stepData.currentLine === 17, indent: 3 },
      { line: 18, code: `      stack.pop();`, active: stepData.currentLine === 17, indent: 3, values: stepData.matched ? `pop "${stepData.matched.open}"` : '' },
      { line: 19, code: `    }`, active: false, indent: 2 },
      { line: 20, code: `  }`, active: false, indent: 1 },
      { line: 21, code: `  `, active: false, indent: 1 },
      { line: 22, code: `  return stack.length === 0;`, active: stepData.currentLine === 25 || stepData.currentLine === 26, indent: 1, values: stepData.currentLine >= 25 ? `${stepData.stack.length} === 0? ${stepData.stack.length === 0 ? 'true' : 'false'}` : '' },
      { line: 23, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStack(step.stack);
    setCurrentIndex(step.index);
    setCurrentChar(step.char);
    setIsValid(step.valid);
    setMatchedPair(step.matched);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedDelay = animationSpeed === 'slow' ? 2000 : animationSpeed === 'fast' ? 500 : 1000;

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 1500);
        }
      }, index * speedDelay);
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
    setIsAnimating(false);
    goToStep(0);
  };

  const getBracketColor = (bracket: string) => {
    if (bracket === '(' || bracket === ')') return 'purple';
    if (bracket === '{' || bracket === '}') return 'blue';
    if (bracket === '[' || bracket === ']') return 'orange';
    return 'gray';
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Brackets}
        category="DSA · Strings"
        title="Valid Parentheses"
        description="Learn how to validate if brackets are properly opened and closed using a stack"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(n)', 'Space: O(n)', 'Stack Pattern'].map((badge, index) => (
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
            <Lightbulb className="w-6 h-6 text-amber-600" />
            What You&apos;ll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Stack Data Structure</p>
                <p className="text-sm text-muted-foreground">LIFO (Last In First Out)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Bracket Matching</p>
                <p className="text-sm text-muted-foreground">Pair opening with closing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Push and Pop Operations</p>
                <p className="text-sm text-muted-foreground">Add and remove from stack</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Edge Case Handling</p>
                <p className="text-sm text-muted-foreground">Empty stack and mismatches</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            The Problem
          </CardTitle>
          <CardDescription>Validate bracket sequences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given a string s containing just the characters &apos;(&apos;, &apos;)&apos;, &apos;&#123;&apos;, &apos;&#125;&apos;, &apos;[&apos; and &apos;]&apos;, determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <Brackets className="w-5 h-5" /> Valid vs Invalid Examples
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300">✅ Valid: &quot;(&#123;[]&#125;)&quot;</p>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex gap-1 mb-2">
                  {['(', '{', '[', ']', '}', ')'].map((char, idx) => {
                    const color = getBracketColor(char);
                    return (
                      <div key={idx} className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/40 border-2 border-${color}-500 rounded flex items-center justify-center font-bold text-lg`}>
                        {char}
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-green-600 dark:text-green-400">All brackets properly matched and closed in correct order</p>
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-red-500">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300">❌ Invalid: &quot;([)]&quot;</p>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex gap-1 mb-2">
                  {['(', '[', ')', ']'].map((char, idx) => {
                    const color = getBracketColor(char);
                    return (
                      <div key={idx} className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/40 border-2 ${idx === 2 ? 'border-red-500 ring-2 ring-red-400' : `border-${color}-500`} rounded flex items-center justify-center font-bold text-lg`}>
                        {char}
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-red-600 dark:text-red-400">Wrong order: &apos;(&apos; closed by &apos;]&apos; instead of &apos;)&apos;</p>
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-red-500">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300">❌ Invalid: &quot;((&quot;</p>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex gap-1 mb-2">
                  {['(', '('].map((char, idx) => {
                    const color = getBracketColor(char);
                    return (
                      <div key={idx} className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/40 border-2 border-${color}-500 rounded flex items-center justify-center font-bold text-lg`}>
                        {char}
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-red-600 dark:text-red-400">Unclosed brackets: missing closing parentheses</p>
              </div>
            </div>
          </div>

          {/* Stack Concept */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📚</span> How Stack Works (LIFO)
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded border border-cyan-300 dark:border-cyan-600">
                <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4" /> Push (Add to top)
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">See &apos;(&apos;</span>
                    <span className="text-cyan-600">→</span>
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 border-2 border-purple-500 rounded flex items-center justify-center font-bold">(</div>
                    <span className="text-xs text-cyan-600">Push to stack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">See &apos;&#123;&apos;</span>
                    <span className="text-cyan-600">→</span>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 border-2 border-blue-500 rounded flex items-center justify-center font-bold">{'{'}</div>
                    <span className="text-xs text-cyan-600">Push to stack</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded border border-cyan-300 dark:border-cyan-600">
                <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4" /> Pop (Remove from top)
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">See &apos;)&apos;</span>
                    <span className="text-cyan-600">→</span>
                    <span className="text-xs text-cyan-600">Match with top</span>
                    <span className="text-cyan-600">→</span>
                    <span className="text-xs text-green-600">Pop &apos;(&apos;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{`See &apos;}&apos;`}</span>
                    <span className="text-cyan-600">→</span>
                    <span className="text-xs text-cyan-600">Match with top</span>
                    <span className="text-cyan-600">→</span>
                    <span className="text-xs text-green-600">Pop &apos;&#123;&apos;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Algorithm Steps
            </h4>
            
            <div className="space-y-3">
              {[
                { num: 1, title: 'Initialize Stack', desc: 'Create empty stack to track opening brackets' },
                { num: 2, title: 'Loop Through String', desc: 'Process each character one by one' },
                { num: 3, title: 'If Opening Bracket', desc: 'Push (, &#123;, or [ onto the stack' },
                { num: 4, title: 'If Closing Bracket', desc: 'Check if stack is empty (invalid if empty)' },
                { num: 5, title: 'Match with Top', desc: 'Verify closing bracket matches stack top' },
                { num: 6, title: 'Pop if Match', desc: 'Remove matching opening bracket from stack' },
                { num: 7, title: 'Final Check', desc: 'Stack must be empty for valid string' },
              ].map((step) => (
                <div key={step.num} className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{step.title}</h5>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 p-4 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Time</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Single pass through string</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Stack can hold all brackets</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Brackets className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the stack grow and shrink as brackets are matched</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-indigo-300 dark:border-indigo-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-indigo-800 dark:text-indigo-200 capitalize">{speed}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stepper Controls */}
              {currentStep >= 0 && (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    onClick={handlePrevious}
                    disabled={isAnimating || currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 dark:border-indigo-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg border border-indigo-300 dark:border-indigo-700">
                    <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 dark:border-indigo-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Code Viewer */}
            {currentStep >= 0 && (
              <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">isValid.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

                <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                  {getCodeWithValues(steps[currentStep]).map((lineData) => (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.active
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 border-l-2 border-indigo-400 dark:border-indigo-500'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-indigo-600 dark:text-indigo-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">current:</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{currentChar || '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">stack size:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{stack.length}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Step Description */}
            {currentStep >= 0 && steps[currentStep].description && (
              <div className={`p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-400 dark:border-indigo-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-indigo-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Brackets className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-indigo-900 dark:text-indigo-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-indigo-800 dark:text-indigo-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* String Visualization */}
            {currentStep >= 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-indigo-300 dark:border-indigo-600 shadow-lg">
                <h4 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Input String: &quot;{testString}&quot;</h4>
                
                <div className="flex gap-2 mb-6">
                  {testString.split('').map((char, idx) => {
                    const color = getBracketColor(char);
                    const isProcessing = idx === currentIndex;
                    const isPast = currentIndex >= 0 && idx < currentIndex;
                    
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-2xl border-2 transition-all duration-500 ${
                            isProcessing
                              ? `bg-${color}-200 dark:bg-${color}-800 border-${color}-600 scale-125 ring-4 ring-${color}-400 shadow-lg`
                              : isPast
                              ? `bg-${color}-50 dark:bg-${color}-950 border-${color}-300 opacity-60`
                              : `bg-${color}-100 dark:bg-${color}-900/40 border-${color}-400`
                          }`}
                        >
                          {char}
                        </div>
                        <span className="text-xs text-slate-500 mt-2">[{idx}]</span>
                      </div>
                    );
                  })}
                </div>

                {/* Stack Visualization */}
                <div className="border-t-2 border-indigo-200 dark:border-indigo-700 pt-5">
                  <h4 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
                    <span>Stack (LIFO):</span>
                    <Badge variant="outline" className="text-xs">
                      {stack.length} {stack.length === 1 ? 'item' : 'items'}
                    </Badge>
                  </h4>
                  
                  {stack.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                      <div className="text-4xl mb-2">📭</div>
                      <p className="text-sm">Stack is empty</p>
                    </div>
                  ) : (
                    <div className="flex flex-col-reverse gap-2">
                      {stack.map((bracket, idx) => {
                        const color = getBracketColor(bracket);
                        const isTop = idx === stack.length - 1;
                        const isMatched = matchedPair && matchedPair.open === bracket && isTop;
                        
                        return (
                          <div
                            key={`${bracket}-${idx}`}
                            className={`relative p-4 rounded-lg border-2 transition-all duration-500 ${
                              isMatched
                                ? 'bg-green-100 dark:bg-green-900/40 border-green-500 scale-105'
                                : isTop
                                ? `bg-${color}-100 dark:bg-${color}-900/40 border-${color}-500 ring-2 ring-${color}-300`
                                : `bg-${color}-50 dark:bg-${color}-950/20 border-${color}-300`
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 bg-${color}-200 dark:bg-${color}-800 border-2 border-${color}-600 rounded flex items-center justify-center font-bold text-2xl`}>
                                  {bracket}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    {isTop ? 'Top (Most Recent)' : `Position ${idx}`}
                                  </p>
                                  {isMatched && matchedPair && (
                                    <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                                      ✓ Matched with &quot;{matchedPair.close}&quot;
                                    </p>
                                  )}
                                </div>
                              </div>
                              {isTop && (
                                <ArrowUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded border border-indigo-200 dark:border-indigo-700">
                    <p className="text-xs text-indigo-700 dark:text-indigo-300">
                      <strong>Stack Rule:</strong> Last In, First Out (LIFO) - Most recently added bracket is checked first
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>Full working code with examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
            title="Valid Parentheses - Stack Solution"
            description="Use stack to match opening and closing brackets"
            language="javascript"
            colorTheme="purple"
            icon={Brackets}
            code={`function isValid(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      
      const top = stack[stack.length - 1];
      const matches = (top === '(' && char === ')') ||
                      (top === '{' && char === '}') ||
                      (top === '[' && char === ']');
      
      if (!matches) return false;
      stack.pop();
    }
  }
  
  return stack.length === 0;
}

// Test cases
console.log(isValid("()"));
// Output: true

console.log(isValid("()[]{}"));
// Output: true

console.log(isValid("(]"));
// Output: false

console.log(isValid("([)]"));
// Output: false

console.log(isValid("{[]}"));
// Output: true`}
          />
        </CardContent>
      </Card>

      {/* Edge Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            Important Edge Cases
          </CardTitle>
          <CardDescription>Always handle these scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">1. Empty String</h4>
              <p className="text-sm text-muted-foreground">Empty string is valid (no unclosed brackets)</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isValid(&quot;&quot;) // true
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Only Closing Brackets</h4>
              <p className="text-sm text-muted-foreground">Stack empty when trying to match</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isValid(&quot;))&quot;) // false
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Only Opening Brackets</h4>
              <p className="text-sm text-muted-foreground">Stack not empty at end</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isValid(&quot;((&quot;) // false
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Wrong Order</h4>
              <p className="text-sm text-muted-foreground">Brackets interleaved incorrectly</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isValid(&quot;([)]&quot;) // false
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Practice Problems
          </CardTitle>
          <CardDescription>Master these related problems on LeetCode</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Valid Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-parentheses/' },
              { name: 'Generate Parentheses', difficulty: 'Medium', link: 'https://leetcode.com/problems/generate-parentheses/' },
              { name: 'Longest Valid Parentheses', difficulty: 'Hard', link: 'https://leetcode.com/problems/longest-valid-parentheses/' },
              { name: 'Remove Invalid Parentheses', difficulty: 'Hard', link: 'https://leetcode.com/problems/remove-invalid-parentheses/' },
            ].map((problem, index) => (
              <a
                key={index}
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {problem.name}
                    </h4>
                    <span className={`text-xs font-medium ${
                      problem.difficulty === 'Easy' ? 'text-green-600' :
                      problem.difficulty === 'Medium' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <CheckCircle className="w-6 h-6" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Use <strong>stack</strong> to track opening brackets (LIFO pattern)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span><strong>Push</strong> opening brackets onto stack</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>For closing brackets: check stack empty, match with top, then <strong>pop</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Return false if: stack empty when closing, or mismatch, or stack not empty at end</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n)</strong>, Space: <strong>O(n)</strong> for the stack</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
