import { render } from "@testing-library/react"

import ReactFpButton from "./react-fp-button"

describe("ReactFpButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ReactFpButton />)
    expect(baseElement).toBeTruthy()
  })
})
