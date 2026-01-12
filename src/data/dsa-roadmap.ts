export type DsaRoadmapGroup = {
  title: string;
  items: string[];
};

export type DsaRoadmapSection = {
  slug: string;
  title: string;
  summary: string;
  groups: DsaRoadmapGroup[];
};

export const dsaRoadmapSections: DsaRoadmapSection[] = [
  {
    slug: 'complexity-analysis-dsa',
    title: '0. Time & Space Complexity Analysis',
    summary: 'Master Big O notation and analyze algorithm efficiency before diving into problems.',
    groups: [
      {
        title: 'Time Complexity',
        items: [
          'Big O notation fundamentals',
          'O(1) - Constant time complexity',
          'O(log n) - Logarithmic time complexity',
          'O(√n) - Square root time complexity',
          'O(n) - Linear time complexity',
          'O(n log n) - Linearithmic time complexity',
          'O(n²) - Quadratic time complexity',
          'O(2^n) - Exponential time complexity',
          'O(n!) - Factorial time complexity',
          'Amortized analysis',
          'Best, average, and worst case analysis',
          'Recurrence relations (Master theorem)',
        ],
      },
      {
        title: 'Space Complexity',
        items: [
          'Auxiliary space vs total space',
          'In-place algorithms',
          'Space-time tradeoffs',
          'Iterative vs recursive space complexity',
        ],
      },
      {
        title: 'Algorithm Analysis',
        items: [
          'Comparing sorting algorithms',
          'Analyzing nested loops',
          'Understanding logarithmic complexity',
          'Identifying optimal data structures',
          'Common algorithmic techniques',
        ],
      },
    ],
  },
  {
    slug: 'arrays-dsa',
    title: '1. Arrays',
    summary: 'Master foundational array patterns (two pointers, sliding window, prefix sums) before tackling advanced problems.',
    groups: [
      {
        title: 'Introduction',
        items: [
          'What is an Array?',
          'Types of Arrays',
        ],
      },
      {
        title: 'Basic Operations',
        items: [
          'Find largest/smallest element',
          'Reverse an array',
          'Find second largest element',
          'Rotate array by K positions',
          'Remove duplicates from sorted array',
          'Move zeros to end',
        ],
      },
      {
        title: 'Two Pointer Technique',
        items: [
          'Two Sum (sorted array)',
          'Valid palindrome',
          'Sort array of 0s and 1s',
          'Container with most water',
        ],
      },
      {
        title: 'Sliding Window',
        items: [
          'Maximum sum subarray of size K',
          'First negative in every window',
          'Longest substring without repeating characters',
          'Minimum window substring',
        ],
      },
      {
        title: 'Prefix Sum & Subarrays',
        items: [
          'Subarray sum equals K',
          'Find pivot index',
          'Product of array except self',
          'Maximum subarray sum (Kadane\'s algorithm)',
        ],
      },
      {
        title: 'Mixed Array Problems',
        items: [
          'Best time to buy and sell stock',
          'Majority element',
          'Merge sorted arrays',
          'Find all duplicates',
          'Search in rotated sorted array',
        ],
      },
      {
        title: 'Complete Array Problems (Interview)',
        items: [
          'Find missing number',
          'Sort colors',
          'Maximum product subarray',
          'Find duplicate number',
          'Chocolate distribution',
          'Minimum swaps to sort',
          'Largest number',
          'Rearrange array alternately',
          'Union of two arrays',
          'Maximum circular subarray',
          'Array partition',
          '4Sum problem',
          'Spiral matrix',
          'Set matrix zeroes',
          'Next permutation',
          'Find first and last position of element in sorted array',
          'Search in 2D matrix',
          'Merge intervals',
          'Non-overlapping intervals',
          'Insert interval',
          'Longest subarray with sum K',
          'Count subarrays with XOR K',
        ],
      },
    ],
  },
  {
    slug: 'strings-dsa',
    title: '2. Strings',
    summary: 'Strings frequently combine hashing, two pointers, and recursion—build muscle with these canonical tasks.',
    groups: [
      {
        title: 'Basic Operations',
        items: [
          'Reverse a string',
          'Count vowels and consonants',
          'Remove spaces from string',
        ],
      },
      {
        title: 'String Manipulation',
        items: [
          'Valid anagram',
          'First unique character',
          'Longest common prefix',
          'Isomorphic strings',
          'Group anagrams',
        ],
      },
      {
        title: 'Pattern Matching',
        items: [
          'Implement strStr()',
          'String compression',
          'Valid parentheses',
          'Longest palindromic substring',
        ],
      },
      {
        title: 'Complete String Problems (Interview)',
        items: [
          'Valid palindrome',
          'String to integer (atoi)',
          'Longest substring without repeating characters',
          'Palindromic substrings',
          'Count and say',
          'Roman to integer',
          'Integer to roman',
          'Minimum window substring',
          'Check if strings are rotations',
          'Edit distance',
          'Wildcard matching',
          'Z algorithm',
          'KMP pattern matching',
          'Remove adjacent duplicates',
          'Decode string',
          'Basic calculator II',
          'Find and replace pattern',
          'Word break',
          'Word break II',
          'Reorganize string',
          'Repeated substring pattern',
          'Multiply strings',
          'Add strings',
          'Compare version numbers',
          'Simplify path',
        ],
      },
    ],
  },
  {
    slug: 'linked-lists-dsa',
    title: '3. Linked Lists',
    summary: 'Strengthen pointer intuition across singly, doubly, and circular linked list problems.',
    groups: [
      {
        title: 'Introduction',
        items: [
          'What is a Linked List?',
          'Types of Linked Lists',
        ],
      },
      {
        title: 'Basic Operations',
        items: [
          'Insert node at beginning/end/middle',
          'Delete a node',
          'Find middle of linked list',
          'Nth node from end',
          'Search for element',
          'Count nodes',
        ],
      },
      {
        title: 'Reversal & Manipulation',
        items: [
          'Reverse a linked list',
          'Remove duplicates from sorted list',
          'Merge two sorted lists',
          'Palindrome linked list',
          'Odd even linked list',
        ],
      },
      {
        title: 'Advanced Techniques',
        items: [
          'Detect cycle in linked list',
          'Find cycle start point',
          'Intersection of two linked lists',
          'Remove Nth node from end',
          'Add two numbers (linked list representation)',
        ],
      },
      {
        title: 'Doubly Linked Lists',
        items: [
          'Delete node in O(1) time',
          'Reverse doubly linked list',
          'LRU Cache design',
        ],
      },
    ],
  },
  {
    slug: 'stacks-dsa',
    title: '4. Stacks',
    summary: 'Use stacks for expression parsing, monotonic patterns, and managing recursion manually.',
    groups: [
      {
        title: 'Introduction',
        items: [
          'What is a Stack?',
          'Stack Operations and Applications',
        ],
      },
      {
        title: 'Basic Stack Operations',
        items: [
          'Implement stack using arrays',
          'Implement two stacks in one array',
          'Get minimum element in O(1)',
        ],
      },
      {
        title: 'Parentheses Problems',
        items: [
          'Valid parentheses',
          'Score of parentheses',
          'Remove outermost parentheses',
        ],
      },
      {
        title: 'Monotonic Stack',
        items: [
          'Next greater element I & II',
          'Daily temperatures',
          'Remove K digits',
          'Largest rectangle in histogram',
          'Trapping rain water',
        ],
      },
    ],
  },
  {
    slug: 'queues-dsa',
    title: '5. Queues',
    summary: 'Understand FIFO structures plus deque-based sliding window optimizations.',
    groups: [
      {
        title: 'Introduction',
        items: [
          'What is a Queue?',
          'Types of Queues',
        ],
      },
      {
        title: 'Basic Queue Operations',
        items: [
          'Implement queue using arrays',
          'Implement circular queue',
          'Implement queue using stacks',
          'Implement stack using queues',
        ],
      },
      {
        title: 'Deque (Double-ended Queue)',
        items: [
          'Sliding window maximum',
          'First negative in every window',
          'Maximum of all subarrays of size K',
        ],
      },
    ],
  },
  {
    slug: 'recursion-dsa',
    title: '6. Recursion',
    summary: 'Anchor recursion fundamentals before layering backtracking and advanced techniques.',
    groups: [
      {
        title: 'Recursion - introduction',
        items: [
          'What is recursion?',
          'Base case and recursive case',
          'Call stack and memory',
          'When to use recursion',
        ],
      },
      {
        title: 'Basic Recursion',
        items: [
          'Print 1 to N',
          'Factorial',
          'Sum of N numbers',
          'Power function (x^n)',
          'Fibonacci sequence',
        ],
      },
      {
        title: 'Array Recursion',
        items: [
          'Sum of array elements',
          'Find maximum in array',
          'Check if array is sorted',
          'Linear search using recursion',
        ],
      },
      {
        title: 'String Recursion',
        items: [
          'Reverse a string',
          'Check palindrome',
          'Remove duplicates from string',
          'Generate all subsets',
          'Print all subsequences',
        ],
      },
      {
        title: 'Backtracking',
        items: [
          'Generate all binary strings of length N',
          'Print all permutations of string',
          'Letter combinations of phone number',
          'Subsets',
          'Combination sum',
        ],
      },
      {
        title: 'Advanced Recursion',
        items: [
          'Count ways to reach Nth stair',
          'Tower of Hanoi',
          'Josephus problem',
        ],
      },
    ],
  },
  {
    slug: 'binary-search-dsa',
    title: '7. Binary Search',
    summary: 'Binary search is more than midpoints—practice variations and searching on the answer space.',
    groups: [
      {
        title: 'Basic Binary Search',
        items: [
          'Binary search in sorted array',
          'First and last position of element',
          'Search in rotated sorted array',
          'Find peak element',
          'Search insert position',
        ],
      },
      {
        title: 'Binary Search Variations',
        items: [
          'Find smallest letter greater than target',
          'Single element in sorted array',
          'Count negative numbers in sorted matrix',
        ],
      },
      {
        title: 'Binary Search on Answer',
        items: [
          'Square root of number',
          'Kth missing positive number',
          'Capacity to ship packages within D days',
          'Koko eating bananas',
          'Magnetic force between two balls',
        ],
      },
    ],
  },
  {
    slug: 'sorting-dsa',
    title: '8. Sorting Algorithms',
    summary: 'Know how each sorting strategy behaves to unlock hybrid optimizations later.',
    groups: [
      {
        title: 'Basic Sorting',
        items: ['Bubble sort', 'Selection sort', 'Insertion sort'],
      },
      {
        title: 'Advanced Sorting',
        items: [
          'Merge sort',
          'Quick sort',
          'Count inversions in array',
          'Reverse pairs',
        ],
      },
      {
        title: 'Sorting Problems',
        items: [
          'Kth largest element',
          'Sort colors (Dutch national flag)',
          'Sort array by parity',
        ],
      },
    ],
  },
  {
    slug: 'binary-trees-dsa',
    title: '9. Binary Trees',
    summary: 'Tree problems test recursion, traversal order, and structural reasoning.',
    groups: [
      {
        title: 'Tree Traversals',
        items: [
          'Inorder traversal',
          'Preorder traversal',
          'Postorder traversal',
          'Level order traversal',
          'Zigzag level order',
          'Vertical order traversal',
        ],
      },
      {
        title: 'Tree Views',
        items: [
          'Right view of tree',
          'Left view of tree',
          'Top view of tree',
          'Bottom view of tree',
        ],
      },
      {
        title: 'Basic Tree Problems',
        items: [
          'Count total nodes',
          'Count leaf nodes',
          'Find height of tree',
          'Maximum depth of tree',
          'Minimum depth of tree',
          'Diameter of tree',
          'Balanced binary tree',
          'Symmetric tree',
          'Invert binary tree',
          'Check if two trees are identical',
          'Sum of all nodes',
        ],
      },
      {
        title: 'Path Problems',
        items: [
          'Path sum',
          'Root to leaf paths',
          'Maximum path sum',
          'Lowest common ancestor',
          'Distance between two nodes',
        ],
      },
      {
        title: 'Construction Problems',
        items: [
          'Construct tree from inorder and preorder',
          'Construct tree from inorder and postorder',
          'Flatten binary tree to linked list',
          'Serialize and deserialize binary tree',
        ],
      },
    ],
  },
  {
    slug: 'bst-dsa',
    title: '10. Binary Search Trees (BST)',
    summary: 'BSTs mix recursion, invariants, and order statistics.',
    groups: [
      {
        title: 'BST Operations',
        items: [
          'Search in BST',
          'Insert into BST',
          'Delete node in BST',
          'Validate BST',
          'Minimum and maximum in BST',
        ],
      },
      {
        title: 'BST Traversal',
        items: [
          'Kth smallest element',
          'Kth largest element',
          'Inorder successor',
          'Inorder predecessor',
        ],
      },
      {
        title: 'BST Problems',
        items: [
          'Two sum in BST',
          'Convert sorted array to BST',
          'Lowest common ancestor in BST',
          'Recover BST',
          'Range sum of BST',
        ],
      },
    ],
  },
  {
    slug: 'hashing-dsa',
    title: '11. Hashing & Hash Maps',
    summary: 'Hash maps give O(1) lookups—combine with sliding windows and prefix sums.',
    groups: [
      {
        title: 'Basic Hashing',
        items: [
          'Two sum',
          'Contains duplicate',
          'Find all duplicates',
          'Intersection of two arrays',
        ],
      },
      {
        title: 'Hash Map Applications',
        items: [
          'Group anagrams',
          'Top K frequent elements',
          'Sort characters by frequency',
          'First unique character',
          'Longest consecutive sequence',
        ],
      },
      {
        title: 'Advanced Hashing',
        items: [
          'Happy number',
          'Valid sudoku',
          'Subarray sum equals K',
          'Continuous subarray sum',
          'Longest substring without repeating characters',
        ],
      },
    ],
  },
  {
    slug: 'heaps-dsa',
    title: '12. Heaps & Priority Queues',
    summary: 'Control ordering with heaps for top-k, scheduling, and streaming problems.',
    groups: [
      {
        title: 'Basic Heap Problems',
        items: [
          'Kth largest element',
          'Kth smallest element',
          'Last stone weight',
          'Find median from data stream',
        ],
      },
      {
        title: 'Priority Queue Applications',
        items: [
          'Top K frequent elements',
          'K closest points to origin',
          'Kth largest in stream',
          'Reorganize string',
          'Task scheduler',
        ],
      },
      {
        title: 'Advanced Heap Problems',
        items: [
          'Merge K sorted lists',
          'Smallest range covering K lists',
          'Ugly number II',
        ],
      },
    ],
  },
  {
    slug: 'graphs-dsa',
    title: '13. Graphs',
    summary: 'Graphs unlock traversal, connectivity, and routing problems across domains.',
    groups: [
      {
        title: 'Graph Representation & Traversal',
        items: [
          'Create graph (adjacency list/matrix)',
          'Depth First Search (DFS)',
          'Breadth First Search (BFS)',
          'Find if path exists in graph',
        ],
      },
      {
        title: 'Connected Components',
        items: [
          'Number of islands',
          'Number of provinces',
          'Number of enclaves',
          'Surrounded regions',
        ],
      },
      {
        title: 'Graph Problems',
        items: [
          'All paths from source to target',
          'Clone graph',
          'Pacific Atlantic water flow',
          'Shortest path in binary matrix',
          'Rotting oranges',
        ],
      },
      {
        title: 'Cycle Detection & Topological Sort',
        items: [
          'Course schedule (detect cycle)',
          'Course schedule II (topological sort)',
          'Alien dictionary',
          'Minimum height trees',
        ],
      },
      {
        title: 'Advanced Graph Problems',
        items: [
          'Minimum knight moves',
          'Word ladder',
          'Open the lock',
        ],
      },
    ],
  },
  {
    slug: 'dynamic-programming-dsa',
    title: '14. Dynamic Programming',
    summary: 'Model state transitions to break exponential problems into polynomial ones.',
    groups: [
      {
        title: '1D DP',
        items: [
          'Fibonacci',
          'Climbing stairs',
          'Min cost climbing stairs',
          'House robber',
          'Jump game',
          'Decode ways',
          'Coin change',
          'Word break',
          'Longest increasing subsequence',
          'Maximum product subarray',
        ],
      },
      {
        title: '2D DP - Grid Problems',
        items: [
          'Unique paths',
          'Unique paths II',
          'Minimum path sum',
          'Maximum square',
          'Dungeon game',
        ],
      },
      {
        title: '2D DP - String Problems',
        items: [
          'Longest common subsequence',
          'Edit distance',
          'Distinct subsequences',
          'Longest palindromic subsequence',
          'Shortest common supersequence',
          'Palindromic substrings',
        ],
      },
      {
        title: 'Knapsack Pattern',
        items: [
          '0/1 knapsack',
          'Subset sum',
          'Target sum',
          'Partition equal subset sum',
          'Partition into equal sum subsets',
        ],
      },
    ],
  },
  {
    slug: 'greedy-dsa',
    title: '15. Greedy Algorithms',
    summary: 'Learn when local optimal decisions guarantee global optimal results.',
    groups: [
      {
        title: 'Basic Greedy',
        items: [
          'Assign cookies',
          'Lemonade change',
          'Jump game II',
          'Gas station',
          'Boats to save people',
        ],
      },
      {
        title: 'Interval Problems',
        items: [
          'Meeting rooms',
          'Merge intervals',
          'Insert interval',
          'Non-overlapping intervals',
          'Minimum arrows to burst balloons',
        ],
      },
      {
        title: 'Advanced Greedy',
        items: [
          'Task scheduler',
          'Partition labels',
          'Queue reconstruction by height',
          'Candy distribution',
          'IPO',
        ],
      },
    ],
  },
  {
    slug: 'bit-manipulation-dsa',
    title: '16. Bit Manipulation',
    summary: 'Use bit tricks for constant-space optimizations and parity checks.',
    groups: [
      {
        title: 'Bit Basics',
        items: [
          'Single number',
          'Number of 1 bits',
          'Counting bits',
          'Reverse bits',
          'Power of two',
          'Power of four',
          'Single number II',
          'Single number III',
        ],
      },
    ],
  },
  {
    slug: 'tries-dsa',
    title: '17. Tries',
    summary: 'Tries accelerate prefix queries and word filtering tasks.',
    groups: [
      {
        title: 'Trie Applications',
        items: [
          'Implement trie',
          'Search suggestions system',
          'Word search II',
          'Design add and search words data structure',
          'Replace words',
        ],
      },
    ],
  },
  {
    slug: 'advanced-topics-dsa',
    title: '18. Advanced Topics',
    summary: 'Round out your toolbox with range queries, DSU, and matrix patterns.',
    groups: [
      {
        title: 'Segment Trees',
        items: [
          'Implement segment tree',
          'Range sum query',
          'Range minimum query',
          'Range maximum query',
          'Lazy propagation',
        ],
      },
      {
        title: 'Union-Find (Disjoint Set)',
        items: [
          'Implement Union-Find with path compression',
          'Number of connected components',
          'Redundant connection',
          'Accounts merge',
          'Most stones removed',
          'Satisfiability of equality equations',
        ],
      },
      {
        title: 'Matrix Problems',
        items: [
          'Spiral matrix',
          'Rotate image',
          'Set matrix zeroes',
          'Search a 2D matrix',
          'Search a 2D matrix II',
          'Word search',
        ],
      },
      {
        title: 'Math & Number Theory',
        items: [
          'GCD and LCM',
          'Prime numbers (Sieve of Eratosthenes)',
          'Modular arithmetic',
          'Fast exponentiation',
          'Factorial and combinations',
        ],
      },
    ],
  },
  {
    slug: 'graph-algorithms-dsa',
    title: '19. Graph Algorithms',
    summary: 'Master advanced graph algorithms for shortest paths, MST, and network flow.',
    groups: [
      {
        title: 'Shortest Path Algorithms',
        items: [
          'Dijkstra\'s algorithm',
          'Bellman-Ford algorithm',
          'Floyd-Warshall algorithm',
          'Network delay time',
          'Path with minimum effort',
          'Cheapest flights within K stops',
        ],
      },
      {
        title: 'Minimum Spanning Tree',
        items: [
          'Kruskal\'s algorithm',
          'Prim\'s algorithm',
          'Min cost to connect all points',
          'Connecting cities with minimum cost',
        ],
      },
      {
        title: 'Advanced Graph Techniques',
        items: [
          'Strongly connected components (Kosaraju/Tarjan)',
          'Articulation points and bridges',
          'Bipartite graph check',
          'Maximum bipartite matching',
          'Eulerian path',
        ],
      },
    ],
  },
  {
    slug: 'string-algorithms-dsa',
    title: '20. String Algorithms',
    summary: 'Advanced string matching and manipulation techniques.',
    groups: [
      {
        title: 'Pattern Matching',
        items: [
          'KMP algorithm',
          'Rabin-Karp algorithm',
          'Z-algorithm',
          'Suffix arrays',
          'Longest repeating substring',
        ],
      },
      {
        title: 'Advanced String Problems',
        items: [
          'Manacher\'s algorithm (longest palindromic substring)',
          'Longest common substring',
          'Longest palindromic subsequence',
          'String hashing',
          'Rolling hash',
        ],
      },
    ],
  },
  {
    slug: 'backtracking-dsa',
    title: '21. Backtracking & Branch and Bound',
    summary: 'Systematic search through solution spaces with pruning.',
    groups: [
      {
        title: 'Classic Backtracking',
        items: [
          'N-Queens problem',
          'Sudoku solver',
          'Rat in a maze',
          'Knight\'s tour',
          'Word search',
        ],
      },
      {
        title: 'Combinatorial Problems',
        items: [
          'Generate parentheses',
          'Combination sum variants',
          'Permutations and combinations',
          'Palindrome partitioning',
          'Restore IP addresses',
        ],
      },
      {
        title: 'Game Theory & Minimax',
        items: [
          'Tic-tac-toe winner',
          'Predict the winner',
          'Stone game',
          'Nim game',
        ],
      },
    ],
  },
  {
    slug: 'advanced-dp-dsa',
    title: '22. Advanced Dynamic Programming',
    summary: 'Complex DP patterns including bitmask, digit, and tree DP.',
    groups: [
      {
        title: 'Bitmask DP',
        items: [
          'Traveling salesman problem',
          'Assignment problem',
          'Maximum students taking exam',
          'Shortest path visiting all nodes',
        ],
      },
      {
        title: 'Digit DP',
        items: [
          'Count numbers with unique digits',
          'Numbers at most N given digit set',
          'Count special integers',
        ],
      },
      {
        title: 'Tree DP',
        items: [
          'House robber III',
          'Binary tree cameras',
          'Maximum sum BST in binary tree',
          'Number of ways to reorder array',
        ],
      },
      {
        title: 'DP on Subsequences',
        items: [
          'Longest increasing path in matrix',
          'Russian doll envelopes',
          'Maximum length of pair chain',
          'Longest string chain',
        ],
      },
    ],
  },
  {
    slug: 'monotonic-structures-dsa',
    title: '23. Monotonic Stack & Deque',
    summary: 'Master monotonic data structures for optimization problems.',
    groups: [
      {
        title: 'Monotonic Stack',
        items: [
          'Next greater element pattern',
          'Previous smaller element',
          'Stock span problem',
          'Maximum width ramp',
          'Sum of subarray minimums',
          'Sum of subarray ranges',
        ],
      },
      {
        title: 'Monotonic Deque',
        items: [
          'Sliding window maximum',
          'Jump game VI',
          'Constrained subsequence sum',
          'Shortest subarray with sum at least K',
        ],
      },
    ],
  },
  {
    slug: 'computational-geometry-dsa',
    title: '24. Computational Geometry',
    summary: 'Geometric algorithms for 2D problems.',
    groups: [
      {
        title: 'Basic Geometry',
        items: [
          'Check if point lies on line segment',
          'Line intersection',
          'Convex hull (Graham scan)',
          'Closest pair of points',
          'Area of polygon',
        ],
      },
      {
        title: 'Sweep Line Algorithm',
        items: [
          'Rectangle area',
          'Skyline problem',
          'Meeting rooms II',
          'My calendar problems',
        ],
      },
    ],
  },
];

