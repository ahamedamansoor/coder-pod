'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Box, Lightbulb, ArrowRight, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function HeadlessUi() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="Tailwind CSS · Tooling"
        title="Headless UI"
        description="Unstyled, accessible UI components"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
            Headless UI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Free & Accessible</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Completely unstyled, fully accessible UI components by Tailwind Labs
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is Headless UI?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Headless UI provides completely unstyled, accessible UI components that are 
              designed to work perfectly with Tailwind CSS. You get all the functionality 
              and accessibility features without any default styling.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Box className="w-6 h-6 text-white" />
            </div>
            Available Components
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: 'Menu (Dropdown)', use: 'Dropdown menus, context menus' },
              { name: 'Listbox (Select)', use: 'Custom select dropdowns' },
              { name: 'Combobox', use: 'Autocomplete, search selects' },
              { name: 'Switch (Toggle)', use: 'Toggle switches, checkboxes' },
              { name: 'Disclosure', use: 'Accordions, collapsible content' },
              { name: 'Dialog (Modal)', use: 'Modals, dialogs, overlays' },
              { name: 'Popover', use: 'Popovers, tooltips' },
              { name: 'Radio Group', use: 'Radio button groups' },
              { name: 'Tabs', use: 'Tab interfaces' },
              { name: 'Transition', use: 'Animation transitions' }
            ].map((comp, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 text-sm mb-1">{comp.name}</h4>
                <p className="text-xs text-teal-700 dark:text-teal-300">{comp.use}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Installation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">React:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`npm install @headlessui/react`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Vue:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`npm install @headlessui/vue`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Example Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Menu Component:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Menu } from '@headlessui/react'

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className="px-4 py-2 bg-blue-500 text-white rounded">
        Options
      </Menu.Button>
      <Menu.Items className="absolute mt-2 bg-white rounded shadow-lg">
        <Menu.Item>
          {({ active }) => (
            <a className={\`\${active && 'bg-blue-500'}\`}>
              Account
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={\`\${active && 'bg-blue-500'}\`}>
              Settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Key Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { benefit: '100% Free', desc: 'Open source, no cost' },
              { benefit: 'Fully Accessible', desc: 'WAI-ARIA compliant out of the box' },
              { benefit: 'Completely Unstyled', desc: 'Style with Tailwind however you want' },
              { benefit: 'Keyboard Navigation', desc: 'Full keyboard support built-in' },
              { benefit: 'Focus Management', desc: 'Automatic focus handling' },
              { benefit: 'TypeScript Support', desc: 'Full TypeScript types included' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800 flex items-start gap-2">
                <span className="text-lg">✓</span>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.benefit}</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <Box className="w-5 h-5 text-emerald-600" />
        <AlertTitle className="text-2xl text-emerald-900 dark:text-emerald-100">Headless UI Tips</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for complex UI components (dropdowns, modals, tabs)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Handles all accessibility concerns automatically</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Completely free and open source</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Official docs: <a href="https://headlessui.com" target="_blank" rel="noopener noreferrer" className="underline">headlessui.com</a></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
