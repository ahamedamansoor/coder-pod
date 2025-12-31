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

// Map topic slugs to their components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'complexity-analysis-dsa-time-complexity-big-o-notation-fundamentals': BigONotation,
  'complexity-analysis-dsa-time-complexity-o-1-constant-time-complexity': ConstantTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-log-n-logarithmic-time-complexity': LogarithmicTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-n-linear-time-complexity': LinearTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-n-log-n-linearithmic-time-complexity': LinearithmicTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-n-quadratic-time-complexity': QuadraticTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-2-n-exponential-time-complexity': ExponentialTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-n-factorial-time-complexity': FactorialTimeComplexity,
  'complexity-analysis-dsa-time-complexity-o-n-square-root-time-complexity': SquareRootTimeComplexity,
  'complexity-analysis-dsa-time-complexity-amortized-analysis': AmortizedAnalysis,
  'complexity-analysis-dsa-time-complexity-best-average-and-worst-case-analysis': BestAverageWorstCase,
  'complexity-analysis-dsa-time-complexity-recurrence-relations-master-theorem': MasterTheorem,
  'complexity-analysis-dsa-space-complexity-auxiliary-space-vs-total-space': AuxiliaryVsTotalSpace,
  'complexity-analysis-dsa-space-complexity-in-place-algorithms': InPlaceAlgorithms,
  'complexity-analysis-dsa-space-complexity-space-time-tradeoffs': SpaceTimeTradeoffs,
  'complexity-analysis-dsa-space-complexity-iterative-vs-recursive-space-complexity': IterativeVsRecursiveSpace,
  'complexity-analysis-dsa-algorithm-analysis-comparing-sorting-algorithms': ComparingSortingAlgorithms,
  'complexity-analysis-dsa-algorithm-analysis-analyzing-nested-loops': AnalyzingNestedLoops,
  'complexity-analysis-dsa-algorithm-analysis-understanding-logarithmic-complexity': UnderstandingLogarithmicComplexity,
  'complexity-analysis-dsa-algorithm-analysis-identifying-optimal-data-structures': IdentifyingOptimalDataStructures,
  'complexity-analysis-dsa-algorithm-analysis-common-algorithmic-techniques': CommonAlgorithmicTechniques,
  'arrays-dsa-mixed-array-problems-majority-element': MajorityElement,
  'arrays-dsa-mixed-array-problems-merge-sorted-arrays': MergeSortedArrays,
  'arrays-dsa-mixed-array-problems-find-all-duplicates': FindAllDuplicates,
  'arrays-dsa-mixed-array-problems-search-in-rotated-sorted-array': SearchRotatedSorted,
  'graph-algorithms-dsa-shortest-path-algorithms-dijkstra-s-algorithm': DijkstraAlgorithm,
  'arrays-dsa-basic-operations-find-largest-smallest-element': FindLargestSmallest,
  'arrays-dsa-basic-operations-reverse-an-array': ReverseArray,
  'arrays-dsa-basic-operations-find-second-largest-element': FindSecondLargest,
  'arrays-dsa-basic-operations-rotate-array-by-k-positions': RotateArrayByK,
  'arrays-dsa-basic-operations-remove-duplicates-from-sorted-array': RemoveDuplicates,
  'arrays-dsa-basic-operations-move-zeros-to-end': MoveZeros,
  'arrays-dsa-two-pointer-technique-two-sum-sorted-array': TwoSumSorted,
  'arrays-dsa-two-pointer-technique-valid-palindrome': ValidPalindrome,
  'arrays-dsa-two-pointer-technique-container-with-most-water': ContainerWithMostWater,
  'arrays-dsa-two-pointer-technique-sort-array-of-0s-and-1s': SortZerosOnes,
  'arrays-dsa-sliding-window-maximum-sum-subarray-of-size-k': MaximumSumSubarrayK,
  'arrays-dsa-sliding-window-first-negative-in-every-window': FirstNegativeWindow,
  'arrays-dsa-sliding-window-longest-substring-without-repeating-characters': LongestSubstringWithoutRepeating,
  'arrays-dsa-sliding-window-minimum-window-substring': MinimumWindowSubstring,
  'arrays-dsa-prefix-sum-subarrays-subarray-sum-equals-k': SubarraySumEqualsK,
  'arrays-dsa-prefix-sum-subarrays-find-pivot-index': FindPivotIndex,
  'arrays-dsa-prefix-sum-subarrays-product-of-array-except-self': ProductOfArrayExceptSelf,
  'arrays-dsa-prefix-sum-subarrays-maximum-subarray-sum-kadane-s-algorithm': MaximumSubarrayKadane,
  'arrays-dsa-mixed-array-problems-best-time-to-buy-and-sell-stock': BestTimeBuySellStock,
  'strings-dsa-basic-operations-reverse-a-string': ReverseString,
  'strings-dsa-basic-operations-count-vowels-and-consonants': CountVowelsConsonants,
  'strings-dsa-basic-operations-remove-spaces-from-string': RemoveSpaces,
  'strings-dsa-string-manipulation-valid-anagram': ValidAnagram,
  'strings-dsa-string-manipulation-first-unique-character': FirstUniqueCharacter,
  'strings-dsa-string-manipulation-longest-common-prefix': LongestCommonPrefix,
  'strings-dsa-string-manipulation-isomorphic-strings': IsomorphicStrings,
  'strings-dsa-string-manipulation-group-anagrams': GroupAnagrams,
  'strings-dsa-pattern-matching-implement-strstr': ImplementStrStr,
  'strings-dsa-pattern-matching-string-compression': StringCompression,
  'strings-dsa-pattern-matching-valid-parentheses': ValidParentheses,
  'strings-dsa-pattern-matching-longest-palindromic-substring': LongestPalindromicSubstring,
  'graphs-dsa-graph-representation-traversal-create-graph-adjacency-list-matrix': CreatingGraph,
  'graphs-dsa-graph-representation-traversal-depth-first-search-dfs': DepthFirstSearch,
  'graphs-dsa-graph-representation-traversal-breadth-first-search-bfs': BreadthFirstSearch,
  'graphs-dsa-graph-representation-traversal-find-if-path-exists-in-graph': PathExistsInGraph,
  'graphs-dsa-connected-components-number-of-islands': NumberOfIslands,
  'graphs-dsa-connected-components-number-of-provinces': NumberOfProvinces,
  'graphs-dsa-connected-components-number-of-enclaves': NumberOfEnclaves,
  'graphs-dsa-connected-components-surrounded-regions': SurroundedRegions,
  'graphs-dsa-graph-problems-all-paths-from-source-to-target': AllPathsSourceTarget,
  'arrays-dsa-introduction-what-is-an-array': ArraysIntroduction,
  'arrays-dsa-introduction-types-of-arrays': ArraysTypes,
  'linked-lists-dsa-introduction-what-is-a-linked-list': LinkedListsIntroduction,
  'linked-lists-dsa-introduction-types-of-linked-lists': LinkedListsTypes,
  'linked-lists-dsa-basic-operations-insert-node-at-beginning-end-middle': InsertNode,
  'linked-lists-dsa-basic-operations-delete-a-node': DeleteNode,
  'linked-lists-dsa-doubly-linked-lists-delete-node-in-o-1-time': DoublyDeleteNode,
  'linked-lists-dsa-doubly-linked-lists-reverse-doubly-linked-list': DoublyReverseList,
  'linked-lists-dsa-doubly-linked-lists-lru-cache-design': LRUCacheDesign,
  'linked-lists-dsa-basic-operations-find-middle-of-linked-list': FindMiddle,
  'linked-lists-dsa-basic-operations-nth-node-from-end': NthNodeFromEnd,
  'linked-lists-dsa-basic-operations-search-for-element': SearchElement,
  'linked-lists-dsa-basic-operations-count-nodes': CountNodes,
  'linked-lists-dsa-reversal-manipulation-reverse-a-linked-list': ReverseList,
  'linked-lists-dsa-reversal-manipulation-remove-duplicates-from-sorted-list': RemoveDuplicatesList,
  'linked-lists-dsa-reversal-manipulation-merge-two-sorted-lists': MergeSortedLists,
  'linked-lists-dsa-reversal-manipulation-palindrome-linked-list': PalindromeCheck,
  'linked-lists-dsa-reversal-manipulation-odd-even-linked-list': OddEvenList,
  'linked-lists-dsa-advanced-techniques-detect-cycle-in-linked-list': DetectCycle,
  'linked-lists-dsa-advanced-techniques-find-cycle-start-point': FindCycleStart,
  'linked-lists-dsa-advanced-techniques-intersection-of-two-linked-lists': IntersectionOfTwoLinkedLists,
  'linked-lists-dsa-advanced-techniques-remove-nth-node-from-end': RemoveNthNodeFromEnd,
  'linked-lists-dsa-advanced-techniques-add-two-numbers-linked-list-representation': AddTwoNumbers,
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
