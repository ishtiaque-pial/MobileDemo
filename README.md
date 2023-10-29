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

## Completed tasks

- Log in with API credentials
- Retrieve companies list from REST API
- Query company details from GraphQL
- Conditional Navigation
- Redux toolkit for state management
- E2e testing using detox
- Added deep link to Company List and Comapany Details
- Used Redux Persist to persist Redux state across app restarts, providing a seamless user experience.

## Incompleted tasks

- Unit Test
- Animations

### Testing

For e2e testing detox has been used.

- [Detox Environment Setup](https://wix.github.io/Detox/docs/introduction/getting-started/) on your development machine.

Now To test it run follwoing command:

- `test:e2e:build:ios`
- `test:e2e:run:ios`

### Deeplink

To test deeplink, run following command:

- `npx uri-scheme open seedrsdemo://CompanyDetails/{companyID} --ios` for iOS
- `npx uri-scheme open seedrsdemo://CompanyDetails/{companyID} --android` for Android
