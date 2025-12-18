'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Sparkles, ArrowRight, Trash2, X
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

type Node = {
  value: number;
  next: number | null;
};

type DeletePosition = 'beginning' | 'end' | 'value';

export default function LinkedListsDeleteNode() {
  type Step = Record<string, any>;

  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [deletePosition, setDeletePosition] = useState<DeletePosition>('beginning');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const generateSteps = (position: DeletePosition) => {
    if (position === 'beginning') {
      return [
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, toDelete: null, highlightNode: -1, description: '📋 Initial: Linked list with head at node 10. Delete first node.', action: 'init', vars: { head: '→10' } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, toDelete: null, highlightNode: 0, description: '✓ Check: List is not empty. Safe to delete.', action: 'check', vars: { head: '→10', 'head !== null': 'true' } },
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, toDelete: 0, highlightNode: 0, description: '🎯 Mark: temp = head. Store reference to node being deleted.', action: 'mark', vars: { temp: '→10', head: '→10' } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, toDelete: 0, highlightNode: 1, description: '🔗 Update: head = head.next. Move head to second node.', action: 'update', vars: { head: '→20', temp: '→10' } },
        { step: 5, list: [{ value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, toDelete: null, highlightNode: 0, description: '🗑️ Delete: Remove node 10. Memory freed.', action: 'delete', vars: { head: '→20', deleted: 10 } },
        { step: 6, list: [{ value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, toDelete: null, highlightNode: -1, description: '✅ Complete: First node deleted. List: 20→30→40', action: 'done', vars: { result: '→20' } },
      ];
    } else if (position === 'end') {
      return [
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: null, toDelete: null, highlightNode: -1, description: '📋 Initial: List with 4 nodes. Delete last node (40).', action: 'init', vars: { head: '→10' } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: null, toDelete: null, highlightNode: -1, description: '✓ Check: List not empty. Find second-to-last node.', action: 'check', vars: { head: '→10' } },
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 0, toDelete: null, highlightNode: 0, description: '🔍 Start: current = head. Traverse to second-to-last.', action: 'start', vars: { current: '→10' } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 0, toDelete: null, highlightNode: 0, description: '🔄 Loop: current.next.next = →30 (not null). Continue.', action: 'loop', vars: { current: '→10', 'current.next.next': '→30' } },
        { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 1, toDelete: null, highlightNode: 1, description: '➡️ Move: current = current.next. Now at node 20.', action: 'move', vars: { current: '→20', 'current.next.next': '→40' } },
        { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 1, toDelete: null, highlightNode: 1, description: '🔄 Loop: current.next.next = →40 (not null). Continue.', action: 'loop', vars: { current: '→20', 'current.next.next': '→40' } },
        { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 2, toDelete: null, highlightNode: 2, description: '➡️ Move: current = current.next. Now at node 30.', action: 'move', vars: { current: '→30', 'current.next.next': 'null' } },
        { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 2, toDelete: 3, highlightNode: 3, description: '🎯 Found: current.next.next = null. Current is second-to-last!', action: 'found', vars: { current: '→30', 'current.next': '→40' } },
        { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: null }], head: 0, current: 2, toDelete: null, highlightNode: 2, description: '🔗 Update: current.next = null. Disconnect last node.', action: 'disconnect', vars: { current: '→30', 'current.next': 'null' } },
        { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: null }], head: 0, current: null, toDelete: null, highlightNode: -1, description: '🗑️ Delete: Node 40 removed. Memory freed.', action: 'delete', vars: { deleted: 40 } },
        { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: null }], head: 0, current: null, toDelete: null, highlightNode: -1, description: '✅ Complete: Last node deleted. List: 10→20→30', action: 'done', vars: { result: '→10' } },
      ];
    } else {
      return [
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: null, toDelete: null, targetValue: 30, highlightNode: -1, description: '📋 Initial: List with 4 nodes. Delete node with value 30.', action: 'init', vars: { head: '→10', target: 30 } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 0, toDelete: null, targetValue: 30, highlightNode: 0, description: '✓ Check Head: head.data (10) ≠ 30. Not head node.', action: 'check-head', vars: { 'head.data': 10, target: 30 } },
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 0, toDelete: null, targetValue: 30, highlightNode: 0, description: '🔍 Start: current = head. Search for target value.', action: 'start', vars: { current: '→10', target: 30 } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 0, toDelete: null, targetValue: 30, highlightNode: 1, description: '🔍 Check: current.next.data = 20 ≠ 30. Keep searching.', action: 'check', vars: { current: '→10', 'current.next.data': 20 } },
        { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 1, toDelete: null, targetValue: 30, highlightNode: 1, description: '➡️ Move: current = current.next. Now at node 20.', action: 'move', vars: { current: '→20' } },
        { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 1, toDelete: 2, targetValue: 30, highlightNode: 2, description: '🎯 Found: current.next.data = 30! Target node found.', action: 'found', vars: { current: '→20', 'current.next.data': 30 } },
        { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 3 }, { value: 30, next: 3 }, { value: 40, next: null }], head: 0, current: 1, toDelete: 2, targetValue: 30, highlightNode: 1, description: '🔗 Update: current.next = current.next.next. Bypass node 30.', action: 'bypass', vars: { current: '→20', 'current.next': '→40' } },
        { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 40, next: null }], head: 0, current: 1, toDelete: null, targetValue: 30, highlightNode: -1, description: '🗑️ Delete: Node 30 removed. Memory freed.', action: 'delete', vars: { deleted: 30 } },
        { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 40, next: null }], head: 0, current: null, toDelete: null, targetValue: 30, highlightNode: -1, description: '✅ Complete: Node with value 30 deleted. List: 10→20→40', action: 'done', vars: { result: '→10' } },
      ];
    }
  };

  const [steps, setSteps] = useState<Step[]>(generateSteps('beginning') as Step[]);

  const handlePositionChange = (position: DeletePosition) => {
    setDeletePosition(position);
    setSteps(generateSteps(position) as Step[]);
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

  const getCodeWithHighlight = (position: DeletePosition, stepIndex: number) => {
    const currentVars = steps[stepIndex]?.vars || {};
    
    if (position === 'beginning') {
      return [
        { line: 1, code: 'function deleteAtBeginning(head) {', active: stepIndex === 0, indent: 0, values: stepIndex === 0 ? `head = ${currentVars.head || ''}` : '' },
        { line: 2, code: '  if (head === null) return null;', active: stepIndex === 1, indent: 1, values: stepIndex === 1 ? `head !== null: true` : '' },
        { line: 3, code: '  const temp = head;', active: stepIndex === 2, indent: 1, values: stepIndex === 2 ? `temp = ${currentVars.temp || ''}` : '' },
        { line: 4, code: '  head = head.next;', active: stepIndex === 3, indent: 1, values: stepIndex === 3 ? `head = ${currentVars.head || ''}` : '' },
        { line: 5, code: '  // delete temp', active: stepIndex === 4, indent: 1, values: stepIndex === 4 ? `deleted: ${currentVars.deleted || ''}` : '' },
        { line: 6, code: '  return head;', active: stepIndex === 5, indent: 1, values: stepIndex === 5 ? `returns ${currentVars.result || ''}` : '' },
        { line: 7, code: '}', active: false, indent: 0, values: '' },
      ];
    } else if (position === 'end') {
      return [
        { line: 1, code: 'function deleteAtEnd(head) {', active: stepIndex === 0, indent: 0, values: stepIndex === 0 ? `head = ${currentVars.head || ''}` : '' },
        { line: 2, code: '  if (head === null) return null;', active: stepIndex === 1, indent: 1, values: stepIndex === 1 ? `head !== null: true` : '' },
        { line: 3, code: '  let current = head;', active: stepIndex === 2, indent: 1, values: stepIndex === 2 ? `current = ${currentVars.current || ''}` : '' },
        { line: 4, code: '  while (current.next.next !== null) {', active: stepIndex === 3 || stepIndex === 5, indent: 1, values: (stepIndex === 3 || stepIndex === 5) ? `current.next.next = ${currentVars['current.next.next'] || ''}` : '' },
        { line: 5, code: '    current = current.next;', active: stepIndex === 4 || stepIndex === 6, indent: 2, values: (stepIndex === 4 || stepIndex === 6) ? `current = ${currentVars.current || ''}` : '' },
        { line: 6, code: '  }', active: stepIndex === 7, indent: 1, values: stepIndex === 7 ? `exits loop` : '' },
        { line: 7, code: '  current.next = null;', active: stepIndex === 8, indent: 1, values: stepIndex === 8 ? `current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 8, code: '  // delete last node', active: stepIndex === 9, indent: 1, values: stepIndex === 9 ? `deleted: ${currentVars.deleted || ''}` : '' },
        { line: 9, code: '  return head;', active: stepIndex === 10, indent: 1, values: stepIndex === 10 ? `returns ${currentVars.result || ''}` : '' },
        { line: 10, code: '}', active: false, indent: 0, values: '' },
      ];
    } else {
      return [
        { line: 1, code: 'function deleteByValue(head, target) {', active: stepIndex === 0, indent: 0, values: stepIndex === 0 ? `head = ${currentVars.head || ''}, target = ${currentVars.target || ''}` : '' },
        { line: 2, code: '  if (head.data === target) {', active: stepIndex === 1, indent: 1, values: stepIndex === 1 ? `head.data = ${currentVars['head.data'] || ''}` : '' },
        { line: 3, code: '    return deleteAtBeginning(head);', active: false, indent: 2, values: '' },
        { line: 4, code: '  }', active: false, indent: 1, values: '' },
        { line: 5, code: '  let current = head;', active: stepIndex === 2, indent: 1, values: stepIndex === 2 ? `current = ${currentVars.current || ''}` : '' },
        { line: 6, code: '  while (current.next !== null) {', active: false, indent: 1, values: '' },
        { line: 7, code: '    if (current.next.data === target) {', active: stepIndex === 3 || stepIndex === 5, indent: 2, values: (stepIndex === 3 || stepIndex === 5) ? `current.next.data = ${currentVars['current.next.data'] || ''}` : '' },
        { line: 8, code: '      current.next = current.next.next;', active: stepIndex === 6, indent: 3, values: stepIndex === 6 ? `current.next = ${currentVars['current.next'] || ''}` : '' },
        { line: 9, code: '      // delete node', active: stepIndex === 7, indent: 3, values: stepIndex === 7 ? `deleted: ${currentVars.deleted || ''}` : '' },
        { line: 10, code: '      return head;', active: stepIndex === 8, indent: 3, values: stepIndex === 8 ? `returns ${currentVars.result || ''}` : '' },
        { line: 11, code: '    }', active: false, indent: 2, values: '' },
        { line: 12, code: '    current = current.next;', active: stepIndex === 4, indent: 2, values: stepIndex === 4 ? `current = ${currentVars.current || ''}` : '' },
        { line: 13, code: '  }', active: false, indent: 1, values: '' },
        { line: 14, code: '  return head;', active: false, indent: 1, values: '' },
        { line: 15, code: '}', active: false, indent: 0, values: '' },
      ];
    }
  };

  const renderNode = (node: Node, index: number, isHead: boolean, isHighlight: boolean, isToDelete: boolean) => {
    return (
      <div key={index} className="flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-500">
        <div className={`relative transition-all duration-700 ease-out ${isHighlight ? 'scale-110 -translate-y-1' : isToDelete ? 'scale-90 opacity-50' : 'scale-100'}`}>
          {isHead && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500 whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm">
              HEAD
            </div>
          )}
          {isToDelete && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/80 px-2 py-1 rounded border border-red-500 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm flex items-center gap-1">
              <Trash2 className="w-3 h-3" />
              DELETE
            </div>
          )}
          <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center font-bold text-xl transition-all duration-700 ease-out shadow-md ${
            isToDelete
              ? 'bg-red-200 dark:bg-red-800 border-red-500 ring-4 ring-red-300 dark:ring-red-600 shadow-red-300 dark:shadow-red-900 shadow-lg animate-pulse'
              : isHighlight 
              ? 'bg-yellow-200 dark:bg-yellow-800 border-yellow-500 ring-4 ring-yellow-300 dark:ring-yellow-600 shadow-yellow-300 dark:shadow-yellow-900 shadow-lg animate-pulse' 
              : 'bg-blue-100 dark:bg-blue-900 border-blue-500 shadow-blue-200 dark:shadow-blue-900'
          }`}>
            <span className={`transition-all duration-500 ${isHighlight ? 'scale-110' : ''} ${isToDelete ? 'line-through opacity-50' : ''}`}>
              {node.value}
            </span>
            {isToDelete && (
              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-8 h-8 text-red-600 dark:text-red-400 animate-in zoom-in-50 duration-300" />
              </div>
            )}
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
        icon={Trash2} 
        category="DSA · Linked Lists" 
        title="Delete a Node" 
        description="Master deletion operations in linked lists with detailed step-by-step animations"
        colorTheme="red"
        badges={[
          { label: 'Time: O(1)-O(n)', variant: 'default' },
          { label: 'Space: O(1)', variant: 'info' }
        ]}
      />

      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-red-600" />
            Understanding Node Deletion
          </CardTitle>
          <CardDescription>Three common deletion scenarios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">Key Concept</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Deletion removes a node by <strong>updating pointers</strong> to bypass it, then freeing memory. 
              Complexity varies by position.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-red-600 mb-2">AT BEGINNING</div>
                <div className="text-sm">O(1) - Update head only</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-orange-600 mb-2">AT END</div>
                <div className="text-sm">O(n) - Find second-to-last</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-pink-600 mb-2">BY VALUE</div>
                <div className="text-sm">O(n) - Search for value</div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Steps</AlertTitle>
            <AlertDescription className="space-y-2">
              <div>• Store reference to node before deletion</div>
              <div>• Update pointers to bypass deleted node</div>
              <div>• Handle edge cases: empty list, single node</div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <Play className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            Visual Animation
          </CardTitle>
          <CardDescription>See how deletion works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button
              onClick={() => handlePositionChange('beginning')}
              variant={deletePosition === 'beginning' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${deletePosition === 'beginning' ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/50 scale-105' : 'hover:scale-105'}`}
            >
              Delete at Beginning
            </Button>
            <Button
              onClick={() => handlePositionChange('end')}
              variant={deletePosition === 'end' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${deletePosition === 'end' ? 'bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/50 scale-105' : 'hover:scale-105'}`}
            >
              Delete at End
            </Button>
            <Button
              onClick={() => handlePositionChange('value')}
              variant={deletePosition === 'value' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${deletePosition === 'value' ? 'bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-500/50 scale-105' : 'hover:scale-105'}`}
            >
              Delete by Value
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button 
              onClick={handlePlay} 
              disabled={isAnimating}
              className={`bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg ${isAnimating ? 'animate-pulse' : ''}`}
            >
              <Play className={`w-4 h-4 mr-2 ${isAnimating ? 'animate-spin' : ''}`} />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button 
              onClick={handleReset} 
              disabled={isAnimating} 
              variant="outline"
              className="transition-all duration-300 hover:scale-105 hover:border-red-400 hover:text-red-600"
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
                  className="w-4 h-4"
                />
                <span className="text-sm capitalize">{speed}</span>
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
            <div className="px-6 py-2 bg-gradient-to-r from-red-100 to-red-100 dark:from-red-900/40 dark:to-red-900/40 rounded-lg border-2 border-red-300 dark:border-red-700">
              <span className="text-sm font-bold text-red-900 dark:text-red-100">
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
                    {deletePosition === 'beginning' ? 'deleteAtBeginning.js' : deletePosition === 'end' ? 'deleteAtEnd.js' : 'deleteByValue.js'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-xs leading-relaxed overflow-x-auto bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                {getCodeWithHighlight(deletePosition, currentStep).map((lineData) => (
                  <div 
                    key={lineData.line} 
                    className={`flex items-start gap-3 py-1 px-2 -mx-2 rounded transition-all duration-500 ease-out ${
                      lineData.active ? 'bg-red-50 dark:bg-red-900/20 border-l-2 border-red-400 dark:border-red-500 scale-[1.02] shadow-sm' : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 transition-all duration-300 leading-relaxed ${
                      lineData.active ? 'text-red-600 dark:text-red-400 font-semibold scale-110' : 'text-slate-400 dark:text-slate-600'
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
              <div className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-red-50 dark:from-slate-800/50 dark:to-red-950/30 px-3 py-2.5">
                <div className="flex flex-wrap gap-3 text-xs">
                  {steps[currentStep].vars && Object.entries(steps[currentStep].vars).map(([key, value], idx) => (
                    <div 
                      key={key} 
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-red-200 dark:border-red-700 shadow-sm animate-in fade-in zoom-in-50 duration-300"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span className="text-slate-500 dark:text-slate-400 font-medium">{key}:</span>
                      <span className="font-bold text-red-600 dark:text-red-400">{value as string}</span>
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
                  <div className="p-2.5 rounded-full bg-green-600 shadow-lg shadow-green-600/50">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'check' && '✓ Check List'}
                      {steps[currentStep].action === 'check-head' && '✓ Check Head'}
                      {steps[currentStep].action === 'mark' && '🎯 Mark for Deletion'}
                      {steps[currentStep].action === 'update' && '🔗 Update Pointers'}
                      {steps[currentStep].action === 'start' && '🔍 Start Search'}
                      {steps[currentStep].action === 'loop' && '🔄 Loop Check'}
                      {steps[currentStep].action === 'move' && '➡️ Move Forward'}
                      {steps[currentStep].action === 'found' && '🎯 Found Target'}
                      {steps[currentStep].action === 'disconnect' && '🔗 Disconnect Node'}
                      {steps[currentStep].action === 'bypass' && '🔗 Bypass Node'}
                      {steps[currentStep].action === 'delete' && '🗑️ Delete Node'}
                      {steps[currentStep].action === 'done' && '✅ Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
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
                    className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-700 ease-out rounded-full"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 min-w-[60px] text-right">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-xl overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-h-[120px]">
                  {(steps[currentStep].list as Node[]).map((node: Node, idx: number) => 
                    renderNode(
                      node, 
                      idx, 
                      idx === steps[currentStep].head,
                      idx === steps[currentStep].highlightNode,
                      steps[currentStep].toDelete === idx
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle>Complete Code Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeSnippet
            title="All Deletion Operations"
            language="javascript"
            code={`// Delete at Beginning - O(1)
function deleteAtBeginning(head) {
  if (head === null) return null;
  const temp = head;
  head = head.next;
  // delete temp
  return head;
}

// Delete at End - O(n)
function deleteAtEnd(head) {
  if (head === null) return null;
  if (head.next === null) return null;
  
  let current = head;
  while (current.next.next !== null) {
    current = current.next;
  }
  current.next = null;
  return head;
}

// Delete by Value - O(n)
function deleteByValue(head, target) {
  if (head.data === target) {
    return deleteAtBeginning(head);
  }
  
  let current = head;
  while (current.next !== null) {
    if (current.next.data === target) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }
  return head; // Value not found
}`}
          />
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle>Related Problems</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Delete Node in a Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/delete-node-in-a-linked-list/' },
              { title: 'Remove Linked List Elements', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-linked-list-elements/' },
              { title: 'Remove Duplicates from Sorted List', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/' },
              { title: 'Remove Nth Node From End of List', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
            ].map((problem, idx) => (
              <a
                key={idx}
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-600 transition-all hover:shadow-lg group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400">
                    {problem.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
