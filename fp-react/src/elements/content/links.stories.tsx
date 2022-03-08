import React from "react"
import FpLinks, { OpenTab } from "./links"
import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

export default {
  title: "Elements/Content/Links",
  component: FpLinks,
  subcomponents: { OpenTab },
  parameters: {
    // layout: 'padded',
    status: {
      type: "beta"
    }
  }
} as ComponentMeta<typeof FpLinks>

const Template: ComponentStory<typeof FpLinks> = (args) => (
  <FpLinks {...args} />
)

export const Link: ComponentStory<typeof FpLinks> =
  Template.bind({})

Link.args = {
  children: "Click me...",
  to: "#",
  title: "Title of the link"
}

const OpenTemplate: ComponentStory<typeof FpLinks> = (
  args
) => (
  <>
    <p>
      Creates an external link that opens in a new window{" "}
    </p>
    <p>
      <OpenTab {...args} />
    </p>
  </>
)

export const ExternalLink: ComponentStory<typeof FpLinks> =
  OpenTemplate.bind({})

ExternalLink.args = {
  children: "Open in new tab",
  to: "/",
  title: "Title of the link"
}

export const LinkButton = Template.bind({})

LinkButton.args = {
  children: "Link Button",
  to: "#",
  title: "Title of the link",
  styles: {
    "--btn-bg": "darkblue",
    "--btn-color": "white",
    "--btn-deco": "none"
  }
}
