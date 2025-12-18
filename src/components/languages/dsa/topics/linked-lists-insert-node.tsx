'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Sparkles, ArrowRight, ArrowRightLeft
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

type Node = {
  value: number;
  next: number | null;
};

type InsertPosition = 'beginning' | 'end' | 'middle';

export default function LinkedListsInsertNode() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [insertPosition, setInsertPosition] = useState<InsertPosition>('beginning');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const generateSteps = (position: InsertPosition) => {
    if (position === 'beginning') {
      return [
        { step: 1, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, newNode: null, highlightNode: -1, description: '📋 Initial: Linked list with head pointing to node with value 1.', action: 'init', vars: { head: '→1', value: 0 } },
        { step: 2, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, newNode: 0, highlightNode: -1, description: '🆕 Create: New node with value 0. This will become the new head.', action: 'create', vars: { head: '→1', value: 0, newNode: '{val:0, next:null}' } },
        { step: 3, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }, { value: 0, next: null }], head: 0, newNode: 3, highlightNode: 3, description: '🔗 Link: Point new node\'s next to current head (node 1).', action: 'link-to-head', vars: { head: '→1', newNode: '{val:0, next:null}' } },
        { step: 4, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }, { value: 0, next: 0 }], head: 0, newNode: 3, highlightNode: 3, description: '🔗 Execute: newNode.next = head. Now newNode points to old head.', action: 'link-execute', vars: { head: '→1', newNode: '{val:0, next:→1}' } },
        { step: 5, list: [{ value: 0, next: 0 }, { value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, newNode: 3, highlightNode: 0, description: '🎯 Update: Move head pointer to new node.', action: 'update-head', vars: { head: '→0', newNode: '{val:0, next:→1}' } },
        { step: 6, list: [{ value: 0, next: 0 }, { value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, newNode: null, highlightNode: 0, description: '✅ Return: Return the new head pointer.', action: 'return', vars: { head: '→0' } },
        { step: 7, list: [{ value: 0, next: 0 }, { value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, newNode: null, highlightNode: 0, description: '🎉 Complete: New node inserted at beginning. Head now points to 0.', action: 'done', vars: { result: '→0' } },
      ];
    } else if (position === 'end') {
      return [
        { step: 1, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: null, highlightNode: -1, description: '📋 Initial: Linked list with 3 nodes. Want to insert value 4 at end.', action: 'init', vars: { head: '→1', value: 4 } },
        { step: 2, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: 4, highlightNode: -1, description: '🆕 Create: New node with value 4 to insert at end.', action: 'create', vars: { head: '→1', value: 4, newNode: '{val:4, next:null}' } },
        { step: 3, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: 4, highlightNode: -1, description: '✓ Check: List is not empty, so proceed to find last node.', action: 'check-empty', vars: { head: '→1', newNode: '{val:4, next:null}' } },
        { step: 4, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 0, newNode: 4, highlightNode: 0, description: '🔍 Initialize: Set current = head. Start traversal from first node.', action: 'traverse-start', vars: { head: '→1', current: '→1', newNode: '{val:4, next:null}' } },
        { step: 5, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 0, newNode: 4, highlightNode: 0, description: '🔄 Check Loop: current.next = →2 (not null). Continue traversing.', action: 'check-loop', vars: { current: '→1', 'current.next': '→2' } },
        { step: 6, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 1, newNode: 4, highlightNode: 1, description: '➡️ Move: current = current.next. Now at node 2.', action: 'traverse', vars: { current: '→2', 'current.next': '→3' } },
        { step: 7, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 1, newNode: 4, highlightNode: 1, description: '🔄 Check Loop: current.next = →3 (not null). Continue traversing.', action: 'check-loop', vars: { current: '→2', 'current.next': '→3' } },
        { step: 8, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 2, newNode: 4, highlightNode: 2, description: '➡️ Move: current = current.next. Now at node 3.', action: 'traverse', vars: { current: '→3', 'current.next': 'null' } },
        { step: 9, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 2, newNode: 4, highlightNode: 2, description: '🎯 Found: current.next = null. This is the last node!', action: 'found-last', vars: { current: '→3', 'current.next': 'null' } },
        { step: 10, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], head: 0, current: 2, newNode: null, highlightNode: 3, description: '🔗 Link: current.next = newNode. Attach new node to end.', action: 'link-end', vars: { current: '→3', 'current.next': '→4', newNode: '{val:4}' } },
        { step: 11, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], head: 0, current: null, newNode: null, highlightNode: 3, description: '✅ Return: Return the original head pointer.', action: 'return', vars: { head: '→1' } },
        { step: 12, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], head: 0, current: null, newNode: null, highlightNode: 3, description: '🎉 Complete: New node 4 inserted at end. List: 1→2→3→4', action: 'done', vars: { result: '→1' } },
      ];
    } else {
      return [
        { step: 1, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: null, position: 2, highlightNode: -1, description: '📋 Initial: Linked list with 3 nodes. Insert value 5 at position 2.', action: 'init', vars: { head: '→1', value: 5, pos: 2 } },
        { step: 2, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: 5, position: 2, highlightNode: -1, description: '🆕 Create: New node with value 5 to insert at position 2.', action: 'create', vars: { head: '→1', value: 5, pos: 2, newNode: '{val:5, next:null}' } },
        { step: 3, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: 5, position: 2, highlightNode: -1, description: '✓ Check: Position is not 0, so we need to traverse.', action: 'check-position', vars: { pos: 2, newNode: '{val:5, next:null}' } },
        { step: 4, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 0, newNode: 5, position: 2, currentPos: 0, highlightNode: 0, description: '🔍 Initialize: current = head, count = 0. Start traversal.', action: 'traverse-start', vars: { current: '→1', count: 0, pos: 2 } },
        { step: 5, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 0, newNode: 5, position: 2, currentPos: 0, highlightNode: 0, description: '🔄 Check Loop: count (0) < pos-1 (1). Need to continue.', action: 'check-loop', vars: { current: '→1', count: 0, 'pos-1': 1 } },
        { step: 6, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 1, newNode: 5, position: 2, currentPos: 1, highlightNode: 1, description: '➡️ Move: current = current.next. Now at node 2.', action: 'traverse', vars: { current: '→2', count: 0 } },
        { step: 7, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 1, newNode: 5, position: 2, currentPos: 1, highlightNode: 1, description: '➕ Increment: count++. Now count = 1.', action: 'increment', vars: { current: '→2', count: 1 } },
        { step: 8, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], head: 0, current: 1, newNode: 5, position: 2, currentPos: 1, highlightNode: 1, description: '🎯 Found: count (1) = pos-1 (1). Exit loop. Ready to insert.', action: 'found-position', vars: { current: '→2', count: 1, 'pos-1': 1 } },
        { step: 9, list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }, { value: 5, next: 2 }], head: 0, current: 1, newNode: 3, position: 2, highlightNode: 3, description: '🔗 Link 1: newNode.next = current.next. Point new node to node 3.', action: 'link-new', vars: { current: '→2', 'current.next': '→3', newNode: '{val:5, next:→3}' } },
        { step: 10, list: [{ value: 1, next: 1 }, { value: 2, next: 3 }, { value: 3, next: null }, { value: 5, next: 2 }], head: 0, current: 1, newNode: null, position: 2, highlightNode: 3, description: '🔗 Link 2: current.next = newNode. Point current to new node.', action: 'link-current', vars: { current: '→2', 'current.next': '→5' } },
        { step: 11, list: [{ value: 1, next: 1 }, { value: 2, next: 3 }, { value: 5, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: null, position: 2, highlightNode: 2, description: '✅ Return: Return the original head pointer.', action: 'return', vars: { head: '→1' } },
        { step: 12, list: [{ value: 1, next: 1 }, { value: 2, next: 3 }, { value: 5, next: 2 }, { value: 3, next: null }], head: 0, current: null, newNode: null, position: 2, highlightNode: 2, description: '🎉 Complete: New node 5 inserted at position 2. List: 1→2→5→3', action: 'done', vars: { result: '→1' } },
      ];
    }
  };

  const [steps, setSteps] = useState(generateSteps('beginning'));

  const handlePositionChange = (position: InsertPosition) => {
    setInsertPosition(position);
    setSteps(generateSteps(position));
    setCurrentStep(0);
    setIsAnimating(false);
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);
    const speedMap = { slow: 2500, normal: 1800, fast: 1200 };
    const delay = speedMap[animationSpeed];
    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) goToStep(index);
        if (index === steps.length - 1) setTimeout(() => setIsAnimating(false), 1500);
      }, index * delay);
    });
  };

  const handleNext = () => { if (currentStep < steps.length - 1) goToStep(currentStep + 1); };
  const handlePrevious = () => { if (currentStep > 0) goToStep(currentStep - 1); };
  const handleReset = () => { setCurrentStep(0); setIsAnimating(false); goToStep(0); };

  const getCodeWithHighlight = (position: InsertPosition, stepIndex: number) => {
    const currentVars = steps[stepIndex]?.vars || {};
    
    if (position === 'beginning') {
      return [
        { line: 1, code: 'function insertAtBeginning(head, value) {', active: stepIndex === 0, indent: 0, values: stepIndex === 0 ? `head = ${currentVars.head || ''}, value = ${currentVars.value || ''}` : '' },
        { line: 2, code: '  const newNode = { value, next: null };', active: stepIndex === 1, indent: 1, values: stepIndex === 1 ? `newNode = ${currentVars.newNode || ''}` : '' },
        { line: 3, code: '  newNode.next = head;', active: stepIndex === 2 || stepIndex === 3, indent: 1, values: (stepIndex === 2 || stepIndex === 3) ? `newNode = ${currentVars.newNode || ''}, head = ${currentVars.head || ''}` : '' },
        { line: 4, code: '  head = newNode;', active: stepIndex === 4, indent: 1, values: stepIndex === 4 ? `head = ${currentVars.head || ''}` : '' },
        { line: 5, code: '  return head;', active: stepIndex === 5, indent: 1, values: stepIndex === 5 ? `returns ${currentVars.head || ''}` : '' },
        { line: 6, code: '}', active: false, indent: 0, values: '' },
      ];
    } else if (position === 'end') {
      return [
        { line: 1, code: 'function insertAtEnd(head, value) {', active: stepIndex === 0, indent: 0, values: stepIndex === 0 ? `head = ${currentVars.head || ''}, value = ${currentVars.value || ''}` : '' },
        { line: 2, code: '  const newNode = { value, next: null };', active: stepIndex === 1, indent: 1, values: stepIndex === 1 ? `newNode = ${currentVars.newNode || ''}` : '' },
        { line: 3, code: '  if (!head) return newNode;', active: stepIndex === 2, indent: 1, values: stepIndex === 2 ? `head = ${currentVars.head || ''} (not null)` : '' },
        { line: 4, code: '  let current = head;', active: stepIndex === 3, indent: 1, values: stepIndex === 3 ? `current = ${currentVars.current || ''}` : '' },
        { line: 5, code: '  while (current.next !== null) {', active: stepIndex === 4 || stepIndex === 6, indent: 1, values: (stepIndex === 4 || stepIndex === 6) ? `current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 6, code: '    current = current.next;', active: stepIndex === 5 || stepIndex === 7, indent: 2, values: (stepIndex === 5 || stepIndex === 7) ? `current = ${currentVars.current || ''}` : '' },
        { line: 7, code: '  }', active: stepIndex === 8, indent: 1, values: stepIndex === 8 ? `loop exits, current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 8, code: '  current.next = newNode;', active: stepIndex === 9, indent: 1, values: stepIndex === 9 ? `current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 9, code: '  return head;', active: stepIndex === 10, indent: 1, values: stepIndex === 10 ? `returns ${currentVars.head || ''}` : '' },
        { line: 10, code: '}', active: false, indent: 0, values: '' },
      ];
    } else {
      return [
        { line: 1, code: 'function insertAtPosition(head, value, pos) {', active: stepIndex === 0, indent: 0, values: stepIndex === 0 ? `head = ${currentVars.head || ''}, value = ${currentVars.value || ''}, pos = ${currentVars.pos || ''}` : '' },
        { line: 2, code: '  const newNode = { value, next: null };', active: stepIndex === 1, indent: 1, values: stepIndex === 1 ? `newNode = ${currentVars.newNode || ''}` : '' },
        { line: 3, code: '  if (pos === 0) {', active: stepIndex === 2, indent: 1, values: stepIndex === 2 ? `pos = ${currentVars.pos || ''} (not 0)` : '' },
        { line: 4, code: '    newNode.next = head;', active: false, indent: 2, values: '' },
        { line: 5, code: '    return newNode;', active: false, indent: 2, values: '' },
        { line: 6, code: '  }', active: false, indent: 1, values: '' },
        { line: 7, code: '  let current = head;', active: stepIndex === 3, indent: 1, values: stepIndex === 3 ? `current = ${currentVars.current || ''}` : '' },
        { line: 8, code: '  let count = 0;', active: stepIndex === 3, indent: 1, values: stepIndex === 3 ? `count = ${currentVars.count || ''}` : '' },
        { line: 9, code: '  while (count < pos - 1) {', active: stepIndex === 4, indent: 1, values: stepIndex === 4 ? `count = ${currentVars.count || ''}, pos-1 = ${currentVars['pos-1'] || ''}` : '' },
        { line: 10, code: '    current = current.next;', active: stepIndex === 5, indent: 2, values: stepIndex === 5 ? `current = ${currentVars.current || ''}` : '' },
        { line: 11, code: '    count++;', active: stepIndex === 6, indent: 2, values: stepIndex === 6 ? `count = ${currentVars.count || ''}` : '' },
        { line: 12, code: '  }', active: stepIndex === 7, indent: 1, values: stepIndex === 7 ? `loop exits, count = ${currentVars.count || ''}` : '' },
        { line: 13, code: '  newNode.next = current.next;', active: stepIndex === 8, indent: 1, values: stepIndex === 8 ? `newNode = ${currentVars.newNode || ''}, current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 14, code: '  current.next = newNode;', active: stepIndex === 9, indent: 1, values: stepIndex === 9 ? `current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 15, code: '  return head;', active: stepIndex === 10, indent: 1, values: stepIndex === 10 ? `returns ${currentVars.head || ''}` : '' },
        { line: 16, code: '}', active: false, indent: 0, values: '' },
      ];
    }
  };

  const renderNode = (node: Node, index: number, isHead: boolean, isHighlight: boolean, isNew: boolean) => {
    return (
      <div key={index} className="flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-500">
        <div className={`relative transition-all duration-700 ease-out ${isHighlight ? 'scale-110 -translate-y-1' : 'scale-100'}`}>
          {isHead && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500 whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm">
              HEAD
            </div>
          )}
          {isNew && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm">
              NEW
            </div>
          )}
          <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center font-bold text-xl transition-all duration-700 ease-out shadow-md ${
            isHighlight 
              ? 'bg-yellow-200 dark:bg-yellow-800 border-yellow-500 ring-4 ring-yellow-300 dark:ring-yellow-600 shadow-yellow-300 dark:shadow-yellow-900 shadow-lg animate-pulse' 
              : isNew
              ? 'bg-green-100 dark:bg-green-900 border-green-500 shadow-green-200 dark:shadow-green-900'
              : 'bg-blue-100 dark:bg-blue-900 border-blue-500 shadow-blue-200 dark:shadow-blue-900'
          }`}>
            <span className={`transition-all duration-500 ${isHighlight ? 'scale-110' : ''}`}>
              {node.value}
            </span>
          </div>
        </div>
        {node.next !== null && (
          <div className="flex items-center gap-1 animate-in fade-in zoom-in-50 duration-500">
            <div className="relative flex items-center">
              <ArrowRight className={`w-6 h-6 transition-all duration-500 ${
                isHighlight 
                  ? 'text-yellow-600 dark:text-yellow-400 scale-125 animate-pulse' 
                  : 'text-slate-600 dark:text-slate-400'
              }`} />
              {isHighlight && (
                <div className="absolute inset-0 bg-yellow-400 dark:bg-yellow-600 blur-sm opacity-40 animate-ping"></div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Sparkles} 
        category="DSA · Linked Lists" 
        title="Insert Node at Beginning/End/Middle" 
        description="Master the fundamental operation of inserting nodes in a singly linked list"
        colorTheme="blue"
        badges={[
          { label: 'Time: O(1) or O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Easy', variant: 'default' }
        ]}
      />

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Understanding Linked List Insertion
          </CardTitle>
          <CardDescription>Three fundamental insertion operations with different complexities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              What is Node Insertion?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Insertion is the process of adding a new node to a linked list. The complexity and approach differ based on the insertion position.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-blue-600 mb-2">AT BEGINNING</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Time: O(1) - Constant</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Just update head pointer</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-orange-600 mb-2">AT END</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Time: O(n) - Linear</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Must traverse to last node</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-purple-600 mb-2">AT MIDDLE</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Time: O(n) - Linear</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Traverse to position</p>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Always create the new node first before modifying pointers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Order of pointer updates matters to avoid losing references</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Handle edge cases: empty list, single node, invalid position</span>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Visual Animation
          </CardTitle>
          <CardDescription>See how insertion works at different positions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button
              onClick={() => handlePositionChange('beginning')}
              variant={insertPosition === 'beginning' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${insertPosition === 'beginning' ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/50 scale-105' : 'hover:scale-105'}`}
            >
              Insert at Beginning
            </Button>
            <Button
              onClick={() => handlePositionChange('end')}
              variant={insertPosition === 'end' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${insertPosition === 'end' ? 'bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/50 scale-105' : 'hover:scale-105'}`}
            >
              Insert at End
            </Button>
            <Button
              onClick={() => handlePositionChange('middle')}
              variant={insertPosition === 'middle' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${insertPosition === 'middle' ? 'bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/50 scale-105' : 'hover:scale-105'}`}
            >
              Insert at Middle
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button 
              onClick={handlePlay} 
              disabled={isAnimating}
              className={`bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg ${isAnimating ? 'animate-pulse' : ''}`}
            >
              <Play className={`w-4 h-4 mr-2 ${isAnimating ? 'animate-spin' : ''}`} />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button 
              onClick={handleReset} 
              disabled={isAnimating} 
              variant="outline"
              className="transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:text-blue-600"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {['slow', 'normal', 'fast'].map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

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

          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400 dark:bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400 dark:bg-green-500"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2 font-mono">
                    {insertPosition === 'beginning' ? 'insertAtBeginning.js' : insertPosition === 'end' ? 'insertAtEnd.js' : 'insertAtPosition.js'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-xs leading-relaxed overflow-x-auto bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                {getCodeWithHighlight(insertPosition, currentStep).map((lineData) => (
                  <div 
                    key={lineData.line} 
                    className={`flex items-start gap-3 py-1 px-2 -mx-2 rounded transition-all duration-500 ease-out ${
                      lineData.active ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500 scale-[1.02] shadow-sm' : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 transition-all duration-300 leading-relaxed ${
                      lineData.active ? 'text-blue-600 dark:text-blue-400 font-semibold scale-110' : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>
                    <code className={`flex-1 text-slate-700 dark:text-slate-300 transition-all duration-300 ${
                      lineData.active ? 'font-semibold' : ''
                    }`}>
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && (
                        <span className="ml-3 text-xs italic text-emerald-600 dark:text-emerald-400 font-normal animate-in fade-in slide-in-from-left-2 duration-300 opacity-90">
                          // {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-950/30 px-3 py-2.5">
                <div className="flex flex-wrap gap-3 text-xs">
                  {steps[currentStep].vars && Object.entries(steps[currentStep].vars).map(([key, value], idx) => (
                    <div 
                      key={key} 
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 shadow-sm animate-in fade-in zoom-in-50 duration-300"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span className="text-slate-500 dark:text-slate-400 font-medium">{key}:</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 animate-in fade-in duration-200">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-600 animate-in zoom-in-50 duration-300 shadow-lg shadow-green-600/50">
                    <CheckCircle className="w-6 h-6 text-white animate-in spin-in-180 duration-500" />
                  </div>
                  <div className="animate-in fade-in slide-in-from-left-2 duration-400">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'create' && '🆕 Creating New Node'}
                      {steps[currentStep].action === 'link-to-head' && '🔗 Linking to Head'}
                      {steps[currentStep].action === 'link-execute' && '🔗 Execute Link'}
                      {steps[currentStep].action === 'update-head' && '🎯 Updating Head'}
                      {steps[currentStep].action === 'check-empty' && '✓ Checking Empty'}
                      {steps[currentStep].action === 'check-loop' && '🔄 Loop Condition'}
                      {steps[currentStep].action === 'check-position' && '✓ Check Position'}
                      {steps[currentStep].action === 'traverse-start' && '🔍 Starting Traversal'}
                      {steps[currentStep].action === 'traverse' && '➡️ Traversing List'}
                      {steps[currentStep].action === 'increment' && '➕ Increment Counter'}
                      {steps[currentStep].action === 'found-last' && '🎯 Found Last Node'}
                      {steps[currentStep].action === 'found-position' && '🎯 Found Position'}
                      {steps[currentStep].action === 'link-end' && '🔗 Linking to End'}
                      {steps[currentStep].action === 'link-new' && '🔗 Linking New Node'}
                      {steps[currentStep].action === 'link-current' && '🔗 Updating Current'}
                      {steps[currentStep].action === 'return' && '✅ Return Result'}
                      {steps[currentStep].action === 'done' && '🎉 Insertion Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14 animate-in fade-in slide-in-from-left-3 duration-500 delay-100">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700 ease-out rounded-full"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 min-w-[60px] text-right">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-xl overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-h-[120px]">
                  {steps[currentStep].list.map((node, idx) => 
                    renderNode(
                      node, 
                      idx, 
                      idx === steps[currentStep].head,
                      idx === steps[currentStep].highlightNode,
                      steps[currentStep].newNode === idx
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                At Beginning: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Constant time - just create node and update head pointer.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                At End: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Linear time - must traverse entire list to find last node.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                At Position: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Linear time - traverse to reach the desired position.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Insert at Beginning - O(1)"
        language="javascript"
        code={`function insertAtBeginning(head, value) {
  // Create new node
  const newNode = { value, next: null };
  
  // Point new node to current head
  newNode.next = head;
  
  // Update head to new node
  head = newNode;
  
  return head;
}

// Example
let head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
head = insertAtBeginning(head, 0);
// Result: 0 -> 1 -> 2 -> 3`}
      />

      <CodeSnippet
        title="Insert at End - O(n)"
        language="javascript"
        code={`function insertAtEnd(head, value) {
  // Create new node
  const newNode = { value, next: null };
  
  // If list is empty, new node becomes head
  if (!head) return newNode;
  
  // Traverse to last node
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  
  // Link last node to new node
  current.next = newNode;
  
  return head;
}

// Example
let head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
head = insertAtEnd(head, 4);
// Result: 1 -> 2 -> 3 -> 4`}
      />

      <CodeSnippet
        title="Insert at Position - O(n)"
        language="javascript"
        code={`function insertAtPosition(head, value, position) {
  // Create new node
  const newNode = { value, next: null };
  
  // If inserting at beginning (position 0)
  if (position === 0) {
    newNode.next = head;
    return newNode;
  }
  
  // Traverse to node before insertion point
  let current = head;
  let count = 0;
  
  while (current !== null && count < position - 1) {
    current = current.next;
    count++;
  }
  
  // If position is invalid
  if (current === null) {
    console.log("Position out of bounds");
    return head;
  }
  
  // Insert: newNode.next = current.next, then current.next = newNode
  newNode.next = current.next;
  current.next = newNode;
  
  return head;
}

// Example
let head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
head = insertAtPosition(head, 5, 2);
// Result: 1 -> 2 -> 5 -> 3`}
      />

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Related LeetCode Problems
          </CardTitle>
          <CardDescription>Practice insertion and linked list manipulation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <a
            href="https://leetcode.com/problems/design-linked-list/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    707. Design Linked List
                  </h4>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                    Medium
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Design and implement all linked list operations including insertion at various positions.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </a>

          <a
            href="https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    708. Insert into a Sorted Circular Linked List
                  </h4>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                    Medium
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Insert a value into a sorted circular linked list while maintaining order.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </a>

          <a
            href="https://leetcode.com/problems/add-two-numbers/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    2. Add Two Numbers
                  </h4>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                    Medium
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add two numbers represented by linked lists by creating and inserting new nodes.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </a>

          <a
            href="https://leetcode.com/problems/merge-two-sorted-lists/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    21. Merge Two Sorted Lists
                  </h4>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    Easy
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Merge two sorted lists by strategically inserting nodes in order.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
