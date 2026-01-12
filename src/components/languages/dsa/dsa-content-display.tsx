'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load topic components
const BigONotation = lazy(() => import('./topics/complexity-analysis-big-o'));
const ConstantTimeComplexity = lazy(() => import('./topics/complexity-o1-constant'));
const LogarithmicTimeComplexity = lazy(() => import('./topics/complexity-ologn-logarithmic'));
const LinearTimeComplexity = lazy(() => import('./topics/complexity-on-linear'));
const LinearithmicTimeComplexity = lazy(() => import('./topics/complexity-onlogn-linearithmic'));
const QuadraticTimeComplexity = lazy(() => import('./topics/complexity-on2-quadratic'));
const ExponentialTimeComplexity = lazy(() => import('./topics/complexity-o2n-exponential'));
const FactorialTimeComplexity = lazy(() => import('./topics/complexity-onf-factorial'));
const SquareRootTimeComplexity = lazy(() => import('./topics/complexity-osqrtn-square-root'));
const AmortizedAnalysis = lazy(() => import('./topics/complexity-amortized-analysis'));
const BestAverageWorstCase = lazy(() => import('./topics/complexity-best-average-worst'));
const MasterTheorem = lazy(() => import('./topics/complexity-master-theorem'));
const AuxiliaryVsTotalSpace = lazy(() => import('./topics/space-auxiliary-vs-total'));
const InPlaceAlgorithms = lazy(() => import('./topics/space-in-place-algorithms'));
const SpaceTimeTradeoffs = lazy(() => import('./topics/space-time-tradeoffs'));
const IterativeVsRecursiveSpace = lazy(() => import('./topics/space-iterative-vs-recursive'));
const ComparingSortingAlgorithms = lazy(() => import('./topics/analysis-comparing-sorting'));
const AnalyzingNestedLoops = lazy(() => import('./topics/analysis-nested-loops'));
const UnderstandingLogarithmicComplexity = lazy(() => import('./topics/analysis-logarithmic-complexity'));
const IdentifyingOptimalDataStructures = lazy(() => import('./topics/analysis-identifying-data-structures'));
const CommonAlgorithmicTechniques = lazy(() => import('./topics/common-algorithmic-techniques'));
const MajorityElement = lazy(() => import('./topics/arrays-majority-element'));
const MergeSortedArrays = lazy(() => import('./topics/arrays-merge-sorted-arrays'));
const FindAllDuplicates = lazy(() => import('./topics/arrays-find-all-duplicates'));
const SearchRotatedSorted = lazy(() => import('./topics/arrays-search-rotated-sorted'));
const DijkstraAlgorithm = lazy(() => import('./topics/graph-algorithms-dijkstra'));
const FindLargestSmallest = lazy(() => import('./topics/arrays-find-largest-smallest'));
const ReverseArray = lazy(() => import('./topics/arrays-reverse-array'));
const FindSecondLargest = lazy(() => import('./topics/arrays-find-second-largest'));
const RotateArrayByK = lazy(() => import('./topics/arrays-rotate-array-by-k'));
const RemoveDuplicates = lazy(() => import('./topics/arrays-remove-duplicates'));
const MoveZeros = lazy(() => import('./topics/arrays-move-zeros'));
const TwoSumSorted = lazy(() => import('./topics/arrays-two-sum-sorted'));
const ValidPalindrome = lazy(() => import('./topics/arrays-valid-palindrome'));
const ContainerWithMostWater = lazy(() => import('./topics/arrays-container-with-most-water'));
const SortZerosOnes = lazy(() => import('./topics/arrays-sort-zeros-ones'));
const MaximumSumSubarrayK = lazy(() => import('./topics/arrays-maximum-sum-subarray-k'));
const FirstNegativeWindow = lazy(() => import('./topics/arrays-first-negative-window'));
const LongestSubstringWithoutRepeating = lazy(() => import('./topics/strings-longest-substring-without-repeating'));
const MinimumWindowSubstring = lazy(() => import('./topics/strings-minimum-window-substring'));
const SubarraySumEqualsK = lazy(() => import('./topics/arrays-subarray-sum-equals-k'));
const FindPivotIndex = lazy(() => import('./topics/arrays-find-pivot-index'));
const ProductOfArrayExceptSelf = lazy(() => import('./topics/arrays-product-of-array-except-self'));
const MaximumSubarrayKadane = lazy(() => import('./topics/arrays-maximum-subarray-kadane'));
const BestTimeBuySellStock = lazy(() => import('./topics/arrays-best-time-buy-sell-stock'));
const ReverseString = lazy(() => import('./topics/strings-reverse-string'));
const CountVowelsConsonants = lazy(() => import('./topics/strings-count-vowels-consonants'));
const RemoveSpaces = lazy(() => import('./topics/strings-remove-spaces'));
const ValidAnagram = lazy(() => import('./topics/strings-valid-anagram'));
const FirstUniqueCharacter = lazy(() => import('./topics/strings-first-unique-character'));
const LongestCommonPrefix = lazy(() => import('./topics/strings-longest-common-prefix'));
const IsomorphicStrings = lazy(() => import('./topics/strings-isomorphic-strings'));
const GroupAnagrams = lazy(() => import('./topics/strings-group-anagrams'));
const ImplementStrStr = lazy(() => import('./topics/strings-implement-strstr'));
const StringCompression = lazy(() => import('./topics/strings-string-compression'));
const ValidParentheses = lazy(() => import('./topics/strings-valid-parentheses'));
const LongestPalindromicSubstring = lazy(() => import('./topics/strings-longest-palindromic-substring'));
const CreatingGraph = lazy(() => import('./topics/graphs-creating-graph'));
const DepthFirstSearch = lazy(() => import('./topics/graphs-depth-first-search'));
const BreadthFirstSearch = lazy(() => import('./topics/graphs-breadth-first-search'));
const PathExistsInGraph = lazy(() => import('./topics/graphs-path-exists'));
const NumberOfIslands = lazy(() => import('./topics/graphs-number-of-islands'));
const NumberOfProvinces = lazy(() => import('./topics/graphs-number-of-provinces'));
const NumberOfEnclaves = lazy(() => import('./topics/graphs-number-of-enclaves'));
const SurroundedRegions = lazy(() => import('./topics/graphs-surrounded-regions'));
const AllPathsSourceTarget = lazy(() => import('./topics/graphs-all-paths-source-target'));
const ArraysIntroduction = lazy(() => import('./topics/arrays-introduction'));
const ArraysTypes = lazy(() => import('./topics/arrays-types'));
const LinkedListsIntroduction = lazy(() => import('./topics/linked-lists-introduction'));
const LinkedListsTypes = lazy(() => import('./topics/linked-lists-types'));
const InsertNode = lazy(() => import('./topics/linked-lists-insert-node'));
const DeleteNode = lazy(() => import('./topics/linked-lists-delete-node'));
const DoublyDeleteNode = lazy(() => import('./topics/linked-lists-doubly-delete-node'));
const DoublyReverseList = lazy(() => import('./topics/linked-lists-doubly-reverse-list'));
const LRUCacheDesign = lazy(() => import('./topics/lru-cache-design'));
const FindMiddle = lazy(() => import('./topics/linked-lists-find-middle'));
const NthNodeFromEnd = lazy(() => import('./topics/linked-lists-nth-node-from-end'));
const SearchElement = lazy(() => import('./topics/linked-lists-search-element'));
const CountNodes = lazy(() => import('./topics/linked-lists-count-nodes'));
const ReverseList = lazy(() => import('./topics/linked-lists-reverse-list'));
const RemoveDuplicatesList = lazy(() => import('./topics/linked-lists-remove-duplicates'));
const MergeSortedLists = lazy(() => import('./topics/linked-lists-merge-sorted-lists'));
const PalindromeCheck = lazy(() => import('./topics/linked-lists-palindrome-check'));
const OddEvenList = lazy(() => import('./topics/linked-lists-odd-even'));
const DetectCycle = lazy(() => import('./topics/linked-lists-dsa-advanced-techniques-detect-cycle-in-linked-list'));
const FindCycleStart = lazy(() => import('./topics/linked-lists-dsa-advanced-techniques-find-cycle-start-point'));
const IntersectionOfTwoLinkedLists = lazy(() => import('./topics/linked-lists-dsa-advanced-techniques-intersection-of-two-linked-lists'));
const RemoveNthNodeFromEnd = lazy(() => import('./topics/linked-lists-remove-nth-node-from-end'));
const AddTwoNumbers = lazy(() => import('./topics/linked-lists-add-two-numbers'));
const WhatIsAStack = lazy(() => import('./topics/what-is-a-stack'));
const StackOperationsAndApplications = lazy(() => import('./topics/stack-operations-and-applications'));
const QueuesWhatIsAQueue = lazy(() => import('./topics/queues-what-is-a-queue'));
const QueuesTypesOfQueues = lazy(() => import('./topics/queues-types-of-queues'));
const QueuesImplementQueueUsingArrays = lazy(() => import('./topics/queues-implement-queue-using-arrays'));
const QueuesImplementCircularQueue = lazy(() => import('./topics/queues-implement-circular-queue'));
const QueuesImplementQueueUsingStacks = lazy(() => import('./topics/queues-implement-queue-using-stacks'));
const StacksImplementStackUsingQueues = lazy(() => import('./topics/stacks-implement-stack-using-queues'));
const ImplementStackUsingArrays = lazy(() => import('./topics/stacks-implement-stack-using-arrays'));
const StacksLargestRectangleInHistogram = lazy(() => import('./topics/stacks-largest-rectangle-in-histogram'));
const StacksTrappingRainWater = lazy(() => import('./topics/stacks-trapping-rain-water'));
const TwoStacksOneArray = lazy(() => import('./topics/two-stacks-one-array'));
const StacksGetMinimumO1 = lazy(() => import('./topics/stacks-get-minimum-o1'));
const StacksValidParentheses = lazy(() => import('./topics/stacks-valid-parentheses'));
const StacksScoreOfParentheses = lazy(() => import('./topics/stacks-score-of-parentheses'));
const StacksRemoveKDigits = lazy(() => import('./topics/stacks-remove-k-digits'));
const StacksRemoveOutermostParentheses = lazy(() => import('./topics/stacks-remove-outermost-parentheses'));
const StacksNextGreaterElementIII = lazy(() => import('./topics/stacks-next-greater-element-i-ii'));
const ArraysDailyTemperatures = lazy(() => import('./topics/arrays-daily-temperatures'));
const RecursionWhatIsRecursion = lazy(() => import('./topics/recursion-what-is-recursion'));
const RecursionBaseCaseRecursiveCase = lazy(() => import('./topics/recursion-base-case-recursive-case'));
const RecursionCallStackMemory = lazy(() => import('./topics/recursion-call-stack-memory'));
const RecursionWhenToUse = lazy(() => import('./topics/recursion-when-to-use'));
const RecursionPrint1ToN = lazy(() => import('./topics/recursion-print-1-to-n'));
const RecursionFactorial = lazy(() => import('./topics/recursion-factorial'));
const RecursionSumOfN = lazy(() => import('./topics/recursion-sum-of-n'));
const RecursionPowerFunction = lazy(() => import('./topics/recursion-power-function'));
const RecursionFibonacciSequence = lazy(() => import('./topics/recursion-fibonacci-sequence'));

