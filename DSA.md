# Understanding Next Greater Element Problems

## Overview

The Next Greater Element problems are fundamental algorithmic challenges that test understanding of stack data structures and efficient array processing. These problems appear frequently in technical interviews and are essential for mastering monotonic stack patterns.

## What is Next Greater Element?

For each element in an array, the Next Greater Element problem asks us to find the first element to its right that is greater than it. If no such element exists, we return -1.

### Basic Example: Linear Array

```
Input:  [4, 5, 2, 25]
Output: [5, 25, 25, -1]
```

#### Visual Breakdown:

```
Step 1: Original Array
┌───┬───┬───┬────┐
│ 4 │ 5 │ 2 │ 25 │
└───┴───┴───┴────┘
[0] [1] [2] [3]

Step 2: Process element 4 at index 0
┌───┐ → ┌───┐
│ 4 │ → │ 5 │ ← Next greater of 4 is 5
└───┘   └───┘

Step 3: Process element 5 at index 1
        ┌───┐ → ┌────┐
        │ 5 │ → │ 25 │ ← Next greater of 5 is 25
        └───┘   └────┘

Step 4: Process element 2 at index 2
            ┌───┐ → ┌────┐
            │ 2 │ → │ 25 │ ← Next greater of 2 is 25
            └───┘   └────┘

Step 5: Process element 25 at index 3
                ┌────┐
                │ 25 │ → ✗ No greater element found
                └────┘
```

## Problem I: Linear Array Approach

### Algorithm Strategy

1. **Monotonic Decreasing Stack**: Maintain a stack that stores indices in decreasing order of their values
2. **Single Pass**: Process each element exactly once
3. **Efficient Lookup**: When we find a greater element, we update all smaller elements in the stack

### Step-by-Step Algorithm

```
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];  // stores indices
  
  for (let i = 0; i < nums.length; i++) {
    // While current element is greater than stack top element
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];  // Found next greater
    }
    
    stack.push(i);  // Add current index to stack
  }
  
  return result;
}
```

### Visual Algorithm Execution

```
Input: [4, 5, 2, 25]
Result: [-1, -1, -1, -1]
Stack: []

i = 0, nums[0] = 4
Stack is empty → push 0
Stack: [0]

i = 1, nums[1] = 5
5 > nums[0] (4) → pop 0, result[0] = 5
Stack is empty → push 1
Stack: [1]
Result: [5, -1, -1, -1]

i = 2, nums[2] = 2
2 < nums[1] (5) → push 2
Stack: [1, 2]
Result: [5, -1, -1, -1]

i = 3, nums[3] = 25
25 > nums[2] (2) → pop 2, result[2] = 25
25 > nums[1] (5) → pop 1, result[1] = 25
Stack is empty → push 3
Stack: [3]
Result: [5, 25, 25, -1]

Final Result: [5, 25, 25, -1]
```

## Problem II: Circular Array Approach

### Key Difference

In a circular array, when we reach the end, we continue searching from the beginning. This means each element can potentially find its next greater element anywhere in the array.

### Circular Array Visualization

```
Original Array: [1, 2, 1]

Circular View:
    [0] (1)
      ↗   ↘
[2] (1) ← [1] (2)

Step 1: Process index 0 (value 1)
1 → 2 ✓ (found next greater)

Step 2: Process index 1 (value 2)
2 → 1 → 1 → 1 → 2 → 1 ✗ (no greater element)

Step 3: Process index 2 (value 1)
1 → 1 → 2 ✓ (wrapped around to find 2)
```

### Algorithm Strategy

1. **Double Pass**: Process the array twice (2n iterations)
2. **Modulo Operator**: Use `i % n` for circular indexing
3. **First Pass Only**: Only push indices during the first pass

### Step-by-Step Algorithm

```
function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  
  // Process array twice for circular search
  for (let i = 0; i < n * 2; i++) {
    // Use modulo for circular indexing
    const currentNum = nums[i % n];
    
    // Find next greater elements
    while (stack.length > 0 && currentNum > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = currentNum;
    }
    
    // Only push indices in first pass
    if (i < n) {
      stack.push(i);
    }
  }
  
  return result;
}
```

### Visual Algorithm Execution

