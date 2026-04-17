'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  Package,
  Gift,
  Lightbulb,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  BookOpen,
  Code,
  Zap,
  Users,
  MessageSquare,
  Layers,
  Brackets
} from 'lucide-react';

export default function ComponentsAndProps() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="React · Core Concepts"
        title="Components and Props"
        description="Master React components and props. Learn how to create reusable building blocks and pass data between them effectively."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section 1: Understanding Components */}
        <section>
          <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brackets className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                Understanding React Components
              </CardTitle>
              <CardDescription>
                Learn the fundamental building blocks of React applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              {/* Component Fundamentals */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-cyan-200 dark:border-cyan-700">
                <h3 className="text-xl font-bold mb-4 text-cyan-800 dark:text-cyan-200 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  What is a Component?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  A React component is a reusable piece of UI that combines HTML structure and styling. 
                  Think of components as building blocks - like LEGO bricks - that you can combine to create complex interfaces.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Components are JavaScript functions that return JSX (HTML-like code). They encapsulate their own structure 
                  and can be reused throughout your application with different data.
                </p>
              </div>

              {/* Component Types Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                  <h4 className="font-bold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Function Components (Modern)
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                    <pre>{`function Welcome() {
  return <h1>Hello!</h1>;
}`}</pre>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Simple and clean syntax</li>
                    <li>• Modern React standard</li>
                    <li>• Easy to read and maintain</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-950/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Traditional HTML
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                    <pre>{`<div>
  <h1>Hello!</h1>
</div>`}</pre>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Static structure</li>
                    <li>• Not reusable</li>
                    <li>• No data passing</li>
                  </ul>
                </div>
              </div>

              <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
                <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Insight</AlertTitle>
                <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                  Components make your code reusable and maintainable. Write once, use everywhere with different data!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Introduction to Props */}
        <section>
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Understanding Props
              </CardTitle>
              <CardDescription>
                Learn how to pass data to components using props
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              {/* Props Fundamentals */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  What are Props?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Props (short for "properties") are how you pass data from a parent component to a child component. 
                  Think of props as function parameters - they allow components to receive and display different data.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Props are read-only, meaning a component cannot modify the props it receives. This ensures predictable 
                  data flow from parent to child components.
                </p>
              </div>

              {/* Props Flow Visualization */}
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  How Props Flow
                </h4>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="bg-purple-200 dark:bg-purple-800 px-6 py-3 rounded-lg font-bold">
                    Parent Component
                  </div>
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                  <div className="bg-purple-300 dark:bg-purple-700 px-6 py-3 rounded-lg font-bold">
                    Child Component
                  </div>
                </div>
                <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                  Data flows in one direction: from parent to child
                </p>
              </div>

              <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
                <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <AlertTitle className="text-purple-900 dark:text-purple-100">Remember</AlertTitle>
                <AlertDescription className="text-purple-800 dark:text-purple-200">
                  Props are read-only! Components receive props and use them, but cannot change them.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Basic Props Example */}
        <section>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Your First Props
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  See props in action with a simple greeting component
                </p>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Simple Greeting with Props"
              description="Create a reusable greeting component that displays different names"
              colorTheme="cyan"
              react={`function Greeting({ name, emoji = "👋" }) {
  // Simple props destructuring with default value
  return (
    <div className="greeting-card">
      <h1 className="greeting-title">
        Hello, {name}! {emoji}
      </h1>
      <p className="greeting-description">
        Welcome to React props!
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="greeting-app">
      <Greeting name="Sarah" />
      <Greeting name="Mike" emoji="🚀" />
      <Greeting name="Alex" emoji="💫" />
      <Greeting name="Jordan" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`/* Simple Colorful Greeting Component Styles */
.greeting-app {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}

.greeting-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 28px 32px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  max-width: 320px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: system-ui, -apple-system, sans-serif;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.greeting-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.greeting-card:nth-child(1) {
  border-top: 4px solid #ff6b6b;
}

.greeting-card:nth-child(2) {
  border-top: 4px solid #4ecdc4;
}

.greeting-card:nth-child(3) {
  border-top: 4px solid #45b7d1;
}

.greeting-card:nth-child(4) {
  border-top: 4px solid #96ceb4;
}

.greeting-title {
  font-size: 1.4rem;
  margin: 0 0 12px 0;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.greeting-card:nth-child(1) .greeting-title {
  color: #ff6b6b;
}

.greeting-card:nth-child(2) .greeting-title {
  color: #4ecdc4;
}

.greeting-card:nth-child(3) .greeting-title {
  color: #45b7d1;
}

.greeting-card:nth-child(4) .greeting-title {
  color: #96ceb4;
}

.greeting-description {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  opacity: 0.9;
  letter-spacing: 0.01em;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .greeting-app {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }
  
  .greeting-card {
    background: rgba(30, 41, 59, 0.95);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
  
  .greeting-card:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  }
  
  .greeting-description {
    color: #94a3b8;
    opacity: 0.85;
  }
}

/* Animation for entrance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.greeting-card {
  animation: fadeInUp 0.6s ease-out forwards;
}

.greeting-card:nth-child(1) { animation-delay: 0.1s; }
.greeting-card:nth-child(2) { animation-delay: 0.2s; }
.greeting-card:nth-child(3) { animation-delay: 0.3s; }
.greeting-card:nth-child(4) { animation-delay: 0.4s; }
}`}
            />
          </div>
        </section>

        {/* Section 4: Destructuring Props */}
        <section>
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                Destructuring Props
              </CardTitle>
              <CardDescription>
                Write cleaner code by destructuring props
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                <h3 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Cleaner Code with Destructuring
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Instead of writing <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">props.name</code> repeatedly, 
                  you can destructure props directly in the function parameters. This makes your code cleaner and more readable.
                </p>
              </div>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                  <h4 className="font-bold mb-3 text-red-800 dark:text-red-200 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Without Destructuring
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                    <pre>{`function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <span>{props.avatar}</span>
    </div>
  );
}`}</pre>
                  </div>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">Repetitive props. prefix</p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                  <h4 className="font-bold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    With Destructuring ✨
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                    <pre>{`function UserCard({ name, role, avatar }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <span>{avatar}</span>
    </div>
  );
}`}</pre>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">Clean and readable!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: Multiple Props Example */}
        <section>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Multiple Props in Action
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Create rich components by passing multiple props
                </p>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="User Profile Card"
              description="Create a profile card using multiple props: name, role, and avatar"
              colorTheme="purple"
              react={`function ProfileCard({ 
  name, 
  role = "Team Member", 
  avatar = "👤", 
  skills = [], 
  isOnline = false, 
  level = "Junior",
  joinYear = new Date().getFullYear()
}) {
  // Advanced props destructuring with defaults
  const yearsOfExperience = new Date().getFullYear() - joinYear;
  const isSenior = level === "Senior" || level === "Lead";
  const statusColor = isOnline ? "#10b981" : "#6b7280";
  const cardVariant = isSenior ? "senior-card" : "regular-card";
  
  return (
    <div className={\`profile-card \${cardVariant}\`}>
      {/* Status indicator */}
      <div className="profile-status" style={{ backgroundColor: statusColor }}>
        {isOnline ? "🟢" : "⚫"}
      </div>
      
      <div className="profile-avatar-container">
        <span className="profile-avatar">
          {avatar}
        </span>
        <span className="profile-level-badge">
          {level}
        </span>
      </div>
      
      <div className="profile-info">
        <h2 className="profile-name">
          {name}
        </h2>
        <p className="profile-role">
          {role}
        </p>
        <p className="profile-experience">
          {yearsOfExperience} {yearsOfExperience === 1 ? 'year' : 'years'} experience
        </p>
      </div>
      
      {/* Skills section */}
      {skills.length > 0 && (
        <div className="profile-skills">
          <h4 className="skills-title">Skills:</h4>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Action buttons based on props */}
      <div className="profile-actions">
        <button className="action-btn primary">
          {isOnline ? "Message" : "Leave Note"}
        </button>
        {isSenior && (
          <button className="action-btn secondary">
            Mentor
          </button>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="profile-app">
      {/* Different prop combinations demonstrating flexibility */}
      <ProfileCard 
        name="Sarah Johnson" 
        role="Frontend Developer" 
        avatar="👩‍💻"
        skills={["React", "TypeScript", "CSS", "UI/UX"]}
        isOnline={true}
        level="Senior"
        joinYear={2019}
      />
      <ProfileCard 
        name="Alex Kim" 
        // Using default values for role, avatar, skills, isOnline, level, joinYear
      />
      <ProfileCard 
        name="Jordan Taylor" 
        role="DevOps Engineer"
        avatar="🚀"
        skills={["Docker", "Kubernetes", "AWS"]}
        level="Mid"
        joinYear={2020}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`/* Enhanced Profile Component Styles */
.profile-app {
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}

.profile-card {
  background: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  min-width: 200px;
  max-width: 260px;
  height: 360px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.profile-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.18);
}

.senior-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  box-shadow: 0 16px 50px rgba(245, 158, 11, 0.35);
  position: relative;
  overflow: hidden;
}

.senior-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: rotate(45deg);
  transition: all 0.6s;
  opacity: 0;
}