// Map topic slugs to their components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'complexity-big-o-notation': BigONotation,
  'complexity-constant-time': ConstantTimeComplexity,
  'complexity-logarithmic-time': LogarithmicTimeComplexity,
  'complexity-linear-time': LinearTimeComplexity,
  'complexity-linearithmic-time': LinearithmicTimeComplexity,
  'complexity-quadratic-time': QuadraticTimeComplexity,
  'complexity-exponential-time': ExponentialTimeComplexity,
  'complexity-factorial-time': FactorialTimeComplexity,
  'complexity-square-root-time': SquareRootTimeComplexity,
  'complexity-amortized-analysis': AmortizedAnalysis,
  'complexity-best-average-worst': BestAverageWorstCase,
  'complexity-master-theorem': MasterTheorem,
  'complexity-auxiliary-space': AuxiliaryVsTotalSpace,
  'complexity-in-place-algorithms': InPlaceAlgorithms,
  'complexity-space-time-tradeoffs': SpaceTimeTradeoffs,
  'complexity-iterative-recursive-space': IterativeVsRecursiveSpace,
  'complexity-comparing-sorting': ComparingSortingAlgorithms,
  'complexity-analyzing-nested-loops': AnalyzingNestedLoops,
  'complexity-logarithmic-understanding': UnderstandingLogarithmicComplexity,
  'complexity-identifying-data-structures': IdentifyingOptimalDataStructures,
  'complexity-common-techniques': CommonAlgorithmicTechniques,
  'arrays-majority-element': MajorityElement,
  'arrays-merge-sorted-arrays': MergeSortedArrays,
  'arrays-find-all-duplicates': FindAllDuplicates,
  'arrays-search-rotated-sorted': SearchRotatedSorted,
  'graphs-dijkstra-shortest-path': DijkstraAlgorithm,
  'arrays-find-largest-smallest': FindLargestSmallest,
  'arrays-reverse-array': ReverseArray,
  'arrays-find-second-largest': FindSecondLargest,
  'arrays-rotate-array-by-k': RotateArrayByK,
  'arrays-remove-duplicates': RemoveDuplicates,
  'arrays-move-zeros-to-end': MoveZeros,
  'arrays-two-sum-sorted': TwoSumSorted,
  'arrays-valid-palindrome': ValidPalindrome,
  'arrays-container-with-most-water': ContainerWithMostWater,
  'arrays-sort-zeros-ones': SortZerosOnes,
  'arrays-maximum-sum-subarray-k': MaximumSumSubarrayK,
  'arrays-first-negative-window': FirstNegativeWindow,
  'arrays-longest-substring-without-repeating': LongestSubstringWithoutRepeating,
  'arrays-minimum-window-substring': MinimumWindowSubstring,
  'arrays-subarray-sum-equals-k': SubarraySumEqualsK,
  'arrays-find-pivot-index': FindPivotIndex,
  'arrays-product-except-self': ProductOfArrayExceptSelf,
  'arrays-maximum-subarray-kadane': MaximumSubarrayKadane,
  'arrays-best-time-buy-sell-stock': BestTimeBuySellStock,
  'strings-reverse-string': ReverseString,
  'strings-count-vowels-consonants': CountVowelsConsonants,
  'strings-remove-spaces': RemoveSpaces,
  'strings-valid-anagram': ValidAnagram,
  'strings-first-unique-character': FirstUniqueCharacter,
  'strings-longest-common-prefix': LongestCommonPrefix,
  'strings-isomorphic-strings': IsomorphicStrings,
  'strings-group-anagrams': GroupAnagrams,
  'strings-implement-strstr': ImplementStrStr,
  'strings-string-compression': StringCompression,
  'strings-valid-parentheses': ValidParentheses,
  'strings-longest-palindromic-substring': LongestPalindromicSubstring,
  'graphs-create-graph-adjacency-list-matrix': CreatingGraph,
  'graphs-depth-first-search-dfs': DepthFirstSearch,
  'graphs-breadth-first-search-bfs': BreadthFirstSearch,
  'graphs-find-if-path-exists': PathExistsInGraph,
  'graphs-number-of-islands': NumberOfIslands,
  'graphs-number-of-provinces': NumberOfProvinces,
  'graphs-number-of-enclaves': NumberOfEnclaves,
  'graphs-surrounded-regions': SurroundedRegions,
  'graphs-all-paths-from-source-to-target': AllPathsSourceTarget,
  'arrays-what-is-an-array': ArraysIntroduction,
  'arrays-types-of-arrays': ArraysTypes,
  'linked-lists-what-is-a-linked-list': LinkedListsIntroduction,
  'linked-lists-types-of-linked-lists': LinkedListsTypes,
  'linked-lists-insert-node': InsertNode,
  'linked-lists-delete-node': DeleteNode,
  'doubly-linked-lists-delete-node-o1': DoublyDeleteNode,
  'doubly-linked-lists-reverse-doubly-linked-list': DoublyReverseList,
  'doubly-linked-lists-lru-cache-design': LRUCacheDesign,
  'linked-lists-find-middle': FindMiddle,
  'linked-lists-nth-node-from-end': NthNodeFromEnd,
  'linked-lists-search-element': SearchElement,
  'linked-lists-count-nodes': CountNodes,
  'linked-lists-reverse-linked-list': ReverseList,
  'linked-lists-remove-duplicates-list': RemoveDuplicatesList,
  'linked-lists-merge-two-sorted-lists': MergeSortedLists,
  'linked-lists-palindrome-check': PalindromeCheck,
  'linked-lists-odd-even-linked-list': OddEvenList,
  'linked-lists-detect-cycle': DetectCycle,
  'linked-lists-find-cycle-start': FindCycleStart,
  'linked-lists-intersection-two-linked-lists': IntersectionOfTwoLinkedLists,
  'linked-lists-remove-nth-node-from-end': RemoveNthNodeFromEnd,
  'linked-lists-add-two-numbers': AddTwoNumbers,
  'stacks-what-is-a-stack': WhatIsAStack,
  'stacks-stack-operations-applications': StackOperationsAndApplications,
  'queues-what-is-a-queue': QueuesWhatIsAQueue,
  'queues-types-of-queues': QueuesTypesOfQueues,
  'queues-implement-queue-using-arrays': QueuesImplementQueueUsingArrays,
  'queues-implement-circular-queue': QueuesImplementCircularQueue,
  'queues-implement-queue-using-stacks': QueuesImplementQueueUsingStacks,
    'queues-implement-stack-using-queues': StacksImplementStackUsingQueues,
  'stacks-implement-stack-using-arrays': ImplementStackUsingArrays,
  'stacks-largest-rectangle-in-histogram': StacksLargestRectangleInHistogram,
  'stacks-trapping-rain-water': StacksTrappingRainWater,
  'stacks-implement-two-stacks-one-array': TwoStacksOneArray,
  'stacks-get-minimum-o1': StacksGetMinimumO1,
  'stacks-valid-parentheses': StacksValidParentheses,
  'stacks-score-of-parentheses': StacksScoreOfParentheses,
  'stacks-remove-k-digits': StacksRemoveKDigits,
  'stacks-remove-outermost-parentheses': StacksRemoveOutermostParentheses,
  'stacks-next-greater-element': StacksNextGreaterElementIII,
  'arrays-daily-temperatures': ArraysDailyTemperatures,
  'recursion-what-is-recursion': RecursionWhatIsRecursion,
  'recursion-base-case-recursive-case': RecursionBaseCaseRecursiveCase,
  'recursion-call-stack-memory': RecursionCallStackMemory,
  'recursion-when-to-use': RecursionWhenToUse,
  'recursion-print-1-to-n': RecursionPrint1ToN,
  'recursion-factorial': RecursionFactorial,
  'recursion-sum-numbers': RecursionSumOfN,
  'recursion-power-function': RecursionPowerFunction,
  'recursion-fibonacci-sequence': RecursionFibonacciSequence,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function DsaContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponentMap[topic.slug];

  // Debug log to verify slug matching
  if (process.env.NODE_ENV === 'development') {
    console.log('DSA Topic Slug:', topic.slug);
    console.log('Has Custom Component:', !!CustomTopicComponent);
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      {CustomTopicComponent ? (
        <Suspense fallback={<LoadingSkeleton />}>
          <CustomTopicComponent />
        </Suspense>
      ) : null}
    </GenericContentDisplay>
  );
}
