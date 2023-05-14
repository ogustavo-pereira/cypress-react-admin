/// <reference types="cypress" />
/// <reference types="../../" />

describe('Invoices', () => {
    beforeEach(()=> {
        window.localStorage.setItem('username', 'demo')
        cy.visit(`${Cypress.env('baseUrl')}products`)
    })

    it('Should be possible to find ra-input', () => {
        cy.get('[aria-label="Create"]').click()
        cy.getRaInput('image').click().type('test')
        cy.get('input[name="image"]').should('have.value', 'test')
    })
})