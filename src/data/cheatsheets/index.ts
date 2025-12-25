export { linuxCheatsheet } from './linux';
export { macCheatsheet } from './mac';
export { windowsCheatsheet } from './windows';
export { gitCheatsheet } from './git';
export { dockerCheatsheet } from './docker-enhanced';
export { nodeCheatsheet } from './node';
export { htmlCheatsheet } from './html';
export { javascriptCheatsheet } from './javascript';
export { javaCheatsheet } from './java';
export { springCheatsheet } from './spring';
export { springBootCheatsheet } from './spring-boot';
export { reactCheatsheet } from './react';
export { vueCheatsheet } from './vue';
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
export { scssCheatsheet } from './scss';
export { tailwindCheatsheet } from './tailwind';
export { seleniumCheatsheet } from './selenium';
export { expressCheatsheet } from './express';

// Export all cheatsheets as an array
import { linuxCheatsheet } from './linux';
import { macCheatsheet } from './mac';
import { windowsCheatsheet } from './windows';
import { gitCheatsheet } from './git';
import { dockerCheatsheet } from './docker-enhanced';
import { kubernetesCheatsheet } from './kubernetes';
import { nodeCheatsheet } from './node';
import { htmlCheatsheet } from './html';
import { cssCheatsheet } from './css';
import { javascriptCheatsheet } from './javascript';
import { typescriptCheatsheet } from './typescript';
import { javaCheatsheet } from './java';
import { pythonCheatsheet } from './python';
import { springCheatsheet } from './spring';
import { springBootCheatsheet } from './spring-boot';
import { reactCheatsheet } from './react';
import { nextjsCheatsheet } from './nextjs';
import { vueCheatsheet } from './vue';
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
import { awsCheatsheet } from './aws';
import { chromeCheatsheet } from './chrome';
import { firefoxCheatsheet } from './firefox';
import { edgeCheatsheet } from './edge';
import { safariCheatsheet } from './safari';
import { scssCheatsheet } from './scss';
import { tailwindCheatsheet } from './tailwind';
import { seleniumCheatsheet } from './selenium';
import { expressCheatsheet } from './express';

export const allCheatsheets = [
  linuxCheatsheet,
  macCheatsheet,
  windowsCheatsheet,
  gitCheatsheet,
  dockerCheatsheet,
  kubernetesCheatsheet,
  htmlCheatsheet,
  cssCheatsheet,
  javascriptCheatsheet,
  typescriptCheatsheet,
  nodeCheatsheet,
  javaCheatsheet,
  pythonCheatsheet,
  springCheatsheet,
  springBootCheatsheet,
  reactCheatsheet,
  vueCheatsheet,
  nextjsCheatsheet,
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
  awsCheatsheet,
  chromeCheatsheet,
  firefoxCheatsheet,
  edgeCheatsheet,
  safariCheatsheet,
  scssCheatsheet,
  tailwindCheatsheet,
  seleniumCheatsheet,
  expressCheatsheet,
];

// Categorized cheatsheets
export const cheatsheetCategories = [
  {
    id: 'programming',
    name: 'Programming Languages',
    cheatsheets: [
      pythonCheatsheet,
      javaCheatsheet,
      javascriptCheatsheet,
      typescriptCheatsheet,
      nodeCheatsheet,
      htmlCheatsheet,
      cssCheatsheet,
      scssCheatsheet,
      tailwindCheatsheet,
      reactCheatsheet,
      nextjsCheatsheet,
      vueCheatsheet,
      angularCheatsheet,
      springCheatsheet,
      springBootCheatsheet,
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    cheatsheets: [mongodbCheatsheet, postgresqlCheatsheet, redisCheatsheet, firebaseCheatsheet, sqlCheatsheet, cassandraCheatsheet, timescaledbCheatsheet],
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    cheatsheets: [gitCheatsheet, dockerCheatsheet, kubernetesCheatsheet, awsCheatsheet, npmCheatsheet, homebrewCheatsheet, seleniumCheatsheet, expressCheatsheet],
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
