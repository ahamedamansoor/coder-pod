
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
import { postgresql } from './postgresql';
import { frontendSystemDesign } from './frontend-system-design';
import type { Language } from './types';

export const languages: Language[] = [
    { ...html, enabled: true },
    { ...css, enabled: true },
    { ...scss, enabled: true },
    { ...tailwind, enabled: true },
    { ...javascript, enabled: true },
    { ...typescript, enabled: false },
    { ...react, enabled: true },
    { ...vue, enabled: false },
    { ...nextjs, enabled: false },
    { ...angular, enabled: false },
    { ...java, enabled: false },
    { ...spring, enabled: false },
    { ...springBoot, enabled: false },
    { ...dsa, enabled: true },
    { ...rxjs, enabled: false },
    { ...playwright, enabled: false },
    { ...selenium, enabled: true },
    { ...python, enabled: true },
    { ...git, enabled: false },
    { ...postgresql, enabled: false },
    { ...frontendSystemDesign, enabled: false },

];

// Filtered list for display (dashboard, dropdowns, etc.)
export const enabledLanguages = languages.filter(lang => lang.enabled !== false);

// Role-based roadmaps (for display in roadmaps page only, not learnable languages)
export const roleBasedRoadmaps: Language[] = [
];

export * from './types';
