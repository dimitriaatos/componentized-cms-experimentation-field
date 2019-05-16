(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../theme */ "./src/theme.jsx");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");









const styles = theme => ({
  main: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'inherit'
  },
  contactContainer: {
    marginTop: theme.spacing.unit * 4,
    backgroundColor: theme.palette.primary,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark
    }
  },
  buttonFocusVisible: {
    color: theme.palette.primary.dark
  }
});

const icons = [{
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"],
  link: 'mailto:dimitriaatos@gmail.com'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"],
  link: 'https://github.com/dimitriaatos/'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFacebook"],
  link: 'https://www.facebook.com/dimitris.aatos'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTwitter"],
  link: 'https://twitter.com/DimitriAatos'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFacebookMessenger"],
  link: 'https://www.messenger.com/t/dimitris.aatos'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSkype"],
  link: 'skype:dimitris.ellinas'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faInstagram"],
  link: 'https://www.instagram.com/dimitriaatos/'
}, {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLinkedin"],
  link: 'https://www.linkedin.com/in/dimitri-aatos-ellinas-183842137/'
}]; // eslint-disable-next-line no-useless-escape

const url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const Contact = props => {
  const {
    classes
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.main
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contactContainer
  }, icons.map((icon, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default.a, {
    disableRipple: true,
    key: index,
    classes: {
      root: classes.button,
      focusVisible: classes.buttonFocusVisible
    },
    href: icon.link,
    target: url.test(icon.link) ? '_blank' : ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: icon.icon,
    size: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].iconSize
  })))));
};

Contact.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Contact));

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map