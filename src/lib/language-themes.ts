import type { LucideIcon } from 'lucide-react';

// Language-specific color schemes and theming
export interface LanguageTheme {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  background: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  shadow: string;
}

export interface CategoryIcon {
  icon: LucideIcon;
  color: string;
  level: string;
}

// Professional, subtle language themes with dark mode support
export const languageThemes: Record<string, LanguageTheme> = {
  html: {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-blue-500 dark:text-blue-300',
    accent: 'text-blue-700 dark:text-blue-500',
    gradient: 'from-blue-600/20 to-blue-500/20 dark:from-blue-400/30 dark:to-blue-300/30',
    background: 'bg-blue-50/30 dark:bg-blue-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-blue-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  css: {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-blue-500 dark:text-blue-300',
    accent: 'text-blue-700 dark:text-blue-500',
    gradient: 'from-blue-600/20 to-indigo-600/20 dark:from-blue-400/30 dark:to-indigo-400/30',
    background: 'bg-blue-50/30 dark:bg-blue-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-blue-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  scss: {
    primary: 'text-pink-600 dark:text-pink-400',
    secondary: 'text-pink-500 dark:text-pink-300',
    accent: 'text-pink-700 dark:text-pink-500',
    gradient: 'from-pink-600/20 to-rose-600/20 dark:from-pink-400/30 dark:to-rose-400/30',
    background: 'bg-pink-50/30 dark:bg-pink-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-pink-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  javascript: {
    primary: 'text-amber-600 dark:text-amber-400',
    secondary: 'text-amber-500 dark:text-amber-300',
    accent: 'text-amber-700 dark:text-amber-500',
    gradient: 'from-amber-600/20 to-yellow-600/20 dark:from-amber-400/30 dark:to-yellow-400/30',
    background: 'bg-amber-50/30 dark:bg-amber-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-amber-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  react: {
    primary: 'text-cyan-600 dark:text-cyan-400',
    secondary: 'text-cyan-500 dark:text-cyan-300',
    accent: 'text-cyan-700 dark:text-cyan-500',
    gradient: 'from-cyan-600/20 to-blue-600/20 dark:from-cyan-400/30 dark:to-blue-400/30',
    background: 'bg-cyan-50/30 dark:bg-cyan-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-cyan-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  java: {
    primary: 'text-red-600 dark:text-red-400',
    secondary: 'text-red-500 dark:text-red-300',
    accent: 'text-red-700 dark:text-red-500',
    gradient: 'from-red-600/20 to-orange-600/20 dark:from-red-400/30 dark:to-orange-400/30',
    background: 'bg-red-50/30 dark:bg-red-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-red-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  spring: {
    primary: 'text-green-600 dark:text-green-400',
    secondary: 'text-green-500 dark:text-green-300',
    accent: 'text-green-700 dark:text-green-500',
    gradient: 'from-green-600/20 to-emerald-600/20 dark:from-green-400/30 dark:to-emerald-400/30',
    background: 'bg-green-50/30 dark:bg-green-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-green-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  },
  'spring-boot': {
    primary: 'text-emerald-600 dark:text-emerald-400',
    secondary: 'text-emerald-500 dark:text-emerald-300',
    accent: 'text-emerald-700 dark:text-emerald-500',
    gradient: 'from-emerald-600/20 to-teal-600/20 dark:from-emerald-400/30 dark:to-teal-400/30',
    background: 'bg-emerald-50/30 dark:bg-emerald-950/10',
    cardBackground: 'bg-white/95 dark:bg-gray-800/95',
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-emerald-200/50 dark:border-gray-700/50',
    shadow: 'shadow-sm dark:shadow-black/20'
  }
};

// Enhanced theming utilities
export const getLanguageTheme = (languageSlug: string): LanguageTheme => {
  return languageThemes[languageSlug] || languageThemes.html; // fallback to HTML theme
};

export const getThemeClasses = (languageSlug: string) => {
  const theme = getLanguageTheme(languageSlug);
  
  // Derive base color & shade from primary text class for generating related utilities
  // e.g. text-blue-600 => color=blue, shade=600
  const primaryToken = theme.primary.split(' ')[0]; // take light mode token
  const match = /text-([a-zA-Z-]+)-(\d{2,3})/.exec(primaryToken);
  const baseColor = match ? match[1] : 'gray';
  const baseShade = match ? match[2] : '600';

  // Construct active state classes (lighter background + border + bolder text)
  const activeBackground = `!bg-${baseColor}-100 dark:!bg-${baseColor}-900/20`;
  const activeBorder = `!border-${baseColor}-300 dark:!border-${baseColor}-700`;
  const activeText = `!text-${baseColor}-700 dark:!text-${baseColor}-300`;

  // Provide a unified active menu class bundle
  const activeMenuContainer = `${activeBackground} ${activeBorder}`;
  const activeMenuLink = `${activeText}`;

  return {
    // Primary colors
    primary: theme.primary,
    secondary: theme.secondary,
    accent: theme.accent,
    
    // Backgrounds - subtle and professional
    gradient: `bg-gradient-to-r ${theme.gradient}`,
    gradientDiagonal: `bg-gradient-to-br ${theme.gradient}`,
    background: theme.background,
    cardBackground: theme.cardBackground,
    
    // Text colors - consistent hierarchy
    textPrimary: theme.textPrimary,
    textSecondary: theme.textSecondary,
    
    // Borders and shadows - subtle
    border: theme.border,
    shadow: theme.shadow,
    
    // Enhanced effects - toned down
    glowEffect: `${theme.shadow}`,
    pulseAnimation: 'animate-pulse',
    bounceAnimation: 'animate-bounce',
    
    // Interactive states - professional
    hover: `hover:${theme.primary.split(' ')[0]}`,
    focus: `focus:${theme.primary.split(' ')[0]}`,
    active: `active:${theme.accent.split(' ')[0]}`,

    // Active menu/topic states (unified per-language)
    activeMenuContainer,
    activeMenuLink,
    activeBackground,
    activeBorder,
    activeText,

    // Expose base color info for other derived styling needs (e.g., focus rings)
    baseColor,
    baseShade,

    // Glass morphism effect - subtle
    glassMorphism: `backdrop-blur-sm ${theme.cardBackground} ${theme.border}`,
    
    // Badge styles - professional
    badge: `${theme.primary} ${theme.background} px-2 py-1 rounded-md text-xs font-medium`,
    badgeSecondary: `${theme.textSecondary} ${theme.cardBackground} px-2 py-1 rounded-md text-xs`,
    
    // Button variants - clean and professional
    buttonPrimary: `${theme.primary} ${theme.cardBackground} ${theme.border} hover:${theme.background} transition-colors`,
    buttonSecondary: `${theme.textSecondary} ${theme.cardBackground} ${theme.border} hover:${theme.background}`,
    buttonOutline: `${theme.primary} border ${theme.border} hover:${theme.background} transition-colors`,
    
    // Card variants - clean and subtle
    cardDefault: `${theme.cardBackground} ${theme.border} backdrop-blur-sm`,
    cardElevated: `${theme.cardBackground} ${theme.shadow} ${theme.border} backdrop-blur-sm`,
    cardGradient: `bg-gradient-to-br ${theme.gradient} backdrop-blur-sm border ${theme.border}`,
    
    // Progress indicators - visible and accessible
    progressBar: theme.primary.replace('text-', 'bg-'),
    progressBackground: `bg-gray-200 dark:bg-gray-700`,
    
    // Code blocks - professional
    codeBackground: `${theme.cardBackground}`,
    codeBorder: `${theme.border}`,
    
    // Alerts and notifications - consistent with theme
    alertSuccess: `bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50 text-green-800 dark:text-green-200`,
    alertWarning: `bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/50 text-yellow-800 dark:text-yellow-200`,
    alertError: `bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50 text-red-800 dark:text-red-200`,
    alertInfo: `${theme.background} ${theme.border} ${theme.textPrimary}`,
  };
};

// Animation classes for enhanced theming
export const animationClasses = {
  fadeIn: 'animate-in fade-in-50 duration-500',
  slideIn: 'animate-in slide-in-from-bottom-4 duration-500',
  scaleIn: 'animate-in zoom-in-95 duration-300',
  bounceIn: 'animate-in zoom-in-95 duration-500 ease-out',
  pulseGlow: 'animate-pulse',
  float: 'animate-bounce',
  shimmer: 'animate-pulse',
};

// Responsive breakpoint utilities
export const responsiveClasses = {
  mobile: 'sm:',
  tablet: 'md:',
  desktop: 'lg:',
  wide: 'xl:',
  ultraWide: '2xl:',
};

// Enhanced component theming
export const componentThemes = {
  card: {
    base: 'rounded-lg border shadow-sm transition-all duration-200',
    interactive: 'hover:shadow-md hover:-translate-y-1',
    gradient: 'bg-gradient-to-br text-white border-0',
    glass: 'backdrop-blur-md bg-white/10 border-white/20',
  },
  
  button: {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    sizes: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 py-2 px-4',
      lg: 'h-11 px-8',
      xl: 'h-12 px-10 text-lg',
    },
  },
  
  badge: {
    base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    variants: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/80',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'text-foreground border border-input hover:bg-accent hover:text-accent-foreground',
    },
  },
  
  progress: {
    base: 'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
    indicator: 'h-full w-full flex-1 bg-primary transition-all',
  },
};

export default {
  languageThemes,
  getLanguageTheme,
  getThemeClasses,
  animationClasses,
  responsiveClasses,
  componentThemes,
};
