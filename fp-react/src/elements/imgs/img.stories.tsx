import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import FpImg from "./img"
import "./img.scss"

export default {
  /**
   * FP-React Img component
   * This is the best way to use the component
   * Image gives you a lot of options
   * to customize your image
   */
  title: "Elements/Media/Images",
  component: FpImg,
  parameters: {
    layout: "centered",
    status: {
      type: "beta" // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      // url: 'http://www.url.com/status', // will make the tag a link
      // statuses: { ...} // add custom statuses for this story here
    }
  }
} as ComponentMeta<typeof FpImg>

const ImgTemplate: ComponentStory<typeof FpImg> = (
  args
) => <FpImg {...args} />

export const Image = ImgTemplate.bind({})

Image.args = {
  src: "https://source.unsplash.com/random?w=800",
  alt: "Placeholder Image",
  styles: {
    "--img-w": "480px"
  }
}

export const ImageMedium = ImgTemplate.bind({})

ImageMedium.args = {
  src: "https://source.unsplash.com/random?w=800",
  alt: "Placeholder Image",
  width: "300",
  height: "300",
  fit: "fill",
  styles: {
    width: "350px",
    height: "350px"
  }
}

export const ImageError = ImgTemplate.bind({})

ImageError.args = {
  src: "https://source.unsplash",
  alt: "Image not found",
  width: "300",
  height: "300",
  fit: "fill",
  styles: {
    width: "350px",
    height: "350px"
  }
}
