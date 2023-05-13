# Cypress React Admin

Cypress React Admin is a testing utility for React applications built with React Admin. It provides a set of custom commands and selectors to simplify the process of writing end-to-end tests for React Admin applications using Cypress.

## Features

- Custom Cypress commands for interacting with React Admin components
- Selectors of react-admin

## Installation

To use Cypress React Admin, you need to have Cypress installed in your project.

```bash
# Install Cypress as a dev dependency
npm install cypress --save-dev

# Install Cypress React Admin
npm install cypress-react-admin --save-dev
```

## Setup

1. Create a `cypress` directory in the root of your project.
2. Copy the example test file `example.spec.js` from `cypress-react-admin` into the `cypress` directory.
3. Modify the test file to suit your application's needs.
4. Run Cypress using the Cypress test runner.

```bash
# Open Cypress test runner
npx cypress open
```

## Usage

Cypress React Admin provides custom commands that you can use in your Cypress tests. These commands simplify the process of interacting with React Admin components and performing common actions.

```javascript
// Example usage of Cypress React Admin commands
describe('Example test suite', () => {
  it('should expand datagrid', () => {
    cy.expandDatagridRow(1)
    cy.expandDatagridRow(3)
  });
});
```

For more details on the available commands and usage examples, please refer to the [Cypress React Admin documentation](https://github.com/oguhpereira/cypress-react-admin/wiki).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).