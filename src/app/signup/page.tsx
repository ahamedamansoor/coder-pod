
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Loader2, Quote, Chrome } from 'lucide-react';
import { Logo } from '@/components/shared/layout/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { countries } from '@/lib/countries';

import { useAuth, useFirestore } from '@/firebase';
import { ServiceFactory } from '@/services';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { getRandomQuote } from '@/data/motivational-quotes';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  countryCode: z.string().nonempty({ message: 'Please select your country code.' }),
  phoneNumber: z.string().min(5, { message: 'Please enter a valid phone number.' }),
  dob: z.string().regex(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/, {
    message: 'Please enter a valid date in MM/DD/YYYY format.',
  }),
});

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [phonePlaceholder, setPhonePlaceholder] = useState('555-123-4567');
  const [quote, setQuote] = useState(() => getRandomQuote());
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Refresh quote on component mount
    setQuote(getRandomQuote());
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      countryCode: '+1',
      phoneNumber: '',
    },
  });

  const handleCountryChange = (dialCode: string) => {
    const country = countries.find(c => c.dial_code === dialCode);
    if (country) {
      setPhonePlaceholder(`Phone number in ${country.name}`);
    } else {
      setPhonePlaceholder('555-123-4567');
    }
    form.setValue('countryCode', dialCode);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    if (!auth) {
      toast({ variant: 'destructive', title: 'Firebase not initialized.' });
      setIsLoading(false);
      return;
    }

    try {
      const authService = ServiceFactory.getAuthService(auth, firestore);
      const user = await authService.signUpWithEmail(values.email, values.password);

      // We pass user details via query params for pre-filling on the login page,
      // as the profile will only be created upon first verified sign-in.
      const queryParams = new URLSearchParams({
        email: values.email,
        name: values.name,
        dob: values.dob,
        phoneNumber: `${values.countryCode}${values.phoneNumber}`,
      });
      const loginUrl = `/login?${queryParams.toString()}`;

      toast({ 
        title: 'Account Created!',
        description: "We've sent a verification link to your email. Please verify your account before signing in.",
        duration: 8000,
      });

      // Redirect to the login page with pre-fill data.
      router.push(loginUrl);

    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast({
          variant: 'destructive',
          title: 'Sign-up failed',
          description: 'This email is already in use. Please try to sign in instead.',
        });
      } else {
        console.error("Signup error:", error);
        toast({
          variant: 'destructive',
          title: 'Sign-up failed',
          description: error.message || 'Could not create a new account.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleSignUp = async () => {
    if (!auth || !firestore) return;
    setIsGoogleLoading(true);
    
    try {
      const authService = ServiceFactory.getAuthService(auth, firestore);
      const { user, isNewUser } = await authService.signInWithGoogle();
      
      if (isNewUser) {
        toast({
          title: 'Account created!',
          description: 'Welcome to Coder Pod!',
        });
        router.push('/dashboard?isNewUser=true');
      } else {
        toast({
          title: 'Welcome back!',
          description: 'Redirecting to your dashboard...',
        });
        router.push('/dashboard');
      }
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        toast({
          title: 'Sign-up cancelled',
          description: 'You closed the Google sign-up window.',
        });
      } else {
        console.error('Google sign-up error:', error);
        toast({
          variant: 'destructive',
          title: 'Sign-up failed',
          description: error.message || 'An unexpected error occurred during Google sign-up.',
        });
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

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
      <div className="relative flex items-center justify-center w-full lg:w-1/2 p-8 overflow-y-auto z-10">
        <Card className="w-full max-w-md my-8">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Logo clickable={false} />
          </div>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Join Coder Pod and start your learning journey today.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            onClick={handleGoogleSignUp}
            disabled={isLoading || isGoogleLoading}
            className="w-full mb-4"
          >
            {isGoogleLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Chrome className="mr-2 h-4 w-4" />
                Sign up with Google
              </>
            )}
          </Button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or with email</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="name@example.com" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <Select onValueChange={handleCountryChange} defaultValue={field.value} disabled={isLoading}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Code" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map(country => (
                              <SelectItem key={`${country.code}-${country.dial_code}`} value={country.dial_code}>{`${country.code} (${country.dial_code})`}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="w-2/3">
                        <FormControl>
                          <Input type="tel" placeholder={phonePlaceholder} {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </FormItem>
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="MM/DD/YYYY" 
                        {...field} 
                        disabled={isLoading}
                        maxLength={10}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Create Account'}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
