'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Calendar, Lightbulb, CheckCircle2, Settings } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlDateTimeInputsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const dateTimeExample = {
  html: `<h2>Date & Time Input Types</h2>
<div class="form-container">
  <div class="form-group">
    <label for="birthday">Birthday (Date)</label>
    <input type="date" id="birthday">
    <small>Select a specific date</small>
  </div>

  <div class="form-group">
    <label for="meeting-time">Meeting Time</label>
    <input type="time" id="meeting-time">
    <small>Hours and minutes only</small>
  </div>

  <div class="form-group">
    <label for="event-datetime">Event Date & Time</label>
    <input type="datetime-local" id="event-datetime">
    <small>Date and time combined</small>
  </div>

  <div class="form-group">
    <label for="week">Week Selection</label>
    <input type="week" id="week">
    <small>Select a week of the year</small>
  </div>

  <div class="form-group">
    <label for="month">Month Selection</label>
    <input type="month" id="month">
    <small>Year and month only</small>
  </div>

  <button type="submit" class="btn">Submit</button>
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

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="week"],
input[type="month"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  cursor: pointer;
}

input[type="date"]:focus,
input[type="time"]:focus,
input[type="datetime-local"]:focus,
input[type="week"]:focus,
input[type="month"]:focus {
  outline: none;
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}

@media (prefers-color-scheme: dark) {
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="week"],
  input[type="month"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
}

@media (prefers-color-scheme: dark) {
  small {
    color: #9ca3af;
  }
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background: #06b6d4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #0891b2;
}

@media (prefers-color-scheme: dark) {
  .btn {
    background: #0891b2;
  }
  
  .btn:hover {
    background: #0e7490;
  }
}`,
  js: ``,
};

const dateRangeExample = {
  html: `<h2>Date Range & Constraints</h2>
<div class="form-container">
  <div class="form-group">
    <label for="start-date">Start Date</label>
    <input type="date" id="start-date" min="2025-01-01" max="2025-12-31">
    <small>Limited to year 2025</small>
  </div>

  <div class="form-group">
    <label for="appointment">Appointment Time</label>
    <input type="time" id="appointment" min="09:00" max="17:00" step="900">
    <small>Business hours only (9 AM - 5 PM)</small>
  </div>

  <div class="form-group">
    <label for="deadline">Deadline</label>
    <input type="datetime-local" id="deadline" required>
    <small>Must be provided (required)</small>
  </div>

  <button type="submit" class="btn">Submit</button>
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

input[type="date"],
input[type="time"],
input[type="datetime-local"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  cursor: pointer;
}

input[type="date"]:focus,
input[type="time"]:focus,
input[type="datetime-local"]:focus {
  outline: none;
  border-color: #06b6d4;
}

@media (prefers-color-scheme: dark) {
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
}

@media (prefers-color-scheme: dark) {
  small {
    color: #9ca3af;
  }
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background: #06b6d4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #0891b2;
}

@media (prefers-color-scheme: dark) {
  .btn {
    background: #0891b2;
  }
  
  .btn:hover {
    background: #0e7490;
  }
}`,
  js: ``,
};

export default function HtmlDateTimeInputs({ onOpenWebPlayground }: HtmlDateTimeInputsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Calendar}
        category="HTML · Forms"
        title="Date & Time Inputs"
        description="Learn to use date and time input types"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Calendar className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Date & Time Inputs
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Built-in date and time pickers
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            HTML provides native date and time input types with built-in date pickers, reducing JavaScript complexity and improving UX.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Native Pickers</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Browsers provide native date/time pickers optimized for each platform (mobile calendar, desktop picker, etc).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Date & Time Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Calendar className="w-7 h-7" />
            Date & Time Input Types
          </CardTitle>
          <CardDescription className="text-base">
            Different temporal input types for various use cases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Date & Time Inputs"
            description="All available date and time input types"
            html={dateTimeExample.html}
            css={dateTimeExample.css}
            js={dateTimeExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { type: 'date', desc: 'YYYY-MM-DD format' },
              { type: 'time', desc: 'HH:MM format' },
              { type: 'datetime-local', desc: 'Date and time combined' },
              { type: 'month', desc: 'YYYY-MM format' },
              { type: 'week', desc: 'Year and week number' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-1">type="{item.type}"</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Date Constraints */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Date & Time Constraints
          </CardTitle>
          <CardDescription className="text-base">
            Limit date and time ranges
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Use min, max, and step attributes to constrain date/time selections to valid ranges.
          </p>

          <FrontendCodePreview
            title="Date & Time Constraints"
            description="Limiting date/time ranges and values"
            html={dateRangeExample.html}
            css={dateRangeExample.css}
            js={dateRangeExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
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
                <li>✓ Set min/max dates</li>
                <li>✓ Use appropriate types</li>
                <li>✓ Provide clear labels</li>
                <li>✓ Show format hints</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ No date constraints</li>
                <li>✗ Unclear format</li>
                <li>✗ Custom date pickers (use native)</li>
                <li>✗ No validation feedback</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

