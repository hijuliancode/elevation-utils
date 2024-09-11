/**
 * Calculates the total value of a specific property in an array of objects.
 *
 * @template T - The type of the objects in the array.
 * @param {T[]} array - The array of objects.
 * @param {keyof T} propertyName - The property to calculate the total value of.
 * @returns {number} - The total value of the specified property.
 */

export function calculateTotalPropertyValue<T>(array: T[], propertyName: keyof T): number {
  return array.reduce((sum, obj) => {
    const currentValue = obj[propertyName]
    if (typeof currentValue === 'number') {
      return sum + currentValue
    }
    return sum
  }, 0)
}
