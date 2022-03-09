import * as React from 'react';

export interface DatatableProps {
  children?: React.ReactNode;
}

const Datatable: React.FC<DatatableProps> = ({children, ...props}) => {
  return <div>{children?? 'Table content'}</div>
}

export default Datatable
