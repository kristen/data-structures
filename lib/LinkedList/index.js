"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.Nil = exports.NilListError = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NilListError =
/*#__PURE__*/
function (_Error) {
  _inherits(NilListError, _Error);

  function NilListError() {
    _classCallCheck(this, NilListError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NilListError).apply(this, arguments));
  }

  return NilListError;
}(_wrapNativeSuper(Error));

exports.NilListError = NilListError;

var NilListClass =
/*#__PURE__*/
function () {
  function NilListClass() {
    _classCallCheck(this, NilListClass);
  }

  _createClass(NilListClass, [{
    key: "head",
    value: function head() {
      return Nil;
    }
  }, {
    key: "tail",
    value: function tail() {
      return Nil;
    }
  }, {
    key: "prepend",
    value: function prepend(value) {
      return List(value);
    }
  }]);

  return NilListClass;
}();

var Nil = new NilListClass();
exports.Nil = Nil;

var constructList = function constructList(items, acc) {
  var last = items[items.length - 1];

  if (last === undefined) {
    return acc;
  }

  var rest = items.slice(0, items.length - 1);
  var tail = new ListClass(last, acc);
  return constructList(rest, tail);
};

var ListClass =
/*#__PURE__*/
function () {
  function ListClass(head, tail) {
    _classCallCheck(this, ListClass);

    this._head = head;
    this._tail = tail;
  }

  _createClass(ListClass, [{
    key: "head",
    value: function head() {
      return this._head;
    }
  }, {
    key: "tail",
    value: function tail() {
      return this._tail;
    }
  }, {
    key: "prepend",
    value: function prepend(value) {
      if (value === undefined) {
        return this;
      }

      return new ListClass(value, this);
    }
  }]);

  return ListClass;
}();

var List = function List() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return constructList(items, Nil);
};

exports.List = List;