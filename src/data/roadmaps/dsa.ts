import type { Roadmap } from './types';

export const dsa: Roadmap = {
  slug: 'dsa',
  name: 'Data Structures & Algorithms',
  description: 'Master data structures and algorithms from arrays and linked lists to advanced topics like graphs and dynamic programming',
  topics: [
    // Learning Plan
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap covering arrays through advanced topics like tries, segment trees, and union-find.', category: 'Getting Started' },

    // Complexity Analysis - Time Complexity
    { slug: 'complexity-big-o-notation', title: 'Big O Notation', explanation: 'Understanding time and space complexity fundamentals, asymptotic analysis, and Big O, Big Omega, Big Theta.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-constant-time', title: 'O(1) Constant Time', explanation: 'Operations that execute in constant time regardless of input size, hash table operations, array access.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-logarithmic-time', title: 'O(log n) Logarithmic Time', explanation: 'Binary search, divide and conquer algorithms, tree operations, and logarithmic complexity patterns.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-linear-time', title: 'O(n) Linear Time', explanation: 'Single pass algorithms, linear search, array traversal, and linear complexity patterns.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-linearithmic-time', title: 'O(n log n) Linearithmic Time', explanation: 'Efficient sorting algorithms, merge sort, quicksort average case, and n log n patterns.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-quadratic-time', title: 'O(n²) Quadratic Time', explanation: 'Nested loops, bubble sort, selection sort, insertion sort, and quadratic complexity patterns.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-exponential-time', title: 'O(2^n) Exponential Time', explanation: 'Recursive algorithms, subset generation, power set problems, and exponential complexity.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-factorial-time', title: 'O(n!) Factorial Time', explanation: 'Permutation generation, traveling salesman brute force, and factorial complexity patterns.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-square-root-time', title: 'O(√n) Square Root Time', explanation: 'Prime factorization, divisor problems, and square root complexity patterns.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-amortized-analysis', title: 'Amortized Analysis', explanation: 'Understanding amortized time complexity, dynamic arrays, and average case analysis over sequences.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-best-average-worst', title: 'Best, Average & Worst Case', explanation: 'Analyzing algorithms under different input conditions and understanding case complexity.', category: 'Complexity Analysis · Time Complexity' },
    { slug: 'complexity-master-theorem', title: 'Master Theorem', explanation: 'Solving recurrence relations, divide and conquer analysis, and Master Theorem applications.', category: 'Complexity Analysis · Time Complexity' },

    // Complexity Analysis - Space Complexity
    { slug: 'complexity-auxiliary-space', title: 'Auxiliary vs Total Space', explanation: 'Understanding space complexity, auxiliary space, and memory usage analysis.', category: 'Complexity Analysis · Space Complexity' },
    { slug: 'complexity-in-place-algorithms', title: 'In-Place Algorithms', explanation: 'Algorithms that modify input in place, space optimization, and in-place sorting.', category: 'Complexity Analysis · Space Complexity' },
    { slug: 'complexity-space-time-tradeoffs', title: 'Space-Time Tradeoffs', explanation: 'Balancing time and space complexity, algorithmic tradeoffs, and optimization strategies.', category: 'Complexity Analysis · Space Complexity' },
    { slug: 'complexity-iterative-recursive-space', title: 'Iterative vs Recursive Space', explanation: 'Space complexity comparison between iterative and recursive implementations.', category: 'Complexity Analysis · Space Complexity' },

    // Complexity Analysis - Algorithm Analysis
    { slug: 'complexity-comparing-sorting', title: 'Comparing Sorting Algorithms', explanation: 'Time and space complexity analysis of various sorting algorithms and their tradeoffs.', category: 'Complexity Analysis · Algorithm Analysis' },
    { slug: 'complexity-analyzing-nested-loops', title: 'Analyzing Nested Loops', explanation: 'Understanding time complexity of nested loops and loop analysis techniques.', category: 'Complexity Analysis · Algorithm Analysis' },
    { slug: 'complexity-logarithmic-understanding', title: 'Understanding Logarithmic Complexity', explanation: 'Deep dive into logarithmic time complexity and when it occurs in algorithms.', category: 'Complexity Analysis · Algorithm Analysis' },
    { slug: 'complexity-identifying-data-structures', title: 'Identifying Optimal Data Structures', explanation: 'Choosing the right data structure based on problem requirements and complexity analysis.', category: 'Complexity Analysis · Algorithm Analysis' },
    { slug: 'complexity-common-techniques', title: 'Common Algorithmic Techniques', explanation: 'Two pointers, sliding window, divide and conquer, and other fundamental algorithmic patterns.', category: 'Complexity Analysis · Algorithm Analysis' },

    // Arrays - Introduction
    { slug: 'arrays-what-is-an-array', title: 'What is an Array?', explanation: 'Introduction to arrays, memory layout, indexing, and basic array properties.', category: 'Arrays · Introduction' },
    { slug: 'arrays-types-of-arrays', title: 'Types of Arrays', explanation: 'One-dimensional, multi-dimensional arrays, dynamic arrays, and array variants.', category: 'Arrays · Introduction' },

    // Arrays - Basic Operations
    { slug: 'arrays-find-largest-smallest', title: 'Find Largest & Smallest', explanation: 'Finding maximum and minimum elements in arrays using linear scan and optimization techniques.', category: 'Arrays · Basic Operations' },
    { slug: 'arrays-reverse-array', title: 'Reverse an Array', explanation: 'Reversing arrays in-place and using extra space, two-pointer technique.', category: 'Arrays · Basic Operations' },
    { slug: 'arrays-find-second-largest', title: 'Find Second Largest', explanation: 'Finding the second largest element in single pass and optimal approaches.', category: 'Arrays · Basic Operations' },
    { slug: 'arrays-rotate-array-by-k', title: 'Rotate Array by K', explanation: 'Rotating array left or right by K positions using reversal algorithm and other methods.', category: 'Arrays · Basic Operations' },
    { slug: 'arrays-remove-duplicates', title: 'Remove Duplicates from Sorted Array', explanation: 'Removing duplicates from sorted arrays in-place using two-pointer technique.', category: 'Arrays · Basic Operations' },
    { slug: 'arrays-move-zeros-to-end', title: 'Move Zeros to End', explanation: 'Moving all zeros to the end of array while maintaining order of non-zero elements.', category: 'Arrays · Basic Operations' },

    // Arrays - Two Pointer Technique
    { slug: 'arrays-two-sum-sorted', title: 'Two Sum (Sorted Array)', explanation: 'Finding two numbers that sum to target in sorted array using two-pointer technique.', category: 'Arrays · Two Pointer Technique' },
    { slug: 'arrays-valid-palindrome', title: 'Valid Palindrome', explanation: 'Checking if array or string is palindrome using two-pointer approach.', category: 'Arrays · Two Pointer Technique' },
    { slug: 'arrays-container-with-most-water', title: 'Container With Most Water', explanation: 'Finding maximum area using two-pointer technique for container problem.', category: 'Arrays · Two Pointer Technique' },
    { slug: 'arrays-sort-zeros-ones', title: 'Sort Array of 0s and 1s', explanation: 'Dutch National Flag problem, sorting binary array in single pass.', category: 'Arrays · Two Pointer Technique' },

    // Arrays - Sliding Window
    { slug: 'arrays-maximum-sum-subarray-k', title: 'Maximum Sum Subarray of Size K', explanation: 'Finding maximum sum of any subarray of size K using sliding window technique.', category: 'Arrays · Sliding Window' },
    { slug: 'arrays-first-negative-window', title: 'First Negative in Every Window', explanation: 'Finding first negative number in every window of size K using sliding window.', category: 'Arrays · Sliding Window' },
    { slug: 'arrays-longest-substring-without-repeating', title: 'Longest Substring Without Repeating', explanation: 'Finding longest substring without repeating characters using sliding window.', category: 'Arrays · Sliding Window' },
    { slug: 'arrays-minimum-window-substring', title: 'Minimum Window Substring', explanation: 'Finding minimum window substring containing all characters using sliding window.', category: 'Arrays · Sliding Window' },

    // Arrays - Prefix Sum & Subarrays
    { slug: 'arrays-subarray-sum-equals-k', title: 'Subarray Sum Equals K', explanation: 'Finding subarrays with sum equal to K using prefix sum and hashmap.', category: 'Arrays · Prefix Sum & Subarrays' },
    { slug: 'arrays-find-pivot-index', title: 'Find Pivot Index', explanation: 'Finding equilibrium level where left sum equals right sum using prefix sum.', category: 'Arrays · Prefix Sum & Subarrays' },
    { slug: 'arrays-product-except-self', title: 'Product of Array Except Self', explanation: 'Computing product of all elements except self without division using prefix/suffix products.', category: 'Arrays · Prefix Sum & Subarrays' },
    { slug: 'arrays-maximum-subarray-kadane', title: 'Maximum Subarray (Kadane\'s Algorithm)', explanation: 'Finding maximum sum subarray using Kadane\'s algorithm and variations.', category: 'Arrays · Prefix Sum & Subarrays' },

    // Arrays - Mixed Array Problems
    { slug: 'arrays-majority-element', title: 'Majority Element', explanation: 'Finding element appearing more than n/2 times using Moore\'s voting algorithm.', category: 'Arrays · Mixed Array Problems' },
    { slug: 'arrays-merge-sorted-arrays', title: 'Merge Sorted Arrays', explanation: 'Merging two sorted arrays into single sorted array efficiently.', category: 'Arrays · Mixed Array Problems' },
    { slug: 'arrays-find-all-duplicates', title: 'Find All Duplicates', explanation: 'Finding all duplicate elements in array using cyclic sort and other techniques.', category: 'Arrays · Mixed Array Problems' },
    { slug: 'arrays-search-rotated-sorted', title: 'Search in Rotated Sorted Array', explanation: 'Binary search in rotated sorted array and finding pivot element.', category: 'Arrays · Mixed Array Problems' },
    { slug: 'arrays-best-time-buy-sell-stock', title: 'Best Time to Buy and Sell Stock', explanation: 'Finding maximum profit from stock prices using single pass and DP approaches.', category: 'Arrays · Mixed Array Problems' },
    { slug: 'arrays-daily-temperatures', title: 'Daily Temperatures', explanation: 'Finding days until warmer temperature using stack and optimized approaches.', category: 'Arrays · Mixed Array Problems' },

    // Arrays - Complete Array Problems (Interview)
    { slug: 'arrays-find-missing-number', title: 'Find Missing Number', explanation: 'Finding missing number from 1 to N using XOR or sum approach.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-sort-colors', title: 'Sort Colors', explanation: 'Dutch National Flag problem - sorting 0s, 1s, 2s in single pass.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-maximum-product-subarray', title: 'Maximum Product Subarray', explanation: 'Finding maximum product subarray with tracking min/max values.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-find-duplicate-number', title: 'Find Duplicate Number', explanation: 'Finding duplicate number in array using Floyd\'s cycle detection.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-chocolate-distribution', title: 'Chocolate Distribution', explanation: 'Distributing chocolate packets with minimum difference.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-minimum-swaps-to-sort', title: 'Minimum Swaps to Sort', explanation: 'Finding minimum swaps required to sort array.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-largest-number', title: 'Largest Number', explanation: 'Arranging numbers to form largest possible number.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-rearrange-array-alternately', title: 'Rearrange Array Alternately', explanation: 'Rearranging array in max-min order alternately.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-union-two-arrays', title: 'Union of Two Arrays', explanation: 'Finding union of two arrays with distinct elements.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-maximum-circular-subarray', title: 'Maximum Circular Subarray', explanation: 'Finding maximum sum subarray in circular array.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-array-partition', title: 'Array Partition', explanation: 'Partitioning array into pairs to maximize sum of minimums.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-4sum-problem', title: '4Sum Problem', explanation: 'Finding quadruplets that sum to target using two pointers.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-spiral-matrix', title: 'Spiral Matrix', explanation: 'Traversing matrix in spiral order.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-set-matrix-zeroes', title: 'Set Matrix Zeroes', explanation: 'Setting entire rows and columns to zero if element is zero.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-next-permutation', title: 'Next Permutation', explanation: 'Finding next lexicographically greater permutation.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-find-first-last-position', title: 'Find First and Last Position of Element in Sorted Array', explanation: 'Finding first and last occurrence using binary search.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-search-2d-matrix', title: 'Search in 2D Matrix', explanation: 'Searching in sorted 2D matrix efficiently.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-merge-intervals', title: 'Merge Intervals', explanation: 'Merging overlapping intervals using greedy approach.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-non-overlapping-intervals', title: 'Non-overlapping Intervals', explanation: 'Removing minimum intervals to eliminate overlaps.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-insert-interval', title: 'Insert Interval', explanation: 'Inserting new interval and merging with existing.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-longest-subarray-sum-k', title: 'Longest Subarray with Sum K', explanation: 'Finding longest subarray with sum equal to K.', category: 'Arrays · Complete Array Problems (Interview)' },
    { slug: 'arrays-count-subarrays-xor-k', title: 'Count Subarrays with XOR K', explanation: 'Counting subarrays with XOR equal to K.', category: 'Arrays · Complete Array Problems (Interview)' },

    // Strings - Basic Operations
    { slug: 'strings-reverse-string', title: 'Reverse a String', explanation: 'Reversing strings in-place and using extra space, encoding considerations.', category: 'Strings · Basic Operations' },
    { slug: 'strings-count-vowels-consonants', title: 'Count Vowels and Consonants', explanation: 'Counting vowels and consonants in strings, handling edge cases and Unicode.', category: 'Strings · Basic Operations' },
    { slug: 'strings-remove-spaces', title: 'Remove Spaces from String', explanation: 'Removing extra spaces, trimming, and normalizing whitespace in strings.', category: 'Strings · Basic Operations' },

    // Strings - String Manipulation
    { slug: 'strings-valid-anagram', title: 'Valid Anagram', explanation: 'Checking if two strings are anagrams using sorting and hashmap approaches.', category: 'Strings · String Manipulation' },
    { slug: 'strings-first-unique-character', title: 'First Unique Character', explanation: 'Finding first non-repeating character using frequency counting and optimization.', category: 'Strings · String Manipulation' },
    { slug: 'strings-longest-common-prefix', title: 'Longest Common Prefix', explanation: 'Finding longest common prefix among array of strings using vertical and horizontal scanning.', category: 'Strings · String Manipulation' },
    { slug: 'strings-isomorphic-strings', title: 'Isomorphic Strings', explanation: 'Checking if two strings have same character pattern using hashmap mapping.', category: 'Strings · String Manipulation' },
    { slug: 'strings-group-anagrams', title: 'Group Anagrams', explanation: 'Grouping anagrams together using sorted string and frequency signature approaches.', category: 'Strings · String Manipulation' },

    // Strings - Pattern Matching
    { slug: 'strings-implement-strstr', title: 'Implement strStr()', explanation: 'Implementing substring search using naive and KMP algorithm approaches.', category: 'Strings · Pattern Matching' },
    { slug: 'strings-string-compression', title: 'String Compression', explanation: 'Compressing strings using run-length encoding and decompression.', category: 'Strings · Pattern Matching' },
    { slug: 'strings-valid-parentheses', title: 'Valid Parentheses', explanation: 'Validating balanced parentheses using stack and multiple bracket types.', category: 'Strings · Pattern Matching' },
    { slug: 'strings-longest-palindromic-substring', title: 'Longest Palindromic Substring', explanation: 'Finding longest palindrome substring using center expansion and Manacher\'s algorithm.', category: 'Strings · Pattern Matching' },

    // Strings - Complete String Problems (Interview)
    { slug: 'strings-valid-palindrome', title: 'Valid Palindrome', explanation: 'Checking if string is palindrome ignoring non-alphanumeric characters.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-string-to-integer-atoi', title: 'String to Integer (atoi)', explanation: 'Converting string to integer with edge cases and validation.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-longest-substring-without-repeating-characters', title: 'Longest Substring Without Repeating Characters', explanation: 'Finding longest substring without repeats using sliding window.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-palindromic-substrings', title: 'Palindromic Substrings', explanation: 'Counting all palindromic substrings in given string.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-count-say', title: 'Count and Say', explanation: 'Generating count and say sequence iteratively.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-roman-to-integer', title: 'Roman to Integer', explanation: 'Converting Roman numerals to integers with validation.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-integer-to-roman', title: 'Integer to Roman', explanation: 'Converting integers to Roman numerals using greedy approach.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-minimum-window-substring', title: 'Minimum Window Substring', explanation: 'Finding minimum window substring containing all characters.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-check-strings-rotations', title: 'Check if Strings are Rotations', explanation: 'Checking if one string is rotation of another.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-edit-distance', title: 'Edit Distance', explanation: 'Minimum operations to convert one string to another.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-wildcard-matching', title: 'Wildcard Matching', explanation: 'Pattern matching with wildcard characters using DP.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-z-algorithm', title: 'Z Algorithm', explanation: 'Linear time pattern matching using Z-array.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-kmp-pattern-matching', title: 'KMP Pattern Matching', explanation: 'Knuth-Morris-Pratt pattern matching algorithm.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-remove-adjacent-duplicates', title: 'Remove Adjacent Duplicates', explanation: 'Removing adjacent duplicate characters from string.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-decode-string', title: 'Decode String', explanation: 'Decoding encoded string with nested patterns.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-basic-calculator-ii', title: 'Basic Calculator II', explanation: 'Evaluating mathematical expressions with +,-,*,/.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-find-replace-pattern', title: 'Find and Replace Pattern', explanation: 'Finding words that match a given pattern.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-word-break', title: 'Word Break', explanation: 'Checking if string can be segmented using dictionary.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-word-break-ii', title: 'Word Break II', explanation: 'Finding all possible segmentations of string.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-reorganize-string', title: 'Reorganize String', explanation: 'Rearranging string to avoid adjacent duplicates.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-repeated-substring-pattern', title: 'Repeated Substring Pattern', explanation: 'Checking if string is constructed by repeating substring.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-multiply-strings', title: 'Multiply Strings', explanation: 'Multiplying two numbers represented as strings.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-add-strings', title: 'Add Strings', explanation: 'Adding two numbers represented as strings.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-compare-version-numbers', title: 'Compare Version Numbers', explanation: 'Comparing version numbers with dot notation.', category: 'Strings · Complete String Problems (Interview)' },
    { slug: 'strings-simplify-path', title: 'Simplify Path', explanation: 'Simplifying Unix file system path with . and ..', category: 'Strings · Complete String Problems (Interview)' },

    // Linked Lists - Introduction
    { slug: 'linked-lists-what-is-a-linked-list', title: 'What is a Linked List?', explanation: 'Introduction to linked lists, node structure, and comparison with arrays.', category: 'Linked Lists · Introduction' },
    { slug: 'linked-lists-types-of-linked-lists', title: 'Types of Linked Lists', explanation: 'Singly, doubly, circular linked lists and their characteristics.', category: 'Linked Lists · Introduction' },

    // Linked Lists - Basic Operations
    { slug: 'linked-lists-insert-node', title: 'Insert Node', explanation: 'Inserting nodes at beginning, end, and middle of linked list with edge cases.', category: 'Linked Lists · Basic Operations' },
    { slug: 'linked-lists-delete-node', title: 'Delete a Node', explanation: 'Deleting nodes from linked list by value and position with memory management.', category: 'Linked Lists · Basic Operations' },
    { slug: 'linked-lists-find-middle', title: 'Find Middle of Linked List', explanation: 'Finding middle node using slow and fast pointer technique.', category: 'Linked Lists · Basic Operations' },
    { slug: 'linked-lists-nth-node-from-end', title: 'Nth Node from End', explanation: 'Finding Nth node from end using two-pointer approach and optimization.', category: 'Linked Lists · Basic Operations' },
    { slug: 'linked-lists-search-element', title: 'Search for Element', explanation: 'Linear search in linked lists and optimization techniques.', category: 'Linked Lists · Basic Operations' },
    { slug: 'linked-lists-count-nodes', title: 'Count Nodes', explanation: 'Counting nodes in linked list iteratively and recursively.', category: 'Linked Lists · Basic Operations' },

    // Linked Lists - Reversal & Manipulation
    { slug: 'linked-lists-reverse-linked-list', title: 'Reverse a Linked List', explanation: 'Reversing linked list iteratively and recursively with memory management.', category: 'Linked Lists · Reversal & Manipulation' },
    { slug: 'linked-lists-remove-duplicates-list', title: 'Remove Duplicates from Sorted List', explanation: 'Removing duplicates from sorted linked list in single pass.', category: 'Linked Lists · Reversal & Manipulation' },
    { slug: 'linked-lists-merge-two-sorted-lists', title: 'Merge Two Sorted Lists', explanation: 'Merging two sorted linked lists into single sorted list recursively and iteratively.', category: 'Linked Lists · Reversal & Manipulation' },
    { slug: 'linked-lists-palindrome-check', title: 'Palindrome Linked List', explanation: 'Checking if linked list is palindrome using stack and reversal techniques.', category: 'Linked Lists · Reversal & Manipulation' },
    { slug: 'linked-lists-odd-even-linked-list', title: 'Odd Even Linked List', explanation: 'Reorganizing linked list to separate odd and even positioned nodes.', category: 'Linked Lists · Reversal & Manipulation' },

    // Linked Lists - Advanced Techniques
    { slug: 'linked-lists-detect-cycle', title: 'Detect Cycle in Linked List', explanation: 'Detecting cycles using Floyd\'s cycle detection algorithm and hash set approach.', category: 'Linked Lists · Advanced Techniques' },
    { slug: 'linked-lists-find-cycle-start', title: 'Find Cycle Start Point', explanation: 'Finding start of cycle in linked list using mathematical approach.', category: 'Linked Lists · Advanced Techniques' },
    { slug: 'linked-lists-intersection-two-linked-lists', title: 'Intersection of Two Linked Lists', explanation: 'Finding intersection point of two linked lists using hash set and two-pointer approach.', category: 'Linked Lists · Advanced Techniques' },
    { slug: 'linked-lists-remove-nth-node-from-end', title: 'Remove Nth Node from End', explanation: 'Removing Nth node from end in single pass using two-pointer technique.', category: 'Linked Lists · Advanced Techniques' },
    { slug: 'linked-lists-add-two-numbers', title: 'Add Two Numbers (Linked List)', explanation: 'Adding numbers represented as linked lists with carry handling.', category: 'Linked Lists · Advanced Techniques' },

    // Doubly Linked Lists
    { slug: 'doubly-linked-lists-delete-node-o1', title: 'Delete Node in O(1)', explanation: 'Deleting node from doubly linked list in constant time given node reference.', category: 'Linked Lists · Doubly Linked Lists' },
    { slug: 'doubly-linked-lists-reverse-doubly-linked-list', title: 'Reverse Doubly Linked List', explanation: 'Reversing doubly linked list in-place with pointer manipulation.', category: 'Linked Lists · Doubly Linked Lists' },
    { slug: 'doubly-linked-lists-lru-cache-design', title: 'LRU Cache Design', explanation: 'Designing LRU cache using doubly linked list and hashmap for O(1) operations.', category: 'Linked Lists · Doubly Linked Lists' },

    // Stacks - Introduction
    { slug: 'stacks-what-is-a-stack', title: 'What is a Stack?', explanation: 'Introduction to stack data structure, LIFO principle, and stack operations.', category: 'Stacks · Introduction' },
    { slug: 'stacks-stack-operations-applications', title: 'Stack Operations & Applications', explanation: 'Stack operations, real-world applications, and when to use stacks.', category: 'Stacks · Introduction' },

    // Stacks - Basic Stack Operations
    { slug: 'stacks-implement-stack-using-arrays', title: 'Implement Stack Using Arrays', explanation: 'Implementing stack using arrays with dynamic resizing and optimization.', category: 'Stacks · Basic Stack Operations' },
    { slug: 'stacks-implement-two-stacks-one-array', title: 'Implement Two Stacks in One Array', explanation: 'Implementing two stacks in single array efficiently with space optimization.', category: 'Stacks · Basic Stack Operations' },
    { slug: 'stacks-get-minimum-o1', title: 'Get Minimum Element in O(1)', explanation: 'Designing stack that returns minimum element in O(1) time with auxiliary stack.', category: 'Stacks · Basic Stack Operations' },

    // Stacks - Parentheses Problems
    { slug: 'stacks-valid-parentheses', title: 'Valid Parentheses', explanation: 'Validating balanced parentheses using stack with multiple bracket types.', category: 'Stacks · Parentheses Problems' },
    { slug: 'stacks-score-of-parentheses', title: 'Score of Parentheses', explanation: 'Calculating score of balanced parentheses string using stack and recursion.', category: 'Stacks · Parentheses Problems' },
    { slug: 'stacks-remove-therless-parentheses', title: 'Remove thermost Parentheses', explanation: 'Removing thermost parentheses from valid parentheses string.', category: 'Stacks · Parentheses Problems' },

    // Stacks - Monotonic Stack
    { slug: 'stacks-largest-rectangle-in-histogram', title: 'Largest Rectangle in Histogram', explanation: 'Finding largest rectangle area in histogram using monotonic stack technique.', category: 'Stacks · Monotonic Stack' },
    { slug: 'stacks-trapping-rain-water', title: 'Trapping Rain Water', explanation: 'Calculating trapped rain water using two-pointer and stack approaches.', category: 'Stacks · Monotonic Stack' },
    { slug: 'stacks-next-greater-element', title: 'Next Greater Element I & II', explanation: 'Finding next greater element using monotonic stack and circular array handling.', category: 'Stacks · Monotonic Stack' },
    { slug: 'stacks-remove-k-digits', title: 'Remove K Digits', explanation: 'Removing K digits to form smallest number using monotonic stack.', category: 'Stacks · Monotonic Stack' },

    // Queues - Introduction
    { slug: 'queues-what-is-a-queue', title: 'What is a Queue?', explanation: 'Introduction to queue data structure, FIFO principle, and queue operations.', category: 'Queues · Introduction' },
    { slug: 'queues-types-of-queues', title: 'Types of Queues', explanation: 'Simple queue, circular queue, priority queue, deque, and their characteristics.', category: 'Queues · Introduction' },

    // Queues - Basic Queue Operations
    { slug: 'queues-implement-queue-using-arrays', title: 'Implement Queue Using Arrays', explanation: 'Implementing queue using arrays with front and rear pointers and optimization.', category: 'Queues · Basic Queue Operations' },
    { slug: 'queues-implement-circular-queue', title: 'Implement Circular Queue', explanation: 'Implementing circular queue with efficient space utilization.', category: 'Queues · Basic Queue Operations' },
    { slug: 'queues-implement-queue-using-stacks', title: 'Implement Queue Using Stacks', explanation: 'Implementing queue using two stacks with amortized O(1) operations.', category: 'Queues · Basic Queue Operations' },
    { slug: 'queues-implement-stack-using-queues', title: 'Implement Stack Using Queues', explanation: 'Implementing stack using queues with push/pop operations.', category: 'Queues · Basic Queue Operations' },

    
    // Recursion - introduction
    { slug: 'recursion-what-is-recursion', title: 'What is recursion?', explanation: 'Understanding recursion concept, how functions call themselves, and recursive thinking.', category: 'Recursion · Recursion - introduction' },
    { slug: 'recursion-base-case-recursive-case', title: 'Base case and recursive case', explanation: 'Understanding base case to stop recursion and recursive case to continue the process.', category: 'Recursion · Recursion - introduction' },
    { slug: 'recursion-call-stack-memory', title: 'Call stack and memory', explanation: 'How recursion uses call stack, memory management, and stack overflow considerations.', category: 'Recursion · Recursion - introduction' },
    { slug: 'recursion-when-to-use', title: 'When to use recursion', explanation: 'Identifying problems suitable for recursion and when to prefer iterative solutions.', category: 'Recursion · Recursion - introduction' },

    // Recursion - Basic Recursion
    { slug: 'recursion-print-1-to-n', title: 'Print 1 to N', explanation: 'Printing numbers from 1 to N using recursion.', category: 'Recursion · Basic Recursion' },
    { slug: 'recursion-factorial', title: 'Factorial', explanation: 'Computing factorial using recursion with base case.', category: 'Recursion · Basic Recursion' },
    { slug: 'recursion-sum-numbers', title: 'Sum of N Numbers', explanation: 'Calculating sum of first N natural numbers recursively.', category: 'Recursion · Basic Recursion' },
    { slug: 'recursion-power-function', title: 'Power Function (x^n)', explanation: 'Computing power using recursion with optimization.', category: 'Recursion · Basic Recursion' },
    { slug: 'recursion-fibonacci-sequence', title: 'Fibonacci Sequence', explanation: 'Generating Fibonacci sequence using recursion.', category: 'Recursion · Basic Recursion' },

    // Recursion - Array Recursion
    { slug: 'recursion-sum-array-elements', title: 'Sum of Array Elements', explanation: 'Calculating sum of array elements recursively.', category: 'Recursion · Array Recursion' },
    { slug: 'recursion-find-maximum-array', title: 'Find Maximum in Array', explanation: 'Finding maximum element in array recursively.', category: 'Recursion · Array Recursion' },
    { slug: 'recursion-check-array-sorted', title: 'Check if Array is Sorted', explanation: 'Checking if array is sorted recursively.', category: 'Recursion · Array Recursion' },
    { slug: 'recursion-linear-search-recursion', title: 'Linear Search Using Recursion', explanation: 'Implementing linear search using recursion.', category: 'Recursion · Array Recursion' },

    // Recursion - String Recursion
    { slug: 'recursion-reverse-string', title: 'Reverse a String', explanation: 'Reversing string using recursion.', category: 'Recursion · String Recursion' },
    { slug: 'recursion-check-palindrome', title: 'Check Palindrome', explanation: 'Checking if string is palindrome recursively.', category: 'Recursion · String Recursion' },
    { slug: 'recursion-remove-duplicates-string', title: 'Remove Duplicates from String', explanation: 'Removing duplicate characters from string recursively.', category: 'Recursion · String Recursion' },
    { slug: 'recursion-generate-subsets', title: 'Generate All Subsets', explanation: 'Generating all subsets of string recursively.', category: 'Recursion · String Recursion' },
    { slug: 'recursion-print-subsequences', title: 'Print All Subsequences', explanation: 'Printing all subsequences of string recursively.', category: 'Recursion · String Recursion' },

    // Recursion - Backtracking
    { slug: 'recursion-generate-binary-strings', title: 'Generate All Binary Strings of Length N', explanation: 'Generating all binary strings of length N using backtracking.', category: 'Recursion · Backtracking' },
    { slug: 'recursion-print-permutations', title: 'Print All Permutations of String', explanation: 'Generating all permutations of string using backtracking.', category: 'Recursion · Backtracking' },
    { slug: 'recursion-letter-combinations-phone', title: 'Letter Combinations of Phone Number', explanation: 'Generating letter combinations from phone digits.', category: 'Recursion · Backtracking' },
    { slug: 'recursion-subsets', title: 'Subsets', explanation: 'Finding all subsets of array using backtracking.', category: 'Recursion · Backtracking' },
    { slug: 'recursion-combination-sum', title: 'Combination Sum', explanation: 'Finding combinations that sum to target using backtracking.', category: 'Recursion · Backtracking' },

    // Recursion - Advanced Recursion
    { slug: 'recursion-count-ways-nth-stair', title: 'Count Ways to Reach Nth Stair', explanation: 'Counting ways to climb stairs with steps of 1 or 2.', category: 'Recursion · Advanced Recursion' },
    { slug: 'recursion-tower-hanoi', title: 'Tower of Hanoi', explanation: 'Solving Tower of Hanoi problem using recursion.', category: 'Recursion · Advanced Recursion' },
    { slug: 'recursion-josephus-problem', title: 'Josephus Problem', explanation: 'Solving Josephus problem using recursion.', category: 'Recursion · Advanced Recursion' },

    // Binary Search - Basic Binary Search
    { slug: 'binary-search-sorted-array', title: 'Binary Search in Sorted Array', explanation: 'Binary search implementation in sorted array with standard approach.', category: 'Binary Search · Basic Binary Search' },
    { slug: 'binary-search-first-last-position', title: 'First and Last Position of Element', explanation: 'Finding first and last occurrence of element using binary search.', category: 'Binary Search · Basic Binary Search' },
    { slug: 'binary-search-rotated-sorted-array', title: 'Search in Rotated Sorted Array', explanation: 'Binary search in rotated sorted array and finding pivot element.', category: 'Binary Search · Basic Binary Search' },
    { slug: 'binary-search-find-peak-element', title: 'Find Peak Element', explanation: 'Finding peak element in array using binary search.', category: 'Binary Search · Basic Binary Search' },
    { slug: 'binary-search-search-insert-position', title: 'Search Insert Position', explanation: 'Finding position to insert element to maintain sorted order.', category: 'Binary Search · Basic Binary Search' },

    // Binary Search - Binary Search Variations
    { slug: 'binary-search-smallest-letter-greater-target', title: 'Find Smallest Letter Greater than Target', explanation: 'Finding smallest character greater than target using binary search.', category: 'Binary Search · Binary Search Variations' },
    { slug: 'binary-search-single-element-sorted-array', title: 'Single Element in Sorted Array', explanation: 'Finding single non-duplicate element in sorted array.', category: 'Binary Search · Binary Search Variations' },
    { slug: 'binary-search-count-negative-sorted-matrix', title: 'Count Negative Numbers in Sorted Matrix', explanation: 'Counting negative numbers in row-wise sorted matrix.', category: 'Binary Search · Binary Search Variations' },

    // Binary Search - Binary Search on Answer
    { slug: 'binary-search-square-root', title: 'Square Root of Number', explanation: 'Finding square root of number using binary search on answer space.', category: 'Binary Search · Binary Search on Answer' },
    { slug: 'binary-search-kth-missing-positive', title: 'Kth Missing Positive Number', explanation: 'Finding Kth missing positive number using binary search.', category: 'Binary Search · Binary Search on Answer' },
    { slug: 'binary-search-capacity-ship-packages', title: 'Capacity to Ship Packages Within D Days', explanation: 'Finding minimum capacity to ship packages within D days.', category: 'Binary Search · Binary Search on Answer' },
    { slug: 'binary-search-koko-eating-bananas', title: 'Koko Eating Bananas', explanation: 'Finding minimum eating speed for Koko to finish bananas.', category: 'Binary Search · Binary Search on Answer' },
    { slug: 'binary-search-magnetic-force', title: 'Magnetic Force Between Two Balls', explanation: 'Finding maximum magnetic force between two balls using binary search.', category: 'Binary Search · Binary Search on Answer' },

    // Sorting Algorithms - Basic Sorting
    { slug: 'sorting-bubble-sort', title: 'Bubble Sort', explanation: 'Simple sorting algorithm with repeated swaps and optimization techniques.', category: 'Sorting Algorithms · Basic Sorting' },
    { slug: 'sorting-selection-sort', title: 'Selection Sort', explanation: 'Finding minimum element and placing at correct position repeatedly.', category: 'Sorting Algorithms · Basic Sorting' },
    { slug: 'sorting-insertion-sort', title: 'Insertion Sort', explanation: 'Building sorted array by inserting elements at correct positions.', category: 'Sorting Algorithms · Basic Sorting' },

    // Sorting Algorithms - Advanced Sorting
    { slug: 'sorting-merge-sort', title: 'Merge Sort', explanation: 'Divide and conquer sorting with merging sorted subarrays.', category: 'Sorting Algorithms · Advanced Sorting' },
    { slug: 'sorting-quicksort', title: 'Quicksort', explanation: 'In-place sorting with partitioning and average case O(n log n).', category: 'Sorting Algorithms · Advanced Sorting' },
    { slug: 'sorting-count-inversions', title: 'Count Inversions in Array', explanation: 'Counting inversions using modified merge sort algorithm.', category: 'Sorting Algorithms · Advanced Sorting' },
    { slug: 'sorting-reverse-pairs', title: 'Reverse Pairs', explanation: 'Finding reverse pairs in array using merge sort approach.', category: 'Sorting Algorithms · Advanced Sorting' },

    // Sorting Algorithms - Sorting Problems
    { slug: 'sorting-kth-largest-element', title: 'Kth Largest Element', explanation: 'Finding kth largest element using quickselect or heap.', category: 'Sorting Algorithms · Sorting Problems' },
    { slug: 'sorting-sort-colors', title: 'Sort Colors (Dutch National Flag)', explanation: 'Sorting array with 0s, 1s, 2s in single pass.', category: 'Sorting Algorithms · Sorting Problems' },
    { slug: 'sorting-sort-array-parity', title: 'Sort Array by Parity', explanation: 'Sorting array to place even numbers before odd numbers.', category: 'Sorting Algorithms · Sorting Problems' },

    // Binary Trees - Tree Traversals
    { slug: 'binary-trees-inorder-traversal', title: 'Inorder Traversal', explanation: 'Left-root-right traversal using recursion and iterative approaches.', category: 'Binary Trees · Tree Traversals' },
    { slug: 'binary-trees-preorder-traversal', title: 'Preorder Traversal', explanation: 'Root-left-right traversal using recursion and iterative approaches.', category: 'Binary Trees · Tree Traversals' },
    { slug: 'binary-trees-postorder-traversal', title: 'Postorder Traversal', explanation: 'Left-right-root traversal using recursion and iterative approaches.', category: 'Binary Trees · Tree Traversals' },
    { slug: 'binary-trees-level-order-traversal', title: 'Level Order Traversal', explanation: 'Breadth-first traversal using queue and level-by-level processing.', category: 'Binary Trees · Tree Traversals' },
    { slug: 'binary-trees-zigzag-level-order', title: 'Zigzag Level Order', explanation: 'Spiral traversal alternating directions at each level.', category: 'Binary Trees · Tree Traversals' },
    { slug: 'binary-trees-vertical-order-traversal', title: 'Vertical Order Traversal', explanation: 'Column-wise traversal using hashmap and coordinates.', category: 'Binary Trees · Tree Traversals' },

    // Binary Trees - Tree Views
    { slug: 'binary-trees-right-view-tree', title: 'Right View of Tree', explanation: 'Viewing tree from right side and visible nodes at each level.', category: 'Binary Trees · Tree Views' },
    { slug: 'binary-trees-left-view-tree', title: 'Left View of Tree', explanation: 'Viewing tree from left side and visible nodes at each level.', category: 'Binary Trees · Tree Views' },
    { slug: 'binary-trees-top-view-tree', title: 'Top View of Tree', explanation: 'Viewing tree from top and visible nodes based on x-coordinates.', category: 'Binary Trees · Tree Views' },
    { slug: 'binary-trees-bottom-view-tree', title: 'Bottom View of Tree', explanation: 'Viewing tree from bottom and visible nodes based on x-coordinates.', category: 'Binary Trees · Tree Views' },

    // Binary Trees - Basic Tree Problems
    { slug: 'binary-trees-count-total-nodes', title: 'Count Total Nodes', explanation: 'Counting all nodes in binary tree using recursive and iterative approaches.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-count-leaf-nodes', title: 'Count Leaf Nodes', explanation: 'Counting leaf nodes in binary tree and identifying leaf nodes.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-find-height-tree', title: 'Find Height of Tree', explanation: 'Calculating height/depth of binary tree recursively and iteratively.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-maximum-depth-tree', title: 'Maximum Depth of Tree', explanation: 'Finding maximum depth from root to furthest leaf node.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-minimum-depth-tree', title: 'Minimum Depth of Tree', explanation: 'Finding minimum depth from root to nearest leaf node.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-diameter-tree', title: 'Diameter of Tree', explanation: 'Finding longest path between any two nodes in binary tree.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-balanced-binary-tree', title: 'Balanced Binary Tree', explanation: 'Checking if binary tree is height-balanced using recursive approach.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-symmetric-tree', title: 'Symmetric Tree', explanation: 'Checking if binary tree is symmetric around its center.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-invert-binary-tree', title: 'Invert Binary Tree', explanation: 'Mirroring binary tree by swapping left and right children.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-check-if-two-trees-are-identical', title: 'Check if Two Trees are Identical', explanation: 'Comparing two binary trees for structural and value equality.', category: 'Binary Trees · Basic Tree Problems' },
    { slug: 'binary-trees-sum-all-nodes', title: 'Sum of All Nodes', explanation: 'Calculating sum of all node values in binary tree.', category: 'Binary Trees · Basic Tree Problems' },

    // Binary Trees - Path Problems
    { slug: 'binary-trees-path-sum', title: 'Path Sum', explanation: 'Finding paths with specific sum from root to leaf nodes.', category: 'Binary Trees · Path Problems' },
    { slug: 'binary-trees-root-leaf-paths', title: 'Root to Leaf Paths', explanation: 'Finding all paths from root to leaf nodes in binary tree.', category: 'Binary Trees · Path Problems' },
    { slug: 'binary-trees-maximum-path-sum', title: 'Maximum Path Sum', explanation: 'Finding path with maximum sum between any two nodes.', category: 'Binary Trees · Path Problems' },
    { slug: 'binary-trees-lowest-common-ancestor', title: 'Lowest Common Ancestor', explanation: 'Finding LCA of two nodes in binary tree.', category: 'Binary Trees · Path Problems' },
    { slug: 'binary-trees-distance-between-two-nodes', title: 'Distance Between Two Nodes', explanation: 'Calculating distance between two nodes using LCA.', category: 'Binary Trees · Path Problems' },

    // Binary Trees - Construction Problems
    { slug: 'binary-trees-construct-tree-inorder-preorder', title: 'Construct Tree from Inorder and Preorder', explanation: 'Building binary tree from inorder and preorder traversals.', category: 'Binary Trees · Construction Problems' },
    { slug: 'binary-trees-construct-tree-inorder-postorder', title: 'Construct Tree from Inorder and Postorder', explanation: 'Building binary tree from inorder and postorder traversals.', category: 'Binary Trees · Construction Problems' },
    { slug: 'binary-trees-flatten-binary-tree-linked-list', title: 'Flatten Binary Tree to Linked List', explanation: 'Converting binary tree to linked list in-place.', category: 'Binary Trees · Construction Problems' },
    { slug: 'binary-trees-serialize-deserialize-binary-tree', title: 'Serialize and Deserialize Binary Tree', explanation: 'Converting binary tree to string and back.', category: 'Binary Trees · Construction Problems' },

    // Binary Search Trees - BST Operations
    { slug: 'bst-search-in-bst', title: 'Search in BST', explanation: 'Searching for values in binary search tree using properties.', category: 'Binary Search Trees · BST Operations' },
    { slug: 'bst-insert-into-bst', title: 'Insert into BST', explanation: 'Inserting values while maintaining BST properties.', category: 'Binary Search Trees · BST Operations' },
    { slug: 'bst-delete-node-in-bst', title: 'Delete Node in BST', explanation: 'Deleting nodes while maintaining BST properties.', category: 'Binary Search Trees · BST Operations' },
    { slug: 'bst-validate-bst', title: 'Validate BST', explanation: 'Checking if binary tree is a valid binary search tree.', category: 'Binary Search Trees · BST Operations' },
    { slug: 'bst-minimum-maximum-in-bst', title: 'Minimum and Maximum in BST', explanation: 'Finding min/max values in BST efficiently.', category: 'Binary Search Trees · BST Operations' },

    // Binary Search Trees - BST Traversal
    { slug: 'bst-kth-smallest-element', title: 'Kth Smallest Element', explanation: 'Finding kth smallest element in BST using inorder traversal.', category: 'Binary Search Trees · BST Traversal' },
    { slug: 'bst-kth-largest-element', title: 'Kth Largest Element', explanation: 'Finding kth largest element in BST using reverse inorder.', category: 'Binary Search Trees · BST Traversal' },
    { slug: 'bst-inorder-successor', title: 'Inorder Successor', explanation: 'Finding next larger element in BST.', category: 'Binary Search Trees · BST Traversal' },
    { slug: 'bst-inorder-predecessor', title: 'Inorder Predecessor', explanation: 'Finding previous smaller element in BST.', category: 'Binary Search Trees · BST Traversal' },

    // Binary Search Trees - BST Problems
    { slug: 'bst-two-sum-in-bst', title: 'Two Sum in BST', explanation: 'Finding two numbers that sum to target in BST.', category: 'Binary Search Trees · BST Problems' },
    { slug: 'bst-convert-sorted-array-to-bst', title: 'Convert Sorted Array to BST', explanation: 'Building balanced BST from sorted array.', category: 'Binary Search Trees · BST Problems' },
    { slug: 'bst-lowest-common-ancestor-in-bst', title: 'Lowest Common Ancestor in BST', explanation: 'Finding LCA in BST using properties efficiently.', category: 'Binary Search Trees · BST Problems' },
    { slug: 'bst-recover-bst', title: 'Recover BST', explanation: 'Fixing BST with two swapped nodes.', category: 'Binary Search Trees · BST Problems' },
    { slug: 'bst-range-sum-of-bst', title: 'Range Sum of BST', explanation: 'Sum of values within given range in BST.', category: 'Binary Search Trees · BST Problems' },

    // Hashing & Hash Maps - Basic Hashing
    { slug: 'hashing-two-sum', title: 'Two Sum', explanation: 'Finding two numbers that sum to target using hashmap.', category: 'Hashing & Hash Maps · Basic Hashing' },
    { slug: 'hashing-contains-duplicate', title: 'Contains Duplicate', explanation: 'Checking for duplicates in array using hash set.', category: 'Hashing & Hash Maps · Basic Hashing' },
    { slug: 'hashing-find-all-duplicates', title: 'Find All Duplicates', explanation: 'Finding all duplicate elements using hashmap.', category: 'Hashing & Hash Maps · Basic Hashing' },
    { slug: 'hashing-intersection-two-arrays', title: 'Intersection of Two Arrays', explanation: 'Finding common elements between arrays using hash sets.', category: 'Hashing & Hash Maps · Basic Hashing' },

    // Hashing & Hash Maps - Hash Map Applications
    { slug: 'hashing-group-anagrams', title: 'Group Anagrams', explanation: 'Grouping anagrams together using hashmap.', category: 'Hashing & Hash Maps · Hash Map Applications' },
    { slug: 'hashing-top-k-frequent-elements', title: 'Top K Frequent Elements', explanation: 'Finding most frequent elements using hashmap and heap.', category: 'Hashing & Hash Maps · Hash Map Applications' },
    { slug: 'hashing-sort-characters-by-frequency', title: 'Sort Characters by Frequency', explanation: 'Sorting characters based on frequency using hashmap.', category: 'Hashing & Hash Maps · Hash Map Applications' },
    { slug: 'hashing-first-unique-character', title: 'First Unique Character', explanation: 'Finding first non-repeating character using hashmap.', category: 'Hashing & Hash Maps · Hash Map Applications' },
    { slug: 'hashing-longest-consecutive-sequence', title: 'Longest Consecutive Sequence', explanation: 'Finding longest consecutive sequence using hash set.', category: 'Hashing & Hash Maps · Hash Map Applications' },

    // Hashing & Hash Maps - Advanced Hashing
    { slug: 'hashing-happy-number', title: 'Happy Number', explanation: 'Checking happy numbers using hash set for cycle detection.', category: 'Hashing & Hash Maps · Advanced Hashing' },
    { slug: 'hashing-valid-sudoku', title: 'Valid Sudoku', explanation: 'Validating Sudoku board using hash sets for rows, columns, boxes.', category: 'Hashing & Hash Maps · Advanced Hashing' },
    { slug: 'hashing-subarray-sum-equals-k', title: 'Subarray Sum Equals K', explanation: 'Finding subarrays with sum K using prefix sum hashmap.', category: 'Hashing & Hash Maps · Advanced Hashing' },
    { slug: 'hashing-continuous-subarray-sum', title: 'Continuous Subarray Sum', explanation: 'Finding subarrays with sum multiple of K using hashmap.', category: 'Hashing & Hash Maps · Advanced Hashing' },
    { slug: 'hashing-longest-substring-without-repeating-characters', title: 'Longest Substring Without Repeating Characters', explanation: 'Finding longest substring without repeats using hashmap.', category: 'Hashing & Hash Maps · Advanced Hashing' },

    // Heaps & Priority Queues - Basic Heap Problems
    { slug: 'heaps-kth-largest-element', title: 'Kth Largest Element', explanation: 'Finding kth largest element using min-heap of size K.', category: 'Heaps & Priority Queues · Basic Heap Problems' },
    { slug: 'heaps-kth-smallest-element', title: 'Kth Smallest Element', explanation: 'Finding kth smallest element using max-heap of size K.', category: 'Heaps & Priority Queues · Basic Heap Problems' },
    { slug: 'heaps-last-stone-weight', title: 'Last Stone Weight', explanation: 'Simulating stone collisions using max-heap.', category: 'Heaps & Priority Queues · Basic Heap Problems' },
    { slug: 'heaps-find-median-from-data-stream', title: 'Find Median from Data Stream', explanation: 'Maintaining median using two heaps approach.', category: 'Heaps & Priority Queues · Basic Heap Problems' },

    // Heaps & Priority Queues - Priority Queue Applications
    { slug: 'heaps-top-k-frequent-elements', title: 'Top K Frequent Elements', explanation: 'Finding most frequent elements using heap and hashmap.', category: 'Heaps & Priority Queues · Priority Queue Applications' },
    { slug: 'heaps-k-closest-points-to-origin', title: 'K Closest Points to Origin', explanation: 'Finding K points closest to origin using max-heap.', category: 'Heaps & Priority Queues · Priority Queue Applications' },
    { slug: 'heaps-kth-largest-in-stream', title: 'Kth Largest in Stream', explanation: 'Maintaining kth largest in dynamic data stream.', category: 'Heaps & Priority Queues · Priority Queue Applications' },
    { slug: 'heaps-reorganize-string', title: 'Reorganize String', explanation: 'Rearranging string to avoid adjacent duplicates using heap.', category: 'Heaps & Priority Queues · Priority Queue Applications' },
    { slug: 'heaps-task-scheduler', title: 'Task Scheduler', explanation: 'Scheduling tasks with cooling period using heap.', category: 'Heaps & Priority Queues · Priority Queue Applications' },

    // Heaps & Priority Queues - Advanced Heap Problems
    { slug: 'heaps-merge-k-sorted-lists', title: 'Merge K Sorted Lists', explanation: 'Merging K sorted linked lists using min-heap.', category: 'Heaps & Priority Queues · Advanced Heap Problems' },
    { slug: 'heaps-smallest-range-covering-k-lists', title: 'Smallest Range Covering K Lists', explanation: 'Finding smallest range covering at least one element from each list.', category: 'Heaps & Priority Queues · Advanced Heap Problems' },
    { slug: 'heaps-ugly-number-ii', title: 'Ugly Number II', explanation: 'Finding nth ugly number using heap approach.', category: 'Heaps & Priority Queues · Advanced Heap Problems' },

    // Graphs - Graph Representation & Traversal
    { slug: 'graphs-create-graph-adjacency-list-matrix', title: 'Create Graph (Adjacency List & Matrix)', explanation: 'Creating graphs using adjacency list and matrix representations with tradeoffs.', category: 'Graphs · Graph Representation & Traversal' },
    { slug: 'graphs-depth-first-search-dfs', title: 'Depth First Search (DFS)', explanation: 'Graph traversal using DFS with recursion and iterative implementations.', category: 'Graphs · Graph Representation & Traversal' },
    { slug: 'graphs-breadth-first-search-bfs', title: 'Breadth First Search (BFS)', explanation: 'Graph traversal using BFS with queue and level-order traversal.', category: 'Graphs · Graph Representation & Traversal' },
    { slug: 'graphs-find-if-path-exists', title: 'Find if Path Exists in Graph', explanation: 'Checking path existence between nodes using DFS and BFS approaches.', category: 'Graphs · Graph Representation & Traversal' },

    // Graphs - Connected Components
    { slug: 'graphs-number-of-islands', title: 'Number of Islands', explanation: 'Counting islands in grid using DFS and BFS with marking visited cells.', category: 'Graphs · Connected Components' },
    { slug: 'graphs-number-of-provinces', title: 'Number of Provinces', explanation: 'Finding connected components in graph using DFS and Union-Find.', category: 'Graphs · Connected Components' },
    { slug: 'graphs-number-of-enclaves', title: 'Number of Enclaves', explanation: 'Counting land cells that cannot reach boundary using DFS and BFS.', category: 'Graphs · Connected Components' },
    { slug: 'graphs-surrounded-regions', title: 'Surrounded Regions', explanation: 'Flipping surrounded regions using DFS from boundaries and optimization.', category: 'Graphs · Connected Components' },

    // Graphs - Graph Problems
    { slug: 'graphs-all-paths-from-source-to-target', title: 'All Paths from Source to Target', explanation: 'Finding all paths from source to target using DFS with backtracking.', category: 'Graphs · Graph Problems' },
    { slug: 'graphs-clone-graph', title: 'Clone Graph', explanation: 'Creating deep copy of graph using DFS and BFS with hashmap.', category: 'Graphs · Graph Problems' },
    { slug: 'graphs-pacific-atlantic-water-flow', title: 'Pacific Atlantic Water Flow', explanation: 'Finding cells where water can flow to both oceans using DFS/BFS.', category: 'Graphs · Graph Problems' },
    { slug: 'graphs-shortest-path-binary-matrix', title: 'Shortest Path in Binary Matrix', explanation: 'Finding shortest path in binary matrix using BFS.', category: 'Graphs · Graph Problems' },
    { slug: 'graphs-rotting-oranges', title: 'Rotting Oranges', explanation: 'Simulating orange rotting process using BFS level-order traversal.', category: 'Graphs · Graph Problems' },

    // Graphs - Cycle Detection & Topological Sort
    { slug: 'graphs-course-schedule', title: 'Course Schedule (Detect Cycle)', explanation: 'Detecting cycles in directed graph using DFS and BFS.', category: 'Graphs · Cycle Detection & Topological Sort' },
    { slug: 'graphs-course-schedule-ii', title: 'Course Schedule II (Topological Sort)', explanation: 'Finding course order using topological sort with Kahn\'s algorithm.', category: 'Graphs · Cycle Detection & Topological Sort' },
    { slug: 'graphs-alien-dictionary', title: 'Alien Dictionary', explanation: 'Finding alien dictionary order using topological sort.', category: 'Graphs · Cycle Detection & Topological Sort' },
    { slug: 'graphs-minimum-height-trees', title: 'Minimum Height Trees Trees', explanation: 'Finding roots for minimum height trees using graph trimming.', category: 'Graphs · Cycle Detection & Topological Sort' },

    // Graphs - Advanced Graph Problems
    { slug: 'graphs-minimum-knight-moves', title: 'Minimum Knight Moves', explanation: 'Finding minimum knight moves on chessboard using BFS.', category: 'Graphs · Advanced Graph Problems' },
    { slug: 'graphs-word-ladder', title: 'Word Ladder', explanation: 'Finding shortest word transformation sequence using BFS.', category: 'Graphs · Advanced Graph Problems' },
    { slug: 'graphs-open-lock', title: 'Open the Lock', explanation: 'Finding minimum combinations to open lock using BFS.', category: 'Graphs · Advanced Graph Problems' },

    // Dynamic Programming - 1D DP
    { slug: 'dp-fibonacci', title: 'Fibonacci', explanation: 'Computing Fibonacci numbers using DP with space optimization.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-climbing-stairs', title: 'Climbing Stairs', explanation: 'Counting ways to climb stairs using DP recurrence.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-min-cost-climbing-stairs', title: 'Min Cost Climbing Stairs', explanation: 'Finding minimum cost to reach top with cost array.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-house-robber', title: 'House Robber', explanation: 'Maximum money without robbing adjacent houses.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-jump-game', title: 'Jump Game', explanation: 'Checking if can reach end of array with jumps.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-decode-ways', title: 'Decode Ways', explanation: 'Counting ways to decode numeric string to letters.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-coin-change', title: 'Coin Change', explanation: 'Minimum coins to make amount using unlimited coins.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-word-break', title: 'Word Break', explanation: 'Checking if string can be segmented using dictionary.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-longest-increasing-subsequence', title: 'Longest Increasing Subsequence', explanation: 'Finding longest increasing subsequence using DP and patience sorting.', category: 'Dynamic Programming · 1D DP' },
    { slug: 'dp-maximum-product-subarray', title: 'Maximum Product Subarray', explanation: 'Finding maximum product subarray with tracking min/max.', category: 'Dynamic Programming · 1D DP' },

    // Dynamic Programming - 2D DP - Grid Problems
    { slug: 'dp-unique-paths', title: 'Unique Paths', explanation: 'Counting paths in grid moving only right and down.', category: 'Dynamic Programming · 2D DP - Grid Problems' },
    { slug: 'dp-unique-paths-ii', title: 'Unique Paths II', explanation: 'Counting paths in grid with obstacles.', category: 'Dynamic Programming · 2D DP - Grid Problems' },
    { slug: 'dp-minimum-path-sum', title: 'Minimum Path Sum', explanation: 'Finding minimum path sum in grid moving right/down.', category: 'Dynamic Programming · 2D DP - Grid Problems' },
    { slug: 'dp-maximum-square', title: 'Maximum Square', explanation: 'Finding largest square of 1s in binary matrix.', category: 'Dynamic Programming · 2D DP - Grid Problems' },
    { slug: 'dp-dungeon-game', title: 'Dungeon Game', explanation: 'Finding minimum initial health to reach princess.', category: 'Dynamic Programming · 2D DP - Grid Problems' },

    // Dynamic Programming - 2D DP - String Problems
    { slug: 'dp-longest-common-subsequence', title: 'Longest Common Subsequence', explanation: 'Finding LCS between two strings using DP.', category: 'Dynamic Programming · 2D DP - String Problems' },
    { slug: 'dp-edit-distance', title: 'Edit Distance', explanation: 'Minimum operations to convert one string to another.', category: 'Dynamic Programming · 2D DP - String Problems' },
    { slug: 'dp-distinct-subsequences', title: 'Distinct Subsequences', explanation: 'Counting distinct subsequences of target string.', category: 'Dynamic Programming · 2D DP - String Problems' },
    { slug: 'dp-longest-palindromic-subsequence', title: 'Longest Palindromic Subsequence', explanation: 'Finding longest palindromic subsequence using DP.', category: 'Dynamic Programming · 2D DP - String Problems' },
    { slug: 'dp-shortest-common-supersequence', title: 'Shortest Common Supersequence', explanation: 'Finding shortest string containing both strings as subsequences.', category: 'Dynamic Programming · 2D DP - String Problems' },
    { slug: 'dp-palindromic-substrings', title: 'Palindromic Substrings', explanation: 'Counting palindromic substrings in given string.', category: 'Dynamic Programming · 2D DP - String Problems' },

    // Dynamic Programming - Knapsack Pattern
    { slug: 'dp-0-1-knapsack', title: '0/1 Knapsack', explanation: 'Maximum value with weight constraint using DP.', category: 'Dynamic Programming · Knapsack Pattern' },
    { slug: 'dp-subset-sum', title: 'Subset Sum', explanation: 'Checking if subset sums to target using DP.', category: 'Dynamic Programming · Knapsack Pattern' },
    { slug: 'dp-target-sum', title: 'Target Sum', explanation: 'Counting ways to assign signs to reach target sum.', category: 'Dynamic Programming · Knapsack Pattern' },
    { slug: 'dp-partition-equal-subset-sum', title: 'Partition Equal Subset Sum', explanation: 'Checking if array can be partitioned into equal sums.', category: 'Dynamic Programming · Knapsack Pattern' },
    { slug: 'dp-partition-into-equal-sum-subsets', title: 'Partition into Equal Sum Subsets', explanation: 'Partitioning array into K equal sum subsets.', category: 'Dynamic Programming · Knapsack Pattern' },

    // Greedy Algorithms - Basic Greedy
    { slug: 'greedy-assign-cookies', title: 'Assign Cookies', explanation: 'Assigning cookies to children with satisfaction using greedy.', category: 'Greedy Algorithms · Basic Greedy' },
    { slug: 'greedy-lemonade-change', title: 'Lemonade Change', explanation: 'Providing change with available bills using greedy.', category: 'Greedy Algorithms · Basic Greedy' },
    { slug: 'greedy-jump-game-ii', title: 'Jump Game II', explanation: 'Minimum jumps to reach end using greedy approach.', category: 'Greedy Algorithms · Basic Greedy' },
    { slug: 'greedy-gas-station', title: 'Gas Station', explanation: 'Finding starting point for circular tour with gas constraints.', category: 'Greedy Algorithms · Basic Greedy' },
    { slug: 'greedy-boats-to-save-people', title: 'Boats to Save People', explanation: 'Minimum boats to rescue people with weight limits.', category: 'Greedy Algorithms · Basic Greedy' },

    // Greedy Algorithms - Interval Problems
    { slug: 'greedy-meeting-rooms', title: 'Meeting Rooms', explanation: 'Checking if can attend all meetings using sorting.', category: 'Greedy Algorithms · Interval Problems' },
    { slug: 'greedy-merge-intervals', title: 'Merge Intervals', explanation: 'Merging overlapping intervals using greedy sorting.', category: 'Greedy Algorithms · Interval Problems' },
    { slug: 'greedy-insert-interval', title: 'Insert Interval', explanation: 'Inserting new interval and merging with existing.', category: 'Greedy Algorithms · Interval Problems' },
    { slug: 'greedy-non-overlapping-intervals', title: 'Non-overlapping Intervals', explanation: 'Removing minimum intervals to eliminate overlaps.', category: 'Greedy Algorithms · Interval Problems' },
    { slug: 'greedy-minimum-arrows-to-burst-balloons', title: 'Minimum Arrows to Burst Balloons', explanation: 'Minimum arrows to burst all balloons using greedy.', category: 'Greedy Algorithms · Interval Problems' },

    // Greedy Algorithms - Advanced Greedy
    { slug: 'greedy-task-scheduler', title: 'Task Scheduler', explanation: 'Scheduling tasks with cooling period using greedy.', category: 'Greedy Algorithms · Advanced Greedy' },
    { slug: 'greedy-partition-labels', title: 'Partition Labels', explanation: 'Partitioning string to maximize label count.', category: 'Greedy Algorithms · Advanced Greedy' },
    { slug: 'greedy-queue-reconstruction-by-height', title: 'Queue Reconstruction by Height', explanation: 'Reconstructing queue based on height constraints.', category: 'Greedy Algorithms · Advanced Greedy' },
    { slug: 'greedy-candy-distribution', title: 'Candy Distribution', explanation: 'Distributing candies with ratings constraints.', category: 'Greedy Algorithms · Advanced Greedy' },
    { slug: 'greedy-ipo', title: 'IPO', explanation: 'Maximizing capital with project selection using greedy.', category: 'Greedy Algorithms · Advanced Greedy' },

    // Bit Manipulation - Bit Basics
    { slug: 'bit-manipulation-single-number', title: 'Single Number', explanation: 'Finding unique number using XOR bit manipulation.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-number-of-1-bits', title: 'Number of 1 Bits', explanation: 'Counting set bits in integer using bit manipulation.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-counting-bits', title: 'Counting Bits', explanation: 'Counting set bits for numbers from 0 to n.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-reverse-bits', title: 'Reverse Bits', explanation: 'Reversing bits of integer using bit manipulation.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-power-of-two', title: 'Power of Two', explanation: 'Checking if number is power of two using bit tricks.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-power-of-four', title: 'Power of Four', explanation: 'Checking if number is power of four using bit manipulation.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-single-number-ii', title: 'Single Number II', explanation: 'Finding unique number appearing once using bit manipulation.', category: 'Bit Manipulation · Bit Basics' },
    { slug: 'bit-manipulation-single-number-iii', title: 'Single Number III', explanation: 'Finding two unique numbers using bit manipulation.', category: 'Bit Manipulation · Bit Basics' },

    // Tries - Trie Applications
    { slug: 'tries-implement-trie', title: 'Implement Trie', explanation: 'Implementing trie data structure with insert, search, delete.', category: 'Tries · Trie Applications' },
    { slug: 'tries-search-suggestions-system', title: 'Search Suggestions System', explanation: 'Implementing autocomplete using trie data structure.', category: 'Tries · Trie Applications' },
    { slug: 'tries-word-search-ii', title: 'Word Search II', explanation: 'Finding words in grid using trie for optimization.', category: 'Tries · Trie Applications' },
    { slug: 'tries-design-add-search-words-data-structure', title: 'Design Add and Search Words Data Structure', explanation: 'Word dictionary with wildcard search using trie.', category: 'Tries · Trie Applications' },
    { slug: 'tries-replace-words', title: 'Replace Words', explanation: 'Replacing words in sentence with roots using trie.', category: 'Tries · Trie Applications' },

    // Advanced Topics - Segment Trees
    { slug: 'advanced-implement-segment-tree', title: 'Implement Segment Tree', explanation: 'Building segment tree for range queries and updates.', category: 'Advanced Topics · Segment Trees' },
    { slug: 'advanced-range-sum-query', title: 'Range Sum Query', explanation: 'Range sum queries using segment tree with updates.', category: 'Advanced Topics · Segment Trees' },
    { slug: 'advanced-range-minimum-query', title: 'Range Minimum Query', explanation: 'Range minimum queries using segment tree.', category: 'Advanced Topics · Segment Trees' },
    { slug: 'advanced-range-maximum-query', title: 'Range Maximum Query', explanation: 'Range maximum queries using segment tree.', category: 'Advanced Topics · Segment Trees' },
    { slug: 'advanced-lazy-propagation', title: 'Lazy Propagation', explanation: 'Efficient range updates in segment tree using lazy propagation.', category: 'Advanced Topics · Segment Trees' },

    // Advanced Topics - Union-Find (Disjoint Set)
    { slug: 'advanced-implement-union-find-path-compression', title: 'Implement Union-Find with Path Compression', explanation: 'Disjoint set data structure with path compression and union by rank.', category: 'Advanced Topics · Union-Find (Disjoint Set)' },
    { slug: 'advanced-number-of-connected-components', title: 'Number of Connected Components', explanation: 'Counting connected components in graph using Union-Find.', category: 'Advanced Topics · Union-Find (Disjoint Set)' },
    { slug: 'advanced-redundant-connection', title: 'Redundant Connection', explanation: 'Finding redundant connections in graph using Union-Find.', category: 'Advanced Topics · Union-Find (Disjoint Set)' },
    { slug: 'advanced-accounts-merge', title: 'Accounts Merge', explanation: 'Merging duplicate accounts using Union-Find.', category: 'Advanced Topics · Union-Find (Disjoint Set)' },
    { slug: 'advanced-most-stones-removed', title: 'Most Stones Removed', explanation: 'Removing stones most stones using Union-Find.', category: 'Advanced Topics · Union-Find (Disjoint Set)' },
    { slug: 'advanced-satisfiability-of-equality-equations', title: 'Satisfiability of Equality Equations', explanation: 'Checking equality equation satisfiability using Union-Find.', category: 'Advanced Topics · Union-Find (Disjoint Set)' },

    // Advanced Topics - Matrix Problems
    { slug: 'advanced-spiral-matrix', title: 'Spiral Matrix', explanation: 'Traversing matrix in spiral order.', category: 'Advanced Topics · Matrix Problems' },
    { slug: 'advanced-rotate-image', title: 'Rotate Image', explanation: 'Rotating matrix 90 degrees in-place.', category: 'Advanced Topics · Matrix Problems' },
    { slug: 'advanced-set-matrix-zeroes', title: 'Set Matrix Zeroes', explanation: 'Setting entire rows and columns to zero if element is zero.', category: 'Advanced Topics · Matrix Problems' },
    { slug: 'advanced-search-2d-matrix', title: 'Search a 2D Matrix', explanation: 'Searching in sorted 2D matrix efficiently.', category: 'Advanced Topics · Matrix Problems' },
    { slug: 'advanced-search-2d-matrix-ii', title: 'Search a 2D Matrix II', explanation: 'Searching in row-wise and column-wise sorted matrix.', category: 'Advanced Topics · Matrix Problems' },
    { slug: 'advanced-word-search', title: 'Word Search', explanation: 'Finding word in grid using DFS backtracking.', category: 'Advanced Topics · Matrix Problems' },

    // Advanced Topics - Math & Number Theory
    { slug: 'advanced-gcd-lcm', title: 'GCD and LCM', explanation: 'Greatest common divisor and least common multiple calculations.', category: 'Advanced Topics · Math & Number Theory' },
    { slug: 'advanced-prime-numbers-sieve-of-eratosthenes', title: 'Prime Numbers (Sieve of Eratosthenes)', explanation: 'Finding prime numbers using Sieve of Eratosthenes.', category: 'Advanced Topics · Math & Number Theory' },
    { slug: 'advanced-modular-arithmetic', title: 'Modular Arithmetic', explanation: 'Modular operations and arithmetic with large numbers.', category: 'Advanced Topics · Math & Number Theory' },
    { slug: 'advanced-fast-exponentiation', title: 'Fast Exponentiation', explanation: 'Efficient exponentiation using binary exponentiation.', category: 'Advanced Topics · Math & Number Theory' },
    { slug: 'advanced-factorial-combinations', title: 'Factorial and Combinations', explanation: 'Computing factorials and combinations efficiently.', category: 'Advanced Topics · Math & Number Theory' },

    // Graph Algorithms - Shortest Path Algorithms
    { slug: 'graph-algorithms-dijkstra-algorithm', title: 'Dijkstra\'s Algorithm', explanation: 'Finding shortest paths in weighted graph using Dijkstra.', category: 'Graph Algorithms · Shortest Path Algorithms' },
    { slug: 'graph-algorithms-bellman-ford-algorithm', title: 'Bellman-Ford Algorithm', explanation: 'Shortest paths with negative edge weights using Bellman-Ford.', category: 'Graph Algorithms · Shortest Path Algorithms' },
    { slug: 'graph-algorithms-floyd-warshall-algorithm', title: 'Floyd-Warshall Algorithm', explanation: 'All pairs shortest paths using Floyd-Warshall algorithm.', category: 'Graph Algorithms · Shortest Path Algorithms' },
    { slug: 'graph-algorithms-network-delay-time', title: 'Network Delay Time', explanation: 'Time for all nodes to receive signal using Dijkstra.', category: 'Graph Algorithms · Shortest Path Algorithms' },
    { slug: 'graph-algorithms-path-with-minimum-effort', title: 'Path with Minimum Effort', explanation: 'Path with minimum absolute difference using modified Dijkstra.', category: 'Graph Algorithms · Shortest Path Algorithms' },
    { slug: 'graph-algorithms-cheapest-flights-within-k-stops', title: 'Cheapest Flights Within K Stops', explanation: 'Cheapest flights with at most K stops using modified Dijkstra.', category: 'Graph Algorithms · Shortest Path Algorithms' },

    // Graph Algorithms - Minimum Spanning Tree
    { slug: 'graph-algorithms-kruskal-algorithm', title: 'Kruskal\'s Algorithm', explanation: 'Finding MST using Kruskal\'s algorithm with Union-Find.', category: 'Graph Algorithms · Minimum Spanning Tree' },
    { slug: 'graph-algorithms-prims-algorithm', title: 'Prim\'s Algorithm', explanation: 'Finding MST using Prim\'s algorithm with priority queue.', category: 'Graph Algorithms · Minimum Spanning Tree' },
    { slug: 'graph-algorithms-min-cost-connect-all-points', title: 'Min Cost to Connect All Points', explanation: 'Minimum cost to connect all points using MST.', category: 'Graph Algorithms · Minimum Spanning Tree' },
    { slug: 'graph-algorithms-connecting-cities-minimum-cost', title: 'Connecting Cities with Minimum Cost', explanation: 'Connecting cities with minimum cost using MST.', category: 'Graph Algorithms · Minimum Spanning Tree' },

    // Graph Algorithms - Advanced Graph Techniques
    { slug: 'graph-algorithms-strongly-connected-components', title: 'Strongly Connected Components (Kosaraju/Tarjan)', explanation: 'Finding SCCs using Kosaraju or Tarjan algorithms.', category: 'Graph Algorithms · Advanced Graph Techniques' },
    { slug: 'graph-algorithms-articulation-points-bridges', title: 'Articulation Points and Bridges', explanation: 'Finding critical nodes and edges in graph using DFS.', category: 'Graph Algorithms · Advanced Graph Techniques' },
    { slug: 'graph-algorithms-bipartite-graph-check', title: 'Bipartite Graph Check', explanation: 'Checking if graph is bipartite using BFS/DFS coloring.', category: 'Graph Algorithms · Advanced Graph Techniques' },
    { slug: 'graph-algorithms-maximum-bipartite-matching', title: 'Maximum Bipartite Matching', explanation: 'Finding maximum matching in bipartite graph using augmenting paths.', category: 'Graph Algorithms · Advanced Graph Techniques' },
    { slug: 'graph-algorithms-eulerian-path', title: 'Eulerian Path', explanation: 'Finding Eulerian path and circuit in graph using Hierholzer.', category: 'Graph Algorithms · Advanced Graph Techniques' },

    // String Algorithms - Pattern Matching
    { slug: 'string-algorithms-kmp-algorithm', title: 'KMP Algorithm', explanation: 'Knuth-Morris-Pratt pattern matching algorithm.', category: 'String Algorithms · Pattern Matching' },
    { slug: 'string-algorithms-rabin-karp-algorithm', title: 'Rabin-Karp Algorithm', explanation: 'Rolling hash based pattern matching algorithm.', category: 'String Algorithms · Pattern Matching' },
    { slug: 'string-algorithms-z-algorithm', title: 'Z-Algorithm', explanation: 'Linear time pattern matching using Z-array.', category: 'String Algorithms · Pattern Matching' },
    { slug: 'string-algorithms-suffix-arrays', title: 'Suffix Arrays', explanation: 'Suffix array construction and applications.', category: 'String Algorithms · Pattern Matching' },
    { slug: 'string-algorithms-longest-repeating-substring', title: 'Longest Repeating Substring', explanation: 'Finding longest repeating substring using suffix array.', category: 'String Algorithms · Pattern Matching' },

    // String Algorithms - Advanced String Problems
    { slug: 'string-algorithms-manacher-algorithm', title: 'Manacher\'s Algorithm (Longest Palindromic Substring)', explanation: 'Linear time longest palindromic substring algorithm.', category: 'String Algorithms · Advanced String Problems' },
    { slug: 'string-algorithms-longest-common-substring', title: 'Longest Common Substring', explanation: 'Finding longest common substring using suffix array.', category: 'String Algorithms · Advanced String Problems' },
    { slug: 'string-algorithms-longest-palindromic-subsequence', title: 'Longest Palindromic Subsequence', explanation: 'Finding longest palindromic subsequence using DP.', category: 'String Algorithms · Advanced String Problems' },
    { slug: 'string-algorithms-string-hashing', title: 'String Hashing', explanation: 'Rolling hash and polynomial string hashing.', category: 'String Algorithms · Advanced String Problems' },
    { slug: 'string-algorithms-rolling-hash', title: 'Rolling Hash', explanation: 'Rolling hash for efficient string comparisons.', category: 'String Algorithms · Advanced String Problems' },

    // Backtracking & Branch and Bound - Classic Backtracking
    { slug: 'backtracking-n-queens-problem', title: 'N-Queens Problem', explanation: 'Placing N queens on N×N chessboard without conflicts.', category: 'Backtracking & Branch and Bound · Classic Backtracking' },
    { slug: 'backtracking-sudoku-solver', title: 'Sudoku Solver', explanation: 'Solving Sudoku puzzle using backtracking.', category: 'Backtracking & Branch and Bound · Classic Backtracking' },
    { slug: 'backtracking-rat-in-maze', title: 'Rat in a Maze', explanation: 'Finding path for rat from start to end in maze.', category: 'Backtracking & Branch and Bound · Classic Backtracking' },
    { slug: 'backtracking-knights-tour', title: 'Knight\'s Tour', explanation: 'Finding knight path covering all chessboard squares.', category: 'Backtracking & Branch and Bound · Classic Backtracking' },
    { slug: 'backtracking-word-search', title: 'Word Search', explanation: 'Finding word in grid using backtracking DFS.', category: 'Backtracking & Branch and Bound · Classic Backtracking' },

    // Backtracking & Branch and Bound - Combinatorial Problems
    { slug: 'backtracking-generate-parentheses', title: 'Generate Parentheses', explanation: 'Generating all valid parentheses combinations.', category: 'Backtracking & Branch and Bound · Combinatorial Problems' },
    { slug: 'backtracking-combination-sum-variants', title: 'Combination Sum Variants', explanation: 'Finding combinations that sum to target with constraints.', category: 'Backtracking & Branch and Bound · Combinatorial Problems' },
    { slug: 'backtracking-permutations-combinations', title: 'Permutations and Combinations', explanation: 'Generating all permutations and combinations.', category: 'Backtracking & Branch and Bound · Combinatorial Problems' },
    { slug: 'backtracking-palindrome-partitioning', title: 'Palindrome Partitioning', explanation: 'Partitioning string into palindromic substrings.', category: 'Backtracking & Branch and Bound · Combinatorial Problems' },
    { slug: 'backtracking-restore-ip-addresses', title: 'Restore IP Addresses', explanation: 'Restoring valid IP addresses from string.', category: 'Backtracking & Branch and Bound · Combinatorial Problems' },

    // Backtracking & Branch and Bound - Game Theory & Minimax
    { slug: 'backtracking-tic-tac-toe-winner', title: 'Tic-tac-toe Winner', explanation: 'Determining tic-tac-toe winner using minimax.', category: 'Backtracking & Branch and Bound · Game Theory & Minimax' },
    { slug: 'backtracking-predict-winner', title: 'Predict the Winner', explanation: 'Predicting game winner using optimal play.', category: 'Backtracking & Branch and Bound · Game Theory & Minimax' },
    { slug: 'backtracking-stone-game', title: 'Stone Game', explanation: 'Optimal stone removal game strategy.', category: 'Backtracking & Branch and Bound · Game Theory & Minimax' },
    { slug: 'backtracking-nim-game', title: 'Nim Game', explanation: 'Winning strategy for Nim game using XOR.', category: 'Backtracking & Branch and Bound · Game Theory & Minimax' },

    // Advanced Dynamic Programming - Bitmask DP
    { slug: 'advanced-dp-traveling-salesman-problem', title: 'Traveling Salesman Problem', explanation: 'TSP using bitmask DP with optimal route finding.', category: 'Advanced Dynamic Programming · Bitmask DP' },
    { slug: 'advanced-dp-assignment-problem', title: 'Assignment Problem', explanation: 'Optimal assignment using bitmask DP.', category: 'Advanced Dynamic Programming · Bitmask DP' },
    { slug: 'advanced-dp-maximum-students-taking-exam', title: 'Maximum Students Taking Exam', explanation: 'Maximum students with no adjacent seating using bitmask DP.', category: 'Advanced Dynamic Programming · Bitmask DP' },
    { slug: 'advanced-dp-shortest-path-visiting-all-nodes', title: 'Shortest Path Visiting All Nodes', explanation: 'Shortest path visiting all nodes using bitmask DP.', category: 'Advanced Dynamic Programming · Bitmask DP' },

    // Advanced Dynamic Programming - Digit DP
    { slug: 'advanced-dp-count-numbers-unique-digits', title: 'Count Numbers with Unique Digits', explanation: 'Counting numbers with unique digits using digit DP.', category: 'Advanced Dynamic Programming · Digit DP' },
    { slug: 'advanced-dp-numbers-at-most-n-given-digit-set', title: 'Numbers at Most N Given Digit Set', explanation: 'Counting numbers with given digit set using digit DP.', category: 'Advanced Dynamic Programming · Digit DP' },
    { slug: 'advanced-dp-count-special-integers', title: 'Count Special Integers', explanation: 'Counting special integers using digit DP.', category: 'Advanced Dynamic Programming · Digit DP' },

    // Advanced Dynamic Programming - Tree DP
    { slug: 'advanced-dp-house-robber-iii', title: 'House Robber III', explanation: 'Maximum robbery in binary tree using tree DP.', category: 'Advanced Dynamic Programming · Tree DP' },
    { slug: 'advanced-dp-binary-tree-cameras', title: 'Binary Tree Cameras', explanation: 'Minimum cameras to monitor all nodes using tree DP.', category: 'Advanced Dynamic Programming · Tree DP' },
    { slug: 'advanced-dp-maximum-sum-bst-binary-tree', title: 'Maximum Sum BST in Binary Tree', explanation: 'Maximum sum BST in binary tree using tree DP.', category: 'Advanced Dynamic Programming · Tree DP' },
    { slug: 'advanced-dp-number-of-ways-rearrange-array', title: 'Number of Ways to Rearrange Array', explanation: 'Counting rearrangements using tree DP.', category: 'Advanced Dynamic Programming · Tree DP' },

    // Advanced Dynamic Programming - DP on Subsequences
    { slug: 'advanced-dp-longest-increasing-path-matrix', title: 'Longest Increasing Path in Matrix', explanation: 'Longest increasing path in matrix using DP with memoization.', category: 'Advanced Dynamic Programming · DP on Subsequences' },
    { slug: 'advanced-dp-russian-doll-envelopes', title: 'Russian Doll Envelopes', explanation: 'Maximum envelopes that can be nested using DP.', category: 'Advanced Dynamic Programming · DP on Subsequences' },
    { slug: 'advanced-dp-maximum-length-pair-chain', title: 'Maximum Length of Pair Chain', explanation: 'Longest chain of pairs using DP.', category: 'Advanced Dynamic Programming · DP on Subsequences' },
    { slug: 'advanced-dp-longest-string-chain', title: 'Longest String Chain', explanation: 'Longest possible string chain using DP.', category: 'Advanced Dynamic Programming · DP on Subsequences' },

    // Monotonic Stack & Deque - Monotonic Stack
    { slug: 'monotonic-next-greater-element-pattern', title: 'Next Greater Element Pattern', explanation: 'Finding next greater elements using monotonic stack.', category: 'Monotonic Stack & Deque · Monotonic Stack' },
    { slug: 'monotonic-previous-smaller-element', title: 'Previous Smaller Element', explanation: 'Finding previous smaller elements using monotonic stack.', category: 'Monotonic Stack & Deque · Monotonic Stack' },
    { slug: 'monotonic-stock-span-problem', title: 'Stock Span Problem', explanation: 'Stock span calculation using monotonic stack.', category: 'Monotonic Stack & Deque · Monotonic Stack' },
    { slug: 'monotonic-maximum-width', title: 'Maximum Width', explanation: 'Maximum width of ramp using monotonic stack.', category: 'Monotonic Stack & Deque · Monotonic Stack' },
    { slug: 'monotonic-sum-subarray-minimums', title: 'Sum of Subarray Minimums', explanation: 'Sum of minimums of all subarrays using monotonic stack.', category: 'Monotonic Stack & Deque · Monotonic Stack' },
    { slug: 'monotonic-sum-subarray-ranges', title: 'Sum of Subarray Ranges', explanation: 'Sum of ranges of all subarrays using monotonic stack.', category: 'Monotonic Stack & Deque · Monotonic Stack' },

    // Monotonic Stack & Deque - Monotonic Deque
    { slug: 'monotonic-sliding-window-maximum', title: 'Sliding Window Maximum', explanation: 'Maximum in each sliding window using monotonic deque.', category: 'Monotonic Stack & Deque · Monotonic Deque' },
    { slug: 'monotonic-jump-game-vi', title: 'Jump Game VI', explanation: 'Maximum score in jump game using monotonic deque.', category: 'Monotonic Stack & Deque · Monotonic Deque' },
    { slug: 'monotonic-constrained-subsequence-sum', title: 'Constrained Subsequence Sum', explanation: 'Maximum sum with constraints using monotonic deque.', category: 'Monotonic Stack & Deque · Monotonic Deque' },
    { slug: 'monotonic-shortest-subarray-sum-least-k', title: 'Shortest Subarray with Sum at Least K', explanation: 'Shortest subarray with sum at least K using monotonic deque.', category: 'Monotonic Stack & Deque · Monotonic Deque' },

    // Computational Geometry - Basic Geometry
    { slug: 'geometry-check-point-lies-line-segment', title: 'Check if Point Lies on Line Segment', explanation: 'Point-in-segment detection using geometry.', category: 'Computational Geometry · Basic Geometry' },
    { slug: 'geometry-line-intersection', title: 'Line Intersection', explanation: 'Finding intersection point of two lines.', category: 'Computational Geometry · Basic Geometry' },
    { slug: 'geometry-convex-hull-graham-scan', title: 'Convex Hull (Graham Scan)', explanation: 'Finding convex hull using Graham scan algorithm.', category: 'Computational Geometry · Basic Geometry' },
    { slug: 'geometry-closest-pair-points', title: 'Closest Pair of Points', explanation: 'Finding closest pair using divide and conquer.', category: 'Computational Geometry · Basic Geometry' },
    { slug: 'geometry-area-polygon', title: 'Area of Polygon', explanation: 'Calculating area of polygon using shoelace formula.', category: 'Computational Geometry · Basic Geometry' },

    // Computational Geometry - Sweep Line Algorithm
    { slug: 'geometry-rectangle-area', title: 'Rectangle Area', explanation: 'Total area covered by rectangles using sweep line.', category: 'Computational Geometry · Sweep Line Algorithm' },
    { slug: 'geometry-skyline-problem', title: 'Skyline Problem', explanation: 'Building skyline using sweep line algorithm.', category: 'Computational Geometry · Sweep Line Algorithm' },
    { slug: 'geometry-meeting-rooms-ii', title: 'Meeting Rooms II', explanation: 'Minimum meeting rooms using sweep line.', category: 'Computational Geometry · Sweep Line Algorithm' },
    { slug: 'geometry-my-calendar-problems', title: 'My Calendar Problems', explanation: 'Calendar booking conflicts using sweep line.', category: 'Computational Geometry · Sweep Line Algorithm' },
  ],
};
