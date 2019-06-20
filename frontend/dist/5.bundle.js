(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/pages/Contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../theme */ "./src/theme.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");





 // import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(theme => ({
  main: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'inherit'
  },
  contactContainer: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.secondary.dark,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  buttonFocusVisible: {
    color: theme.palette.secondary.main
  }
}));
const icons = []; // eslint-disable-next-line no-useless-escape

const url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/; // const getLink = 

const Contact = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.main
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contactContainer
  }, icons.map((icon, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disableRipple: true,
    key: index,
    classes: {
      root: classes.button,
      focusVisible: classes.buttonFocusVisible
    },
    href: icon.link // onClick={getLink}
    ,
    target: url.test(icon.link) ? '_blank' : ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: icon.icon,
    size: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].iconSize
  })))));
};

Contact.propTypes = {
  icons: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map