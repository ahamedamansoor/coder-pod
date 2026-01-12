'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load topic components
const JavaScriptWhatIsJavaScript = lazy(() => import('./topics/javascript-what-is-javascript'));
const JavaScriptInstallationSetup = lazy(() => import('./topics/javascript-installation-setup'));
const JavaScriptFirstProgram = lazy(() => import('./topics/javascript-first-program'));
const JavaScriptInHtml = lazy(() => import('./topics/javascript-in-html'));
const JavaScriptVariablesConstants = lazy(() => import('./topics/javascript-variables-constants'));
const JavaScriptDataTypes = lazy(() => import('./topics/javascript-data-types'));
const JavaScriptComments = lazy(() => import('./topics/javascript-comments'));
const JavaScriptConsoleMethods = lazy(() => import('./topics/javascript-console-methods'));
const JavaScriptOperators = lazy(() => import('./topics/javascript-operators'));
const JavaScriptTernaryOperator = lazy(() => import('./topics/javascript-ternary-operator'));
const JavaScriptIfElse = lazy(() => import('./topics/javascript-if-else'));
const JavaScriptSwitchStatements = lazy(() => import('./topics/javascript-switch-statements'));
const JavaScriptLoops = lazy(() => import('./topics/javascript-loops'));
const JavaScriptFunctions = lazy(() => import('./topics/javascript-functions'));
const JavaScriptArrowFunctions = lazy(() => import('./topics/javascript-arrow-functions'));
const JavaScriptFunctionParameters = lazy(() => import('./topics/javascript-function-parameters'));
const JavaScriptCallbackParameters = lazy(() => import('./topics/javascript-callback-parameters'));
const JavaScriptHigherOrderFunctions = lazy(() => import('./topics/javascript-higher-order-functions'));
const JavaScriptIife = lazy(() => import('./topics/javascript-iife'));
const JavaScriptArrays = lazy(() => import('./topics/javascript-arrays'));
const JavaScriptArrayMethodsBasics = lazy(() => import('./topics/javascript-array-methods'));
const JavaScriptArrayIterationMethods = lazy(() => import('./topics/javascript-array-iteration-methods'));
const JavaScriptArrayDestructuring = lazy(() => import('./topics/javascript-array-destructuring'));
const JavaScriptObjects = lazy(() => import('./topics/javascript-objects'));
const JavaScriptObjectMethods = lazy(() => import('./topics/javascript-object-methods'));
const JavaScriptGettersSetters = lazy(() => import('./topics/javascript-getters-setters'));
const JavaScriptPrivateFields = lazy(() => import('./topics/javascript-private-fields'));
const JavaScriptObjectDestructuring = lazy(() => import('./topics/javascript-object-destructuring'));
const JavaScriptThisKeyword = lazy(() => import('./topics/javascript-this-keyword'));
const JavaScriptStrings = lazy(() => import('./topics/javascript-strings'));
const JavaScriptStringMethods = lazy(() => import('./topics/javascript-string-methods'));
const JavaScriptRegularExpressions = lazy(() => import('./topics/javascript-regular-expressions'));
const JavaScriptScope = lazy(() => import('./topics/javascript-scope'));
const JavaScriptClosures = lazy(() => import('./topics/javascript-closures'));
const JavaScriptHoisting = lazy(() => import('./topics/javascript-hoisting'));
const JavaScriptConstructorFunctions = lazy(() => import('./topics/javascript-constructor-functions'));
const JavaScriptPrototypes = lazy(() => import('./topics/javascript-prototypes'));
const JavaScriptES6Classes = lazy(() => import('./topics/javascript-es6-classes'));
const JavaScriptClassInheritance = lazy(() => import('./topics/javascript-class-inheritance'));
const JavaScriptStaticMethods = lazy(() => import('./topics/javascript-static-methods'));
const JavaScriptJsAsync = lazy(() => import('./topics/javascript-js-async'));
const JavaScriptCallbacks = lazy(() => import('./topics/javascript-callbacks'));
const JavaScriptPromises = lazy(() => import('./topics/javascript-promises'));
const JavaScriptPromiseMethods = lazy(() => import('./topics/javascript-promise-methods'));
const JavaScriptAsyncAwait = lazy(() => import('./topics/javascript-async-await'));
const JavaScriptAsyncErrorHandling = lazy(() => import('./topics/javascript-async-error-handling'));
const JavaScriptCallStack = lazy(() => import('./topics/javascript-call-stack'));
const JavaScriptEventLoop = lazy(() => import('./topics/javascript-event-loop'));
const JavaScriptTaskQueue = lazy(() => import('./topics/javascript-task-queue'));
const JavaScriptWhatIsDOM = lazy(() => import('./topics/javascript-what-is-dom'));
const JavaScriptSelectingElements = lazy(() => import('./topics/javascript-selecting-elements-new'));
const JavaScriptDOMManipulation = lazy(() => import('./topics/javascript-dom-manipulation-new'));
const JavaScriptElementAttributes = lazy(() => import('./topics/javascript-element-attributes-new'));
const JavaScriptDOMStyles = lazy(() => import('./topics/javascript-dom-styles-new'));
const JavaScriptEvents = lazy(() => import('./topics/javascript-events-new'));
const JavaScriptEventTypes = lazy(() => import('./topics/javascript-event-types-new'));
const JavaScriptEventObject = lazy(() => import('./topics/javascript-event-object-new'));
const JavaScriptEventPropagation = lazy(() => import('./topics/javascript-event-propagation-new'));
const JavaScriptPreventDefault = lazy(() => import('./topics/javascript-prevent-default-new'));
const JavaScriptFormHandling = lazy(() => import('./topics/javascript-form-handling-new'));
const JavaScriptFormValidation = lazy(() => import('./topics/javascript-form-validation-new'));
const JavaScriptFormDataApi = lazy(() => import('./topics/javascript-formdata-api-new'));
const JavaScriptES6Overview = lazy(() => import('./topics/javascript-es6-overview-new'));
const JavaScriptDestructuring = lazy(() => import('./topics/javascript-destructuring'));
const JavaScriptSpreadRest = lazy(() => import('./topics/javascript-spread-rest'));
const JavaScriptDefaultParameters = lazy(() => import('./topics/javascript-default-parameters-new'));
const JavaScriptEnhancedObjectLiterals = lazy(() => import('./topics/javascript-enhanced-object-literals-new'));
const JavaScriptTemplateLiterals = lazy(() => import('./topics/javascript-template-literals-new'));
const JavaScriptForOfLoops = lazy(() => import('./topics/javascript-for-of-loops-new'));
const JavaScriptModules = lazy(() => import('./topics/javascript-modules-new'));
const JavaScriptSymbols = lazy(() => import('./topics/javascript-symbols-new'));
const JavaScriptIterators = lazy(() => import('./topics/javascript-iterators-new'));
const JavaScriptGenerators = lazy(() => import('./topics/javascript-generators-new'));
const JavaScriptProxyReflect = lazy(() => import('./topics/javascript-proxy-reflect-new'));
const JavaScriptReflectAPI = lazy(() => import('./topics/javascript-reflect-api'));
const JavaScriptDesignPatterns = lazy(() => import('./topics/javascript-design-patterns-new'));
const JavaScriptFunctionalProgramming = lazy(() => import('./topics/javascript-functional-programming-new'));
const JavaScriptCurrying = lazy(() => import('./topics/javascript-currying-new'));
const JavaScriptComposition = lazy(() => import('./topics/javascript-composition-new'));
const JavaScriptRecursion = lazy(() => import('./topics/javascript-recursion-new'));
const JavaScriptMemoization = lazy(() => import('./topics/javascript-memoization-new'));
const JavaScriptErrorHandling = lazy(() => import('./topics/javascript-error-handling-new'));
const JavaScriptDebugging = lazy(() => import('./topics/javascript-debugging-new'));
const JavaScriptPerformanceMonitoring = lazy(() => import('./topics/javascript-performance-monitoring-new'));
const JavaScriptLighthouse = lazy(() => import('./topics/javascript-lighthouse-new'));
const JavaScriptCallStackNew = lazy(() => import('./topics/javascript-call-stack-new'));
const JavaScriptProfiling = lazy(() => import('./topics/javascript-profiling-new'));
const JavaScriptMemoryLeaks = lazy(() => import('./topics/javascript-memory-leaks-new'));
const JavaScriptGarbageCollection = lazy(() => import('./topics/javascript-garbage-collection-new'));
const JavaScriptMemoryManagement = lazy(() => import('./topics/javascript-memory-management'));
const JavaScriptDebounceThrottle = lazy(() => import('./topics/javascript-debounce-throttle'));
const JavaScriptLazyLoading = lazy(() => import('./topics/javascript-lazy-loading'));
const JavaScriptWebWorkers = lazy(() => import('./topics/javascript-web-workers'));
const JavaScriptPerformanceOptimization = lazy(() => import('./topics/javascript-performance-optimization'));
const JavaScriptWeakMapWeakSet = lazy(() => import('./topics/javascript-weakmap-weakset'));
const JavaScriptPropertyAccess = lazy(() => import('./topics/javascript-property-access'));
const JavaScriptEvalFunctionConstructor = lazy(() => import('./topics/javascript-eval-function-constructor'));
const JavaScriptUnitTesting = lazy(() => import('./topics/javascript-unit-testing'));
const JavaScriptJest = lazy(() => import('./topics/javascript-jest'));
const JavaScriptVitest = lazy(() => import('./topics/javascript-vitest'));
const JavaScriptTDD = lazy(() => import('./topics/javascript-tdd'));
const JavaScriptMockingSpies = lazy(() => import('./topics/javascript-mocking-spies'));
const JavaScriptE2ETesting = lazy(() => import('./topics/javascript-e2e-testing'));
const JavaScriptTestingBestPractices = lazy(() => import('./topics/javascript-testing-best-practices'));
const JavaScriptXSSPrevention = lazy(() => import('./topics/javascript-xss-prevention'));
const JavaScriptCSRFProtection = lazy(() => import('./topics/javascript-csrf-protection'));
const JavaScriptCSP = lazy(() => import('./topics/javascript-csp'));
const JavaScriptInputSanitization = lazy(() => import('./topics/javascript-input-sanitization'));
const JavaScriptSecureCoding = lazy(() => import('./topics/javascript-secure-coding'));
const JavaScriptCodeSplitting = lazy(() => import('./topics/javascript-code-splitting'));
const JavaScriptTreeShaking = lazy(() => import('./topics/javascript-tree-shaking'));
const JavaScriptCleanCode = lazy(() => import('./topics/javascript-clean-code'));
const JavaScriptSOLIDPrinciples = lazy(() => import('./topics/javascript-solid-principles'));
const JavaScriptNpmYarn = lazy(() => import('./topics/javascript-npm-yarn'));
const JavaScriptPackageJson = lazy(() => import('./topics/javascript-package-json'));
const JavaScriptWebpack = lazy(() => import('./topics/javascript-webpack'));
const JavaScriptVite = lazy(() => import('./topics/javascript-vite'));
const JavaScriptBabel = lazy(() => import('./topics/javascript-babel'));
const JavaScriptESLint = lazy(() => import('./topics/javascript-eslint'));
const JavaScriptPrettier = lazy(() => import('./topics/javascript-prettier'));
const JavaScriptBrowserVsNodeJS = lazy(() => import('./topics/javascript-browser-vs-nodejs'));
const JavaScriptJSEngine = lazy(() => import('./topics/javascript-js-engine'));
const JavaScriptRuntimeAPIs = lazy(() => import('./topics/javascript-runtime-apis'));
const JavaScriptCommonJSvsESModules = lazy(() => import('./topics/javascript-commonjs-vs-esmodules'));
const JavaScriptAbortController = lazy(() => import('./topics/javascript-abort-controller'));
const JavaScriptHistoryAPI = lazy(() => import('./topics/javascript-history-api'));
const JavaScriptURLAPI = lazy(() => import('./topics/javascript-url-api'));
const JavaScriptClipboardAPI = lazy(() => import('./topics/javascript-clipboard-api'));
const JavaScriptFileAPI = lazy(() => import('./topics/javascript-file-api'));
const JavaScriptDragDropAPI = lazy(() => import('./topics/javascript-drag-drop-api'));
const JavaScriptFullscreenAPI = lazy(() => import('./topics/javascript-fullscreen-api'));
const JavaScriptPageVisibilityAPI = lazy(() => import('./topics/javascript-page-visibility-api'));
const JavaScriptBatteryStatusAPI = lazy(() => import('./topics/javascript-battery-status-api'));
const JavaScriptNetworkInfoAPI = lazy(() => import('./topics/javascript-network-info-api'));
const JavaScriptMediaQueryAPI = lazy(() => import('./topics/javascript-media-query-api'));
const JavaScriptResizeObserver = lazy(() => import('./topics/javascript-resize-observer'));
const JavaScriptPerformanceAPI = lazy(() => import('./topics/javascript-performance-api'));
const JavaScriptRequestAnimationFrame = lazy(() => import('./topics/javascript-request-animation-frame'));
const JavaScriptRequestIdleCallback = lazy(() => import('./topics/javascript-request-idle-callback'));
const JavaScriptAsyncIteratorsGenerators = lazy(() => import('./topics/javascript-async-iterators-generators'));
const JavaScriptMicrotasksMacrotasks = lazy(() => import('./topics/javascript-microtasks-macrotasks'));
const JavaScriptIntl = lazy(() => import('./topics/javascript-intl'));
const JavaScriptIntlDateTimeFormat = lazy(() => import('./topics/javascript-intl-datetimeformat'));
const JavaScriptIntlNumberFormat = lazy(() => import('./topics/javascript-intl-numberformat'));
const JavaScriptIntlCollator = lazy(() => import('./topics/javascript-intl-collator'));
const JavaScriptIntlPluralRules = lazy(() => import('./topics/javascript-intl-pluralrules'));
const JavaScriptJSON = lazy(() => import('./topics/javascript-json'));
const JavaScriptJSONParse = lazy(() => import('./topics/javascript-json-parse'));
const JavaScriptJSONStringify = lazy(() => import('./topics/javascript-json-stringify'));
const JavaScriptJSONReplacerReviver = lazy(() => import('./topics/javascript-json-replacer-reviver'));
const JavaScriptMathObject = lazy(() => import('./topics/javascript-math-object'));
const JavaScriptNumberMethods = lazy(() => import('./topics/javascript-number-methods'));
const JavaScriptMathRandom = lazy(() => import('./topics/javascript-math-random'));
const JavaScriptDateObject = lazy(() => import('./topics/javascript-date-object'));
const JavaScriptDateMethods = lazy(() => import('./topics/javascript-date-methods'));
const JavaScriptDateFormatting = lazy(() => import('./topics/javascript-date-formatting'));
const JavaScriptTemporalAPI = lazy(() => import('./topics/javascript-temporal-api'));
const JavaScriptSet = lazy(() => import('./topics/javascript-set'));
const JavaScriptMap = lazy(() => import('./topics/javascript-map'));
const JavaScriptWeakMap = lazy(() => import('./topics/javascript-weakmap'));
const JavaScriptWeakSet = lazy(() => import('./topics/javascript-weakset'));
const JavaScriptObjectCreate = lazy(() => import('./topics/javascript-object-create'));
const JavaScriptObjectDefineProperty = lazy(() => import('./topics/javascript-object-defineProperty'));
const JavaScriptObjectFreezeSeal = lazy(() => import('./topics/javascript-object-freeze-seal'));
const JavaScriptPropertyDescriptors = lazy(() => import('./topics/javascript-property-descriptors'));
const JavaScriptObjectGetPrototypeOf = lazy(() => import('./topics/javascript-object-getPrototypeOf'));
const JavaScriptArrayFlat = lazy(() => import('./topics/javascript-array-flat'));
const JavaScriptArrayFrom = lazy(() => import('./topics/javascript-array-from'));
const JavaScriptArrayOf = lazy(() => import('./topics/javascript-array-of'));
const JavaScriptArrayFill = lazy(() => import('./topics/javascript-array-fill'));
const JavaScriptArrayIncludes = lazy(() => import('./topics/javascript-array-includes'));
const JavaScriptTypedArrays = lazy(() => import('./topics/javascript-typed-arrays'));
const JavaScriptOptionalChaining = lazy(() => import('./topics/javascript-optional-chaining'));
const JavaScriptNullishCoalescing = lazy(() => import('./topics/javascript-nullish-coalescing'));
const JavaScriptBigInt = lazy(() => import('./topics/javascript-bigint'));
const JavaScriptPromiseAllSettled = lazy(() => import('./topics/javascript-promise-allsettled'));
const JavaScriptLogicalAssignment = lazy(() => import('./topics/javascript-logical-assignment'));
const JavaScriptNumericSeparators = lazy(() => import('./topics/javascript-numeric-separators'));
const JavaScriptPromiseAny = lazy(() => import('./topics/javascript-promise-any'));
const JavaScriptStringReplaceAll = lazy(() => import('./topics/javascript-string-replaceall'));
const JavaScriptAtMethod = lazy(() => import('./topics/javascript-at-method'));
const JavaScriptArrayFindLast = lazy(() => import('./topics/javascript-array-findlast'));
const JavaScriptArrayToSorted = lazy(() => import('./topics/javascript-array-tosorted'));
const JavaScriptSymbolsAsWeakMapKeys = lazy(() => import('./topics/javascript-symbols-as-weakmap-keys'));
const JavaScriptArrayGroupBy = lazy(() => import('./topics/javascript-array-groupby'));
const JavaScriptPromiseWithResolvers = lazy(() => import('./topics/javascript-promise-withresolvers'));
const JavaScriptArrayBufferTransfer = lazy(() => import('./topics/javascript-arraybuffer-transfer'));
const JavaScriptFetchAPI = lazy(() => import('./topics/javascript-fetch-api'));
const JavaScriptAjax = lazy(() => import('./topics/javascript-ajax'));
const JavaScriptRestAPI = lazy(() => import('./topics/javascript-rest-api'));
const JavaScriptLocalStorage = lazy(() => import('./topics/javascript-local-storage'));
const JavaScriptCookies = lazy(() => import('./topics/javascript-cookies'));
const JavaScriptIndexedDB = lazy(() => import('./topics/javascript-indexeddb'));
const JavaScriptGeolocation = lazy(() => import('./topics/javascript-geolocation'));
const JavaScriptNotificationAPI = lazy(() => import('./topics/javascript-notification-api'));
const JavaScriptCanvasAPI = lazy(() => import('./topics/javascript-canvas-api'));
const JavaScriptWebSockets = lazy(() => import('./topics/javascript-websockets'));
const JavaScriptServiceWorkers = lazy(() => import('./topics/javascript-service-workers'));
const JavaScriptIntersectionObserver = lazy(() => import('./topics/javascript-intersection-observer'));
const JavaScriptMutationObserver = lazy(() => import('./topics/javascript-mutation-observer'));
const JavaScriptDynamicImport = lazy(() => import('./topics/javascript-dynamic-import'));
const JavaScriptWeakRefs = lazy(() => import('./topics/javascript-weakrefs'));
const JavaScriptClassFields = lazy(() => import('./topics/javascript-class-fields'));
const JavaScriptPrivateMethods = lazy(() => import('./topics/javascript-private-methods'));
const JavaScriptStaticBlocks = lazy(() => import('./topics/javascript-static-blocks'));
const JavaScriptTopLevelAwait = lazy(() => import('./topics/javascript-top-level-await'));
const JavaScriptHasOwn = lazy(() => import('./topics/javascript-hasown'));
const JavaScriptErrorCause = lazy(() => import('./topics/javascript-error-cause'));
const JavaScriptHashbang = lazy(() => import('./topics/javascript-hashbang'));
const JavaScriptRegExpVFlag = lazy(() => import('./topics/javascript-regexp-v-flag'));
const JavaScriptAtomicsWaitAsync = lazy(() => import('./topics/javascript-atomics-waitasync'));

