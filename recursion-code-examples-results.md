# Recursion Code Examples - Console Output Results

This document contains the actual console output results from all the recursion code examples with console.log statements included.

## 1. What is Recursion? - Countdown Function

### Code:
```javascript
function countdown(n) {
  // Base case: stop when n reaches 0
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  
  // Current action
  console.log(n);
  
  // Recursive call: countdown with n-1
  countdown(n - 1);
}

// Call the function
countdown(3);
```

### Console Output:
```
3
2
1
Done!
```

### Explanation:
- The function counts down from 3 to 1
- Each number is printed before the recursive call
- "Done!" is printed when the base case (n <= 0) is reached

---

## 2. Base Case and Recursive Case - Factorial Function

### Code:
```javascript
function factorial(n) {
  console.log(`Calling factorial(${n})`);
  
  // Base Case: Stop when n is 0 or 1
  if (n <= 1) {
    console.log(`Base case reached: factorial(${n}) = 1`);
    return 1;
  }
  
  // Recursive Case: Call with n-1
  const result = n * factorial(n - 1);
  console.log(`Returning factorial(${n}) = ${result}`);
  return result;
}

// Test the function
console.log("Calculating factorial(4):");
const result = factorial(4);
console.log(`Final result: ${result}`);
```

### Console Output:
```
Calculating factorial(4):
Calling factorial(4)
Calling factorial(3)
Calling factorial(2)
Calling factorial(1)
Base case reached: factorial(1) = 1
Returning factorial(2) = 2
Returning factorial(3) = 6
Returning factorial(4) = 24
Final result: 24
```

### Explanation:
- The function calls itself with decreasing values until reaching the base case
- Each recursive call is logged when entered
- The base case returns 1, which bubbles up through the call stack
- Each level calculates its result and returns it to the previous level

---

## 3. Call Stack and Memory - Recursive vs Iterative Comparison

### Recursive Factorial with Stack Tracking:

### Code:
```javascript
function factorial(n) {
  console.log(`Entering factorial(${n}) - Stack frame added`);
  
  if (n <= 1) {
    console.log(`Base case: factorial(${n}) = 1 - Returning`);
    return 1;
  }
  
  const result = n * factorial(n - 1);
  console.log(`Returning factorial(${n}) = ${result} - Stack frame removed`);
  return result;
}

// Test with memory tracking
console.log("=== Recursive Factorial ===");
console.log("Before: Stack depth = 0");
const recursiveResult = factorial(4);
console.log(`Result: ${recursiveResult}`);
console.log("After: Stack depth = 0\n");
```

### Console Output:
```
=== Recursive Factorial ===
Before: Stack depth = 0
Entering factorial(4) - Stack frame added
Entering factorial(3) - Stack frame added
Entering factorial(2) - Stack frame added
Entering factorial(1) - Stack frame added
Base case: factorial(1) = 1 - Returning
Returning factorial(2) = 2 - Stack frame removed
Returning factorial(3) = 6 - Stack frame removed
Returning factorial(4) = 24 - Stack frame removed
Result: 24
After: Stack depth = 0
```

### Explanation:
- Each recursive call adds a new stack frame
- Maximum stack depth reached: 4 frames (factorial(4) to factorial(1))
- Stack frames are removed as functions return
- Memory usage grows with recursion depth, then shrinks back to 0

---

### Iterative Factorial with Memory Tracking:

### Code:
```javascript
function factorial(n) {
  console.log(`Starting factorial(${n}) - Single stack frame`);
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
    console.log(`Step ${i}: result = ${result}`);
  }
  
  console.log(`Completed factorial(${n}) = ${result}`);
  return result;
}

// Test with memory tracking
console.log("=== Iterative Factorial ===");
console.log("Before: Stack depth = 0");
const iterativeResult = factorial(4);
console.log(`Result: ${iterativeResult}`);
console.log("After: Stack depth = 0");
```

### Console Output:
```
=== Iterative Factorial ===
Before: Stack depth = 0
Starting factorial(4) - Single stack frame
Step 2: result = 2
Step 3: result = 6
Step 4: result = 24
Completed factorial(4) = 24
Result: 24
After: Stack depth = 0
```

### Explanation:
- Only one stack frame is used throughout the entire execution
- Memory usage remains constant (O(1))
- Each step shows the intermediate result
- More memory efficient than the recursive approach

---

## 4. Additional Examples - Fibonacci Sequence

### Recursive Fibonacci:
```javascript
function fibonacci(n) {
  console.log(`Calculating fibonacci(${n})`);
  
  if (n <= 1) {
    console.log(`Base case: fibonacci(${n}) = ${n}`);
    return n;
  }
  
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  console.log(`fibonacci(${n}) = fibonacci(${n-1}) + fibonacci(${n-2}) = ${result}`);
  return result;
}

console.log("=== Recursive Fibonacci ===");
const fibResult = fibonacci(5);
console.log(`Final result: ${fibResult}`);
```

