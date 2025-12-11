'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Database, 
  Hash, 
  Type,
  CheckCircle2,
  Lightbulb,
  Palette,
  List,
  FileJson,
  ToggleLeft,
  Sparkles
} from 'lucide-react';

interface SassDataTypesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassDataTypesNew({ onOpenWebPlayground }: SassDataTypesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Database}
        category="Sass/SCSS · Fundamentals"
        title="Data Types in SCSS"
        description="Learn about the different types of data you can store in SCSS variables: numbers, strings, colors, lists, maps, booleans, and null."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Understanding Data Types"
            description="SCSS supports 7 different data types"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            SCSS variables can store different types of data. Understanding these types helps you write more powerful and flexible stylesheets.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Hash className="w-5 h-5 text-white" />
              </div>
              <h5 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-1">Numbers</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">16px, 2rem, 100%</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Type className="w-5 h-5 text-white" />
              </div>
              <h5 className="font-semibold text-sm text-purple-700 dark:text-purple-300 mb-1">Strings</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">'Arial', sans-serif</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h5 className="font-semibold text-sm text-pink-700 dark:text-pink-300 mb-1">Colors</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">#3b82f6, blue</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <List className="w-5 h-5 text-white" />
              </div>
              <h5 className="font-semibold text-sm text-green-700 dark:text-green-300 mb-1">Lists</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">1rem 2rem 3rem</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <FileJson className="w-5 h-5 text-white" />
              </div>
              <h5 className="font-semibold text-sm text-orange-700 dark:text-orange-300 mb-1">Maps</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">(key: value)</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center mb-3">
                <ToggleLeft className="w-5 h-5 text-white" />
              </div>
              <h5 className="font-semibold text-sm text-cyan-700 dark:text-cyan-300 mb-1">Boolean & Null</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">true, false, null</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Numbers */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Numbers"
            description="Integers, decimals, and units"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Numbers can be <strong>integers or decimals</strong>, with or without units like <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">px</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">rem</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">%</code>, etc.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">With Units</h5>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-sm border border-blue-200 dark:border-blue-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$width: 100px;</div>
                <div className="text-pink-600 dark:text-pink-400">$height: 10rem;</div>
                <div className="text-pink-600 dark:text-pink-400">$opacity: 0.8;</div>
                <div className="text-pink-600 dark:text-pink-400">$percentage: 50%;</div>
                <div className="text-pink-600 dark:text-pink-400">$angle: 45deg;</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Math Operations</h5>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-4 font-mono text-sm border border-cyan-200 dark:border-cyan-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">width: <span className="text-pink-600 dark:text-pink-400">100px + 50px</span>; <span className="text-green-600 dark:text-green-400">// 150px</span></div>
                <div className="text-gray-700 dark:text-gray-300">padding: <span className="text-pink-600 dark:text-pink-400">1rem * 2</span>; <span className="text-green-600 dark:text-green-400">// 2rem</span></div>
                <div className="text-gray-700 dark:text-gray-300">margin: <span className="text-pink-600 dark:text-pink-400">10px / 2</span>; <span className="text-green-600 dark:text-green-400">// 5px</span></div>
                <div className="text-gray-700 dark:text-gray-300">size: <span className="text-pink-600 dark:text-pink-400">20px - 5px</span>; <span className="text-green-600 dark:text-green-400">// 15px</span></div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Unit Conversion</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              You can perform math on numbers with the same units. Different units will cause errors unless converted!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Strings */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Strings"
            description="Text values - quoted or unquoted"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Strings can be written with or without quotes. Use quotes when the string contains spaces or special characters.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Quoted Strings</h5>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$font: 'Arial';</div>
                <div className="text-pink-600 dark:text-pink-400">$font-stack: 'Segoe UI', sans-serif;</div>
                <div className="text-pink-600 dark:text-pink-400">$path: '/images/bg.jpg';</div>
                <div className="text-pink-600 dark:text-pink-400">$message: "Hello World";</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-3">Unquoted Strings</h5>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$weight: bold;</div>
                <div className="text-pink-600 dark:text-pink-400">$style: italic;</div>
                <div className="text-pink-600 dark:text-pink-400">$family: sans-serif;</div>
                <div className="text-pink-600 dark:text-pink-400">$position: absolute;</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Colors"
            description="Hex, RGB, HSL, and named colors"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Colors can be specified in multiple formats. All formats are valid and work the same way.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded" style={{ background: '#3b82f6' }}></div>
                <h5 className="font-semibold text-blue-700 dark:text-blue-300">Hex Colors</h5>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$blue: #3b82f6;</div>
                <div className="text-pink-600 dark:text-pink-400">$red: #ef4444;</div>
                <div className="text-pink-600 dark:text-pink-400">$shorthand: #fff;</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded" style={{ background: 'rgb(59, 130, 246)' }}></div>
                <h5 className="font-semibold text-purple-700 dark:text-purple-300">RGB / RGBA</h5>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$color: rgb(59, 130, 246);</div>
                <div className="text-pink-600 dark:text-pink-400">$transparent: rgba(59, 130, 246, 0.5);</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded" style={{ background: 'hsl(217, 91%, 60%)' }}></div>
                <h5 className="font-semibold text-pink-700 dark:text-pink-300">HSL / HSLA</h5>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$hue: hsl(217, 91%, 60%);</div>
                <div className="text-pink-600 dark:text-pink-400">$alpha: hsla(217, 91%, 60%, 0.8);</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-blue-500"></div>
                <h5 className="font-semibold text-green-700 dark:text-green-300">Named Colors</h5>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$color: blue;</div>
                <div className="text-pink-600 dark:text-pink-400">$bg: white;</div>
                <div className="text-pink-600 dark:text-pink-400">$text: black;</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lists */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<List className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Lists"
            description="Arrays of values"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Lists are sequences of values separated by <strong>spaces</strong> or <strong>commas</strong>. Great for storing multiple related values.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Space-Separated</h5>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                <div className="text-green-600 dark:text-green-400">// CSS shorthand values</div>
                <div className="text-pink-600 dark:text-pink-400">$padding: 10px 20px 10px 20px;</div>
                <div className="text-pink-600 dark:text-pink-400">$margin: 1rem 2rem;</div>
                <div className="text-pink-600 dark:text-pink-400">$border: 1px solid black;</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Comma-Separated</h5>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg p-4 font-mono text-sm border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="text-green-600 dark:text-green-400">// Font stacks</div>
                <div className="text-pink-600 dark:text-pink-400">$fonts: Arial, Helvetica, sans-serif;</div>
                <div className="text-pink-600 dark:text-pink-400">$sizes: 1rem, 1.5rem, 2rem;</div>
                <div className="text-pink-600 dark:text-pink-400">$colors: red, blue, green;</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Lists are Indexed</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Access list items using <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">nth($list, index)</code>. Lists start at index 1, not 0!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Maps */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileJson className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Maps"
            description="Key-value pairs (like objects)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Maps store <strong>key-value pairs</strong>, similar to objects in JavaScript. Perfect for theme configurations and organized data.
          </p>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
            <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Map Syntax</h5>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-sm border border-orange-200 dark:border-orange-800 space-y-1">
              <div className="text-green-600 dark:text-green-400">// Theme colors map</div>
              <div className="text-pink-600 dark:text-pink-400">$colors: (</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">primary: #3b82f6,</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">secondary: #8b5cf6,</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">success: #10b981,</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">danger: #ef4444</div>
              <div className="text-pink-600 dark:text-pink-400">);</div>
              <div className="text-gray-700 dark:text-gray-300 mt-3">// Access values</div>
              <div className="text-gray-700 dark:text-gray-300">color: <span className="text-pink-600 dark:text-pink-400">map-get($colors, primary)</span>; <span className="text-green-600 dark:text-green-400">// #3b82f6</span></div>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
            <h5 className="font-semibold text-amber-700 dark:text-amber-300 mb-3">Nested Maps</h5>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 font-mono text-sm border border-amber-200 dark:border-amber-800 space-y-1">
              <div className="text-pink-600 dark:text-pink-400">$theme: (</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">colors: (</div>
              <div className="text-pink-600 dark:text-pink-400 ml-8">primary: #3b82f6,</div>
              <div className="text-pink-600 dark:text-pink-400 ml-8">text: #1e293b</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">),</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">spacing: (</div>
              <div className="text-pink-600 dark:text-pink-400 ml-8">sm: 0.5rem,</div>
              <div className="text-pink-600 dark:text-pink-400 ml-8">md: 1rem</div>
              <div className="text-pink-600 dark:text-pink-400 ml-4">)</div>
              <div className="text-pink-600 dark:text-pink-400">);</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booleans and Null */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ToggleLeft className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Booleans & Null"
            description="True, false, and empty values"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Booleans</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Used in <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@if</code> conditions
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-4 font-mono text-sm border border-cyan-200 dark:border-cyan-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$debug: true;</div>
                <div className="text-pink-600 dark:text-pink-400">$production: false;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">@if $debug {'{'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4">// Debug styles</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Null</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Represents "no value" or "empty"
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-sm border border-blue-200 dark:border-blue-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">$shadow: null;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.box {'{'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4">// null values are ignored</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">box-shadow: $shadow;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="All Data Types in Action"
          description="See all data types working together"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="data-demo">
  <h2>Data Types Demo</h2>
  <div class="type-card number-card">
    <h3>Numbers</h3>
    <p>16px, 2rem, 100%</p>
  </div>
  <div class="type-card string-card">
    <h3>Strings</h3>
    <p>'Arial', sans-serif</p>
  </div>
  <div class="type-card color-card">
    <h3>Colors</h3>
    <p>#3b82f6, rgb(), hsl()</p>
  </div>
