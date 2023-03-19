import { RaList, RadataGridTbody, RaDataGridTheader, RaDatagridRowExpand } from './selectors'

Cypress.Commands.add('getColumnBySource', (source, type) => {
  if (type === 'head') {
    RaDataGridTheader.find(`[class=column-"${source}"]`);
  } else if (type === 'body') {
    RadataGridTbody.find(`[class=column-"${source}"]`);
  }
});

Cypress.Commands.add('getFilterBySource', (source) => {
    RaList.find(`ìnput[name="${source}"]`)
})

Cypress.Commands.add('expandDatagridRow', (lineNumber) => {
  RaDatagridRowExpand.eq(lineNumber + 1).click()
})

Cypress.Commands.add('expandAllDatagrid', () => {
  RaDatagridRowExpand.eq(0).click()
})