```
Input: [1, 2, 1]
Result: [-1, -1, -1]
Stack: []

n = 3, process 6 iterations (0 to 5)

i = 0, nums[0%3] = 1
Stack is empty → push 0
Stack: [0]

i = 1, nums[1%3] = 2
2 > nums[0] (1) → pop 0, result[0] = 2
Stack is empty → push 1
Stack: [1]
Result: [2, -1, -1]

i = 2, nums[2%3] = 1
1 < nums[1] (2) → push 2
Stack: [1, 2]
Result: [2, -1, -1]

i = 3, nums[3%3] = 1 (circular: same as nums[0])
1 < nums[2] (1) → no change
Stack: [1, 2]
Result: [2, -1, -1]

i = 4, nums[4%3] = 2 (circular: same as nums[1])
2 > nums[2] (1) → pop 2, result[2] = 2
2 < nums[1] (2) → no change
Stack: [1]
Result: [2, -1, 2]

i = 5, nums[5%3] = 1 (circular: same as nums[2])
1 < nums[1] (2) → no change
Stack: [1]
Result: [2, -1, 2]

Final Result: [2, -1, 2]
```

## Complexity Analysis

### Time Complexity: O(n)

Both problems run in linear time because:
- Each element is pushed to the stack at most once
- Each element is popped from the stack at most once
- Total operations: O(n) for Problem I, O(2n) = O(n) for Problem II

### Space Complexity: O(n)

- Stack stores at most n indices in the worst case
- Result array requires O(n) space
- Total auxiliary space: O(n)

## Key Insights and Patterns

### 1. Monotonic Stack Pattern
- **Decreasing Stack**: Store elements in decreasing order
- **Efficient Updates**: When a greater element is found, update all smaller elements
- **Single Pass**: Each element processed exactly once

### 2. Circular Array Handling
- **Double Iteration**: Process 2n elements to simulate circular behavior
- **Modulo Indexing**: Use `i % n` to wrap around the array
- **First Pass Logic**: Only push during first n iterations

### 3. Edge Cases to Consider
- Empty array: return []
- Single element: return [-1]
- All decreasing: return [-1, -1, -1, ...]
- All increasing: return [next, next, next, -1]
- Duplicate elements: handle correctly with strict comparison

## Common Mistakes and Solutions

### Mistake 1: Using Brute Force
```javascript
// ❌ O(n²) approach
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] > nums[i]) {
      result[i] = nums[j];
      break;
    }
  }
}
```

**Solution**: Use monotonic stack for O(n) time.

### Mistake 2: Incorrect Circular Handling
```javascript
// ❌ Not handling circular properly
for (let i = 0; i < nums.length; i++) {
  // This won't wrap around!
}
```

**Solution**: Process 2n iterations with modulo indexing.

### Mistake 3: Stack Management Errors
```javascript
// ❌ Pushing in both passes
if (i < n * 2) {
  stack.push(i);  // Wrong! Only push in first pass
}
```

**Solution**: Only push indices during first n iterations.

## Practice Problems

### Easy
1. Next Greater Element I (LeetCode 496)
2. Daily Temperatures (LeetCode 739)

### Medium
3. Next Greater Element II (LeetCode 503)
4. Largest Rectangle in Histogram (LeetCode 84)

### Hard
5. Trapping Rain Water (LeetCode 42)
6. Remove K Digits (LeetCode 402)

## Implementation Tips

### 1. Choose the Right Data Structure
```javascript
// Use Array as stack for O(1) push/pop
const stack = [];
stack.push(element);    // O(1)
stack.pop();            // O(1)
stack[stack.length - 1]; // O(1) peek
```

### 2. Handle Modulo Efficiently
```javascript
// Pre-calculate array length
const n = nums.length;
for (let i = 0; i < n * 2; i++) {
  const idx = i % n;  // Efficient modulo
  const current = nums[idx];
}
```

### 3. Initialize Result Array
```javascript
// Use fill() for initialization
const result = new Array(nums.length).fill(-1);
```

## Real-World Applications

1. **Stock Market Analysis**: Find next higher price for each day
2. **Temperature Monitoring**: Identify next warmer day
3. **Resource Allocation**: Find next available larger resource
4. **Data Compression**: Optimize encoding based on next greater values

