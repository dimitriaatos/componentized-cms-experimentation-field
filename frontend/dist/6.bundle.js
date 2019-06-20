(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/pages/Test.jsx":
/*!****************************!*\
  !*** ./src/pages/Test.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../da-cms/src/text/Text */ "./src/da-cms/src/text/Text.jsx");



const Display = props => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.content);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: state
  });
};

const initState = ['one', 'two', 'three'];

const Test = props => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState);

  const add = () => {
    setState(state => [...state, 'new']);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: add
  }, "add"), state.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Display, {
    key: index,
    content: item
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map