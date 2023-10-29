# Seeders: InvestmentDemo

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your development machine.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager.

### Installation

- `git clone https://github.com/ishtiaque-pial/MobileDemo.git`
- `cd MobileDemo`
- `npx pod-install` for (iOS)
- `yarn ios` or `yarn android`

### Testing

For e2e testing detox has been used. To test it run follwoing command for iPhone 15 Simulator:

- `test:e2e:build:ios`
- `test:e2e:run:ios`

### Deeplink

To test deeplink, run following command:

-`npx uri-scheme open seedrsdemo://CompanyDetails/{companyID} --ios` for iOS

-`npx uri-scheme open seedrsdemo://CompanyDetails/{companyID} --android` for Android
