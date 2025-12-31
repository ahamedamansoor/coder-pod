'use client';

import React from 'react';
import { Code2, Play, Zap, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';
import { useReactPlayground } from '@/components/shared/playground/react-playground-context';

interface PlaygroundCard {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  iconBg: string;
  features: string[];
  sampleCode: {
    html?: string;
    css?: string;
    js?: string;
    react?: string;
  };
  delay: number;
}

const playgrounds: PlaygroundCard[] = [
  {
    title: 'Web Playground',
    description: 'Practice HTML, CSS, and JavaScript with live preview. Perfect for frontend development.',
    icon: Globe,
    gradient: 'from-blue-500/20 via-cyan-500/10 to-blue-600/20',
    iconBg: 'from-blue-500 to-cyan-500',
    features: ['HTML/CSS/JS Editor', 'Live Preview', 'Console Output', 'Responsive Design'],
    sampleCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Demo</title>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>Click the button to see magic!</p>
        <button onclick="showMessage()">Click Me</button>
        <div id="output"></div>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    max-width: 400px;
}

h1 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 2rem;
}

p {
    color: #666;
    margin-bottom: 1.5rem;
}

button {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}

#output {
    margin-top: 1.5rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
    color: #333;
    font-weight: bold;
}`,
      js: `function showMessage() {
    const messages = [
        "🎉 Awesome! You clicked the button!",
        "✨ Great job! Keep practicing!",
        "🚀 You're doing amazing!",
        "💪 Keep up the good work!",
        "🌟 You're a coding star!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const output = document.getElementById('output');
    
    output.textContent = randomMessage;
    output.style.animation = 'pulse 0.5s ease-in-out';
    
    setTimeout(() => {
        output.style.animation = '';
    }, 500);
}

// Add some interactivity on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Web Playground loaded successfully!');
});`
    },
    delay: 0,
  },
  {
    title: 'React Playground',
    description: 'Build and test React components with hot reload. Modern React development made easy.',
    icon: Code2,
    gradient: 'from-purple-500/20 via-pink-500/10 to-purple-600/20',
    iconBg: 'from-purple-500 to-pink-500',
    features: ['React Components', 'Hot Reload', 'Hooks Support', 'Component Testing'],
    sampleCode: {
      react: `import React, { useState } from 'react';

function InteractiveCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
    updateMessage(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    updateMessage(count - 1);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Counter reset! 🔄');
  };

  const updateMessage = (newCount) => {
    if (newCount === 0) {
      setMessage('Back to zero! 🎯');
    } else if (newCount > 0 && newCount % 10 === 0) {
      setMessage(\`Milestone: \${newCount}! 🎉\`);
    } else if (newCount < 0) {
      setMessage('Going negative! 📉');
    } else {
      setMessage('Keep going! 💪');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        minWidth: '300px'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '1rem',
          fontSize: '2rem'
        }}>
          React Counter
        </h1>
        
        <div style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: count >= 0 ? '#667eea' : '#e74c3c',
          margin: '1rem 0',
          transition: 'all 0.3s ease'
        }}>
          {count}
        </div>
        
        {message && (
          <div style={{
            color: '#666',
            marginBottom: '1rem',
            fontStyle: 'italic',
            height: '20px'
          }}>
            {message}
          </div>
        )}
        
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '1rem'
        }}>
          <button
            onClick={handleDecrement}
            style={{
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
          >
            -
          </button>
          
          <button
            onClick={handleReset}
            style={{
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
          >
            Reset
          </button>
          
          <button
            onClick={handleIncrement}
            style={{
              background: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InteractiveCounter />);`
    },
    delay: 100,
  },
];

function PlaygroundCard({ playground }: { playground: PlaygroundCard }) {
  const webPlayground = useWebPlayground();
  const { openPlayground: openReactPlayground } = useReactPlayground();
  const Icon = playground.icon;

  const handleOpenPlayground = () => {
    if (playground.title === 'Web Playground') {
      if (webPlayground?.openWithContent) {
        webPlayground.openWithContent(
          playground.sampleCode.html || '',
          playground.sampleCode.css || '',
          playground.sampleCode.js || '',
          'html'
        );
      } else {
        // Fallback: navigate to web playground page
        window.open('/languages/html', '_blank');
      }
    } else if (playground.title === 'React Playground') {
      openReactPlayground({
        jsx: playground.sampleCode.react || '',
        css: playground.sampleCode.css || '',
      });
    }
  };

  return (
    <button
      onClick={handleOpenPlayground}
      className={cn(
        // Base styles
        'group relative flex flex-col overflow-hidden rounded-3xl text-left',
        'bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl',
        'border border-white/20 dark:border-white/10',
        'shadow-[0_8px_32px_rgba(31,38,135,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
        'transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl',
        'hover:border-white/40 dark:hover:border-white/20',
        'p-6 md:p-8',
        // Animation
        'animate-in fade-in zoom-in-95'
      )}
      style={{ animationDelay: `${playground.delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Gradient Background */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
        playground.gradient
      )} />

      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={cn(
          'absolute -inset-[1px] rounded-3xl bg-gradient-to-r blur-sm',
          playground.iconBg
        )} style={{ opacity: 0.3 }} />
      </div>

      {/* Shine Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.8s_ease-in-out]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r text-white shadow-lg">
            <Zap className="w-3 h-3" />
            Interactive
          </span>
        </div>

        {/* Icon */}
        <div className={cn(
          'mb-4 w-14 h-14 rounded-2xl flex items-center justify-center',
          'bg-gradient-to-br shadow-lg',
          'group-hover:scale-110 group-hover:rotate-3 transition-all duration-300',
          playground.iconBg
        )}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-xl md:text-2xl">
          {playground.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
          {playground.description}
        </p>

        {/* Features */}
        <div className="mb-6 flex-1">
          <div className="flex flex-wrap gap-2">
            {playground.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Play className="w-4 h-4" />
          <span>Launch Playground</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/30 animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400/30 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>
    </button>
  );
}

export function PlaygroundShowcase() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200/50 dark:border-green-800/50 mb-6">
            <Play className="w-4 h-4 text-green-600 dark:text-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Interactive Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-green-900 to-blue-900 dark:from-white dark:via-green-100 dark:to-blue-100 bg-clip-text text-transparent">
            Practice in Our Playgrounds
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get hands-on experience with our interactive coding playgrounds. Write code, see results instantly, and learn by doing.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {playgrounds.map((playground) => (
            <PlaygroundCard key={playground.title} playground={playground} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            More playgrounds available for Angular, Selenium, and other technologies
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
              5+ Playground Types
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
              Live Preview
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
              No Setup Required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaygroundShowcase;
