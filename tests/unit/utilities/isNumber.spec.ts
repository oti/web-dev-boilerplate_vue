import { isFiniteNumber, isInteger, isNumber } from '@/utilities/isNumber'

describe('isNumber()', () => {
  it('true を返す', () => {
    expect(isNumber(0)).toBeTruthy()
  })

  it('false を返す', () => {
    expect(isNumber(null)).toBeFalsy()
  })
})

describe('isInteger()', () => {
  it('true を返す', () => {
    expect(isInteger(0)).toBeTruthy()
  })

  it('false を返す', () => {
    expect(isInteger(null)).toBeFalsy()
  })

  it('false を返す', () => {
    expect(isInteger(0.1)).toBeFalsy()
  })
})

describe('isFiniteNumber()', () => {
  it('true を返す', () => {
    expect(isFiniteNumber(0)).toBeTruthy()
  })

  it('false を返す', () => {
    expect(isFiniteNumber(null)).toBeFalsy()
  })

  it('false を返す', () => {
    expect(isFiniteNumber(Infinity)).toBeFalsy()
  })
})
