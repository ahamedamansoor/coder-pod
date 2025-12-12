'use client';

import type { Language, Topic } from '@/data/languages';
import React from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import topic components
const IntroductionToTailwind = dynamic(() => import('./topics/introduction-to-tailwind'));
const InstallationAndSetup = dynamic(() => import('./topics/installation-and-setup'));
const Configuration = dynamic(() => import('./topics/configuration'));
const UtilityFirstApproach = dynamic(() => import('./topics/utility-first-approach'));
const ResponsiveDesignBasics = dynamic(() => import('./topics/responsive-design-basics'));
const SpacingUtilities = dynamic(() => import('./topics/spacing-utilities'));
const SizingUtilities = dynamic(() => import('./topics/sizing-utilities'));
const TypographyUtilities = dynamic(() => import('./topics/typography-utilities'));
const ColorSystem = dynamic(() => import('./topics/color-system'));
const BackgroundUtilities = dynamic(() => import('./topics/background-utilities'));
const BorderUtilities = dynamic(() => import('./topics/border-utilities'));
const DisplayUtilities = dynamic(() => import('./topics/display-utilities'));
const Positioning = dynamic(() => import('./topics/positioning'));
const Flexbox = dynamic(() => import('./topics/flexbox'));
const GridLayout = dynamic(() => import('./topics/grid-layout'));
const ContainerUtilities = dynamic(() => import('./topics/container-utilities'));
const ZIndexStacking = dynamic(() => import('./topics/z-index-stacking'));
const HoverFocusStates = dynamic(() => import('./topics/hover-focus-states'));
const Transitions = dynamic(() => import('./topics/transitions'));
const Transforms = dynamic(() => import('./topics/transforms'));
const Animations = dynamic(() => import('./topics/animations'));
const Shadows = dynamic(() => import('./topics/shadows'));
const OpacityBlending = dynamic(() => import('./topics/opacity-blending'));
const DarkMode = dynamic(() => import('./topics/dark-mode'));
const CustomUtilities = dynamic(() => import('./topics/custom-utilities'));
const ArbitraryValues = dynamic(() => import('./topics/arbitrary-values'));
const JitMode = dynamic(() => import('./topics/jit-mode'));
const ComponentExtraction = dynamic(() => import('./topics/component-extraction'));
const Plugins = dynamic(() => import('./topics/plugins'));
const Breakpoints = dynamic(() => import('./topics/breakpoints'));
const MobileFirstDesign = dynamic(() => import('./topics/mobile-first-design'));
const ResponsiveTypography = dynamic(() => import('./topics/responsive-typography'));
const ResponsiveSpacing = dynamic(() => import('./topics/responsive-spacing'));
const FormStyling = dynamic(() => import('./topics/form-styling'));
const Buttons = dynamic(() => import('./topics/buttons'));
const Cards = dynamic(() => import('./topics/cards'));
const Navigation = dynamic(() => import('./topics/navigation'));
const ModalsOverlays = dynamic(() => import('./topics/modals-overlays'));
const ProductionOptimization = dynamic(() => import('./topics/production-optimization'));
const PerformanceBestPractices = dynamic(() => import('./topics/performance-best-practices'));
const TypographyPlugin = dynamic(() => import('./topics/typography-plugin'));
const AccessibilityUtilities = dynamic(() => import('./topics/accessibility-utilities'));
const GroupPeerVariants = dynamic(() => import('./topics/group-peer-variants'));
const ContainerQueries = dynamic(() => import('./topics/container-queries'));
const AspectRatio = dynamic(() => import('./topics/aspect-ratio'));
const ScrollSnap = dynamic(() => import('./topics/scroll-snap'));
const GradientStops = dynamic(() => import('./topics/gradient-stops'));
const SvgStyling = dynamic(() => import('./topics/svg-styling'));
const PrintStyles = dynamic(() => import('./topics/print-styles'));
const FormsPlugin = dynamic(() => import('./topics/forms-plugin'));
const UsingWithPreprocessors = dynamic(() => import('./topics/using-with-preprocessors'));
const ThemeCustomization = dynamic(() => import('./topics/theme-customization'));
const DesignTokens = dynamic(() => import('./topics/design-tokens'));
const ComponentLibraries = dynamic(() => import('./topics/component-libraries'));
const TextUtilities = dynamic(() => import('./topics/text-utilities'));
const FontManagement = dynamic(() => import('./topics/font-management'));
const FocusStates = dynamic(() => import('./topics/focus-states'));
const Filters = dynamic(() => import('./topics/filters'));
const BackdropFilter = dynamic(() => import('./topics/backdrop-filter'));
const BlendModes = dynamic(() => import('./topics/blend-modes'));
const Masks = dynamic(() => import('./topics/masks'));
const DivideUtilities = dynamic(() => import('./topics/divide-utilities'));
const SpaceUtilities = dynamic(() => import('./topics/space-utilities'));
const RingUtilities = dynamic(() => import('./topics/ring-utilities'));
const SrOnly = dynamic(() => import('./topics/sr-only'));
const ForcedColors = dynamic(() => import('./topics/forced-colors'));
const LogicalProperties = dynamic(() => import('./topics/logical-properties'));
const StateVariants = dynamic(() => import('./topics/state-variants'));
const PseudoVariants = dynamic(() => import('./topics/pseudo-variants'));
const AdvancedSelectors = dynamic(() => import('./topics/advanced-selectors'));
const CssGridAdvanced = dynamic(() => import('./topics/css-grid-advanced'));
const GradientDirections = dynamic(() => import('./topics/gradient-directions'));
const BackgroundImages = dynamic(() => import('./topics/background-images'));
const ObjectFit = dynamic(() => import('./topics/object-fit'));
const IconIntegration = dynamic(() => import('./topics/icon-integration'));
const NamingConventions = dynamic(() => import('./topics/naming-conventions'));
const WhenNotToUse = dynamic(() => import('./topics/when-not-to-use'));
const MigrationStrategies = dynamic(() => import('./topics/migration-strategies'));
const TeamWorkflows = dynamic(() => import('./topics/team-workflows'));
const Debugging = dynamic(() => import('./topics/debugging'));
const VscodeExtensions = dynamic(() => import('./topics/vscode-extensions'));
const TailwindUi = dynamic(() => import('./topics/tailwind-ui'));
const HeadlessUi = dynamic(() => import('./topics/headless-ui'));
const TestingTailwind = dynamic(() => import('./topics/testing-tailwind'));
const TailwindPlay = dynamic(() => import('./topics/tailwind-play'));
const PrettierPlugin = dynamic(() => import('./topics/prettier-plugin'));
const DataAttributes = dynamic(() => import('./topics/data-attributes'));
const HasVariant = dynamic(() => import('./topics/has-variant'));
const AriaVariants = dynamic(() => import('./topics/aria-variants'));
const OpenVariant = dynamic(() => import('./topics/open-variant'));
const StartingStyles = dynamic(() => import('./topics/starting-styles'));
const CssColumns = dynamic(() => import('./topics/css-columns'));
const TextBalance = dynamic(() => import('./topics/text-balance'));
const Subgrid = dynamic(() => import('./topics/subgrid'));

