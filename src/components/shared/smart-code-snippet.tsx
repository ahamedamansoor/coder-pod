'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Code2 } from 'lucide-react';
import { CodeSnippetWithOutput } from './code-snippet-with-output';
import { useWebPlayground } from './playground/web-playground-context';

/**
 * SmartCodeSnippet - Intelligent code display component
 * - Detects if code has DOM manipulation
 * - Shows CodeSnippetWithOutput for pure JS (code + output)
 * - Shows interactive preview button for DOM-based code
 */

interface SmartCodeSnippetProps {
  title: string;
  description?: string;
  code: string;
  output?: string[];
  language?: 'javascript' | 'typescript' | 'html' | 'css';
  colorTheme?: 'blue' | 'purple' | 'emerald' | 'amber' | 'orange' | 'pink' | 'cyan';
  icon?: React.ComponentType<{ className?: string }>;
  html?: string;
  css?: string;
}

export const SmartCodeSnippet: React.FC<SmartCodeSnippetProps> = ({
  title,
  description,
  code,
  output,
  language = 'javascript',
  colorTheme = 'blue',
  icon: Icon = Code2,
  html,
  css,
}) => {
  const { openWithContent } = useWebPlayground();

  // Detect if code has DOM manipulation
  const hasDOMManipulation = (jsCode: string): boolean => {
    const domPatterns = [
      /document\./,
      /getElementById/,
      /querySelector/,
      /getElementsBy/,
      /createElement/,
      /addEventListener/,
      /innerHTML/,
      /textContent/,
      /appendChild/,
      /removeChild/,
      /classList/,
      /style\./,
      /setAttribute/,
      /window\./,
    ];

    return domPatterns.some(pattern => pattern.test(jsCode));
  };

  const isDOMCode = hasDOMManipulation(code);

  // If pure JavaScript (no DOM) - show code with output
  if (!isDOMCode && output) {
    return (
      <CodeSnippetWithOutput
        title={title}
        description={description}
        code={code}
        output={output}
        language={language}
        colorTheme={colorTheme}
        icon={Icon}
      />
    );
  }

  // If has DOM manipulation - show code + preview button
  const themeColors: Record<string, { gradient: string; bg: string; border: string }> = {
    blue: {
      gradient: 'from-blue-600 to-cyan-600',
      bg: 'from-blue-50/80 to-cyan-50/80 dark:from-blue-950/20 dark:to-cyan-950/20',
      border: 'border-blue-200 dark:border-blue-800',
    },
    purple: {
      gradient: 'from-purple-600 to-pink-600',
      bg: 'from-purple-50/80 to-pink-50/80 dark:from-purple-950/20 dark:to-pink-950/20',
      border: 'border-purple-200 dark:border-purple-800',
    },
    amber: {
      gradient: 'from-amber-600 to-yellow-600',
      bg: 'from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20',
      border: 'border-amber-200 dark:border-amber-800',
    },
    emerald: {
      gradient: 'from-emerald-600 to-green-600',
      bg: 'from-emerald-50/80 to-green-50/80 dark:from-emerald-950/20 dark:to-green-950/20',
      border: 'border-emerald-200 dark:border-emerald-800',
    },
    orange: {
      gradient: 'from-orange-600 to-red-600',
      bg: 'from-orange-50/80 to-red-50/80 dark:from-orange-950/20 dark:to-red-950/20',
      border: 'border-orange-200 dark:border-orange-800',
    },
    pink: {
      gradient: 'from-pink-600 to-rose-600',
      bg: 'from-pink-50/80 to-rose-50/80 dark:from-pink-950/20 dark:to-rose-950/20',
      border: 'border-pink-200 dark:border-pink-800',
    },
    cyan: {
      gradient: 'from-cyan-600 to-teal-600',
      bg: 'from-cyan-50/80 to-teal-50/80 dark:from-cyan-950/20 dark:to-teal-950/20',
      border: 'border-cyan-200 dark:border-cyan-800',
    },
  };

  const colors = themeColors[colorTheme] || themeColors.blue;

  // Generate HTML if not provided
  const generateHTML = (): string => {
    if (html) return html;

    // Try to extract HTML structure from code comments
    const htmlComment = code.match(/<!--\s*HTML[:\s]+([\s\S]*?)(?=\/\/|$)/i);
    if (htmlComment) {
      return htmlComment[1].trim();
    }

    // Create basic HTML structure for DOM code
    return `<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
</head>
<body>
  <div class="container">
    <h1>Interactive Demo</h1>
    <div id="output"></div>
    <button id="myButton">Click Me!</button>
  </div>
</body>
</html>`;
  };

  // Generate CSS if not provided
  const generateCSS = (): string => {
    if (css) return css;

    // Try to extract CSS from code comments
    const cssComment = code.match(/\/\*\s*CSS[:\s]+([\s\S]*?)(?=\*\/)/i);
    if (cssComment) {
      return cssComment[1].trim();
    }

    // Default styling
    return `.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

button {
  background: white;
  color: #667eea;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

#output {
  font-size: 1.2rem;
  margin: 20px 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  min-height: 50px;
}`;
  };

  return (
    <div className="space-y-4">
      {/* Code Display */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black px-6 py-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">{title}</h3>
                {description && (
                  <p className="text-sm text-slate-400">{description}</p>
                )}
              </div>
            </div>
            <Badge className="bg-slate-700 text-slate-200 border-slate-600">
              {language}
            </Badge>
          </div>
        </div>

        <CardContent className="p-0">
          <div className="relative">
            <pre className="bg-slate-950 text-slate-100 p-6 overflow-x-auto text-[13px] leading-relaxed font-mono">
              <code>{code}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Preview Button */}
      <Card className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border}`}>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}>
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                See It In Action!
                <Badge variant="secondary" className="text-xs">Live Preview</Badge>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Open the interactive playground to see this code running with real DOM manipulation and visual results.
              </p>
              <Button
                onClick={() => {
                  openWithContent(
                    generateHTML(),
                    generateCSS(),
                    code,
                    'js'
                  );
                }}
                className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90`}
              >
                <Play className="w-4 h-4 mr-2" />
                Open Live Preview
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Output if provided for DOM code */}
      {output && output.length > 0 && (
        <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Expected Output</h4>
                <Badge variant="outline" className="text-xs">{output.length} lines</Badge>
              </div>
              <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-1">
                {output.map((line, index) => (
                  <div
                    key={index}
                    className="font-mono text-[13px] text-slate-800 dark:text-slate-200"
                  >
                    {line.startsWith('//') ? (
                      <span className="text-slate-500 dark:text-slate-500 italic">{line}</span>
                    ) : line.includes('✓') || line.includes('✅') ? (
                      <span className="text-green-600 dark:text-green-400 font-semibold">{line}</span>
                    ) : line.includes('✗') || line.includes('❌') ? (
                      <span className="text-red-600 dark:text-red-400 font-semibold">{line}</span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
