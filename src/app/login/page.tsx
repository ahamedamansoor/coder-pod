
'use client';

import { Suspense, useEffect } from 'react';
import { LoginPageForm } from '@/components/shared/modals/login-page-form';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader } from '@/components/ui/card';
import { Logo } from '@/components/shared/layout/logo';
import { useLoading } from '@/hooks/use-loading';

function LoginSkeleton() {
  return (
    <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
                <Logo />
            </div>
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-5 w-1/2 mx-auto" />
        </CardHeader>
    </Card>
  )
}

export default function LoginPage() {
    const { hideLoader } = useLoading();

    useEffect(() => {
        hideLoader();
    }, [hideLoader]);

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-muted/40">
            <Suspense fallback={<LoginSkeleton />}>
                <LoginPageForm />
            </Suspense>
        </div>
    )
}
