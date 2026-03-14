# MyApp

Beginner-friendly React Native starter using Expo.

## Why Expo

Expo is the easiest way to start with React Native because you can run the app on your phone without setting up the full native Android and iOS toolchain on day one.

## Recommended setup

1. Use Node.js `22` LTS.
2. Install dependencies with `npm install`.
3. Start the app with `npm start`.

If you use `nvm`, run:

```bash
nvm install 22
nvm use 22
```

This project includes [`.nvmrc`](/Users/ansaribrahim/Dev/myapp/.nvmrc) so `nvm use` will pick the right Node version.

## Create and run the app

```bash
npm start
```

Then choose one of these options in the Expo terminal:

- Press `i` to open the iOS simulator on macOS.
- Press `a` to open an Android emulator.
- Scan the QR code with the Expo Go app on your phone.
- Press `w` to open the web preview.

## Main files

- [App.tsx](/Users/ansaribrahim/Dev/myapp/App.tsx) is your first screen.
- [app.json](/Users/ansaribrahim/Dev/myapp/app.json) contains app configuration.
- [package.json](/Users/ansaribrahim/Dev/myapp/package.json) contains scripts and dependencies.

## Build options

For learning and testing, use Expo Go with `npm start`.

For native app builds later:

- Android/iOS cloud builds: `npx eas-cli build`
- Local native folders if needed later: `npx expo prebuild`

## Learn step by step

1. Change the text in [App.tsx](/Users/ansaribrahim/Dev/myapp/App.tsx).
2. Save the file and watch the app reload automatically.
3. Add more React Native components like `Button`, `TextInput`, and `ScrollView`.
