'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Link2, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function IsomorphicStrings() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mapST, setMapST] = useState<Record<string, string>>({});
  const [mapTS, setMapTS] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testString1 = "egg";
  const testString2 = "add";
  
  const steps = [
    { 
      step: 1,
      mapST: {},
      mapTS: {},
      index: -1,
      currentLine: 2,
      description: '📋 Initialize: Check if "egg" and "add" are isomorphic. Two strings are isomorphic if characters can be replaced to get the other string.'
    },
    { 
      step: 2,
      mapST: {},
      mapTS: {},
      index: -1,
      currentLine: 3,
      description: '✓ Length Check: s.length === t.length? 3 === 3. Yes! Both strings have same length, continue.'
    },
    { 
      step: 3,
      mapST: {},
      mapTS: {},
      index: -1,
      currentLine: 5,
      description: '🗺️ Create Maps: Initialize two empty hash maps. mapST (s→t) and mapTS (t→s) for bidirectional mapping.'
    },
    { 
      step: 4,
      mapST: {},
      mapTS: {},
      index: 0,
      currentLine: 7,
      description: '🔁 Loop Start: for (i = 0; i < 3; i++). Starting with i = 0. Compare s[0]=\'e\' and t[0]=\'a\'.'
    },
    { 
      step: 5,
      mapST: {},
      mapTS: {},
      index: 0,
      currentLine: 8,
      description: '🔍 Get Characters: charS = s[0] = \'e\', charT = t[0] = \'a\'. Now check if mapping already exists.'
    },
    { 
      step: 6,
      mapST: {},
      mapTS: {},
      index: 0,
      currentLine: 11,
      description: '❓ Check mapST: Does mapST[\'e\'] exist? No! mapST is empty, so \'e\' not mapped yet.'
    },
    { 
      step: 7,
      mapST: {},
      mapTS: {},
      index: 0,
      currentLine: 12,
      description: '❓ Check mapTS: Does mapTS[\'a\'] exist? No! mapTS is empty, so \'a\' not mapped yet.'
    },
    { 
      step: 8,
      mapST: { e: 'a' },
      mapTS: {},
      index: 0,
      currentLine: 18,
      description: '📝 Create Mapping (s→t): mapST[\'e\'] = \'a\'. Character \'e\' now maps to \'a\'.'
    },
    { 
      step: 9,
      mapST: { e: 'a' },
      mapTS: { a: 'e' },
      index: 0,
      currentLine: 19,
      description: '📝 Create Mapping (t→s): mapTS[\'a\'] = \'e\'. Character \'a\' now maps back to \'e\'. Bidirectional mapping complete!'
    },
    { 
      step: 10,
      mapST: { e: 'a' },
      mapTS: { a: 'e' },
      index: 1,
      currentLine: 7,
      description: '🔁 Loop Continue: i = 1. Compare s[1]=\'g\' and t[1]=\'d\'.'
    },
    { 
      step: 11,
      mapST: { e: 'a' },
      mapTS: { a: 'e' },
      index: 1,
      currentLine: 8,
      description: '🔍 Get Characters: charS = s[1] = \'g\', charT = t[1] = \'d\'. Check existing mappings.'
    },
    { 
      step: 12,
      mapST: { e: 'a' },
      mapTS: { a: 'e' },
      index: 1,
      currentLine: 11,
      description: '❓ Check mapST: Does mapST[\'g\'] exist? No! \'g\' is not in our map yet.'
    },
    { 
      step: 13,
      mapST: { e: 'a' },
      mapTS: { a: 'e' },
      index: 1,
      currentLine: 12,
      description: '❓ Check mapTS: Does mapTS[\'d\'] exist? No! \'d\' is not in our map yet.'
    },
    { 
      step: 14,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e' },
      index: 1,
      currentLine: 18,
      description: '📝 Create Mapping (s→t): mapST[\'g\'] = \'d\'. Character \'g\' now maps to \'d\'.'
    },
    { 
      step: 15,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 1,
      currentLine: 19,
      description: '📝 Create Mapping (t→s): mapTS[\'d\'] = \'g\'. Character \'d\' now maps back to \'g\'. Second pair mapped!'
    },
    { 
      step: 16,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 2,
      currentLine: 7,
      description: '🔁 Loop Continue: i = 2. Compare s[2]=\'g\' (again!) and t[2]=\'d\' (again!).'
    },
    { 
      step: 17,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 2,
      currentLine: 8,
      description: '🔍 Get Characters: charS = s[2] = \'g\', charT = t[2] = \'d\'. Check if existing mapping is consistent.'
    },
    { 
      step: 18,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 2,
      currentLine: 11,
      description: '❓ Check mapST: Does mapST[\'g\'] exist? Yes! mapST[\'g\'] = \'d\'. Now verify it matches current charT.'
    },
    { 
      step: 19,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 2,
      currentLine: 12,
      description: '✓ Verify Mapping: Is mapST[\'g\'] !== charT? Is \'d\' !== \'d\'? No! They match! Good!'
    },
    { 
      step: 20,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 2,
      currentLine: 14,
      description: '❓ Check mapTS: Does mapTS[\'d\'] exist? Yes! mapTS[\'d\'] = \'g\'. Now verify it matches current charS.'
    },
    { 
      step: 21,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 2,
      currentLine: 15,
      description: '✓ Verify Mapping: Is mapTS[\'d\'] !== charS? Is \'g\' !== \'g\'? No! They match! Perfect!'
    },
    { 
      step: 22,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: 3,
      currentLine: 7,
      description: '🔚 Loop End: i = 3, but 3 < 3 is false. Exit for loop. All characters processed!'
    },
    { 
      step: 23,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: -1,
      currentLine: 23,
      description: '✅ All Checks Passed: No inconsistencies found! Mappings: e↔a, g↔d. Strings are isomorphic!'
    },
    { 
      step: 24,
      mapST: { e: 'a', g: 'd' },
      mapTS: { a: 'e', d: 'g' },
      index: -1,
      currentLine: 24,
      description: '🎉 Return Result: return true. "egg" and "add" ARE isomorphic! Both have the pattern ABB.'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const showS = `s = "${testString1}"`;
    const showT = `t = "${testString2}"`;
    const showMapST = `mapST = ${JSON.stringify(stepData.mapST)}`;
    const showMapTS = `mapTS = ${JSON.stringify(stepData.mapTS)}`;
    const showIndex = stepData.index >= 0 ? `i = ${stepData.index}` : '';
    const charS = stepData.index >= 0 && stepData.index < testString1.length ? testString1[stepData.index] : '';
    const charT = stepData.index >= 0 && stepData.index < testString2.length ? testString2[stepData.index] : '';
    const showChars = charS ? `charS = '${charS}', charT = '${charT}'` : '';
    
    return [
      { line: 1, code: 'function isIsomorphic(s, t) {', active: stepData.currentLine === 1, indent: 0, values: `${showS}, ${showT}` },
      { line: 2, code: `  if (s.length !== t.length) return false;`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: `${testString1.length} !== ${testString2.length}? false` },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  const mapST = {};`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: showMapST },
      { line: 5, code: `  const mapTS = {};`, active: stepData.currentLine === 5, indent: 1, values: showMapTS },
      { line: 6, code: `  `, active: false, indent: 1 },
      { line: 7, code: `  for (let i = 0; i < s.length; i++) {`, active: stepData.currentLine === 7, indent: 1, values: showIndex ? `${showIndex}, ${showChars}` : 'Loop through characters' },
      { line: 8, code: `    const charS = s[i];`, active: stepData.currentLine === 8, indent: 2, values: charS ? `charS = '${charS}'` : '' },
      { line: 9, code: `    const charT = t[i];`, active: stepData.currentLine === 8, indent: 2, values: charT ? `charT = '${charT}'` : '' },
      { line: 10, code: `    `, active: false, indent: 2 },
      { line: 11, code: `    if (mapST[charS]) {`, active: stepData.currentLine === 11 || stepData.currentLine === 12, indent: 2, values: charS ? `mapST['${charS}'] = ${stepData.mapST[charS] ? `'${stepData.mapST[charS]}'` : 'undefined'}` : '' },
      { line: 12, code: `      if (mapST[charS] !== charT) return false;`, active: stepData.currentLine === 12, indent: 3, values: charS && stepData.mapST[charS] ? `'${stepData.mapST[charS]}' !== '${charT}'? ${stepData.mapST[charS] !== charT ? 'true ✗' : 'false ✓'}` : '' },
      { line: 13, code: `    }`, active: false, indent: 2 },
      { line: 14, code: `    if (mapTS[charT]) {`, active: stepData.currentLine === 14 || stepData.currentLine === 15, indent: 2, values: charT ? `mapTS['${charT}'] = ${stepData.mapTS[charT] ? `'${stepData.mapTS[charT]}'` : 'undefined'}` : '' },
      { line: 15, code: `      if (mapTS[charT] !== charS) return false;`, active: stepData.currentLine === 15, indent: 3, values: charT && stepData.mapTS[charT] ? `'${stepData.mapTS[charT]}' !== '${charS}'? ${stepData.mapTS[charT] !== charS ? 'true ✗' : 'false ✓'}` : '' },
      { line: 16, code: `    }`, active: false, indent: 2 },
      { line: 17, code: `    `, active: false, indent: 2 },
      { line: 18, code: `    mapST[charS] = charT;`, active: stepData.currentLine === 18, indent: 2, values: charS ? `mapST['${charS}'] = '${charT}'` : '' },
      { line: 19, code: `    mapTS[charT] = charS;`, active: stepData.currentLine === 19, indent: 2, values: charT ? `mapTS['${charT}'] = '${charS}'` : '' },
      { line: 20, code: `  }`, active: false, indent: 1 },
      { line: 21, code: `  `, active: false, indent: 1 },
      { line: 22, code: `  return true;`, active: stepData.currentLine === 22 || stepData.currentLine === 23 || stepData.currentLine === 24, indent: 1, values: stepData.currentLine >= 22 ? 'return true ✓' : '' },
      { line: 23, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setMapST(step.mapST);
    setMapTS(step.mapTS);
    setCurrentIndex(step.index);
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
        icon={Link2}
        category="DSA · Strings"
        title="Isomorphic Strings"
        description="Learn how to check if two strings are isomorphic using bidirectional character mapping"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
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
                <p className="font-medium">Character Mapping</p>
                <p className="text-sm text-muted-foreground">Create bidirectional mappings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Hash Map Technique</p>
                <p className="text-sm text-muted-foreground">Use two maps for validation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Consistency Checking</p>
                <p className="text-sm text-muted-foreground">Verify mappings are consistent</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Pattern Recognition</p>
                <p className="text-sm text-muted-foreground">Identify structural patterns</p>
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
          <CardDescription>Understanding isomorphic strings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
              <Link2 className="w-5 h-5" /> Example: "egg" ↔ "add"
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-teal-300 dark:border-teal-600">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-3">String s: "egg"</p>
                    <div className="flex gap-2">
                      {testString1.split('').map((char, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 rounded-lg flex items-center justify-center font-bold text-xl text-blue-900 dark:text-blue-100">
                            {char}
                          </div>
                          <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-3">String t: "add"</p>
                    <div className="flex gap-2">
                      {testString2.split('').map((char, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 rounded-lg flex items-center justify-center font-bold text-xl text-purple-900 dark:text-purple-100">
                            {char}
                          </div>
                          <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-300 dark:border-green-700">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Mappings:</p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700 dark:text-blue-300">e</span>
                      <span className="text-green-600">↔</span>
                      <span className="font-mono font-bold text-purple-700 dark:text-purple-300">a</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700 dark:text-blue-300">g</span>
                      <span className="text-green-600">↔</span>
                      <span className="font-mono font-bold text-purple-700 dark:text-purple-300">d</span>
                    </div>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-2">Pattern: ABB ↔ ABB ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Two Maps? */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <span className="text-lg">⚠️</span> Why We Need Two Maps
            </h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-orange-300 dark:border-orange-600">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2">Example: "foo" vs "bar"</p>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  With only one map (s→t): f→b, o→a, o→r would create o→a first, then try o→r (conflict!)
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                  ✗ Single map would catch this error
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-orange-300 dark:border-orange-600">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2">Example: "ab" vs "aa"</p>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  With only one map (s→t): a→a, b→a would seem OK! But two different characters (a,b) map to same character (a).
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                  ✗ Need reverse map (t→s) to catch this!
                </p>
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
                { num: 1, title: 'Length Check', desc: 'If lengths differ, return false immediately' },
                { num: 2, title: 'Initialize Maps', desc: 'Create two hash maps: mapST (s→t) and mapTS (t→s)' },
                { num: 3, title: 'Loop Characters', desc: 'For each character pair at index i' },
                { num: 4, title: 'Check Existing Mapping (s→t)', desc: 'If charS already mapped, verify it maps to charT' },
                { num: 5, title: 'Check Existing Mapping (t→s)', desc: 'If charT already mapped, verify it maps back to charS' },
                { num: 6, title: 'Create New Mappings', desc: 'If no conflicts, create both mappings' },
                { num: 7, title: 'Return Result', desc: 'If all checks pass, strings are isomorphic' },
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Single pass</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(1)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">26 letters max</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Link2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm check if strings are isomorphic step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-teal-300 dark:border-teal-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-teal-900 dark:text-teal-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-teal-600 border-teal-300 focus:ring-teal-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-teal-800 dark:text-teal-200 capitalize">{speed}</span>
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
                    className="border-teal-300 dark:border-teal-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg border border-teal-300 dark:border-teal-700">
                    <span className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-teal-300 dark:border-teal-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">isIsomorphic.js</span>
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
                          ? 'bg-teal-50 dark:bg-teal-900/20 border-l-2 border-teal-400 dark:border-teal-500'
                          : lineData.comment
                          ? 'opacity-50'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-teal-600 dark:text-teal-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-teal-600 dark:text-teal-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">mapST:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{JSON.stringify(mapST)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">mapTS:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{JSON.stringify(mapTS)}</span>
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
                  : 'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-400 dark:border-teal-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-teal-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Link2 className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-teal-900 dark:text-teal-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-teal-800 dark:text-teal-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Mapping Visualization */}
            {currentStep >= 0 && (Object.keys(mapST).length > 0 || Object.keys(mapTS).length > 0) && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-teal-300 dark:border-teal-600 shadow-lg">
                <h4 className="text-sm font-semibold text-teal-900 dark:text-teal-100 mb-4">Current Mappings:</h4>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3">mapST (s → t):</p>
                    <div className="space-y-2">
                      {Object.entries(mapST).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-700">
                          <span className="font-mono font-bold text-lg text-blue-700 dark:text-blue-300">'{key}'</span>
                          <span className="text-blue-600">→</span>
                          <span className="font-mono font-bold text-lg text-purple-700 dark:text-purple-300">'{value}'</span>
                        </div>
                      ))}
                      {Object.keys(mapST).length === 0 && (
                        <p className="text-xs text-slate-500 italic">Empty</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">mapTS (t → s):</p>
                    <div className="space-y-2">
                      {Object.entries(mapTS).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3 p-2 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-300 dark:border-purple-700">
                          <span className="font-mono font-bold text-lg text-purple-700 dark:text-purple-300">'{key}'</span>
                          <span className="text-purple-600">→</span>
                          <span className="font-mono font-bold text-lg text-blue-700 dark:text-blue-300">'{value}'</span>
                        </div>
                      ))}
                      {Object.keys(mapTS).length === 0 && (
                        <p className="text-xs text-slate-500 italic">Empty</p>
                      )}
                    </div>
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
            title="Isomorphic Strings"
            description="Two hash maps approach"
            language="javascript"
            colorTheme="green"
            icon={Link2}
            code={`function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  
  const mapST = {};
  const mapTS = {};
  
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    
    if (mapST[charS]) {
      if (mapST[charS] !== charT) return false;
    }
    if (mapTS[charT]) {
      if (mapTS[charT] !== charS) return false;
    }
    
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }
  
  return true;
}

// Test cases
console.log(isIsomorphic("egg", "add"));
// Output: true (e→a, g→d)

console.log(isIsomorphic("foo", "bar"));
// Output: false (o cannot map to both a and r)

console.log(isIsomorphic("paper", "title"));
// Output: true (p→t, a→i, e→l, r→e)`}
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
              <h4 className="font-semibold mb-1">1. Different Lengths</h4>
              <p className="text-sm text-muted-foreground">Strings with different lengths can't be isomorphic</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isIsomorphic("ab", "abc") // false
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. One Character Maps to Multiple</h4>
              <p className="text-sm text-muted-foreground">One character cannot map to two different characters</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isIsomorphic("foo", "bar") // false (o→a and o→r conflict)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Multiple Characters Map to One</h4>
              <p className="text-sm text-muted-foreground">Two different characters cannot map to same character</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isIsomorphic("ab", "aa") // false (both a,b map to a)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Same String</h4>
              <p className="text-sm text-muted-foreground">A string is always isomorphic to itself</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isIsomorphic("hello", "hello") // true
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
              { name: 'Isomorphic Strings', difficulty: 'Easy', link: 'https://leetcode.com/problems/isomorphic-strings/' },
              { name: 'Word Pattern', difficulty: 'Easy', link: 'https://leetcode.com/problems/word-pattern/' },
              { name: 'Find and Replace Pattern', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-and-replace-pattern/' },
              { name: 'Implement Magic Dictionary', difficulty: 'Medium', link: 'https://leetcode.com/problems/implement-magic-dictionary/' },
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
              <span>Need <strong>two hash maps</strong> for bidirectional validation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>mapST ensures no character in s maps to multiple characters in t</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>mapTS ensures no multiple characters in s map to same character in t</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n)</strong>, Space: <strong>O(1)</strong> (26 letters max)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Both mappings must be created every time for consistency</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
