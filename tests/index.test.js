const createMapper = require('../lib/dev')

const numberMapper = createMapper(element => {
  return element + 1;
});

test('[1, 2, 3] -> [2, 3, 4]', () => {
  expect(numberMapper([1, 2, 3]))
    .toEqual([2, 3, 4])
})

test('[] -> []', () => {
  expect(numberMapper([]))
    .toEqual([])
})

test('null -> null', () => {
  expect(numberMapper(null))
    .toBe(null)
})

test('undefined -> undefined', () => {
  expect(numberMapper(null))
    .toBe(null)
})

test('string -> throw', () => {
  expect(() => {
    numberMapper(1)
  }).toThrow()
})

test('1 -> throw', () => {
  expect(() => {
    numberMapper(1)
  }).toThrow()
})

test('false -> throw', () => {
  expect(() => {
    numberMapper(false)
  }).toThrow()
})

test('() => {} -> throw', () => {
  expect(() => {
    numberMapper(() => { })
  }).toThrow()
})