import { render } from '@testing-library/react'
import { Card } from './card'

describe('Card', () => {
  it('renders children', () => {
    const { getByText } = render(<Card>Hello World</Card>)
    expect(getByText('Hello World')).toBeInTheDocument()
  })

  it('renders with default styles', () => {
    const { getByTestId } = render(
      <Card data-testid="card" styles={Card.styles}>
        Hello World
      </Card>,
    )
    const card = getByTestId('card')
    expect(card).toHaveStyle(Card.styles)
  })

  it('renders with custom styles', () => {
    const style = { backgroundColor: '#000;' }
    const { getByTestId } = render(
      <Card data-testid="card" styles={style}>
        Hello World
      </Card>,
    )
    const card = getByTestId('card')
    expect(card).toHaveStyle(style)
  })

  it('renders with custom element', () => {
    const { getByTestId } = render(
      <Card data-testid="card" elm="section">
        Hello World
      </Card>,
    )
    const card = getByTestId('card')
    expect(card.tagName.toLowerCase()).toBe('section')
  })
})
