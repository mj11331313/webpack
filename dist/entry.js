/*! Made by Cynthia_mj11331313 */
webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var oDiv1 = document.getElementById('div1');
oDiv1.innerHTML = "Hello World888!!!";

//es6代码：
var a = 5;
var add = function add(x, y) {
    return x + y;
};

var People = function People(name, age) {
    _classCallCheck(this, People);

    this.name = name;
    this.age = age;
};

//测试jquery文件是否成功打包并引入：


(0, _jquery2.default)('#div4').html('test for jquery');

//json文件引用测试：
var json = __webpack_require__(5);
(0, _jquery2.default)('#json').html('\u4F5C\u8005: ' + json.name + ' \uFF0C\u5E74\u9F84: ' + json.age);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = {"name":"Cynthia","age":21}

/***/ })
],[1]);