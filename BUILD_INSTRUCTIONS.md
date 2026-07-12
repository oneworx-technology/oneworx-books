# Oneworx Books — Build Instructions
## How to Build the Windows Installer

### Prerequisites (on a Windows machine or CI server)
- Node.js 20.x
- yarn
- Git

### Steps to Build

```bash
# 1. Install dependencies
yarn install

# 2. Build the app
yarn build

# 3. Package as Windows installer
yarn release:win
```

### Output
The installer will be at:
```
dist_electron/bundled/OneworxBooks-v1.0.0-Setup.exe
```

### Branding Files
- Logo: `build/icon.ico` and `build/icon.png`
- Colors: `colors.json` (blue = #4285F4)
- App name: `electron-builder-config.mjs`

### Version
Current: 1.0.0
Publisher: Oneworx Technology
App ID: co.za.oneworx.books
