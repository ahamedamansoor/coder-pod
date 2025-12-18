# DSA Content Creation Template

This template provides a comprehensive guide for creating DSA (Data Structures & Algorithms) component files. Follow this structure to ensure consistency, clarity, and educational value.

---

## File Structure Overview

```
DSA Component File Structure:
├── Imports & Setup
├── State Management
├── Steps Array (Detailed)
├── Helper Functions
├── Component JSX
│   ├── Page Header
│   ├── Badges
│   ├── What You'll Learn
│   ├── Visual Problem Statement
│   ├── Animated Visualization
│   ├── Complexity Analysis
│   └── Code Snippet
```

---

## 1. IMPORTS & SETUP

### Required Imports
```typescript
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  // Choose relevant icons from lucide-react
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  [YourProblemSpecificIcon]
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
```

### Optional: CSS Animations
If your visualization needs custom animations:
```typescript
const styleTag = (
  <style jsx>{`
    @keyframes yourCustomAnimation {
      0%, 100% { /* start/end state */ }
      50% { /* mid state */ }
    }
    .your-class {
      animation: yourCustomAnimation 1s ease-in-out;
    }
  `}</style>
);
```

---

## 2. STATE MANAGEMENT

### Essential State Variables
```typescript
export default function YourProblemName() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [yourData] = useState([1, 2, 3, 4, 5]); // example array/string
  
  // Algorithm pointers/indices
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(4);
  
  // Algorithm-specific state
  const [currentValue, setCurrentValue] = useState(0);
  const [comparison, setComparison] = useState<any>(null);
  
  // ... add more as needed
}
```

---

## 3. STEPS ARRAY - COMPREHENSIVE BREAKDOWN

**CRITICAL:** Each step should represent ONE atomic operation. Break down the algorithm into as many steps as needed for clarity.

### ⭐ GOLDEN RULE: MAXIMIZE LEARNING THROUGH GRANULAR STEPS

**Philosophy:** More steps = Better understanding. Never combine multiple operations into one step.

**Minimum Step Counts by Algorithm Type:**
- **Simple Linear Scan:** 15-20 steps minimum
- **Two Pointers:** 25-35 steps minimum  
- **Sliding Window:** 30-40 steps minimum
- **Prefix Sum/Kadane's:** 25-35 steps minimum
- **Binary Search:** 20-30 steps minimum
- **Sorting (Small Array):** 30-50 steps minimum
- **Recursion/Backtracking:** 40-60 steps minimum
- **Dynamic Programming:** 50-80 steps minimum

### Atomic Step Breakdown Rules

**ALWAYS Break Down Into Separate Steps:**

1. **Initialization:** Each variable gets its own step
   - ❌ Bad: "Initialize left=0, right=n-1, sum=0" (1 step)
   - ✅ Good: Step 1: "Initialize left=0", Step 2: "Initialize right=n-1", Step 3: "Initialize sum=0" (3 steps)

2. **Loop Conditions:** Check gets its own step
   - ❌ Bad: "Loop iteration i=3" (1 step)
   - ✅ Good: Step N: "Check loop: i < n? YES!", Step N+1: "Loop iteration i=3" (2 steps)

3. **Calculations:** Each calculation separate
   - ❌ Bad: "Calculate profit = price - minPrice = 5" (1 step)
   - ✅ Good: Step N: "Get current price = $6", Step N+1: "Calculate: $6 - $1 = $5" (2 steps)

4. **Comparisons:** Split checking from updating
   - ❌ Bad: "Check and update maximum" (1 step)
   - ✅ Good: Step N: "Compare: 5 > 3? YES", Step N+1: "Update maximum = 5" (2 steps)

5. **Pointer Movement:** Each pointer moves separately
   - ❌ Bad: "Move both pointers" (1 step)
   - ✅ Good: Step N: "Move left++", Step N+1: "Move right--" (2 steps)

6. **Array Access:** Show the access explicitly
   - ❌ Bad: "Process element" (1 step)
   - ✅ Good: Step N: "Access nums[3]", Step N+1: "Value = 4", Step N+2: "Process value 4" (3 steps)

