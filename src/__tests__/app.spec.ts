import { sum } from "../app"

test('basic', () => { expect(sum()).toBe(0) })

describe('Sum testing', () => {
    it('sum(5,1) = 6', () => expect(sum(5, 1)).toBe(6))
    it('sum(0,0) = 0', () => expect(sum(0, 0)).toBe(0))
    it('sum() = 0', () => expect(sum()).toBe(0))
    it('sum(-1,1) = 0', () => expect(sum(-1, 1)).toBe(0))
    it('sum(1,-1) = 0', () => expect(sum(1, -1)).toBe(0))
    it('sum(-2,-2) = -4', () => expect(sum(-2, -2)).toBe(-4))
    it('sum(1,1) > 1', () => expect(sum(1, 1)).toBeGreaterThan(1))
})

function forEach(items: number[], callback: Function) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

describe('Mocking test', () => {
    const mockCallback = jest.fn(x => 42 + x)
    forEach([0, 1], mockCallback)

    test('The mock function is called twice', () => {
        expect(mockCallback.mock.calls.length).toBe(2)
    })
    test('The first argument of the first call to the function was 0', () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0)
    })
    test('The first argument of the second call to the function was 1', () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1)
    })
    test('The return value of the first call to the function was 42', () => {
        expect(mockCallback.mock.results[0].value).toBe(42)
    })
})


