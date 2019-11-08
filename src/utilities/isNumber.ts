import { getObjectClassName } from '@/utilities/getObjectClassName'

/**
 * 数値であるか否かを返す
 * @param val
 */
export function isNumber(val: any): val is number {
  return getObjectClassName(val) === '[object Number]'
}

/**
 * 整数であるか否かを返す
 * @param val
 */
export function isInteger(val: any): val is number {
  return isNumber(val) && Number.isInteger(val)
}

/**
 * 有限数であるか否かを返す
 * @param val
 */
export function isFiniteNumber(val: any): val is number {
  return isNumber(val) && Number.isFinite(val)
}
