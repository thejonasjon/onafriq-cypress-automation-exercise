# onafriq-cypress-automation-exercise

This repository contains an automation exercise implemented with Cypress. It demonstrates various testing practices, including Page Object Model (POM), Behavior-Driven Development (BDD), Data-Driven Testing (DDT), custom assertions, utility functions, error handling techniques, and integration with GitHub Actions for CI/CD with HTML Reports.

## Overview

The goal of this project is to build a scalable, robust, and continuously improving test suite.

## Project Structure

- **cypress/e2e/**: Test scenarios defined using BDD and Gherkin syntax.
- **cypress/fixtures/**: Fixture files for DDT.
- **cypress/support/**:
- **commands.js**: Custom Cypress commands for repeated action - DRY.
- **utils.js**: Utility functions. Common functions are extracted to keep the code DRY
- **pageObjects/**: Page Object Model implementation.

## CI/CD Integration

The project uses GitHub Actions for continuous integration and deployment, with configurations for running tests and HTML report generation.


## Prerequisites

- Node.js (version 12 or later)
- npm (version 6 or later)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/onafriq/onafriq-cypress-automation-exercise.git
   cd onafriq-cypress-automation-exercise
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Running Tests

To run the tests locally in the Cypress Test Runner:
```sh
npx cypress open
```

To run the tests in headless mode:
```sh
npx cypress run
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License