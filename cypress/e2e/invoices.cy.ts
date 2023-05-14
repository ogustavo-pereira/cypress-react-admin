/// <reference types="cypress" />
/// <reference types="../../" />

describe('Invoices', () => {
    beforeEach(()=> {
        window.localStorage.setItem('username', 'demo')
        cy.visit(`${Cypress.env('baseUrl')}invoices`)
    })

    it('Should be possible to expand the listing items', () => {
        cy.expandAllDatagrid()
    })

    it('Should be possible to expand third and first listing items', () => {
        cy.expandDatagridRow(1)
        cy.expandDatagridRow(3)
    })

    it('Should be possible to select a column passing the source', () => {
        cy.getColumnBySource('customer_id', 'head').contains('Address')
        cy.getColumnBySource('id', 'body').eq(0).should('be.visible')
    })

    it('Should be possible to get filter by source', () => {
        cy.getFilterBySource('date_lte').click()
    })

})