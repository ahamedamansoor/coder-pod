'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useSeleniumPlayground } from './selenium-playground-context';
import { Target, Clock, MousePointer, FormInput, Table, Layers, X, Code } from 'lucide-react';
import { LocatorTester } from './locator-tester';
import { WaitVisualizer } from './wait-visualizer';
import { ActionsDemo } from './actions-demo';
import { PracticePage } from './practice-page';
import { FormsPlayground } from './forms-playground';
import { TablesPlayground } from './tables-playground';

export function SeleniumPlaygroundModal() {
  const { isPlaygroundOpen, closePlayground, playgroundMode, setPlaygroundMode } = useSeleniumPlayground();

  return (
    <Dialog open={isPlaygroundOpen} onOpenChange={(open) => !open && closePlayground()}>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] flex flex-col p-0 m-0 gap-0 rounded-none border-0" showCloseButton={false}>
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-green-50/30 to-teal-50/30 dark:from-green-950/20 dark:to-teal-950/20 flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-md">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">Selenium Playground</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">Interactive environment for practicing Selenium automation</p>
              </div>
            </div>
            
            {/* Language Badge */}
            <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-green-50 border-green-200 text-green-700 dark:bg-green-950/30 dark:border-green-800 dark:text-green-400">
              SELENIUM
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Innovative Close Button */}
            <DialogClose asChild>
              <button
                className="group relative w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg hover:shadow-xl"
                aria-label="Close playground"
              >
                <X className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 rounded-full bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        <Tabs 
          value={playgroundMode} 
          onValueChange={(value) => setPlaygroundMode(value as any)}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <TabsList className="w-full justify-start rounded-none border-b bg-muted/30 px-6 h-auto py-2 gap-2">
            <TabsTrigger value="practice" className="gap-2">
              <Layers className="w-4 h-4" />
              Practice Page
            </TabsTrigger>
            <TabsTrigger value="locators" className="gap-2">
              <Target className="w-4 h-4" />
              Locator Tester
            </TabsTrigger>
            <TabsTrigger value="waits" className="gap-2">
              <Clock className="w-4 h-4" />
              Wait Visualizer
            </TabsTrigger>
            <TabsTrigger value="actions" className="gap-2">
              <MousePointer className="w-4 h-4" />
              Actions Demo
            </TabsTrigger>
            <TabsTrigger value="forms" className="gap-2">
              <FormInput className="w-4 h-4" />
              Forms
            </TabsTrigger>
            <TabsTrigger value="tables" className="gap-2">
              <Table className="w-4 h-4" />
              Tables
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-hidden">
            <TabsContent value="practice" className="h-full m-0 p-6 overflow-auto">
              <PracticePage />
            </TabsContent>
            <TabsContent value="locators" className="h-full m-0 p-6 overflow-auto">
              <LocatorTester />
            </TabsContent>
            <TabsContent value="waits" className="h-full m-0 p-6 overflow-auto">
              <WaitVisualizer />
            </TabsContent>
            <TabsContent value="actions" className="h-full m-0 p-6 overflow-auto">
              <ActionsDemo />
            </TabsContent>
            <TabsContent value="forms" className="h-full m-0 p-6 overflow-auto">
              <FormsPlayground />
            </TabsContent>
            <TabsContent value="tables" className="h-full m-0 p-6 overflow-auto">
              <TablesPlayground />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
