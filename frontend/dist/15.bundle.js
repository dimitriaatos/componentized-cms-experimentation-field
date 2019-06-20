(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/pages/Test.jsx":
/*!****************************!*\
  !*** ./src/pages/Test.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../da-cms/src/text/Text */ \"./src/da-cms/src/text/Text.jsx\");\n\n\n\nconst Display = props => {\n  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.content);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    content: state\n  });\n};\n\nconst initState = ['one', 'two', 'three'];\n\nconst Test = props => {\n  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initState);\n\n  const add = () => {\n    setState(state => [...state, 'new']);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: add\n  }, \"add\"), state.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Display, {\n    key: index,\n    content: item\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\n\n//# sourceURL=webpack:///./src/pages/Test.jsx?");

/***/ })

}]);