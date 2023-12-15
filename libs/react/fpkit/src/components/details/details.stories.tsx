import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Details from './details'
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

const meta: Meta<typeof Details> = {
  title: 'FP.REACT Components/Details',
  component: Details,
  args: {
    // @ts-ignore
    children: content,
    summary: (
      <section>
        <h3>Summary Section</h3>
      </section>
    ),
  },
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

export const DetailsComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}