### Step Object Structure
```typescript
const steps = [
  {
    step: 1,                    // Step number (sequential)
    left: 0,                    // Algorithm state (pointers, indices)
    right: 4,
    currentValue: 0,
    currentLine: 2,             // Which line of code is executing
    description: '📋 Initialize: Set left = 0',  // Clear description with emoji
    action: 'init',             // Action type for visual styling
    highlighted: [0],           // Which elements to highlight
    comparison: null,           // Any comparison data
    // ... other state variables
  },
  // ... more steps
];
```

### Step Action Types (Examples)
- `'init'` - Initialization
- `'loop-start'` - Loop iteration begins
- `'loop-check'` - Checking loop condition
- `'calculate'` - Calculating a value
- `'compare'` - Comparing values
- `'check'` - Checking a condition
- `'update'` - Updating a variable
- `'move'` - Moving pointers
- `'found'` - Found the answer
- `'result'` - Returning result
- `'done'` - Algorithm complete

### 🎯 Learning Psychology: Why More Steps = Better Learning

**Cognitive Load Theory:**
- Beginners can only process 3-5 concepts simultaneously
- Each step should introduce ONE new concept
- Explicit steps reduce mental burden

**Benefits of Granular Steps:**
1. **Reduces Cognitive Overload** - One thing to understand at a time
2. **Shows Hidden Operations** - Makes implicit operations explicit
3. **Builds Pattern Recognition** - Learners see recurring patterns
4. **Enables Replay Learning** - Can review specific operations
5. **Prevents Information Gaps** - Nothing assumed, everything shown

**Example: Two Pointers Algorithm**
- ❌ **5 steps total** - Learner confused, misses key insights
- ⚠️ **15 steps total** - Bare minimum, some gaps remain
- ✅ **30 steps total** - Optimal learning, all operations visible
- 🌟 **40+ steps total** - Exceptional clarity, even edge cases shown

### Step Categories Breakdown

#### A. INITIALIZATION (2-5 steps)
```typescript
// Step 1: Calculate/setup initial values
{ step: 1, description: '📋 Calculate total sum = 28', action: 'init', ... }

// Step 2: Initialize first pointer/variable
{ step: 2, description: '📋 Initialize: Set left = 0', action: 'init', ... }

// Step 3: Initialize second pointer/variable
{ step: 3, description: '📋 Initialize: Set right = n-1', action: 'init', ... }
```

#### B. ITERATION (For each loop iteration, 4-8 steps minimum)

**IMPORTANT:** Each loop iteration should have multiple steps to show ALL operations.

**Iteration Pattern (Two Pointers Example):**
```typescript
// Step N: Announce iteration start
{ step: 4, description: '🔄 Loop Iteration: Starting iteration with left=0, right=4', action: 'loop-start', ... }

// Step N+1: Check loop condition (ALWAYS separate step)
{ step: 5, description: '✅ Loop Check: Is left < right? YES! (0 < 4)', action: 'loop-check', ... }

// Step N+2: Access/examine left element
{ step: 6, description: '👉 Examine: nums[left] = nums[0] = 1', action: 'examine', ... }

// Step N+3: Access/examine right element
{ step: 7, description: '👈 Examine: nums[right] = nums[4] = 5', action: 'examine', ... }

// Step N+4: Calculate derived value
{ step: 8, description: '📊 Calculate: sum = 1 + 5 = 6', action: 'calculate', ... }

// Step N+5: Compare with target (if applicable)
{ step: 9, description: '🔍 Compare: sum(6) vs target(9)? 6 < 9 (too small)', action: 'compare', ... }

// Step N+6: Decision based on comparison
{ step: 10, description: '💡 Decision: Since sum < target, move left pointer', action: 'decision', ... }

// Step N+7: Move pointer
{ step: 11, description: '➡️ Move: left++ (0 → 1)', action: 'move', ... }
```

