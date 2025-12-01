export { linuxCheatsheet } from './linux';
export { macCheatsheet } from './mac';
export { windowsCheatsheet } from './windows';
export { gitCheatsheet } from './git';
export { dockerCheatsheet } from './docker';
export { htmlCheatsheet } from './html';
export { javascriptCheatsheet } from './javascript';
export { javaCheatsheet } from './java';
export { springCheatsheet } from './spring';
export { springBootCheatsheet } from './spring-boot';
export { reactCheatsheet } from './react';
export { angularCheatsheet } from './angular';
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
export { bashCheatsheet } from './bash';
export { homebrewCheatsheet } from './homebrew';
export { chromeCheatsheet } from './chrome';
export { firefoxCheatsheet } from './firefox';
export { edgeCheatsheet } from './edge';
export { safariCheatsheet } from './safari';
export { kubernetesCheatsheet } from './kubernetes';

// Export all cheatsheets as an array
import { linuxCheatsheet } from './linux';
import { macCheatsheet } from './mac';
import { windowsCheatsheet } from './windows';
import { gitCheatsheet } from './git';
import { dockerCheatsheet } from './docker';
import { kubernetesCheatsheet } from './kubernetes';
import { htmlCheatsheet } from './html';
import { javascriptCheatsheet } from './javascript';
import { javaCheatsheet } from './java';
import { springCheatsheet } from './spring';
import { springBootCheatsheet } from './spring-boot';
import { reactCheatsheet } from './react';
import { angularCheatsheet } from './angular';
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
import { bashCheatsheet } from './bash';
import { homebrewCheatsheet } from './homebrew';
import { chromeCheatsheet } from './chrome';
import { firefoxCheatsheet } from './firefox';
import { edgeCheatsheet } from './edge';
import { safariCheatsheet } from './safari';

export const allCheatsheets = [
  linuxCheatsheet,
  macCheatsheet,
  windowsCheatsheet,
  gitCheatsheet,
  dockerCheatsheet,
  kubernetesCheatsheet,
  htmlCheatsheet,
  javascriptCheatsheet,
  javaCheatsheet,
  springCheatsheet,
  springBootCheatsheet,
  reactCheatsheet,
  angularCheatsheet,
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
  bashCheatsheet,
  homebrewCheatsheet,
  chromeCheatsheet,
  firefoxCheatsheet,
  edgeCheatsheet,
  safariCheatsheet,
];

// Categorized cheatsheets
export const cheatsheetCategories = [
  {
    id: 'programming',
    name: 'Programming Languages',
    cheatsheets: [javaCheatsheet, springCheatsheet, springBootCheatsheet, htmlCheatsheet, javascriptCheatsheet, reactCheatsheet, angularCheatsheet],
  },
  {
    id: 'databases',
    name: 'Databases',
    cheatsheets: [mongodbCheatsheet, postgresqlCheatsheet, redisCheatsheet, firebaseCheatsheet, sqlCheatsheet, cassandraCheatsheet, timescaledbCheatsheet],
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    cheatsheets: [gitCheatsheet, dockerCheatsheet, kubernetesCheatsheet, npmCheatsheet, homebrewCheatsheet],
  },
  {
    id: 'editors-tools',
    name: 'Editors & Tools',
    cheatsheets: [vimCheatsheet, vscodeCheatsheet, jetbrainsCheatsheet, regexCheatsheet, emmetCheatsheet, chromeCheatsheet, firefoxCheatsheet, edgeCheatsheet, safariCheatsheet],
  },
  {
    id: 'system',
    name: 'System & Terminal',
    cheatsheets: [linuxCheatsheet, macCheatsheet, windowsCheatsheet, bashCheatsheet],
  },
];
