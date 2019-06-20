(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/da-cms/src/text/TextEditor.jsx":
/*!********************************************!*\
  !*** ./src/da-cms/src/text/TextEditor.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js-export-html */ "./node_modules/draft-js-export-html/lib/main.js");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js-import-html */ "./node_modules/draft-js-import-html/lib/main.js");
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js_import_html__WEBPACK_IMPORTED_MODULE_4__);




 // import MaterialRichEdit from './MaterialRichEdit'

const TextEditor = props => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createWithContent(Object(draft_js_import_html__WEBPACK_IMPORTED_MODULE_4__["stateFromHTML"])(props.init || props.content)));

  const handleChange = data => {
    setState(data);
    props.onChange(!props.plain ? Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_3__["stateToHTML"])(state.getCurrentContent()) : state.getCurrentContent().getPlainText());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.init) setState(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createWithContent(Object(draft_js_import_html__WEBPACK_IMPORTED_MODULE_4__["stateFromHTML"])(props.init)));
  }, [props.init]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
    editorState: state,
    onChange: handleChange,
    placeholder: props.placeholder
  }));
};

TextEditor.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  init: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool // TextEditor.defaultProps = {
  //   plain: false,
  // };

};
/* harmony default export */ __webpack_exports__["default"] = (TextEditor);

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map