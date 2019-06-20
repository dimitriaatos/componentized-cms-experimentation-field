(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/components/Work.jsx":
/*!*********************************!*\
  !*** ./src/components/Work.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../da-cms/src/main/Main */ \"./src/da-cms/src/main/Main.jsx\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helper */ \"./src/helper.jsx\");\n/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ \"./node_modules/@material-ui/styles/esm/makeStyles/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ \"./node_modules/@material-ui/icons/Close.js\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theme => ({\n  center: {\n    textAlign: 'center'\n  },\n  italic: {\n    fontStyle: 'italic'\n  },\n  meta: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    width: '100%'\n  },\n  metaText: {\n    textAlign: 'center'\n  },\n  padding: {\n    paddingBottom: theme.spacing(2)\n  },\n  modalContainer: {\n    maxWidth: theme.breakpoints.values.md,\n    height: '100vh',\n    overflow: 'auto',\n    margin: '0 auto 0 auto',\n    outline: 'none',\n    scrollSnapType: 'mandatory',\n    position: 'relative' // border: '2px red solid',\n\n  },\n  pageContainer: {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    width: '100%',\n    height: '100%' // border: '2px green solid',\n\n  },\n  article: {\n    padding: 0,\n    marginTop: theme.spacing(2),\n    marginBottom: theme.spacing(2),\n    [theme.breakpoints.down('xs')]: {\n      marginLeft: theme.spacing(1),\n      marginRight: theme.spacing(1)\n    },\n    [theme.breakpoints.only('sm')]: {\n      marginLeft: theme.spacing(4),\n      marginRight: theme.spacing(4)\n    },\n    [theme.breakpoints.up('md')]: {\n      marginLeft: theme.spacing(8),\n      marginRight: theme.spacing(8)\n    }\n  },\n  page: {\n    // overscrollBehavior: 'contain',\n    position: 'relative',\n    backgroundColor: theme.palette.background.paper,\n    boxShadow: theme.shadows[5],\n    padding: 0,\n    margin: 0,\n    minHeight: '100%',\n    outline: 'none',\n    scrollSnapAlign: 'start'\n  },\n  close: {\n    position: 'sticky',\n    float: 'right',\n    zIndex: 1,\n    right: 2,\n    top: 2,\n    backgroundColor: 'rgba(255, 255, 255, 0.6)'\n  }\n}));\nconst rest = {\n  abstract: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].text,\n  links: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].links,\n  embed: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].html,\n  presentations: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].presentations,\n  technicalDetails: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].text,\n  description: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].text\n};\n\nconst Work = props => {\n  const info = Object(_helper__WEBPACK_IMPORTED_MODULE_4__[\"infoParser\"])(props.content, rest),\n        classes = useStyles(); // [state, setState] = useState(props.content),\n  // handleChange = data => {\n  //   const newState = {state, ...data}\n  //   setState(newState)\n  //   props.onChange(newState, props.index)\n  // }\n\n  const madeWith = Object(_helper__WEBPACK_IMPORTED_MODULE_4__[\"infoParser\"])(props.content, {\n    madeWith: _helper__WEBPACK_IMPORTED_MODULE_4__[\"parser\"].array\n  }).madeWith;\n\n  const _props$meta = props.meta,\n        {\n    type,\n    title\n  } = _props$meta,\n        previewInfo = _objectWithoutProperties(_props$meta, [\"type\", \"title\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.modalContainer\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.close,\n    onClick: props.close\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.pageContainer\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.page\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: classes.article\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"h4\",\n    className: classes.center\n  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"h6\",\n    className: `${classes.center} ${classes.italic}`\n  }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.meta\n  }, Object.keys(previewInfo).map((key, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: index,\n    className: classes.metaText\n  }, previewInfo[key]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), Object.keys(info).map((key, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: index,\n    className: classes.padding\n  }, info[key])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: classes.center\n  }, \"Made with\"), madeWith))));\n};\n\nWork.propTypes = _objectSpread({}, _da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_3__[\"contentProps\"], {\n  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,\n  close: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\n//# sourceURL=webpack:///./src/components/Work.jsx?");

/***/ }),

