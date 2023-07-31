import { render, fireEvent, screen } from '@testing-library/react'
import { Input } from './inputs'
import jest from 'jest-mock'

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter your name" id="name" />)
    const input = screen.getByPlaceholderText('Enter your name')
    expect(input).toBeInTheDocument()
  })

  it('calls inputChange function on change event', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input
        placeholder="Enter your name"
        id="name"
        inputChange={handleChange}
      />,
    )
    const input = getByPlaceholderText('Enter your name')
    fireEvent.change(input, { target: { value: 'John' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('calls inputBlur function on blur event', () => {
    const handleBlur = jest.fn()
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your name" id="name" inputBlur={handleBlur} />,
    )
    const input = getByPlaceholderText('Enter your name')
    fireEvent.blur(input)
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  it('calls inputDown function on keydown event', () => {
    const handleKeyDown = jest.fn()
    render(
      <Input
        placeholder="Enter your name"
        id="name"
        inputDown={handleKeyDown}
      />,
    )
    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(handleKeyDown).toHaveBeenCalledTimes(1)
    screen.logTestingPlaygroundURL()
  })

  it('allows the user to enter text', async () => {
    render(<Input placeholder="Enter your name" id="name" />)
    const input = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(input, { target: { value: 'John' } })
    expect(input).toHaveValue('John')
  })
})
