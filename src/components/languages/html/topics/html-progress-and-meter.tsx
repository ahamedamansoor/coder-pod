'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Activity, Play, Code, CheckCircle, XCircle, Lightbulb, ArrowRight, Zap, Globe, TrendingUp, Gauge, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlProgressAndMeterProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<progress value='40' max='100'></progress>
<meter value='0.6'>60%</meter>`,
  css: `progress,meter{width:200px;display:block;margin:1rem 0}`,
  js: ''
};

export default function HtmlProgressAndMeter({ onOpenWebPlayground }: HtmlProgressAndMeterProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Activity} 
        category='HTML Basics' 
        title='Progress & Meter Elements' 
        description='Visual indicators for task completion and scalar measurements'
        colorTheme='blue'
      />

      {/* What are Progress & Meter? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BarChart3 className='w-5 h-5 text-blue-600' />
            What are Progress & Meter Elements?
          </CardTitle>
          <CardDescription>Two HTML5 elements for displaying different types of measurements</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Progress Element */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Activity className='w-4 h-4' />
                &lt;progress&gt; Element
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Shows <strong>task completion</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Represents <strong>progress from 0 to max</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Can be <strong>indeterminate</strong> (loading)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Used for <strong>ongoing operations</strong></span>
                </li>
              </ul>
              <div className='mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                <code className='text-xs text-slate-800 dark:text-slate-200'>&lt;progress value="70" max="100"&gt;</code>
              </div>
            </div>
            
            {/* Meter Element */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Gauge className='w-4 h-4' />
                &lt;meter&gt; Element
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Shows <strong>scalar measurement</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Represents value in a <strong>known range</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Has <strong>optimal/warning zones</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Used for <strong>gauges and ratings</strong></span>
                </li>
              </ul>
              <div className='mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-700'>
                <code className='text-xs text-slate-800 dark:text-slate-200'>&lt;meter value="0.7" min="0" max="1"&gt;</code>
              </div>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Key Difference</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Progress</strong> is for tasks that are <strong>in progress</strong> (incomplete → complete). <strong>Meter</strong> is for measurements in a <strong>known range</strong> (like temperature, disk usage, ratings).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Progress vs Meter Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            Progress vs Meter: When to Use Each?
          </CardTitle>
          <CardDescription>Understanding the differences and choosing the right element</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Progress Column */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-blue-200 dark:border-blue-800'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>&lt;progress&gt;</Badge>
                <span className='text-sm text-slate-600 dark:text-slate-400'>Task Completion</span>
              </div>
              
              <div className='space-y-3'>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Direction:</strong> Moves from 0 to max</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>State:</strong> Can be indeterminate</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Updates:</strong> Changes as task progresses</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Zones:</strong> No optimal/warning zones</span>
                </div>
              </div>

              <div className='bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800'>
                <div className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Use Cases:</div>
                <ul className='text-xs space-y-1'>
                  <li className='text-blue-700 dark:text-blue-300'>✓ File uploads</li>
                  <li className='text-blue-700 dark:text-blue-300'>✓ Download progress</li>
                  <li className='text-blue-700 dark:text-blue-300'>✓ Form completion</li>
                  <li className='text-blue-700 dark:text-blue-300'>✓ Loading indicators</li>
                </ul>
              </div>
            </div>

            {/* Meter Column */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-emerald-200 dark:border-emerald-800'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>&lt;meter&gt;</Badge>
                <span className='text-sm text-slate-600 dark:text-slate-400'>Scalar Measurement</span>
              </div>
              
              <div className='space-y-3'>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Direction:</strong> Can go up or down</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>State:</strong> Always has a value</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Updates:</strong> Shows current measurement</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Zones:</strong> Has low/high/optimum ranges</span>
                </div>
              </div>

              <div className='bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800'>
                <div className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Use Cases:</div>
                <ul className='text-xs space-y-1'>
                  <li className='text-emerald-700 dark:text-emerald-300'>✓ Disk usage</li>
                  <li className='text-emerald-700 dark:text-emerald-300'>✓ Battery level</li>
                  <li className='text-emerald-700 dark:text-emerald-300'>✓ Ratings/scores</li>
                  <li className='text-emerald-700 dark:text-emerald-300'>✓ Temperature gauge</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Element Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Activity className='w-5 h-5 text-blue-600' />
            Progress Element Attributes
          </CardTitle>
          <CardDescription>Attributes that control progress bar behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* value attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>value</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>(required)</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Current completion amount (between 0 and max)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;progress <span className='text-blue-600'>value</span>=<span className='text-amber-600'>"65"</span> max="100"&gt;
              </code>
              <div className='mt-2 text-xs text-slate-600 dark:text-slate-400'>
                💡 Omit for indeterminate state (loading spinner)
              </div>
            </div>

            {/* max attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>max</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>(optional, default: 1)</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Maximum value when task is complete
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;progress value="65" <span className='text-emerald-600'>max</span>=<span className='text-amber-600'>"100"</span>&gt;
              </code>
              <div className='mt-2 text-xs text-slate-600 dark:text-slate-400'>
                💡 Default is 1 (use 0-1 for percentage)
              </div>
            </div>
          </div>

          <Alert className='mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertDescription className='text-amber-700 dark:text-amber-300'>
              <strong>Indeterminate Progress:</strong> To create a loading spinner, use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>&lt;progress&gt;</code> without a <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>value</code> attribute.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Meter Element Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Gauge className='w-5 h-5 text-emerald-600' />
            Meter Element Attributes
          </CardTitle>
          <CardDescription>Attributes that control meter gauge behavior and zones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* value attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>value</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Current value of the measurement
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-blue-600'>value</span>=<span className='text-amber-600'>"0.7"</span>
              </code>
            </div>

            {/* min attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>min</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Minimum value (default: 0)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-emerald-600'>min</span>=<span className='text-amber-600'>"0"</span>
              </code>
            </div>

            {/* max attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600 hover:bg-purple-700'>max</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Maximum value (default: 1)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-purple-600'>max</span>=<span className='text-amber-600'>"1"</span>
              </code>
            </div>

            {/* low attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-orange-600 hover:bg-orange-700'>low</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Upper boundary of low range
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-orange-600'>low</span>=<span className='text-amber-600'>"0.3"</span>
              </code>
            </div>

            {/* high attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-red-600 hover:bg-red-700'>high</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Lower boundary of high range
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-red-600'>high</span>=<span className='text-amber-600'>"0.8"</span>
              </code>
            </div>

            {/* optimum attribute */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-green-600 hover:bg-green-700'>optimum</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Optimal value for the gauge
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-green-600'>optimum</span>=<span className='text-amber-600'>"0.5"</span>
              </code>
            </div>
          </div>

          <Alert className='mt-4 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <Lightbulb className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertDescription className='text-emerald-700 dark:text-emerald-300'>
              <strong>Color Zones:</strong> Browsers automatically color the meter based on <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>low</code>, <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>high</code>, and <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>optimum</code> values (green for optimal, yellow for suboptimal, red for critical).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-amber-600' />
            Common Use Cases
          </CardTitle>
          <CardDescription>Real-world scenarios for progress and meter elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Progress Use Cases */}
            <div>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Activity className='w-4 h-4' />
                Progress Element
              </h3>
              <div className='grid gap-3'>
                {[
                  { icon: TrendingUp, title: 'File Uploads', example: 'Upload progress: 45/100 MB' },
                  { icon: Activity, title: 'Downloads', example: 'Downloading... 78%' },
                  { icon: BarChart3, title: 'Form Completion', example: 'Step 3 of 5 completed' },
                  { icon: Zap, title: 'Loading States', example: 'Processing your request...' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800'>
                    <div className='flex items-center gap-2 mb-1'>
                      <useCase.icon className='w-4 h-4 text-blue-600' />
                      <h4 className='font-semibold text-sm text-blue-700 dark:text-blue-300'>{useCase.title}</h4>
                    </div>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Meter Use Cases */}
            <div>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Gauge className='w-4 h-4' />
                Meter Element
              </h3>
              <div className='grid gap-3'>
                {[
                  { icon: Gauge, title: 'Disk Usage', example: '75 GB used of 100 GB' },
                  { icon: Zap, title: 'Battery Level', example: 'Battery: 42% remaining' },
                  { icon: TrendingUp, title: 'Performance', example: 'CPU usage: 68%' },
                  { icon: BarChart3, title: 'Ratings', example: 'Score: 8.5 out of 10' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800'>
                    <div className='flex items-center gap-2 mb-1'>
                      <useCase.icon className='w-4 h-4 text-emerald-600' />
                      <h4 className='font-semibold text-sm text-emerald-700 dark:text-emerald-300'>{useCase.title}</h4>
                    </div>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples with FrontendCodePreview */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <Activity className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Progress & Meter in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See how progress and meter elements work with various examples and styling
        </p>

        {/* Example 1: Determinate Progress */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. Determinate Progress Bar'
              description='Progress bar showing specific completion percentage with file upload example'
            html={`<div class="progress-container">
  <label for="upload-progress">File Upload Progress</label>
  <progress id="upload-progress" value="65" max="100"></progress>
  <span class="progress-label">Uploading... 65 MB of 100 MB (65%)</span>
