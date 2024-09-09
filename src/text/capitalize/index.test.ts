import { capitalize } from './index'

describe('capitalize', () => {
  test('should capitalizes the first letter of a valid string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test('should converts the rest of the string to lowercase', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  test('should returns an empty string for non-string inputs', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });

  test('should handles empty strings and strings with only spaces', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('     ')).toBe('');
  });

  test('should capitalizes strings with spaces correctly', () => {
    expect(capitalize(' hello world')).toBe('Hello world');
  });

  test('should trims spaces and capitalizes correctly', () => {
    expect(capitalize('  hello')).toBe('Hello');
  });
})