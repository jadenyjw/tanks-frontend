const Instructions = require("./Instructions")

// @ponicode
describe("scrollToTop", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Michael", "Jean-Philippe"], ["George", "Pierre Edouard", "George"], ["Jean-Philippe", "George", "Anas"]]
        inst = new Instructions.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.scrollToTop()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Jean-Philippe", "George"], ["Michael", "George", "Pierre Edouard"], ["Jean-Philippe", "Michael", "Jean-Philippe"]]
        inst = new Instructions.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Edmond", "Edmond"], ["Edmond", "Anas", "Jean-Philippe"], ["Edmond", "Pierre Edouard", "Michael"]]
        inst = new Instructions.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateWindowDimensions", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Pierre Edouard", "George"], ["Michael", "Anas", "Anas"], ["Anas", "Edmond", "Edmond"]]
        inst = new Instructions.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.updateWindowDimensions()
        }
    
        expect(callFunction).not.toThrow()
    })
})
