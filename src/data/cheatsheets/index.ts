export { linuxCheatsheet } from './linux';
export { macCheatsheet } from './mac';
export { windowsCheatsheet } from './windows';
export { gitCheatsheet } from './git';
export { javascriptCheatsheet } from './javascript';
export { reactCheatsheet } from './react';
export { npmCheatsheet } from './npm';
export { vimCheatsheet } from './vim';
export { vscodeCheatsheet } from './vscode';
export { jetbrainsCheatsheet } from './jetbrains';
export { regexCheatsheet } from './regex';
export { emmetCheatsheet } from './emmet';
export { mongodbCheatsheet } from './mongodb';
export { postgresqlCheatsheet } from './postgresql';
export { redisCheatsheet } from './redis';
export { firebaseCheatsheet } from './firebase';
export { sqlCheatsheet } from './sql';
export { cassandraCheatsheet } from './cassandra';
export { timescaledbCheatsheet } from './timescaledb';

// Export all cheatsheets as an array
import { linuxCheatsheet } from './linux';
import { macCheatsheet } from './mac';
import { windowsCheatsheet } from './windows';
import { gitCheatsheet } from './git';
import { javascriptCheatsheet } from './javascript';
import { reactCheatsheet } from './react';
import { npmCheatsheet } from './npm';
import { vimCheatsheet } from './vim';
import { vscodeCheatsheet } from './vscode';
import { jetbrainsCheatsheet } from './jetbrains';
import { regexCheatsheet } from './regex';
import { emmetCheatsheet } from './emmet';
import { mongodbCheatsheet } from './mongodb';
import { postgresqlCheatsheet } from './postgresql';
import { redisCheatsheet } from './redis';
import { firebaseCheatsheet } from './firebase';
import { sqlCheatsheet } from './sql';
import { cassandraCheatsheet } from './cassandra';
import { timescaledbCheatsheet } from './timescaledb';

export const allCheatsheets = [
  linuxCheatsheet,
  macCheatsheet,
  windowsCheatsheet,
  gitCheatsheet,
  javascriptCheatsheet,
  reactCheatsheet,
  npmCheatsheet,
  vimCheatsheet,
  vscodeCheatsheet,
  jetbrainsCheatsheet,
  regexCheatsheet,
  emmetCheatsheet,
  mongodbCheatsheet,
  postgresqlCheatsheet,
  redisCheatsheet,
  firebaseCheatsheet,
  sqlCheatsheet,
  cassandraCheatsheet,
  timescaledbCheatsheet,
];

// Categorized cheatsheets
export const cheatsheetCategories = [
  {
    id: 'programming',
    name: 'Programming Languages',
    cheatsheets: [javascriptCheatsheet, reactCheatsheet],
  },
  {
    id: 'databases',
    name: 'Databases',
    cheatsheets: [mongodbCheatsheet, postgresqlCheatsheet, redisCheatsheet, firebaseCheatsheet, sqlCheatsheet, cassandraCheatsheet, timescaledbCheatsheet],
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    cheatsheets: [gitCheatsheet, npmCheatsheet],
  },
  {
    id: 'editors-tools',
    name: 'Editors & Tools',
    cheatsheets: [vimCheatsheet, vscodeCheatsheet, jetbrainsCheatsheet, regexCheatsheet, emmetCheatsheet],
  },
  {
    id: 'system',
    name: 'System & Terminal',
    cheatsheets: [linuxCheatsheet, macCheatsheet, windowsCheatsheet],
  },
];
