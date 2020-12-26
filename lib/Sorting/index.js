"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectionSort = require("./selection-sort");

Object.keys(_selectionSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectionSort[key];
    }
  });
});