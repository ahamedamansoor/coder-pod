
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@/hooks/use-auth-compat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Linkedin, Home, Trophy } from 'lucide-react';
import { Logo } from '@/components/shared/layout/logo';
import Link from 'next/link';
import { getRouteParam } from '@/lib/params';

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  const language = getRouteParam(params, 'language') || '';
  const moduleSlug = getRouteParam(params, 'module') || '';
  
  // Convert slug back to title case
  const moduleName = moduleSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const languageName = language.charAt(0).toUpperCase() + language.slice(1);

  const issueDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const certificateName = `Coder Pod: ${languageName} - ${moduleName}`;
  const linkedInShareUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certificateName)}&organizationName=${encodeURIComponent('Coder Pod')}&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}`;


  // Handle loading state
  if (isUserLoading) {
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
          <p className="text-xl font-medium text-gray-600 dark:text-gray-400">Loading certificate...</p>
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

  return (
    <>
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-inside: avoid;
          }
        }
      `}</style>
      
      <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex flex-col relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl" />
        </div>
        
        {/* Navigation */}
        <div className="relative z-10 p-6 no-print">
          <Button variant="ghost" asChild className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:bg-white dark:hover:bg-slate-800 border border-white/20 dark:border-slate-700/20 shadow-lg">
            <Link href="/learning-paths">
              <Home className="mr-2 h-4 w-4" /> Preview Learning Page
            </Link>
          </Button>
        </div>
        
        {/* Certificate Container */}
        <div className="flex-1 flex items-center justify-center px-6 pb-6 relative z-10 print-break">
          <Card className="w-full max-w-6xl border-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden">
            {/* Certificate Border */}
            <div className="absolute inset-0 border-8 border-double border-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-20 rounded-2xl pointer-events-none" />
            
            <CardContent className="p-12 relative">
              {/* Certificate Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl mb-6">
                  <Logo />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                  Certificate of Completion
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
              </div>

              {/* Recipient Section */}
              <div className="text-center py-12 border-y border-dashed border-gray-300 dark:border-gray-700 my-12">
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 font-medium tracking-wide">
                  This certificate is proudly awarded to
                </p>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-30 animate-pulse" />
                  <h2 className="relative text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {userName}
                  </h2>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="text-center space-y-6 mb-12">
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  For successfully completing the module
                </p>
                <div className="relative inline-block">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {moduleName}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  in the <span className="font-semibold text-blue-600 dark:text-blue-400">{languageName}</span> learning path
                </p>
              </div>

              {/* Certificate Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t-2 border-gray-200 dark:border-gray-700">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Date Issued</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{issueDate}</p>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl mb-2">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Achievement</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-xl mb-2">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Excellence</p>
                  </div>
                </div>
              </div>

              {/* Verification Code */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Verification Code</p>
                <p className="font-mono text-sm text-gray-600 dark:text-gray-300">
                  CERT-{language.toUpperCase()}-{moduleSlug.toUpperCase()}-{Date.now().toString().slice(-6)}
                </p>
              </div>
            </CardContent>
          </Card>
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