export const dsaCategoryOrder = [
  '0. Getting Started',
  '1. Complexity Analysis · Time Complexity',
  '1. Complexity Analysis · Space Complexity',
  '1. Complexity Analysis · Algorithm Analysis',
  '2. Arrays · Introduction',
  '2. Arrays · Basic Operations',
  '2. Arrays · Two Pointer Technique',
  '2. Arrays · Sliding Window',
  '2. Arrays · Prefix Sum & Subarrays',
  '2. Arrays · Mixed Array Problems',
  '2. Arrays · Complete Array Problems (Interview)',
  '3. Strings · Basic Operations',
  '3. Strings · String Manipulation',
  '3. Strings · Pattern Matching',
  '3. Strings · Complete String Problems (Interview)',
  '4. Linked Lists · Introduction',
  '4. Linked Lists · Basic Operations',
  '4. Linked Lists · Reversal & Manipulation',
  '4. Linked Lists · Advanced Techniques',
  '4. Linked Lists · Doubly Linked Lists',
  '5. Stacks · Introduction',
  '5. Stacks · Basic Stack Operations',
  '5. Stacks · Parentheses Problems',
  '5. Stacks · Monotonic Stack',
  '6. Queues · Introduction',
  '6. Queues · Basic Queue Operations',
  '6. Queues · Deque (Double-ended Queue)',
  '7. Recursion · Recursion - introduction',
  '7. Recursion · Basic Recursion',
  '7. Recursion · Array Recursion',
  '7. Recursion · String Recursion',
  '7. Recursion · Backtracking',
  '7. Recursion · Advanced Recursion',
  '8. Binary Search · Basic Binary Search',
  '8. Binary Search · Binary Search Variations',
  '8. Binary Search · Binary Search on Answer',
  '9. Sorting Algorithms · Basic Sorting',
  '9. Sorting Algorithms · Advanced Sorting',
  '9. Sorting Algorithms · Sorting Problems',
  '10. Binary Trees · Tree Traversals',
  '10. Binary Trees · Tree Views',
  '10. Binary Trees · Basic Tree Problems',
  '10. Binary Trees · Path Problems',
  '10. Binary Trees · Construction Problems',
  '11. Binary Search Trees · BST Operations',
  '11. Binary Search Trees · BST Traversal',
  '11. Binary Search Trees · BST Problems',
  '12. Hashing & Hash Maps · Basic Hashing',
  '12. Hashing & Hash Maps · Hash Map Applications',
  '12. Hashing & Hash Maps · Advanced Hashing',
  '13. Heaps & Priority Queues · Basic Heap Problems',
  '13. Heaps & Priority Queues · Priority Queue Applications',
  '13. Heaps & Priority Queues · Advanced Heap Problems',
  '14. Graphs · Graph Representation & Traversal',
  '14. Graphs · Connected Components',
  '14. Graphs · Graph Problems',
  '14. Graphs · Cycle Detection & Topological Sort',
  '14. Graphs · Advanced Graph Problems',
  '15. Dynamic Programming · 1D DP',
  '15. Dynamic Programming · 2D DP - Grid Problems',
  '15. Dynamic Programming · 2D DP - String Problems',
  '15. Dynamic Programming · Knapsack Pattern',
  '16. Greedy Algorithms · Basic Greedy',
  '16. Greedy Algorithms · Interval Problems',
  '16. Greedy Algorithms · Advanced Greedy',
  '17. Bit Manipulation · Bit Basics',
  '18. Tries · Trie Applications',
  '19. Advanced Topics · Segment Trees',
  '19. Advanced Topics · Union-Find (Disjoint Set)',
  '19. Advanced Topics · Matrix Problems',
  '19. Advanced Topics · Math & Number Theory',
  '20. Graph Algorithms · Shortest Path Algorithms',
  '20. Graph Algorithms · Minimum Spanning Tree',
  '20. Graph Algorithms · Advanced Graph Techniques',
  '21. String Algorithms · Pattern Matching',
  '21. String Algorithms · Advanced String Problems',
  '22. Backtracking & Branch and Bound · Classic Backtracking',
  '22. Backtracking & Branch and Bound · Combinatorial Problems',
  '22. Backtracking & Branch and Bound · Game Theory & Minimax',
  '23. Advanced Dynamic Programming · Bitmask DP',
  '23. Advanced Dynamic Programming · Digit DP',
  '23. Advanced Dynamic Programming · Tree DP',
  '23. Advanced Dynamic Programming · DP on Subsequences',
  '24. Monotonic Stack & Deque · Monotonic Stack',
  '24. Monotonic Stack & Deque · Monotonic Deque',
  '25. Computational Geometry · Basic Geometry',
  '25. Computational Geometry · Sweep Line Algorithm',
];
