import type { Roadmap } from './roadmaps/types';

// Import all roadmap definitions
import { html } from './roadmaps/html';
import { css } from './roadmaps/css';
import { scss } from './roadmaps/scss';
import { tailwind } from './roadmaps/tailwind';
import { javascript } from './roadmaps/javascript';
import { typescript } from './roadmaps/typescript';
import { react } from './roadmaps/react';
import { vue } from './roadmaps/vue';
import { nextjs } from './roadmaps/nextjs';
import { angular } from './roadmaps/angular';
import { java } from './roadmaps/java';
import { spring } from './roadmaps/spring';
import { springBoot } from './roadmaps/spring-boot';
import { dsa } from './roadmaps/dsa';
import { rxjs } from './roadmaps/rxjs';
import { playwright } from './roadmaps/playwright';
import { selenium } from './roadmaps/selenium';
import { python } from './roadmaps/python';
import { git } from './roadmaps/git';
import { postgresql } from './roadmaps/postgresql';
import { mysql } from './roadmaps/mysql';
import { mongodb } from './roadmaps/mongodb';
import { redis } from './roadmaps/redis';
import { frontendSystemDesign } from './roadmaps/frontend-system-design';
import { packageManager } from './roadmaps/package-manager';
import { qaEngineer } from './roadmaps/qa-engineer';
import { frontendDeveloper } from './roadmaps/frontend-developer';
import { backendDeveloper } from './roadmaps/backend-developer';

// All roadmaps consolidated in one place
export const roadmaps: Roadmap[] = [
    // Core web technologies
    { ...html, enabled: true },
    { ...css, enabled: true },
    { ...javascript, enabled: true },
    
    // CSS frameworks and preprocessors
    { ...scss, enabled: true },
    { ...tailwind, enabled: true },
    
    // Programming languages
    { ...typescript, enabled: true },
    { ...python, enabled: true },
    { ...java, enabled: true },
    
    // Frontend frameworks
    { ...react, enabled: true },
    { ...vue, enabled: true },
    { ...nextjs, enabled: true },
    { ...angular, enabled: true },
    
    // Backend frameworks
    { ...spring, enabled: true },
    { ...springBoot, enabled: true },
    
    // Data structures and algorithms
    { ...dsa, enabled: true },
    
    // Libraries and utilities
    { ...rxjs, enabled: true },
    
    // Testing
    { ...playwright, enabled: true },
    { ...selenium, enabled: true },

    // Development tools
    { ...git, enabled: true },
    { ...packageManager, enabled: true },
    
    // Databases
    { ...postgresql, enabled: true },
    { ...mysql, enabled: true },
    { ...mongodb, enabled: true },
    { ...redis, enabled: true },
    
    // Design and architecture
    { ...frontendSystemDesign, enabled: true },
];

// Filtered list for display (dashboard, dropdowns, etc.)
export const enabledRoadmaps = roadmaps.filter(roadmap => roadmap.enabled !== false);

// Role-based roadmaps (for display in roadmaps page only, not learnable roadmaps)
export const roleBasedRoadmaps: Roadmap[] = [
    frontendDeveloper,
    backendDeveloper,
    qaEngineer,
];

// Export types for use throughout the application
export type { Roadmap, Topic } from './roadmaps/types';

// Helper functions for roadmap management
export const getRoadmapBySlug = (slug: string): Roadmap | undefined => {
    return roadmaps.find(roadmap => roadmap.slug === slug);
};

export const getRoadmapsByCategory = (category: string): Roadmap[] => {
    return roadmaps.filter(roadmap => 
        roadmap.topics.some(topic => topic.category === category)
    );
};

export const getConnectedRoadmaps = (roadmapSlug: string): Roadmap[] => {
    const roadmap = getRoadmapBySlug(roadmapSlug);
    if (!roadmap) return [];
    
    const connectedSlugs = roadmap.topics
        .filter(topic => topic.connectedRoadmap)
        .map(topic => topic.connectedRoadmap!)
        .filter((slug, index, arr) => arr.indexOf(slug) === index); // Remove duplicates
    
    return connectedSlugs
        .map(slug => getRoadmapBySlug(slug))
        .filter((roadmap): roadmap is Roadmap => roadmap !== undefined);
};

// Export all individual roadmaps for direct access if needed
export {
    html,
    css,
    scss,
    tailwind,
    javascript,
    typescript,
    react,
    vue,
    nextjs,
    angular,
    java,
    spring,
    springBoot,
    dsa,
    rxjs,
    playwright,
    selenium,
    python,
    git,
    postgresql,
    mysql,
    mongodb,
    redis,
    frontendSystemDesign,
    packageManager,
    qaEngineer,
    frontendDeveloper,
    backendDeveloper,
};
