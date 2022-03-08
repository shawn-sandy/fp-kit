/** @format */
import React from "react"
import "./grid.scss"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

import Grid from "./grid"

export default {
  title: "Components/Grids",
  component: Grid,
  parameters: {
    layout: "fullscreen",
    status: {
      type: "beta"
    }
  }
} as ComponentMeta<typeof Grid>

export const FPGrid: ComponentStory<typeof Grid> = () => (
  <Grid>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
    </div>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
    </div>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
    </div>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
    </div>
  </Grid>
)

const Template: ComponentStory<typeof Grid> = ({
  ...args
}) => (
  <section style={{ maxWidth: "min(80vw, 100vw)" }}>
    <Grid {...args}>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quod nulla totam dolorem nemo
          facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum
          maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quod nulla totam dolorem nemo
          facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum
          maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quod nulla totam dolorem nemo
          facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum
          maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quod nulla totam dolorem nemo
          facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum
          maxime dignissimos id.
        </p>
      </div>
    </Grid>
  </section>
)

//👇 Each story then reuses that template
export const StyledGrid = Template.bind({})
// Primary.args = { backgroundColor: "#ff0", label: "Example" }
StyledGrid.args = {
  styles: {
    "--grid-count": "2"
  }
}
