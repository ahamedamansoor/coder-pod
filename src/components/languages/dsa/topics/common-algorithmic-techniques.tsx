'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeftRight, Grid3x3, TrendingUp, Search, Zap, 
  GitBranch, RotateCcw, Hash, Sparkles, Code, Eye, 
  BookOpen, Target, CheckCircle2, Info, PlayCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function CommonAlgorithmicTechniques() {
  const [activeSnippet, setActiveSnippet] = useState<string>('two-pointer');

  const techniques = [
    {
      id: 'two-pointer',
      name: 'Two Pointer',
      icon: ArrowLeftRight,
      color: 'blue',
      tagline: 'Meet in the middle',
      complexity: { time: 'O(n)', space: 'O(1)' },
      description: 'Two pointers move through data from different positions to solve problems efficiently',
      keyIdea: 'Start from both ends and move towards each other based on conditions',
      useWhen: [
        'Array or string is sorted',
        'Need to find pairs or triplets',
        'Checking palindromes',
        'Removing duplicates in-place'
      ],
      visualExample: {
        title: 'Find pair that sums to target=7 in sorted array',
        steps: [
          { array: [1, 2, 3, 4, 5], left: 0, right: 4, sum: 6, action: 'Step 1: left=0, right=4 → 1+5=6 < 7' },
          { array: [1, 2, 3, 4, 5], left: 1, right: 4, sum: 7, action: 'Step 2: Sum too small, move left→ → 2+5=7 ✓' },
          { array: [1, 2, 3, 4, 5], left: 1, right: 4, sum: 7, action: 'Found! Indices [1,4] = [2,5]' }
        ]
      },
      code: `function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right]; // Found!
    } else if (sum < target) {
      left++;  // Need bigger sum
    } else {
      right--; // Need smaller sum
    }
  }
  return null;
}`,
      stepByStep: [
        { step: 1, text: 'Start with left=0, right=last index' },
        { step: 2, text: 'Calculate sum of arr[left] + arr[right]' },
        { step: 3, text: 'If sum matches target → return indices' },
        { step: 4, text: 'If sum < target → move left pointer right' },
        { step: 5, text: 'If sum > target → move right pointer left' },
        { step: 6, text: 'Repeat until pointers meet' }
      ],
      problems: ['Two Sum II', 'Container With Most Water', 'Valid Palindrome', '3Sum']
    },
    {
      id: 'sliding-window',
      name: 'Sliding Window',
      icon: Grid3x3,
      color: 'emerald',
      tagline: 'Efficient subarrays',
      complexity: { time: 'O(n)', space: 'O(1)' },
      description: 'A window slides through array, maintaining state to solve subarray problems',
      keyIdea: 'Expand window to include new elements, shrink to remove old elements',
      useWhen: [
        'Finding max/min in subarrays of size K',
        'Longest substring with K unique chars',
        'Maximum sum subarray',
        'All anagrams in a string'
      ],
      visualExample: {
        title: 'Max sum of K=3 consecutive elements',
        steps: [
          { array: [2, 1, 5, 1, 3, 2], window: [0, 1, 2], sum: 8, action: 'Step 1: Initial window [2+1+5] = 8 (max=8)' },
          { array: [2, 1, 5, 1, 3, 2], window: [1, 2, 3], sum: 7, action: 'Step 2: Remove 2, Add 1 → [1+5+1] = 7 (max=8)' },
          { array: [2, 1, 5, 1, 3, 2], window: [2, 3, 4], sum: 9, action: 'Step 3: Remove 1, Add 3 → [5+1+3] = 9 (max=9)' },
          { array: [2, 1, 5, 1, 3, 2], window: [3, 4, 5], sum: 6, action: 'Step 4: Remove 5, Add 2 → [1+3+2] = 6 (max=9)' },
          { array: [2, 1, 5, 1, 3, 2], window: [2, 3, 4], sum: 9, action: 'Result: Maximum sum = 9 at indices [2,3,4]' }
        ]
      },
      code: `function maxSumWindow(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  
  // Initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}`,
      stepByStep: [
        { step: 1, text: 'Calculate sum of first K elements' },
        { step: 2, text: 'This is your initial window' },
        { step: 3, text: 'Slide: Add next element, remove first' },
        { step: 4, text: 'Update max if current sum is greater' },
        { step: 5, text: 'Repeat until end of array' }
      ],
      problems: ['Max Sum Subarray K', 'Longest Substring K Distinct', 'Minimum Window Substring']
    },
    {
      id: 'prefix-sum',
      name: 'Prefix Sum',
      icon: TrendingUp,
      color: 'purple',
      tagline: 'Precompute for speed',
      complexity: { time: 'O(n) + O(1) per query', space: 'O(n)' },
      description: 'Precompute cumulative sums to answer range queries instantly',
      keyIdea: 'Build prefix array once, then answer any range sum in O(1)',
      useWhen: [
        'Multiple range sum queries',
        'Subarray sum equals K',
        'Equilibrium index problems',
        ' 2D matrix range queries'
      ],
      visualExample: {
        title: 'Calculate range sum [1,3] in array [3,1,4,2,5]',
        steps: [
          { original: [3, 1, 4, 2, 5], prefix: [0], action: 'Step 1: Start with prefix[0] = 0' },
          { original: [3, 1, 4, 2, 5], prefix: [0, 3], action: 'Step 2: prefix[1] = 0 + 3 = 3' },
          { original: [3, 1, 4, 2, 5], prefix: [0, 3, 4], action: 'Step 3: prefix[2] = 3 + 1 = 4' },
          { original: [3, 1, 4, 2, 5], prefix: [0, 3, 4, 8], action: 'Step 4: prefix[3] = 4 + 4 = 8' },
          { original: [3, 1, 4, 2, 5], prefix: [0, 3, 4, 8, 10], action: 'Step 5: prefix[4] = 8 + 2 = 10' },
          { original: [3, 1, 4, 2, 5], prefix: [0, 3, 4, 8, 10, 15], action: 'Step 6: prefix[5] = 10 + 5 = 15' },
          { formula: 'sum[1,3] = prefix[4] - prefix[1] = 10 - 3', result: '7', action: 'Query: Range [1,3] = arr[1]+arr[2]+arr[3] = 1+4+2 = 7 ✓' }
        ]
      },
      code: `class PrefixSum {
  constructor(arr) {
    this.prefix = [0];
    for (let num of arr) {
      this.prefix.push(
        this.prefix[this.prefix.length - 1] + num
      );
    }
  }
  
  // O(1) range sum query
  rangeSum(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

const ps = new PrefixSum([3, 1, 4, 2, 5]);
ps.rangeSum(1, 3); // 1+4+2 = 7`,
      stepByStep: [
        { step: 1, text: 'Create prefix array starting with [0]' },
        { step: 2, text: 'Each prefix[i] = sum of first i elements' },
        { step: 3, text: 'For range [L,R]: sum = prefix[R+1] - prefix[L]' },
        { step: 4, text: 'Answer queries in O(1) time!' }
      ],
      problems: ['Range Sum Query', 'Subarray Sum Equals K', 'Contiguous Array', 'Product Except Self']
    },
    {
      id: 'binary-search',
      name: 'Binary Search',
      icon: Search,
      color: 'indigo',
      tagline: 'Divide & eliminate',
      complexity: { time: 'O(log n)', space: 'O(1)' },
      description: 'Eliminate half of the search space in each step',
      keyIdea: 'If sorted, compare middle element to decide which half to search',
      useWhen: [
        'Searching in sorted array',
        'Finding first/last occurrence',
        'Finding peak element',
        'Search in rotated array'
      ],
      visualExample: {
        title: 'Search for target=11 in sorted array [1,3,5,7,9,11,13,15,17]',
        steps: [
          { array: [1, 3, 5, 7, 9, 11, 13, 15, 17], left: 0, right: 8, mid: 4, searchSpace: [0, 1, 2, 3, 4, 5, 6, 7, 8], action: 'Step 1: left=0, right=8, mid=4 → arr[4]=9' },
          { array: [1, 3, 5, 7, 9, 11, 13, 15, 17], left: 0, right: 8, mid: 4, comparison: 'less', action: 'Step 2: 9 < 11 → target in right half' },
          { array: [1, 3, 5, 7, 9, 11, 13, 15, 17], left: 5, right: 8, mid: 6, searchSpace: [5, 6, 7, 8], action: 'Step 3: Update left=5, mid=6 → arr[6]=13' },
          { array: [1, 3, 5, 7, 9, 11, 13, 15, 17], left: 5, right: 8, mid: 6, comparison: 'greater', action: 'Step 4: 13 > 11 → target in left half' },
          { array: [1, 3, 5, 7, 9, 11, 13, 15, 17], left: 5, right: 5, mid: 5, searchSpace: [5], action: 'Step 5: Update right=5, mid=5 → arr[5]=11' },
          { array: [1, 3, 5, 7, 9, 11, 13, 15, 17], left: 5, right: 5, mid: 5, found: true, action: 'Step 6: 11 == 11 ✓ Found at index 5!' }
        ]
      },
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found!
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  
  return -1; // Not found
}`,
      stepByStep: [
        { step: 1, text: 'Set left=0, right=last index' },
        { step: 2, text: 'Calculate mid = (left + right) / 2' },
        { step: 3, text: 'If arr[mid] == target → found!' },
        { step: 4, text: 'If arr[mid] < target → search right half' },
        { step: 5, text: 'If arr[mid] > target → search left half' },
        { step: 6, text: 'Repeat until found or left > right' }
      ],
      problems: ['Binary Search', 'Find First & Last Position', 'Search Insert Position', 'Find Peak Element']
    },
    {
      id: 'greedy',
      name: 'Greedy',
      icon: Zap,
      color: 'amber',
      tagline: 'Best choice now',
      complexity: { time: 'Varies', space: 'O(1)-O(n)' },
      description: 'Make the locally optimal choice at each step',
      keyIdea: 'Choose what looks best right now, hope it leads to global optimum',
      useWhen: [
        'Activity selection',
        'Coin change (specific coins)',
        'Jump game',
        'Minimum platforms needed'
      ],
      visualExample: {
        title: 'Coin change: Make 11¢ using coins [1,5,10]',
        steps: [
          { coins: [10, 5, 1], amount: 11, selected: [], action: 'Step 1: Start with amount=11, sorted coins [10,5,1]' },
          { coins: [10, 5, 1], amount: 11, selected: [10], remaining: 1, action: 'Step 2: Pick largest (10¢) → 11-10=1 remaining' },
          { coins: [10, 5, 1], amount: 1, selected: [10], action: 'Step 3: Can\'t use 10¢ or 5¢ (too big)' },
          { coins: [10, 5, 1], amount: 1, selected: [10, 1], remaining: 0, action: 'Step 4: Pick 1¢ → 1-1=0 remaining ✓' },
          { coins: [10, 5, 1], amount: 0, selected: [10, 1], action: 'Result: 2 coins needed [10¢, 1¢]' }
        ]
      },
      code: `function minCoins(coins, amount) {
  coins.sort((a, b) => b - a); // Largest first
  let count = 0;
  
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  
  return amount === 0 ? count : -1;
}

// Works for specific coin systems!
minCoins([1, 5, 10, 25], 41); // 5 coins`,
      stepByStep: [
        { step: 1, text: 'Sort choices by some criteria' },
        { step: 2, text: 'Pick the "best" available option' },
        { step: 3, text: 'Update state based on choice' },
        { step: 4, text: 'Repeat until goal reached' },
        { step: 5, text: '⚠️ Doesn\'t always give optimal!' }
      ],
      problems: ['Jump Game', 'Gas Station', 'Partition Labels', 'Non-overlapping Intervals']
    },
    {
      id: 'recursion',
      name: 'Recursion & Backtracking',
      icon: RotateCcw,
      color: 'rose',
      tagline: 'Explore all paths',
      complexity: { time: 'O(2ⁿ)-O(n!)', space: 'O(n) depth' },
      description: 'Try all possibilities, backtrack when path doesn\'t work',
      keyIdea: 'Choose → Explore → Unchoose (if wrong) → Try next',
      useWhen: [
        'Generate all permutations/combinations',
        'Solving puzzles (Sudoku, N-Queens)',
        'Finding all paths',
        'Subset sum problems'
      ],
      visualExample: {
        title: 'Generate all subsets of [1,2] using backtracking',
        steps: [
          { tree: '[]', depth: 0, path: [], action: 'Step 1: Start with empty subset []' },
          { tree: '[] → [1]', depth: 1, path: [1], action: 'Step 2: Choose 1 → add [1]' },
          { tree: '[] → [1] → [1,2]', depth: 2, path: [1, 2], action: 'Step 3: Choose 2 → add [1,2]' },
          { tree: '[1,2] ← backtrack', depth: 1, path: [1], action: 'Step 4: Backtrack (remove 2), back to [1]' },
          { tree: '[] → [2]', depth: 1, path: [2], action: 'Step 5: Backtrack more, try [2]' },
          { tree: 'Done', depth: 0, path: [], result: '[], [1], [1,2], [2]', action: 'Result: All 4 subsets found ✓' }
        ]
      },
      code: `function subsets(nums) {
  const result = [];
  
  function backtrack(start, current) {
    // Add current subset
    result.push([...current]);
    
    // Try adding each remaining number
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);      // Choose
      backtrack(i + 1, current);  // Explore
      current.pop();              // Unchoose
    }
  }
  
  backtrack(0, []);
  return result;
}`,
      stepByStep: [
        { step: 1, text: 'Start with empty/base state' },
        { step: 2, text: 'Choose: Add element to current path' },
        { step: 3, text: 'Explore: Recursively try next choices' },
        { step: 4, text: 'Unchoose: Remove element (backtrack)' },
        { step: 5, text: 'Repeat for all possibilities' }
      ],
      problems: ['Subsets', 'Permutations', 'Combination Sum', 'N-Queens', 'Sudoku Solver']
    },
    {
      id: 'hashing',
      name: 'Hashing',
      icon: Hash,
      color: 'cyan',
      tagline: 'O(1) lookups',
      complexity: { time: 'O(1) avg lookup', space: 'O(n)' },
      description: 'Use HashMap/HashSet for instant lookups and frequency tracking',
      keyIdea: 'Store data in hash table for O(1) access instead of O(n) search',
      useWhen: [
        'Finding duplicates',
        'Two sum problem',
        'Counting frequencies',
        'Checking if element exists'
      ],
      visualExample: {
        title: 'Two Sum: Find indices where nums sum to target=9',
        steps: [
          { array: [2, 7, 11, 15], index: 0, num: 2, need: 7, map: {}, action: 'Step 1: num=2, need=9-2=7, check map (empty)' },
          { array: [2, 7, 11, 15], index: 0, num: 2, map: { '2': 0 }, action: 'Step 2: 7 not found, store map[2]=0' },
          { array: [2, 7, 11, 15], index: 1, num: 7, need: 2, map: { '2': 0 }, action: 'Step 3: num=7, need=9-7=2, check map' },
          { array: [2, 7, 11, 15], index: 1, num: 7, found: true, result: [0, 1], action: 'Step 4: Found! map[2] exists → return [0,1] ✓' }
        ]
      },
      code: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    
    if (map.has(need)) {
      return [map.get(need), i]; // Found!
    }
    
    map.set(nums[i], i); // Store for future
  }
  
  return null;
}

