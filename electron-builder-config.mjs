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

  extends: null,

  files: '**',

  extraResources: [
    { from: 'log_creds.txt', to: '../creds/log_creds.txt' },
    { from: 'translations', to: '../translations' },
    { from: 'templates', to: '../templates' },
  ],

  directories: {
    output: packageDirPath,
    app: buildDirPath,

    // 👇 Tell Electron Builder where your build assets live
    buildResources: path.join(root, 'build-assets'),
  },

  win: {
    publisherName: 'Oneworx Technology',

    // 👇 Use your PNG directly
    icon: path.join(root, 'build-assets', 'logo.png'),

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
