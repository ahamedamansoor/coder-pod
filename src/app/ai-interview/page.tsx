'use client';

import { useState } from 'react';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { useRouter } from 'next/navigation';
import { Brain, Mic, MessageSquare, Target, Zap, Code, Users, Calculator, TrendingUp, Flame } from 'lucide-react';
import { InnovativeHeader, LearningPathTitle } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InterviewSimulator from '@/components/shared/interview-simulator';
import { FeatureGateModal } from '@/components/shared/feature-gate-modal';

// Interview Topics organized by categories
const interviewCategories = [
  {
    id: 'technical',
    name: 'Technical / Programming',
    icon: Code,
    color: 'blue',
    topics: [
      // Frontend (11)
      { id: 'javascript', name: 'JavaScript', description: 'ES6+, async/await, closures' },
      { id: 'typescript', name: 'TypeScript', description: 'Types, interfaces, generics' },
      { id: 'react', name: 'React', description: 'Hooks, components, state management' },
      { id: 'vue', name: 'Vue.js', description: 'Composition API, reactivity' },
      { id: 'angular', name: 'Angular', description: 'Components, services, RxJS' },
      { id: 'nextjs', name: 'Next.js', description: 'SSR, routing, API routes' },
      { id: 'html', name: 'HTML', description: 'Semantic HTML, accessibility' },
      { id: 'css', name: 'CSS', description: 'Flexbox, Grid, animations' },
      { id: 'tailwind', name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      { id: 'scss', name: 'SCSS', description: 'CSS preprocessor, variables, mixins' },
      { id: 'bootstrap', name: 'Bootstrap', description: 'Responsive framework' },
      
      // Backend (16)
      { id: 'nodejs', name: 'Node.js', description: 'Express, async patterns, APIs' },
      { id: 'express', name: 'Express.js', description: 'Web framework for Node.js' },
      { id: 'python', name: 'Python', description: 'Data structures, OOP, libraries' },
      { id: 'django', name: 'Django', description: 'Python web framework' },
      { id: 'flask', name: 'Flask', description: 'Lightweight Python framework' },
      { id: 'java', name: 'Java', description: 'OOP, collections, multithreading' },
      { id: 'spring', name: 'Spring Boot', description: 'REST APIs, dependency injection' },
      { id: 'csharp', name: 'C#', description: '.NET, LINQ, async' },
      { id: 'dotnet', name: '.NET', description: 'Microsoft framework' },
      { id: 'go', name: 'Go', description: 'Concurrency, goroutines' },
      { id: 'rust', name: 'Rust', description: 'Memory safety, ownership' },
      { id: 'php', name: 'PHP', description: 'Server-side scripting' },
      { id: 'laravel', name: 'Laravel', description: 'PHP framework' },
      { id: 'ruby', name: 'Ruby', description: 'Object-oriented language' },
      { id: 'rails', name: 'Ruby on Rails', description: 'Web framework' },
      { id: 'cpp', name: 'C++', description: 'System programming, OOP' },
      
      // Database (9)
      { id: 'sql', name: 'SQL & Databases', description: 'Queries, joins, optimization' },
      { id: 'mysql', name: 'MySQL', description: 'Relational database' },
      { id: 'postgresql', name: 'PostgreSQL', description: 'Advanced RDBMS' },
      { id: 'mongodb', name: 'MongoDB', description: 'NoSQL document database' },
      { id: 'redis', name: 'Redis', description: 'In-memory data store' },
      { id: 'cassandra', name: 'Cassandra', description: 'Distributed NoSQL' },
      { id: 'dynamodb', name: 'DynamoDB', description: 'AWS NoSQL database' },
      { id: 'oracle', name: 'Oracle', description: 'Enterprise database' },
      { id: 'sqlite', name: 'SQLite', description: 'Embedded database' },
      
      // DSA (8)
      { id: 'dsa', name: 'Data Structures & Algorithms', description: 'Arrays, trees, graphs, complexity' },
      { id: 'arrays', name: 'Arrays & Strings', description: 'Common patterns' },
      { id: 'linkedlist', name: 'Linked Lists', description: 'Node-based structures' },
      { id: 'trees', name: 'Trees & Graphs', description: 'Traversals, paths' },
      { id: 'dp', name: 'Dynamic Programming', description: 'Optimization problems' },
      { id: 'sorting', name: 'Sorting & Searching', description: 'Algorithms' },
      { id: 'recursion', name: 'Recursion', description: 'Recursive solutions' },
      { id: 'backtracking', name: 'Backtracking', description: 'Search techniques' },
      
      // Mobile (7)
      { id: 'swift', name: 'Swift (iOS)', description: 'iOS development' },
      { id: 'swiftui', name: 'SwiftUI', description: 'Declarative UI for iOS' },
      { id: 'kotlin', name: 'Kotlin (Android)', description: 'Android development' },
      { id: 'java-android', name: 'Java (Android)', description: 'Android platform' },
      { id: 'react-native', name: 'React Native', description: 'Cross-platform mobile' },
      { id: 'flutter', name: 'Flutter', description: 'Google mobile framework' },
      { id: 'ionic', name: 'Ionic', description: 'Hybrid mobile apps' },
      
      // DevOps & Cloud (8)
      { id: 'docker', name: 'Docker', description: 'Containerization' },
      { id: 'kubernetes', name: 'Kubernetes', description: 'Container orchestration' },
      { id: 'aws', name: 'AWS', description: 'Amazon cloud services' },
      { id: 'azure', name: 'Azure', description: 'Microsoft cloud' },
      { id: 'gcp', name: 'Google Cloud', description: 'Google cloud platform' },
      { id: 'cicd', name: 'CI/CD', description: 'Continuous integration/deployment' },
      { id: 'jenkins', name: 'Jenkins', description: 'Automation server' },
      { id: 'terraform', name: 'Terraform', description: 'Infrastructure as code' },
      
      // System Design (5)
      { id: 'system-design', name: 'System Design', description: 'Scalability, architecture patterns' },
      { id: 'microservices', name: 'Microservices', description: 'Distributed architecture' },
      { id: 'api-design', name: 'API Design', description: 'REST, GraphQL' },
      { id: 'scalability', name: 'Scalability', description: 'High availability' },
      { id: 'load-balancing', name: 'Load Balancing', description: 'Traffic distribution' },
    ]
  },
  {
    id: 'behavioral',
    name: 'Behavioral / HR',
    icon: Users,
    color: 'purple',
    topics: [
      { id: 'hr-general', name: 'HR Round', description: 'General HR questions, background' },
      { id: 'behavioral', name: 'Behavioral Questions', description: 'STAR method, past experiences' },
      { id: 'leadership', name: 'Leadership & Management', description: 'Team management, decision making' },
      { id: 'conflict', name: 'Conflict Resolution', description: 'Problem solving, teamwork' },
    ]
  },
  // Aptitude / Reasoning - HIDDEN FOR NOW
  // {
  //   id: 'aptitude',
  //   name: 'Aptitude / Reasoning',
  //   icon: Calculator,
  //   color: 'emerald',
  //   topics: [
  //     { id: 'quantitative', name: 'Quantitative Aptitude', description: 'Math, numbers, calculations' },
  //     { id: 'logical', name: 'Logical Reasoning', description: 'Patterns, puzzles, logic' },
  //     { id: 'verbal', name: 'Verbal Reasoning', description: 'Comprehension, vocabulary' },
  //   ]
  // }
];

export default function AIInterviewPage() {
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();
  const router = useRouter();
  const [showFeatureGate, setShowFeatureGate] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-100 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-400', border: 'border-blue-300 dark:border-blue-800' },
      purple: { bg: 'bg-purple-100 dark:bg-purple-950/30', text: 'text-purple-700 dark:text-purple-400', border: 'border-purple-300 dark:border-purple-800' },
      emerald: { bg: 'bg-emerald-100 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-800' },
      orange: { bg: 'bg-orange-100 dark:bg-orange-950/30', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-300 dark:border-orange-800' },
      indigo: { bg: 'bg-indigo-100 dark:bg-indigo-950/30', text: 'text-indigo-700 dark:text-indigo-400', border: 'border-indigo-300 dark:border-indigo-800' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div 
      style={{ width: '100vw', height: '100vh' }}
      className="flex flex-col overflow-hidden bg-background relative"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
        {/* Subtle floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <InnovativeHeader 
        currentPage="ai-interview"
        showNavigation={true}
        user={user}
        onLogout={handleLogout}
      />

      {/* Page Title - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b">
        <LearningPathTitle
          icon={Brain}
          title="AI-Powered Interview Practice"
          subtitle="Practice technical interviews with AI. Get instant feedback, improve your answers, and build confidence."
        />
      </div>

      {/* Main content - Scrollable */}
      <main className="flex-1 relative z-10 overflow-y-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* AI Interview Simulator Card */}
        <Card className="relative overflow-hidden border-2 border-emerald-200/50 dark:border-emerald-900/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl mb-12">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 left-1/4 w-64 h-64 bg-emerald-400/10 dark:bg-emerald-600/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <CardContent className="relative p-8">
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Mic className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold">Mock Interviews</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  AI-generated questions tailored to your chosen language
                </p>
              </div>

              <div className="p-6 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-teal-500 text-white">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold">Real-time Feedback</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Instant, constructive feedback with ideal solutions
                </p>
              </div>

              <div className="p-6 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/50 dark:border-cyan-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold">All Languages</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  JavaScript, React, Java, Spring, HTML, CSS and more
                </p>
              </div>
            </div>

            {/* Interview Categories - Click to Start */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Choose Your Interview Category</h3>
                <p className="text-sm text-muted-foreground">
                  Select a category to start • Choose specific topic in the interview modal
                </p>
              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {interviewCategories.map((category) => {
                  const Icon = category.icon;
                  const colorClasses = getColorClasses(category.color);

                  return (
                    <Card
                      key={category.id}
                      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:scale-105"
                    >
                      {/* Category Card Content */}
                      <div
                        onClick={() => {
                          if (!user || user.isAnonymous) {
                            setShowFeatureGate(true);
                          }
                        }}
                        className="p-6"
                      >
                        {/* Icon and Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${colorClasses.bg} group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.topics.length}+ topics
                          </Badge>
                        </div>

                        {/* Title and Description */}
                        <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Practice interview questions for {category.name.toLowerCase()}
                        </p>

                        {/* Popular Topics Preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic.id}
                              className="text-xs px-2 py-1 rounded-full bg-muted"
                            >
                              {topic.name}
                            </span>
                          ))}
                          {category.topics.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-muted">
                              +{category.topics.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Start Button */}
                        {!user || user.isAnonymous ? (
                          <Button
                            className="w-full"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowFeatureGate(true);
                            }}
                          >
                            <Mic className="w-4 h-4 mr-2" />
                            Start Interview
                          </Button>
                        ) : (
                          <InterviewSimulator language="JavaScript" category={category.id}>
                            <Button className="w-full" variant="outline">
                              <Mic className="w-4 h-4 mr-2" />
                              Start Interview
                            </Button>
                          </InterviewSimulator>
                        )}
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                    </Card>
                  );
                })}
              </div>

              {/* Helper Text */}
              <div className="text-center mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Tip:</strong> After clicking start, you'll see a dropdown with {interviewCategories.reduce((acc, cat) => acc + cat.topics.length, 0)}+ topics to choose from
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Powered by 3 reliable AI providers • Voice & Text modes available
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Gate Modal */}
        <FeatureGateModal 
          isOpen={showFeatureGate}
          onClose={() => setShowFeatureGate(false)}
          featureName="AI Interview"
        />
      </main>
    </div>
  );
}
