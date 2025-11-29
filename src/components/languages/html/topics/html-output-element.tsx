'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Calculator, Play, Code, CheckCircle, XCircle, Lightbulb, ArrowRight, Zap, Globe, TrendingUp, FileOutput } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlOutputElementProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<form oninput='sum.value = parseInt(a.value)+parseInt(b.value)'>
<input type='number' id='a' value='2'> + <input type='number' id='b' value='3'> = <output name='sum'>5</output>
</form>`,css:`form{font-family:system-ui;padding:1rem}input{width:60px}`,js:''};
export default function HtmlOutputElement({ onOpenWebPlayground }: HtmlOutputElementProps){
  return <div className='space-y-10 pb-16'>
    <PageHeader 
      icon={Calculator} 
      category='HTML Basics' 
      title='Output Element' 
      description='Display live calculation results and dynamic form values'
      colorTheme='blue'
    />

    {/* What is Output Element? */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <FileOutput className='w-5 h-5 text-blue-600' />
          What is the Output Element?
        </CardTitle>
        <CardDescription>The &lt;output&gt; element represents the result of a calculation or user action</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2'>
              <CheckCircle className='w-4 h-4' />
              Key Features
            </h3>
            <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <span className='text-blue-500 mt-0.5'>•</span>
                <span>Displays <strong>live calculation results</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-blue-500 mt-0.5'>•</span>
                <span>Updates <strong>automatically</strong> with form inputs</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-blue-500 mt-0.5'>•</span>
                <span>Can be <strong>read by screen readers</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-blue-500 mt-0.5'>•</span>
                <span>Semantic meaning for <strong>results</strong></span>
              </li>
            </ul>
          </div>
          
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
            <h3 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2'>
              <Code className='w-4 h-4' />
              Basic Structure
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<form oninput="result.value = a.value">
  <input type="number" id="a">
  
  <output name="result" for="a">
    0
  </output>
</form>`}</code>
            </pre>
          </div>
        </div>

        <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
          <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
          <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Output?</AlertTitle>
          <AlertDescription className='text-blue-600 dark:text-blue-400'>
            Unlike a regular <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>&lt;span&gt;</code>, the <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>&lt;output&gt;</code> element has <strong>semantic meaning</strong> - it tells browsers and assistive technologies that this is a <strong>calculated result</strong>.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* How Output Works */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Zap className='w-5 h-5 text-emerald-600' />
          How Output Element Works
        </CardTitle>
        <CardDescription>Understanding the live update mechanism</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-950/20 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            {/* Input Element */}
            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-blue-500 dark:border-blue-600 flex-1 max-w-xs'>
              <div className='text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-2'>Step 1: Input Changes</div>
              <code className='text-sm font-mono block bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700 mb-2'>
                &lt;input id=<span className='text-emerald-600'>"num"</span> /&gt;
              </code>
              <div className='text-xs text-slate-600 dark:text-slate-400 space-y-1'>
                <div>• User types value</div>
                <div>• Triggers <code className='bg-slate-100 dark:bg-slate-900 px-1 rounded text-blue-600'>oninput</code> event</div>
              </div>
            </div>

            {/* Arrow */}
            <div className='flex md:flex-row flex-col items-center'>
              <ArrowRight className='w-8 h-8 text-emerald-500 dark:text-emerald-400 md:rotate-0 rotate-90' />
              <div className='text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 md:mt-0 md:ml-1'>Calculate</div>
            </div>

            {/* Output Element */}
            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-emerald-500 dark:border-emerald-600 flex-1 max-w-xs'>
              <div className='text-xs uppercase tracking-wide text-emerald-600 dark:text-emerald-400 font-semibold mb-2'>Step 2: Output Updates</div>
              <code className='text-sm font-mono block bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700 mb-2'>
                &lt;output for=<span className='text-emerald-600'>"num"</span>&gt;<br/>
                &nbsp;&nbsp;Result<br/>
                &lt;/output&gt;
              </code>
              <div className='text-xs text-slate-600 dark:text-slate-400 space-y-1'>
                <div>• Displays result</div>
                <div>• Updates <strong>instantly</strong></div>
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <div className='bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <div className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2'>Complete Example:</div>
              <code className='text-xs font-mono block bg-slate-100 dark:bg-slate-900 p-3 rounded'>
                <span className='text-slate-600 dark:text-slate-400'>&lt;form</span> <span className='text-emerald-600'>oninput</span>=<span className='text-amber-600'>"result.value = parseInt(num.value) * 2"</span><span className='text-slate-600 dark:text-slate-400'>&gt;</span><br/>
                &nbsp;&nbsp;<span className='text-slate-600 dark:text-slate-400'>&lt;input</span> <span className='text-blue-600'>type</span>=<span className='text-amber-600'>"number"</span> <span className='text-blue-600'>id</span>=<span className='text-amber-600'>"num"</span> <span className='text-blue-600'>value</span>=<span className='text-amber-600'>"5"</span><span className='text-slate-600 dark:text-slate-400'>&gt;</span><br/>
                &nbsp;&nbsp;<span className='text-slate-600 dark:text-slate-400'>&lt;output</span> <span className='text-blue-600'>name</span>=<span className='text-amber-600'>"result"</span><span className='text-slate-600 dark:text-slate-400'>&gt;</span>10<span className='text-slate-600 dark:text-slate-400'>&lt;/output&gt;</span><br/>
                <span className='text-slate-600 dark:text-slate-400'>&lt;/form&gt;</span>
              </code>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Output Attributes */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Code className='w-5 h-5 text-purple-600' />
          Output Element Attributes
        </CardTitle>
        <CardDescription>Key attributes that control output behavior</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-3 gap-4'>
          {/* name attribute */}
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all'>
            <div className='flex items-center gap-2 mb-2'>
              <Badge className='bg-blue-600 hover:bg-blue-700'>name</Badge>
            </div>
            <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
              Defines the output's name for form submission
            </p>
            <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
              &lt;output <span className='text-blue-600'>name</span>=<span className='text-amber-600'>"result"</span>&gt;
            </code>
          </div>

          {/* for attribute */}
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all'>
            <div className='flex items-center gap-2 mb-2'>
              <Badge className='bg-emerald-600 hover:bg-emerald-700'>for</Badge>
            </div>
            <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
              Lists IDs of elements used in calculation
            </p>
            <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
              &lt;output <span className='text-emerald-600'>for</span>=<span className='text-amber-600'>"a b"</span>&gt;
            </code>
          </div>

          {/* form attribute */}
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all'>
            <div className='flex items-center gap-2 mb-2'>
              <Badge className='bg-purple-600 hover:bg-purple-700'>form</Badge>
            </div>
            <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
              Associates output with a form (if outside form)
            </p>
            <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
              &lt;output <span className='text-purple-600'>form</span>=<span className='text-amber-600'>"form1"</span>&gt;
            </code>
          </div>
        </div>

        <Alert className='mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
          <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
          <AlertDescription className='text-amber-700 dark:text-amber-300'>
            <strong>Pro Tip:</strong> The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>for</code> attribute is optional but improves accessibility by explicitly linking the output to its input elements.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* Output vs Other Elements */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <TrendingUp className='w-5 h-5 text-blue-600' />
          Output vs Other Display Elements
        </CardTitle>
        <CardDescription>When to use output instead of span or div</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b-2 border-slate-200 dark:border-slate-700'>
                <th className='text-left p-3 text-sm font-semibold text-slate-700 dark:text-slate-300'>Element</th>
                <th className='text-left p-3 text-sm font-semibold text-slate-700 dark:text-slate-300'>Purpose</th>
                <th className='text-left p-3 text-sm font-semibold text-slate-700 dark:text-slate-300'>Semantic</th>
                <th className='text-left p-3 text-sm font-semibold text-slate-700 dark:text-slate-300'>When to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50'>
                <td className='p-3'>
                  <code className='bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm'>&lt;output&gt;</code>
                </td>
                <td className='p-3 text-sm text-slate-700 dark:text-slate-300'>Display calculation results</td>
                <td className='p-3'>
                  <CheckCircle className='w-4 h-4 text-green-600' />
                </td>
                <td className='p-3 text-xs text-slate-600 dark:text-slate-400'>Form calculations, live results</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50'>
                <td className='p-3'>
                  <code className='bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm'>&lt;span&gt;</code>
                </td>
                <td className='p-3 text-sm text-slate-700 dark:text-slate-300'>Generic inline content</td>
                <td className='p-3'>
                  <XCircle className='w-4 h-4 text-red-600' />
                </td>
                <td className='p-3 text-xs text-slate-600 dark:text-slate-400'>Styling, non-semantic text</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50'>
                <td className='p-3'>
                  <code className='bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm'>&lt;div&gt;</code>
                </td>
                <td className='p-3 text-sm text-slate-700 dark:text-slate-300'>Generic block content</td>
                <td className='p-3'>
                  <XCircle className='w-4 h-4 text-red-600' />
                </td>
                <td className='p-3 text-xs text-slate-600 dark:text-slate-400'>Layout, grouping elements</td>
              </tr>
              <tr className='hover:bg-slate-50 dark:hover:bg-slate-900/50'>
                <td className='p-3'>
                  <code className='bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm'>&lt;input&gt;</code>
                </td>
                <td className='p-3 text-sm text-slate-700 dark:text-slate-300'>User input (editable)</td>
                <td className='p-3'>
                  <CheckCircle className='w-4 h-4 text-green-600' />
                </td>
                <td className='p-3 text-xs text-slate-600 dark:text-slate-400'>Form data entry, user interaction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Common Use Cases */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Globe className='w-5 h-5 text-amber-600' />
          Common Use Cases
        </CardTitle>
        <CardDescription>Real-world scenarios for the output element</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            { icon: Calculator, title: 'Calculators', example: 'Math operations, currency conversion', color: 'blue' },
            { icon: TrendingUp, title: 'Live Totals', example: 'Shopping cart totals, invoices', color: 'green' },
            { icon: Zap, title: 'Range Values', example: 'Slider value display, volume control', color: 'purple' },
            { icon: Globe, title: 'Unit Converters', example: 'Temperature, distance, weight', color: 'orange' },
            { icon: Calculator, title: 'Form Calculators', example: 'Loan calculator, BMI calculator', color: 'red' },
            { icon: TrendingUp, title: 'Live Stats', example: 'Character count, word count', color: 'cyan' },
          ].map((useCase, index) => (
            <div key={index} className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md'>
              <div className='flex items-center gap-2 mb-2'>
                <useCase.icon className={`w-5 h-5 text-${useCase.color}-600`} />
                <h4 className='font-semibold text-sm'>{useCase.title}</h4>
              </div>
              <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Output Element in Action */}
    <div className='space-y-6'>
      <div className='flex items-center gap-3 mb-4'>
        <Calculator className='w-6 h-6 text-blue-600' />
        <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Output Element in Action</h2>
      </div>
      <p className='text-slate-600 dark:text-slate-400 mb-6'>
        See how the output element displays live calculation results from form inputs
      </p>

      {/* Example 1: Basic Calculator */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='1. Basic Addition Calculator'
            description='Simple calculator showing instant calculation results with output element'
          html={`<form oninput="sum.value = parseFloat(num1.value || 0) + parseFloat(num2.value || 0)" class="calc-form">
  <div class="calc-row">
    <input type="number" id="num1" name="num1" value="5" class="calc-input">
    <span class="operator">+</span>
    <input type="number" id="num2" name="num2" value="3" class="calc-input">
    <span class="operator">=</span>
    <output name="sum" for="num1 num2" class="calc-output">8</output>
  </div>
  <small class="hint">Try changing the numbers - output updates instantly!</small>
</form>

<p class="note">➕ The <code>&lt;output&gt;</code> element automatically updates when inputs change</p>`}
          css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.calc-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .calc-form {
  background: #1e293b;
}

/* Calculator Row */
.calc-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s;
}

html.dark .calc-row {
  background: #334155;
}

.calc-input {
  width: 120px;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1.5rem;
  text-align: center;
  background: white;
  transition: all 0.3s;
}

html.dark .calc-input {
  background: #1e293b;
  border-color: #475569;
  color: #e2e8f0;
}

.calc-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.operator {
  font-weight: bold;
  color: #3b82f6;
  font-size: 2rem;
}

.calc-output {
  min-width: 120px;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.hint {
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 0.5rem;
}

html.dark .hint {
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
}

.note code {
  background: #bfdbfe;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

html.dark .note code {
  background: #1e40af;
}`}
            colorTheme='blue'
            icon={Calculator}
            previewHeight='350px'
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
        <CardDescription>Tips for using output element effectively</CardDescription>
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
                <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>for</code> attribute to link inputs</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Provide default/initial values</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>oninput</code> for instant updates</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Format output values (decimals, currency)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Add ARIA labels for accessibility</span>
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
                <span>Don't use for user-editable content</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't forget error handling (division by zero)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't use for static text (use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>&lt;span&gt;</code>)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't leave outputs empty on page load</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't use complex calculations in HTML (use JS)</span>
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
        <CardDescription>Output element is widely supported across all modern browsers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { name: 'Chrome', version: '10+', supported: true },
            { name: 'Firefox', version: '4+', supported: true },
            { name: 'Safari', version: '7+', supported: true },
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
            <strong>Great News:</strong> The output element is part of HTML5 and has been supported since 2011. It works in all modern browsers without polyfills!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* Interactive Playground */}
    <Card>
      <CardHeader>
        <CardTitle>Interactive Output Element Playground</CardTitle>
        <CardDescription>Experiment with the output element in a live code editor.</CardDescription>
      </CardHeader>
      <CardContent>
        <InteractivePlayground
          title='Output Element Playground'
          description='Play around with live calculations and output examples'
          features={[
            'Live Calculations',
            'Form Integration',
            'Dynamic Updates',
            'Multiple Outputs'
          ]}
          buttonText='Open Output Element Playground'
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
  </div>;
}

