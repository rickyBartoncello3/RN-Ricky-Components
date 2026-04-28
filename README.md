# RN Components

A **React Native** showcase app built with TypeScript that demonstrates a wide range of native UI components, animations, navigation patterns, and theming. The project is structured following a clean presentation-layer architecture and uses [React Navigation](https://reactnavigation.org/) for screen management.

## Tech Stack

- **React Native** 0.73.2
- **TypeScript** 5.0
- **React Navigation** (Stack) 6.x
- **React Native Vector Icons** 10.x
- **React Native Gesture Handler**
- **React Native Safe Area Context**

## Screens & Features

| Screen | Description |
|---|---|
| `HomeScreen` | Entry point — menu listing all demo screens |
| `Animation101Screen` | Basic animation with `Animated` API |
| `Animation102Screen` | Advanced animation sequences |
| `SwitchScreen` | Custom switch / toggle components |
| `AlertScreen` | Native and custom alert dialogs |
| `TextInputScreen` | Controlled text input examples |
| `PullToRefreshScreen` | Pull-to-refresh list pattern |
| `CustomSectionListScreen` | `SectionList` with custom headers |
| `ModalScreen` | Modal presentation patterns |
| `InfiniteScrollScreen` | Paginated / infinite scroll list |
| `SlidesScreen` | Onboarding-style slide carousel |
| `ChangeThemeScreen` | Light / dark theme switching |

## Project Structure

```
src/
├── config/
│   ├── adapters/          # Utility adapters (e.g. prompt)
│   └── theme/             # Theme definitions
└── presentation/
    ├── assets/            # Images and static assets
    ├── components/ui/     # Reusable UI components (Button, Card, Title, …)
    ├── context/           # ThemeContext
    ├── hooks/             # Custom hooks (useAnimation, …)
    ├── icons/             # Icon wrappers
    ├── navigator/         # Stack navigator
    └── screens/           # Feature screens
```

## Getting Started

> Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding.

### Install dependencies

```bash
npm install
```

### iOS — install pods

```bash
npx pod-install
```

### Start Metro

```bash
npm start
```

### Run on device / simulator

```bash
# iOS (iPhone 15 Pro Max simulator)
npm run start:ios

# iOS (default simulator)
npm run ios

# Android
npm run android
```

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Metro bundler |
| `npm run ios` | Build & run on iOS |
| `npm run start:ios` | Build & run on iPhone 15 Pro Max simulator |
| `npm run android` | Build & run on Android |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest test suite |

## Requirements

- Node.js >= 18
- Xcode (for iOS builds)
- Android Studio (for Android builds)
