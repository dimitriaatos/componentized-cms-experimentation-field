(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/pages/About.jsx":
/*!*****************************!*\
  !*** ./src/pages/About.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _da_cms_src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../da-cms/src/index */ "./src/da-cms/src/index.js");
 // import PropTypes from 'prop-types'


 // import Loading from './../components/Loading'

const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(theme => ({
  container: {
    maxWidth: theme.breakpoints.values.sm,
    margin: 'auto'
  }
}));

const About = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_index__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    path: "personal/about",
    placeholder: "about"
  }));
};

About.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map