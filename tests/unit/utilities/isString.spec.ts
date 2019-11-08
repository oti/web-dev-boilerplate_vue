import { isString, isStringOfNotEmpty } from '@/utilities/isString'

describe('isString()', () => {
  it('true を返す', () => {
    expect(isString('STRING')).toBeTruthy()
  })

  it('false を返す', () => {
    expect(isString(123)).toBeFalsy()
  })
})

describe('isStringOfNotEmpty()', () => {
  it('true を返す', () => {
    expect(isStringOfNotEmpty('STRING')).toBeTruthy()
  })

  it('false を返す', () => {
    expect(isStringOfNotEmpty('')).toBeFalsy()
  })

  it('false を返す', () => {
    expect(isStringOfNotEmpty(123)).toBeFalsy()
  })
})