interface TailwindContentDisplayProps {
  topic: Topic;
  language: Language;
  onOpenEditor?: () => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Map of topic slugs to their components
const topicComponentMap: Record<string, React.ComponentType<any>> = {
  'introduction-to-tailwind': IntroductionToTailwind,
  'installation-and-setup': InstallationAndSetup,
  'tailwind-configuration': Configuration,
  'utility-first-approach': UtilityFirstApproach,
  'responsive-design-basics': ResponsiveDesignBasics,
  'spacing-utilities': SpacingUtilities,
  'sizing-utilities': SizingUtilities,
  'typography-utilities': TypographyUtilities,
  'color-system': ColorSystem,
  'background-utilities': BackgroundUtilities,
  'border-utilities': BorderUtilities,
  'display-utilities': DisplayUtilities,
  'positioning': Positioning,
  'flexbox': Flexbox,
  'grid-system': GridLayout,
  'container': ContainerUtilities,
  'z-index': ZIndexStacking,
  'hover-focus-states': HoverFocusStates,
  'transitions': Transitions,
  'transforms': Transforms,
  'animations': Animations,
  'shadows': Shadows,
  'opacity-blending': OpacityBlending,
  'dark-mode': DarkMode,
  'custom-utilities': CustomUtilities,
  'arbitrary-values': ArbitraryValues,
  'jit-mode': JitMode,
  'component-extraction': ComponentExtraction,
  'plugins': Plugins,
  'breakpoints': Breakpoints,
  'responsive-typography': ResponsiveTypography,
  'responsive-spacing': ResponsiveSpacing,
  'mobile-first-design': MobileFirstDesign,
  'form-styling': FormStyling,
  'forms-plugin': FormsPlugin,
  'buttons': Buttons,
  'cards': Cards,
  'navigation': Navigation,
  'modals-overlays': ModalsOverlays,
  'production-optimization': ProductionOptimization,
  'performance-best-practices': PerformanceBestPractices,
  'using-with-preprocessors': UsingWithPreprocessors,
  'theme-customization': ThemeCustomization,
  'design-tokens': DesignTokens,
  'component-libraries': ComponentLibraries,
  'typography-plugin': TypographyPlugin,
  'text-utilities': TextUtilities,
  'font-management': FontManagement,
  'accessibility-utilities': AccessibilityUtilities,
  'focus-states': FocusStates,
  'filters': Filters,
  'backdrop-filter': BackdropFilter,
  'blend-modes': BlendModes,
  'masks': Masks,
  'divide-utilities': DivideUtilities,
  'space-utilities': SpaceUtilities,
  'ring-utilities': RingUtilities,
  'sr-only': SrOnly,
  'forced-colors': ForcedColors,
  'logical-properties': LogicalProperties,
  'group-peer-variants': GroupPeerVariants,
  'state-variants': StateVariants,
  'pseudo-variants': PseudoVariants,
  'advanced-selectors': AdvancedSelectors,
  'container-queries': ContainerQueries,
  'aspect-ratio': AspectRatio,
  'css-grid-advanced': CssGridAdvanced,
  'backdrop-filters': BackdropFilter,
  'scroll-snap': ScrollSnap,
  'css-columns': CssColumns,
  'text-balance': TextBalance,
  'subgrid': Subgrid,
  'gradient-stops': GradientStops,
  'gradient-directions': GradientDirections,
  'background-images': BackgroundImages,
  'object-fit': ObjectFit,
  'svg-styling': SvgStyling,
  'icon-integration': IconIntegration,
  'print-styles': PrintStyles,
  'naming-conventions': NamingConventions,
  'when-not-to-use': WhenNotToUse,
  'migration-strategies': MigrationStrategies,
  'team-workflows': TeamWorkflows,
  'debugging': Debugging,
  'vscode-extensions': VscodeExtensions,
  'tailwind-ui': TailwindUi,
  'headless-ui': HeadlessUi,
  'testing-tailwind': TestingTailwind,
  'tailwind-play': TailwindPlay,
  'prettier-plugin': PrettierPlugin,
  'data-attributes': DataAttributes,
  'has-variant': HasVariant,
  'aria-variants': AriaVariants,
  'open-variant': OpenVariant,
  'starting-styles': StartingStyles,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function TailwindContentDisplay({
  topic,
  language,
  onOpenEditor,
  onOpenWebPlayground,
}: TailwindContentDisplayProps) {
  const TopicComponent = topicComponentMap[topic.slug];

  if (TopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <React.Suspense fallback={<LoadingSkeleton />}>
          <TopicComponent
            onOpenEditor={onOpenEditor}
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </React.Suspense>
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    />
  );
}
