import FP from '../fp'
import { ComponentProps } from '../../types'

export interface TableProps extends ComponentProps {}

export const Table = ({ id, ...props }: TableProps) => {
  return (
    <FP
      id={id}
      {...props}
      styles={{ width: '80vw', height: '50vw', overflow: 'hidden' }}
    >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Dom</td>
            <td>6000</td>
            <td>Dom</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <td>Melissa</td>
            <td>5150</td>
          </tr>
        </tbody>
      </table>
    </FP>
  )
}

Table.displayName = 'Table'
