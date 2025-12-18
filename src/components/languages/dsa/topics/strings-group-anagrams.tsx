'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { FolderTree, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function GroupAnagrams() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hashMap, setHashMap] = useState<Record<string, string[]>>({});
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentString, setCurrentString] = useState('');
  const [sortedKey, setSortedKey] = useState('');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testStrings = ["eat", "tea", "tan", "ate", "nat", "bat"];
  
  const steps = [
    { 
      step: 1,
      map: {},
      index: -1,
      str: '',
      key: '',
      currentLine: 2,
      description: '📋 Initialize: Group anagrams from ["eat", "tea", "tan", "ate", "nat", "bat"]. Anagrams have same letters, just rearranged.'
    },
    { 
      step: 2,
      map: {},
      index: -1,
      str: '',
      key: '',
      currentLine: 3,
      description: '🗺️ Create Hash Map: Initialize empty object. Key = sorted string, Value = array of original strings.'
    },
    { 
      step: 3,
      map: {},
      index: 0,
      str: 'eat',
      key: '',
      currentLine: 5,
      description: '🔁 Loop Start: for (i = 0; i < 6; i++). Start with i = 0, processing string "eat".'
    },
    { 
      step: 4,
      map: {},
      index: 0,
      str: 'eat',
      key: '',
      currentLine: 6,
      description: '📝 Get String: str = strs[0] = "eat". Now we need to sort this string to create a key.'
    },
    { 
      step: 5,
      map: {},
      index: 0,
      str: 'eat',
      key: '',
      currentLine: 7,
      description: '🔤 Split String: "eat".split(\'\') = [\'e\', \'a\', \'t\']. Convert string to array of characters.'
    },
    { 
      step: 6,
      map: {},
      index: 0,
      str: 'eat',
      key: '',
      currentLine: 7,
      description: '📊 Sort Array: [\'e\', \'a\', \'t\'].sort() = [\'a\', \'e\', \'t\']. Sort alphabetically.'
    },
    { 
      step: 7,
      map: {},
      index: 0,
      str: 'eat',
      key: 'aet',
      currentLine: 7,
      description: '🔗 Join Back: [\'a\', \'e\', \'t\'].join(\'\') = "aet". This is our sorted key!'
    },
    { 
      step: 8,
      map: {},
      index: 0,
      str: 'eat',
      key: 'aet',
      currentLine: 9,
      description: '❓ Check Map: Does map["aet"] exist? No! Map is empty, so this key doesn\'t exist yet.'
    },
    { 
      step: 9,
      map: { aet: [] },
      index: 0,
      str: 'eat',
      key: 'aet',
      currentLine: 10,
      description: '🆕 Create Array: map["aet"] = []. Initialize empty array for this key.'
    },
    { 
      step: 10,
      map: { aet: ['eat'] },
      index: 0,
      str: 'eat',
      key: 'aet',
      currentLine: 12,
      description: '➕ Add String: map["aet"].push("eat"). Add "eat" to the array. First group started!'
    },
    { 
      step: 11,
      map: { aet: ['eat'] },
      index: 1,
      str: 'tea',
      key: '',
      currentLine: 5,
      description: '🔁 Loop Continue: i = 1. Now processing string "tea".'
    },
    { 
      step: 12,
      map: { aet: ['eat'] },
      index: 1,
      str: 'tea',
      key: '',
      currentLine: 6,
      description: '📝 Get String: str = strs[1] = "tea". Sort this string to get key.'
    },
    { 
      step: 13,
      map: { aet: ['eat'] },
      index: 1,
      str: 'tea',
      key: 'aet',
      currentLine: 7,
      description: '🔤 Sort "tea": "tea".split(\'\').sort().join(\'\') = "aet". Same key as "eat"!'
    },
    { 
      step: 14,
      map: { aet: ['eat'] },
      index: 1,
      str: 'tea',
      key: 'aet',
      currentLine: 9,
      description: '❓ Check Map: Does map["aet"] exist? Yes! map["aet"] = ["eat"]. Key already exists!'
    },
    { 
      step: 15,
      map: { aet: ['eat', 'tea'] },
      index: 1,
      str: 'tea',
      key: 'aet',
      currentLine: 12,
      description: '➕ Add to Existing: map["aet"].push("tea"). Add "tea" to existing group. Both are anagrams!'
    },
    { 
      step: 16,
      map: { aet: ['eat', 'tea'] },
      index: 2,
      str: 'tan',
      key: '',
      currentLine: 5,
      description: '🔁 Loop Continue: i = 2. Now processing string "tan".'
    },
    { 
      step: 17,
      map: { aet: ['eat', 'tea'] },
      index: 2,
      str: 'tan',
      key: '',
      currentLine: 6,
      description: '📝 Get String: str = strs[2] = "tan". Sort to get key.'
    },
    { 
      step: 18,
      map: { aet: ['eat', 'tea'] },
      index: 2,
      str: 'tan',
      key: 'ant',
      currentLine: 7,
      description: '🔤 Sort "tan": "tan".split(\'\').sort().join(\'\') = "ant". Different key!'
    },
    { 
      step: 19,
      map: { aet: ['eat', 'tea'] },
      index: 2,
      str: 'tan',
      key: 'ant',
      currentLine: 9,
      description: '❓ Check Map: Does map["ant"] exist? No! This is a new anagram pattern.'
    },
    { 
      step: 20,
      map: { aet: ['eat', 'tea'], ant: [] },
      index: 2,
      str: 'tan',
      key: 'ant',
      currentLine: 10,
      description: '🆕 Create Array: map["ant"] = []. Initialize new group for this pattern.'
    },
    { 
      step: 21,
      map: { aet: ['eat', 'tea'], ant: ['tan'] },
      index: 2,
      str: 'tan',
      key: 'ant',
      currentLine: 12,
      description: '➕ Add String: map["ant"].push("tan"). Second group started!'
    },
    { 
      step: 22,
      map: { aet: ['eat', 'tea'], ant: ['tan'] },
      index: 3,
      str: 'ate',
      key: '',
      currentLine: 5,
      description: '🔁 Loop Continue: i = 3. Now processing string "ate".'
    },
    { 
      step: 23,
      map: { aet: ['eat', 'tea'], ant: ['tan'] },
      index: 3,
      str: 'ate',
      key: 'aet',
      currentLine: 7,
      description: '🔤 Sort "ate": "ate".split(\'\').sort().join(\'\') = "aet". Same as "eat" and "tea"!'
    },
    { 
      step: 24,
      map: { aet: ['eat', 'tea'], ant: ['tan'] },
      index: 3,
      str: 'ate',
      key: 'aet',
      currentLine: 9,
      description: '❓ Check Map: Does map["aet"] exist? Yes! map["aet"] = ["eat", "tea"].'
    },
    { 
      step: 25,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan'] },
      index: 3,
      str: 'ate',
      key: 'aet',
      currentLine: 12,
      description: '➕ Add to Group: map["aet"].push("ate"). Third anagram in first group!'
    },
    { 
      step: 26,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan'] },
      index: 4,
      str: 'nat',
      key: '',
      currentLine: 5,
      description: '🔁 Loop Continue: i = 4. Now processing string "nat".'
    },
    { 
      step: 27,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan'] },
      index: 4,
      str: 'nat',
      key: 'ant',
      currentLine: 7,
      description: '🔤 Sort "nat": "nat".split(\'\').sort().join(\'\') = "ant". Same as "tan"!'
    },
    { 
      step: 28,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan'] },
      index: 4,
      str: 'nat',
      key: 'ant',
      currentLine: 9,
      description: '❓ Check Map: Does map["ant"] exist? Yes! map["ant"] = ["tan"].'
    },
    { 
      step: 29,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'] },
      index: 4,
      str: 'nat',
      key: 'ant',
      currentLine: 12,
      description: '➕ Add to Group: map["ant"].push("nat"). Second anagram in second group!'
    },
    { 
      step: 30,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'] },
      index: 5,
      str: 'bat',
      key: '',
      currentLine: 5,
      description: '🔁 Loop Continue: i = 5. Last string! Processing "bat".'
    },
    { 
      step: 31,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'] },
      index: 5,
      str: 'bat',
      key: 'abt',
      currentLine: 7,
      description: '🔤 Sort "bat": "bat".split(\'\').sort().join(\'\') = "abt". New pattern!'
    },
    { 
      step: 32,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'] },
      index: 5,
      str: 'bat',
      key: 'abt',
      currentLine: 9,
      description: '❓ Check Map: Does map["abt"] exist? No! Third unique pattern.'
    },
    { 
      step: 33,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'], abt: [] },
      index: 5,
      str: 'bat',
      key: 'abt',
      currentLine: 10,
      description: '🆕 Create Array: map["abt"] = []. Third group initialized.'
    },
    { 
      step: 34,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'], abt: ['bat'] },
      index: 5,
      str: 'bat',
      key: 'abt',
      currentLine: 12,
      description: '➕ Add String: map["abt"].push("bat"). Third group has one member.'
    },
    { 
      step: 35,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'], abt: ['bat'] },
      index: 6,
      str: '',
      key: '',
      currentLine: 5,
      description: '🔚 Loop End: i = 6, but 6 < 6 is false. Exit loop. All strings processed!'
    },
    { 
      step: 36,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'], abt: ['bat'] },
      index: -1,
      str: '',
      key: '',
      currentLine: 15,
      description: '📦 Extract Values: Object.values(map). Get all arrays from the map.'
    },
    { 
      step: 37,
      map: { aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'], abt: ['bat'] },
      index: -1,
      str: '',
      key: '',
      currentLine: 16,
      description: '🎉 Return Result: [[\"eat\",\"tea\",\"ate\"], [\"tan\",\"nat\"], [\"bat\"]]. Three anagram groups!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const showStrs = `strs = ${JSON.stringify(testStrings)}`;
    const showMap = `map = ${JSON.stringify(stepData.map)}`;
    const showIndex = stepData.index >= 0 ? `i = ${stepData.index}` : '';
    const showStr = stepData.str ? `str = "${stepData.str}"` : '';
    const showKey = stepData.key ? `key = "${stepData.key}"` : '';
    
    return [
      { line: 1, code: 'function groupAnagrams(strs) {', active: stepData.currentLine === 1, indent: 0, values: showStrs },
      { line: 2, code: `  const map = {};`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: showMap },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  for (let i = 0; i < strs.length; i++) {`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: showIndex ? `${showIndex}, ${showStr}` : 'Loop through strings' },
      { line: 5, code: `    const str = strs[i];`, active: stepData.currentLine === 6, indent: 2, values: showStr },
      { line: 6, code: `    const key = str.split('').sort().join('');`, active: stepData.currentLine === 7, indent: 2, values: stepData.str && stepData.key ? `"${stepData.str}" → "${stepData.key}"` : showKey },
      { line: 7, code: `    `, active: false, indent: 2 },
      { line: 8, code: `    if (!map[key]) {`, active: stepData.currentLine === 8 || stepData.currentLine === 9, indent: 2, values: stepData.key ? `map["${stepData.key}"] = ${stepData.map[stepData.key] ? 'exists' : 'undefined'}` : '' },
      { line: 9, code: `      map[key] = [];`, active: stepData.currentLine === 10, indent: 3, values: stepData.key && stepData.currentLine === 10 ? `map["${stepData.key}"] = []` : '' },
      { line: 10, code: `    }`, active: false, indent: 2 },
      { line: 11, code: `    `, active: false, indent: 2 },
      { line: 12, code: `    map[key].push(str);`, active: stepData.currentLine === 12, indent: 2, values: stepData.key && stepData.str ? `map["${stepData.key}"].push("${stepData.str}")` : '' },
      { line: 13, code: `  }`, active: false, indent: 1 },
      { line: 14, code: `  `, active: false, indent: 1 },
      { line: 15, code: `  return Object.values(map);`, active: stepData.currentLine === 15 || stepData.currentLine === 16, indent: 1, values: stepData.currentLine >= 15 ? `[${Object.keys(stepData.map).length} groups]` : '' },
      { line: 16, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setHashMap(step.map);
    setCurrentIndex(step.index);
    setCurrentString(step.str);
    setSortedKey(step.key);
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

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FolderTree}
        category="DSA · Strings"
        title="Group Anagrams"
        description="Learn how to group anagrams together using hash map with sorted strings as keys"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(n*k log k)', 'Space: O(n*k)'].map((badge, index) => (
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
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Sorted String as Key</p>
                <p className="text-sm text-muted-foreground">Use sorted version as hash key</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Hash Map Grouping</p>
                <p className="text-sm text-muted-foreground">Group strings by common key</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Dynamic Array Creation</p>
                <p className="text-sm text-muted-foreground">Create arrays on demand</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Object.values() Usage</p>
                <p className="text-sm text-muted-foreground">Extract grouped results</p>
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
          <CardDescription>Understanding anagram grouping</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-violet-200 dark:border-violet-700">
            <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-4 flex items-center gap-2">
              <FolderTree className="w-5 h-5" /> Grouping Example
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-violet-300 dark:border-violet-600">
                <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">Input: ["eat", "tea", "tan", "ate", "nat", "bat"]</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border-2 border-green-500">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">Group 1 (key: "aet"):</p>
                    <div className="flex gap-2">
                      {['eat', 'tea', 'ate'].map((word, idx) => (
                        <div key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/40 border border-green-400 rounded font-mono font-bold">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-2 border-blue-500">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Group 2 (key: "ant"):</p>
                    <div className="flex gap-2">
                      {['tan', 'nat'].map((word, idx) => (
                        <div key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 border border-blue-400 rounded font-mono font-bold">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded border-2 border-orange-500">
                    <p className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-2">Group 3 (key: "abt"):</p>
                    <div className="flex gap-2">
                      {['bat'].map((word, idx) => (
                        <div key={idx} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/40 border border-orange-400 rounded font-mono font-bold">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Sorting Works */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔤</span> How Sorting Creates Keys
            </h4>
            
            <div className="space-y-3">
              {[
                { word: 'eat', sorted: 'aet', desc: 'e, a, t → sorted → a, e, t' },
                { word: 'tea', sorted: 'aet', desc: 't, e, a → sorted → a, e, t (same!)' },
                { word: 'tan', sorted: 'ant', desc: 't, a, n → sorted → a, n, t' },
                { word: 'ate', sorted: 'aet', desc: 'a, t, e → sorted → a, e, t (same as eat!)' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-950 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-lg text-cyan-700 dark:text-cyan-300">"{item.word}"</span>
                      <span className="text-cyan-600">→</span>
                      <span className="font-mono font-bold text-lg text-purple-700 dark:text-purple-300">"{item.sorted}"</span>
                    </div>
                    <span className="text-xs text-cyan-600 dark:text-cyan-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Algorithm Steps
            </h4>
            
            <div className="space-y-3">
              {[
                { num: 1, title: 'Initialize Hash Map', desc: 'Create empty object to store groups' },
                { num: 2, title: 'Loop Through Strings', desc: 'Process each string one by one' },
                { num: 3, title: 'Sort String', desc: 'Sort characters alphabetically to create key' },
                { num: 4, title: 'Check Key Exists', desc: 'If key not in map, create empty array' },
                { num: 5, title: 'Add to Group', desc: 'Push original string to the array' },
                { num: 6, title: 'Return Groups', desc: 'Extract all arrays using Object.values()' },
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
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n*k log k)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">n strings, k length each</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n*k)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Store all strings</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/40">
              <FolderTree className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm group anagrams step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-violet-300 dark:border-violet-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-violet-900 dark:text-violet-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-violet-600 border-violet-300 focus:ring-violet-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-violet-800 dark:text-violet-200 capitalize">{speed}</span>
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
                    className="border-violet-300 dark:border-violet-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-violet-100 dark:bg-violet-900/40 rounded-lg border border-violet-300 dark:border-violet-700">
                    <span className="text-sm font-semibold text-violet-900 dark:text-violet-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-violet-300 dark:border-violet-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">groupAnagrams.js</span>
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
                          ? 'bg-violet-50 dark:bg-violet-900/20 border-l-2 border-violet-400 dark:border-violet-500'
                          : lineData.comment
                          ? 'opacity-50'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-violet-600 dark:text-violet-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-violet-600 dark:text-violet-400 font-semibold">
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
                        <span className="font-semibold text-violet-600 dark:text-violet-400">{currentString || '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">key:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{sortedKey || '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">groups:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{Object.keys(hashMap).length}</span>
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
                  : 'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-violet-400 dark:border-violet-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-violet-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <FolderTree className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-violet-900 dark:text-violet-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-violet-800 dark:text-violet-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Hash Map Visualization */}
            {currentStep >= 0 && Object.keys(hashMap).length > 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-violet-300 dark:border-violet-600 shadow-lg">
                <h4 className="text-sm font-semibold text-violet-900 dark:text-violet-100 mb-4">Current Hash Map (Groups):</h4>
                
                <div className="space-y-3">
                  {Object.entries(hashMap).map(([key, values], idx) => {
                    const colors = ['green', 'blue', 'orange', 'pink'];
                    const color = colors[idx % colors.length];
                    
                    return (
                      <div
                        key={key}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          sortedKey === key
                            ? 'ring-4 ring-violet-400 dark:ring-violet-500 scale-105'
                            : ''
                        } bg-${color}-50 dark:bg-${color}-900/20 border-${color}-400`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-semibold text-${color}-700 dark:text-${color}-300`}>Key:</span>
                            <span className="font-mono font-bold text-lg text-purple-700 dark:text-purple-300">"{key}"</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded bg-${color}-100 dark:bg-${color}-900/40 text-${color}-700 dark:text-${color}-300`}>
                            {values.length} string{values.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {values.map((val, valIdx) => (
                            <div
                              key={valIdx}
                              className={`px-3 py-1 rounded font-mono font-bold border-2 bg-${color}-100 dark:bg-${color}-900/40 border-${color}-500 ${
                                currentString === val ? 'ring-2 ring-violet-500' : ''
                              }`}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
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
            title="Group Anagrams"
            description="Sort and hash map approach"
            language="javascript"
            colorTheme="purple"
            icon={FolderTree}
            code={`function groupAnagrams(strs) {
  const map = {};
  
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const key = str.split('').sort().join('');
    
    if (!map[key]) {
      map[key] = [];
    }
    
    map[key].push(str);
  }
  
  return Object.values(map);
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]`}
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
              <p className="text-sm text-muted-foreground">Handle array with empty string</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                groupAnagrams([""]) // [[""]]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Single String</h4>
              <p className="text-sm text-muted-foreground">One string forms one group</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                groupAnagrams(["a"]) // [["a"]]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. No Anagrams</h4>
              <p className="text-sm text-muted-foreground">All strings are different</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                groupAnagrams(["a","b","c"]) // [["a"],["b"],["c"]]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. All Anagrams</h4>
              <p className="text-sm text-muted-foreground">All strings are anagrams of each other</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                groupAnagrams(["abc","bca","cab"]) // [["abc","bca","cab"]]
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
              { name: 'Group Anagrams', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/' },
              { name: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/' },
              { name: 'Find All Anagrams in a String', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' },
              { name: 'Group Shifted Strings', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-shifted-strings/' },
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
              <span>Sort each string to create a <strong>unique key</strong> for anagrams</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Use hash map where key = sorted string, value = array of original strings</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Anagrams will have the <strong>same sorted key</strong> (e.g., "eat" and "tea" → "aet")</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n*k log k)</strong> where n = number of strings, k = max length</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Use <strong>Object.values()</strong> to extract all grouped arrays from map</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