twoSum([2, 7, 11, 15], 9); // [0, 1]`,
      stepByStep: [
        { step: 1, text: 'Create empty HashMap' },
        { step: 2, text: 'For each element, calculate what you need' },
        { step: 3, text: 'Check if needed value exists in map' },
        { step: 4, text: 'If yes → found! If no → store current' },
        { step: 5, text: 'Continue until answer found' }
      ],
      problems: ['Two Sum', 'Group Anagrams', 'First Unique Character', 'Subarray Sum K']
    },
    {
      id: 'divide-conquer',
      name: 'Divide & Conquer',
      icon: GitBranch,
      color: 'violet',
      tagline: 'Break & combine',
      complexity: { time: 'O(n log n)', space: 'O(log n)' },
      description: 'Break problem into smaller subproblems, solve, then combine',
      keyIdea: 'Divide → Solve subproblems → Combine results',
      useWhen: [
        'Sorting (Merge/Quick sort)',
        'Finding median',
        'Closest pair of points',
        'Multiplying large numbers'
      ],
      visualExample: {
        title: 'Merge Sort: Divide and Conquer on [3,1,4,2]',
        steps: [
          { level: 0, arrays: [[3, 1, 4, 2]], action: 'Step 1: Original array [3,1,4,2]' },
          { level: 1, arrays: [[3, 1], [4, 2]], action: 'Step 2: Divide into [3,1] and [4,2]' },
          { level: 2, arrays: [[3], [1], [4], [2]], action: 'Step 3: Divide until single elements' },
          { level: 3, arrays: [[1, 3], [2, 4]], action: 'Step 4: Merge [3]+[1]→[1,3], [4]+[2]→[2,4]' },
          { level: 4, arrays: [[1, 2, 3, 4]], action: 'Step 5: Merge [1,3]+[2,4]→[1,2,3,4] ✓' },
          { result: [1, 2, 3, 4], action: 'Result: Sorted array [1,2,3,4]' }
        ]
      },
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  // Divide
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  // Conquer (merge)
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i), right.slice(j));
}`,
      stepByStep: [
        { step: 1, text: 'Divide: Split problem in half' },
        { step: 2, text: 'Conquer: Solve each half recursively' },
        { step: 3, text: 'Base case: Return when size ≤ 1' },
        { step: 4, text: 'Combine: Merge results together' },
        { step: 5, text: 'Return combined result' }
      ],
      problems: ['Merge Sort', 'Quick Sort', 'Closest Pair', 'Count Inversions']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: { 
        gradient: 'from-blue-500 to-cyan-500',
        bgLight: 'bg-blue-50 dark:bg-blue-950/30',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-900 dark:text-blue-100',
        badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
      },
      emerald: {
        gradient: 'from-emerald-500 to-teal-500',
        bgLight: 'bg-emerald-50 dark:bg-emerald-950/30',
        border: 'border-emerald-200 dark:border-emerald-800',
        text: 'text-emerald-900 dark:text-emerald-100',
        badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
      },
      purple: {
        gradient: 'from-purple-500 to-pink-500',
        bgLight: 'bg-purple-50 dark:bg-purple-950/30',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-900 dark:text-purple-100',
        badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
      },
      indigo: {
        gradient: 'from-indigo-500 to-blue-500',
        bgLight: 'bg-indigo-50 dark:bg-indigo-950/30',
        border: 'border-indigo-200 dark:border-indigo-800',
        text: 'text-indigo-900 dark:text-indigo-100',
        badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
      },
      amber: {
        gradient: 'from-amber-500 to-orange-500',
        bgLight: 'bg-amber-50 dark:bg-amber-950/30',
        border: 'border-amber-200 dark:border-amber-800',
        text: 'text-amber-900 dark:text-amber-100',
        badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300'
      },
      rose: {
        gradient: 'from-rose-500 to-pink-500',
        bgLight: 'bg-rose-50 dark:bg-rose-950/30',
        border: 'border-rose-200 dark:border-rose-800',
        text: 'text-rose-900 dark:text-rose-100',
        badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
      },
      cyan: {
        gradient: 'from-cyan-500 to-blue-500',
        bgLight: 'bg-cyan-50 dark:bg-cyan-950/30',
        border: 'border-cyan-200 dark:border-cyan-800',
        text: 'text-cyan-900 dark:text-cyan-100',
        badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300'
      },
      violet: {
        gradient: 'from-violet-500 to-purple-500',
        bgLight: 'bg-violet-50 dark:bg-violet-950/30',
        border: 'border-violet-200 dark:border-violet-800',
        text: 'text-violet-900 dark:text-violet-100',
        badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300'
      }
    };
    return colors[color] || colors.blue;
  };

  const activeTech = techniques.find(t => t.id === activeSnippet) || techniques[0];
  const colors = getColorClasses(activeTech.color);

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="DSA · Problem Solving Patterns"
        title="Common Algorithmic Techniques"
        description="Master 8 essential patterns to solve 90% of coding problems"
        colorTheme="purple"
        badges={[
          { label: '8 Techniques', variant: 'default' },
          { label: 'Visual Examples', variant: 'outline' },
          { label: 'Code Snippets', variant: 'secondary' },
        ]}
      />

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techniques.map((tech) => {
          const TechIcon = tech.icon;
          const techColors = getColorClasses(tech.color);
          const isActive = activeSnippet === tech.id;
          
          return (
            <button
              key={tech.id}
              onClick={() => setActiveSnippet(tech.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-200 text-left
                ${isActive 
                  ? `${techColors.border} ${techColors.bgLight} shadow-lg scale-105` 
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }
              `}
            >
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center mb-3
                bg-gradient-to-br ${techColors.gradient}
              `}>
                <TechIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">{tech.tagline}</p>
              <Badge className={`mt-2 text-[10px] ${techColors.badge}`}>
                {tech.complexity.time}
              </Badge>
            </button>
          );
        })}
      </div>

      {/* Main Snippet Display */}
      <Card className={`border-2 ${colors.border} overflow-hidden`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <activeTech.icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{activeTech.name}</h2>
                <p className="text-white/90 text-sm">{activeTech.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-white/20 text-white border-white/30">
                ⏱️ {activeTech.complexity.time}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                💾 {activeTech.complexity.space}
              </Badge>
            </div>
          </div>
        </div>

        <CardContent className="p-0">
          <Tabs defaultValue="visual" className="w-full">
            <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
              <TabsList className="w-full justify-start bg-transparent h-auto p-0 rounded-none">
                <TabsTrigger 
                  value="visual" 
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Visual Example
                </TabsTrigger>
                <TabsTrigger 
                  value="code"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Code Snippet
                </TabsTrigger>
                <TabsTrigger 
                  value="steps"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Step-by-Step
                </TabsTrigger>
                <TabsTrigger 
                  value="info"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                >
                  <Info className="w-4 h-4 mr-2" />
                  When to Use
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Visual Example Tab */}
            <TabsContent value="visual" className="p-6">
              <div className={`${colors.bgLight} rounded-xl p-6 border ${colors.border}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${colors.gradient}`}>
                    <PlayCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${colors.text}`}>Visual Walkthrough</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{activeTech.visualExample.title}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeTech.visualExample.steps.map((step, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.gradient} text-white flex items-center justify-center font-bold text-sm`}>
                          {idx + 1}
                        </div>
                        <span className="font-mono text-sm text-slate-600 dark:text-slate-400">{step.action}</span>
                      </div>
                      
                      {step.array && Array.isArray(step.array) && (
                        <div className="space-y-3">
                          {/* Pointer Labels Above Array */}
                          {(step.left !== undefined || step.right !== undefined || step.mid !== undefined) && (
                            <div className="flex items-center gap-2 relative" style={{ height: '32px' }}>
                              {step.array.map((_, i) => (
                                <div key={i} className="w-12 flex flex-col items-center">
                                  {step.left === i && (
                                    <div className="flex flex-col items-center">
                                      <div className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded shadow-md">
                                        LEFT
                                      </div>
                                      <div className="text-blue-600 text-xl font-bold">↓</div>
                                    </div>
                                  )}
                                  {step.right === i && (
                                    <div className="flex flex-col items-center">
                                      <div className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded shadow-md">
                                        RIGHT
                                      </div>
                                      <div className="text-red-600 text-xl font-bold">↓</div>
                                    </div>
                                  )}
                                  {step.mid === i && (
                                    <div className="flex flex-col items-center">
                                      <div className="px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded shadow-md">
                                        MID
                                      </div>
                                      <div className="text-purple-600 text-xl font-bold">↓</div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Array Elements */}
                          <div className="flex items-center gap-2 flex-wrap">
                            {step.array.map((num, i) => {
                              const isLeft = step.left === i;
                              const isRight = step.right === i;
                              const isMid = step.mid === i;
                              const isInWindow = step.window && step.window.includes(i);
                              const isHighlight = isLeft || isRight || isMid || isInWindow;
                              
                              return (
                                <div
                                  key={i}
                                  className={`
                                    relative w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-sm
                                    transition-all duration-300
                                    ${isHighlight
                                      ? `bg-gradient-to-br ${colors.gradient} text-white shadow-xl scale-110 ring-2 ${
                                          isLeft ? 'ring-blue-400' : isRight ? 'ring-red-400' : isMid ? 'ring-purple-400' : 'ring-opacity-50'
                                        }`
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                    }
                                  `}
                                >
                                  <span className="relative z-10">{num}</span>
                                  <span className="absolute -bottom-5 text-xs text-slate-500 dark:text-slate-400 font-mono">[{i}]</span>
                                </div>
                              );
                            })}
                          </div>
                          
                          {/* Window Indicator for Sliding Window */}
                          {step.window && step.window.length > 0 && (
                            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                              <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold shadow-md`}>
                                Window Size: {step.window.length}
                              </div>
                              {step.sum !== undefined && (
                                <div className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-300 dark:border-emerald-700">
                                  Sum = {step.sum}
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Binary Search: Search space and comparison */}
                          {step.searchSpace && Array.isArray(step.searchSpace) && (
                            <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                              <div className="flex items-center gap-2 flex-wrap">
                                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Active Search Space:</div>
                                <div className="flex items-center gap-1">
                                  {step.searchSpace.map((idx) => (
                                    <div key={idx} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-mono rounded border border-indigo-300 dark:border-indigo-700">
                                      [{idx}]
                                    </div>
                                  ))}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  ({step.searchSpace.length} element{step.searchSpace.length !== 1 ? 's' : ''})
                                </div>
                              </div>
                              
                              {step.comparison && (
                                <div className={`p-3 rounded-lg border-2 ${
                                  step.comparison === 'less' 
                                    ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700'
                                    : step.comparison === 'greater'
                                    ? 'bg-orange-50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-700'
                                    : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700'
                                }`}>
                                  <div className={`text-sm font-semibold ${
                                    step.comparison === 'less'
                                      ? 'text-blue-700 dark:text-blue-300'
                                      : step.comparison === 'greater'
                                      ? 'text-orange-700 dark:text-orange-300'
                                      : 'text-emerald-700 dark:text-emerald-300'
                                  }`}>
                                    {step.comparison === 'less' && '⬆️ Mid < Target → Search RIGHT half'}
                                    {step.comparison === 'greater' && '⬇️ Mid > Target → Search LEFT half'}
                                    {step.comparison === 'equal' && '✓ Mid == Target → FOUND!'}
                                  </div>
                                </div>
                              )}
                              
                              {step.found && (
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border border-emerald-300 dark:border-emerald-700">
                                  <div className="text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-2">
                                    <span className="text-2xl">🎯</span>
                                    Target found at index {step.mid}!
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {step.original && Array.isArray(step.original) && (
                        <div className="space-y-2">
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Original:</div>
                          <div className="flex items-center gap-2 flex-wrap">
                            {step.original.map((num, i) => (
                              <div
                                key={i}
                                className="w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                              >
                                {num}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {step.prefix && Array.isArray(step.prefix) && (
                        <div className="space-y-2 mt-2">
                          <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold">Prefix Sum:</div>
                          <div className="flex items-center gap-2 flex-wrap">
                            {step.prefix.map((num, i) => (
                              <div
                                key={i}
                                className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-sm bg-gradient-to-br ${colors.gradient} text-white`}
                              >
                                {num}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {step.formula && (
                        <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                          <div className="text-sm font-mono text-purple-900 dark:text-purple-100">
                            {step.formula}
                          </div>
                          {step.result && (
                            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-1">
                              = {step.result}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {step.sum !== undefined && (
                        <div className="mt-2 text-sm">
                          <Badge className={colors.badge}>Sum: {step.sum}</Badge>
                        </div>
                      )}
                      
                      {/* Greedy: Coin visualization */}
                      {step.coins && Array.isArray(step.coins) && (
                        <div className="space-y-3 mt-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Available Coins:</div>
                            {step.coins.map((coin, i) => (
                              <div key={i} className="px-3 py-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-bold border border-amber-300 dark:border-amber-700">
                                {coin}¢
                              </div>
                            ))}
                          </div>
                          
                          {step.selected && step.selected.length > 0 && (
                            <div className="flex items-center gap-2 flex-wrap">
                              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Selected:</div>
                              {step.selected.map((coin, i) => (
                                <div key={i} className={`px-3 py-2 rounded-lg bg-gradient-to-br ${colors.gradient} text-white text-sm font-bold shadow-md`}>
                                  {coin}¢
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {step.remaining !== undefined && (
                            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Remaining: <span className={`${colors.text} font-bold text-lg`}>{step.remaining}¢</span>
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Recursion & Backtracking: Tree visualization */}
                      {step.tree && (
                        <div className="space-y-3 mt-3">
                          <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-200 dark:border-rose-800">
                            <div className="text-xs text-rose-600 dark:text-rose-400 font-semibold mb-2">Recursion Tree:</div>
                            <div className="font-mono text-sm text-rose-900 dark:text-rose-100">{step.tree}</div>
                          </div>
                          
                          {step.path && Array.isArray(step.path) && step.path.length > 0 && (
                            <div className="flex items-center gap-2">
                              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Current Path:</div>
                              <div className="flex items-center gap-1">
                                {step.path.map((item, i) => (
                                  <div key={i} className={`px-3 py-1.5 rounded-lg bg-gradient-to-br ${colors.gradient} text-white text-sm font-bold`}>
                                    {item}
                                  </div>
                                ))}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">
                                (depth: {step.depth})
                              </div>
                            </div>
                          )}
                          
                          {step.result && (
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border border-emerald-300 dark:border-emerald-700">
                              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">All Results:</div>
                              <div className="font-mono text-sm text-emerald-900 dark:text-emerald-100">{step.result}</div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Hashing: HashMap visualization */}
                      {step.map !== undefined && (
                        <div className="space-y-3 mt-3">
                          <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                            <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-2">HashMap:</div>
                            {Object.keys(step.map).length === 0 ? (
                              <div className="text-sm text-cyan-700 dark:text-cyan-300 font-mono">{ } (empty)</div>
                            ) : (
                              <div className="flex flex-wrap gap-2">
                                {Object.entries(step.map).map(([key, value], i) => (
                                  <div key={i} className="px-3 py-2 bg-cyan-600 text-white rounded-lg text-sm font-mono shadow-md">
                                    {key} → {value}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {step.num !== undefined && (
                            <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                              <div className="text-sm text-slate-600 dark:text-slate-400">Current:</div>
                              <div className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-mono font-bold">{step.num}</div>
                              {step.need !== undefined && (
                                <>
                                  <div className="text-sm text-slate-600 dark:text-slate-400">Need:</div>
                                  <div className="px-3 py-1.5 bg-purple-600 text-white rounded-lg font-mono font-bold">{step.need}</div>
                                </>
                              )}
                            </div>
                          )}
                          
                          {step.found && (
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border border-emerald-300 dark:border-emerald-700">
                              <div className="text-emerald-700 dark:text-emerald-300 font-semibold">
                                ✓ Found! Result: {JSON.stringify(step.result)}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Divide & Conquer: Level visualization */}
                      {step.level !== undefined && step.arrays && (
                        <div className="space-y-3 mt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="px-2 py-1 bg-violet-600 text-white rounded text-xs font-bold">
                              Level {step.level}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {step.level === 0 ? 'Original' : step.level <= 2 ? 'Divide Phase' : 'Conquer Phase'}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-3 items-center justify-center">
                            {step.arrays.map((arr, i) => (
                              <div key={i} className="flex gap-1">
                                {arr.map((num, j) => (
                                  <div
                                    key={j}
                                    className={`w-10 h-10 rounded flex items-center justify-center font-mono font-bold text-sm ${
                                      arr.length === 1
                                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                        : step.level <= 2
                                        ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-300 dark:border-violet-700'
                                        : `bg-gradient-to-br ${colors.gradient} text-white shadow-md`
                                    }`}
                                  >
                                    {num}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className={`mt-6 p-4 rounded-lg border-l-4 ${colors.border} ${colors.bgLight}`}>
                  <p className={`font-semibold ${colors.text} flex items-center gap-2`}>
                    <Target className="w-4 h-4" />
                    Key Idea: {activeTech.keyIdea}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Code Snippet Tab */}
            <TabsContent value="code" className="p-0">
              <div className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-200 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">solution.js</span>
                  </div>
                  <Badge className="bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs border-slate-400 dark:border-slate-700">
                    JavaScript
                  </Badge>
                </div>

                {/* Code */}
                <pre className="p-6 overflow-x-auto text-sm leading-relaxed bg-white dark:bg-slate-950">
                  <code className="font-mono text-slate-800 dark:text-slate-200">{activeTech.code}</code>
                </pre>

                {/* Complexity Footer */}
                <div className="px-4 py-3 bg-slate-200 dark:bg-slate-900 border-t border-slate-300 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex gap-4 text-xs">
                    <span className="text-slate-600 dark:text-slate-400">
                      Time: <span className="text-green-600 dark:text-green-400 font-semibold">{activeTech.complexity.time}</span>
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      Space: <span className="text-blue-600 dark:text-blue-400 font-semibold">{activeTech.complexity.space}</span>
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs bg-slate-300 dark:bg-slate-800 border-slate-400 dark:border-slate-700 hover:bg-slate-400 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    <Code className="w-3 h-3 mr-1" />
                    Copy Code
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Step-by-Step Tab */}
            <TabsContent value="steps" className="p-6">
              <div className="space-y-3">
                {activeTech.stepByStep.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  >
                    <div className={`
                      w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm text-white
                      bg-gradient-to-br ${colors.gradient}
                    `}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* When to Use Tab */}
            <TabsContent value="info" className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Use When */}
                <div className={`${colors.bgLight} rounded-xl p-6 border ${colors.border}`}>
                  <h3 className={`font-bold text-lg mb-4 ${colors.text} flex items-center gap-2`}>
                    <CheckCircle2 className="w-5 h-5" />
                    Use This When:
                  </h3>
                  <ul className="space-y-2">
                    {activeTech.useWhen.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 ${colors.text}`}>✓</span>
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practice Problems */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    Practice Problems:
                  </h3>
                  <div className="space-y-2">
                    {activeTech.problems.map((problem, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Badge variant="outline" className="text-xs">{idx + 1}</Badge>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Pattern Recognition Guide
          </CardTitle>
          <CardDescription>How to identify which technique to use</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🎯 Array/String is Sorted?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                → Try <strong>Two Pointer</strong> or <strong>Binary Search</strong>
              </p>
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                🎯 Need Subarray/Substring?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                → Try <strong>Sliding Window</strong> or <strong>Prefix Sum</strong>
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                🎯 Multiple Range Queries?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                → Use <strong>Prefix Sum</strong> for O(1) queries
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                🎯 Need to Check Existence?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                → Use <strong>Hashing</strong> for O(1) lookups
              </p>
            </div>

            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-200 dark:border-rose-800">
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">
                🎯 Generate All Possibilities?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                → Use <strong>Backtracking</strong>
              </p>
            </div>

            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">
                🎯 Can Split Problem in Half?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                → Try <strong>Divide & Conquer</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
