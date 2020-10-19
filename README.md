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

## End-2-End tests with [Detox](https://github.com/wix/Detox/tree/master/docs)

Several End-2-End tests in action:

<p align="center">
    <img alt="End-2-End tests" src="./docs/DetoxTests.gif" width="400" />
</p>

**Note**: You will need a Mac which runs OSX for this to work.

1. Install `detox-cli` and required tools globally:

    On a Mac run the following four commands:

    ```bash
    xcode-select --install
    brew tap wix/brew
    brew install applesimutils
    npm install -g detox-cli
    ```

2. Switch to the `detox` branch.

    **Note**: Detox was installed using [these instructions from reactnativetesting.io](https://reactnativetesting.io/e2e/setup.html#installing-detox) (excluding the ESLint part)

    Then support for Detox tests written in TypeScript was added with `yarn add --dev ts-jest @types/detox` (loosly following [these instructions](https://gist.github.com/solkaz/ead11515e2aa91d0dc04e609b3108841)).

3. Run the following commands to run the Detox tests:

    1. Install dependencies again. The App on the `detox` branch is an [ejected Expo app](https://docs.expo.io/bare/customizing/) so the dependencies are different as compared to the [managed workflow](https://docs.expo.io/introduction/managed-vs-bare/#managed-workflow).

        ```bash
        yarn
        ```

    2. Build the iOS App (only has to be run after adding new packages which have a native part)

         ```bash
         yarn test:e2e:build
         ```

    3. Start the iOS Simulator. This can be achieved by just running the app via

        ```
        yarn ios
        ```

    4. Run the Detox test cases

         ```bash
         yarn test:e2e
         ```

### Record Detox actions

On the `detox` branch you can record detox end-2-end tests with [DetoxRecorder](https://github.com/wix/DetoxRecorder/). That's how recording looks like:

<p align="center">
    <img alt="Detox Recorder in action" src="./docs/DetoxRecorder.gif" width="160" />
</p>

#### Example

Run the following command in the root folder of the project to start the recorder:

```bash
detox recorder --configuration "ios" --outputTestFile "~/Desktop/RecordedTest.e2e.js" --testName "My Recorded Test" --record
```

If you hit the start button and type the year `2011` and hit the `Reset` button it will generate the file `~/Desktop/RecordedTest.e2e.js` with contents similar to the following:

```js
describe('Recorded suite', () => {
	it('My Recorded Test', async () => {
		await element(by.id("start_button")).tap();
		await element(by.id("text_input")).tap();
		await element(by.id("text_input")).replaceText("2");
		await element(by.id("text_input")).replaceText("20");
		await element(by.id("text_input")).replaceText("201");
		await element(by.id("text_input")).replaceText("2011");
		await element(by.text("Reset")).tap();
	})
});
```