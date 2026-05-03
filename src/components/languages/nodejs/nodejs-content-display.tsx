'use client';

import { useState, useEffect } from 'react';
import { Language, Topic } from '@/data/languages';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Play, CheckCircle } from 'lucide-react';
import { nodejsInterviewQuestions } from '@/data/languages/nodejs-interview-questions';
import NodejsInterviewQuestions from './topics/nodejs-interview-questions';
import { CodeSnippet } from '@/components/shared/code-snippet';

interface NodejsContentDisplayProps {
  topic: Topic;
  language: Language;
}

export function NodejsContentDisplay({ topic, language }: NodejsContentDisplayProps) {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  // Filter questions related to this topic
  const topicQuestions = nodejsInterviewQuestions.filter(q => 
    q.category === topic.category || 
    topic.title.toLowerCase().includes(q.question.toLowerCase().split(' ')[0].toLowerCase())
  );

  const toggleSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  // If this is the interview questions topic, show the dedicated component
  if (topic.slug === 'interview-questions') {
    return <NodejsInterviewQuestions />;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{topic.title}</h1>
            <p className="text-muted-foreground">{language.name} Interview Preparation</p>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {topic.explanation}
        </p>

        {topic.category && (
          <Badge variant="secondary" className="w-fit">
            {topic.category}
          </Badge>
        )}
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="questions">Interview Questions</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Key Concepts
              </CardTitle>
              <CardDescription>
                Essential concepts you need to understand for {topic.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Core Topics</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Understanding the fundamental concepts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Practical implementation patterns
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Best practices and common pitfalls
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Learning Objectives</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Master the core concepts</li>
                    <li>• Understand real-world applications</li>
                    <li>• Prepare for technical interviews</li>
                    <li>• Build practical examples</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Example Code */}
          {topicQuestions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Example Code
                </CardTitle>
                <CardDescription>
                  Practical code example for {topic.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeSnippet
                   code={topicQuestions[0].codeSnippet}
                   language="javascript"
                   showLineNumbers
                 />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="questions" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Interview Questions ({topicQuestions.length})
            </h3>
            
            {topicQuestions.map((question, index) => (
              <Card key={question.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-lg">
                        Q{index + 1}: {question.question}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{question.category}</Badge>
                        <Badge 
                          variant={
                            question.difficulty === 'Beginner' ? 'default' :
                            question.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
                          }
                        >
                          {question.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSectionComplete(question.id)}
                      className="ml-2"
                    >
                      <CheckCircle 
                        className={`w-5 h-5 ${
                          completedSections.has(question.id) 
                            ? 'text-green-600 fill-green-600' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Explanation:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                  
                   <div>
                     <h4 className="font-semibold mb-2">Code Example:</h4>
                     <CodeSnippet
                       code={question.codeSnippet}
                       language="javascript"
                       showLineNumbers
                     />
                   </div>
                </CardContent>
              </Card>
            ))}

            {topicQuestions.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Questions Yet</h3>
                  <p className="text-muted-foreground text-center">
                    Interview questions for this topic are being prepared. 
                    Check back soon for comprehensive questions and answers.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="practice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Practice Exercises
              </CardTitle>
              <CardDescription>
                Hands-on exercises to master {topic.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Basic Exercise</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Implement a simple example to understand the basics
                  </p>
                  <Button size="sm" variant="outline">
                    Start Exercise
                  </Button>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Advanced Challenge</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Solve a complex problem using advanced concepts
                  </p>
                  <Button size="sm" variant="outline">
                    Start Challenge
                  </Button>
                </Card>
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">💡 Pro Tip</h4>
                <p className="text-sm text-muted-foreground">
                  Practice regularly and try to implement these concepts in real projects. 
                  The best way to learn is by doing!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
