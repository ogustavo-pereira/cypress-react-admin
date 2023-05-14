import { RaList, RadataGridTbody, RaDataGridTheader, RaDatagridRowExpand } from './selectors'

Cypress.Commands.add('getColumnBySource', (source, type) => {
  if (type === 'head') {
    RaDataGridTheader().find(`.column-${source}`);
  } else if (type === 'body') {
    RadataGridTbody().find(`.column-${source}`);
  }
});

Cypress.Commands.add('getFilterBySource', (source) => {
    RaList().find(`#${source}`)
})

Cypress.Commands.add('expandDatagridRow', (lineNumber) => {
  RaDatagridRowExpand().eq(lineNumber + 1).click()
})

Cypress.Commands.add('expandAllDatagrid', () => {
  RaDatagridRowExpand().eq(0).click()
})

Cypress.Commands.add('getRaInput', (source) => {
  cy.get(`.ra-input-${source}`)
})