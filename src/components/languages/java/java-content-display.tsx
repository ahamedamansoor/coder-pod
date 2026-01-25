'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';

// Lazy load all the topic components
const JavaLearningRoadmap = lazy(() => import('./java-learning-roadmap').then(module => ({ default: module.JavaLearningRoadmap })));
const WhatIsJava = lazy(() => import('./topics/what-is-java').then(module => ({ default: module.WhatIsJava })));
const TheStoryOfJava = lazy(() => import('./topics/the-story-of-java').then(module => ({ default: module.TheStoryOfJava })));
const JavaFeatures = lazy(() => import('./topics/java-features').then(module => ({ default: module.JavaFeatures })));
const JdkJreJvm = lazy(() => import('./topics/jdk-jre-jvm').then(module => ({ default: module.JdkJreJvm })));
const HowJavaWorks = lazy(() => import('./topics/how-java-works').then(module => ({ default: module.HowJavaWorks })));
const JavaEnvironmentSetup = lazy(() => import('./topics/java-environment-setup').then(module => ({ default: module.JavaEnvironmentSetup })));
const FirstJavaProgram = lazy(() => import('./topics/first-java-program').then(module => ({ default: module.FirstJavaProgram })));
const JavaComments = lazy(() => import('./topics/java-comments').then(module => ({ default: module.JavaComments })));
const JavaPrintFormats = lazy(() => import('./topics/java-print-formats').then(module => ({ default: module.JavaPrintFormats })));
const JavaDataTypes = lazy(() => import('./topics/java-data-types').then(module => ({ default: module.JavaDataTypes })));
const JavaVariables = lazy(() => import('./topics/java-variables').then(module => ({ default: module.JavaVariables })));
const JavaTypeCasting = lazy(() => import('./topics/java-type-casting').then(module => ({ default: module.JavaTypeCasting })));
const JavaEscapeSequences = lazy(() => import('./topics/java-escape-sequences').then(module => ({ default: module.JavaEscapeSequences })));
const JavaConstants = lazy(() => import('./topics/java-constants').then(module => ({ default: module.JavaConstants })));
const JavaLiterals = lazy(() => import('./topics/java-literals').then(module => ({ default: module.JavaLiterals })));
const JavaArithmeticOperators = lazy(() => import('./topics/java-arithmetic-operators').then(module => ({ default: module.JavaArithmeticOperators })));
const JavaAssignmentOperators = lazy(() => import('./topics/java-assignment-operators').then(module => ({ default: module.JavaAssignmentOperators })));
const JavaComparisonOperators = lazy(() => import('./topics/java-comparison-operators').then(module => ({ default: module.JavaComparisonOperators })));
const JavaLogicalOperators = lazy(() => import('./topics/java-logical-operators').then(module => ({ default: module.JavaLogicalOperators })));
const JavaBitwiseOperators = lazy(() => import('./topics/java-bitwise-operators').then(module => ({ default: module.JavaBitwiseOperators })));
const JavaTernaryOperator = lazy(() => import('./topics/java-ternary-operator').then(module => ({ default: module.JavaTernaryOperator })));
const JavaOperatorPrecedence = lazy(() => import('./topics/java-operator-precedence').then(module => ({ default: module.JavaOperatorPrecedence })));
const JavaScannerClass = lazy(() => import('./topics/java-scanner-class').then(module => ({ default: module.JavaScannerClass })));
const JavaReadingDifferentTypes = lazy(() => import('./topics/java-reading-different-types').then(module => ({ default: module.JavaReadingDifferentTypes })));
const JavaInputValidation = lazy(() => import('./topics/java-input-validation').then(module => ({ default: module.JavaInputValidation })));
const JavaIfElse = lazy(() => import('./topics/java-if-else').then(module => ({ default: module.JavaIfElse })));
const JavaSwitch = lazy(() => import('./topics/java-switch').then(module => ({ default: module.JavaSwitch })));
const JavaForLoop = lazy(() => import('./topics/java-for-loop').then(module => ({ default: module.JavaForLoop })));
const JavaWhileLoop = lazy(() => import('./topics/java-while-loop').then(module => ({ default: module.JavaWhileLoop })));
const JavaBreakContinue = lazy(() => import('./topics/java-break-continue').then(module => ({ default: module.JavaBreakContinue })));
const JavaStringMethods = lazy(() => import('./topics/java-string-methods').then(module => ({ default: module.JavaStringMethods })));
const JavaArrays = lazy(() => import('./topics/java-arrays').then(module => ({ default: module.JavaArrays })));
const JavaMultiDimensionalArrays = lazy(() => import('./topics/java-multi-dimensional-arrays').then(module => ({ default: module.JavaMultiDimensionalArrays })));
const JavaMethods = lazy(() => import('./topics/java-methods').then(module => ({ default: module.JavaMethods })));
const JavaMethodParameters = lazy(() => import('./topics/java-method-parameters').then(module => ({ default: module.JavaMethodParameters })));
const JavaMethodOverloading = lazy(() => import('./topics/java-method-overloading').then(module => ({ default: module.JavaMethodOverloading })));
const JavaScope = lazy(() => import('./topics/java-scope'));
const JavaRecursion = lazy(() => import('./topics/java-recursion').then(module => ({ default: module.JavaRecursion })));
const JavaClassesObjects = lazy(() => import('./topics/java-classes-objects').then(module => ({ default: module.JavaClassesObjects })));
const JavaClassAttributes = lazy(() => import('./topics/java-class-attributes').then(module => ({ default: module.JavaClassAttributes })));
const JavaClassMethods = lazy(() => import('./topics/java-class-methods').then(module => ({ default: module.JavaClassMethods })));
const JavaConstructors = lazy(() => import('./topics/java-constructors').then(module => ({ default: module.JavaConstructors })));
const JavaAccessModifiers = lazy(() => import('./topics/java-access-modifiers').then(module => ({ default: module.JavaAccessModifiers })));
const JavaEncapsulation = lazy(() => import('./topics/java-encapsulation').then(module => ({ default: module.JavaEncapsulation })));
const JavaPackages = lazy(() => import('./topics/java-packages').then(module => ({ default: module.JavaPackages })));
const JavaInheritance = lazy(() => import('./topics/java-inheritance').then(module => ({ default: module.JavaInheritance })));
const JavaPolymorphism = lazy(() => import('./topics/java-polymorphism').then(module => ({ default: module.JavaPolymorphism })));
const JavaInnerClasses = lazy(() => import('./topics/java-inner-classes').then(module => ({ default: module.JavaInnerClasses })));
const JavaAbstraction = lazy(() => import('./topics/java-abstraction').then(module => ({ default: module.JavaAbstraction })));
const JavaInterfaces = lazy(() => import('./topics/java-interfaces').then(module => ({ default: module.JavaInterfaces })));
const JavaEnums = lazy(() => import('./topics/java-enums').then(module => ({ default: module.JavaEnums })));
const JavaDate = lazy(() => import('./topics/java-date').then(module => ({ default: module.JavaDate })));
const JavaHashMap = lazy(() => import('./topics/java-hashmap').then(module => ({ default: module.JavaHashMap })));
const JavaHashSet = lazy(() => import('./topics/java-hashset').then(module => ({ default: module.JavaHashSet })));
const JavaArrayList = lazy(() => import('./topics/java-arraylist').then(module => ({ default: module.JavaArrayList })));
const JavaLinkedList = lazy(() => import('./topics/java-linkedlist').then(module => ({ default: module.JavaLinkedList })));
const JavaIterator = lazy(() => import('./topics/java-iterator').then(module => ({ default: module.JavaIterator })));
const JavaWrapperClasses = lazy(() => import('./topics/java-wrapper-classes').then(module => ({ default: module.JavaWrapperClasses })));
const JavaExceptions = lazy(() => import('./topics/java-exceptions').then(module => ({ default: module.JavaExceptions })));
const JavaRegex = lazy(() => import('./topics/java-regex').then(module => ({ default: module.JavaRegex })));
const JavaThreads = lazy(() => import('./topics/java-threads').then(module => ({ default: module.JavaThreads })));
const JavaLambda = lazy(() => import('./topics/java-lambda').then(module => ({ default: module.JavaLambda })));
const JavaFileHandling = lazy(() => import('./topics/java-file-handling').then(module => ({ default: module.JavaFileHandling })));
const JavaSuperKeyword = lazy(() => import('./topics/java-super-keyword').then(module => ({ default: module.JavaSuperKeyword })));
const JavaMethodOverriding = lazy(() => import('./topics/java-method-overriding').then(module => ({ default: module.JavaMethodOverriding })));
const JavaInstanceofOperator = lazy(() => import('./topics/java-instanceof-operator').then(module => ({ default: module.JavaInstanceofOperator })));
const JavaObjectClass = lazy(() => import('./topics/java-object-class').then(module => ({ default: module.JavaObjectClass })));
const JavaMethodReferences = lazy(() => import('./topics/java-method-references').then(module => ({ default: module.JavaMethodReferences })));
const JavaTreeMapTreeSet = lazy(() => import('./topics/java-treemap-treeset').then(module => ({ default: module.JavaTreeMapTreeSet })));
const JavaQueueDeque = lazy(() => import('./topics/java-queue-deque').then(module => ({ default: module.JavaQueueDeque })));

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

export function JavaContentDisplay({ 
  topic, 
  language,
}: {
  topic: Topic, 
  language: Language,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];
  
  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay
        topic={topic}
        language={language}
      >
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
}
