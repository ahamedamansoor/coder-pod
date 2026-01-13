# System Design Component Architecture

## 🎨 Theme & Styling Guidelines

### Primary Theme Color
**Coder POD Blue: `#5B7FFF`**

Use blue strategically for key elements only:

```tsx
// BLUE - Use for these elements only:
text-blue-600 dark:text-blue-400    // Main page titles, section titles
bg-blue-500                          // Important badges
colorTheme="blue"                    // PageHeader, FrontendCodePreview, InteractivePlayground
```

### Multi-Color Usage (ENCOURAGED)
Use light-toned pastel colors for visual variety and better learning experience:
- **Info cards:** Orange, emerald, purple, amber
- **Example cards:** Different colors for different concepts
- **Feature cards:** Varied colors to distinguish features
- **Diagrams:** Multi-color for better comprehension
- **Interactive elements:** Distinct colors for clarity

**Guidelines:**
- Use light tones (50/100 shades, not 500/600)
- Keep borders matching the card color
- Icons can match card color for consistency
- Card headings can be neutral or match card color

---

## 📋 Component Structure

### 1. Page Header (Required)
Every system design topic component starts with a `PageHeader`:

```tsx
<PageHeader
  icon={Cpu}                       // System design relevant icon
  category="System Design · Architecture"  
  title="Topic Title"
  description="Beginner-friendly description for system design concepts"
  colorTheme="blue"                // Always blue for system design
/>
```

---

## 🎯 Content Sections

### Section 1: Learning Objectives Header
**Purpose:** Set clear expectations and prerequisites

```tsx
<Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
  <CardHeader>
    <div className="flex items-center gap-3 mb-2">
      <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
        <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
          Learning Objectives
        </CardTitle>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="grid md:grid-cols-4 gap-4">
      <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
        <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2">🎯 Goal</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {learningGoal}
        </p>
      </div>
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
        <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">⏱️ Time</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {estimatedTime}
        </p>
      </div>
      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
        <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">📋 Prerequisites</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {prerequisites}
        </p>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
        <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2">🎓 Level</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {skillLevel}
        </p>
      </div>
    </div>
  </CardContent>
</Card>
```

---

### Section 2: Concept Introduction
**Purpose:** Define the system design concept with real-world analogies

```tsx
<Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
  <CardHeader>
    <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
      What is {conceptName}?
    </CardTitle>
    <CardDescription className="text-base mt-2">
      {conceptDescription}
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Definition */}
    <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
      <BookOpen className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
      <h4 className="font-bold text-lg mb-2">Definition</h4>
      <p className="text-slate-700 dark:text-slate-300">
        {formalDefinition}
      </p>
    </div>

    {/* Real-World Analogy */}
    <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
      <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
      <h4 className="font-bold text-lg mb-2">Real-World Analogy</h4>
      <p className="text-slate-700 dark:text-slate-300">
        {realWorldAnalogy}
      </p>
    </div>

    {/* Why It Matters */}
    <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
      <h4 className="font-bold text-lg mb-2">Why It Matters</h4>
      <p className="text-slate-700 dark:text-slate-300">
        {importanceExplanation}
      </p>
    </div>
  </CardContent>
</Card>
```

---

### Section 3: Technical Deep Dive
**Purpose:** Detailed technical explanation with architecture diagrams

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Cpu className="w-7 h-7" />
      Technical Deep Dive
    </CardTitle>
    <CardDescription className="text-base">
      Architecture, components, and data flow
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Architecture Diagram */}
    <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
      <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">System Architecture</h4>
      {architectureDiagram}
    </div>

    {/* Key Components */}
    <div className="grid md:grid-cols-3 gap-4">
      {components.map((component, index) => (
        <div key={index} className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
          <component.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-lg mb-2">{component.name}</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {component.description}
          </p>
        </div>
      ))}
    </div>

    {/* Data Flow */}
    <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <h4 className="font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400">Data Flow</h4>
      {dataFlowDiagram}
    </div>
  </CardContent>
