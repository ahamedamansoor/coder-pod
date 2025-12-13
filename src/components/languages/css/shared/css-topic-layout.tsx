'use client';

import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Lightbulb, Info, CheckCircle, AlertTriangle, 
  Sparkles, Code, Eye, BookOpen 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CssTopicLayoutProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
  whatIsIt: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  children: ReactNode;
}

export function CssTopicLayout({
  icon: Icon,
  title,
  description,
  category,
  whatIsIt,
  children
}: CssTopicLayoutProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Icon}
        category={`CSS · ${category}`}
        title={title}
        description={description}
        colorTheme="indigo"
      />

      {/* What is it? - Introduction Card */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">{whatIsIt.title}</CardTitle>
              <CardDescription className="text-base">{whatIsIt.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Key Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatIsIt.keyPoints.map((point, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-800 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      {children}
    </div>
  );
}

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  children: ReactNode;
}

export function SectionCard({ 
  title, 
  description, 
  icon: Icon,
  variant = 'default',
  children 
}: SectionCardProps) {
  const variantStyles = {
    default: {
      border: 'border-gray-200 dark:border-gray-800',
      iconBg: 'bg-gray-500',
      titleColor: 'text-gray-900 dark:text-gray-100'
    },
    primary: {
      border: 'border-indigo-200 dark:border-indigo-800',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      titleColor: 'text-indigo-900 dark:text-indigo-100'
    },
    success: {
      border: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      titleColor: 'text-green-900 dark:text-green-100'
    },
    warning: {
      border: 'border-amber-200 dark:border-amber-800',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      titleColor: 'text-amber-900 dark:text-amber-100'
    }
  };

  const styles = variantStyles[variant];

  return (
    <Card className={`border-2 ${styles.border}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`p-2.5 ${styles.iconBg} rounded-lg shadow-md`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <div>
            <CardTitle className={`text-xl ${styles.titleColor}`}>{title}</CardTitle>
            {description && (
              <CardDescription className="text-base mt-1">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  );
}

interface SyntaxBlockProps {
  code: string;
  title?: string;
  language?: 'css' | 'html' | 'javascript';
}

export function SyntaxBlock({ code, title, language = 'css' }: SyntaxBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      {title && (
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{title}</h4>
          <Badge variant="outline" className="text-xs">
            {language.toUpperCase()}
          </Badge>
        </div>
      )}
      <div className="relative group">
        <pre className="p-5 rounded-lg bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 overflow-x-auto">
          <code className="text-sm text-slate-800 dark:text-gray-100 font-mono leading-relaxed">
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-slate-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Copy code"
        >
          {copied ? (
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <Code className="w-4 h-4 text-slate-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
}

interface ConceptGridProps {
  concepts: Array<{
    title: string;
    description: string;
    example?: string;
  }>;
}

export function ConceptGrid({ concepts }: ConceptGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {concepts.map((concept, index) => (
        <div
          key={index}
          className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-2">
            {concept.title}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            {concept.description}
          </p>
          {concept.example && (
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                {concept.example}
              </code>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

interface InfoAlertProps {
  type: 'info' | 'tip' | 'warning' | 'success';
  title: string;
  children: ReactNode;
}

export function InfoAlert({ type, title, children }: InfoAlertProps) {
  const alertStyles = {
    info: {
      icon: Info,
      borderColor: 'border-blue-200 dark:border-blue-800',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      titleColor: 'text-blue-900 dark:text-blue-100',
      descColor: 'text-blue-800 dark:text-blue-200'
    },
    tip: {
      icon: Lightbulb,
      borderColor: 'border-purple-200 dark:border-purple-800',
      bgColor: 'bg-purple-50/50 dark:bg-purple-950/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      titleColor: 'text-purple-900 dark:text-purple-100',
      descColor: 'text-purple-800 dark:text-purple-200'
    },
    warning: {
      icon: AlertTriangle,
      borderColor: 'border-amber-200 dark:border-amber-800',
      bgColor: 'bg-amber-50/50 dark:bg-amber-950/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
      titleColor: 'text-amber-900 dark:text-amber-100',
      descColor: 'text-amber-800 dark:text-amber-200'
    },
    success: {
      icon: CheckCircle,
      borderColor: 'border-green-200 dark:border-green-800',
      bgColor: 'bg-green-50/50 dark:bg-green-950/30',
      iconColor: 'text-green-600 dark:text-green-400',
      titleColor: 'text-green-900 dark:text-green-100',
      descColor: 'text-green-800 dark:text-green-200'
    }
  };

  const styles = alertStyles[type];
  const IconComponent = styles.icon;

  return (
    <Alert className={`${styles.borderColor} ${styles.bgColor}`}>
      <IconComponent className={`w-5 h-5 ${styles.iconColor}`} />
      <AlertTitle className={styles.titleColor}>{title}</AlertTitle>
      <AlertDescription className={styles.descColor}>
        {children}
      </AlertDescription>
    </Alert>
  );
}

interface PropertyTableProps {
  properties: Array<{
    property: string;
    values: string;
    description: string;
  }>;
}

export function PropertyTable({ properties }: PropertyTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 to-purple-600">
            <th className="text-left p-4 text-white font-semibold border-b-2 border-indigo-700">
              Property
            </th>
            <th className="text-left p-4 text-white font-semibold border-b-2 border-indigo-700">
              Values
            </th>
            <th className="text-left p-4 text-white font-semibold border-b-2 border-indigo-700">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 dark:border-gray-800 ${
                index % 2 === 0 
                  ? 'bg-white dark:bg-gray-900' 
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <td className="p-4">
                <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  {prop.property}
                </code>
              </td>
              <td className="p-4">
                <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                  {prop.values}
                </code>
              </td>
              <td className="p-4 text-sm text-gray-700 dark:text-gray-300">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface UseCaseCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  gradient?: string;
}

export function UseCaseCard({ 
  title, 
  description, 
  icon: Icon = Sparkles,
  gradient = 'from-indigo-500 to-purple-600' 
}: UseCaseCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-xl transition-opacity" />
      <div className="relative p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
        <div className="flex items-start gap-4">
          <div className={`p-3 bg-gradient-to-br ${gradient} rounded-lg shadow-md flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
              {title}
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
