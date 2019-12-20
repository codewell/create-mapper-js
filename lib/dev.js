'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

// Takes a function as its first parameter
// Returns a function
var map = function map(fn) {
  return function (array) {
    if (Array.isArray(array)) {
      return array.map(fn);
    }

    if ([null, undefined].includes(array)) {
      return array;
    }

    throw new Error("Invalid input type ".concat(_typeof(array)));
  };
};

module.exports = map;