## Summary

The Next Greater Element problems demonstrate the power of monotonic stacks:

- **Problem I**: Linear array with O(n) time using decreasing stack
- **Problem II**: Circular array with O(n) time using double pass and modulo
- **Key Pattern**: Process elements once, maintain decreasing order, update when greater found
- **Efficiency**: Both problems achieve optimal O(n) time and O(n) space complexity

Mastering these problems provides a foundation for solving many other stack-based algorithmic challenges.

---

# Daily Temperatures: Understanding the Problem with Visual Thinking

## 🌡️ The Core Problem

Imagine you're a weather enthusiast tracking daily temperatures. For each day, you want to know how many days you need to wait until you experience a warmer temperature. If no warmer day exists, the answer is 0.

**Input**: `[73, 74, 75, 71, 69, 72, 76, 73]`  
**Output**: `[1, 1, 4, 2, 1, 1, 0, 0]`

## 🎯 Visual Understanding

### The Temperature Timeline

```
Day 0   Day 1   Day 2   Day 3   Day 4   Day 5   Day 6   Day 7
 73°F    74°F    75°F    71°F    69°F    72°F    76°F    73°F
  ▲       ▲       ▲       ▲       ▲       ▲       ▲       ▲
  │       │       │       │       │       │       │       │
  └───────┘       │       │       │       │       │       │
  Wait 1 day      │       │       │       │       │       │
                  └───────┘       │       │       │       │
                  Wait 1 day      │       │       │       │
                          └───────┼───────┼───────┼───────┘
                          Wait 4 days for 76°F
```

### The "Waiting Game" Analogy

Think of each day as a person waiting in line for a "warmer temperature" ride:

```
Day 0 (73°F) → Day 1 (74°F) = 1 day wait ✅
Day 1 (74°F) → Day 2 (75°F) = 1 day wait ✅  
Day 2 (75°F) → Day 6 (76°F) = 4 days wait ✅
Day 3 (71°F) → Day 5 (72°F) = 2 days wait ✅
Day 4 (69°F) → Day 5 (72°F) = 1 day wait ✅
Day 5 (72°F) → Day 6 (76°F) = 1 day wait ✅
Day 6 (76°F) → No warmer day = 0 days wait ❌
Day 7 (73°F) → No warmer day = 0 days wait ❌
```

## 🏗️ The Monotonic Stack Approach

### Why a Stack?

A stack is perfect here because we need to:
1. **Remember** previous days that haven't found warmer weather yet
2. **Process** them in reverse order (LIFO - Last In, First Out)
3. **Maintain** decreasing temperature order for efficiency

### The "Temperature Tower" Visualization

```
Stack as a Temperature Tower (from bottom to top):
┌─────────┐
│ Day 2   │ ← 75°F (hottest waiting)
├─────────┤
│ Day 3   │ ← 71°F 
├─────────┤
│ Day 4   │ ← 69°F (coolest waiting)
└─────────┘
```

When a new temperature arrives (72°F):
- It's warmer than 69°F (Day 4) → Day 4 waits 1 day
- It's warmer than 71°F (Day 3) → Day 3 waits 2 days  
- It's cooler than 75°F (Day 2) → Stop, push Day 5

## 🔄 Step-by-Step Algorithm Dance

### Initialization Phase
```
Temperatures: [73, 74, 75, 71, 69, 72, 76, 73]
Stack: []
Result: [0, 0, 0, 0, 0, 0, 0, 0]
```

### Processing Day by Day

#### Day 0: Temperature 73°F
```
Stack is empty → Push Day 0
Stack: [0]
```

#### Day 1: Temperature 74°F  
```
74°F > 73°F? YES!
- Pop Day 0, calculate: 1 - 0 = 1 day
- Result[0] = 1
- Push Day 1
Stack: [1]
```

#### Day 2: Temperature 75°F
```
75°F > 74°F? YES!
- Pop Day 1, calculate: 2 - 1 = 1 day  
- Result[1] = 1
- Push Day 2
Stack: [2]
```

#### Day 3: Temperature 71°F
```
71°F > 75°F? NO!
- Just push Day 3
Stack: [2, 3]
```

