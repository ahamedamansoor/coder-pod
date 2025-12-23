'use client';

import Link from 'next/link';
import {
    Map,
    FileText,
    Brain,
    Users,
    StickyNote,
    Sparkles,
    Code2,
    ArrowRight,
    Zap,
    Play,
    BookOpen,
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { featureFlags } from '@/config/feature-flags';

interface FeatureCard {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    gradient: string;
    iconBg: string;
    size: 'large' | 'medium' | 'small';
    delay: number;
    badge?: string;
    enabled?: boolean;
}

const baseFeatures: FeatureCard[] = [
    {
        title: 'Learning Paths',
        description: 'Master programming with interactive, AI-powered courses tailored to your learning style. Track progress and earn achievements.',
        icon: Code2,
        href: '/learning-paths',
        gradient: 'from-blue-500/20 via-cyan-500/10 to-blue-600/20',
        iconBg: 'from-blue-500 to-cyan-500',
        size: 'large',
        delay: 0,
        badge: 'Most Popular',
    },
    {
        title: 'Learning Roadmaps',
        description: 'Structured paths to guide your journey from beginner to expert in any technology.',
        icon: Map,
        href: '/roadmaps',
        gradient: 'from-purple-500/20 via-pink-500/10 to-purple-600/20',
        iconBg: 'from-purple-500 to-pink-500',
        size: 'medium',
        delay: 100,
    },
    {
        title: 'Cheatsheets',
        description: 'Quick reference guides for instant access to syntax and concepts.',
        icon: FileText,
        href: '/cheatsheets',
        gradient: 'from-amber-500/20 via-orange-500/10 to-amber-600/20',
        iconBg: 'from-amber-500 to-orange-500',
        size: 'medium',
        delay: 200,
    },
    {
        title: 'AI Interview Practice',
        description: 'Prepare for technical interviews with our AI-powered interviewer. Get real-time feedback and improve your skills.',
        icon: Brain,
        href: '/ai-interview',
        gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-600/20',
        iconBg: 'from-emerald-500 to-teal-500',
        size: 'large',
        delay: 300,
        badge: 'AI Powered',
    },
    {
        title: 'Collaborative Interview',
        description: 'Practice coding with a partner in real-time. Perfect for mock interviews.',
        icon: Users,
        href: '/collaborative-interview',
        gradient: 'from-rose-500/20 via-red-500/10 to-rose-600/20',
        iconBg: 'from-rose-500 to-red-500',
        size: 'medium',
        delay: 400,
        badge: 'Live',
        enabled: featureFlags.collaborativeInterview,
    },
    {
        title: 'Personal Notes',
        description: 'Save and organize your learning notes with markdown support.',
        icon: StickyNote,
        href: '/notes',
        gradient: 'from-indigo-500/20 via-violet-500/10 to-indigo-600/20',
        iconBg: 'from-indigo-500 to-violet-500',
        size: 'small',
        delay: 500,
    },
    {
        title: 'Discover',
        description: 'Explore trending topics and discover new learning resources.',
        icon: Sparkles,
        href: '/discover',
        gradient: 'from-fuchsia-500/20 via-pink-500/10 to-fuchsia-600/20',
        iconBg: 'from-fuchsia-500 to-pink-500',
        size: 'small',
        delay: 600,
    },
];

function FeatureCardComponent({ feature }: { feature: FeatureCard }) {
    const Icon = feature.icon;

    return (
        <Link
            href={feature.href}
            className={cn(
                // Base styles
                'group relative flex flex-col overflow-hidden rounded-3xl',
                'bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl',
                'border border-white/20 dark:border-white/10',
                'shadow-[0_8px_32px_rgba(31,38,135,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
                'transition-all duration-500 ease-out',
                'hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10',
                'hover:border-white/40 dark:hover:border-white/20',
                // Size variations
                feature.size === 'large' && 'md:col-span-2 md:row-span-2 p-6 md:p-8',
                feature.size === 'medium' && 'md:col-span-1 md:row-span-2 p-5 md:p-6',
                feature.size === 'small' && 'md:col-span-1 md:row-span-1 p-5',
                // Animation
                'animate-in fade-in zoom-in-95',
            )}
            style={{ animationDelay: `${feature.delay}ms`, animationFillMode: 'forwards' }}
        >
            {/* Gradient Background */}
            <div className={cn(
                'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                feature.gradient
            )} />

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={cn(
                    'absolute -inset-[1px] rounded-3xl bg-gradient-to-r blur-sm',
                    feature.iconBg
                )} style={{ opacity: 0.3 }} />
            </div>

            {/* Shine Effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.8s_ease-in-out]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}
                {feature.badge && (
                    <div className="mb-4">
                        <span className={cn(
                            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',
                            'bg-gradient-to-r text-white shadow-lg',
                            feature.iconBg
                        )}>
                            {feature.badge === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                            {feature.badge === 'AI Powered' && <Zap className="w-3 h-3" />}
                            {feature.badge === 'Most Popular' && <Target className="w-3 h-3" />}
                            {feature.badge}
                        </span>
                    </div>
                )}

                {/* Icon */}
                <div className={cn(
                    'mb-4 w-14 h-14 rounded-2xl flex items-center justify-center',
                    'bg-gradient-to-br shadow-lg',
                    'group-hover:scale-110 group-hover:rotate-3 transition-all duration-300',
                    feature.iconBg
                )}>
                    <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className={cn(
                    'font-bold text-slate-900 dark:text-white mb-2',
                    feature.size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                )}>
                    {feature.title}
                </h3>

                {/* Description */}
                <p className={cn(
                    'text-slate-600 dark:text-slate-400 leading-relaxed flex-1',
                    feature.size === 'large' ? 'text-base md:text-lg' : 'text-sm',
                    feature.size === 'small' && 'line-clamp-2'
                )}>
                    {feature.description}
                </p>

                {/* CTA Arrow */}
                <div className={cn(
                    'mt-4 flex items-center gap-2 text-sm font-semibold',
                    'text-slate-500 dark:text-slate-400',
                    'group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'
                )}>
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
            </div>

            {/* Floating Particles (for large cards) */}
            {feature.size === 'large' && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/30 animate-float" style={{ animationDuration: '6s' }} />
                    <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
                    <div className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400/30 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
                </div>
            )}
        </Link>
    );
}

export function FeaturesShowcase() {
    const features = baseFeatures.filter(feature => feature.enabled !== false);

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Explore All Features</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                        Everything You Need to Excel
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Comprehensive tools designed to accelerate your coding journey from learning to landing your dream job.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
                    {features.map((feature) => (
                        <FeatureCardComponent key={feature.title} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesShowcase;
