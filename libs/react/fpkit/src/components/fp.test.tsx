import React from 'react'
import { render, screen } from '@testing-library/react'
import FP from '../components/fp'
import jest from 'jest-mock'
import { userEvent } from '@storybook/testing-library'

describe('FP component', () => {
  it('renders a div by default', () => {
    const { container } = render(<FP />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders a span when specified', () => {
    const { container } = render(<FP as="span">Span</FP>)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
  })

  it('renders children', () => {
    const { container } = render(<FP>Hello, world!</FP>)
    expect(container.firstChild).toHaveTextContent('Hello, world!')
  })

  it('applies styles', () => {
    const style = { backgroundColor: 'red;' }
    const { container } = render(<FP styles={style}>Hello, world!</FP>)
    expect(container.firstChild).toHaveStyle(style)
  })

  it('does not render styles when renderStyles is false', () => {
    const { container } = render(
      <FP renderStyles={false} styles={{ backgroundColor: 'red' }}>
        Hello, world!
      </FP>,
    )
    expect(container.firstChild).not.toHaveStyle('background-color: red;')
  })

  it('passes through props', async () => {
    const handleClick = jest.fn()
    const { container } = render(
      <FP as="button" onClick={handleClick}>
        Hello, world!
      </FP>,
    )

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('applies ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<FP ref={ref}>Hello, world!</FP>)
    expect(ref.current).toBeTruthy()
  })
})
