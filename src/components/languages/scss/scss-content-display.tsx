'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load all the topic components
const WhatIsSassScss = lazy(() => import('./topics/what-is-sass-scss'));
const SassVsScssSyntax = lazy(() => import('./topics/sass-vs-scss-syntax'));
const WhatIsSass = lazy(() => import('./topics/what-is-sass'));
const SassVsScss = lazy(() => import('./topics/sass-vs-scss'));
const SassInstallationSetup = lazy(() => import('./topics/sass-installation-setup'));
const SassInstallation = lazy(() => import('./topics/sass-installation'));
const SassCompilationNew = lazy(() => import('./topics/sass-compilation-new'));
const SassCompilation = lazy(() => import('./topics/sass-compilation'));
const SassCommentsNew = lazy(() => import('./topics/sass-comments-new'));
const SassComments = lazy(() => import('./topics/sass-comments'));
const SassVariablesNew = lazy(() => import('./topics/sass-variables-new'));
const SassVariables = lazy(() => import('./topics/sass-variables'));
const SassDataTypesNew = lazy(() => import('./topics/sass-data-types-new'));
const SassDataTypes = lazy(() => import('./topics/sass-data-types'));
const SassNestingNew = lazy(() => import('./topics/sass-nesting-new'));
const SassNesting = lazy(() => import('./topics/sass-nesting'));
const SassParentSelectorNew = lazy(() => import('./topics/sass-parent-selector-new'));
const SassParentSelector = lazy(() => import('./topics/sass-parent-selector'));
const SassPropertyNestingNew = lazy(() => import('./topics/sass-property-nesting-new'));
const SassSelectorCombinatorsNew = lazy(() => import('./topics/sass-selector-combinators-new'));
const SassPartialsNew = lazy(() => import('./topics/sass-partials-new'));
const SassImportNew = lazy(() => import('./topics/sass-import-new'));
const SassImport = lazy(() => import('./topics/sass-import'));
const SassUseNew = lazy(() => import('./topics/sass-use-new'));
const SassForwardNew = lazy(() => import('./topics/sass-forward-new'));
const SassLoadPathsNew = lazy(() => import('./topics/sass-load-paths-new'));
const SassIndexFilesNew = lazy(() => import('./topics/sass-index-files-new'));
const SassUseForward = lazy(() => import('./topics/sass-use-forward'));
const SassMixinBasicsNew = lazy(() => import('./topics/sass-mixin-basics-new'));
const SassMixinArgumentsNew = lazy(() => import('./topics/sass-mixin-arguments-new'));
const SassMixinContentNew = lazy(() => import('./topics/sass-mixin-content-new'));
const SassMixinNew = lazy(() => import('./topics/sass-mixin-new'));
const SassMixin = lazy(() => import('./topics/sass-mixin'));
const SassExtendInheritanceNew = lazy(() => import('./topics/sass-extend-inheritance-new'));
const SassExtendInheritance = lazy(() => import('./topics/sass-extend-inheritance'));
const SassPlaceholderNew = lazy(() => import('./topics/sass-placeholder-new'));
const SassPlaceholder = lazy(() => import('./topics/sass-placeholder'));
const SassFunctionBasicsNew = lazy(() => import('./topics/sass-function-basics-new'));
const SassFunctionArgumentsNew = lazy(() => import('./topics/sass-function-arguments-new'));
const SassOperatorsNew = lazy(() => import('./topics/sass-operators-new'));
const SassOperators = lazy(() => import('./topics/sass-operators'));
const SassInterpolationNew = lazy(() => import('./topics/sass-interpolation-new'));
const SassIfElseNew = lazy(() => import('./topics/sass-if-else-new'));
const SassForLoopNew = lazy(() => import('./topics/sass-for-loop-new'));
const SassEachLoopNew = lazy(() => import('./topics/sass-each-loop-new'));
const SassWhileLoopNew = lazy(() => import('./topics/sass-while-loop-new'));
const SassMathModuleNew = lazy(() => import('./topics/sass-math-module-new'));
const SassStringModuleNew = lazy(() => import('./topics/sass-string-module-new'));
const SassColorModuleNew = lazy(() => import('./topics/sass-color-module-new'));
const SassListModuleNew = lazy(() => import('./topics/sass-list-module-new'));
const SassMapModuleNew = lazy(() => import('./topics/sass-map-module-new'));
const SassSelectorModuleNew = lazy(() => import('./topics/sass-selector-module-new'));
const SassMetaModuleNew = lazy(() => import('./topics/sass-meta-module-new'));
const SassAtRootNew = lazy(() => import('./topics/sass-at-root-new'));
const SassAdvancedNestingNew = lazy(() => import('./topics/sass-advanced-nesting-new'));
const SassCustomFunctionsNew = lazy(() => import('./topics/sass-custom-functions-new'));
const SassResponsiveMixinsNew = lazy(() => import('./topics/sass-responsive-mixins-new'));
const SassFunctions = lazy(() => import('./topics/sass-functions'));
const SassInterpolation = lazy(() => import('./topics/sass-interpolation'));
const SassControlDirectives = lazy(() => import('./topics/sass-control-directives'));
const SassStringFunctions = lazy(() => import('./topics/sass-string-functions'));
const SassNumeric = lazy(() => import('./topics/sass-numeric'));
const SassList = lazy(() => import('./topics/sass-list'));
const SassMap = lazy(() => import('./topics/sass-map'));
const SassColor = lazy(() => import('./topics/sass-color'));
const SassSelector = lazy(() => import('./topics/sass-selector'));
const SassIntrospection = lazy(() => import('./topics/sass-introspection'));
const SassAdvancedNesting = lazy(() => import('./topics/sass-advanced-nesting'));
const SassCustomFunctions = lazy(() => import('./topics/sass-custom-functions'));
const SassResponsiveMixins = lazy(() => import('./topics/sass-responsive-mixins'));
const SassDebugging = lazy(() => import('./topics/sass-debugging-new'));
const SassCssImportsNew = lazy(() => import('./topics/sass-css-imports-new'));
const SassCssCompatibilityNew = lazy(() => import('./topics/sass-css-compatibility-new'));
const SassColorManipulationNew = lazy(() => import('./topics/sass-color-manipulation-new'));
const UtilityMixinsNew = lazy(() => import('./topics/utility-mixins-new'));
const LayoutMixinsNew = lazy(() => import('./topics/layout-mixins-new'));
const TypographyMixinsNew = lazy(() => import('./topics/typography-mixins-new'));
const AnimationMixinsNew = lazy(() => import('./topics/animation-mixins-new'));
const SassColorMixingNew = lazy(() => import('./topics/sass-color-mixing-new'));
const SassColorOpacityNew = lazy(() => import('./topics/sass-color-opacity-new'));
const SassColorSpacesNew = lazy(() => import('./topics/sass-color-spaces-new'));
const Sass71PatternNew = lazy(() => import('./topics/sass-7-1-pattern-new'));
const SassBemMethodologyNew = lazy(() => import('./topics/sass-bem-methodology-new'));
const SassSmacssNew = lazy(() => import('./topics/sass-smacss-new'));
const SassItcssNew = lazy(() => import('./topics/sass-itcss-new'));
const SassPerformanceNew = lazy(() => import('./topics/sass-performance-new'));
const SassBestPracticesNew = lazy(() => import('./topics/sass-best-practices-new'));
const SassControlDirectivesNew = lazy(() => import('./topics/sass-control-directives-new'));
const SassMapsNew = lazy(() => import('./topics/sass-maps-new'));
const SassBemWithSassNew = lazy(() => import('./topics/sass-bem-with-sass-new'));
const SassNamingConventionsNew = lazy(() => import('./topics/sass-naming-conventions-new'));
const SassDesignTokensNew = lazy(() => import('./topics/sass-design-tokens-new'));
const SassThemingNew = lazy(() => import('./topics/sass-theming-new'));
const SassDarkModeNew = lazy(() => import('./topics/sass-dark-mode-new'));
const SassComponentLibraryNew = lazy(() => import('./topics/sass-component-library-new'));
const SassOutputStyleNew = lazy(() => import('./topics/sass-output-style-new'));
const SassSourceMapsNew = lazy(() => import('./topics/sass-source-maps-new'));
const SassOptimizationNew = lazy(() => import('./topics/sass-optimization-new'));
const SassWebpackNew = lazy(() => import('./topics/sass-webpack-new'));
const SassViteNew = lazy(() => import('./topics/sass-vite-new'));
const SassGulpNew = lazy(() => import('./topics/sass-gulp-new'));
const SassCLINew = lazy(() => import('./topics/sass-cli-new'));
const SassAPINew = lazy(() => import('./topics/sass-api-new'));
const SassLintingNew = lazy(() => import('./topics/sass-linting-new'));
const SassTestingNew = lazy(() => import('./topics/sass-testing-new'));
const SassDocumentationNew = lazy(() => import('./topics/sass-documentation-new'));
const SassMigrationNew = lazy(() => import('./topics/sass-migration-new'));
const SassModuleMigrationNew = lazy(() => import('./topics/sass-module-migration-new'));
const SassToCSSNew = lazy(() => import('./topics/sass-to-css-new'));
const SassCommonMistakesNew = lazy(() => import('./topics/sass-common-mistakes-new'));
const SassRefactoringNew = lazy(() => import('./topics/sass-refactoring-new'));
const SassTeamWorkflowsNew = lazy(() => import('./topics/sass-team-workflows-new'));
const SassResourcesNew = lazy(() => import('./topics/sass-resources-new'));
const SassModulesNew = lazy(() => import('./topics/sass-modules-new'));
const SassArchitecture = lazy(() => import('./topics/sass-architecture'));
const SassPerformance = lazy(() => import('./topics/sass-performance'));
const SassAdvancedPatterns = lazy(() => import('./topics/sass-advanced-patterns'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-sass-scss': WhatIsSassScss,
  'sass-vs-scss-syntax': SassVsScssSyntax,
  'what-is-sass': WhatIsSass,
  'sass-vs-scss': SassVsScss,
  'sass-installation': SassInstallationSetup,
  'sass-compilation': SassCompilationNew,
  'sass-comments': SassCommentsNew,
  'sass-variables': SassVariablesNew,
  'sass-data-types': SassDataTypesNew,
  'sass-nesting': SassNestingNew,
  'sass-parent-selector': SassParentSelectorNew,
  'sass-property-nesting': SassPropertyNestingNew,
  'sass-selector-combinators': SassSelectorCombinatorsNew,
  'sass-partials': SassPartialsNew,
  'sass-import': SassImportNew,
  'sass-use': SassUseNew,
  'sass-forward': SassForwardNew,
  'sass-load-paths': SassLoadPathsNew,
  'sass-index-files': SassIndexFilesNew,
  'sass-use-forward': SassUseForward,
  'sass-mixin': SassMixinNew,
  'sass-mixin-basics': SassMixinBasicsNew,
  'sass-mixin-arguments': SassMixinArgumentsNew,
  'sass-mixin-content': SassMixinContentNew,
  'sass-extend-inheritance': SassExtendInheritanceNew,
  'sass-placeholder': SassPlaceholderNew,
  'sass-function-basics': SassFunctionBasicsNew,
  'sass-function-arguments': SassFunctionArgumentsNew,
  'sass-operators': SassOperatorsNew,
  'sass-interpolation': SassInterpolationNew,
  'sass-if-else': SassIfElseNew,
  'sass-for-loop': SassForLoopNew,
  'sass-each-loop': SassEachLoopNew,
  'sass-while-loop': SassWhileLoopNew,
  'sass-math-module': SassMathModuleNew,
  'sass-string-module': SassStringModuleNew,
  'sass-color-module': SassColorModuleNew,
  'sass-list-module': SassListModuleNew,
  'sass-map-module': SassMapModuleNew,
  'sass-selector-module': SassSelectorModuleNew,
  'sass-meta-module': SassMetaModuleNew,
  'sass-at-root': SassAtRootNew,
  'sass-advanced-nesting': SassAdvancedNestingNew,
  'sass-custom-functions': SassCustomFunctionsNew,
  'sass-responsive-mixins': SassResponsiveMixinsNew,
  'sass-functions': SassFunctions,
  'sass-control-directives-old': SassControlDirectives,
  'sass-string': SassStringFunctions,
  'sass-numeric': SassNumeric,
  'sass-list': SassList,
  'sass-map': SassMap,
  'sass-color': SassColor,
  'sass-selector': SassSelector,
  'sass-introspection': SassIntrospection,
  'sass-debugging': SassDebugging,
  'sass-css-imports': SassCssImportsNew,
  'sass-css-compatibility': SassCssCompatibilityNew,
  'sass-color-manipulation': SassColorManipulationNew,
  'utility-mixins': UtilityMixinsNew,
  'layout-mixins': LayoutMixinsNew,
  'typography-mixins': TypographyMixinsNew,
  'animation-mixins': AnimationMixinsNew,
  'sass-color-mixing': SassColorMixingNew,
  'sass-color-opacity': SassColorOpacityNew,
  'sass-color-spaces': SassColorSpacesNew,
  'sass-7-1-pattern': Sass71PatternNew,
  'sass-bem-methodology': SassBemMethodologyNew,
  'sass-smacss': SassSmacssNew,
  'sass-itcss': SassItcssNew,
  'sass-performance': SassPerformanceNew,
  'sass-best-practices': SassBestPracticesNew,
  'sass-control-directives': SassControlDirectivesNew,
  'sass-maps': SassMapsNew,
  'sass-bem-integration': SassBemWithSassNew,
  'sass-naming-conventions': SassNamingConventionsNew,
  'sass-design-tokens': SassDesignTokensNew,
  'sass-theming': SassThemingNew,
  'sass-dark-mode': SassDarkModeNew,
  'sass-component-library': SassComponentLibraryNew,
  'sass-output-style': SassOutputStyleNew,
  'sass-source-maps': SassSourceMapsNew,
  'sass-optimization': SassOptimizationNew,
  'sass-with-webpack': SassWebpackNew,
  'sass-with-vite': SassViteNew,
  'sass-with-gulp': SassGulpNew,
  'sass-cli': SassCLINew,
  'sass-api': SassAPINew,
  'sass-linting': SassLintingNew,
  'sass-testing': SassTestingNew,
  'sass-documentation': SassDocumentationNew,
  'sass-migration': SassMigrationNew,
  'sass-module-migration': SassModuleMigrationNew,
  'sass-to-css': SassToCSSNew,
  'sass-common-mistakes': SassCommonMistakesNew,
  'sass-refactoring': SassRefactoringNew,
  'sass-team-workflows': SassTeamWorkflowsNew,
  'sass-resources': SassResourcesNew,
  'sass-modules': SassModulesNew,
  'sass-architecture': SassArchitecture,
  'sass-advanced-patterns': SassAdvancedPatterns,
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

export function ScssContentDisplay({ 
  topic, 
  language,
}: {
  topic: Topic, 
  language: Language,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];
  const { openWithContent } = useWebPlayground();

  const handleOpenWebPlayground = (html: string, css: string, js: string) => {
    openWithContent(html, css, js);
  };

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent
          ? React.createElement(CustomTopicComponent as any, {
              onOpenWebPlayground: handleOpenWebPlayground,
            })
          : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
