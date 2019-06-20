(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../da-cms/src/main/Main */ "./src/da-cms/src/main/Main.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helper */ "./src/helper.jsx");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../da-cms/src/text/Text */ "./src/da-cms/src/text/Text.jsx");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => ({
  center: {
    textAlign: 'center'
  },
  italic: {
    fontStyle: 'italic'
  },
  meta: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
  },
  metaText: {
    textAlign: 'center'
  },
  padding: {
    paddingBottom: theme.spacing(2)
  },
  modalContainer: {
    maxWidth: theme.breakpoints.values.md,
    height: '100vh',
    overflow: 'auto',
    margin: '0 auto 0 auto',
    outline: 'none',
    scrollSnapType: 'mandatory',
    position: 'relative' // border: '2px red solid',

  },
  pageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%' // border: '2px green solid',

  },
  article: {
    padding: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8)
    }
  },
  page: {
    // overscrollBehavior: 'contain',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
    margin: 0,
    minHeight: '100%',
    outline: 'none',
    scrollSnapAlign: 'start'
  },
  close: {
    position: 'sticky',
    float: 'right',
    zIndex: 1,
    right: 2,
    top: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  }
}));
const rest = {
  abstract: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].text,
  links: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].links,
  embed: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].html,
  presentations: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].presentations,
  technicalDetails: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].text,
  description: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].text
};

const Work = props => {
  const editableProps = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["editablePropsCreator"])(props.onChange);
  const info = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["infoParser"])(props.content, rest, editableProps),
        classes = useStyles();
  const madeWith = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["infoParser"])(props.content, {
    madeWith: _helper__WEBPACK_IMPORTED_MODULE_4__["parser"].array
  }, editableProps).madeWith;

  const _props$meta = props.meta,
        {
    type,
    title
  } = _props$meta,
        previewInfo = _objectWithoutProperties(_props$meta, ["type", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.modalContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.close,
    onClick: props.close
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.pageContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.page
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.article
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h4",
    className: classes.center
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
    plain: true
  }, editableProps({
    title
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h6",
    className: `${classes.center} ${classes.italic}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_text_Text__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
    plain: true
  }, editableProps({
    type
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.meta
  }, Object.keys(previewInfo).map((key, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    className: classes.metaText
  }, previewInfo[key]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), Object.keys(info).map((key, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    className: classes.padding
  }, info[key])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.center
  }, "Made with"), madeWith))));
};

Work.propTypes = _objectSpread({}, _da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_3__["contentProps"], {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  close: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});
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
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Work */ "./src/components/Work.jsx");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helper */ "./src/helper.jsx");
/* harmony import */ var _da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../da-cms/src/main/Main */ "./src/da-cms/src/main/Main.jsx");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import Fab from '@material-ui/core/Fab'






const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(theme => ({
  button: {
    marginBottom: theme.spacing(1),
    width: '100%',
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
  remove: {
    position: 'absolute',
    right: 2,
    top: 2,
    zIndex: 1
  },
  container: {
    position: 'relative'
  }
}));

const WorkPreview = props => {
  const [openState, setOpenState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.content.path ? props.match.params.work == props.content.path : false),
        context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_da_cms_src_main_Main__WEBPACK_IMPORTED_MODULE_11__["Context"]),
        open = state => () => {
    if (props.content.path) props.history.push(`/portfolio${state ? '/' + props.content.path : ''}`);
    setOpenState(state);
  },
        handleChange = data => {
    props.onChange(data, props.index);
  },
        classes = useStyles();

  const meta = (content, infoType) => {
    const model = {
      preview: {
        title: 0,
        by: _helper__WEBPACK_IMPORTED_MODULE_10__["parser"].and,
        date: _helper__WEBPACK_IMPORTED_MODULE_10__["parser"].date
      },
      type: {
        type: 0
      }
    };
    const editableProps = Object(_helper__WEBPACK_IMPORTED_MODULE_10__["editablePropsCreator"])(handleChange);
    return Object(_helper__WEBPACK_IMPORTED_MODULE_10__["infoParser"])(content, model[infoType], editableProps);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, context.state.editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.remove,
    onClick: () => props.remove(props.index)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, null)) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    focusVisibleClassName: classes.buttonFocusVisible,
    classes: {
      root: classes.button
    },
    type: "button",
    onClick: open(true)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.cardContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: classes.table
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.entries(meta(props.content, 'preview')).map(([key, value], index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: classes.leftColumn
    }, Object(_helper__WEBPACK_IMPORTED_MODULE_10__["makeTitle"])(key)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: classes.rightColumn
    }, value));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sideInfo
  }, meta(props.content, 'type').type)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: openState,
    onClose: open(false)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: props.content,
    onChange: handleChange,
    close: open(false),
    meta: _objectSpread({}, meta(props.content, 'preview'), {
      type: meta(props.content, 'type').type
    })
  }))));
};

WorkPreview.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  remove: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (WorkPreview);

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
/* harmony import */ var _main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main/Main */ "./src/da-cms/src/main/Main.jsx");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import UrlSafeString from 'url-safe-string'

const styles = {
  ul: {
    listStyleType: 'none',
    padding: '0',
    backgroundColor: 'inherit',
    margin: 0
  }
};

const List = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_main_Main__WEBPACK_IMPORTED_MODULE_2__["Context"]);
  const [content, setContent] = Object(_main_Main__WEBPACK_IMPORTED_MODULE_2__["useContent"])(props, {
    removed: [],
    changed: [],
    all: []
  });

  const add = () => {
    setContent(content => _objectSpread({}, content, {
      all: [{}, ...content.all]
    }));
  },
        remove = index => {
    setContent(content => {
      const [{
        _id
      }] = content.all.splice(index, 1);
      content.removed.push(_id);
      return _objectSpread({}, content);
    });
  },
        change = (data, index) => {
    setContent(content => {
      const [key, value] = Object.entries(data)[0];
      content.all[index][key] = value;
      content.changed[index] = content.all[index];
      if (props.onChange) props.onChange(content);
      return _objectSpread({}, content);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, context.state.editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.add, {
    onClick: add
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: styles.ul
  }, content.all.map((info, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.component, {
    onChange: change,
    content: info,
    index: index,
    remove: remove
  })))));
};

List.propTypes = _objectSpread({
  editable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  add: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
}, _main_Main__WEBPACK_IMPORTED_MODULE_2__["contentProps"]);
/* harmony default export */ __webpack_exports__["default"] = (List);

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
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _components_WorkPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/WorkPreview */ "./src/components/WorkPreview.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const add = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
  color: "primary",
  "aria-label": "Add",
  onClick: props.onClick
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default.a, null));

const useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => ({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    padding: 0,
    margin: 0,
    position: 'relative',
    display: 'block'
  },
  margins: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: theme.spacing(1),
    boxSizing: 'border-box',
    justifyContent: 'center'
  }
}));

const Portfolio = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.margins
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_da_cms_src_list_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkPreview__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, p, props)),
    path: "portfolio",
    add: add
  })));
};

Portfolio.propTypes = {
  params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object // match: PropTypes.object,

};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map