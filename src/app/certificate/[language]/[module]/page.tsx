
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Linkedin, Home } from 'lucide-react';
import { Logo } from '@/components/shared/layout/logo';
import Link from 'next/link';

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  const language = typeof params.language === 'string' ? params.language : '';
  const moduleSlug = typeof params.module === 'string' ? params.module : '';
  
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


  if (isUserLoading) {
    return <div className="flex items-center justify-center h-screen bg-muted/40">Loading certificate...</div>;
  }
  
  if (!user) {
    router.push('/login');
    return null;
  }

  const userName = user.displayName || user.email || 'Valued Learner';

  return (
    <div className="min-h-screen bg-muted/40 p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4">
            <Button variant="ghost" asChild>
                <Link href="/dashboard"><Home className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
            </Button>
        </div>
      <Card className="w-full max-w-4xl border-4 border-primary/20 bg-card shadow-2xl">
        <CardContent className="p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b-2 border-muted">
            <Logo />
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-primary">Certificate of Completion</h1>
              <p className="text-muted-foreground">This certificate is awarded to</p>
            </div>
          </div>

          <div className="text-center my-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">{userName}</h2>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-lg">For successfully completing the module</p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary my-4">{moduleName}</h3>
            <p className="text-muted-foreground text-lg">in the {languageName} learning path.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t-2 border-muted">
            <div className="text-center sm:text-left">
              <p className="font-semibold">Issued on</p>
              <p className="text-muted-foreground">{issueDate}</p>
            </div>
            <div className="mt-8 sm:mt-0">
                 <Award className="w-24 h-24 text-yellow-500" />
            </div>
          </div>
        </CardContent>
      </Card>
       <div className="mt-8">
            <Button asChild size="lg">
                <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Add to LinkedIn Profile
                </a>
            </Button>
       </div>
    </div>
  );
}