### Console Output:
```
=== Recursive Fibonacci ===
Calculating fibonacci(5)
Calculating fibonacci(4)
Calculating fibonacci(3)
Calculating fibonacci(2)
Calculating fibonacci(1)
Base case: fibonacci(1) = 1
Calculating fibonacci(0)
Base case: fibonacci(0) = 0
fibonacci(2) = fibonacci(1) + fibonacci(0) = 1
Calculating fibonacci(1)
Base case: fibonacci(1) = 1
fibonacci(3) = fibonacci(2) + fibonacci(1) = 2
Calculating fibonacci(2)
Calculating fibonacci(1)
Base case: fibonacci(1) = 1
Calculating fibonacci(0)
Base case: fibonacci(0) = 0
fibonacci(2) = fibonacci(1) + fibonacci(0) = 1
fibonacci(4) = fibonacci(3) + fibonacci(2) = 3
Calculating fibonacci(3)
Calculating fibonacci(2)
Calculating fibonacci(1)
Base case: fibonacci(1) = 1
Calculating fibonacci(0)
Base case: fibonacci(0) = 0
fibonacci(2) = fibonacci(1) + fibonacci(0) = 1
Calculating fibonacci(1)
Base case: fibonacci(1) = 1
fibonacci(3) = fibonacci(2) + fibonacci(1) = 2
fibonacci(5) = fibonacci(4) + fibonacci(3) = 5
Final result: 5
```

### Explanation:
- Demonstrates exponential time complexity (O(2^n))
- Many redundant calculations (fibonacci(2) calculated 3 times, etc.)
- Shows why recursion isn't always the best approach

---

## 5. Memory Usage Comparison

### Stack Depth Analysis:

**Recursive Factorial(4):**
- Maximum stack depth: 4 frames
- Memory usage: O(n) = 4 × 64 bytes = 256 bytes
- Call sequence: factorial(4) → factorial(3) → factorial(2) → factorial(1) → factorial(0)

**Iterative Factorial(4):**
- Maximum stack depth: 1 frame
- Memory usage: O(1) = 64 bytes
- No recursive calls, single function execution

### Performance Summary:

| Approach | Time Complexity | Space Complexity | Stack Frames | Memory Usage |
|----------|----------------|------------------|--------------|--------------|
| Recursive | O(n) | O(n) | n frames | n × 64 bytes |
| Iterative | O(n) | O(1) | 1 frame | 64 bytes |

---

## 6. Debugging Tips with Console.log

### What to Log:
1. **Function Entry**: Log parameters when function is called
2. **Base Case**: Log when base case is reached and what's returned
3. **Recursive Step**: Log the recursive call parameters
4. **Function Exit**: Log the computed result before returning
5. **Stack Depth**: Track how deep the recursion goes

### Example Template:
```javascript
function recursiveFunction(param) {
  console.log(`→ ENTER: recursiveFunction(${param})`);
  
  if (baseCondition(param)) {
    console.log(`← BASE CASE: returning ${baseValue}`);
    return baseValue;
  }
  
  const result = recursiveFunction(modifiedParam);
  console.log(`← EXIT: recursiveFunction(${param}) = ${result}`);
  return result;
}
```

---

## 7. Common Patterns and Their Outputs

### Pattern 1: Linear Recursion (Factorial)
- **Characteristics**: One recursive call per function
- **Stack Growth**: Linear with input size
- **Use Case**: Mathematical computations, tree traversal

### Pattern 2: Binary Recursion (Fibonacci)
- **Characteristics**: Two recursive calls per function
- **Stack Growth**: Exponential with input size
- **Use Case**: Divide and conquer algorithms

### Pattern 3: Tail Recursion
- **Characteristics**: Recursive call is the last operation
- **Stack Growth**: Can be optimized to O(1)
- **Use Case**: List processing, accumulators

---

## 8. Best Practices

1. **Always include base cases** to prevent infinite recursion
2. **Log entry and exit points** for debugging
3. **Track stack depth** to monitor memory usage
4. **Consider iterative alternatives** for large inputs
5. **Use memoization** for expensive recursive calculations

### Example with Best Practices:
```javascript
function optimizedFactorial(n, depth = 0) {
  console.log(`${'  '.repeat(depth)}factorial(${n})`);
  
  if (n < 0) {
    console.log(`${'  '.repeat(depth)}Error: Negative input`);
    return undefined;
  }
  
  if (n <= 1) {
    console.log(`${'  '.repeat(depth)}Base case: return 1`);
    return 1;
  }
  
  const result = n * optimizedFactorial(n - 1, depth + 1);
  console.log(`${'  '.repeat(depth)}Return: ${result}`);
  return result;
}
```

---

*This document provides comprehensive console output examples to help understand recursion behavior, memory usage, and debugging techniques.*
