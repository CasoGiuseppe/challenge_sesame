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

/**
 * Creates a new array from the input collection, ensuring that each item has a unique value based on the specified key.
 * If no key is provided, it defaults to using the 'id' property.
 *
 * @param {any[]} collection - The input collection from which to create the unique array.
 * @param {string} key - The key to use for determining uniqueness.
 * @returns {any[]} - A new array containing only the unique items from the input collection.
 */
export const uniqueArray = ({ collection, key="id" }: { collection: any[], key?: string }) => Object.values(collection.reduce((o, t) => ({ ...o, [t[key]]: t }), {}))

/**
 * Compares the input date with the current date, ignoring time.
 *
 * @param {string} input - The date string to compare. It should be in a format that can be parsed by the Date constructor.
 * @returns {boolean} - Returns true if the input date is the same as the current date (ignoring time), otherwise false.
 */
export const compareDates = ({ input }: { input: string }) => {
  const today = new Date()
  return input === today.toLocaleDateString("es-ES")
}

/**
 * Adds a 'wheel' event listener to the specified target element and scrolls it horizontally based on the mouse wheel movement.
 *
 * @param {HTMLElement} target - The target element to which the event listener will be added.
 * @param {number} amount - The amount of pixels to scroll horizontally for each wheel event.
 */
export const scrollWithWheel = ({ target, amount }: { target: HTMLElement, amount: number }): void => {
  target.addEventListener('wheel', (evt: any) => {
    evt.preventDefault();
      target.scrollBy({
        left: evt.deltaY < 0 ? (amount * -1) : amount
      })
  })
}