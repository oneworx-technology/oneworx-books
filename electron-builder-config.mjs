import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = dirname;
const buildDirPath = path.join(root, 'dist_electron', 'build');
const packageDirPath = path.join(root, 'dist_electron', 'bundled');

const oneworxBooksConfig = {
  productName: 'Oneworx',
  appId: 'co.za.oneworx.books',
  artifactName: '${productName}-v${version}.${ext}',
  asarUnpack: '**/*.node',
  extraResources: [
    { from: 'log_creds.txt', to: '../creds/log_creds.txt' },
    { from: 'translations', to: '../translations' },
    { from: 'templates', to: '../templates' },
  ],
  files: '**',
  extends: null,
  directories: {
    output: packageDirPath,
    app: buildDirPath,
  },
  win: {
    publisherName: 'Oneworx Technology',
    artifactName: 'Oneworx-v${version}.${ext}',
    target: [
      {
        target: 'portable',
        arch: ['x64'],
      },
    ],
  },
};

export default oneworxBooksConfig;
