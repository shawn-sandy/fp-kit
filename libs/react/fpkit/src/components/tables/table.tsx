import { Table, Caption, Thead, Tbody, Td, Tr } from "./table-elements"
import { ComponentProps } from '../../types'

export interface TableProps extends ComponentProps {
  tblHead: React.ReactNode
  tblCaption?: React.ReactNode
  tblBody: React.ReactNode
}


export const TBL = ({tblBody, tblCaption, tblHead}: TableProps) => {
  return (
    <Table>
      {tblCaption && <Caption>{tblCaption}</Caption>}
      <Thead>
        <Tr>
          {tblHead}
        </Tr>
      </Thead>
      <Tbody>
        {tblBody}
        </Tbody>
    </Table>

  )
}

TBL.displayName = 'TBL'
