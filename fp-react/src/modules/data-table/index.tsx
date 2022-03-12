import React from 'react';

export interface DataTablesProps {
  children: React.ReactNode;
  styles?: object;
}

const DataTables: React.FC<DataTablesProps> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return <div style={{...defStyles, ...styles}} {...props}>
 {children ?? DataTables}
 </div>;
};

export default DataTables;
