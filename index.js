'use strict';

const validator = require('validator');

module.exports = {
  ...validator,
  isFunction,
  revMapOfOrDefault,
  mapOfOrDefault,
  setOfOrDefault,
  isNullOrUndefined,
  isNull,
  isUndefined,
  isSet,
  isWeakMap,
  isWeakSet,
  isMap,
  isObject,
  getPositiveNumberOrDefault,
  getNullIfUndefined,
  getNegativeNumberOrDefault,
  getArrayOrDefault,
  getObjectOrDefault,
  getStringOrDefault,
  getNumberOrDefault,
  isArrayOrNull,
  isStringOrNull,
  isString,
  isArray,
  isNumber,
  isNumberOrNull,
  isPositiveNumberOrNull,
  isNegativeNumberOrNull,
  isNegativeNumber,
  isPositiveNumber,
  isEmptyString,
  isEmptyArray,
  isEmptyStringOrNull,
  isEmptyArrayOrNull,
  isNonEmptyArray,
  isNonEmptyString
};

function isNonEmptyString(val) {
  return !isEmptyString(val)
}

function isNonEmptyArray(val) {
  return !isEmptyArray(val)
}

function isEmptyStringOrNull(val) {
  return isNull(val) || isEmptyString(val);
}

function isEmptyString(val) {
  return isString(val) && val.trim().length < 1;
}

function isFunction(val) {
  return typeof val === 'function';
}

function revMapOfOrDefault(val, defaultVal) {
  if (!isObject(val))
    return defaultVal;

  const map = new Map();
  const keys = Object.keys(val);
  keys.forEach(key => map.set(val[key], key));
  return map;
}

function mapOfOrDefault(val, defaultVal) {
  if (!isObject(val))
    return defaultVal;

  const map = new Map();
  const keys = Object.keys(val);
  keys.forEach(key => map.set(key, val[key]));
  return map;
}

/**
 *
 * @param {Array | string} val
 * @param {*} defaultVal
 * @return {Set<any>|*}
 */
function setOfOrDefault(val, defaultVal) {
  return isArray(val) ? new Set(val) : isString(val) ? new Set(val.split('')) : defaultVal;
}

function isNullOrUndefined(val) {
  return isUndefined(val) || isNull(val);
}

function isNull(val) {
  return val === null;
}

function isUndefined(val) {
  return val === undefined;
}

function isSet(val) {
  return val instanceof Set;
}

function isWeakSet(val) {
  return val instanceof WeakSet;
}

function isMap(val) {
  return val instanceof Map;
}

function isWeakMap(val) {
  return val instanceof WeakMap;
}

function isObject(val) {
  return !isNull(val) &&
    !isSet(val) &&
    !isMap(val) &&
    !isWeakMap(val) &&
    !isWeakSet(val) &&
    !isArray(val) &&
    typeof val === 'object';
}

function getObjectOrDefault(val, defaultVal) {
  return isObject(val) ? val : defaultVal;
}

function getNullIfUndefined(val) {
  return isUndefined(val) ? null : val;
}

function isEmptyArray(val) {
  return isArray(val) && val.length === 0;
}

function isEmptyArrayOrNull(val) {
  return isNull(val) || isEmptyArray(val);
}

function isArray(val) {
  return Array.isArray(val);
}

function isArrayOrNull(val) {
  return isNull(val) || isArray(val);
}

function getArrayOrDefault(val, defaultVal) {
  return isArray(val) ? val : defaultVal;
}

function isString(val) {
  return typeof val === 'string';
}

function isStringOrNull(val) {
  return isNull(val) || isString(val);
}

function getStringOrDefault(val, defaultVal) {
  return isString(val) ? val : defaultVal;
}

function isNumber(val) {
  return !Number.isNaN(val) && val !== Infinity && typeof val === 'number';
}

function isNumberOrNull(val) {
  return isNull(val) || isNumber(val);
}

function getNumberOrDefault(val, defaultVal) {
  return isNumber(val) ? val : defaultVal;
}

function isPositiveNumber(val) {
  return isNumber(val) && val > 0;
}

function isPositiveNumberOrNull(val) {
  return isNull(val) || isPositiveNumber(val);
}

function getPositiveNumberOrDefault(val, defaultVal) {
  return isPositiveNumber(val) ? val : defaultVal;
}

function isNegativeNumber(val) {
  return isNumber(val) && val < 0;
}

function isNegativeNumberOrNull(val) {
  return isNull(val) || isNegativeNumber(val);
}

function getNegativeNumberOrDefault(val, defaultVal) {
  return isNegativeNumber(val) ? val : defaultVal;
}
