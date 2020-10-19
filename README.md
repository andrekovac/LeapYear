<h1 align="center">
  LeapYear App
</h1>

Tiny React Native App which displays whether the current year is a leap year.

<p align="center">
    <img alt="Leap Year App on iOS" src="./docs/LeapYearApp.gif" width="160" />
</p>

## Run

1. Install dependencies

    ```bash
      yarn
    ```

2. Run Expo development server

    ```bash
    yarn start
    ```

3. Open the Expo development client on your device. Scan the QR code printed by expo start with Expo Client (Android) or Camera (iOS).

  You may have to wait a minute while your project bundles and loads for the first time.

## Educational purpose

This app is used as part of a React Native workshop to exercise the following concepts (among others):

- Styling
- Conditional rendering
- Testing
  - Unit tests
  - Snapshot tests
  - End-2-end tests with Detox
- Animations
- Text Input

## Screens

### Welcome Screen

This is how the welcome screen looks like on iOS and Android:

<p align="center">
    <img alt="Welcome Screen iOS" src="./docs/WelcomeScreen_ios.png" width="200" />
    <img alt="Welcome Screen Android" src="./docs/WelcomeScreen_android.png" width="180" />
</p>

### Home Screen

Enter a year as a 4-digit number. It will be displayed whether the entered year is a leap year.

## End-2-End tests with Detox

1. Switch to the `detox` branch.

    **Note**: Detox was installed using [these instructions from reactnativetesting.io](https://reactnativetesting.io/e2e/setup.html#installing-detox) (excluding the ESLint part) and the addition to run `yarn add --dev @types/detox` for TypeScript support.

2. Run the following commands to run the Detox tests:

     1. Install dependencies again. The App on the `detox` branch is an [ejected Expo app](https://docs.expo.io/bare/customizing/) so the dependencies are different as compared to the [managed workflow](https://docs.expo.io/introduction/managed-vs-bare/#managed-workflow).

        ```bash
        yarn
        ```

     2. Build the iOS App

         ```bash
         yarn test:e2e:build
         ```

     3. Run the Detox test cases

         ```bash
         yarn test:e2e
         ```