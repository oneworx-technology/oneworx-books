import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = dirname;
const buildDirPath = path.join(root, 'dist_electron', 'build');
const packageDirPath = path.join(root, 'dist_electron', 'bundled');

const oneworxBooksConfig = {
  productName: 'Oneworx',
  appId: 'co.za.oneworx.books',
  artifactName: '${productName}-v${version}-Setup.${ext}',
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
    artifactName: 'Oneworx-v${version}-Setup.${ext}',
    icon: 'build/icon.ico',
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
      {
        target: 'portable',
        arch: ['x64'],
      },
    ],
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    installerIcon: 'build/installericon.ico',
    uninstallerIcon: 'build/uninstallericon.ico',
    installerHeaderIcon: 'build/icon.ico',
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: 'Oneworx',
    license: 'LICENSE',
    installerSidebar: 'build/installerSidebar.bmp',
  },
};

export default oneworxBooksConfig;
