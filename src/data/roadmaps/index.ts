
import { html } from './html';
import { css } from './css';
import { scss } from './scss';
import { tailwind } from './tailwind';
import { javascript } from './javascript';
import { typescript } from './typescript';
import { react } from './react';
import { vue } from './vue';
import { nextjs } from './nextjs';
import { angular } from './angular';
import { java } from './java';
import { spring } from './spring';
import { springBoot } from './spring-boot';
import { dsa } from './dsa';
import { rxjs } from './rxjs';
import { playwright } from './playwright';
import { selenium } from './selenium';
import { python } from './python';
import { git } from './git';
import { mysql } from './mysql';
import { postgresql } from './postgresql';
import { frontendSystemDesign } from './frontend-system-design';
import { packageManager } from './package-manager';
import { qaEngineer } from './qa-engineer';
import { frontendDeveloper } from './frontend-developer';
import { backendDeveloper } from './backend-developer';
import type { Roadmap } from './types';

export const roadmaps: Roadmap[] = [
    { ...html, enabled: true },
    { ...css, enabled: true },
    { ...scss, enabled: true },
    { ...tailwind, enabled: true },
    { ...javascript, enabled: true },
    { ...typescript, enabled: false },
    { ...react, enabled: false },
    { ...vue, enabled: true },
    { ...nextjs, enabled: false },
    { ...angular, enabled: false },
    { ...java, enabled: false },
    { ...spring, enabled: false },
    { ...springBoot, enabled: false },
    { ...dsa, enabled: true },
    { ...rxjs, enabled: false },
    { ...playwright, enabled: false },
    { ...selenium, enabled: false },
    { ...python, enabled: true },
    { ...git, enabled: false },
    { ...mysql, enabled: true },
    { ...postgresql, enabled: false },
    { ...frontendSystemDesign, enabled: false },
    { ...packageManager, enabled: false },
];

// Filtered list for display (dashboard, dropdowns, etc.)
export const enabledRoadmaps = roadmaps.filter(roadmap => roadmap.enabled !== false);

// Role-based roadmaps (for display in roadmaps page only, not learnable roadmaps)
export const roleBasedRoadmaps: Roadmap[] = [
    frontendDeveloper,
    backendDeveloper,
    qaEngineer,
];

export * from './types';
