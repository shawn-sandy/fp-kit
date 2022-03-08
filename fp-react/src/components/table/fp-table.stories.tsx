/** @format */

import React from "react"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

import FpTable, {
  FpTableBody,
  FpTableRow,
  FpTableHead,
  FpTableCell
} from "./fp-table"
import "./table.scss"

export default {
  title: "Components/FPTable",
  component: FpTable,
  layout: "centered",
  status: {
    type: "canary"
  }
} as ComponentMeta<typeof FpTable>

export const BasicTable: ComponentStory<
  typeof FpTable
> = () => (
  <section style={{ width: "100%", minWidth: "85vw" }}>
    <FpTable>
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
      </tbody>
    </FpTable>
  </section>
)

export const SimpleTable: ComponentStory<
  typeof FpTable
> = () => (
  <section style={{ width: "min(80vw, 100vw)" }}>
    <FpTable>
      <FpTableHead>
        <FpTableRow>
          <FpTableCell cell="td">First Name</FpTableCell>
          <FpTableCell cell="td">Last Name</FpTableCell>
          <FpTableCell cell="td">Age</FpTableCell>
        </FpTableRow>
      </FpTableHead>
      <FpTableBody>
        <FpTableRow>
          <FpTableCell>John</FpTableCell>
          <FpTableCell>Hannock</FpTableCell>
          <FpTableCell>2000</FpTableCell>
        </FpTableRow>
        <FpTableRow>
          <FpTableCell>Jane</FpTableCell>
          <FpTableCell>Hannock</FpTableCell>
          <FpTableCell>1900</FpTableCell>
        </FpTableRow>
      </FpTableBody>
    </FpTable>
  </section>
)
