# Please

This is the repository for the please.com mobile application. This project was bootstrapped with Create React Native App.

## Setup

```bash
nvm use # or set node v10.3.0 manually
brew install yarn # yarn is a dependency
npm install -g react-native-cli # react-native-cli is a dependency
yarn install
```

## Develop

```bash
react-native run ios
```

## Test

```bash
# unit test
yarn test

# e2e test
yarn e2e
```

## Deploy

```bash
# TBD
```

## Detox

[Getting Started](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md)

```
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
yarn add -D detox detox-expo-helpers
yarn add jest

# package.json

# react-native-cli
"detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",
      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "name": "iPhone 7"
    }
  }
}

# create-react-native-app (expo)

"detox": {
  "configurations": {
    "ios.sim": {
      "binaryPath": "bin/Exponent.app",
      "type": "ios.simulator",
      "name": "iPhone 7"
    }
  }
}

detox init -r jest

Create an e2e folder in your project root
Inside e2e folder create mocha.opts (for mocha) or config.json (for jest). See examples: mocha.opts, config.json
Inside e2e folder create init.js file. See examples for Mocha and Jest.
Inside e2e folder create firstTest.spec.js with content similar to this.
If you use jest, add "test-runner": "jest" to detox section in your package.json (see example).

detox build
detox test
```
