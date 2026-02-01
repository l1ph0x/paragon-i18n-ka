import fs from 'node:fs';

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });

fs.copyFileSync('src/i18n/index.js', 'dist/index.js');
fs.copyFileSync('src/i18n/index.js', 'dist/index.cjs');
fs.copyFileSync('src/i18n/messages/ka.json', 'dist/ka.json');

