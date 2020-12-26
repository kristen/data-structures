"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortRecursive = exports.sort = exports.indexOfSmallest = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Selection Sort
 * O(n^2)
 */
var indexOfSmallest = function indexOfSmallest(array) {
  return indexOfSmallestRecursive(-1, 0, array[0], array);
};

exports.indexOfSmallest = indexOfSmallest;

var indexOfSmallestRecursive = function indexOfSmallestRecursive(acc, i, smallestValue, array) {
  if (array && i > array.length) {
    return acc;
  }

  if (array[i] <= smallestValue) {
    return indexOfSmallestRecursive(i, i + 1, array[i], array);
  } else {
    return indexOfSmallestRecursive(acc, i + 1, smallestValue, array);
  }
};

var sort = function sort(array) {
  var sortedArray = [];

  var copy = _toConsumableArray(array);

  for (var i = 0; i < array.length; i++) {
    var _copy$splice = copy.splice(indexOfSmallest(copy), 1),
        _copy$splice2 = _slicedToArray(_copy$splice, 1),
        smallestElement = _copy$splice2[0];

    sortedArray[i] = smallestElement;
  }

  return sortedArray;
};

exports.sort = sort;

var sortRecursiveLoop = function sortRecursiveLoop(array, sortedArray) {
  if (array && array.length === 0) {
    return sortedArray;
  }

  var _array$splice = array.splice(indexOfSmallest(array), 1),
      _array$splice2 = _slicedToArray(_array$splice, 1),
      smallestElement = _array$splice2[0];

  return sortRecursiveLoop(_toConsumableArray(array), [].concat(_toConsumableArray(sortedArray), [smallestElement]));
};

var sortRecursive = function sortRecursive(array) {
  return sortRecursiveLoop(_toConsumableArray(array), []);
};

exports.sortRecursive = sortRecursive;