#### Day 4: Temperature 69°F
```
69°F > 71°F? NO!
- Just push Day 4  
Stack: [2, 3, 4]
```

#### Day 5: Temperature 72°F
```
72°F > 69°F? YES!
- Pop Day 4, calculate: 5 - 4 = 1 day
- Result[4] = 1

72°F > 71°F? YES!  
- Pop Day 3, calculate: 5 - 3 = 2 days
- Result[3] = 2

72°F > 75°F? NO!
- Push Day 5
Stack: [2, 5]
```

#### Day 6: Temperature 76°F
```
76°F > 72°F? YES!
- Pop Day 5, calculate: 6 - 5 = 1 day
- Result[5] = 1

76°F > 75°F? YES!
- Pop Day 2, calculate: 6 - 2 = 4 days  
- Result[2] = 4

Stack empty → Push Day 6
Stack: [6]
```

#### Day 7: Temperature 73°F
```
73°F > 76°F? NO!
- Just push Day 7
Stack: [6, 7]
```

### Final Result
```
Result: [1, 1, 4, 2, 1, 1, 0, 0]
```

## 🎨 Visual Algorithm Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Daily Temperatures                      │
│                    Monotonic Stack                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🌡️ Input: [73, 74, 75, 71, 69, 72, 76, 73]              │
│                                                             │
│  📊 Process each day:                                      │
│                                                             │
│  Day 0: 73°F → Stack: [0]                                  │
│  Day 1: 74°F → Pop 0, wait=1 → Stack: [1]                  │
│  Day 2: 75°F → Pop 1, wait=1 → Stack: [2]                  │
│  Day 3: 71°F → Stack: [2, 3]                               │
│  Day 4: 69°F → Stack: [2, 3, 4]                            │
│  Day 5: 72°F → Pop 4, wait=1 → Pop 3, wait=2 → [2, 5]     │
│  Day 6: 76°F → Pop 5, wait=1 → Pop 2, wait=4 → [6]        │
│  Day 7: 73°F → Stack: [6, 7]                               │
│                                                             │
│  🎯 Output: [1, 1, 4, 2, 1, 1, 0, 0]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🧠 Key Insights

### 1. **Monotonic Property**
The stack always maintains decreasing temperatures from bottom to top. This ensures:
- When we find a warmer day, it's warmer than ALL days in the stack
- We can process multiple waiting days at once
- Each element is pushed and popped at most once

### 2. **Efficiency Guarantee**
```
Time Complexity: O(n)
- Each temperature pushed once: O(n)
- Each temperature popped once: O(n)  
- Total operations: 2n = O(n)

Space Complexity: O(n)
- Stack stores at most n indices
- Result array uses O(n) space
```

### 3. **Real-World Analogy**
Think of it like a **temperature-based queue system**:
- People (days) join the queue when they arrive
- When someone "taller" (warmer) arrives, all shorter people behind them get served
- The queue maintains decreasing height order

## 🔍 Common Mistakes to Avoid

### ❌ Brute Force Approach
```javascript
// O(n²) - Too slow!
for (let i = 0; i < temperatures.length; i++) {
  for (let j = i + 1; j < temperatures.length; j++) {
    if (temperatures[j] > temperatures[i]) {
      result[i] = j - i;
      break;
    }
  }
}
```

### ✅ Stack Approach  
```javascript
// O(n) - Optimal!
const stack = [];
const result = new Array(temperatures.length).fill(0);

for (let i = 0; i < temperatures.length; i++) {
  while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
    const idx = stack.pop();
    result[idx] = i - idx;
  }
  stack.push(i);
}
```

## 🎓 Learning Takeaways

1. **Stacks are perfect** for "next greater/smaller" problems
2. **Monotonic stacks** maintain a specific order for efficiency
3. **Think backwards** - process current element to resolve previous ones
4. **Visualize the data** - draw the stack and array to understand the flow
5. **Real-world analogies** help solidify understanding

## 🚀 Practice Problems

Apply this pattern to similar problems:
- Next Greater Element I & II
- Largest Rectangle in Histogram
- Trapping Rain Water
- Remove K Digits

The monotonic stack pattern is a powerful tool that appears frequently in coding interviews and competitive programming!
