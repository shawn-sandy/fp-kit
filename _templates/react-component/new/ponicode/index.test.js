const index = require("../index")
// @ponicode
describe("index.prompt", () => {
    test("0", () => {
        let result = index.prompt({ inquirer: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = index.prompt({ inquirer: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = index.prompt({ inquirer: undefined })
        expect(result).toMatchSnapshot()
    })
})