</Card>
```

---

### Section 4: Implementation Guide
**Purpose:** Step-by-step implementation with code examples

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Code2 className="w-7 h-7" />
      Implementation Guide
    </CardTitle>
    <CardDescription className="text-base">
      Step-by-step process with code examples
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {implementationSteps.map((step, index) => (
      <div key={index} className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <h4 className="font-bold text-lg text-orange-600 dark:text-orange-400">
            {step.title}
          </h4>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          {step.description}
        </p>
        {step.codeExample && (
          <FrontendCodePreview
            title={step.codeTitle}
            description={step.codeDescription}
            code={step.codeExample}
            language={step.language}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        )}
      </div>
    ))}
  </CardContent>
</Card>
```

---

### Section 5: Case Study
**Purpose:** Real-world company implementation

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Building2 className="w-7 h-7" />
      Case Study: {companyName}
    </CardTitle>
    <CardDescription className="text-base">
      How {companyName} implemented {conceptName}
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Problem */}
    <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
      <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 mb-3" />
      <h4 className="font-bold text-lg mb-2 text-rose-600 dark:text-rose-400">The Problem</h4>
      <p className="text-slate-700 dark:text-slate-300">
        {problemDescription}
      </p>
    </div>

    {/* Solution */}
    <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
      <h4 className="font-bold text-lg mb-2 text-emerald-600 dark:text-emerald-400">The Solution</h4>
      <p className="text-slate-700 dark:text-slate-300">
        {solutionDescription}
      </p>
    </div>

    {/* Results */}
    <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
      <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
      <h4 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">Results & Metrics</h4>
      <div className="grid md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {metric.value}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Lessons Learned */}
    <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
      <GraduationCap className="w-6 h-6 text-amber-600 dark:text-amber-400 mb-3" />
      <h4 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400">Lessons Learned</h4>
      <ul className="space-y-2">
        {lessons.map((lesson, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">{lesson}</span>
          </li>
        ))}
      </ul>
    </div>
  </CardContent>
</Card>
```

---

### Section 6: Trade-offs & Considerations
**Purpose:** Analyze pros, cons, and alternatives

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Balance className="w-7 h-7" />
      Trade-offs & Considerations
    </CardTitle>
    <CardDescription className="text-base">
      Analyzing the pros, cons, and alternatives
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Pros */}
    <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <h4 className="font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400">✅ Advantages</h4>
      <div className="grid md:grid-cols-2 gap-3">
        {pros.map((pro, index) => (
          <div key={index} className="flex items-start gap-2">
            <Plus className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">{pro}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Cons */}
    <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
      <h4 className="font-bold text-lg mb-4 text-rose-600 dark:text-rose-400">❌ Disadvantages</h4>
      <div className="grid md:grid-cols-2 gap-3">
        {cons.map((con, index) => (
          <div key={index} className="flex items-start gap-2">
            <Minus className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">{con}</span>
          </div>
        ))}
      </div>
    </div>

    {/* When NOT to Use */}
    <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
      <h4 className="font-bold text-lg mb-4 text-amber-600 dark:text-amber-400">⚠️ When NOT to Use</h4>
      <ul className="space-y-2">
        {whenNotToUse.map((reason, index) => (
          <li key={index} className="flex items-start gap-2">
            <X className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">{reason}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Alternatives */}
    <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
      <h4 className="font-bold text-lg mb-4 text-purple-600 dark:text-purple-400">🔄 Alternatives</h4>
      <div className="grid md:grid-cols-2 gap-4">
        {alternatives.map((alternative, index) => (
          <div key={index} className="space-y-2">
            <h5 className="font-semibold text-purple-600 dark:text-purple-400">
              {alternative.name}
            </h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {alternative.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>
```

---

