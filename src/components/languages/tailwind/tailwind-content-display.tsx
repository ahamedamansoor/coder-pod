'use client';

import type { Language, Topic } from '@/data/languages';
import React from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import dynamic from 'next/dynamic';

// Dynamically import topic components
const IntroductionToTailwind = dynamic(() => import('./topics/introduction-to-tailwind'));
const InstallationAndSetup = dynamic(() => import('./topics/installation-and-setup'));
const Configuration = dynamic(() => import('./topics/configuration'));
const UtilityFirstClasses = dynamic(() => import('./topics/utility-first-classes'));
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
  'utility-first-approach': UtilityFirstClasses,
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
};

export function TailwindContentDisplay({
  topic,
  language,
  onOpenEditor,
  onOpenWebPlayground,
}: TailwindContentDisplayProps) {
  // Check if there's a dedicated component for this topic
  const TopicComponent = topicComponentMap[topic.slug];

  if (TopicComponent) {
    return <TopicComponent onOpenWebPlayground={onOpenWebPlayground} />;
  }

  // Fall back to generic display
  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    />
  );
}
