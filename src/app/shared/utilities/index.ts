/**
 * Generates a random UUID (Universally Unique Identifier) using cryptographic randomness.
 * @returns {string} - A string representation of the generated UUID.
 */
export const generateUUID = ():string => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

/**
 * Creates a new Promise that resolves after the specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to wait before resolving the Promise.
 * @returns A Promise that resolves after the specified number of milliseconds.`
 */
export const timeout = (ms: number = randomTiming(1100, 1800)) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generates a random number within the specified range (inclusive).
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - A random number within the specified range.
 */
export const randomTiming = (min: number, max: number): number => Math.random() * (max - min) + min;