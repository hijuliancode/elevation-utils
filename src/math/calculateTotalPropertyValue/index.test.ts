import { calculateTotalPropertyValue } from "./index"

describe("calculateTotalPropertyValue", () => {
  const array = [
    { value: 10, other: 'a' },
    { value: 20, other: 'b' },
    { value: 30, other: 'c' },
  ]

  it('should correctly calculate the total of a numeric property', () => {
    expect(calculateTotalPropertyValue(array, 'value')).toBe(60) // 10 + 20 + 30 = 60
  })

  it('should return 0 for an empty array', () => {
    expect(calculateTotalPropertyValue([], 'value')).toBe(0) // 0
  })

  it('should return 0 when the property does not exist in the objects', () => {
    expect(calculateTotalPropertyValue(array, 'non_existent' as any)).toBe(0) // 0
  })

  it('should ignore non-numeric values in the property', () => {
    array.push({ value: '40' as any, other: 'd' }) // 60 + '40' === NaN, which is then coerced to 0 = 60
    expect(calculateTotalPropertyValue(array, 'value')).toBe(60)
  })

  it('should correctly handle negative values', () => {
    array.push({ value: -50, other: 'e' }) // 60 + -50 = 10
    expect(calculateTotalPropertyValue(array, 'value')).toBe(10)
  })
  it('should handle null or undefined property values', () => {
    array.push({ value: null as any, other: 'f' }) // 10 + null === NaN, which is then coerced to 0 = 10
  })

})
