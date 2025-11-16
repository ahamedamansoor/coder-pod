
'use client';

import type { Language, Topic } from '@/app/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Wand2, HelpCircle, Sparkles, CheckSquare, Lightbulb, GitCommitHorizontal, List, Code, Copy, Check } from 'lucide-react';
import React, { lazy, Suspense, useRef } from 'react';
import {
  simplifyTopicExplanation,
  type SimplifyTopicExplanationOutput,
} from '@/ai/flows/simplify-topic-explanations';
import {
  answerQuestion,
  type AnswerQuestionOutput,
} from '@/ai/flows/answer-question';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useJava } from '@/app/java/java-context';
import { useUser } from '@/firebase';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from './ui/tooltip';
import { cn } from '@/lib/utils';
import { marked } from 'marked';

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
const JavaScope = lazy(() => import('./java-topics/java-scope').then(module => ({ default: module.JavaScope })));
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
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-5 w-2/4" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-1/3" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
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
  const [isSimplifying, setIsSimplifying] = React.useState(false);
  const [simplifiedContent, setSimplifiedContent] =
    React.useState<SimplifyTopicExplanationOutput | null>(null);
  
  const [question, setQuestion] = React.useState('');
  const [isAsking, setIsAsking] = React.useState(false);
  const [qaResult, setQaResult] = React.useState<AnswerQuestionOutput | null>(null);

  const [hasCopied, setHasCopied] = React.useState(false);
  
  const { completedTopics, handleToggleComplete } = useJava();
  const { user } = useUser();
  const isUserAuthenticated = user && !user.isAnonymous;
  
  const { toast } = useToast();
  const topicContentRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Reset AI content when the topic changes
    setSimplifiedContent(null);
    setQaResult(null);
    setQuestion('');
  }, [topic]);


  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const handleCopyCode = () => {
    if (simplifiedContent?.examples) {
      navigator.clipboard.writeText(simplifiedContent.examples);
      setHasCopied(true);
      toast({
        title: 'Copied to clipboard!',
      });
    }
  };

  const handleSimplify = async () => {
    setIsSimplifying(true);
    setSimplifiedContent(null);

    // Extract code from the rendered topic content
    const codeElements = topicContentRef.current?.querySelectorAll('pre code');
    const codeSnippet = codeElements && codeElements.length > 0
      ? Array.from(codeElements).map(el => el.textContent).join('\n\n---\n\n')
      : undefined;

    try {
      const result = await simplifyTopicExplanation({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
        codeSnippet,
      });
      setSimplifiedContent(result);
    } catch (error) {
      console.error('Failed to simplify explanation:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          'Failed to generate simplified explanation. Please try again.',
      });
    } finally {
      setIsSimplifying(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    setIsAsking(true);
    setQaResult(null);
    try {
      const result = await answerQuestion({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
        question: question,
      });
      const parsedAnswer = await marked(result.answer);
      setQaResult({ answer: parsedAnswer });
    } catch (error) {
      console.error('Failed to answer question:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get an answer. Please try again.',
      });
    } finally {
      setIsAsking(false);
    }
  };
  
  const isLearningPlanTopic = topic.slug === 'learning-plan';

  const renderTopicContent = () => {
    const Component = topicComponentMap[topic.slug];
    
    if (Component) {
      // For components that need onOpenEditor, we pass it. Others will just ignore it.
      return <Component onOpenEditor={onOpenEditor} />;
    }

    // Fallback for topics without a custom component
    return (
      <Card>
        <CardHeader>
          <CardTitle>Original Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed">{topic.explanation}</p>
        </CardContent>
      </Card>
    );
  };
  
  const noCustomContent = !Object.keys(topic).length || topic.explanation;

  const showSimplifyButton = noCustomContent && !isLearningPlanTopic;

  const markAsCompleteButton = (
    <div className="flex items-center space-x-2 shrink-0 ml-4 bg-muted p-3 rounded-lg border">
      <Checkbox
        id={`complete-${topic.slug}`}
        checked={completedTopics.has(topic.slug)}
        onCheckedChange={() => handleToggleComplete(topic.slug)}
        disabled={!isUserAuthenticated}
      />
      <Label
        htmlFor={`complete-${topic.slug}`}
        className={cn(
          "font-semibold text-muted-foreground",
          !isUserAuthenticated && "cursor-not-allowed opacity-50"
        )}
      >
        Mark as completed
      </Label>
    </div>
  );

  const getQuestionPlaceholder = () => {
    switch (topic.slug) {
      case 'access-modifiers':
        return 'e.g., "What\'s the real difference between public and private?"';
      case 'if-else':
        return 'e.g., "When would I use else if versus just another if?"';
      case 'for-loop':
        return 'e.g., "What is an infinite loop and why should I avoid it?"';
      case 'inheritance':
        return 'e.g., "Can a class inherit from multiple classes?"';
      default:
        return 'e.g., "Explain this to me like I am five years old."';
    }
  };

  return (
    <div className="space-y-8">
       <header className="space-y-2 flex justify-between items-start">
         <div>
            <h1 className="font-headline text-4xl font-bold tracking-tight">
              {topic.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              A deep dive into {topic.title} in {language.name}.
            </p>
         </div>
         {!isLearningPlanTopic && (
            <TooltipProvider>
              {isUserAuthenticated ? (
                markAsCompleteButton
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    {markAsCompleteButton}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You must be logged in to save your progress.</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </TooltipProvider>
         )}
        </header>
      
      <div ref={topicContentRef}>
        <Suspense fallback={<LoadingSkeleton />}>
          {renderTopicContent()}
        </Suspense>
      </div>

      {showSimplifyButton && (
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleSimplify} disabled={isSimplifying} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Wand2 className="mr-2 h-5 w-5" />
            {isSimplifying ? 'Generating...' : 'Simplify with AI'}
          </Button>
          <p className="text-sm text-muted-foreground">Let AI help you understand this topic better.</p>
        </div>
      )}
      
      {isSimplifying && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/3" />
            </CardHeader>
             <CardContent>
                <Skeleton className="h-32 w-full" />
            </CardContent>
          </Card>
        </div>
      )}

      {simplifiedContent && (
        <div className="space-y-8 animate-in fade-in-50 duration-500">
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle className="flex items-center gap-3"><Lightbulb className="text-primary"/>Analogy</CardTitle>
                <CardDescription>{simplifiedContent.summary}</CardDescription>
             </CardHeader>
             <CardContent>
                <p className="text-lg italic text-foreground/90">"{simplifiedContent.analogy}"</p>
             </CardContent>
           </Card>

           <div className="grid md:grid-cols-2 gap-8">
               <Card className="border-primary/50 bg-primary/5">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-3"><List className="text-primary"/>Key Ideas</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <ul className="space-y-3">
                        {simplifiedContent.bulletPoints.map((point, i) => (
                           <li key={i} className="flex items-start gap-3">
                               <GitCommitHorizontal className="w-5 h-5 text-primary mt-1 shrink-0" />
                               <span className="text-base text-foreground/90">{point}</span>
                           </li>
                        ))}
                    </ul>
                 </CardContent>
               </Card>
               {simplifiedContent.examples && (
                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader className='flex-row items-center justify-between'>
                      <CardTitle className="flex items-center gap-3"><Code className="text-primary"/>Code Examples</CardTitle>
                      <Button variant="ghost" size="icon" onClick={handleCopyCode}>
                          {hasCopied ? (
                              <Check className="w-4 h-4 text-green-500" />
                          ) : (
                              <Copy className="w-4 h-4" />
                          )}
                          <span className="sr-only">Copy code</span>
                      </Button>
                  </CardHeader>
                  <CardContent>
                      <div className="bg-card p-4 rounded-md overflow-x-auto">
                        <pre className="whitespace-pre-wrap"><code className="font-code text-sm text-foreground">
                          {simplifiedContent.examples}
                        </code></pre>
                      </div>
                  </CardContent>
                </Card>
               )}
           </div>
        </div>
      )}
      
      {!isLearningPlanTopic && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Ask a Question
            </CardTitle>
            <CardDescription>
              Have a question about {topic.title}? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder={getQuestionPlaceholder()}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={isAsking}
            />
            <Button onClick={handleAskQuestion} disabled={isAsking || !question.trim()}>
              {isAsking ? 'Thinking...' : 'Get Answer'}
            </Button>
          </CardContent>
        </Card>
      )}
      
      {isAsking && (
        <Card>
            <CardContent className="p-6 space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
      )}

      {qaResult && (
        <Card className="border-primary/50 bg-primary/5 animate-in fade-in-50 duration-500">
          <CardHeader className="flex-row items-start gap-4">
            <div className="bg-primary text-primary-foreground p-2 rounded-full">
              <Sparkles className="w-5 h-5"/>
            </div>
            <div>
              <CardTitle>AI Answer</CardTitle>
              <CardDescription>Here's what our AI assistant came up with.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-table:border prose-th:p-2 prose-td:p-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: qaResult.answer }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