**Iteration Pattern (Kadane's Algorithm Example):**
```typescript
// Step N: Start iteration
{ step: 5, description: '🔄 Day 2: Examining price = $5', action: 'loop-start', ... }

// Step N+1: Get current value
{ step: 6, description: '📍 Current Price: prices[2] = $5', action: 'examine', ... }

// Step N+2: Check/update minimum
{ step: 7, description: '💰 Check minPrice: min(1, 5) = $1. Keep current.', action: 'check-min', ... }

// Step N+3: Calculate profit if sold today
{ step: 8, description: '📊 Calculate Potential Profit: $5 - $1 = $4', action: 'calculate', ... }

// Step N+4: Compare with current maximum
{ step: 9, description: '🔍 Compare: $4 vs maxProfit($0)? $4 is better!', action: 'compare', ... }

// Step N+5: Update maximum
{ step: 10, description: '✅ Update maxProfit: $0 → $4. New best!', action: 'update-max', ... }
```

**Key Rule:** NEVER skip the comparison step before updating. Always show:
1. What we're comparing
2. The comparison result
3. The decision/action taken

#### C. TERMINATION (2-3 steps)
```typescript
// Step M-1: Final check/condition
{ step: 36, description: '🎯 Loop Check: left >= right? YES! Pointers met!', action: 'loop-complete', ... }

// Step M: Return result
{ step: 37, description: '✅ Return result: Found at index 3!', action: 'result', ... }

// Step M+1 (optional): Done state
{ step: 38, description: '🎯 Algorithm complete!', action: 'done', ... }
```

### Emojis for Step Descriptions
- 📋 Initialization
- 🔄 Loop/Iteration
- 📊 Calculation
- 🔍 Checking/Examining
- 👉 Left pointer/element
- 👈 Right pointer/element
- 📍 Current position/element
- ✅ Success/Match/Update
- ❌ Failure/No Match
- ➕ Addition/Increment
- ➖ Subtraction/Decrement
- ➡️ Move Right
- ⬅️ Move Left
- 🎯 Found/Result
- ⚖️ Balance/Comparison
- 💡 Decision/Insight
- 💰 Money/Value related
- 🏆 Maximum/Best
- 📉 Minimum/Worst
- ⏸️ Pause/Check

### 📝 Step Description Best Practices

**Clear and Specific:**
- ❌ Bad: "Update variable"
- ✅ Good: "Update maxProfit: $3 → $5 (new maximum found!)"

**Show Before and After:**
- ❌ Bad: "Move pointer"
- ✅ Good: "Move left: 2 → 3 (left++)"

**Include Values:**
- ❌ Bad: "Compare elements"
- ✅ Good: "Compare: nums[2](5) vs nums[4](3)? 5 > 3"

**Show Operation Result:**
- ❌ Bad: "Calculate sum"
- ✅ Good: "Calculate: 3 + 5 = 8 (sum of current elements)"

**Explain Why (for key steps):**
- ❌ Bad: "Move left pointer"
- ✅ Good: "Move left pointer (sum too small, need larger value)"

### 🚫 Common Mistakes to Avoid

**1. Combining Multiple Operations:**
```typescript
// ❌ BAD - Too much in one step
{ step: 5, description: 'Check if left < right, move both pointers, update sum', ... }

// ✅ GOOD - Separate steps
{ step: 5, description: '✅ Loop Check: left(2) < right(8)? YES!', action: 'loop-check', ... }
{ step: 6, description: '➡️ Move: left++ (2 → 3)', action: 'move', ... }
{ step: 7, description: '⬅️ Move: right-- (8 → 7)', action: 'move', ... }
{ step: 8, description: '📊 Update: sum = sum + nums[3] = 12 + 4 = 16', action: 'update', ... }
```

**2. Skipping the Comparison Before Update:**
```typescript
// ❌ BAD - Direct update without showing comparison
{ step: 10, description: 'Update maximum to 5', ... }

// ✅ GOOD - Show comparison then update
{ step: 10, description: '🔍 Compare: current(5) vs max(3)? 5 > 3!', action: 'compare', ... }
{ step: 11, description: '✅ Update: max = 5 (new maximum found)', action: 'update-max', ... }
```

**3. Not Showing Array Access:**
```typescript
// ❌ BAD - Assumes array access
{ step: 8, description: 'Process value 7', ... }

// ✅ GOOD - Explicit array access
{ step: 8, description: '📍 Access: nums[3] = 7', action: 'access', ... }
{ step: 9, description: '🔧 Process: value 7 is prime', action: 'process', ... }
```

**4. Vague Loop Conditions:**
```typescript
// ❌ BAD - No explicit check
{ step: 15, description: 'Continue loop', ... }

// ✅ GOOD - Show the actual condition
{ step: 15, description: '✅ Loop Check: i(3) < n(6)? YES! Continue...', action: 'loop-check', ... }
```

**5. Implicit Calculations:**
```typescript
// ❌ BAD - Result appears magically
{ step: 12, description: 'Sum is now 15', ... }

// ✅ GOOD - Show the calculation
{ step: 12, description: '📊 Calculate: sum = 10 + 5 = 15', action: 'calculate', ... }
```

### 🎓 Real-World Step Expansion Examples

**Example 1: Find Pivot Index (37 steps)**
```typescript
// Initialization: 3 steps
Step 1: Calculate total sum
Step 2: Initialize leftSum = 0
Step 3: Initialize index i = 0

// For EACH element (6 elements, 5-6 steps each = ~33 steps):
Step 4-9: Process nums[0]
  - Loop check
  - Calculate rightSum
  - Compare leftSum vs rightSum
  - Decision (not pivot)
  - Update leftSum
  - Move to next

Step 10-15: Process nums[1]
Step 16-21: Process nums[2]
Step 22-27: Process nums[3] (pivot found!)
Step 28-33: (remaining elements if needed)

// Termination: 1 step
Step 37: Return pivot index
```

**Example 2: Two Sum (Sorted Array, 30 steps)**
```typescript
// Initialization: 2 steps
Step 1: Initialize left = 0
Step 2: Initialize right = n-1

// Iterations (multiple passes, 5-7 steps each):
First Iteration (7 steps):
  Step 3: Loop check (left < right)
  Step 4: Access nums[left]
  Step 5: Access nums[right]
  Step 6: Calculate sum
  Step 7: Compare sum vs target
  Step 8: Decision
  Step 9: Move pointer

Second Iteration (7 steps):
  Step 10-16: Similar pattern

[Continue for ~4 iterations = 28 steps total]

// Termination: 2 steps
Step 29: Found match
Step 30: Return indices
```

**Example 3: Kadane's Algorithm (30 steps)**
```typescript
// Initialization: 2 steps
Step 1: maxSum = -Infinity
Step 2: currentSum = 0

// For EACH element (9 elements, 3 steps each = 27 steps):
Day 0 (3 steps):
  Step 3: Loop start - examining index 0
  Step 4: Update currentSum calculation
  Step 5: Check/update maxSum

Day 1 (3 steps):
  Step 6-8: Similar pattern

[Continue for all 9 days]

// Termination: 1 step
Step 30: Return maxSum
```

### ✅ Quality Checklist for Step Arrays

Before finalizing your component, verify:

**Quantity:**
- [ ] Meets minimum step count for algorithm type
- [ ] Each array element processed with multiple steps
- [ ] Initialization has 2-5 separate steps
- [ ] Each loop iteration has 4-8 steps minimum

**Quality:**
- [ ] Each step describes ONE operation only
- [ ] All comparisons shown before updates
- [ ] Array accesses are explicit
- [ ] Calculations show the math (a + b = c)
- [ ] Pointer movements show before→after
- [ ] Loop conditions explicitly checked
- [ ] Values included in descriptions

**Clarity:**
- [ ] Emojis used consistently
- [ ] Action types match the operation
- [ ] Descriptions are specific, not vague
- [ ] Why/reasoning included for key decisions
- [ ] Edge cases have explanatory steps

**Completeness:**
- [ ] No "magic jumps" in state
- [ ] Every variable update explained
- [ ] Every comparison shown
- [ ] First and last iterations detailed
- [ ] Result/return has dedicated step

**Testing:**
- [ ] Walk through manually - no confusion?
- [ ] Beginner could follow without gaps?
- [ ] Each step adds understanding?
- [ ] No combined operations?
- [ ] Visual state matches step description?

---

## 4. HELPER FUNCTIONS

### Code Viewer Function
```typescript
const getCodeWithValues = (stepData: typeof steps[0]) => {
  return [
    { 
      line: 1, 
      code: 'function yourAlgorithm(input) {', 
      active: stepData.currentLine === 1, 
      indent: 0 
    },
    { 
      line: 2, 
      code: '  let variable = 0;', 
      active: stepData.currentLine === 2, 
      indent: 1,
      values: stepData.currentLine === 2 ? `variable=${stepData.variable}` : ''
    },
    // ... more lines
  ];
};
```

### Step Navigation Functions
```typescript
const goToStep = (stepIndex: number) => {
  const step = steps[stepIndex];
  setCurrentStep(stepIndex);
  setLeft(step.left);
  setRight(step.right);
  // Update all relevant state from step
};

const handlePlay = () => {
  setIsAnimating(true);
  goToStep(0);

  const speedMap = {
    slow: 3500,
    normal: 2500,
    fast: 1500
  };
  const delay = speedMap[animationSpeed];

  steps.forEach((step, index) => {
    setTimeout(() => {
      if (index < steps.length) {
        goToStep(index);
      }
      if (index === steps.length - 1) {
        setTimeout(() => setIsAnimating(false), 2000);
      }
    }, index * delay);
  });
};

const handleNext = () => {
  if (currentStep < steps.length - 1) {
    goToStep(currentStep + 1);
  }
};

const handlePrevious = () => {
  if (currentStep > 0) {
    goToStep(currentStep - 1);
  }
};

const handleReset = () => {
  setCurrentStep(0);
  setIsAnimating(false);
};
```

---

## 5. JSX STRUCTURE

### A. PAGE HEADER
```tsx
<PageHeader
  icon={YourIcon}
  category="DSA · [Category]"  // e.g., "DSA · Arrays", "DSA · Two Pointers"
  title="Problem Name"
  description="Brief description of the problem and approach"
  colorTheme="[color]"  // emerald, blue, indigo, purple, etc.
  badges={[
    { label: 'Time: O(n)', variant: 'success' },
    { label: 'Space: O(1)', variant: 'info' },
    { label: 'Difficulty', variant: 'default' },
  ]}
/>
```

### B. VISUAL PROBLEM STATEMENT CARD

This is the MOST IMPORTANT section for learning. Include:

```tsx
<Card className="border-[color]-200 dark:border-[color]-800">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Target className="w-6 h-6 text-[color]-600" />
      Understanding the Problem Visually
    </CardTitle>
    <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
  </CardHeader>
  <CardContent className="space-y-8">
    
    {/* Section 1: What are we looking for? */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
        <Icon className="w-5 h-5" />
        What is [Problem Concept]?
      </h4>
      <div className="space-y-4">
        <p className="text-slate-700 dark:text-slate-300">
          Clear explanation of the problem concept
        </p>
        
        {/* Input/Output Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
            <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
            {/* Show input example */}
          </div>
          
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
            <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
            {/* Show expected output */}
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Visual Comparisons */}
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
        Comparing Different Cases
      </h4>
      
      {/* Valid Case */}
      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-green-700 dark:text-green-300">Valid Case Example</span>
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Valid ✓</span>
            </div>
            {/* Visual representation */}
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Explanation why this works
            </div>
          </div>
        </div>
      </div>

      {/* Invalid Case */}
      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-red-700 dark:text-red-300">Invalid Case Example</span>
              <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">Invalid ✗</span>
            </div>
            {/* Visual representation */}
            <div className="text-xs text-red-600 dark:text-red-400">
              Explanation why this doesn't work
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3: Step-by-Step Algorithm Explanation */}
    <div className="bg-gradient-to-br from-[color]-50 to-[color]-50 dark:from-[color]-950/30 dark:to-[color]-950/30 p-6 rounded-xl border-2">
      <h4 className="font-bold mb-4 flex items-center gap-2">
        <ArrowRight className="w-5 h-5" />
        How the Algorithm Works
      </h4>
      
      <div className="space-y-4">
        {/* Step 1 */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[color]-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
          <div className="flex-1">
            <div className="font-semibold mb-2">Step Title</div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Explanation:</div>
              {/* Visual or code example */}
            </div>
          </div>
        </div>
        
        {/* Repeat for each conceptual step (usually 3-4 steps) */}
      </div>
    </div>

    {/* Section 4: Important Concepts Alert */}
    <Alert className="border-orange-200 dark:border-orange-700">
      <AlertCircle className="h-5 w-5 text-orange-600" />
      <AlertTitle>Important Concepts</AlertTitle>
      <AlertDescription className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-orange-600 font-bold">•</span>
          <span>Key concept 1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-600 font-bold">•</span>
          <span>Key concept 2</span>
        </div>
        {/* More concepts */}
      </AlertDescription>
    </Alert>

  </CardContent>
</Card>
```

### C. ANIMATED VISUALIZATION CARD

```tsx
<Card className="border-[color]-200 dark:border-[color]-800">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <div className="p-2 rounded-lg bg-[color]-100 dark:bg-[color]-900/40">
        <Icon className="w-6 h-6 text-[color]-600 dark:text-[color]-400" />
      </div>
      Step-by-Step Animation
    </CardTitle>
    <CardDescription>Watch how the algorithm works</CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    
    {/* Controls - Line 1 */}
    <div className="flex items-center justify-center gap-3">
      <Button
        onClick={handlePlay}
        disabled={isAnimating}
        className="bg-gradient-to-r from-[color]-600 to-[color]-600 hover:from-[color]-700 hover:to-[color]-700"
      >
        <Play className="w-4 h-4 mr-2" />
        {isAnimating ? 'Playing...' : 'Play Animation'}
      </Button>
      <Button onClick={handleReset} disabled={isAnimating} variant="outline">
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset
      </Button>
    </div>

    {/* Speed Control - Line 2 */}
    <div className="flex items-center justify-center gap-2">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="speed"
          value="slow"
          checked={animationSpeed === 'slow'}
          onChange={(e) => setAnimationSpeed(e.target.value as 'slow')}
          disabled={isAnimating}
          className="w-4 h-4 text-[color]-600 focus:ring-[color]-500"
        />
        <span className="text-sm text-slate-600 dark:text-slate-400">Slow</span>
      </label>
      {/* Repeat for Normal and Fast */}
    </div>

    {/* Navigation Controls - Line 3 */}
    <div className="flex items-center justify-center gap-4">
      <Button
        onClick={handlePrevious}
        disabled={currentStep === 0 || isAnimating}
        variant="outline"
        size="lg"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </Button>
      
      <div className="px-6 py-2 bg-gradient-to-r from-[color]-100 to-[color]-100 dark:from-[color]-900/40 dark:to-[color]-900/40 rounded-lg border-2 border-[color]-300 dark:border-[color]-700">
        <span className="text-sm font-bold text-[color]-900 dark:text-[color]-100">
          Step {currentStep + 1} / {steps.length}
        </span>
      </div>
      
      <Button
        onClick={handleNext}
        disabled={currentStep === steps.length - 1 || isAnimating}
        variant="outline"
        size="lg"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>

    {/* Code Viewer */}
    {currentStep >= 0 && (
      <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
        {/* Terminal-style header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">algorithm.js</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
          </div>
        </div>

        {/* Code lines */}
        <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
          {getCodeWithValues(steps[currentStep]).map((lineData) => (
            <div
              key={lineData.line}
              className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                lineData.active
                  ? 'bg-[color]-50 dark:bg-[color]-900/20 border-l-2 border-[color]-400 dark:border-[color]-500'
                  : ''
              }`}
            >
              <span className={`select-none w-6 text-right flex-shrink-0 ${
                lineData.active
                  ? 'text-[color]-600 dark:text-[color]-400 font-semibold'
                  : 'text-slate-400 dark:text-slate-600'
              }`}>
                {lineData.line}
              </span>

              <code className="flex-1 text-slate-700 dark:text-slate-300">
                <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                  {lineData.code}
                </span>
                {lineData.values && (
                  <span className="ml-3 text-[color]-600 dark:text-[color]-400 font-semibold">
                    {lineData.values}
                  </span>
                )}
              </code>
            </div>
          ))}
        </div>

        {/* Footer with variable values */}
        <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 dark:text-slate-400">Variable1:</span>
                <span className="font-semibold text-[color]-600 dark:text-[color]-400">{steps[currentStep].var1}</span>
              </div>
              {/* More variables */}
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Step Description Card */}
    {currentStep >= 0 && (
      <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-green-600">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Step {steps[currentStep].step} of {steps.length}
              </div>
              <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                {/* Action type label based on steps[currentStep].action */}
                {steps[currentStep].action === 'init' && '🚀 Initialization'}
                {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                {steps[currentStep].action === 'calculate' && '📊 Calculating'}
                {steps[currentStep].action === 'check' && '🔍 Checking'}
                {steps[currentStep].action === 'update' && '➕ Updating'}
                {steps[currentStep].action === 'found' && '✅ Found!'}
                {steps[currentStep].action === 'result' && '🎯 Result'}
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
            {steps[currentStep].description}
          </p>
        </div>
      </div>
    )}

    {/* Visual Representation (Array/String/etc.) */}
    {currentStep >= 0 && (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-[color]-900 dark:text-[color]-100">Visual Representation:</p>
          <div className="flex items-center gap-3 text-xs">
            {/* Variable badges */}
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-center gap-2">
            {yourData.map((val, idx) => {
              const isCurrent = steps[currentStep].index === idx;
              const isSpecial = /* your condition */;
              
              return (
                <div key={idx} className="relative flex flex-col items-center gap-2">
                  {/* Value Box */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                      isSpecial
                        ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-125 ring-4 ring-green-300 animate-pulse'
                        : isCurrent
                        ? 'bg-[color]-200 dark:bg-[color]-800 border-[color]-500 scale-110'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-300 opacity-60'
                    }`}
                  >
                    {val}
                  </div>
                  
                  {/* Index */}
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                  {/* Current Indicator */}
                  {isCurrent && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                      <div className="text-xs font-bold text-[color]-700 dark:text-[color]-300 bg-[color]-100 dark:bg-[color]-900/80 px-2.5 py-1 rounded border border-[color]-500 shadow-md">
                        Current
                      </div>
                      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-[color]-500"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )}

  </CardContent>
</Card>
```

### D. COMPLEXITY ANALYSIS CARD
```tsx
<Card className="border-[color]-200 dark:border-[color]-800">
  <CardHeader>
    <CardTitle>Complexity Analysis</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
        <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
          ⏱️ Time Complexity: O(n)
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Detailed explanation of why time is O(n)
        </p>
      </div>
      <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
          💾 Space Complexity: O(1)
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Detailed explanation of space usage
        </p>
      </div>
    </div>
  </CardContent>
</Card>
```

### E. CODE SNIPPET
```tsx
<CodeSnippet
  title="Complete Solution"
  language="javascript"
  code={`function yourAlgorithm(input) {
  // Implementation
  return result;
}`}
/>
```

---

## 6. REGISTRATION IN DSA CONTENT DISPLAY

After creating your component, register it:

### File: `/src/components/languages/dsa/dsa-content-display.tsx`

1. **Add lazy import:**
```typescript
const YourComponent = lazy(() => import('./topics/your-component-filename'));
```

2. **Add to topicComponentMap:**
```typescript
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  // ... existing mappings
  'arrays-dsa-category-subcategory-your-problem-slug': YourComponent,
};
```

---

## 7. COLOR THEMES

Choose a consistent color theme for your component:

- **emerald/teal** - Arrays, Searching
- **blue/indigo** - Strings, Sliding Window
- **green** - Two Pointers, Palindrome
- **purple/pink** - Dynamic Programming
- **orange/amber** - Sorting
- **red/rose** - Graphs

Use the chosen color consistently throughout:
- PageHeader `colorTheme`
- Card borders
- Badges
- Buttons
- Highlights
- Gradient backgrounds

---

## 8. BEST PRACTICES

### Visual Design
✅ Use emojis in step descriptions for visual interest
✅ Color-code different states (active, matched, failed, etc.)
✅ Show transitions with animations (scale, pulse, glow)
✅ Use gradient backgrounds for section separation
✅ Maintain consistent spacing (space-y-4, space-y-6, space-y-8)

### Educational Content
✅ Break algorithm into smallest possible steps
✅ Explain WHY not just WHAT
✅ Show both valid and invalid examples
✅ Include visual comparisons
✅ Add "Important Concepts" alert box
✅ Explain complexity with reasoning

### Code Quality
✅ Use TypeScript types for all state
✅ Keep components self-contained
✅ Use proper spacing and indentation
✅ Add comments for complex logic
✅ Follow existing naming conventions

### Animations
✅ Provide 3 speed options (slow, normal, fast)
✅ Disable controls during animation
✅ Show smooth transitions (duration-700)
✅ Use CSS animations for complex effects
✅ Add pulse/glow for important moments

---

## 9. TESTING CHECKLIST

Before considering your component complete:

- [ ] All steps have clear descriptions
- [ ] Animation plays smoothly at all speeds
- [ ] Previous/Next navigation works correctly
- [ ] Reset button properly resets state
- [ ] Code viewer highlights correct lines
- [ ] Variable values update in real-time
- [ ] Visual representation matches step state
- [ ] Dark mode looks good
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Component registered in content display
- [ ] Educational value is maximized

---

## 10. EXAMPLE FILE NAMING

Follow this naming convention:
- `arrays-find-pivot-index.tsx`
- `strings-longest-substring-without-repeating.tsx`
- `arrays-two-sum-sorted.tsx`
- `category-problem-name.tsx`

---

## 11. MINIMUM STEP COUNT GUIDELINES

| Algorithm Complexity | Minimum Steps | Recommended Steps |
|---------------------|---------------|-------------------|
| Simple (O(n))       | 15-20         | 20-30             |
| Medium (O(n log n)) | 25-35         | 35-50             |
| Complex (O(n²))     | 40-60         | 60-100            |

**Remember:** More steps = Better understanding. Don't sacrifice clarity for brevity!

---

## 12. QUICK START TEMPLATE

```typescript
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, YourIcon, ArrowRight } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function YourProblemName() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Your state variables here
  
  const steps = [
    // Your detailed steps here (15-100 steps)
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      // Your code lines here
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    // Update all state variables from step
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);
    const speedMap = { slow: 3500, normal: 2500, fast: 1500 };
    const delay = speedMap[animationSpeed];
    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) goToStep(index);
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnimating(false), 2000);
        }
      }, index * delay);
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) goToStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) goToStep(currentStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={YourIcon}
        category="DSA · Category"
        title="Your Problem Name"
        description="Brief description"
        colorTheme="your-color"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Difficulty', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card - MOST IMPORTANT */}
      {/* Follow template above */}

      {/* Animated Visualization Card */}
      {/* Follow template above */}

      {/* Complexity Analysis Card */}
      {/* Follow template above */}

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`// Your solution code`}
      />
    </div>
  );
}
```

---

## END OF TEMPLATE

**Remember:** The goal is to make learning DSA concepts as clear and engaging as possible. Every step should add value. Every visual should clarify. Every explanation should enlighten.

**Quality over Speed:** Take time to create comprehensive, well-structured content that learners will truly benefit from.