.senior-card:hover::before {
  animation: shimmer 0.6s ease-in-out;
}

.regular-card {
  background: white;
}

.profile-status {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  border: 2px solid white;
}

.profile-avatar-container {
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.profile-avatar {
  font-size: 3.2rem;
  display: block;
}

.profile-level-badge {
  position: absolute;
  bottom: -6px;
  right: -12px;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 700;
  border: 2px solid white;
  box-shadow: 0 3px 10px rgba(99, 102, 241, 0.4);
}

.senior-card .profile-level-badge {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 3px 10px rgba(245, 158, 11, 0.4);
}

.profile-info {
  margin-bottom: 18px;
  flex: 1;
}

.profile-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #1e293b;
  line-height: 1.3;
}

.profile-role {
  font-size: 1rem;
  color: #64748b;
  margin: 0 0 8px 0;
  font-weight: 500;
}

.profile-experience {
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0;
  font-style: italic;
  font-weight: 500;
}

.profile-skills {
  margin-bottom: 20px;
  text-align: left;
}

.skills-title {
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #374151;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.skill-tag {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  color: #374151;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.senior-card .skill-tag {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
  border-color: rgba(245, 158, 11, 0.2);
}

.profile-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: auto;
}

.action-btn {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
}

.action-btn.primary {
  background: #6366f1;
  color: white;
}