</div>`}
          css={`// Numbers
$base-size: 1rem;
$padding: 1.5rem;
$border-width: 2px;

// Strings
$font-family: -apple-system, sans-serif;
$weight: bold;

// Colors
$primary: #3b82f6;
$secondary: #8b5cf6;
$success: #10b981;

// Lists
$spacing: 1rem 1.5rem 2rem;
$shadows: 0 2px 4px rgba(0,0,0,0.1);

// Maps
$colors: (
  number: $primary,
  string: $secondary,
  color: $success
);

// Base
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family;
  background: #f8fafc;
  padding: $padding * 2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.data-demo {
  max-width: 700px;
  width: 100%;
  
  h2 {
    color: $primary;
    font-size: $base-size * 1.5;
    margin-bottom: $padding;
    font-weight: $weight;
    
    @media (prefers-color-scheme: dark) {
      color: #60a5fa;
    }
  }
}

.type-card {
  background: white;
  padding: $padding;
  border-radius: 12px;
  margin-bottom: $base-size;
  box-shadow: $shadows;
  border-left-width: $border-width * 2;
  border-left-style: solid;
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  }
  
  &:hover {
    transform: translateX(8px);
  }
  
  h3 {
    font-size: $base-size * 1.25;
    margin-bottom: $base-size * 0.5;
    font-weight: $weight;
  }
  
  p {
    color: #64748b;
    font-size: $base-size * 0.875;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

// Using map-get to access values
.number-card {
  border-left-color: map-get($colors, number);
  
  h3 {
    color: map-get($colors, number);
    
    @media (prefers-color-scheme: dark) {
      color: #60a5fa;
    }
  }
}

.string-card {
  border-left-color: map-get($colors, string);
  
  h3 {
    color: map-get($colors, string);
    
    @media (prefers-color-scheme: dark) {
      color: #a78bfa;
    }
  }
}

.color-card {
  border-left-color: map-get($colors, color);
  
  h3 {
    color: map-get($colors, color);
    
    @media (prefers-color-scheme: dark) {
      color: #34d399;
    }
  }
}`}
          title="Data Types Example"
          description="Numbers, strings, colors, lists, and maps all working together"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Numbers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                With or without units. Support math operations.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Strings</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Quoted or unquoted text values.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Colors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hex, RGB, HSL, or named colors.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Lists</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Space or comma-separated values.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Key-value pairs for organized data.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Boolean & Null</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For conditionals and empty values.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Nesting!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now you understand all SCSS data types! Let's learn about <strong>nesting</strong> to organize your CSS structure better! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
