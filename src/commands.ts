import { RaList, RadataGridTbody, RaDataGridTheader } from './selectors'

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