### Section 7: Practice Exercises
**Purpose:** Hands-on design challenges

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Puzzle className="w-7 h-7" />
      Practice Exercises
    </CardTitle>
    <CardDescription className="text-base">
      Test your understanding with design challenges
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Design Challenge */}
    <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
      <h4 className="font-bold text-lg mb-4 text-orange-600 dark:text-orange-400">🎯 Design Challenge</h4>
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold mb-2">Scenario:</h5>
          <p className="text-slate-700 dark:text-slate-300">
            {challenge.scenario}
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Requirements:</h5>
          <ul className="space-y-1">
            {challenge.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Constraints:</h5>
          <ul className="space-y-1">
            {challenge.constraints.map((constraint, index) => (
              <li key={index} className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Review Questions */}
    <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
      <h4 className="font-bold text-lg mb-4 text-purple-600 dark:text-purple-400">📝 Review Questions</h4>
      <div className="space-y-3">
        {questions.map((question, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {index + 1}
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              {question}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Implementation Tasks */}
    <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <h4 className="font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400">💻 Implementation Tasks</h4>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-3">
            <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                {task.title}
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>
```

---

### Section 8: Interactive Playground (Optional)
**Purpose:** Let users experiment with system design concepts

```tsx
{onOpenWebPlayground && (
  <InteractivePlayground
    title="🚀 Design Your System"
    description="Apply what you've learned by designing your own system"
    features={[
      'Interactive architecture designer',
      'Performance analysis tools',
      'Trade-off calculator',
      'Best practices validator'
    ]}
    buttonText="Launch Design Studio"
    onLaunchPlayground={() => onOpenWebPlayground(html, css, js)}
    playgroundData={{ html, css, js }}
    colorTheme="blue"
  />
)}
```

---

## 🌙 Dark Mode Support (REQUIRED)

### Required Dark Mode Classes
**ALL system design components MUST include these dark mode variants:**

#### Background Colors
```tsx
// Main containers
bg-white dark:bg-slate-800
bg-slate-50 dark:bg-slate-900
bg-blue-50 dark:bg-blue-950/20
bg-orange-50 dark:bg-orange-950/20
bg-emerald-50 dark:bg-emerald-950/20
bg-purple-50 dark:bg-purple-950/20
bg-amber-50 dark:bg-amber-950/20
bg-rose-50 dark:bg-rose-950/20

// Gradients
bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10
bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20
bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20
bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20
```

#### Text Colors
```tsx
// Headings
text-blue-600 dark:text-blue-400
text-orange-600 dark:text-orange-400
text-emerald-600 dark:text-emerald-400
text-purple-600 dark:text-purple-400
text-amber-600 dark:text-amber-400
text-rose-600 dark:text-rose-400

// Body text
text-slate-700 dark:text-slate-300
text-slate-600 dark:text-slate-400
text-slate-800 dark:text-slate-200
```

#### Border Colors
```tsx
// Main borders
border-blue-200 dark:border-blue-800
border-orange-200 dark:border-orange-700
border-emerald-200 dark:border-emerald-700
border-purple-200 dark:border-purple-700
border-amber-200 dark:border-amber-700
border-rose-200 dark:border-rose-700
border-slate-200 dark:border-slate-700

// Strong borders
border-2 border-blue-200 dark:border-blue-800
```

#### SVG Elements
```tsx
// Lines and strokes
stroke-blue-400 dark:stroke-blue-500
stroke-slate-400 dark:stroke-slate-500

// Fills
fill-blue-400 dark:fill-blue-500
fill-orange-400 dark:fill-orange-500
```

---

## 🎨 Visual Design Guidelines for System Design

### Color Coding Strategy
- **Orange/Red:** Foundational concepts, definitions, problems
- **Purple/Pink:** Advanced topics, alternatives, creative aspects
- **Emerald/Teal:** Solutions, success metrics, positive outcomes
- **Amber/Orange:** Warnings, constraints, important considerations
- **Blue:** Main theme for titles and primary headers

### Interactive Elements
```tsx
// Architecture Diagram Component
const ArchitectureDiagram = ({ components, connections }) => (
  <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
    {components.map((component, index) => (
      <div
        key={index}
        className="absolute p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
        style={{ left: component.x, top: component.y }}
      >
        <component.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-1" />
        <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
          {component.name}
        </div>
      </div>
    ))}
    {/* SVG connections */}
    <svg className="absolute inset-0 pointer-events-none">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#60a5fa"
            className="dark:#3b82f6"
          />
        </marker>
      </defs>
      {connections.map((connection, index) => (
        <line
          key={index}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          className="stroke-blue-400 dark:stroke-blue-500"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      ))}
    </svg>
  </div>
);

// Data Flow Animation
const DataFlowAnimation = ({ steps }) => (
  <div className="space-y-4">
    {steps.map((step, index) => (
      <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
        <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">
            {step.title}
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {step.description}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      </div>
    ))}
  </div>
);
```

---

## 📋 System Design Component Template

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { 
  Target, BookOpen, Lightbulb, TrendingUp, Cpu, Code2, Building2, 
  AlertTriangle, CheckCircle2, BarChart3, GraduationCap, Balance,
  Plus, Minus, X, Puzzle, ChevronRight, Lock, ArrowRight
} from 'lucide-react';

interface SystemDesignTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SystemDesignTopic({ onOpenWebPlayground }: SystemDesignTopicProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Cpu}
        category="System Design · Architecture"
        title="Topic Name"
        description="Learn system design concepts with real-world examples"
        colorTheme="blue"
      />

      {/* Learning Objectives */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        {/* Learning objectives content */}
      </Card>

      {/* Section 1: Concept Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        {/* Introduction content with definition, analogy, and importance */}
      </Card>

      {/* Section 2: Technical Deep Dive */}
      <Card>
        {/* Technical content with architecture diagrams and components */}
      </Card>

      {/* Section 3: Implementation Guide */}
      <Card>
        {/* Step-by-step implementation with code examples */}
      </Card>

      {/* Section 4: Case Study */}
      <Card>
        {/* Real-world company implementation */}
      </Card>

      {/* Section 5: Trade-offs & Considerations */}
      <Card>
        {/* Pros, cons, and alternatives analysis */}
      </Card>

      {/* Section 6: Practice Exercises */}
      <Card>
        {/* Design challenges and review questions */}
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Design Your System"
          description="Apply what you've learned by designing your own system"
          features={[
            'Interactive architecture designer',
            'Performance analysis tools',
            'Trade-off calculator',
            'Best practices validator'
          ]}
          buttonText="Launch Design Studio"
          onLaunchPlayground={() => onOpenWebPlayground(html, css, js)}
          playgroundData={{ html, css, js }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
```

---

## ✅ System Design Best Practices

### DO ✅
- Use real-world company case studies (Netflix, Amazon, Google, etc.)
- Include concrete metrics and performance numbers
- Show architecture diagrams with clear component relationships
- Provide step-by-step implementation guides
- Analyze trade-offs with pros/cons and alternatives
- Include hands-on design challenges
- Use varied colors for different concept types
- Make examples practical and applicable
- **CRITICAL:** Support dark mode with proper `dark:` variants

### DON'T ❌
- Use only theoretical concepts without real examples
- Skip the trade-off analysis
- Forget to include performance considerations
- Use overly complex diagrams without explanation
- Ignore scalability and reliability aspects
- Skip the implementation details
- Use only blue throughout (use color variety)
- Forget to include interview preparation content
- **CRITICAL:** Forget dark mode support

---

## 🎯 Dark Mode Checklist

Before submitting any system design component, verify:

#### ✅ Background Colors
- [ ] All cards have `dark:` variants for backgrounds
- [ ] Gradients include dark mode variants
- [ ] Container backgrounds support dark mode

#### ✅ Text Colors
- [ ] All headings have `dark:` variants
- [ ] Body text uses `text-slate-700 dark:text-slate-300`
- [ ] Muted text uses `text-slate-600 dark:text-slate-400`

#### ✅ Border Colors
- [ ] All borders have `dark:` variants
- [ ] Interactive elements have proper dark mode borders
- [ ] Focus states include dark mode colors

#### ✅ Interactive Elements
- [ ] Icons have dark mode color variants
- [ ] SVG elements use `className` with dark mode classes
- [ ] Hover states work in both themes

#### ✅ Special Elements
- [ ] Architecture diagrams support dark mode
- [ ] Data flow animations work in dark mode
- [ ] Code examples have dark mode syntax highlighting
- [ ] Metrics and charts are visible in dark mode

---

This system design layout ensures comprehensive coverage of complex topics with visual learning, real-world examples, and practical application - perfect for preparing developers for system design interviews and real-world challenges, with full dark mode support throughout.