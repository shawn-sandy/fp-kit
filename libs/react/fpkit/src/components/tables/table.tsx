import { Table, Caption, Thead, Tbody, Td, Tr } from "./table-elements"
import { ComponentProps } from '../../types'

export interface TableProps extends ComponentProps {
  tblHead: React.ReactNode
  tblBody: React.ReactNode
  tblCaption?: React.ReactNode
}

/**
 * Render the `thead` by passing an array of names
 */
export const RenderHead = (data: []) => {
  const head = data.map((item, index) => {
    return <th key={index}>{item}</th>
  })
  return
}

/**
 * Render the table body `tr`, `td` with the data provided
 */
export const RenderBody = (data: []) => {
  const rows = data?.map((items: []) => {
    const cells = items?.map( item => {
      return <Td>{item}</Td>
    })
    return <Tr>{cells}</Tr>
  })
  return (<Tbody>{data}</Tbody>)
}

/**
 * Render the table placing `caption`, `thead` and `tbody` in the correct order
 * caption is optional
 */
export const RenderTable = ({tblBody, tblCaption, tblHead}: TableProps) => {
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

RenderTable.displayName = 'TBL'
RenderBody.displayName = 'renderBody'
RenderHead.displayName = 'renderHead'
