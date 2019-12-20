/**
 * Create a mapping function
 * @param {function} fn - Function for the map(() => {})
 * @returns {function} - A mapper function
 */
const createMapper = (fn) => {

  return (array) => {
    if (Array.isArray(array)) {
      return array.map(fn)
    }
    if ([null, undefined].includes(array)) {
      return array
    }

    throw new Error(`Invalid input type ${typeof array}`)
  }

};

export default createMapper;
