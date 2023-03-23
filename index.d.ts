/// <reference types="cypress" />

// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
  interface Chainable {
    getColumnBySource(source: string, type: 'head' | 'body'): Cypress.Chainable;
    getFilterBySource(source: string): Cypress.Chainable;
    expandDatagridRow(lineNumber: number): void;
    expandAllDatagrid(): void;
  }
}
