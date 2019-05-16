(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/Work.jsx":
/*!*********************************!*\
  !*** ./src/components/Work.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helper */ "./src/helper.jsx");




const rest = {
  abstract: _helper__WEBPACK_IMPORTED_MODULE_3__["parser"].rich,
  links: _helper__WEBPACK_IMPORTED_MODULE_3__["parser"].links,
  embed: _helper__WEBPACK_IMPORTED_MODULE_3__["parser"].html,
  presentations: _helper__WEBPACK_IMPORTED_MODULE_3__["parser"].presentations,
  technicalDetails: _helper__WEBPACK_IMPORTED_MODULE_3__["parser"].rich,
  description: _helper__WEBPACK_IMPORTED_MODULE_3__["parser"].rich
};

const Work = props => {
  const info = Object(_helper__WEBPACK_IMPORTED_MODULE_3__["infoParser"])(props.info, rest);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h3",
    style: {
      textAlign: 'center'
    }
  }, props.info.title), Object.keys(info).map((key, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    key: index
  }, info[key])));
};

Work.propTypes = {
  info: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./src/components/WorkPreview.jsx":
/*!****************************************!*\
  !*** ./src/components/WorkPreview.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Work */ "./src/components/Work.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../helper */ "./src/helper.jsx");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 // import TextEditable from './TextEditable'




const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.fontSize,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[5],
      transition: theme.transitions.create('boxShadow', {
        duration: theme.transitions.duration.short
      })
    },
    backgroundColor: theme.palette.background.paper
  },
  buttonFocusVisible: {
    boxShadow: theme.shadows[5],
    transition: theme.transitions.create('boxShadow', {
      duration: theme.transitions.duration.short
    }),
    backgroundColor: 'inherit'
  },
  card: {
    width: 'inherit',
    backgroundColor: 'inherit'
  },
  table: {
    textAlign: 'left'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.fontSize
  },
  leftColumn: {
    fontVariant: 'small-caps',
    textAlign: 'right',
    paddingRight: theme.typography.fontSize,
    fontSize: theme.typography.fontSize - 3
  },
  rightColumn: {},
  sideInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '10%',
    bottom: '10%',
    left: '10%',
    right: '10%'
  }
});

const WorkPreview = props => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const makeTitle = name => name.charAt(0).toUpperCase() + name.slice(1);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  const prev = {
    title: 0,
    by: _helper__WEBPACK_IMPORTED_MODULE_8__["parser"].and,
    date: _helper__WEBPACK_IMPORTED_MODULE_8__["parser"].date,
    type: 0
  };

  const {
    classes
  } = props,
        _infoParser = Object(_helper__WEBPACK_IMPORTED_MODULE_8__["infoParser"])(props.info, prev),
        {
    type
  } = _infoParser,
        previewInfo = _objectWithoutProperties(_infoParser, ["type"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default.a, {
    focusVisibleClassName: classes.buttonFocusVisible,
    classes: {
      root: classes.button
    },
    type: "button",
    onClick: handleOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.cardContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: classes.table
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.keys(previewInfo).map((key, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: classes.leftColumn
  }, makeTitle(key)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: classes.rightColumn
  }, previewInfo[key]))))), props.editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: classes.sideInfo,
    type: "text",
    name: "type",
    id: "type"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sideInfo
  }, type)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: state,
    onClose: handleClose
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.modal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_7__["default"], {
    info: props.info,
    editable: props.editable
  }))));
};

WorkPreview.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  info: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(styles)(WorkPreview));
{
  /* <List component={Editable} editable={true} name="" /> */
}

/***/ }),

/***/ "./src/da-cms/src/list/List.jsx":
/*!**************************************!*\
  !*** ./src/da-cms/src/list/List.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/Main */ "./src/da-cms/src/main/Main.jsx");


 // import UrlSafeString from 'url-safe-string'

const styles = {
  ul: {
    listStyleType: 'none',
    padding: '0',
    backgroundColor: 'inherit'
  }
};

const List = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_main_Main__WEBPACK_IMPORTED_MODULE_2__["Context"]);
  const [content, setContent] = Object(_main_Main__WEBPACK_IMPORTED_MODULE_2__["useContent"])(props.path);

  const add = () => {
    setContent([...content].splice(0, 0, {}));
  };

  const handleChange = (index, value) => {// setContent(prevContent => ({
    //   list: [...prevContent.list].splice(index, 1, value)
    // }))
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: props.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.loading, null) : _main_Main__WEBPACK_IMPORTED_MODULE_2__["Loading"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_Main__WEBPACK_IMPORTED_MODULE_2__["Loading"], null) : null
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: styles.ul
  }, context.state.editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.addButton, {
    onClick: add
  }) : null, content.map((info, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.component, {
    onChange: handleChange,
    info: info,
    editable: props.editable
  })))));
};

List.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/helper.jsx":
/*!************************!*\
  !*** ./src/helper.jsx ***!
  \************************/
/*! exports provided: MultiClick, parser, subset, isObject, infoParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiClick", function() { return MultiClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subset", function() { return subset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoParser", function() { return infoParser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./da-cms/src/text/Text */ "./src/da-cms/src/text/Text.jsx");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MultiClick = class {
  constructor(callback, options) {
    this.clicks = 0;
    this.prev = 0;
    Object.assign(this, {
      time: 400,
      clicks: 3
    }, options, {
      callback
    });
  }

  click({
    timeStamp
  }) {
    if (timeStamp - this.prev < this.time) {
      this.count += 1;

      if (this.count > this.clicks - 2) {
        this.count = 0;
        this.callback();
      } else {
        this.prev = timeStamp;
      }
    } else {
      this.prev = timeStamp;
      this.count = 0;
    }
  }

};

const date = date => {
  if (typeof date == 'string') date = new Date(date);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

const commas = array => array.join(', ');

const and = array => {
  let str = '';
  array.forEach((value, index) => {
    switch (index) {
      case array.length - 2:
        str = str.concat(value + ' and ');
        break;

      case array.length - 1:
        str = str.concat(value);
        break;

      default:
        str = str.concat(value + ', ');
    }
  });
  return str;
};

const rich = content => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_1__["default"], {
  content: content
});

const html = content => react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(content);

const parser = {
  date,
  commas,
  and,
  html,
  rich
};

const subset = (...props) => o => props.reduce((a, e) => _objectSpread({}, a, {
  [e]: o[e]
}), {});

const isObject = value => Object.prototype.toString.call(value) != '[object Object]';

const infoParser = (info, options) => {
  return Object.keys(options).reduce((accum, key) => {
    const value = info[key];
    const option = options[key];
    typeof option == 'number' ? accum[key] = value : typeof option == 'function' ? accum[key] = option(value) : null;
    return accum;
  }, {});
};



/***/ }),

/***/ "./src/pages/Portfolio.jsx":
/*!*********************************!*\
  !*** ./src/pages/Portfolio.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _da_cms_src_list_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../da-cms/src/list/List */ "./src/da-cms/src/list/List.jsx");
/* harmony import */ var _components_WorkPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/WorkPreview */ "./src/components/WorkPreview.jsx");





const Portfolio = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_list_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: _components_WorkPreview__WEBPACK_IMPORTED_MODULE_3__["default"],
    path: "portfolio"
  });
};

Portfolio.propTypes = {
  params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map