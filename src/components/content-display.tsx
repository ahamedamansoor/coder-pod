
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
import { Wand2, HelpCircle, Sparkles, CheckSquare } from 'lucide-react';
import React from 'react';
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
import { JavaLearningRoadmap } from './java-learning-roadmap';
import { WhatIsJava, TheStoryOfJava, JavaFeatures, JdkJreJvm, JavaEnvironmentSetup, FirstJavaProgram, HowJavaWorks, JavaComments, JavaEscapeSequences, JavaLiterals, JavaConstants, JavaArithmeticOperators, JavaAssignmentOperators, JavaComparisonOperators, JavaLogicalOperators, JavaBitwiseOperators, JavaTernaryOperator, JavaOperatorPrecedence, JavaScannerClass, JavaReadingDifferentTypes, JavaInputValidation, JavaIfElse, JavaSwitch, JavaForLoop, JavaWhileLoop, JavaBreakContinue, JavaStringMethods, JavaArrays, JavaMultiDimensionalArrays, JavaMethods, JavaMethodParameters, JavaMethodOverloading, JavaScope, JavaRecursion, JavaClassesObjects, JavaClassAttributes, JavaClassMethods, JavaConstructors, JavaAccessModifiers, JavaEncapsulation, JavaPackages, JavaInheritance, JavaPolymorphism, JavaInnerClasses, JavaAbstraction, JavaInterfaces, JavaEnums, JavaDate, JavaHashMap, JavaHashSet, JavaIterator, JavaWrapperClasses, JavaExceptions, JavaRegex, JavaThreads, JavaLambda, JavaFileHandling, JavaTypeCasting, JavaVariables, JavaPrintFormats, JavaDataTypes, JavaArrayList, JavaLinkedList } from './java-topics';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useJava } from '@/app/java/java-context';

export function ContentDisplay({ 
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
  
  const { completedTopics, handleToggleComplete } = useJava();

  const { toast } = useToast();

  const handleSimplify = async () => {
    setIsSimplifying(true);
    setSimplifiedContent(null);
    try {
      const result = await simplifyTopicExplanation({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
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
      setQaResult(result);
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
  
  const isLearningPlanTopic = language.slug === 'java' && topic.slug === 'learning-plan';

  const renderTopicContent = () => {
    if (isLearningPlanTopic) return <JavaLearningRoadmap />;
    if (topic.slug === 'what-is-java') return <WhatIsJava />;
    if (topic.slug === 'history-of-java') return <TheStoryOfJava />;
    if (topic.slug === 'features-of-java') return <JavaFeatures />;
    if (topic.slug === 'jdk-jre-jvm') return <JdkJreJvm />;
    if (topic.slug === 'how-java-works') return <HowJavaWorks />;
    if (topic.slug === 'setting-up-environment') return <JavaEnvironmentSetup />;
    if (topic.slug === 'first-java-program') return <FirstJavaProgram onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'comments-in-java') return <JavaComments onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'print-statements-and-format-specifiers') return <JavaPrintFormats onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'data-types') return <JavaDataTypes onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'variables') return <JavaVariables onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'type-casting') return <JavaTypeCasting onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'escape-sequences') return <JavaEscapeSequences onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'constants') return <JavaConstants onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'literals') return <JavaLiterals onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'arithmetic-operators') return <JavaArithmeticOperators onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'assignment-operators') return <JavaAssignmentOperators onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'comparison-operators') return <JavaComparisonOperators onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'logical-operators') return <JavaLogicalOperators onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'bitwise-operators') return <JavaBitwiseOperators onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'ternary-operator') return <JavaTernaryOperator onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'operator-precedence') return <JavaOperatorPrecedence onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'scanner-class') return <JavaScannerClass />;
    if (topic.slug === 'reading-different-types') return <JavaReadingDifferentTypes />;
    if (topic.slug === 'input-validation') return <JavaInputValidation />;
    if (topic.slug === 'if-else') return <JavaIfElse onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'switch') return <JavaSwitch onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'for-loop') return <JavaForLoop onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'while-loop') return <JavaWhileLoop onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'break-continue') return <JavaBreakContinue onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'strings') return <JavaStringMethods onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'arrays') return <JavaArrays onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'multi-dimensional-arrays') return <JavaMultiDimensionalArrays onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'methods') return <JavaMethods onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'method-parameters') return <JavaMethodParameters onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'method-overloading') return <JavaMethodOverloading onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'scope') return <JavaScope onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'recursion') return <JavaRecursion onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'classes-objects') return <JavaClassesObjects onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'class-attributes') return <JavaClassAttributes onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'class-methods') return <JavaClassMethods />;
    if (topic.slug === 'constructors') return <JavaConstructors onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'access-modifiers') return <JavaAccessModifiers />;
    if (topic.slug === 'encapsulation') return <JavaEncapsulation onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'packages') return <JavaPackages />;
    if (topic.slug === 'inheritance') return <JavaInheritance onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'polymorphism') return <JavaPolymorphism onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'inner-classes') return <JavaInnerClasses onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'abstraction') return <JavaAbstraction onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'interfaces') return <JavaInterfaces onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'enums') return <JavaEnums onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'date-time') return <JavaDate />;
    if (topic.slug === 'hashmap') return <JavaHashMap />;
    if (topic.slug === 'hashset') return <JavaHashSet />;
    if (topic.slug === 'arraylist') return <JavaArrayList onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'linkedlist') return <JavaLinkedList onOpenEditor={onOpenEditor} />;
    if (topic.slug === 'iterator') return <JavaIterator />;
    if (topic.slug === 'wrapper-classes') return <JavaWrapperClasses />;
    if (topic.slug === 'exceptions') return <JavaExceptions />;
    if (topic.slug === 'regex') return <JavaRegex />;
    if (topic.slug === 'threads') return <JavaThreads />;
    if (topic.slug === 'lambda') return <JavaLambda />;
    if (topic.slug === 'file-handling') return <JavaFileHandling />;

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
         {!isLearningPlanTopic && completedTopics && (
            <div className="flex items-center space-x-2 shrink-0 ml-4 bg-muted p-3 rounded-lg border">
                <Checkbox 
                    id={`complete-${topic.slug}`} 
                    checked={completedTopics.has(topic.slug)}
                    onCheckedChange={() => handleToggleComplete(topic.slug)}
                />
                <Label htmlFor={`complete-${topic.slug}`} className="font-semibold text-muted-foreground">
                    Mark as completed
                </Label>
            </div>
         )}
        </header>
      
      {renderTopicContent()}

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
        <div className="space-y-6 animate-in fade-in-50 duration-500">
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle>Simplified Explanation</CardTitle>
                <CardDescription>A simpler take on {topic.title}.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="whitespace-pre-wrap font-body text-base leading-relaxed text-foreground/90">
                  {simplifiedContent.simplifiedExplanation}
                </div>
             </CardContent>
           </Card>
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>See {topic.title} in action.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="bg-card p-4 rounded-md overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="font-code text-sm text-foreground">
                    {simplifiedContent.examples}
                  </code></pre>
                </div>
             </CardContent>
           </Card>
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
              placeholder={`e.g., "What is the difference between a while and a do-while loop?"`}
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
              <CardDescription>Here's what our AI assistant came with.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-code:text-primary whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: qaResult.answer.replace(/\n/g, '<br />') }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

    