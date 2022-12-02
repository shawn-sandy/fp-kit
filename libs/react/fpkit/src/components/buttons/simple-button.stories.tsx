import { Button } from "./button"

export default {
  title: "FP.React Components/Buttons",
  component: Button,
  args: {
    children: "Default Button",
    type: "button",
  },
  argTypes: {
    children: { control: "text" },
    onPointerDown: { action: "down" },
    onPointerLeave: { action: "leave" },
    onPointerOver: { action: "over" }
  }
}

export const Default = {}
export const Primary = {
  args: {
    children: "Primary Button",
    type: "submit",
  }
}
