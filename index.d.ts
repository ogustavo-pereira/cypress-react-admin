/// <reference types="cypress" />

// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
  interface Chainable {
    getColumnBySource(source: string, type: 'head' | 'body'): void;
    getFilterBySource(source: string): void;
  }
}
