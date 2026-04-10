
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { EnhancedSignInForm } from '@/components/auth/enhanced-sign-in-form';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader } from '@/components/ui/card';
import { Logo } from '@/components/shared/layout/logo';
import { useLoading } from '@/hooks/use-loading';
import { getRandomQuote } from '@/data/motivational-quotes';
import { Quote } from 'lucide-react';

function LoginSkeleton() {
  return (
    <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
                <Logo clickable={false} />
            </div>
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-5 w-1/2 mx-auto" />
        </CardHeader>
    </Card>
  )
}

function LoginContent() {
    const { hideLoader } = useLoading();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [quote, setQuote] = useState<{text: string; author: string} | null>(null);

    useEffect(() => {
        hideLoader();
        
        // Set quote only on client side to prevent hydration mismatch
        setQuote(getRandomQuote());
        
        // Handle OAuth callback
        const email = searchParams.get('email');
        const code = searchParams.get('code');
        
        if (email && code) {
         // Store email for client-side auth and redirect to dashboard
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('last-login-email', email);
            }
            // Add a small delay to ensure session is established
            setTimeout(() => {
                router.replace('/dashboard');
            }, 500);
        }
    }, [hideLoader, router, searchParams]);

    return (
        <div className="relative flex min-h-screen w-full overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-purple-50/40 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
                {/* Floating orbs */}
                <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-float" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/8 dark:bg-purple-500/4 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/6 dark:bg-primary/3 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Left Side - Form */}
            <div className="relative flex items-center justify-center w-full lg:w-1/2 p-8 z-10">
                <Suspense fallback={<LoginSkeleton />}>
                    <EnhancedSignInForm />
                </Suspense>
            </div>
            
            {/* Beautiful Divider */}
            <div className="hidden lg:block relative w-px h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            </div>
            
            {/* Right Side - Clean Motivational Quote */}
            <div className="hidden lg:flex flex-col items-center justify-center w-1/2 p-12 relative z-10">
                <div className="max-w-xl w-full">
                    {/* Quote Display - Clean & Simple */}
                    <div className="relative">
                        {/* Subtle background decoration */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl opacity-50 blur-2xl" />
                        
                        {/* Animated border wrapper */}
                        <div className="relative rounded-3xl p-[2px] bg-slate-200/50 dark:bg-slate-700/50 overflow-hidden">
                            {/* Line 1: Blue shooting star clockwise */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                <div className="absolute w-32 h-2 animate-border-travel-1" style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(37, 99, 235, 0.05) 30%, rgba(59, 130, 246, 0.3) 60%, rgba(96, 165, 250, 0.8) 85%, rgba(147, 197, 253, 1) 95%, rgba(191, 219, 254, 1) 100%)',
                                    boxShadow: '0 0 40px 10px rgba(59, 130, 246, 0.9), 0 0 20px 5px rgba(96, 165, 250, 1)',
                                    filter: 'blur(0.8px)',
                                    borderRadius: '50% 0 0 50%'
                                }} />
                            </div>
                            {/* Line 2: Blue-indigo shooting star counter-clockwise */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                <div className="absolute w-32 h-2 animate-border-travel-2" style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(67, 56, 202, 0.05) 30%, rgba(99, 102, 241, 0.3) 60%, rgba(129, 140, 248, 0.8) 85%, rgba(165, 180, 252, 1) 95%, rgba(199, 210, 254, 1) 100%)',
                                    boxShadow: '0 0 40px 10px rgba(99, 102, 241, 0.8), 0 0 20px 5px rgba(129, 140, 248, 1)',
                                    filter: 'blur(0.8px)',
                                    borderRadius: '50% 0 0 50%'
                                }} />
                            </div>
                            <div className="relative p-10 rounded-3xl bg-white dark:bg-slate-900 shadow-lg">
                                {/* Quote icon */}
                                <Quote className="w-10 h-10 text-blue-400 dark:text-blue-500 mb-6" />
                                
                                {/* Quote text */}
                                {quote && (
                                    <blockquote className="space-y-6">
                                        <p className="text-xl font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                                            "{quote.text}"
                                        </p>
                                        
                                        {/* Divider */}
                                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full" />
                                        
                                        {/* Author */}
                                        <footer>
                                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                                — {quote.author}
                                            </p>
                                        </footer>
                                    </blockquote>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Platform Features */}
                <div className="mt-12 text-center space-y-8">
                    <div className="space-y-6">
                        <p className="text-xl font-light text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed tracking-wide">
                            All modern development requirements in one place - from learning paths to AI tools, everything you need to master coding
                        </p>
                    </div>
                    
                    {/* Feature Tags */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                            Learning Paths
                        </span>
                        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                            Roadmaps
                        </span>
                        <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                            67+ Cheatsheets
                        </span>
                        <span className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">
                            Interview Practice
                        </span>
                        <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                            Personal Notes
                        </span>
                        <span className="px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-sm font-medium">
                            Discover
                        </span>
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                            AI Tools
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense>
            <LoginContent />
        </Suspense>
    )
}
