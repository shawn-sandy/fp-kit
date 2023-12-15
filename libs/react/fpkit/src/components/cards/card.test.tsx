import { render, screen } from '@testing-library/react'
import { Card } from './card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Hello World</Card>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders with custom styles', () => {
    const style = { backgroundColor: '#000;' }
    render(
      <Card data-testid="card" styles={style}>
        Hello World
      </Card>,
    )
    const card = screen.getByTestId('card')
    expect(card).toHaveStyle(style)
  })

  it('renders with custom element', () => {
    render(
      <Card data-testid="card" elm="section">
        Hello World
      </Card>,
    )
    const card = screen.getByTestId('card')
    expect(card.tagName.toLowerCase()).toBe('section')
  })
})
