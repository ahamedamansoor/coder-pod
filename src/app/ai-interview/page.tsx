'use client';

import { useUser } from '@/firebase';
import { Brain, Sparkles, Mic, MessageSquare, Target, Award, Zap } from 'lucide-react';
import { InnovativeHeader } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { languages } from '@/data/languages';

export default function AIInterviewPage() {
  const { user } = useUser();
  const router = useRouter();

  const availableLanguages = languages.filter(lang => 
    ['javascript', 'react', 'html', 'css', 'java', 'spring', 'typescript', 'vue'].includes(lang.slug)
  );

  const handleStartInterview = (languageSlug: string) => {
    router.push(`/dashboard?interview=${languageSlug}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <InnovativeHeader 
        currentPage="ai-interview"
        showNavigation={true}
        user={user}
      />

      {/* Full-width main content */}
      <main className="flex-1 w-full px-6 sm:px-8 lg:px-12 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4 shadow-lg shadow-blue-600/20 dark:shadow-blue-900/30">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            AI-Powered Interview Practice
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practice technical interviews with AI. Get instant feedback, improve your answers, and build confidence.
          </p>
        </div>

        {/* Features Grid - full-width adaptive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Voice & Text Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Practice with voice recognition or type your answers
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instant Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered feedback on your answers immediately
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Personalized Practice</h3>
                <p className="text-sm text-muted-foreground">
                  Questions tailored to your skill level and goals
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Language Selection */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Choose Your Language</h2>
            <p className="text-muted-foreground">Select a language to start your interview practice</p>
          </div>

          {/* Use auto-fit to stretch cards across full width */}
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {availableLanguages.map((lang) => {
              const colorMap: Record<string, string> = {
                javascript: 'from-yellow-600 to-orange-600',
                react: 'from-cyan-600 to-blue-600',
                html: 'from-orange-600 to-red-600',
                css: 'from-blue-600 to-indigo-600',
                java: 'from-red-600 to-orange-600',
                spring: 'from-green-600 to-emerald-600',
                typescript: 'from-indigo-600 to-purple-600',
                vue: 'from-emerald-600 to-green-600'
              };

              const gradient = colorMap[lang.slug] || 'from-blue-600 to-purple-600';

              return (
                <Card
                  key={lang.slug}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/40"
                  onClick={() => handleStartInterview(lang.slug)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="p-6 relative">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-black/10`}>
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">{lang.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Practice {lang.name} interview questions
                    </p>

                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartInterview(lang.slug);
                      }}
                      className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90`}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Start Interview
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - full width aesthetics */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Ready to Excel?</h3>
              <p className="text-muted-foreground mb-4">
                Join thousands of developers who are mastering technical interviews with AI
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
