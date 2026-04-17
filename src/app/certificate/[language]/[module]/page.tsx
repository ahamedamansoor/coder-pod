
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@/hooks/use-auth-compat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Linkedin, Home, Trophy, Sparkles, Shield, Star, Zap, CheckCircle, Globe, Calendar, User, BookOpen, Target, TrendingUp, Clock, Download, Share2, QrCode } from 'lucide-react';
import { Logo } from '@/components/shared/layout/logo';
import Link from 'next/link';
import { getRouteParam } from '@/lib/params';

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'valid' | 'checking' | 'invalid'>('checking');
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  const language = getRouteParam(params, 'language') || '';
  const moduleSlug = getRouteParam(params, 'module') || '';
  
  // Use same language filtering as learning paths page
  const allowedSlugs = ['html', 'css', 'scss', 'tailwind', 'javascript', 'react', 'selenium', 'dsa'];
  const isLanguageAllowed = allowedSlugs.includes(language);
  
  // Convert slug back to title case with better handling for numbered sections
  const moduleName = moduleSlug
    .replace(/^(\d+)-/, '') // Remove numbering at start: "2-text-&-content" -> "text-&-content"
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/&/g, '&') // Convert & to & symbol
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word
  const languageName = language.charAt(0).toUpperCase() + language.slice(1);

  const issueDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const certificateName = `Coder Pod: ${languageName} - ${moduleName}`;
  const linkedInShareUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certificateName)}&organizationName=${encodeURIComponent('coderpod.org')}&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}`;
  
  const verificationCode = `CERT-${language.toUpperCase()}-${moduleSlug.toUpperCase()}-${Date.now().toString().slice(-6)}`;

  // Animation effects
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1000);
    
    // Simulate verification check
    setTimeout(() => {
      setVerificationStatus('valid');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  // Handle loading state
  if (isUserLoading) {
    return (
      <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl mb-6">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-400">Generating your certificate...</p>
        </div>
      </div>
    );
  }
  
  // Handle authentication check with error prevention
  if (!user) {
    // Use replace instead of push to prevent back button issues
    if (typeof window !== 'undefined') {
      router.replace('/login');
    }
    return (
      <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl mb-6">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-400">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const userName = user.displayName || user.email || 'Valued Learner';

  // Redirect if language is not allowed
  if (!isLanguageAllowed) {
    return (
      <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Language Not Available</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">This certificate is not available for the selected language.</p>
          <Button onClick={() => router.push('/learning-paths')}>
            Back to Learning Paths
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-inside: avoid;
          }
          /* Ensure certificate maintains same width in print */
          .print-break .relative.w-full.max-w-6xl {
            max-width: 72rem !important;
            width: 100% !important;
            margin: 0 auto !important;
          }
          .print-break .w-full.max-w-6xl {
            max-width: 72rem !important;
            width: 100% !important;
          }
          /* Remove background elements in print for cleaner certificate */
          .print-break .absolute.inset-0 {
            display: none !important;
          }
          /* Ensure certificate container maintains proper size */
          @page {
            size: A4;
            margin: 0.5in;
          }
        }
      `}</style>
      
      <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex flex-col relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-lg blur-3xl animate-pulse transform rotate-45" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-lg blur-3xl animate-pulse transform rotate-12" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-lg blur-3xl animate-pulse transform rotate-45" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-indigo-400/5 to-pink-400/5 rounded-lg blur-3xl animate-pulse transform rotate-12" style={{ animationDelay: '2s' }} />
          
          {/* Additional square elements */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-lg blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 rotate-45" style={{ animationDuration: '8s' }} />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-400/5 to-blue-400/5 rounded-lg blur-2xl animate-pulse transform rotate-12" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-lg blur-2xl animate-pulse transform rotate-45" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          
          {/* Floating achievement icons */}
          <div className="absolute top-20 left-20 animate-bounce" style={{ animationDuration: '3s' }}>
            <Star className="w-8 h-8 text-yellow-400/20" />
          </div>
          <div className="absolute top-32 right-32 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
            <Trophy className="w-8 h-8 text-purple-400/20" />
          </div>
          <div className="absolute bottom-20 left-32 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Award className="w-8 h-8 text-blue-400/20" />
          </div>
        </div>

        {/* Confetti animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-20px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  ['bg-yellow-400', 'bg-purple-400', 'bg-blue-400', 'bg-pink-400', 'bg-green-400'][Math.floor(Math.random() * 5)]
                }`} />
              </div>
            ))}
          </div>
        )}
        
        {/* Header */}
        <div className="relative z-10 p-6 flex justify-between items-center no-print">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg"
            asChild
          >
            <Link href={`/languages/${language}/learning-plan`}>
              <Home className="mr-2 h-4 w-4" />
              Back to Learning
            </Link>
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Shield className={`w-4 h-4 ${
                verificationStatus === 'valid' ? 'text-green-500' : 
                verificationStatus === 'checking' ? 'text-yellow-500 animate-pulse' : 
                'text-red-500'
              }`} />
              {verificationStatus === 'valid' ? 'Verified' : 
               verificationStatus === 'checking' ? 'Verifying...' : 
               'Invalid'}
            </div>
            
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white shadow-lg"
                onClick={() => setShareMenuOpen(!shareMenuOpen)}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              
              {shareMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-20">
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
                    onClick={() => { window.open(linkedInShareUrl, '_blank'); setShareMenuOpen(false); }}
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
                    onClick={() => { setQrCodeVisible(true); setShareMenuOpen(false); }}
                  >
                    <QrCode className="w-4 h-4" /> QR Code
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
                    onClick={() => { navigator.clipboard.writeText(window.location.href); setShareMenuOpen(false); }}
                  >
                    <Download className="w-4 h-4" /> Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Certificate Container */}
        <div className="flex-1 flex items-center justify-center px-4 pb-4 relative z-10 print-break">
          {/* Glowing victorious achievement border - shaded area */}
          <div className="relative w-full max-w-6xl">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-2xl blur-xl animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 via-indigo-300/20 to-purple-300/20 rounded-2xl blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-200/15 via-indigo-200/15 to-purple-200/15 rounded-2xl blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="absolute inset-0 border-8 border-double border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 rounded-2xl pointer-events-none animate-pulse" />
            <div className="absolute inset-2 border-4 border-dotted border-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 opacity-70 rounded-2xl pointer-events-none animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="absolute inset-4 border-2 border-solid border-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-80 rounded-2xl pointer-events-none animate-pulse" style={{ animationDelay: '0.6s' }} />
            
            {/* Victory corner lights */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/80 to-transparent rounded-tl-2xl blur-md animate-pulse" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-400/80 to-transparent rounded-tr-2xl blur-md animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/80 to-transparent rounded-bl-2xl blur-md animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-400/80 to-transparent rounded-br-2xl blur-md animate-pulse" style={{ animationDelay: '0.6s' }} />
            
            <Card className={`w-full max-w-6xl border-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-1000 relative ${
              isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
            
            <CardContent className="p-5 relative">
              {/* Certificate Header */}
              <div className="text-center mb-4">
                <div className={`mb-4 transform transition-all duration-1000 ${
                  isAnimating ? 'rotate-0 scale-100' : 'rotate-180 scale-0'
                }`}>
                  <Logo />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Certificate of Completion
                  </h1>
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse" />
              </div>

              {/* Achievement Badge */}
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  <CheckCircle className="w-3 h-3" />
                  AUTHENTIC
                </div>
              </div>

              {/* Recipient Section */}
              <div className="text-center py-5 border-y border-dashed border-gray-300 dark:border-gray-700 my-5 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white dark:bg-slate-900 px-3">
                    <User className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium tracking-wide">
                  This certificate is proudly awarded to
                </p>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-30 animate-pulse" />
                  <h2 className="relative text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {userName}
                  </h2>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="text-center space-y-3 mb-5">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  For successfully completing the module
                </p>
                <div className="relative inline-block">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {moduleName}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  in the <span className="font-semibold text-blue-600 dark:text-blue-400">{languageName}</span> learning path
                </p>
              </div>

              {/* Certificate Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center pt-5 border-t-2 border-gray-200 dark:border-gray-700">
                <div className="text-center md:text-left mb-3 md:mb-0">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Date Issued</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{issueDate}</p>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl mb-1">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Achievement</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-xl mb-1">
                      <Trophy className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Excellence</p>
                  </div>
                </div>
              </div>

              {/* Verification Code */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Verification Code</p>
                <p className="font-mono text-xs text-gray-600 dark:text-gray-300">
                  CERT-{language.toUpperCase()}-{moduleSlug.toUpperCase()}-{Date.now().toString().slice(-6)}
                </p>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 p-6 flex flex-col sm:flex-row gap-4 justify-center no-print">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl">
            <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Add to LinkedIn Profile
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xl"
            onClick={() => window.print()}
          >
            <Award className="mr-2 h-5 w-5" />
            Download Certificate
          </Button>
        </div>
      </div>
    </>
  );
}
