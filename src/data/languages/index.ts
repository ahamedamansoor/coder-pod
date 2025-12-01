
import { html } from './html';
import { css } from './css';
import { scss } from './scss';
import { tailwind } from './tailwind';
import { javascript } from './javascript';
import { typescript } from './typescript';
import { react } from './react';
import { vue } from './vue';
import { angular } from './angular';
import { java } from './java';
import { spring } from './spring';
import { springBoot } from './spring-boot';
import { dsa } from './dsa';
import { rxjs } from './rxjs';
import { playwright } from './playwright';
import { frontendDeveloper } from './frontend-developer';
import { backendDeveloper } from './backend-developer';
import type { Language } from './types';

export const languages: Language[] = [
    html,
    css,
    scss,
    tailwind,
    javascript,
    typescript,
    react,
    vue,
    angular,
    java,
    spring,
    springBoot,
    dsa,
    rxjs,
    playwright,
];

// Role-based roadmaps (for display in roadmaps page only, not learnable languages)
export const roleBasedRoadmaps: Language[] = [
    frontendDeveloper,
    backendDeveloper,
];

export * from './types';
