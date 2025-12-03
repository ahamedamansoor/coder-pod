'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { List, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlDataListProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const dataListExample = {
  html: `<h2>Datalist for Autocomplete</h2>
<div class="form-container">
  <form>
    <div class="form-group">
      <label for="fruit">Choose or type a fruit:</label>
      <input type="text" id="fruit" name="fruit" list="fruits" placeholder="Type 'ap' to see suggestions">
      <datalist id="fruits">
        <option value="Apple"></option>
        <option value="Apricot"></option>
        <option value="Banana"></option>
        <option value="Blueberry"></option>
        <option value="Cherry"></option>
        <option value="Coconut"></option>
        <option value="Dragon Fruit"></option>
        <option value="Elderberry"></option>
      </datalist>
    </div>

    <div class="form-group">
      <label for="country">Select country:</label>
      <input type="text" id="country" name="country" list="countries" placeholder="Type country name">
      <datalist id="countries">
        <option value="USA"></option>
        <option value="Canada"></option>
        <option value="Mexico"></option>
        <option value="United Kingdom"></option>
        <option value="France"></option>
      </datalist>
    </div>

    <button type="submit" class="btn">Submit</button>
  </form>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .form-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #f1f5f9;
  }
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  input {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn:hover {
  background: #2563eb;
}

@media (prefers-color-scheme: dark) {
  .btn {
    background: #1e40af;
  }
}`,
  js: ``,
};

export default function HtmlDataList({ onOpenWebPlayground }: HtmlDataListProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={List}
        category="HTML · Forms"
        title="Datalist Element"
        description="Autocomplete suggestions for text inputs"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <List className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Datalist Element
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Autocomplete suggestions for inputs
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The &lt;datalist&gt; element provides autocomplete suggestions for text inputs, improving UX without JavaScript.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">How It Works</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use the list attribute on input to reference a datalist by id. Browser shows matching options as user types.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <List className="w-7 h-7" />
            Datalist Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Datalist for Autocomplete"
            description="Text input with autocomplete suggestions"
            html={dataListExample.html}
            css={dataListExample.css}
            js={dataListExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use for common inputs</li>
                <li>✓ Keep list reasonable size</li>
                <li>✓ Useful suggestions</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Too many options</li>
                <li>✗ Irrelevant suggestions</li>
                <li>✗ Misspelled values</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

