/**
 * Converts a string to a slug by:
 * - Converting to lowercase
 * - Trimming whitespace
 * - Removing non-word and non-hyphen characters
 * - Replacing sequences of whitespace and hyphens with a single hyphen
 * - Removing leading and trailing hyphens
 *
 * @param str - The string to slugify
 * @returns The slugified string
 */
export const Slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncates a string to a maximum length.
 *
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string. Defaults to 15.
 * @returns The truncated string, with ellipses appended if truncated.
 */
export const Truncate = (str: string, length: number = 15) => {
  return str.length > length ? `${str.slice(0, length)}...` : str
}
