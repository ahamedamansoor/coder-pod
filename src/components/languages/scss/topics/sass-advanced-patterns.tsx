import React, { useState } from 'react';
import { Copy, CheckCircle, Code, Zap, Sparkles, Layers, Settings, Package, Target, TrendingUp } from 'lucide-react';
import { PageHeader } from './page-header';

export default function SassAdvancedPatterns() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedExample, setSelectedExample] = useState(0);
  const [showOutput, setShowOutput] = useState<{ [key: number]: boolean }>({});

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleOutput = (index: number) => {
    setShowOutput(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const patterns = [
    { icon: Sparkles, title: "Dynamic Theming", desc: "Generate theme variations programmatically", color: "text-teal-600" },
    { icon: Layers, title: "Mixin Composition", desc: "Combine mixins for complex patterns", color: "text-cyan-600" },
    { icon: Settings, title: "Meta-Programming", desc: "Generate code based on data structures", color: "text-blue-600" },
    { icon: Package, title: "Factory Patterns", desc: "Create components from configurations", color: "text-indigo-600" },
    { icon: Target, title: "Utility Generation", desc: "Auto-generate utility classes", color: "text-purple-600" },
    { icon: TrendingUp, title: "Progressive Enhancement", desc: "Layer features conditionally", color: "text-pink-600" }
  ];

  const examples = [
    {
      title: "Dynamic Theme Generator",
      scss: `$themes: (
  'light': ('primary': #3b82f6, 'bg': #fff, 'text': #1f2937),
  'dark': ('primary': #60a5fa, 'bg': #1f2937, 'text': #f9fafb)
);

@mixin generate-theme($name, $colors) {
  .theme-#{$name} {
    @each $key, $val in $colors {
      --color-#{$key}: #{$val};
    }
    background: map-get($colors, 'bg');
    color: map-get($colors, 'text');
  }
}

@each $name, $colors in $themes {
  @include generate-theme($name, $colors);
}`,
      css: `.theme-light {
  --color-primary: #3b82f6;
  --color-bg: #fff;
  --color-text: #1f2937;
  background: #fff;
  color: #1f2937;
}`,
      explanation: "Dynamically generate theme variations with custom properties for consistency."
    },
    {
      title: "Mixin Composition Pipeline",
      scss: `@mixin reset-button {
  background: none;
  border: none;
  cursor: pointer;
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin button-variant($bg, $text) {
  @include reset-button;
  @include flex-center;
  background: $bg;
  color: $text;
  padding: 0.75rem 1.5rem;
  &:hover { background: darken($bg, 10%); }
}

.btn-primary { @include button-variant(#3b82f6, white); }`,
      css: `.btn-primary {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
}
.btn-primary:hover { background: #2563eb; }`,
      explanation: "Compose small mixins into complex patterns for reusability."
    },
    {
      title: "Utility Class Factory",
      scss: `$spacing: ('0': 0, '4': 1rem, '8': 2rem);
$colors: ('blue': #3b82f6, 'green': #10b981);

@each $name, $val in $spacing {
  .m-#{$name} { margin: $val; }
  .p-#{$name} { padding: $val; }
}

@each $name, $val in $colors {
  .text-#{$name} { color: $val; }
  .bg-#{$name} { background: $val; }
}`,
      css: `.m-0 { margin: 0; }
.p-4 { padding: 1rem; }
.text-blue { color: #3b82f6; }
.bg-green { background: #10b981; }`,
      explanation: "Auto-generate utility classes from configuration maps."
    },
    {
      title: "Component Factory",
      scss: `$cards: (
  'default': ('bg': #fff, 'shadow': 0 1px 3px rgba(0,0,0,0.1)),
  'elevated': ('bg': #fff, 'shadow': 0 10px 15px rgba(0,0,0,0.1))
);

@mixin create-card($name, $config) {
  .card-#{$name} {
    background: map-get($config, 'bg');
    box-shadow: map-get($config, 'shadow');
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
}

@each $name, $config in $cards {
  @include create-card($name, $config);
}`,
      css: `.card-default {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
}`,
      explanation: "Generate component variants from configuration objects."
    }
  ];

  return (
    <div className="w-full space-y-8 min-h-screen pb-16">
      <PageHeader
        icon={Zap}
        category="SCSS Advanced Patterns"
        title="Master Advanced Sass Techniques"
        description="Explore powerful meta-programming, dynamic generation, and advanced composition patterns"
        colorTheme="teal"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {patterns.map((pattern, index) => (
          <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-card to-teal-50 dark:to-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800 hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
            <pattern.icon className={`h-10 w-10 ${pattern.color} mb-4`} />
            <h3 className="text-lg font-bold mb-2">{pattern.title}</h3>
            <p className="text-sm text-muted-foreground">{pattern.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Code className="h-8 w-8 text-teal-600" />
          Advanced Pattern Examples
        </h2>

        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <button key={index} onClick={() => setSelectedExample(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedExample === index ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              {example.title}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">{examples[selectedExample].title}</h3>
            <p className="text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 p-4 rounded-lg">{examples[selectedExample].explanation}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="font-semibold text-teal-700 dark:text-teal-300">SCSS Input</span>
              <div className="relative">
                <button onClick={() => copyToClipboard(examples[selectedExample].scss, selectedExample * 2)}
                  className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors z-10">
                  {copiedIndex === selectedExample * 2 ? <CheckCircle className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </button>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap overflow-x-auto">{examples[selectedExample].scss}</pre>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-700 dark:text-green-300">CSS Output</span>
                <button onClick={() => toggleOutput(selectedExample)}
                  className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50">
                  {showOutput[selectedExample] ? 'Hide' : 'Show'}
                </button>
              </div>
              {showOutput[selectedExample] && (
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">{examples[selectedExample].css}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800">
        <h2 className="text-2xl font-bold mb-6">⚡ Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">✅ Do This</h3>
            {['Use maps for config', 'Generate utilities dynamically', 'Compose simple mixins', 'Validate inputs with @error'].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Avoid This</h3>
            {['Over-generating utilities', 'Deep nesting in loops', 'Complex logic in mixins', 'Ignoring compile time'].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-red-600 flex-shrink-0">✗</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
