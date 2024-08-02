import { Img } from './img'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import jest from 'jest-mock'
describe('Img', () => {
  it('should render an img element with passed props', () => {
    const src = 'test.jpg'
    const alt = 'Test image'
    const width = 100

    const { container } = render(<Img src={src} alt={alt} width={width} />)

    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', src)
    expect(img).toHaveAttribute('alt', alt)
    expect(img).toHaveAttribute('width', width.toString())
  })

  it('should apply default styles when renderStyles is true', () => {
    const { container } = render(<Img src="" alt="" />)
  })

  it('should call imgError callback on error', () => {
    const onError = jest.fn()
    render(<Img src="bad.jpg" alt="" imgError={onError} />)

    const img = screen.getByRole('img')
    fireEvent.error(img)

    expect(onError).toHaveBeenCalledTimes(1)
  })

  it('should call imgLoaded callback on load', () => {
    const onLoad = jest.fn()
    render(<Img src="good.jpg" alt="" imgLoaded={onLoad} />)

    const img = screen.getByRole('img')
    fireEvent.load(img)

    expect(onLoad).toHaveBeenCalledTimes(1)
  })
})
