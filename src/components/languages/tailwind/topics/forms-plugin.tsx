'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Package, CheckCircle, Lightbulb, ArrowRight, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FormsPlugin() {

  const withPluginHTML = `<div class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 p-8">
  <div class="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Sign Up Form</h3>
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input type="email" placeholder="you@example.com" 
          class="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
        <select class="form-select w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" id="terms" class="form-checkbox rounded text-blue-600 focus:ring-blue-500" />
        <label for="terms" class="text-sm text-gray-700 dark:text-gray-300">I agree to the terms</label>
      </div>
    </form>
  </div>
</div>`;

  const checkboxesHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
    <h4 class="font-bold text-gray-900 dark:text-white mb-4">Preferences</h4>
    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <input type="checkbox" id="pref1" class="form-checkbox rounded text-purple-600 focus:ring-purple-500" checked />
        <label for="pref1" class="text-gray-700 dark:text-gray-300">Email notifications</label>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" id="pref2" class="form-checkbox rounded text-purple-600 focus:ring-purple-500" />
        <label for="pref2" class="text-gray-700 dark:text-gray-300">SMS updates</label>
      </div>
      <div class="flex items-start gap-2 mt-4">
        <input type="radio" id="radio1" name="plan" class="form-radio text-purple-600 focus:ring-purple-500 mt-1" checked />
        <div>
          <label for="radio1" class="font-medium text-gray-900 dark:text-white">Free Plan</label>
          <p class="text-xs text-gray-500 dark:text-gray-400">Basic features</p>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <input type="radio" id="radio2" name="plan" class="form-radio text-purple-600 focus:ring-purple-500 mt-1" />
        <div>
          <label for="radio2" class="font-medium text-gray-900 dark:text-white">Pro Plan</label>
          <p class="text-xs text-gray-500 dark:text-gray-400">All features included</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Package}
        category="Tailwind CSS · Forms & UI Components"
        title="Forms Plugin"
        description="Beautiful form defaults with @tailwindcss/forms"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            What is @tailwindcss/forms?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Official Plugin</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Provides a basic reset for form styles that makes form elements easy to override with utilities
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Why Use It?</h3>
            <div className="space-y-2">
              {[
                'Consistent form styling across all browsers',
                'Better default appearance for inputs, selects, and checkboxes',
                'Easier to style with Tailwind utilities',
                'Removes browser inconsistencies'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            Installation & Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Step 1: Install the plugin</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              npm install -D @tailwindcss/forms
            </pre>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Step 2: Add to tailwind.config.js</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
}`}
            </pre>
          </div>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">That's it!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              The plugin is now active. All form elements automatically get better defaults.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Form with Plugin
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={withPluginHTML}
            title="Styled Form"
            description="Inputs with better defaults"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Checkboxes & Radio Buttons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={checkboxesHTML}
            title="Beautiful Checkboxes"
            description="Better styled form controls"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Using the Classes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { class: 'form-input', desc: 'Text inputs, email, password' },
              { class: 'form-textarea', desc: 'Textarea elements' },
              { class: 'form-select', desc: 'Select dropdowns' },
              { class: 'form-checkbox', desc: 'Checkbox inputs' },
              { class: 'form-radio', desc: 'Radio button inputs' }
            ].map(item => (
              <div key={item.class} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <code className="font-mono font-bold text-green-900 dark:text-green-100">{item.class}</code>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <Package className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Plugin Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Plugin adds <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">form-*</code> classes automatically</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Still use Tailwind utilities: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">rounded-lg border-gray-300</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great starting point for custom form styling</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
