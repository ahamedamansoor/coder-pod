
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
import { Wand2, HelpCircle, Sparkles } from 'lucide-react';
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
import { WhatIsJava, TheStoryOfJava, JavaFeatures, JdkJreJvm, JavaEnvironmentSetup, FirstJavaProgram, HowJavaWorks, JavaComments, JavaEscapeSequences, JavaLiterals, JavaConstants, JavaArithmeticOperators, JavaAssignmentOperators, JavaComparisonOperators, JavaLogicalOperators, JavaBitwiseOperators, JavaTernaryOperator, JavaOperatorPrecedence, JavaScannerClass, JavaReadingDifferentTypes, JavaInputValidation, JavaIfElse, JavaSwitch, JavaForLoop, JavaWhileLoop, JavaBreakContinue, JavaStringMethods, JavaArrays, JavaMultiDimensionalArrays, JavaMethods, JavaMethodParameters, JavaMethodOverloading, JavaScope, JavaRecursion, JavaClassesObjects, JavaClassAttributes, JavaClassMethods, JavaConstructors, JavaAccessModifiers, JavaEncapsulation, JavaPackages, JavaInheritance, JavaPolymorphism, JavaInnerClasses, JavaAbstraction, JavaInterfaces, JavaEnums, JavaDate, JavaHashMap, JavaHashSet, JavaIterator, JavaWrapperClasses, JavaExceptions, JavaRegex, JavaThreads, JavaLambda, JavaFileHandling, JavaTypeCasting, JavaVariables, JavaPrintFormats, JavaDataTypes } from './java-topics';