.action-btn.primary:hover {
  background: #4f46e5;
}

.action-btn.secondary {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.action-btn.secondary:hover {
  background: #e5e7eb;
}

.senior-card .action-btn.primary {
  background: #f59e0b;
}

.senior-card .action-btn.primary:hover {
  background: #d97706;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .profile-app {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }
  
  .regular-card {
    background: #1e293b;
    border: 1px solid #334155;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
  }
  
  .senior-card {
    background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    border-color: #f59e0b;
    box-shadow: 0 16px 50px rgba(245, 158, 11, 0.25);
  }
  
  .profile-name {
    color: #f1f5f9;
  }
  
  .profile-role {
    color: #94a3b8;
  }
  
  .profile-experience {
    color: #6b7280;
  }
  
  .skills-title {
    color: #e5e7eb;
  }
  
  .skill-tag {
    background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
    color: #d1d5db;
    border-color: #475569;
  }
  
  .senior-card .skill-tag {
    background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
    color: #fef3c7;
    border-color: rgba(245, 158, 11, 0.3);
  }
  
  .action-btn.secondary {
    background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
    color: #e5e7eb;
    border-color: #4b5563;
  }
  
  .action-btn.secondary:hover {
    background: linear-gradient(135deg, #4b5563 0%, #374151 100%);
  }
}`}
            />
          </div>
        </section>

        {/* Section 6: Conditional Rendering with CSS */}
        <section>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Conditional Rendering & CSS
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Dynamic styling and conditional rendering with inline to external CSS conversion
                </p>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Dynamic Theme Cards with Conditional Rendering"
              description="Interactive cards that change appearance based on props and user interactions"
              colorTheme="green"
              react={`// ===== INLINE CSS VERSION (BEFORE CONVERSION) =====
// This demonstrates how complex and messy inline styles can become

function ThemeCardInline({ title, description, isActive, theme, priority, hasNotification }) {
  // PROBLEM: Complex inline style objects that are hard to maintain
  const getCardStyles = () => {
    const baseStyles = {
      padding: '20px',
      borderRadius: '16px',
      border: '2px solid',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      color: '#ffffff'
    };

    // PROBLEM: Theme styles mixed with JavaScript logic
    const themeStyles = {
      ocean: { background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderColor: '#2563eb' },
      forest: { background: 'linear-gradient(135deg, #22c55e, #16a34a)', borderColor: '#16a34a' },
      sunset: { background: 'linear-gradient(135deg, #f97316, #ea580c)', borderColor: '#ea580c' },
      galaxy: { background: 'linear-gradient(135deg, #a855f7, #9333ea)', borderColor: '#9333ea' }
    };

    // PROBLEM: Priority logic creates complex conditional objects
    const priorityStyles = priority === 'high' ? {
      boxShadow: isActive ? '0 20px 60px rgba(0, 0, 0, 0.3)' : '0 10px 40px rgba(0, 0, 0, 0.2)',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      borderStyle: 'solid'
    } : {
      boxShadow: isActive ? '0 12px 40px rgba(0, 0, 0, 0.2)' : '0 6px 20px rgba(0, 0, 0, 0.1)',
      transform: isActive ? 'scale(1.02)' : 'scale(1)',
      borderStyle: isActive ? 'solid' : 'dashed'
    };

    // PROBLEM: Complex object merging on every render
    return { ...baseStyles, ...themeStyles[theme], ...priorityStyles };
  };

  // PROBLEM: More inline style functions for each element (REMOVED - now using CSS classes)
  // const getTitleStyles = () => ({ ... });  // MOVED TO EXTERNAL CSS
  // const getNotificationStyles = () => ({ ... });  // MOVED TO EXTERNAL CSS

  return (
    <div style={getCardStyles()}>
      {hasNotification && <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: '#ef4444',
        color: 'white',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        animation: hasNotification ? 'pulse 2s infinite' : 'none'
      }}>!</div>}
      
      <h3 style={{
        fontSize: priority === 'high' ? '1.4rem' : '1.2rem',
        fontWeight: 'bold',
        margin: '0 0 8px 0',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}>{title}</h3>
      
      <p style={{
        fontSize: '0.9rem',
        margin: '0 0 12px 0',
        opacity: isActive ? '1' : '0.8',
        lineHeight: '1.4'
      }}>
        {description}
      </p>
      
      <div style={{
        display: 'inline-block',
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        {isActive ? 'Active' : 'Inactive'}
      </div>
    </div>
  );
}

// ===== EXTERNAL CSS VERSION (AFTER CONVERSION) =====
// Much cleaner, more maintainable, and better performance!

function ThemeCard({ title, description, isActive, theme, priority, hasNotification }) {
  // SOLUTION: Simple CSS class generation - much cleaner!
  const getCardClasses = () => {
    const classes = ['theme-card', theme];
    
    // Add priority classes
    if (priority === 'high') {
      classes.push('priority-high');
    } else {
      classes.push('priority-low');
    }
    
    // Add active state
    if (isActive) {
      classes.push('active');
    }
    
    return classes.join(' ');
  };

  // SOLUTION: Dynamic classes for conditional elements
  const getBadgeClasses = () => {
    const classes = ['theme-badge'];
    if (isActive) classes.push('active');
    return classes.join(' ');
  };

  return (
    <div className={getCardClasses()}>
      {/* Conditional rendering with CSS classes */}
      {hasNotification && (
        <div className="theme-notification">
          !
        </div>
      )}
      
      <h3 className="theme-title">
        {title}
      </h3>
      
      <p className="theme-description">
        {description}
      </p>
      
      <div className={getBadgeClasses()}>
        {isActive ? 'Active' : 'Inactive'}
      </div>
      
      <div className="theme-meta">
        Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
        {priority === 'high' && ' • High Priority'}
      </div>
    </div>
  );
}

// ===== APP COMPONENT =====
function App() {
  const [activeCard, setActiveCard] = React.useState(null);
  
  const cards = [
    {
      title: 'Ocean Waves',
      description: 'Dive into the deep blue with calming ocean themes',
      theme: 'ocean',
      priority: 'high',
      hasNotification: true
    },
    {
      title: 'Forest Path',
      description: 'Walk through serene green forests and natural beauty',
      theme: 'forest',
      priority: 'low',
      hasNotification: false
    },
    {
      title: 'Sunset Glow',
      description: 'Experience warm golden hour moments',
      theme: 'sunset',
      priority: 'high',
      hasNotification: true
    },
    {
      title: 'Galaxy Night',
      description: 'Explore the mysteries of the cosmos',
      theme: 'galaxy',
      priority: 'low',
      hasNotification: false
    }
  ];
  
  return (
    <div className="theme-app">
      {cards.map((card, index) => (
        <div key={index} onClick={() => setActiveCard(index)}>
          <ThemeCard 
            {...card}
            isActive={activeCard === index}
          />
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`/* ===== INLINE TO EXTERNAL CSS CONVERSION GUIDE =====
 * 
 * BEFORE: Complex inline styles in JavaScript (ThemeCardInline component)
 * AFTER: Clean, maintainable CSS classes (ThemeCard component)
 * 
 * CONVERSION BENEFITS:
 * ✅ Better performance (no object creation on render)
 * ✅ Cleaner code (separation of concerns)
 * ✅ Easier maintenance (styles in one place)
 * ✅ Better debugging (CSS inspector support)
 * ✅ Reusable classes (can be used elsewhere)
 * ✅ All inline styles successfully converted to CSS classes
 */

/* === STEP 1: BASE STYLES (EXTRACTED FROM INLINE) ===== */
.theme-app {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  min-height: 100vh;
}

/* === STEP 2: CONVERT THEME STYLES FROM INLINE TO CLASSES ===== */
/* BEFORE: themeStyles = { ocean: { background: '...' }, forest: { ... } }
 * AFTER: Clean CSS classes that can be applied dynamically
 */
.theme-card {
  padding: 20px;
  border-radius: 16px;
  border: 2px solid;
  font-family: system-ui, -apple-system, sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}

/* Theme classes - much cleaner than inline style objects! */
.theme-card.ocean {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-color: #2563eb;
}

.theme-card.forest {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-color: #16a34a;
}

.theme-card.sunset {
  background: linear-gradient(135deg, #f97316, #ea580c);
  border-color: #ea580c;
}

.theme-card.galaxy {
  background: linear-gradient(135deg, #a855f7, #9333ea);
  border-color: #9333ea;
}

/* === STEP 3: CONVERT PRIORITY STYLES FROM INLINE TO CLASSES ===== */
/* BEFORE: Complex conditional objects in JavaScript
 * AFTER: Simple CSS classes that can be combined
 */
.theme-card.priority-high {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  border-style: solid;
}

.theme-card.priority-high.active {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.theme-card.priority-low {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  border-style: dashed;
}

.theme-card.priority-low.active {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  border-style: solid;
}

/* === STEP 4: CONVERT ELEMENT STYLES FROM INLINE TO CLASSES ===== */
/* BEFORE: getTitleStyles() function returning style objects
 * AFTER: Simple CSS classes with cascade and inheritance
 */
.theme-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Priority-based styling - no inline logic needed! */
.theme-card.priority-high .theme-title {
  font-size: 1.4rem;
}

.theme-description {
  font-size: 0.9rem;
  margin: 0 0 12px 0;
  opacity: 0.8;
  line-height: 1.4;
}

/* Active state styling - CSS handles the logic! */
.theme-card.active .theme-description {
  opacity: 1;
}

/* === STEP 5: CONVERT CONDITIONAL ELEMENTS ===== */
/* BEFORE: getNotificationStyles() function with complex logic
 * AFTER: Simple CSS class that can be toggled
 */
.theme-notification {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  animation: pulse 2s infinite;
}

/* Status badge with state-based styling */
.theme-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
}

.theme-card.active .theme-badge {
  background: rgba(255, 255, 255, 0.2);
}

.theme-meta {
  margin-top: 12px;
  font-size: 0.8rem;
  opacity: 0.7;
}

/* === STEP 6: CONVERT ANIMATIONS FROM INLINE TO CSS ===== */
/* BEFORE: animation: hasNotification ? 'pulse 2s infinite' : 'none'
 * AFTER: CSS handles the animation, JavaScript just adds/removes class
 */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

/* === STEP 7: RESPONSIVE DESIGN ===== */
/* Dark mode - automatically applied based on system preference */
@media (prefers-color-scheme: dark) {
  .theme-app {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  }
  
  .theme-card.ocean {
    background: linear-gradient(135deg, #1e3a8a, #1e40af);
    border-color: #60a5fa;
  }
  
  .theme-card.forest {
    background: linear-gradient(135deg, #14532d, #166534);
    border-color: #4ade80;
  }
  
  .theme-card.sunset {
    background: linear-gradient(135deg, #7c2d12, #dc2626);
    border-color: #fb923c;
  }
  
  .theme-card.galaxy {
    background: linear-gradient(135deg, #581c87, #7c3aed);
    border-color: #c084fc;
  }
}

/* ===== CONVERSION SUMMARY =====
 * 
 * INLINE CSS PROBLEMS:
 * ❌ Complex JavaScript objects for styling
 * ❌ Performance overhead (object creation on every render)
 * ❌ Mixed concerns (styles in JavaScript)
 * ❌ Hard to debug and maintain
 * ❌ No CSS caching benefits
 * 
 * EXTERNAL CSS BENEFITS:
 * ✅ Clean separation of concerns
 * ✅ Better performance (no object creation)
 * ✅ CSS can be cached by browsers
 * ✅ Better debugging with dev tools
 * ✅ Reusable across components
 * ✅ Easier to maintain and update
 * ✅ Supports CSS features like media queries
 * ✅ Better for accessibility and SEO
 */`}
            />
          </div>
        </section>

        {/* Section 7: Default Props */}
        <section>
          <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                Default Props
              </CardTitle>
              <CardDescription>
                Provide fallback values when props aren't passed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
                <h3 className="text-xl font-bold mb-4 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Setting Default Values
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Sometimes you want a prop to have a default value if it's not provided. You can use default parameters 
                  in destructuring to set fallback values, making your components more flexible.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                  <pre>{`function Button({ text = "Click me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Usage examples:
<Button />                    // Uses both defaults
<Button text="Submit" />       // text="Submit", color="blue"
<Button text="Delete" color="red" />  // Both custom`}</pre>
                </div>
              </div>

              <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
                <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <AlertTitle className="text-amber-900 dark:text-amber-100">Pro Tip</AlertTitle>
                <AlertDescription className="text-amber-800 dark:text-amber-200">
                  Default props make your components more robust and prevent errors when props are missing!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Section 7: Best Practices */}
        <section>
          <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Props Best Practices
              </CardTitle>
              <CardDescription>
                Follow these guidelines to use props effectively
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    ✅ Do This
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400">•</span>
                      <span>Use <strong>descriptive prop names</strong> like <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">userName</code> not <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">x</code></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400">•</span>
                      <span><strong>Destructure props</strong> for cleaner code</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400">•</span>
                      <span>Provide <strong>default values</strong> when appropriate</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400">•</span>
                      <span>Keep props <strong>simple and focused</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400">•</span>
                      <span>Use meaningful <strong>component names</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    ❌ Don't Do This
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 dark:text-red-400">•</span>
                      <span>Don't <strong>modify props</strong> - they're read-only!</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 dark:text-red-400">•</span>
                      <span>Don't pass <strong>too many props</strong> to one component</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 dark:text-red-400">•</span>
                      <span>Don't use <strong>unclear names</strong> like <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">data1</code>, <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">data2</code></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 dark:text-red-400">•</span>
                      <span>Don't create <strong>deeply nested</strong> prop structures</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 dark:text-red-400">•</span>
                      <span>Don't <strong>repeat prop names</strong> in the same component</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
                <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <AlertTitle className="text-indigo-900 dark:text-indigo-100">Golden Rule</AlertTitle>
                <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                  Components should be small, focused, and reusable. Props are the key to making components flexible!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Section 8: Summary */}
        <section>
          <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                Key Takeaways
              </CardTitle>
              <CardDescription>
                What you've learned about components and props
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-700">
                  <h4 className="font-bold mb-3 text-cyan-800 dark:text-cyan-200">Components</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Reusable building blocks</li>
                    <li>• Functions that return JSX</li>
                    <li>• Can accept data via props</li>
                    <li>• Make code maintainable</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold mb-3 text-blue-800 dark:text-blue-200">Props</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Pass data from parent to child</li>
                    <li>• Read-only (cannot be modified)</li>
                    <li>• Can have default values</li>
                    <li>• Make components flexible</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
