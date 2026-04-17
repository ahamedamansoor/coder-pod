'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  Zap,
  MousePointer,
  Lightbulb,
  Code,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Keyboard,
  Hand,
  Monitor,
  Target,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Eye,
  EyeOff
} from 'lucide-react';

export default function RespondingToEvents() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Adding Interactivity"
        title="Responding to Events"
        description="Master the art of making your React apps interactive! Learn how to handle clicks, keyboard input, form submissions, and more with event handlers."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section 1: Understanding Events */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
              title="Understanding Events"
              description="Events are the bridge between users and your application - learn how to listen and respond!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Events</strong> are actions that happen in your application - clicks, keyboard input, mouse movements, form submissions, and more. React provides <strong>event handlers</strong> that let you respond to these actions by executing code when they occur. Think of events as user conversations and event handlers as your responses!
            </p>

            {/* Apple-Level Visual Flow Diagram */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
              <h4 className="font-bold text-center mb-8 text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                How Events Work in React
              </h4>
              
              {/* Interactive Flow Diagram */}
              <div className="relative">
                {/* Connection Lines */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-purple-200 to-green-200 dark:from-cyan-700 dark:via-purple-700 dark:to-green-700 -translate-y-1/2 z-0"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
                  {/* Step 1: User Action */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        👆
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-2">User Action</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Click, type, move</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Trigger</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="relative">
                      <ArrowRight className="w-10 h-10 text-cyan-500 animate-pulse" />
                      <div className="absolute inset-0 w-10 h-10 bg-cyan-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  <div className="md:hidden text-cyan-500 animate-bounce">↓</div>

                  {/* Step 2: Event Fired */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        🎯
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Event Fired</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">onClick, onChange</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Dispatch</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="relative">
                      <ArrowRight className="w-10 h-10 text-green-500 animate-pulse" />
                      <div className="absolute inset-0 w-10 h-10 bg-green-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  <div className="md:hidden text-green-500 animate-bounce">↓</div>

                  {/* Step 3: Handler Runs */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        ⚡
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Handler Runs</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Your code executes</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">Execute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Details Section */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                  <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    User Interactions
                  </h6>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Mouse clicks & movements</li>
                    <li>• Keyboard input</li>
                    <li>• Touch gestures</li>
                    <li>• Form submissions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                  <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    Event System
                  </h6>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Synthetic events</li>
                    <li>• Event delegation</li>
                    <li>• Cross-browser support</li>
                    <li>• Performance optimized</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                  <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    Response Actions
                  </h6>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• State updates</li>
                    <li>• UI changes</li>
                    <li>• API calls</li>
                    <li>• Navigation</li>
                  </ul>
                </div>
              </div>

              {/* Performance Indicator */}
              <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">React's Event System</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Optimized for performance and consistency</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Real-World Examples</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                🖱️ <strong>Mouse Events:</strong> Click, hover, drag, scroll<br/>
                ⌨️ <strong>Keyboard Events:</strong> Type, press keys, shortcuts<br/>
                📱 <strong>Touch Events:</strong> Tap, swipe, pinch on mobile<br/>
                📝 <strong>Form Events:</strong> Submit, input changes, focus
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 2: Click Events - The Foundation */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<MousePointer className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
              title="Click Events - The Foundation"
              description="Master the most common event type - onClick! Learn how to make buttons, links, and any element interactive."
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The <code>onClick</code> event is your gateway to interactivity. It fires when a user clicks on an element, allowing you to trigger actions like showing messages, changing colors, counting clicks, or navigating to different pages. Click events work on buttons, divs, images, and almost any JSX element!
            </p>

            {/* Syntax Breakdown */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold mb-4 text-emerald-800 dark:text-emerald-200">onClick Event Syntax</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-2 text-emerald-700 dark:text-emerald-400">Basic Structure:</p>
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'const handleClick = () => {'}</div>
                    <div className="pl-4">console.log(&quot;Clicked!&quot;);</div>
                    <div>{'}'}</div>
                    <div>{'// Usage: <button onClick={handleClick}>Click Me</button>'}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 text-emerald-700 dark:text-emerald-400">Inline Function:</p>
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'// Usage: <button onClick={() => alert("Hello!")}>Click Me</button>'}</div>
                  </div>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Interactive Button Playground"
              description="Explore different click event patterns with visual feedback"
              colorTheme="emerald"
              react={`function ButtonPlayground() {
  // State for click counter
  const [clickCount, setClickCount] = React.useState(0);
  const [isPressed, setIsPressed] = React.useState(false);
  const [buttonColor, setButtonColor] = React.useState('#3b82f6');
  
  // Click handler functions
  const handleSimpleClick = () => {
    alert('Simple click handler!');
  };
  
  const handleCounterClick = () => {
    setClickCount(clickCount + 1);
  };
  
  const handleColorChange = () => {
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
    const currentIndex = colors.indexOf(buttonColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setButtonColor(colors[nextIndex]);
  };
  
  const handlePressStart = () => {
    setIsPressed(true);
  };
  
  const handlePressEnd = () => {
    setIsPressed(false);
  };
  
  return (
    <div className="button-playground-container">
      <h2 className="playground-title">
        🎮 Click Event Playground
      </h2>
      
      <div className="button-container">
        {/* Simple Alert Button */}
        <button
          onClick={handleSimpleClick}
          className="alert-button"
          style={{background: '#dc2626', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px'}}
        >
          🚨 Alert Button
        </button>
        
        {/* Counter Button */}
        <div className="counter-container">
          <button
            onClick={handleCounterClick}
            className="counter-button"
          >
            🎯 Click Counter: {clickCount}
          </button>
          <p className="counter-message">
            {clickCount === 0 ? 'Click to start counting!' : 
             clickCount === 1 ? 'First click!' :
             clickCount < 10 ? 'Keep going!' : 'Click master!'}
          </p>
        </div>
        
        {/* Color Change Button */}
        <button
          onClick={handleColorChange}
          className="color-button"
          style={{background: buttonColor, boxShadow: \`0 4px 12px \${buttonColor}40\`}}
        >
          🎨 Change My Color
        </button>
        
        {/* Press Effect Button */}
        <button
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          className={isPressed ? 'press-button pressed' : 'press-button'}
        >
          {isPressed ? '🤏 Pressed!' : '👆 Press Me!'}
        </button>
      </div>
      
      <div className="playground-footer">
        Try different click patterns and see how they work!
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <ButtonPlayground />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`.button-playground-container {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  min-width: 300px;
  max-width: 400px;
  font-family: system-ui, -apple-system, sans-serif;
}

.playground-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111827;
  text-align: center;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.alert-button {
  padding: 12px 20px;
  background: #dc2626 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  font-family: system-ui, -apple-system, sans-serif;
}

button.alert-button,
.alert-button:hover,
.alert-button:focus,
.alert-button:active {
  background: #dc2626 !important;
  color: #ffffff !important;
}

.alert-button * {
  color: inherit !important;
}

.alert-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
}

.alert-button:active {
  transform: scale(0.95);
}

.counter-container {
  background: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.counter-button {
  width: 100%;
  padding: 12px 20px;
  background: #10b981 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  font-family: system-ui, -apple-system, sans-serif;
}

button.counter-button,
.counter-button:hover,
.counter-button:focus,
.counter-button:active {
  background: #10b981 !important;
  color: #ffffff !important;
}

.counter-button * {
  color: inherit !important;
}

.counter-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}

.counter-message {
  margin: 8px 0 0 0;
  font-size: 0.85rem;
  color: #6b7280;
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
}

.color-button {
  padding: 12px 20px;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: system-ui, -apple-system, sans-serif;
}

.color-button:hover {
  transform: translateY(-1px);
  filter: brightness(1.1);
}

.press-button {
  padding: 12px 20px;
  background: #10b981 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.1s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  font-family: system-ui, -apple-system, sans-serif;
}

button.press-button,
.press-button:hover,
.press-button:focus,
.press-button:active {
  background: #10b981 !important;
  color: #ffffff !important;
}

.press-button * {
  color: inherit !important;
}

.press-button.pressed {
  background: #059669;
  transform: scale(0.95);
  box-shadow: none;
}

.playground-footer {
  margin-top: 20px;
  padding: 12px;
  background: #f3f4f6;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #6b7280;
  text-align: center;
  border: 1px solid #e5e7eb;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .button-playground-container {
    background: #1f2937;
    border-color: #374151;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  .playground-title {
    color: #f3f4f6;
  }
  
  .counter-container {
    background: #374151;
    border-color: #4b5563;
  }
  
  .counter-message {
    color: #9ca3af;
  }
  
  .playground-footer {
    background: #1f2937;
    border-color: #374151;
    color: #9ca3af;
  }
  
  .app-container {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
}`}
            />
          </CardContent>
        </Card>

        {/* Section 3: Form Events - User Input */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Keyboard className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
              title="Form Events - User Input"
              description="Handle text input, form submissions, and keyboard interactions with onChange and onSubmit events!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Form events</strong> let you capture user input through text fields, textareas, and form submissions. The <code>onChange</code> event fires whenever input changes, while <code>onSubmit</code> handles form submissions. These events are essential for creating search bars, login forms, contact forms, and any interactive input fields.
            </p>

            {/* Form Events Visual */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold mb-4 text-purple-800 dark:text-purple-200">Common Form Events</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                    <Keyboard className="w-4 h-4" />
                    onChange
                  </h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Fires every time input value changes. Perfect for real-time validation, search suggestions, or character counting.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    onSubmit
                  </h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Fires when form is submitted. Essential for handling login, registration, and contact form submissions.
                  </p>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Interactive Form Playground"
              description="Explore form events with real-time validation and submission handling"
              colorTheme="purple"
              react={`function FormPlayground() {
  // Form state
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [charCount, setCharCount] = React.useState(0);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Update character count for message
    if (name === 'message') {
      setCharCount(value.length);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);
    }, 3000);
  };
  
  // Handle clear form
  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
    setCharCount(0);
    setIsSubmitted(false);
  };
  
  return (
    <div className="form-playground-container">
      <h2 className="form-playground-title">
        📝 Form Event Playground
      </h2>
      
      {isSubmitted ? (
        <div className="success-message">
          ✅ Form Submitted Successfully!
          <div className="success-submessage">
            Thanks {formData.name || 'there'}! We'll contact you at {formData.email || 'your email'}.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            {/* Name Input */}
            <div className="input-group">
              <label className="form-label">
                👤 Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="form-input"
              />
            </div>
            
            {/* Email Input */}
            <div className="input-group">
              <label className="form-label">
                📧 Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>
            
            {/* Message Textarea */}
            <div className="input-group">
              <label className="form-label">
                💬 Message ({charCount}/200)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                maxLength="200"
                required
                rows="4"
                className="form-textarea"
              />
              <div className={charCount > 180 ? 'char-count warning' : 'char-count'}>
                {charCount > 180 ? 'Almost at limit!' : (200 - charCount) + ' characters remaining'}
              </div>
            </div>
            
            {/* Form Buttons */}
            <div className="button-group">
              <button
                type="submit"
                className="submit-button"
              >
                🚀 Submit Form
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="clear-button"
              >
                🗑️ Clear
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="form-app-container">
      <FormPlayground />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`.form-playground-container {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  min-width: 300px;
  max-width: 400px;
  font-family: system-ui, -apple-system, sans-serif;
}

.form-playground-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111827;
  text-align: center;
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
  font-family: system-ui, -apple-system, sans-serif;
}

.form-input {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  font-size: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.form-textarea {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  font-size: 0.95rem;
  resize: vertical;
  min-height: 80px;
  font-family: system-ui, -apple-system, sans-serif;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
}

.form-textarea:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.submit-button {
  flex: 1;
  padding: 12px 20px;
  background: #a855f7 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
  font-family: system-ui, -apple-system, sans-serif;
}

button.submit-button,
.submit-button:hover,
.submit-button:focus,
.submit-button:active {
  background: #a855f7 !important;
  color: #ffffff !important;
}

.submit-button * {
  color: inherit !important;
}

.submit-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}

.submit-button:active {
  transform: scale(0.98);
}

.clear-button {
  padding: 12px 20px;
  background: #f3f4f6;
  color: #6b7280;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: system-ui, -apple-system, sans-serif;
}

.clear-button:hover {
  background: #e5e7eb;
  color: #374151;
}

.clear-button:active {
  transform: scale(0.98);
}

.char-count {
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: 4px;
  font-family: system-ui, -apple-system, sans-serif;
}

.char-count.warning {
  color: #dc2626;
  font-weight: 600;
}

.success-message {
  padding: 16px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: system-ui, -apple-system, sans-serif;
}

.success-submessage {
  font-size: 0.9rem;
  margin-top: 8px;
  opacity: 0.9;
}

.form-app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .form-playground-container {
    background: #1f2937;
    border-color: #374151;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  .form-playground-title {
    color: #f3f4f6;
  }
  
  .form-label {
    color: #f3f4f6;
  }
  
  .form-input {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }
  
  .form-input:focus {
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
  }
  
  .form-textarea {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }
  
  .form-textarea:focus {
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
  }
  
  .clear-button {
    background: #374151;
    color: #f3f4f6;
    border-color: #4b5563;
  }
  
  .clear-button:hover {
    background: #4b5563;
    color: #f3f4f6;
  }
  
  .char-count {
    color: #9ca3af;
  }
  
  .char-count.warning {
    color: #f87171;
  }
  
  .form-app-container {
    background: linear-gradient(135deg, #2e1065 0%, #4c1d95 100%);
  }
}`}
            />
          </CardContent>
        </Card>

        {/* Section 4: Advanced Event Patterns */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
              title="Advanced Event Patterns"
              description="Master sophisticated event handling techniques for professional React applications!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond basic click and form events, React offers powerful patterns for creating sophisticated interactions. Learn about event propagation, custom event handlers, keyboard shortcuts, and performance optimization techniques that will take your applications to the next level.
            </p>

            {/* Advanced Patterns Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-700">
                <h4 className="font-bold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Hand className="w-5 h-5" />
                  Event Propagation
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Bubbling:</strong> Events bubble up from child to parent</p>
                  <p><strong>Capturing:</strong> Events flow down from parent to child</p>
                  <p><strong>stopPropagation():</strong> Prevents further bubbling</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-700">
                <h4 className="font-bold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Keyboard className="w-5 h-5" />
                  Keyboard Events
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>onKeyDown:</strong> When key is pressed down</p>
                  <p><strong>onKeyUp:</strong> When key is released</p>
                  <p><strong>e.key:</strong> Which key was pressed</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-700">
                <h4 className="font-bold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Mouse Events
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>onMouseEnter/Leave:</strong> Hover effects</p>
                  <p><strong>onMouseMove:</strong> Track cursor position</p>
                  <p><strong>onWheel:</strong> Scroll wheel events</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-700">
                <h4 className="font-bold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Performance Tips
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Debounce:</strong> Delay expensive operations</p>
                  <p><strong>Throttle:</strong> Limit event firing rate</p>
                  <p><strong>useCallback:</strong> Prevent unnecessary re-renders</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">🚀 Pro Tips</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>🎯 Event Object:</strong> Access event data with the event parameter<br/>
                <strong>⚡ Synthetic Events:</strong> React wraps native events for cross-browser compatibility<br/>
                <strong>🔧 preventDefault():</strong> Stop default browser behavior<br/>
                <strong>📱 Touch Events:</strong> Use onTouchStart/onTouchEnd for mobile interactions
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices & Common Pitfalls */}
        <Card className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/10 dark:to-pink-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-rose-900 dark:text-rose-100">
                  Best Practices & Common Pitfalls
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Master event handling with these essential guidelines and avoid common mistakes!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-rose-700 dark:text-rose-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-rose-600 dark:text-rose-400">•</span>
                    <span><strong>Use descriptive handler names</strong> - handleClick, handleSubmit, onInputChange</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-rose-600 dark:text-rose-400">•</span>
                    <span><strong>Extract complex logic</strong> - Keep event handlers clean and focused</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-rose-600 dark:text-rose-400">•</span>
                    <span><strong>Use preventDefault() in forms</strong> - Stop page refresh on submit</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-rose-600 dark:text-rose-400">•</span>
                    <span><strong>Handle accessibility</strong> - Add keyboard support for interactive elements</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-rose-600 dark:text-rose-400">•</span>
                    <span><strong>Optimize performance</strong> - Use useCallback for expensive handlers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-rose-600 dark:text-rose-400">•</span>
                    <span><strong>Test event handlers</strong> - Ensure they work as expected</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Avoid This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't use inline functions in loops</strong> - Causes performance issues</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't forget preventDefault()</strong> - Forms will refresh the page</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't ignore accessibility</strong> - All interactive elements need keyboard support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't mutate state directly</strong> - Always use setState or proper updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't create memory leaks</strong> - Clean up event listeners in useEffect</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't over-optimize prematurely</strong> - Focus on clarity first</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Quick Reference */}
        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-teal-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
              title="Quick Reference"
              description="Essential event handlers and patterns for quick lookup!"
              size="lg"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* Mouse Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    🖱️
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Mouse Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onClick={'{handleClick}'}</div>
                  <div>onDoubleClick={'{handleDoubleClick}'}</div>
                  <div>onMouseDown={'{handleMouseDown}'}</div>
                  <div>onMouseUp={'{handleMouseUp}'}</div>
                  <div>onMouseEnter={'{handleHover}'}</div>
                  <div>onMouseLeave={'{handleLeave}'}</div>
                  <div>onMouseMove={'{handleMouseMove}'}</div>
                  <div>onWheel={'{handleWheel}'}</div>
                </div>
              </div>

              {/* Keyboard Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    ⌨️
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Keyboard Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onKeyDown={'{handleKeyDown}'}</div>
                  <div>onKeyUp={'{handleKeyUp}'}</div>
                  <div>onKeyPress={'{handleKeyPress}'}</div>
                  <div>onInput={'{handleInput}'}</div>
                  <div>onCompositionStart={'{handleCompStart}'}</div>
                  <div>onCompositionEnd={'{handleCompEnd}'}</div>
                </div>
              </div>

              {/* Form Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    📝
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Form Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onSubmit={'{handleSubmit}'}</div>
                  <div>onChange={'{handleChange}'}</div>
                  <div>onInput={'{handleInput}'}</div>
                  <div>onFocus={'{handleFocus}'}</div>
                  <div>onBlur={'{handleBlur}'}</div>
                  <div>onReset={'{handleReset}'}</div>
                  <div>onSelect={'{handleSelect}'}</div>
                </div>
              </div>

              {/* Touch Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    📱
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Touch Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onTouchStart={'{handleTouchStart}'}</div>
                  <div>onTouchEnd={'{handleTouchEnd}'}</div>
                  <div>onTouchMove={'{handleTouchMove}'}</div>
                  <div>onTouchCancel={'{handleCancel}'}</div>
                </div>
              </div>

              {/* Media Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    🎵
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Media Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onPlay={'{handlePlay}'}</div>
                  <div>onPause={'{handlePause}'}</div>
                  <div>onEnded={'{handleEnded}'}</div>
                  <div>onTimeUpdate={'{handleTimeUpdate}'}</div>
                  <div>onVolumeChange={'{handleVolumeChange}'}</div>
                  <div>onLoadedData={'{handleLoadedData}'}</div>
                </div>
              </div>

              {/* Window Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    🪟
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Window Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onScroll={'{handleScroll}'}</div>
                  <div>onResize={'{handleResize}'}</div>
                  <div>onLoad={'{handleLoad}'}</div>
                  <div>onUnload={'{handleUnload}'}</div>
                  <div>onError={'{handleError}'}</div>
                  <div>onBeforeUnload={'{handleBeforeUnload}'}</div>
                </div>
              </div>

              {/* Focus Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    🎯
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Focus Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onFocus={'{handleFocus}'}</div>
                  <div>onBlur={'{handleBlur}'}</div>
                  <div>onFocusIn={'{handleFocusIn}'}</div>
                  <div>onFocusOut={'{handleFocusOut}'}</div>
                </div>
              </div>

              {/* Clipboard Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    📋
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Clipboard Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onCopy={'{handleCopy}'}</div>
                  <div>onCut={'{handleCut}'}</div>
                  <div>onPaste={'{handlePaste}'}</div>
                </div>
              </div>

              {/* Drag Events */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    ✋
                  </div>
                  <h4 className="font-bold text-teal-600 text-base">Drag Events</h4>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg text-sm space-y-2 font-mono leading-relaxed">
                  <div>onDrag={'{handleDrag}'}</div>
                  <div>onDragStart={'{handleDragStart}'}</div>
                  <div>onDragEnd={'{handleDragEnd}'}</div>
                  <div>onDragOver={'{handleDragOver}'}</div>
                  <div>onDrop={'{handleDrop}'}</div>
                  <div>onDragEnter={'{handleDragEnter}'}</div>
                  <div>onDragLeave={'{handleDragLeave}'}</div>
                </div>
              </div>
            </div>

            {/* Event Properties Reference */}
            <div className="mt-6 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700">
              <h4 className="font-bold mb-3 text-teal-800 dark:text-teal200 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Event Object Properties
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 text-sm">
                <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded">
                  <strong className="text-teal-700 dark:text-teal-300">Mouse Events:</strong>
                  <div className="font-mono text-xs mt-1 space-y-1">
                    <div>e.clientX, e.clientY</div>
                    <div>e.pageX, e.pageY</div>
                    <div>e.screenX, e.screenY</div>
                    <div>e.button, e.buttons</div>
                    <div>e.shiftKey, e.ctrlKey</div>
                  </div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded">
                  <strong className="text-teal-700 dark:text-teal-300">Keyboard Events:</strong>
                  <div className="font-mono text-xs mt-1 space-y-1">
                    <div>e.key, e.code</div>
                    <div>e.keyCode, e.which</div>
                    <div>e.shiftKey, e.ctrlKey</div>
                    <div>e.altKey, e.metaKey</div>
                    <div>e.repeat</div>
                  </div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded">
                  <strong className="text-teal-700 dark:text-teal-300">Form Events:</strong>
                  <div className="font-mono text-xs mt-1 space-y-1">
                    <div>e.target.value</div>
                    <div>e.target.name</div>
                    <div>e.target.files</div>
                    <div>e.target.checked</div>
                    <div>e.target.selectedOptions</div>
                  </div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded">
                  <strong className="text-teal-700 dark:text-teal-300">Touch Events:</strong>
                  <div className="font-mono text-xs mt-1 space-y-1">
                    <div>e.touches</div>
                    <div>e.targetTouches</div>
                    <div>e.changedTouches</div>
                    <div>e.force</div>
                  </div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded">
                  <strong className="text-teal-700 dark:text-teal-300">Common Methods:</strong>
                  <div className="font-mono text-xs mt-1 space-y-1">
                    <div>e.preventDefault()</div>
                    <div>e.stopPropagation()</div>
                    <div>e.stopImmediatePropagation()</div>
                    <div>e.currentTarget</div>
                  </div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded">
                  <strong className="text-teal-700 dark:text-teal-300">Event Types:</strong>
                  <div className="font-mono text-xs mt-1 space-y-1">
                    <div>e.type</div>
                    <div>e.timeStamp</div>
                    <div>e.isTrusted</div>
                    <div>e.bubbles</div>
                    <div>e.cancelable</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Event Object Properties */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
              title="Event Object Properties"
              description="Discover what information you get when an event fires! The event object is packed with useful data about the interaction."
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Every event handler receives an <strong>event object</strong> as a parameter. This object contains valuable information about the event - what triggered it, where it happened, keyboard keys pressed, mouse position, and much more. Understanding these properties unlocks powerful interactive capabilities!
            </p>

            {/* Quick Reference Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Basic Properties Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="font-bold text-orange-800 dark:text-orange-200">Basic Properties</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-orange-700 dark:text-orange-300">type</code>
                    <span className="text-gray-600 dark:text-gray-400">Event type</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-orange-700 dark:text-orange-300">target</code>
                    <span className="text-gray-600 dark:text-gray-400">Element</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-orange-700 dark:text-orange-300">currentTarget</code>
                    <span className="text-gray-600 dark:text-gray-400">Handler element</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-orange-700 dark:text-orange-300">timeStamp</code>
                    <span className="text-gray-600 dark:text-gray-400">Timestamp</span>
                  </div>
                </div>
              </div>

              {/* Mouse Properties Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MousePointer className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="font-bold text-blue-800 dark:text-blue-200">Mouse Events</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-blue-700 dark:text-blue-300">clientX/Y</code>
                    <span className="text-gray-600 dark:text-gray-400">Window pos</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-blue-700 dark:text-blue-300">pageX/Y</code>
                    <span className="text-gray-600 dark:text-gray-400">Page pos</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-blue-700 dark:text-blue-300">button</code>
                    <span className="text-gray-600 dark:text-gray-400">Mouse button</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-blue-700 dark:text-blue-300">buttons</code>
                    <span className="text-gray-600 dark:text-gray-400">Pressed buttons</span>
                  </div>
                </div>
              </div>

              {/* Keyboard Properties Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Keyboard className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="font-bold text-green-800 dark:text-green-200">Keyboard Events</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-green-700 dark:text-green-300">key</code>
                    <span className="text-gray-600 dark:text-gray-400">Key value</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-green-700 dark:text-green-300">code</code>
                    <span className="text-gray-600 dark:text-gray-400">Physical key</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-green-700 dark:text-green-300">ctrlKey</code>
                    <span className="text-gray-600 dark:text-gray-400">Ctrl pressed</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-green-700 dark:text-green-300">shiftKey</code>
                    <span className="text-gray-600 dark:text-gray-400">Shift pressed</span>
                  </div>
                </div>
              </div>

              {/* Event Control Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <RotateCcw className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="font-bold text-purple-800 dark:text-purple-200">Event Control</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-purple-700 dark:text-purple-300">preventDefault()</code>
                    <span className="text-gray-600 dark:text-gray-400">Stop default</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-purple-700 dark:text-purple-300">stopPropagation()</code>
                    <span className="text-gray-600 dark:text-gray-400">Stop bubbling</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-purple-700 dark:text-purple-300">bubbles</code>
                    <span className="text-gray-600 dark:text-gray-400">Will bubble</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-purple-700 dark:text-purple-300">cancelable</code>
                    <span className="text-gray-600 dark:text-gray-400">Can cancel</span>
                  </div>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Event Object Explorer"
              description="Click anywhere and see what event properties you get! Explore different event types and their properties."
              colorTheme="orange"
              react={`function EventExplorer() {
  const [eventData, setEventData] = React.useState(null);
  const [eventType, setEventType] = React.useState('click');
  const [eventHistory, setEventHistory] = React.useState([]);
  
  // Handle different event types
  const handleEvent = (e) => {
    const eventInfo = {
      type: e.type,
      timeStamp: e.timeStamp,
      target: {
        tagName: e.target.tagName,
        id: e.target.id || 'none',
        className: e.target.className || 'none',
        textContent: e.target.textContent?.substring(0, 30) + (e.target.textContent?.length > 30 ? '...' : '') || 'none'
      },
      currentTarget: {
        tagName: e.currentTarget.tagName,
        id: e.currentTarget.id || 'none'
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable,
      defaultPrevented: e.defaultPrevented
    };
    
    // Add mouse-specific properties
    if (e.type.includes('mouse') || e.type === 'click') {
      eventInfo.mouse = {
        clientX: e.clientX,
        clientY: e.clientY,
        pageX: e.pageX,
        pageY: e.pageY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey
      };
    }
    
    // Add keyboard-specific properties
    if (e.type.includes('key')) {
      eventInfo.keyboard = {
        key: e.key,
        code: e.code,
        location: e.location,
        repeat: e.repeat,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey
      };
    }
    
    // Add touch-specific properties
    if (e.type.includes('touch')) {
      eventInfo.touch = {
        touches: e.touches.length,
        changedTouches: e.changedTouches.length,
        targetTouches: e.targetTouches.length
      };
    }
    
    setEventData(eventInfo);
    setEventHistory(prev => [eventInfo, ...prev.slice(0, 4)]); // Keep last 5 events
  };
  
  const clearHistory = () => {
    setEventHistory([]);
    setEventData(null);
  };
  
  const preventDefaultAction = (e) => {
    e.preventDefault();
    handleEvent(e);
  };
  
  const stopPropagation = (e) => {
    e.stopPropagation();
    handleEvent(e);
  };
  
  return (
    <div className="event-explorer-container">
      <h2 className="explorer-title">🔍 Event Object Explorer</h2>
      
      {/* Event Type Selector */}
      <div className="event-selector">
        <label className="selector-label">Event Type:</label>
        <select 
          value={eventType} 
          onChange={(e) => setEventType(e.target.value)}
          className="selector-dropdown"
        >
          <option value="click">Click</option>
          <option value="dblclick">Double Click</option>
          <option value="mousedown">Mouse Down</option>
          <option value="mouseup">Mouse Up</option>
          <option value="mousemove">Mouse Move</option>
          <option value="keydown">Key Down</option>
          <option value="keyup">Key Up</option>
          <option value="keypress">Key Press</option>
          <option value="focus">Focus</option>
          <option value="blur">Blur</option>
          <option value="change">Change</option>
          <option value="submit">Submit</option>
        </select>
      </div>
      
      {/* Interactive Area */}
      <div className="interactive-area">
        <div className="area-header">
          <h3>Interactive Area - Try different interactions!</h3>
          <button onClick={clearHistory} className="clear-button">
            🗑️ Clear History
          </button>
        </div>
        
        <div 
          className="event-zone"
          onClick={eventType === 'click' ? handleEvent : undefined}
          onDoubleClick={eventType === 'dblclick' ? handleEvent : undefined}
          onMouseDown={eventType === 'mousedown' ? handleEvent : undefined}
          onMouseUp={eventType === 'mouseup' ? handleEvent : undefined}
          onMouseMove={eventType === 'mousemove' ? handleEvent : undefined}
          onKeyDown={eventType.includes('key') ? handleEvent : undefined}
          onKeyUp={eventType.includes('key') ? handleEvent : undefined}
          onKeyPress={eventType === 'keypress' ? handleEvent : undefined}
          tabIndex={eventType.includes('key') ? 0 : undefined}
        >
          <div className="zone-content">
            {eventType.includes('key') ? (
              <div className="keyboard-hint">
                ⌨️ Click here and type any key
              </div>
            ) : eventType.includes('mouse') || eventType === 'click' || eventType === 'dblclick' ? (
              <div className="mouse-hint">
                🖱️ {eventType === 'mousemove' ? 'Move your mouse here' : 'Click here!'}
              </div>
            ) : (
              <div className="general-hint">
                🎯 Interact with this area
              </div>
            )}
            
            {eventType === 'focus' || eventType === 'blur' ? (
              <div className="focus-container">
                <p className="focus-hint">Click the input field below:</p>
                <input 
                  type="text" 
                  placeholder="Click to focus/blur"
                  className="focus-input"
                  onFocus={handleEvent}
                  onBlur={handleEvent}
                  tabIndex={0}
                />
              </div>
            ) : null}
            
            {eventType === 'change' ? (
              <div className="change-container">
                <p className="change-hint">Change the selection below:</p>
                <select 
                  className="change-select"
                  onChange={handleEvent}
                  defaultValue="Option 1"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            ) : null}
            
            {eventType === 'submit' ? (
              <div className="submit-container">
                <p className="submit-hint">Fill the form and press Enter or click Submit:</p>
                <form onSubmit={preventDefaultAction}>
                  <input type="text" placeholder="Type something" className="submit-input" />
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      
      {/* Two-column layout for event display */}
      <div className="event-layout">
        {/* Left: Interactive Area */}
        <div className="event-left">
          {/* Current Event Display */}
          {eventData && (
            <div className="event-display">
              <h3>Current Event Object</h3>
          <div className="event-details">
            <div className="detail-section">
              <h4>Basic Properties</h4>
              <div className="property-grid">
                <div className="property-item">
                  <span className="prop-name">type:</span>
                  <span className="prop-value">{eventData.type}</span>
                </div>
                <div className="property-item">
                  <span className="prop-name">timeStamp:</span>
                  <span className="prop-value">{new Date(eventData.timeStamp).toLocaleTimeString()}</span>
                </div>
                <div className="property-item">
                  <span className="prop-name">bubbles:</span>
                  <span className="prop-value">{eventData.bubbles.toString()}</span>
                </div>
                <div className="property-item">
                  <span className="prop-name">cancelable:</span>
                  <span className="prop-value">{eventData.cancelable.toString()}</span>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h4>Target Element</h4>
              <div className="property-grid">
                <div className="property-item">
                  <span className="prop-name">tagName:</span>
                  <span className="prop-value">{eventData.target.tagName}</span>
                </div>
                <div className="property-item">
                  <span className="prop-name">id:</span>
                  <span className="prop-value">{eventData.target.id}</span>
                </div>
                <div className="property-item">
                  <span className="prop-name">className:</span>
                  <span className="prop-value">{eventData.target.className}</span>
                </div>
                <div className="property-item">
                  <span className="prop-name">text:</span>
                  <span className="prop-value">{eventData.target.textContent}</span>
                </div>
              </div>
            </div>
            
            {eventData.mouse && (
              <div className="detail-section">
                <h4>Mouse Properties</h4>
                <div className="property-grid">
                  <div className="property-item">
                    <span className="prop-name">clientX/Y:</span>
                    <span className="prop-value">{eventData.mouse.clientX}, {eventData.mouse.clientY}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">pageX/Y:</span>
                    <span className="prop-value">{eventData.mouse.pageX}, {eventData.mouse.pageY}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">button:</span>
                    <span className="prop-value">{eventData.mouse.button}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">buttons:</span>
                    <span className="prop-value">{eventData.mouse.buttons}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">ctrlKey:</span>
                    <span className="prop-value">{eventData.mouse.ctrlKey.toString()}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">shiftKey:</span>
                    <span className="prop-value">{eventData.mouse.shiftKey.toString()}</span>
                  </div>
                </div>
              </div>
            )}
            
            {eventData.keyboard && (
              <div className="detail-section">
                <h4>Keyboard Properties</h4>
                <div className="property-grid">
                  <div className="property-item">
                    <span className="prop-name">key:</span>
                    <span className="prop-value">"{eventData.keyboard.key}"</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">code:</span>
                    <span className="prop-value">{eventData.keyboard.code}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">location:</span>
                    <span className="prop-value">{eventData.keyboard.location}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">repeat:</span>
                    <span className="prop-value">{eventData.keyboard.repeat.toString()}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">ctrlKey:</span>
                    <span className="prop-value">{eventData.keyboard.ctrlKey.toString()}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">shiftKey:</span>
                    <span className="prop-value">{eventData.keyboard.shiftKey.toString()}</span>
                  </div>
                </div>
              </div>
            )}
            
            {eventData.touch && (
              <div className="detail-section">
                <h4>Touch Properties</h4>
                <div className="property-grid">
                  <div className="property-item">
                    <span className="prop-name">touches:</span>
                    <span className="prop-value">{eventData.touch.touches}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">changedTouches:</span>
                    <span className="prop-value">{eventData.touch.changedTouches}</span>
                  </div>
                  <div className="property-item">
                    <span className="prop-name">targetTouches:</span>
                    <span className="prop-value">{eventData.touch.targetTouches}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
        </div>
        
        {/* Right: Event History */}
        {eventHistory.length > 0 && (
          <div className="event-right">
            <div className="event-history">
              <h3>Event History (Last 5)</h3>
          <div className="history-list">
            {eventHistory.map((event, index) => (
              <div key={index} className="history-item">
                <span className="history-type">{event.type}</span>
                <span className="history-target">{event.target.tagName}</span>
                <span className="history-time">{new Date(event.timeStamp).toLocaleTimeString()}</span>
              </div>
            ))}
          </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <EventExplorer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`.event-explorer-container {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  min-width: 350px;
  max-width: 600px;
  font-family: system-ui, -apple-system, sans-serif;
}

.explorer-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111827;
  text-align: center;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.event-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.selector-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
}

.selector-dropdown {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-size: 0.9rem;
  cursor: pointer;
}

.interactive-area {
  margin-bottom: 20px;
}

.event-layout {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.event-left {
  flex: 2;
  min-width: 300px;
}

.event-right {
  flex: 1;
  min-width: 250px;
}

.area-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.area-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.clear-button {
  padding: 4px 8px;
  background: transparent;
  color: #6b7280;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.15s ease;
  font-weight: 500;
}

.clear-button:hover {
  background: #f9fafb;
  color: #374151;
  border-color: #9ca3af;
}

.event-zone {
  min-height: 150px;
  padding: 20px;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-zone:hover {
  border-color: #f97316;
  background: #fef7ed;
}

.zone-content {
  text-align: center;
  width: 100%;
}

.keyboard-hint,
.mouse-hint,
.general-hint {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 16px;
}

.focus-container,
.change-container,
.submit-container {
  text-align: center;
  width: 100%;
}

.focus-hint,
.change-hint,
.submit-hint {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 8px;
}

.focus-input,
.change-select,
.submit-input {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-size: 0.9rem;
  margin: 8px;
}

.submit-btn {
  padding: 8px 16px;
  background: #f97316;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 8px;
}

.event-display {
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
}

.event-display h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
}

.event-details {
  space-y: 16px;
}

.detail-section {
  margin-bottom: 16px;
}

.detail-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid #e5e7eb;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}

.property-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  background: white;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
}

.prop-name {
  font-family: monospace;
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 500;
}

.prop-value {
  font-family: monospace;
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 600;
  word-break: break-all;
  overflow-wrap: break-word;
  max-width: 150px;
}

.event-history {
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
}

.event-history h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  font-size: 0.85rem;
}

.history-type {
  font-weight: 600;
  color: #f97316;
  font-family: monospace;
}

.history-target {
  color: #6b7280;
  font-family: monospace;
}

.history-time {
  color: #9ca3af;
  font-size: 0.8rem;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .event-explorer-container {
    background: #1f2937;
    border-color: #374151;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  .explorer-title {
    color: #f3f4f6;
  }
  
  .event-selector {
    background: #374151;
    border-color: #4b5563;
  }
  
  .selector-label {
    color: #f3f4f6;
  }
  
  .selector-dropdown {
    background: #1f2937;
    border-color: #4b5563;
    color: #f3f4f6;
  }
  
  .area-header h3 {
    color: #f3f4f6;
  }
  
  .event-zone {
    border-color: #4b5563;
    background: #374151;
  }
  
  .event-zone:hover {
    border-color: #f97316;
    background: #451a03;
  }
  
  .keyboard-hint,
  .mouse-hint,
  .general-hint,
  .focus-hint,
  .change-hint,
  .submit-hint {
    color: #9ca3af;
  }
  
  .clear-button {
    background: transparent;
    color: #9ca3af;
    border-color: #4b5563;
  }
  
  .clear-button:hover {
    background: #374151;
    color: #f3f4f6;
    border-color: #6b7280;
  }
  
  .focus-input,
  .change-select,
  .submit-input {
    background: #1f2937;
    border-color: #4b5563;
    color: #f3f4f6;
  }
  
  .event-display,
  .event-history {
    background: #374151;
    border-color: #4b5563;
  }
  
  .event-display h3,
  .event-history h3 {
    color: #f3f4f6;
  }
  
  .detail-section h4 {
    color: #f3f4f6;
    border-color: #4b5563;
  }
  
  .property-item,
  .history-item {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .prop-name {
    color: #9ca3af;
  }
  
  .prop-value {
    color: #f3f4f6;
    word-break: break-all;
    overflow-wrap: break-word;
    max-width: 150px;
  }
  
  .app-container {
    background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
    width: 100vw;
    margin: 0;
    box-sizing: border-box;
  }
}`}
            />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