export function ContentDisplay({ topic, language, onOpenEditor }: { topic: Topic, language: Language, onOpenEditor: (code: string) => void; }) {
  const [isSimplifying, setIsSimplifying] = React.useState(false);
  const [simplifiedContent, setSimplifiedContent] =
    React.useState<SimplifyTopicExplanationOutput | null>(null);
  
  const [question, setQuestion] = React.useState('');
  const [isAsking, setIsAsking] = React.useState(false);
  const [qaResult, setQaResult] = React.useState<AnswerQuestionOutput | null>(null);

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
  
  const isWhatIsJavaTopic = language.slug === 'java' && topic.slug === 'what-is-java';
  const isHistoryOfJavaTopic = language.slug === 'java' && topic.slug === 'history-of-java';
  const isFeaturesOfJavaTopic = language.slug === 'java' && topic.slug === 'features-of-java';
  const isJdkJreJvmTopic = language.slug === 'java' && topic.slug === 'jdk-jre-jvm';
  const isHowJavaWorksTopic = language.slug === 'java' && topic.slug === 'how-java-works';
  const isJavaPrintTopic = language.slug === 'java' && topic.slug === 'print-statements-and-format-specifiers';
  const isJavaDataTypesTopic = language.slug === 'java' && topic.slug === 'data-types';
  const isJavaVariablesTopic = language.slug === 'java' && topic.slug === 'variables';
  const isJavaTypeCastingTopic = language.slug === 'java' && topic.slug === 'type-casting';
  const isLearningPlanTopic = language.slug === 'java' && topic.slug === 'learning-plan';
  const isSettingUpEnvironmentTopic = language.slug === 'java' && topic.slug === 'setting-up-environment';
  const isFirstJavaProgramTopic = language.slug === 'java' && topic.slug === 'first-java-program';
  const isCommentsInJavaTopic = language.slug === 'java' && topic.slug === 'comments-in-java';
  const isEscapeSequencesTopic = language.slug === 'java' && topic.slug === 'escape-sequences';
  const isConstantsTopic = language.slug === 'java' && topic.slug === 'constants';
  const isLiteralsTopic = language.slug === 'java' && topic.slug === 'literals';
  const isArithmeticOperatorsTopic = language.slug === 'java' && topic.slug === 'arithmetic-operators';
  const isAssignmentOperatorsTopic = language.slug === 'java' && topic.slug === 'assignment-operators';
  const isComparisonOperatorsTopic = language.slug === 'java' && topic.slug === 'comparison-operators';
  const isLogicalOperatorsTopic = language.slug === 'java' && topic.slug === 'logical-operators';
  const isBitwiseOperatorsTopic = language.slug === 'java' && topic.slug === 'bitwise-operators';
  const isTernaryOperatorTopic = language.slug === 'java' && topic.slug === 'ternary-operator';
  const isOperatorPrecedenceTopic = language.slug === 'java' && topic.slug === 'operator-precedence';
  const isScannerClassTopic = language.slug === 'java' && topic.slug === 'scanner-class';
  const isReadingDifferentTypesTopic = language.slug === 'java' && topic.slug === 'reading-different-types';
  const isInputValidationTopic = language.slug === 'java' && topic.slug === 'input-validation';
  const isIfElseTopic = language.slug === 'java' && topic.slug === 'if-else';
  const isSwitchTopic = language.slug === 'java' && topic.slug === 'switch';
  const isForLoopTopic = language.slug === 'java' && topic.slug === 'for-loop';
  const isWhileLoopTopic = language.slug === 'java' && topic.slug === 'while-loop';
  const isBreakContinueTopic = language.slug === 'java' && topic.slug === 'break-continue';
  const isStringsTopic = language.slug === 'java' && topic.slug === 'strings';
  const isArraysTopic = language.slug === 'java' && topic.slug === 'arrays';
  const isMultiDimensionalArraysTopic = language.slug === 'java' && topic.slug === 'multi-dimensional-arrays';
  const isMethodsTopic = language.slug === 'java' && topic.slug === 'methods';
  const isMethodParametersTopic = language.slug === 'java' && topic.slug === 'method-parameters';
  const isMethodOverloadingTopic = language.slug === 'java' && topic.slug === 'method-overloading';
  const isScopeTopic = language.slug === 'java' && topic.slug === 'scope';
  const isRecursionTopic = language.slug === 'java' && topic.slug === 'recursion';
  const isClassesObjectsTopic = language.slug === 'java' && topic.slug === 'classes-objects';
  const isClassAttributesTopic = language.slug === 'java' && topic.slug === 'class-attributes';
  const isClassMethodsTopic = language.slug === 'java' && topic.slug === 'class-methods';
  const isConstructorsTopic = language.slug === 'java' && topic.slug === 'constructors';
  const isAccessModifiersTopic = language.slug === 'java' && topic.slug === 'access-modifiers';
  const isEncapsulationTopic = language.slug === 'java' && topic.slug === 'encapsulation';
  const isPackagesTopic = language.slug === 'java' && topic.slug === 'packages';
  const isInheritanceTopic = language.slug === 'java' && topic.slug === 'inheritance';
  const isPolymorphismTopic = language.slug === 'java' && topic.slug === 'polymorphism';
  const isInnerClassesTopic = language.slug === 'java' && topic.slug === 'inner-classes';
  const isAbstractionTopic = language.slug === 'java' && topic.slug === 'abstraction';
  const isInterfacesTopic = language.slug === 'java' && topic.slug === 'interfaces';
  const isEnumsTopic = language.slug === 'java' && topic.slug === 'enums';
  const isDateTopic = language.slug === 'java' && topic.slug === 'date-time';
  const isHashMapTopic = language.slug === 'java' && topic.slug === 'hashmap';
  const isHashSetTopic = language.slug === 'java' && topic.slug === 'hashset';
  const isIteratorTopic = language.slug === 'java' && topic.slug === 'iterator';
  const isWrapperClassesTopic = language.slug === 'java' && topic.slug === 'wrapper-classes';
  const isExceptionsTopic = language.slug === 'java' && topic.slug === 'exceptions';
  const isRegexTopic = language.slug === 'java' && topic.slug === 'regex';
  const isThreadsTopic = language.slug === 'java' && topic.slug === 'threads';
  const isLambdaTopic = language.slug === 'java' && topic.slug === 'lambda';
  const isFileHandlingTopic = language.slug === 'java' && topic.slug === 'file-handling';


  const renderTopicContent = () => {
    if (isLearningPlanTopic) return <JavaLearningRoadmap />;
    if (isWhatIsJavaTopic) return <WhatIsJava />;
    if (isHistoryOfJavaTopic) return <TheStoryOfJava />;
    if (isFeaturesOfJavaTopic) return <JavaFeatures />;
    if (isJdkJreJvmTopic) return <JdkJreJvm />;
    if (isHowJavaWorksTopic) return <HowJavaWorks />;
    if(isSettingUpEnvironmentTopic) return <JavaEnvironmentSetup />;
    if (isFirstJavaProgramTopic) return <FirstJavaProgram onOpenEditor={onOpenEditor} />;
    if (isCommentsInJavaTopic) return <JavaComments onOpenEditor={onOpenEditor} />;
    if (isJavaPrintTopic) return <JavaPrintFormats onOpenEditor={onOpenEditor} />;
    if (isJavaDataTypesTopic) return <JavaDataTypes onOpenEditor={onOpenEditor} />;
    if (isJavaVariablesTopic) return <JavaVariables onOpenEditor={onOpenEditor} />;
    if (isJavaTypeCastingTopic) return <JavaTypeCasting onOpenEditor={onOpenEditor} />;
    if (isEscapeSequencesTopic) return <JavaEscapeSequences onOpenEditor={onOpenEditor} />;
    if (isConstantsTopic) return <JavaConstants onOpenEditor={onOpenEditor} />;
    if (isLiteralsTopic) return <JavaLiterals onOpenEditor={onOpenEditor} />;
    if (isArithmeticOperatorsTopic) return <JavaArithmeticOperators onOpenEditor={onOpenEditor} />;
    if (isAssignmentOperatorsTopic) return <JavaAssignmentOperators onOpenEditor={onOpenEditor} />;
    if (isComparisonOperatorsTopic) return <JavaComparisonOperators onOpenEditor={onOpenEditor} />;
    if (isLogicalOperatorsTopic) return <JavaLogicalOperators onOpenEditor={onOpenEditor} />;
    if (isBitwiseOperatorsTopic) return <JavaBitwiseOperators onOpenEditor={onOpenEditor} />;
    if (isTernaryOperatorTopic) return <JavaTernaryOperator onOpenEditor={onOpenEditor} />;
    if (isOperatorPrecedenceTopic) return <JavaOperatorPrecedence onOpenEditor={onOpenEditor} />;
    if (isScannerClassTopic) return <JavaScannerClass />;
    if (isReadingDifferentTypesTopic) return <JavaReadingDifferentTypes />;
    if (isInputValidationTopic) return <JavaInputValidation />;
    if (isIfElseTopic) return <JavaIfElse onOpenEditor={onOpenEditor} />;
    if (isSwitchTopic) return <JavaSwitch onOpenEditor={onOpenEditor} />;
    if (isForLoopTopic) return <JavaForLoop />;
    if (isWhileLoopTopic) return <JavaWhileLoop onOpenEditor={onOpenEditor} />;
    if (isBreakContinueTopic) return <JavaBreakContinue onOpenEditor={onOpenEditor} />;
    if (isStringsTopic) return <JavaStringMethods onOpenEditor={onOpenEditor} />;
    if (isArraysTopic) return <JavaArrays />;
    if (isMultiDimensionalArraysTopic) return <JavaMultiDimensionalArrays />;
    if (isMethodsTopic) return <JavaMethods />;
    if (isMethodParametersTopic) return <JavaMethodParameters />;
    if (isMethodOverloadingTopic) return <JavaMethodOverloading />;
    if (isScopeTopic) return <JavaScope />;
    if (isRecursionTopic) return <JavaRecursion />;
    if (isClassesObjectsTopic) return <JavaClassesObjects />;
    if (isClassAttributesTopic) return <JavaClassAttributes />;
    if (isClassMethodsTopic) return <JavaClassMethods />;
    if (isConstructorsTopic) return <JavaConstructors />;
    if (isAccessModifiersTopic) return <JavaAccessModifiers />;
    if (isEncapsulationTopic) return <JavaEncapsulation />;
    if (isPackagesTopic) return <JavaPackages />;
    if (isInheritanceTopic) return <JavaInheritance />;
    if (isPolymorphismTopic) return <JavaPolymorphism />;
    if (isInnerClassesTopic) return <JavaInnerClasses />;
    if (isAbstractionTopic) return <JavaAbstraction />;
    if (isInterfacesTopic) return <JavaInterfaces />;
    if (isEnumsTopic) return <JavaEnums />;
    if (isDateTopic) return <JavaDate />;
    if (isHashMapTopic) return <JavaHashMap />;
    if (isHashSetTopic) return <JavaHashSet />;
    if (isIteratorTopic) return <JavaIterator />;
    if (isWrapperClassesTopic) return <JavaWrapperClasses />;
    if (isExceptionsTopic) return <JavaExceptions />;
    if (isRegexTopic) return <JavaRegex />;
    if (isThreadsTopic) return <JavaThreads />;
    if (isLambdaTopic) return <JavaLambda />;
    if (isFileHandlingTopic) return <JavaFileHandling />;

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

  const noCustomContentTopics = [
  ];

  const showSimplifyButton = !noCustomContentTopics.includes(topic.slug) && ![
    isLearningPlanTopic,
    isWhatIsJavaTopic,
    isHistoryOfJavaTopic,
    isFeaturesOfJavaTopic,
    isJdkJreJvmTopic,
    isHowJavaWorksTopic,
    isSettingUpEnvironmentTopic,
    isFirstJavaProgramTopic,
    isCommentsInJavaTopic,
    isJavaPrintTopic,
    isJavaDataTypesTopic,
    isJavaVariablesTopic,
    isJavaTypeCastingTopic,
    isEscapeSequencesTopic,
    isConstantsTopic,
    isLiteralsTopic,
    isArithmeticOperatorsTopic,
    isAssignmentOperatorsTopic,
    isComparisonOperatorsTopic,
    isLogicalOperatorsTopic,
    isBitwiseOperatorsTopic,
    isTernaryOperatorTopic,
    isOperatorPrecedenceTopic,
    isScannerClassTopic,
    isReadingDifferentTypesTopic,
    isInputValidationTopic,
    isIfElseTopic,
    isSwitchTopic,
    isForLoopTopic,
    isWhileLoopTopic,
    isBreakContinueTopic,
    isStringsTopic,
    isArraysTopic,
    isMultiDimensionalArraysTopic,
    isMethodsTopic,
    isMethodParametersTopic,
    isMethodOverloadingTopic,
    isScopeTopic,
    isRecursionTopic,
    isClassesObjectsTopic,
    isClassAttributesTopic,
    isClassMethodsTopic,
    isConstructorsTopic,
    isAccessModifiersTopic,
    isEncapsulationTopic,
    isPackagesTopic,
    isInheritanceTopic,
    isPolymorphismTopic,
    isInnerClassesTopic,
    isAbstractionTopic,
    isInterfacesTopic,
    isEnumsTopic,
    isDateTopic,
    isHashMapTopic,
    isHashSetTopic,
    isIteratorTopic,
    isWrapperClassesTopic,
    isExceptionsTopic,
    isRegexTopic,
    isThreadsTopic,
    isLambdaTopic,
    isFileHandlingTopic
  ].some(Boolean);

  return (
    <div className="space-y-8">
       {showSimplifyButton && (
        <header className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            {topic.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            A deep dive into {topic.title} in {language.name}.
          </p>
        </header>
      )}
      
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
              <CardDescription>Here's what our AI assistant came up with.</CardDescription>
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