/***/ "./src/components/WorkPreview.jsx":
/*!****************************************!*\
  !*** ./src/components/WorkPreview.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ \"./node_modules/@material-ui/core/esm/ButtonBase/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ \"./node_modules/@material-ui/icons/Close.js\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Work */ \"./src/components/Work.jsx\");\n/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ \"./node_modules/@material-ui/styles/esm/makeStyles/index.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helper */ \"./src/helper.jsx\");\n/* harmony import */ var _da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../da-cms/src/main/Main */ \"./src/da-cms/src/main/Main.jsx\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n // import Fab from '@material-ui/core/Fab'\n\n\n\n\n\nconst useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(theme => ({\n  button: {\n    marginBottom: theme.spacing(1),\n    width: '100%',\n    display: 'flex',\n    justifyContent: 'space-between',\n    fontSize: theme.typography.fontSize,\n    borderRadius: theme.shape.borderRadius,\n    boxShadow: theme.shadows[1],\n    '&:hover': {\n      boxShadow: theme.shadows[5],\n      transition: theme.transitions.create('boxShadow', {\n        duration: theme.transitions.duration.short\n      })\n    },\n    backgroundColor: theme.palette.background.paper\n  },\n  buttonFocusVisible: {\n    boxShadow: theme.shadows[5],\n    transition: theme.transitions.create('boxShadow', {\n      duration: theme.transitions.duration.short\n    }),\n    backgroundColor: 'inherit'\n  },\n  card: {\n    width: 'inherit',\n    backgroundColor: 'inherit'\n  },\n  table: {\n    textAlign: 'left'\n  },\n  cardContent: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    fontSize: theme.typography.fontSize\n  },\n  leftColumn: {\n    fontVariant: 'small-caps',\n    textAlign: 'right',\n    paddingRight: theme.typography.fontSize,\n    fontSize: theme.typography.fontSize - 3\n  },\n  rightColumn: {},\n  sideInfo: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  remove: {\n    position: 'absolute',\n    right: 2,\n    top: 2\n  }\n}));\n\nconst meta = (content, infoType) => {\n  const model = {\n    preview: {\n      title: 0,\n      by: _helper__WEBPACK_IMPORTED_MODULE_10__[\"parser\"].and,\n      date: _helper__WEBPACK_IMPORTED_MODULE_10__[\"parser\"].date\n    },\n    type: {\n      type: 0\n    }\n  };\n  return Object(_helper__WEBPACK_IMPORTED_MODULE_10__[\"infoParser\"])(content, model[infoType]);\n};\n\nconst WorkPreview = props => {\n  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.match.params.work == props.content.path),\n        context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_11__[\"Context\"]),\n        handleOpen = () => {\n    props.history.push(`/${props.content.path}`);\n    setOpen(true);\n  },\n        handleClose = () => setOpen(false),\n        // handleChange = data => {\n  //   const newState = {state, ...data}\n  //   setState(newState)\n  //   props.onChange(newState, props.index)\n  // },\n  classes = useStyles();\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    focusVisibleClassName: classes.buttonFocusVisible,\n    classes: {\n      root: classes.button\n    },\n    type: \"button\",\n    onClick: handleOpen\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: classes.card\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.cardContent\n  }, context.state.editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.remove,\n    onClick: () => props.remove(props.index)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, null)) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: classes.table\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, Object.entries(meta(props.content, 'preview')).map(([key, value], index) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      key: index\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      className: classes.leftColumn\n    }, Object(_helper__WEBPACK_IMPORTED_MODULE_10__[\"makeTitle\"])(key)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      className: classes.rightColumn\n    }, value));\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.sideInfo\n  }, meta(props.content, 'type').type)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    open: open,\n    onClose: handleClose\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    index: props.index,\n    content: props.content // onChange={handleChange}\n    ,\n    close: handleClose,\n    meta: _objectSpread({}, meta(props.content, 'preview'), {\n      type: meta(props.content, 'type').type\n    })\n  })));\n};\n\nWorkPreview.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n  remove: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkPreview);\n\n//# sourceURL=webpack:///./src/components/WorkPreview.jsx?");

/***/ }),

/***/ "./src/da-cms/src/list/List.jsx":
/*!**************************************!*\
  !*** ./src/da-cms/src/list/List.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main/Main */ \"./src/da-cms/src/main/Main.jsx\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import UrlSafeString from 'url-safe-string'\n\nconst styles = {\n  ul: {\n    listStyleType: 'none',\n    padding: '0',\n    backgroundColor: 'inherit',\n    margin: 0\n  }\n};\n\nconst List = props => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_main_Main__WEBPACK_IMPORTED_MODULE_2__[\"Context\"]);\n  const [content, setContent] = Object(_main_Main__WEBPACK_IMPORTED_MODULE_2__[\"useContent\"])(props, []);\n\n  const add = () => {\n    setContent(content => [{}, ...content]);\n  },\n        remove = index => {\n    const deleted = content.splice(index, 1);\n    setContent(content => {\n      return [...content];\n    });\n  };\n\n  const handleChange = (value, index) => {\n    setContent(prevContent => [...prevContent].splice(index, 1, value));\n    if (props.onChange) props.onChange(content);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, context.state.editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.add, {\n    onClick: add\n  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    style: styles.ul\n  }, content.map((info, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: index\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.component, {\n    onChange: handleChange,\n    content: info,\n    index: index,\n    remove: remove\n  })))));\n};\n\nList.propTypes = _objectSpread({\n  editable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  add: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n}, _main_Main__WEBPACK_IMPORTED_MODULE_2__[\"contentProps\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./src/da-cms/src/list/List.jsx?");

/***/ }),

/***/ "./src/pages/Portfolio.jsx":
/*!*********************************!*\
  !*** ./src/pages/Portfolio.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _da_cms_src_list_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../da-cms/src/list/List */ \"./src/da-cms/src/list/List.jsx\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ \"./node_modules/@material-ui/core/esm/Fab/index.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Add */ \"./node_modules/@material-ui/icons/Add.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ \"./node_modules/@material-ui/styles/esm/makeStyles/index.js\");\n/* harmony import */ var _components_WorkPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/WorkPreview */ \"./src/components/WorkPreview.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nconst add = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  color: \"primary\",\n  \"aria-label\": \"Add\",\n  onClick: props.onClick\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default.a, null));\n\nconst useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theme => ({\n  container: {\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    width: '100%',\n    maxWidth: theme.breakpoints.values.sm,\n    padding: 0,\n    margin: 0,\n    position: 'relative',\n    display: 'block'\n  },\n  margins: {\n    display: 'flex',\n    width: '100%',\n    flexDirection: 'column',\n    padding: theme.spacing(1),\n    boxSizing: 'border-box'\n  }\n}));\n\nconst Portfolio = props => {\n  const classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.container\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.margins\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_list_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    component: p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkPreview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _extends({}, p, props)),\n    path: \"portfolio\",\n    add: add\n  })));\n};\n\nPortfolio.propTypes = {\n  params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object // match: PropTypes.object,\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\n//# sourceURL=webpack:///./src/pages/Portfolio.jsx?");

/***/ })

}]);