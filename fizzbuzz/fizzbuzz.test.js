const FizzBuzz = require('./fizzbuzz')

describe('FizzBuzz', () => {
    it ('Input 1 Should Be 1', () => {
        // arrange
        const expected = 1
        const input = 1
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 2 Should Be 2', () => {
        // arrange
        const expected = 2
        const input = 2
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 3 Should Be Fizz', () => {
        // arrange
        const expected = 'Fizz'
        const input = 3
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 4 Should Be 4', () => {
        // arrange
        const expected = 4
        const input = 4
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 5 Should Be Buzz', () => {
        // arrange
        const expected = 'Buzz'
        const input = 5
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 6 Should Be Fizz', () => {
        // arrange
        const expected = 'Fizz'
        const input = 6
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 9 Should Be Fizz', () => {
        // arrange
        const expected = 'Fizz'
        const input = 9
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 10 Should Be Buzz', () => {
        // arrange
        const expected = 'Buzz'
        const input = 10
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 15 Should Be FizzBuzz', () => {
        // arrange
        const expected = 'FizzBuzz'
        const input = 15
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })

    it ('Input 16 Should Be 16', () => {
        // arrange
        const expected = 16
        const input = 16
        // action
        const actual = FizzBuzz(input)
        // assert
        expect(actual).toBe(expected)
    })
})

