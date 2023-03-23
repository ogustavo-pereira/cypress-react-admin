export const RaList = () => cy.get('.RaList-main');
export const RaDataGrid = () => RaList().find('.RaDatagrid-root');
export const RaDataGridTheader = () => RaDataGrid().find('.RaDatagrid-thead');
export const RadataGridTbody = () => RaDataGrid().find('.RaDatagrid-tbody');
export const RaDatagridRow = () => RaDataGrid().find('.RaDatagrid-row');
export const RaDatagridRowExpand = () =>
  RaDatagridRow().find('.RaDatagrid-expandIcon');