// Map topic slugs to their components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  // 1. Fundamentals
  'what-is-javascript': JavaScriptWhatIsJavaScript,
  'js-setup': JavaScriptInstallationSetup,
  'first-program': JavaScriptFirstProgram,
  'js-in-html': JavaScriptInHtml,
  'js-variables': JavaScriptVariablesConstants,
  'js-data-types': JavaScriptDataTypes,
  'js-comments': JavaScriptComments,
  'console-methods': JavaScriptConsoleMethods,
  'js-operators': JavaScriptOperators,
  'ternary-operator': JavaScriptTernaryOperator,
  'js-conditionals': JavaScriptIfElse,
  'switch-statement': JavaScriptSwitchStatements,
  'js-loops': JavaScriptLoops,
  'js-functions': JavaScriptFunctions,
  'arrow-functions': JavaScriptArrowFunctions,
  'function-parameters': JavaScriptFunctionParameters,
  'callback-functions': JavaScriptCallbackParameters,
  'higher-order-functions': JavaScriptHigherOrderFunctions,
  iife: JavaScriptIife,
  'js-arrays': JavaScriptArrays,
  'array-methods': JavaScriptArrayMethodsBasics,
  'js-array-methods': JavaScriptArrayIterationMethods,
  'array-destructuring': JavaScriptArrayDestructuring,
  'js-objects': JavaScriptObjects,
  'object-methods': JavaScriptObjectMethods,
  'getters-setters': JavaScriptGettersSetters,
  'private-fields': JavaScriptPrivateFields,
  'object-destructuring': JavaScriptObjectDestructuring,
  'this-keyword': JavaScriptThisKeyword,
  'strings': JavaScriptStrings,
  'string-methods': JavaScriptStringMethods,
  'regular-expressions': JavaScriptRegularExpressions,
  'js-scope': JavaScriptScope,
  'closures': JavaScriptClosures,
  'hoisting': JavaScriptHoisting,
  'constructor-functions': JavaScriptConstructorFunctions,
  'prototypes': JavaScriptPrototypes,
  'es6-classes': JavaScriptES6Classes,
  'class-inheritance': JavaScriptClassInheritance,
  'static-methods': JavaScriptStaticMethods,
  'js-async': JavaScriptJsAsync,
  'callbacks': JavaScriptCallbacks,
  'promises': JavaScriptPromises,
  'promise-methods': JavaScriptPromiseMethods,
  'async-await': JavaScriptAsyncAwait,
  'error-handling-async': JavaScriptAsyncErrorHandling,
  'call-stack': JavaScriptCallStack,
  'event-loop': JavaScriptEventLoop,
  'task-queue': JavaScriptTaskQueue,
  'what-is-dom': JavaScriptWhatIsDOM,
  'selecting-elements': JavaScriptSelectingElements,
  'js-dom-manipulation': JavaScriptDOMManipulation,
  'element-attributes': JavaScriptElementAttributes,
  'dom-styles': JavaScriptDOMStyles,
  'js-events': JavaScriptEvents,
  'event-types': JavaScriptEventTypes,
  'event-object': JavaScriptEventObject,
  'event-propagation': JavaScriptEventPropagation,
  'prevent-default': JavaScriptPreventDefault,
  'form-handling': JavaScriptFormHandling,
  'form-validation': JavaScriptFormValidation,
  'formdata-api': JavaScriptFormDataApi,
  'js-es6': JavaScriptES6Overview,
  'destructuring': JavaScriptDestructuring,
  'spread-rest': JavaScriptSpreadRest,
  'default-parameters': JavaScriptDefaultParameters,
  'enhanced-object-literals': JavaScriptEnhancedObjectLiterals,
  'template-literals': JavaScriptTemplateLiterals,
  'for-of-loop': JavaScriptForOfLoops,
  'modules': JavaScriptModules,
  'symbols': JavaScriptSymbols,
  'iterators': JavaScriptIterators,
  'generators': JavaScriptGenerators,
  'proxy-reflect': JavaScriptProxyReflect,
  'reflect-api': JavaScriptReflectAPI,
  'design-patterns': JavaScriptDesignPatterns,
  'functional-programming': JavaScriptFunctionalProgramming,
  'currying': JavaScriptCurrying,
  'composition': JavaScriptComposition,
  'recursion': JavaScriptRecursion,
  'memoization': JavaScriptMemoization,
  'error-handling': JavaScriptErrorHandling,
  'debugging': JavaScriptDebugging,
  'performance-monitoring': JavaScriptPerformanceMonitoring,
  'lighthouse': JavaScriptLighthouse,
  'call-stack-visualization': JavaScriptCallStackNew,
  'profiling': JavaScriptProfiling,
  'memory-leaks': JavaScriptMemoryLeaks,
  'garbage-collection': JavaScriptGarbageCollection,
  'memory-management': JavaScriptMemoryManagement,
  'debouncing-throttling': JavaScriptDebounceThrottle,
  'lazy-loading': JavaScriptLazyLoading,
  'web-workers': JavaScriptWebWorkers,
  'performance-optimization': JavaScriptPerformanceOptimization,
  'weakmap-weakset': JavaScriptWeakMapWeakSet,
  'property-access': JavaScriptPropertyAccess,
  'eval-function': JavaScriptEvalFunctionConstructor,
  'proxy-advanced': JavaScriptProxyReflect,
  'unit-testing': JavaScriptUnitTesting,
  'jest': JavaScriptJest,
  'vitest': JavaScriptVitest,
  'test-driven-development': JavaScriptTDD,
  'mocking': JavaScriptMockingSpies,
  'e2e-testing': JavaScriptE2ETesting,
  'testing-best-practices': JavaScriptTestingBestPractices,
  'xss-prevention': JavaScriptXSSPrevention,
  'csrf-protection': JavaScriptCSRFProtection,
  'content-security-policy': JavaScriptCSP,
  'sanitization': JavaScriptInputSanitization,
  'secure-coding': JavaScriptSecureCoding,
  'code-splitting': JavaScriptCodeSplitting,
  'tree-shaking': JavaScriptTreeShaking,
  'clean-code': JavaScriptCleanCode,
  'solid-principles': JavaScriptSOLIDPrinciples,
  'npm-yarn': JavaScriptNpmYarn,
  'package-json': JavaScriptPackageJson,
  'webpack': JavaScriptWebpack,
  'vite': JavaScriptVite,
  'babel': JavaScriptBabel,
  'eslint': JavaScriptESLint,
  'prettier': JavaScriptPrettier,
  'browser-vs-nodejs': JavaScriptBrowserVsNodeJS,
  'javascript-engines': JavaScriptJSEngine,
  'runtime-apis': JavaScriptRuntimeAPIs,
  'commonjs-vs-esm': JavaScriptCommonJSvsESModules,
  'abort-controller': JavaScriptAbortController,
  'microtasks-macrotasks': JavaScriptMicrotasksMacrotasks,
  'async-iterators-generators': JavaScriptAsyncIteratorsGenerators,
  'history-api': JavaScriptHistoryAPI,
  'url-api': JavaScriptURLAPI,
  'clipboard-api': JavaScriptClipboardAPI,
  'file-api': JavaScriptFileAPI,
  'drag-drop-api': JavaScriptDragDropAPI,
  'fullscreen-api': JavaScriptFullscreenAPI,
  'page-visibility-api': JavaScriptPageVisibilityAPI,
  'battery-api': JavaScriptBatteryStatusAPI,
  'network-information': JavaScriptNetworkInfoAPI,
  'media-query-api': JavaScriptMediaQueryAPI,
  'resize-observer': JavaScriptResizeObserver,
  'performance-api': JavaScriptPerformanceAPI,
  'request-animation-frame': JavaScriptRequestAnimationFrame,
  'request-idle-callback': JavaScriptRequestIdleCallback,
  'intl': JavaScriptIntl,
  'intl-datetimeformat': JavaScriptIntlDateTimeFormat,
  'intl-numberformat': JavaScriptIntlNumberFormat,
  'intl-collator': JavaScriptIntlCollator,
  'intl-pluralrules': JavaScriptIntlPluralRules,
  'json': JavaScriptJSON,
  'json-parse': JavaScriptJSONParse,
  'json-stringify': JavaScriptJSONStringify,
  'json-replacer-reviver': JavaScriptJSONReplacerReviver,
  'math-object': JavaScriptMathObject,
  'number-methods': JavaScriptNumberMethods,
  'math-random': JavaScriptMathRandom,
  'date-object': JavaScriptDateObject,
  'date-methods': JavaScriptDateMethods,
  'date-formatting': JavaScriptDateFormatting,
  'temporal-api': JavaScriptTemporalAPI,
  'set': JavaScriptSet,
  'map': JavaScriptMap,
  'weakmap': JavaScriptWeakMap,
  'weakset': JavaScriptWeakSet,
  'object-create': JavaScriptObjectCreate,
  'object-defineProperty': JavaScriptObjectDefineProperty,
  'object-freeze-seal': JavaScriptObjectFreezeSeal,
  'property-descriptors': JavaScriptPropertyDescriptors,
  'object-getPrototypeOf': JavaScriptObjectGetPrototypeOf,
  'array-flat': JavaScriptArrayFlat,
  'array-from': JavaScriptArrayFrom,
  'array-of': JavaScriptArrayOf,
  'array-fill': JavaScriptArrayFill,
  'array-includes': JavaScriptArrayIncludes,
  'typed-arrays': JavaScriptTypedArrays,
  'optional-chaining': JavaScriptOptionalChaining,
  'nullish-coalescing': JavaScriptNullishCoalescing,
  'bigint': JavaScriptBigInt,
  'promise-allsettled': JavaScriptPromiseAllSettled,
  'logical-assignment': JavaScriptLogicalAssignment,
  'numeric-separators': JavaScriptNumericSeparators,
  'promise-any': JavaScriptPromiseAny,
  'string-replaceall': JavaScriptStringReplaceAll,
  'weakrefs': JavaScriptWeakRefs,
  'class-fields': JavaScriptClassFields,
  'private-methods': JavaScriptPrivateMethods,
  'static-blocks': JavaScriptStaticBlocks,
  'at-method': JavaScriptAtMethod,
  'hasown': JavaScriptHasOwn,
  'error-cause': JavaScriptErrorCause,
  'array-findlast': JavaScriptArrayFindLast,
  'array-toSorted': JavaScriptArrayToSorted,
  'hashbang': JavaScriptHashbang,
  'symbols-as-weakmap-keys': JavaScriptSymbolsAsWeakMapKeys,
  'array-groupby': JavaScriptArrayGroupBy,
  'promise-withresolvers': JavaScriptPromiseWithResolvers,
  'regexp-v-flag': JavaScriptRegExpVFlag,
  'atomics-waitasync': JavaScriptAtomicsWaitAsync,
  'arraybuffer-transfer': JavaScriptArrayBufferTransfer,
  'fetch-api': JavaScriptFetchAPI,
  'ajax': JavaScriptAjax,
  'rest-api': JavaScriptRestAPI,
  'local-storage': JavaScriptLocalStorage,
  'cookies': JavaScriptCookies,
  'indexeddb': JavaScriptIndexedDB,
  'geolocation': JavaScriptGeolocation,
  'notification-api': JavaScriptNotificationAPI,
  'canvas-api': JavaScriptCanvasAPI,
  'websockets': JavaScriptWebSockets,
  'service-workers': JavaScriptServiceWorkers,
  'intersection-observer': JavaScriptIntersectionObserver,
  'mutation-observer': JavaScriptMutationObserver,
  'dynamic-import': JavaScriptDynamicImport,
  'top-level-await': JavaScriptTopLevelAwait,
};

export function JavascriptContentDisplay({
  topic,
  language,
}: {
  topic: Topic;
  language: Language;
}) {
  const CustomTopicComponent = topicComponents[topic.slug];
  const { openWithContent } = useWebPlayground();

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<CompactLoadingSkeleton />}>
        {CustomTopicComponent
          ? React.createElement(CustomTopicComponent as any, {
              onOpenWebPlayground: openWithContent,
            })
          : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
