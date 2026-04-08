'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Chrome, 
  Github, 
  CalendarIcon, 
  Loader2, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle,
  ArrowRight 
} from 'lucide-react';
import { useEnhancedAuth } from '@/lib/auth/enhanced-auth-context';
import { authSchemas } from '@/lib/auth/validation';
import { AUTH_PROVIDERS } from '@/lib/auth/config';
import { validatePasswordStrength } from '@/lib/auth/utils';
import { PasswordRequirements } from './password-requirements';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { countries } from '@/lib/countries';

const signUpSchema = authSchemas.signUp;
type SignUpFormData = z.infer<typeof signUpSchema>;

export function EnhancedSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setLoading] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<{
    isValid: boolean;
    errors: string[];
    requirements: {
      label: string;
      isValid: boolean;
      icon: string;
    }[];
  } | null>(null);
  
  const { 
    signUpWithEmail, 
    signUpWithGoogle, 
    signUpWithGitHub, 
    signUpWithMicrosoft 
  } = useEnhancedAuth();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      countryCode: '+1',
      phoneNumber: '',
      dob: '',
      acceptTerms: false,
    },
  });

  const onPasswordChange = (password: string) => {
    if (password.length > 0) {
      const strength = validatePasswordStrength(password);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(null);
    }
  };

  const onEmailSubmit = async (data: SignUpFormData) => {
    setLoading('email');
    try {
      await signUpWithEmail(data);
    } finally {
      setLoading(null);
    }
  };

  const onGoogleSignUp = async () => {
    setLoading('google');
    try {
      await signUpWithGoogle();
    } finally {
      setLoading(null);
    }
  };

  const onGitHubSignUp = async () => {
    setLoading('github');
    try {
      await signUpWithGitHub();
    } finally {
      setLoading(null);
    }
  };

  const onMicrosoftSignUp = async () => {
    setLoading('microsoft');
    try {
      await signUpWithMicrosoft();
    } finally {
      setLoading(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setMousePosition({ x, y });
  };

  const calculateTransform = () => {
    if (!isHovering) return '';
    
    const rect = 450; // Approximate card width (signup is wider)
    const centerX = rect / 2;
    const centerY = 350; // Approximate card height
    
    const rotateX = ((mousePosition.y - centerY) / centerY) * -3;
    const rotateY = ((mousePosition.x - centerX) / centerX) * 3;
    const translateX = ((mousePosition.x - centerX) / centerX) * -8;
    const translateY = ((mousePosition.y - centerY) / centerY) * -8;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`;
  };

  return (
    <Card 
      className="w-full max-w-lg shadow-2xl border-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl transition-all duration-200 ease-out cursor-pointer"
      style={{ 
        transform: calculateTransform(),
        boxShadow: isHovering ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      <CardHeader className="text-center space-y-2 pb-4">
        <CardTitle className="text-2xl font-bold">
          <span style={{ color: '#5B7FFF' }}>CODER</span>
          <span className="text-gray-900 dark:text-white"> POD</span>
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Create your account to start learning to code
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Social Sign Up Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            onClick={onGoogleSignUp}
            disabled={isLoading !== null}
            className="w-full h-11 gap-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'google' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Chrome className="h-4 w-4" style={{ color: AUTH_PROVIDERS.google.color }} />
            )}
            Sign up with Google
          </Button>

          {/* GitHub and Microsoft buttons temporarily hidden */}
          {/*
          <Button
            variant="outline"
            onClick={onGitHubSignUp}
            disabled={isLoading !== null}
            className="w-full h-11 gap-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'github' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Github className="h-4 w-4" />
            )}
            Sign up with GitHub
          </Button>

          <Button
            variant="outline"
            onClick={onMicrosoftSignUp}
            disabled={isLoading !== null}
            className="w-full h-11 gap-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {isLoading === 'microsoft' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <div className="h-4 w-4 rounded" style={{ backgroundColor: AUTH_PROVIDERS.microsoft.color }} />
            )}
            Sign up with Microsoft
          </Button>
          */}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">
              Or sign up with email
            </span>
          </div>
        </div>

        {/* Email Sign Up Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onEmailSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-11"
                        {...field}
                      />
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
                    <FormLabel className="text-sm font-medium">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a password"
                          className="h-11 pr-10"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            onPasswordChange(e.target.value);
                          }}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-slate-500" />
                          ) : (
                            <Eye className="h-4 w-4 text-slate-500" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          className="h-11 pr-10"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-slate-500" />
                          ) : (
                            <Eye className="h-4 w-4 text-slate-500" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {passwordStrength && (
                <div className="mt-8">
                  <PasswordRequirements
                      requirements={passwordStrength.requirements}
                      showTitle={false}
                      compact={true}
                  />
                </div>
            )}

            {/* Phone Number */}
            <div className="grid grid-cols-3 gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="+1" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.dial_code}>
                            {country.name} {country.dial_code}
                          </SelectItem>
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
                  <FormItem className="col-span-2">
                    <FormLabel className="text-sm font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="555-123-4567"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => {
                const [month, setMonth] = useState('');
                const [day, setDay] = useState('');
                const [year, setYear] = useState('');
                
                // Parse existing value if it exists
                useEffect(() => {
                  if (field.value) {
                    const parts = field.value.split('/');
                    if (parts.length === 3) {
                      setMonth(parts[0]);
                      setDay(parts[1]);
                      setYear(parts[2]);
                    }
                  }
                }, [field.value]);

                const updateDate = (newMonth: string, newDay: string, newYear: string) => {
                  setMonth(newMonth);
                  setDay(newDay);
                  setYear(newYear);
                  
                  if (newMonth && newDay && newYear) {
                    const formattedDate = `${newMonth.padStart(2, '0')}/${newDay.padStart(2, '0')}/${newYear}`;
                    field.onChange(formattedDate);
                  }
                };

                // Generate options
                const months = [
                  { value: '01', label: 'January' },
                  { value: '02', label: 'February' },
                  { value: '03', label: 'March' },
                  { value: '04', label: 'April' },
                  { value: '05', label: 'May' },
                  { value: '06', label: 'June' },
                  { value: '07', label: 'July' },
                  { value: '08', label: 'August' },
                  { value: '09', label: 'September' },
                  { value: '10', label: 'October' },
                  { value: '11', label: 'November' },
                  { value: '12', label: 'December' },
                ];

                const currentYear = new Date().getFullYear();
                const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

                const getDaysInMonth = (selectedMonth: string, selectedYear: string) => {
                  if (!selectedMonth || !selectedYear) return 31;
                  const month = parseInt(selectedMonth) - 1;
                  const year = parseInt(selectedYear);
                  return new Date(year, month + 1, 0).getDate();
                };

                const daysInMonth = getDaysInMonth(month, year);

                return (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Date of Birth</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-3 gap-2">
                        {/* Month Dropdown */}
                        <Select value={month} onValueChange={(value) => updateDate(value, day, year)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {months.map((month) => (
                              <SelectItem key={month.value} value={month.value}>
                                {month.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {/* Day Dropdown */}
                        <Select value={day} onValueChange={(value) => updateDate(month, value, year)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Day" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                              <SelectItem key={day} value={day.toString().padStart(2, '0')}>
                                {day}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {/* Year Dropdown */}
                        <Select value={year} onValueChange={(value) => updateDate(month, day, value)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {years.map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {/* Terms and Conditions */}
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      I agree to the{' '}
                      <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-500 underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-500 underline">
                        Privacy Policy
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading !== null}
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
            >
              {isLoading === 'email' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>

        {/* Sign In Link */}
        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign in
          </Link>
        </div>

        {/* Legal Links */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 space-x-4">
          <Link
            href="/terms-of-service"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Terms of Service
          </Link>
          <span>•</span>
          <Link
            href="/privacy-policy"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Privacy Policy
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
