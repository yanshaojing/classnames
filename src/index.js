import isArray from './utils/isArray'
import isObject from './utils/isObject'
import isString from './utils/isString'

const mergeClsFromObject = obj => Object.keys(obj).reduce((res, key) => {
  if (obj[key]) {
    return res.concat(key)
  }
  return res
}, [])

const classNames = (...args) => args.reduce((res, val) => {
  if (isString(val) || isArray(val)) {
    return res.concat(val)
  }
  if (isObject(val)) {
    return res.concat(mergeClsFromObject(val))
  }
  return res
}, []).join(' ')

export default classNames