</div>

<p class="note">⏳ Progress bar shows determinate state with specific value</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.progress-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

html.dark .progress-container {
  background: #1e293b;
}

label {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
}

html.dark label {
  color: #cbd5e1;
}

progress {
  width: 100%;
  height: 28px;
  appearance: none;
  border: none;
  border-radius: 8px;
}

progress::-webkit-progress-bar {
  background: #e2e8f0;
  border-radius: 8px;
}

html.dark progress::-webkit-progress-bar {
  background: #334155;
}

progress::-webkit-progress-value {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 8px;
}

progress::-moz-progress-bar {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 8px;
}

.progress-label {
  font-size: 0.85rem;
  color: #64748b;
}

html.dark .progress-label {
  color: #94a3b8;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
            colorTheme='blue'
            icon={Activity}
            previewHeight='300px'
          />
        </CardContent>
      </Card>

      {/* Example 2: Indeterminate Progress */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. Indeterminate Progress (Loading)'
            description='Progress bar without value attribute shows indeterminate/loading state'
            html={`<div class="progress-container">
  <label for="loading-progress">Processing Request</label>
  <progress id="loading-progress"></progress>
  <span class="progress-label">Please wait...</span>
</div>

<p class="note">⏳ Progress without value creates animated loading indicator</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.progress-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

html.dark .progress-container {
  background: #1e293b;
}

label {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
}

html.dark label {
  color: #cbd5e1;
}

progress {
  width: 100%;
  height: 28px;
  appearance: none;
  border: none;
  border-radius: 8px;
}

progress::-webkit-progress-bar {
  background: #e2e8f0;
  border-radius: 8px;
}

html.dark progress::-webkit-progress-bar {
  background: #334155;
}

/* Indeterminate animation */
progress:indeterminate::-webkit-progress-bar {
  background: linear-gradient(
    90deg,
    #e2e8f0 0%,
    #8b5cf6 50%,
    #e2e8f0 100%
  );
  background-size: 200% 100%;
  animation: progress-slide 1.5s linear infinite;
}

@keyframes progress-slide {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

.progress-label {
  font-size: 0.85rem;
  color: #64748b;
}

html.dark .progress-label {
  color: #94a3b8;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}`}
            colorTheme='purple'
            icon={Activity}
            previewHeight='300px'
          />
        </CardContent>
      </Card>

      {/* Example 3: Disk Usage Meter */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. Disk Usage Meter (Optimal: Low)'
            description='Meter element showing disk usage with color zones based on optimum value'
            html={`<div class="meter-container">
  <label for="disk-meter">Disk Storage</label>
  <meter 
    id="disk-meter" 
    value="75" 
    min="0" 
    max="100" 
    low="60" 
    high="80" 
    optimum="20">
  </meter>
  <span class="meter-label">75 GB used of 100 GB (75% full)</span>
</div>

<p class="note">💾 Meter shows red because value is high and optimum is low</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.meter-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

html.dark .meter-container {
  background: #1e293b;
}

label {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
}

html.dark label {
  color: #cbd5e1;
}

meter {
  width: 100%;
  height: 28px;
  appearance: none;
  border: none;
  border-radius: 8px;
}

meter::-webkit-meter-bar {
  background: #e2e8f0;
  border-radius: 8px;
}

html.dark meter::-webkit-meter-bar {
  background: #334155;
}

meter::-webkit-meter-optimum-value {
  background: #10b981;
  border-radius: 8px;
}

meter::-webkit-meter-suboptimum-value {
  background: #f59e0b;
  border-radius: 8px;
}

meter::-webkit-meter-even-less-good-value {
  background: #ef4444;
  border-radius: 8px;
}

.meter-label {
  font-size: 0.85rem;
  color: #64748b;
}

html.dark .meter-label {
  color: #94a3b8;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #7f1d1d;
  color: #fecaca;
}`}
            colorTheme='amber'
            icon={Gauge}
            previewHeight='300px'
          />
        </CardContent>
      </Card>

      {/* Example 4: Battery Level Meter */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. Battery Level Meter (Optimal: High)'
            description='Meter showing battery level where higher values are better'
            html={`<div class="meter-container">
  <label for="battery-meter">Battery Level</label>
  <meter 
    id="battery-meter" 
    value="0.42" 
    min="0" 
    max="1" 
    low="0.2" 
    high="0.8" 
    optimum="0.9">
  </meter>
  <span class="meter-label">42% remaining (charging recommended)</span>
</div>

<p class="note">🔋 Meter shows yellow because value is medium and optimum is high</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.meter-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

html.dark .meter-container {
  background: #1e293b;
}

label {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
}

html.dark label {
  color: #cbd5e1;
}

meter {
  width: 100%;
  height: 28px;
  appearance: none;
  border: none;
  border-radius: 8px;
}

meter::-webkit-meter-bar {
  background: #e2e8f0;
  border-radius: 8px;
}

html.dark meter::-webkit-meter-bar {
  background: #334155;
}

meter::-webkit-meter-optimum-value {
  background: #10b981;
  border-radius: 8px;
}

meter::-webkit-meter-suboptimum-value {
  background: #f59e0b;
  border-radius: 8px;
}

meter::-webkit-meter-even-less-good-value {
  background: #ef4444;
  border-radius: 8px;
}

.meter-label {
  font-size: 0.85rem;
  color: #64748b;
}

html.dark .meter-label {
  color: #94a3b8;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #78350f;
  color: #fde68a;
}`}
            colorTheme='emerald'
            icon={Zap}
            previewHeight='300px'
          />
        </CardContent>
      </Card>

      {/* Example 5: Performance Score Meter */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='5. Performance Score (Optimal: Middle)'
            description='Meter for ratings where middle range is optimal'
            html={`<div class="meter-container">
  <label for="score-meter">Performance Rating</label>
  <meter 
    id="score-meter" 
    value="8.5" 
    min="0" 
    max="10" 
    low="4" 
    high="9" 
    optimum="7">
  </meter>
  <span class="meter-label">8.5 out of 10 - Excellent performance!</span>
</div>

<p class="note">⭐ Meter shows green because value is near optimal range</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.meter-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

html.dark .meter-container {
  background: #1e293b;
}

label {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
}

html.dark label {
  color: #cbd5e1;
}

meter {
  width: 100%;
  height: 28px;
  appearance: none;
  border: none;
  border-radius: 8px;
}

meter::-webkit-meter-bar {
  background: #e2e8f0;
  border-radius: 8px;
}

html.dark meter::-webkit-meter-bar {
  background: #334155;
}

meter::-webkit-meter-optimum-value {
  background: #10b981;
  border-radius: 8px;
}

meter::-webkit-meter-suboptimum-value {
  background: #f59e0b;
  border-radius: 8px;
}

meter::-webkit-meter-even-less-good-value {
  background: #ef4444;
  border-radius: 8px;
}

.meter-label {
  font-size: 0.85rem;
  color: #64748b;
}

html.dark .meter-label {
  color: #94a3b8;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
            colorTheme='purple'
            icon={TrendingUp}
            previewHeight='300px'
          />
        </CardContent>
      </Card>
    </div>

    {/* Best Practices */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <CheckCircle className='w-5 h-5 text-green-600' />
          Best Practices
        </CardTitle>
        <CardDescription>Tips for using progress and meter elements effectively</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Do This */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-green-200 dark:border-green-800'>
                <CheckCircle className='w-5 h-5 text-green-600' />
                <span className='font-semibold text-green-700 dark:text-green-400'>✅ Do This</span>
              </div>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>aria-label</code> for accessibility</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Include text labels near the element</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Use progress for incomplete tasks</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Use meter for measurements in ranges</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Set appropriate <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>low/high/optimum</code> for meters</span>
                </li>
              </ul>
            </div>

            {/* Avoid This */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-red-200 dark:border-red-800'>
                <XCircle className='w-5 h-5 text-red-600' />
                <span className='font-semibold text-red-700 dark:text-red-400'>❌ Avoid This</span>
              </div>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use progress for static measurements</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use meter for task completion</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't forget <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>max</code> attribute</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't rely solely on color (add text)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use invalid value ranges</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Card className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-emerald-700 dark:text-emerald-300'>
            <Globe className='w-5 h-5' />
            Browser Support
          </CardTitle>
          <CardDescription>Both elements are widely supported in modern browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: 'Chrome', version: '6+', supported: true },
              { name: 'Firefox', version: '6+', supported: true },
              { name: 'Safari', version: '6+', supported: true },
              { name: 'Edge', version: '12+', supported: true },
            ].map((browser, index) => (
              <div key={index} className='bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 text-center'>
                <div className='font-semibold text-slate-700 dark:text-slate-200'>{browser.name}</div>
                <div className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{browser.version}</div>
                <Badge className='mt-2 bg-emerald-600 hover:bg-emerald-700'>✓ Supported</Badge>
              </div>
            ))}
          </div>
          <Alert className='mt-4 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertDescription className='text-blue-700 dark:text-blue-300'>
              <strong>Excellent Support:</strong> Both <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>&lt;progress&gt;</code> and <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>&lt;meter&gt;</code> have been supported since 2011-2012 in all major browsers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Progress & Meter Playground</CardTitle>
          <CardDescription>Experiment with both elements in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Progress & Meter Playground'
            description='Play around with progress bars and meter gauges'
            features={[
              'Progress Bars',
              'Meter Gauges',
              'Color Zones',
              'Custom Styling'
            ]}
            buttonText='Open Progress & Meter Playground'
            onLaunchPlayground={onOpenWebPlayground!}
            playgroundData={{
              html: demo.html,
              css: demo.css,
              js: demo.js
            }}
            colorTheme='blue'
          />
        </CardContent>
      </Card>
    </div>
  );
}

