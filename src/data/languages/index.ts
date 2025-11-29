
import { html } from './html';
import { css } from './css';
import { scss } from './scss';
import { javascript } from './javascript';
import { react } from './react';
import { java } from './java';
import { spring } from './spring';
import { springBoot } from './spring-boot';
import { dsa } from './dsa';
import { rxjs } from './rxjs';
import type { Language } from './types';

export const languages: Language[] = [
    html,
    css,
    scss,
    javascript,
    react,
    java,
    spring,
    springBoot,
    dsa,
    rxjs,
];

export * from './types';
