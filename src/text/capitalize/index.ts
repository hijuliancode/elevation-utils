/**
 * Capitalizes the first letter of a string and returns the modified string.
 * If the input is not a valid string, the function returns an empty string to avoid errors.
 *
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string, or an empty string if input is invalid.
 */
export const capitalize = (str: string | null | undefined): string => {
  // If the input is not a string or is an empty string, return an empty string to avoid errors.
  if (typeof str !== 'string' || str.trim().length === 0) {
    return '';
  }

  str = str.trim();

  // Capitalize the first letter and return the new string.
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
