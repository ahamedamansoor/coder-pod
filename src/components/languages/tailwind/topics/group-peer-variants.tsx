'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function GroupPeerVariants() {

  const groupHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="max-w-2xl mx-auto space-y-6">
    <div class="group bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-purple-500 group-hover:bg-pink-500 rounded-lg flex items-center justify-center transition">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition">Hover Me!</h3>
          <p class="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 transition">Watch everything change</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const peerHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6">
    <div class="flex items-center gap-3">
      <input type="checkbox" id="terms1" class="peer w-5 h-5 rounded text-blue-600"/>
      <label for="terms1" class="peer-checked:text-blue-600 peer-checked:font-bold transition">I agree to terms</label>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Users}
        category="Tailwind CSS · Advanced Patterns"
        title="Group & Peer Variants"
        description="Parent-child and sibling styling patterns"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            Group Modifier
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Parent-Child Styling</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Style child elements based on parent hover/focus state
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={groupHTML}
            title="Group Example"
            description="Hover the card to see all elements change"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            Peer Modifier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={peerHTML}
            title="Peer Example"
            description="Check the box to see label change"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Users className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Usage Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Group: Add <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">group</code> to parent, use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">group-hover:</code> on children</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Peer: Add <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">peer</code> to element, use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">peer-*:</code> on siblings</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
