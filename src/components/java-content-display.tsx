
'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from './generic-content-display';
import React, { lazy, Suspense, useRef } from 'react';
import { Skeleton } from './ui/skeleton';

// Lazy load all the topic components
const JavaLearningRoadmap = lazy(() => import('./java-learning-roadmap').then(module => ({ default: module.JavaLearningRoadmap })));
const WhatIsJava = lazy(() => import('./java-topics/what-is-java').then(module => ({ default: module.WhatIsJava })));
const TheStoryOfJava = lazy(() => import('./java-topics/the-story-of-java').then(module => ({ default: module.TheStoryOfJava })));
const JavaFeatures = lazy(() => import('./java-topics/java-features').then(module => ({ default: module.JavaFeatures })));
const JdkJreJvm = lazy(() => import('./java-topics/jdk-jre-jvm').then(module => ({ default: module.JdkJreJvm })));
const HowJavaWorks = lazy(() => import('./java-topics/how-java-works').then(module => ({ default: module.HowJavaWorks })));
const JavaEnvironmentSetup = lazy(() => import('./java-topics/java-environment-setup').then(module => ({ default: module.JavaEnvironmentSetup })));
const FirstJavaProgram = lazy(() => import('./java-topics/first-java-program').then(module => ({ default: module.FirstJavaProgram })));
const JavaComments = lazy(() => import('./java-topics/java-comments').then(module => ({ default: module.JavaComments })));
const JavaPrintFormats = lazy(() => import('./java-topics/java-print-formats').then(module => ({ default: module.JavaPrintFormats })));
const JavaDataTypes = lazy(() => import('./java-topics/java-data-types').then(module => ({ default: module.JavaDataTypes })));
const JavaVariables = lazy(() => import('./java-topics/java-variables').then(module => ({ default: module.JavaVariables })));
const JavaTypeCasting = lazy(() => import('./java-topics/java-type-casting').then(module => ({ default: module.JavaTypeCasting })));
const JavaEscapeSequences = lazy(() => import('./java-topics/java-escape-sequences').then(module => ({ default: module.JavaEscapeSequences })));
const JavaConstants = lazy(() => import('./java-topics/java-constants').then(module => ({ default: module.JavaConstants })));
const JavaLiterals = lazy(() => import('./java-topics/java-literals').then(module => ({ default: module.JavaLiterals })));
const JavaArithmeticOperators = lazy(() => import('./java-topics/java-arithmetic-operators').then(module => ({ default: module.JavaArithmeticOperators })));
const JavaAssignmentOperators = lazy(() => import('./java-topics/java-assignment-operators').then(module => ({ default: module.JavaAssignmentOperators })));
const JavaComparisonOperators = lazy(() => import('./java-topics/java-comparison-operators').then(module => ({ default: module.JavaComparisonOperators })));
const JavaLogicalOperators = lazy(() => import('./java-topics/java-logical-operators').then(module => ({ default: module.JavaLogicalOperators })));
const JavaBitwiseOperators = lazy(() => import('./java-topics/java-bitwise-operators').then(module => ({ default: module.JavaBitwiseOperators })));
const JavaTernaryOperator = lazy(() => import('./java-topics/java-ternary-operator').then(module => ({ default: module.JavaTernaryOperator })));
const JavaOperatorPrecedence = lazy(() => import('./java-topics/java-operator-precedence').then(module => ({ default: module.JavaOperatorPrecedence })));
const JavaScannerClass = lazy(() => import('./java-topics/java-scanner-class').then(module => ({ default: module.JavaScannerClass })));
const JavaReadingDifferentTypes = lazy(() => import('./java-topics/java-reading-different-types').then(module => ({ default: module.JavaReadingDifferentTypes })));
const JavaInputValidation = lazy(() => import('./java-topics/java-input-validation').then(module => ({ default: module.JavaInputValidation })));
const JavaIfElse = lazy(() => import('./java-topics/java-if-else').then(module => ({ default: module.JavaIfElse })));
const JavaSwitch = lazy(() => import('./java-topics/java-switch').then(module => ({ default: module.JavaSwitch })));
const JavaForLoop = lazy(() => import('./java-topics/java-for-loop').then(module => ({ default: module.JavaForLoop })));
const JavaWhileLoop = lazy(() => import('./java-topics/java-while-loop').then(module => ({ default: module.JavaWhileLoop })));
const JavaBreakContinue = lazy(() => import('./java-topics/java-break-continue').then(module => ({ default: module.JavaBreakContinue })));
const JavaStringMethods = lazy(() => import('./java-topics/java-string-methods').then(module => ({ default: module.JavaStringMethods })));
const JavaArrays = lazy(() => import('./java-topics/java-arrays').then(module => ({ default: module.JavaArrays })));
const JavaMultiDimensionalArrays = lazy(() => import('./java-topics/java-multi-dimensional-arrays').then(module => ({ default: module.JavaMultiDimensionalArrays })));
const JavaMethods = lazy(() => import('./java-topics/java-methods').then(module => ({ default: module.JavaMethods })));
const JavaMethodParameters = lazy(() => import('./java-topics/java-method-parameters').then(module => ({ default: module.JavaMethodParameters })));
const JavaMethodOverloading = lazy(() => import('./java-topics/java-method-overloading').then(module => ({ default: module.JavaMethodOverloading })));
const JavaScope = lazy(() => import('./java-topics/java-scope'));
const JavaRecursion = lazy(() => import('./java-topics/java-recursion').then(module => ({ default: module.JavaRecursion })));
const JavaClassesObjects = lazy(() => import('./java-topics/java-classes-objects').then(module => ({ default: module.JavaClassesObjects })));
const JavaClassAttributes = lazy(() => import('./java-topics/java-class-attributes').then(module => ({ default: module.JavaClassAttributes })));
const JavaClassMethods = lazy(() => import('./java-topics/java-class-methods').then(module => ({ default: module.JavaClassMethods })));
const JavaConstructors = lazy(() => import('./java-topics/java-constructors').then(module => ({ default: module.JavaConstructors })));
const JavaAccessModifiers = lazy(() => import('./java-topics/java-access-modifiers').then(module => ({ default: module.JavaAccessModifiers })));
const JavaEncapsulation = lazy(() => import('./java-topics/java-encapsulation').then(module => ({ default: module.JavaEncapsulation })));
const JavaPackages = lazy(() => import('./java-topics/java-packages').then(module => ({ default: module.JavaPackages })));
const JavaInheritance = lazy(() => import('./java-topics/java-inheritance').then(module => ({ default: module.JavaInheritance })));
const JavaPolymorphism = lazy(() => import('./java-topics/java-polymorphism').then(module => ({ default: module.JavaPolymorphism })));
const JavaInnerClasses = lazy(() => import('./java-topics/java-inner-classes').then(module => ({ default: module.JavaInnerClasses })));
const JavaAbstraction = lazy(() => import('./java-topics/java-abstraction').then(module => ({ default: module.JavaAbstraction })));
const JavaInterfaces = lazy(() => import('./java-topics/java-interfaces').then(module => ({ default: module.JavaInterfaces })));
const JavaEnums = lazy(() => import('./java-topics/java-enums').then(module => ({ default: module.JavaEnums })));
const JavaDate = lazy(() => import('./java-topics/java-date').then(module => ({ default: module.JavaDate })));
const JavaHashMap = lazy(() => import('./java-topics/java-hashmap').then(module => ({ default: module.JavaHashMap })));
const JavaHashSet = lazy(() => import('./java-topics/java-hashset').then(module => ({ default: module.JavaHashSet })));
const JavaArrayList = lazy(() => import('./java-topics/java-arraylist').then(module => ({ default: module.JavaArrayList })));
const JavaLinkedList = lazy(() => import('./java-topics/java-linkedlist').then(module => ({ default: module.JavaLinkedList })));
const JavaIterator = lazy(() => import('./java-topics/java-iterator').then(module => ({ default: module.JavaIterator })));
const JavaWrapperClasses = lazy(() => import('./java-topics/java-wrapper-classes').then(module => ({ default: module.JavaWrapperClasses })));
const JavaExceptions = lazy(() => import('./java-topics/java-exceptions').then(module => ({ default: module.JavaExceptions })));
const JavaRegex = lazy(() => import('./java-topics/java-regex').then(module => ({ default: module.JavaRegex })));
const JavaThreads = lazy(() => import('./java-topics/java-threads').then(module => ({ default: module.JavaThreads })));
const JavaLambda = lazy(() => import('./java-topics/java-lambda').then(module => ({ default: module.JavaLambda })));
const JavaFileHandling = lazy(() => import('./java-topics/java-file-handling').then(module => ({ default: module.JavaFileHandling })));
const JavaSuperKeyword = lazy(() => import('./java-topics/java-super-keyword').then(module => ({ default: module.JavaSuperKeyword })));
const JavaMethodOverriding = lazy(() => import('./java-topics/java-method-overriding').then(module => ({ default: module.JavaMethodOverriding })));
const JavaInstanceofOperator = lazy(() => import('./java-topics/java-instanceof-operator').then(module => ({ default: module.JavaInstanceofOperator })));
const JavaObjectClass = lazy(() => import('./java-topics/java-object-class').then(module => ({ default: module.JavaObjectClass })));
const JavaMethodReferences = lazy(() => import('./java-topics/java-method-references').then(module => ({ default: module.JavaMethodReferences })));
const JavaTreeMapTreeSet = lazy(() => import('./java-topics/java-treemap-treeset').then(module => ({ default: module.JavaTreeMapTreeSet })));
const JavaQueueDeque = lazy(() => import('./java-topics/java-queue-deque').then(module => ({ default: module.JavaQueueDeque })));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'learning-plan': JavaLearningRoadmap,
  'what-is-java': WhatIsJava,
  'history-of-java': TheStoryOfJava,
  'features-of-java': JavaFeatures,
  'jdk-jre-jvm': JdkJreJvm,
  'how-java-works': HowJavaWorks,
  'setting-up-environment': JavaEnvironmentSetup,
  'first-java-program': FirstJavaProgram,
  'comments-in-java': JavaComments,
  'print-statements-and-format-specifiers': JavaPrintFormats,
  'data-types': JavaDataTypes,
  'variables': JavaVariables,
  'type-casting': JavaTypeCasting,
  'escape-sequences': JavaEscapeSequences,
  'constants': JavaConstants,
  'literals': JavaLiterals,
  'arithmetic-operators': JavaArithmeticOperators,
  'assignment-operators': JavaAssignmentOperators,
  'comparison-operators': JavaComparisonOperators,
  'logical-operators': JavaLogicalOperators,
  'bitwise-operators': JavaBitwiseOperators,
  'ternary-operator': JavaTernaryOperator,
  'operator-precedence': JavaOperatorPrecedence,
  'scanner-class': JavaScannerClass,
  'reading-different-types': JavaReadingDifferentTypes,
  'input-validation': JavaInputValidation,
  'if-else': JavaIfElse,
  'switch': JavaSwitch,
  'for-loop': JavaForLoop,
  'while-loop': JavaWhileLoop,
  'break-continue': JavaBreakContinue,
  'strings': JavaStringMethods,
  'arrays': JavaArrays,
  'multi-dimensional-arrays': JavaMultiDimensionalArrays,
  'methods': JavaMethods,
  'method-parameters': JavaMethodParameters,
  'method-overloading': JavaMethodOverloading,
  'scope': JavaScope,
  'recursion': JavaRecursion,
  'classes-objects': JavaClassesObjects,
  'class-attributes': JavaClassAttributes,
  'class-methods': JavaClassMethods,
  'constructors': JavaConstructors,
  'access-modifiers': JavaAccessModifiers,
  'encapsulation': JavaEncapsulation,
  'packages': JavaPackages,
  'inheritance': JavaInheritance,
  'polymorphism': JavaPolymorphism,
  'inner-classes': JavaInnerClasses,
  'abstraction': JavaAbstraction,
  'interfaces': JavaInterfaces,
  'enums': JavaEnums,
  'date-time': JavaDate,
  'hashmap': JavaHashMap,
  'hashset': JavaHashSet,
  'arraylist': JavaArrayList,
  'linkedlist': JavaLinkedList,
  'iterator': JavaIterator,
  'wrapper-classes': JavaWrapperClasses,
  'exceptions': JavaExceptions,
  'regex': JavaRegex,
  'threads': JavaThreads,
  'lambda': JavaLambda,
  'file-handling': JavaFileHandling,
  'super-keyword': JavaSuperKeyword,
  'method-overriding': JavaMethodOverriding,
  'instanceof-operator': JavaInstanceofOperator,
  'object-class': JavaObjectClass,
  'method-references': JavaMethodReferences,
  'treemap-treeset': JavaTreeMapTreeSet,
  'queue-deque': JavaQueueDeque,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function JavaContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];
  
  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={onOpenEditor}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? <CustomTopicComponent onOpenEditor={onOpenEditor} /> : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
