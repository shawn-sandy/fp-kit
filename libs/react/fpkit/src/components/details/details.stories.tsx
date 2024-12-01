import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Details from './details'
import Icons from '../icons/icon'
import '../../styles/details/details.css'

const content = (
  <>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
      accusamus molestiae, qui omnis illum iste asperiores fugit doloribus
      voluptatem numquam voluptatibus nisi blanditiis quidem sint optio. Dicta
      officia commodi numquam?
    </p>
    <p>
      Impedit, libero ea. Repellendus doloribus possimus magni ullam natus
      voluptates, magnam ad iure quas eum adipisci! Repellat vel placeat commodi
      voluptatem optio odit, voluptatum id, magnam architecto at est ipsa.
    </p>
    <p>
      Vitae, laudantium libero, dolorem enim architecto consectetur qui vero
      error possimus beatae iusto, labore praesentium. Assumenda recusandae
      labore aliquam omnis, aliquid in impedit possimus! Rerum consequuntur non
      hic est placeat!
    </p>
  </>
)

const icon = <Icons.Add />

const meta: Meta<typeof Details> = {
  title: 'FP.REACT Components/Details',
  component: Details,
  args: {
    // @ts-ignore
    children: content,
    icon: icon,
    summary: <>Summary Section</>,
  },
  actions: { argTypesRegex: '^on.*' },
  decorators: [
    (Story) => (
      <div className="container" style={{ minWidth: '50vw' }}>
        <Story />
      </div>
    ),
  ],
} as Story

export default meta
type Story = StoryObj<typeof Details>

export const DetailsDropdown: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('group')).toBeInTheDocument()
  },
} as Story

export const DetailsOpen: Story = {
  args: {
    open: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('group')).toBeInTheDocument()
  },
} as Story

export const CustomDropdown: Story = {
  render: () => (
    <>
      <Details
        summary="Summary Section"
        icon={icon}
        ariaLabel="Details Section"
      >
        {content}
      </Details>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quasi
        maiores placeat voluptate voluptatem, tenetur consectetur earum modi,
        quam pariatur, quas porro iste quo ipsum rem rerum fuga incidunt?
        Suscipit!
      </p>
    </>
  ),
} as Story

export const DetailsAccordion: Story = {
  render: () => (
    <>
    <Details
        summary="Summary Section"
        icon={icon}
        ariaLabel="Details Section"
        name="accordion-details"
      >
        {content}
      </Details>
    <Details
        summary="Summary Section"
        icon={icon}
        ariaLabel="Details Section"
        name="accordion-details"
      >
        {content}
      </Details>
    <Details
        summary="Summary Section"
        icon={icon}
        ariaLabel="Details Section"
        name="accordion-details"
      >
        {content}
      </Details>
    </>
  )
} as Story
