import { StoryObj, Meta } from '@storybook/react'
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/testing-library'

/**
 * Import jest matchers
 */
import { expect } from '@storybook/jest'

import { Main } from './landmarks'

const meta: Meta<typeof Main> = {
  title: 'FP.React Components/Layout/Landmarks',
  component: Main,
  args: {
    // @ts-ignore
    children: (
      <section>
        The main HTML element represents the dominant content of the body of a
        document.
      </section>
    ),
    // @ts-ignore
    'data-testid': 'main',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '80vh', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const mainChildren = () => (
  <>
    <section aria-label="main-content">
      <article>
        <h3>Header Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis alias,
          labore quibusdam, culpa dolorum rerum fugiat laborum deserunt sed ad
          eveniet, modi reprehenderit vero pariatur enim esse eaque consectetur
          nulla.
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis alias,
          labore quibusdam, culpa dolorum rerum fugiat laborum deserunt sed ad
          eveniet, modi reprehenderit vero pariatur enim esse eaque consectetur
          nulla.
        </p>
        <div>Lorem ipsum dolor sit amet.</div>
      </article>
      <aside>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, unde?
        </p>
      </aside>
    </section>
  </>
)

export default meta
type Story = StoryObj<typeof Main>

export const MainLandmark: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const main = canvas.getByRole('main')
    expect(main).toBeInTheDocument()
  },
}

export const MainArticles: Story = {
  args: {
    // @ts-ignore
    children: mainChildren(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const main = canvas.getByRole('main')
    expect(main).toBeInTheDocument()
    const title = canvas.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Header Title')
  },
}
