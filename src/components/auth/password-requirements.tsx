'use client';

import { Check, X, Minus, Lock, Key, Type, Hash, AtSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PasswordRequirement {
  label: string;
  isValid: boolean;
  icon: string;
}

interface PasswordRequirementsProps {
  requirements: PasswordRequirement[];
  showTitle?: boolean;
  compact?: boolean;
}

const requirementIcons = {
  length: Minus,
  lowercase: Type,
  uppercase: Type,
  number: Hash,
  special: AtSign,
};

export function PasswordRequirements({ 
  requirements, 
  showTitle = true, 
  compact = false 
}: PasswordRequirementsProps) {
  const getIcon = (iconName: string) => {
    return requirementIcons[iconName as keyof typeof requirementIcons] || Lock;
  };

  const validCount = requirements.filter(req => req.isValid).length;
  const totalCount = requirements.length;
  const strength = validCount / totalCount;

  const getStrengthColor = () => {
    if (strength === 0) return 'text-slate-400';
    if (strength <= 0.2) return 'text-red-500';
    if (strength <= 0.4) return 'text-orange-500';
    if (strength <= 0.6) return 'text-yellow-500';
    if (strength <= 0.8) return 'text-blue-500';
    return 'text-green-500';
  };

  const getStrengthBgColor = () => {
    if (strength === 0) return 'bg-slate-200';
    if (strength <= 0.2) return 'bg-red-500';
    if (strength <= 0.4) return 'bg-orange-500';
    if (strength <= 0.6) return 'bg-yellow-500';
    if (strength <= 0.8) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (strength === 0) return 'Very Weak';
    if (strength <= 0.2) return 'Weak';
    if (strength <= 0.4) return 'Fair';
    if (strength <= 0.6) return 'Good';
    if (strength <= 0.8) return 'Strong';
    return 'Very Strong';
  };

  if (compact) {
    return (
      <div className="space-y-2">
        {/* Strength indicator */}
        <div className="flex items-center gap-2">
          <Key className={cn("h-4 w-4", getStrengthColor())} />
          <span className={cn("text-xs font-medium", getStrengthColor())}>
            {getStrengthLabel()}
          </span>
          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={cn("h-full transition-all duration-300 ease-out", getStrengthBgColor())}
              style={{ width: `${strength * 100}%` }}
            />
          </div>
        </div>

        {/* Requirements list */}
        <div className="grid grid-cols-3 gap-1">
          {requirements.map((req, index) => {
            const Icon = getIcon(req.icon);
            return (
              <div key={index} className="flex items-center gap-1 text-xs">
                <Icon className={cn(
                  "h-3 w-3 flex-shrink-0",
                  req.isValid ? "text-green-500" : "text-slate-300"
                )} />
                <span className={cn(
                  "truncate",
                  req.isValid ? "text-green-600" : "text-slate-500"
                )}>
                  {req.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {showTitle && (
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-slate-500" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Password Requirements
          </span>
        </div>
      )}

      {/* Strength indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            Password Strength
          </span>
          <span className={cn("text-xs font-bold", getStrengthColor())}>
            {getStrengthLabel()}
          </span>
        </div>
        <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full transition-all duration-500 ease-out",
              getStrengthBgColor()
            )}
            style={{ width: `${strength * 100}%` }}
          />
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
        </div>
      </div>

      {/* Requirements checklist */}
      <div className="space-y-2">
        {requirements.map((req, index) => {
          const Icon = getIcon(req.icon);
          return (
            <div 
              key={index} 
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-all duration-200",
                req.isValid 
                  ? "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800" 
                  : "bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700"
              )}
            >
              <div className={cn(
                "flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200",
                req.isValid 
                  ? "bg-green-500 border-green-500" 
                  : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
              )}>
                {req.isValid ? (
                  <Check className="h-3 w-3 text-white" />
                ) : (
                  <X className="h-3 w-3 text-slate-400" />
                )}
              </div>
              <Icon className={cn(
                "h-4 w-4 flex-shrink-0 transition-colors duration-200",
                req.isValid ? "text-green-600" : "text-slate-400"
              )} />
              <span className={cn(
                "text-sm font-medium transition-colors duration-200",
                req.isValid ? "text-green-700 dark:text-green-300" : "text-slate-600 dark:text-slate-400"
              )}>
                {req.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Security tip */}
      <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <Key className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
            Security Tip
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Use a unique password that you don't use for other accounts. Consider using a password manager to generate and store strong passwords.
          </p>
        </div>
      </div>
    </div>
  );
}
