/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CodeFileShowMode.js":
/*!********************************************!*\
  !*** ./src/components/CodeFileShowMode.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputRowNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputRowNumber */ "./src/components/InputRowNumber.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const CodeFileShowMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_ref => {
  let {
    codeMode,
    excerptLength,
    setAttributes
  } = _ref;
  // console.log("CodeFileShowModeレンダー"); //デバック
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    className: "fileShowMode",
    label: "Code\u306E\u8868\u793A\u65B9\u6CD5",
    selected: codeMode,
    options: [{
      label: "全文表示",
      value: "code-all"
    }, {
      label: "全文省略（ClickでOPEN）",
      value: "code-onclick"
    }, {
      label: "行数指定",
      value: "code-excerpt"
    }],
    onChange: val => setAttributes({
      codeMode: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputRowNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    codeMode: codeMode,
    excerptLength: excerptLength,
    setAttributes: setAttributes
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (CodeFileShowMode);

/***/ }),

/***/ "./src/components/GetViewMode.js":
/*!***************************************!*\
  !*** ./src/components/GetViewMode.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



 // ▼プレビューボタンの判定関数

const GetViewMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_ref => {
  let {
    isEditMode,
    setAttributes
  } = _ref;
  // console.log("GetViewModeレンダー"); //,メモ化成功
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button //属性 isEditMode の値により表示するラベルを切り替え
  , {
    label: isEditMode ? "Preview" : "Edit" //属性 isEditMode の値により表示するアイコンを切り替え
    ,
    icon: isEditMode ? "format-image" : "edit",
    className: "preview-button" //setAttributes を使って属性の値を更新（真偽値を反転）
    ,
    onClick: () => setAttributes({
      isEditMode: !isEditMode
    })
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (GetViewMode);

/***/ }),

/***/ "./src/components/InputRowNumber.js":
/*!******************************************!*\
  !*** ./src/components/InputRowNumber.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const InputRowNumber = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_ref => {
  let {
    codeMode,
    excerptLength,
    setAttributes
  } = _ref;

  // console.log("InputRowNumberレンダー"); //デバック
  if (codeMode === "code-excerpt") {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: "\u8868\u793A\u3059\u308B\u884C\u6570\u3092\u8A2D\u5B9A",
      type: "number",
      className: "row-number",
      value: excerptLength,
      onChange: val => setAttributes({
        excerptLength: val
      })
    });
  }

  return null;
});
/* harmony default export */ __webpack_exports__["default"] = (InputRowNumber);

/***/ }),

/***/ "./src/components/OjaInspector.js":
/*!****************************************!*\
  !*** ./src/components/OjaInspector.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


 //▼インスペクターを表示する関数

const OjaInspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  // console.log('OjaInspectorレンダー'); //デバック
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30CF\u30A4\u30E9\u30A4\u30C8\u8A2D\u5B9A",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl // トグル切替時にレンダリングしたい
  , {
    label: attributes.linenums ? "行番号(表示）" : "行番号（非表示）",
    checked: attributes.linenums,
    onChange: val => setAttributes({
      linenums: val
    })
  })), attributes.linenums && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl // 行番号を指定してハイライトするようにしたい
  , {
    label: "\u958B\u59CB\u3059\u308B\u884C\u756A\u53F7",
    type: "number",
    value: attributes.linenumStart,
    onChange: val => setAttributes({
      linenumStart: parseInt(val)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl // 配置を変更するとレンダリング後におかしくなるため要検証
  , {
    label: "\u30D6\u30ED\u30C3\u30AF\u306E\u914D\u7F6E",
    value: attributes.align,
    options: [{
      label: "なし",
      value: ""
    }, {
      label: "左寄せ",
      value: "left"
    }, {
      label: "中央寄せ",
      value: "center"
    }, {
      label: "右寄せ",
      value: "right"
    }, {
      label: "幅広",
      value: "wide"
    }],
    onChange: val => setAttributes({
      align: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "\u6700\u5927\u5E45\u3092\u6307\u5B9A",
    checked: attributes.maxWidthEnable,
    onChange: val => setAttributes({
      maxWidthEnable: val
    }),
    help: "\u203B \u30A4\u30F3\u30E9\u30A4\u30F3\u30B9\u30BF\u30A4\u30EB\u3067\u8A2D\u5B9A\u3057\u307E\u3059"
  })), attributes.maxWidthEnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: "\u6700\u5927\u5E45\u8A2D\u5B9A",
    value: attributes.maxWidth,
    onChange: val => setAttributes({
      maxWidth: parseInt(val)
    }),
    min: 300,
    max: 1800,
    step: 10,
    help: "\u6700\u5927\u5E45\u3092 px \u3067\u6307\u5B9A\u3057\u307E\u3059"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "\u8A00\u8A9E\u9078\u629E",
    value: attributes.lang,
    options: [{
      label: "Default",
      value: ""
    }, {
      label: "CSS",
      value: "css"
    }, {
      label: "SQL",
      value: "sql"
    }, {
      label: "PHP",
      value: "php"
    }, {
      label: "JavaScript",
      value: "js"
    }, {
      label: "SASS",
      value: "scss"
    }, {
      label: "Bash",
      value: "bash"
    }, {
      label: "Java",
      value: "java"
    }, {
      label: "C++",
      value: "c++"
    }],
    help: "\u203B \u9069\u5207\u306A\u8A00\u8A9E\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u7DBA\u9E97\u306B\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u307E\u3059",
    onChange: val => setAttributes({
      lang: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl // デフォルト何する？
  , {
    label: "\u66F8\u5F0F\u8A2D\u5B9A",
    value: attributes.fontFamily,
    options: [{
      label: "デフォルト",
      value: "default"
    }, {
      label: "MS P明朝",
      value: "MS P明朝"
    }, {
      label: "Menlo",
      value: "Menlo"
    }, {
      label: "monospace",
      value: "monospace"
    }, {
      label: "Courier",
      value: "Courier"
    }, {
      label: "Ricty Diminished",
      value: "Ricty Diminished"
    }],
    onChange: val => setAttributes({
      fontFamily: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "\u30C7\u30B6\u30A4\u30F3\u30B9\u30AD\u30F3",
    value: attributes.skin,
    options: [{
      label: "Basic",
      value: ""
    }, {
      label: "Desert",
      value: "desert"
    }, {
      label: "Doxy",
      value: "doxy"
    }, {
      label: "Sons-of-obsidian",
      value: "sons-of-obsidian"
    }, {
      label: "Sunburst",
      value: "sunburst"
    }],
    onChange: val => setAttributes({
      skin: val
    })
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OjaInspector);

/***/ }),

/***/ "./src/components/RequiredFileName.js":
/*!********************************************!*\
  !*** ./src/components/RequiredFileName.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const RequiredFileName = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_ref => {
  let {
    codeMode,
    fileName
  } = _ref;

  // console.log("RequiredFileNameレンダー"); //デバック
  if (codeMode === "code-onclick" && fileName === "") {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "filename-err"
    }, "\u203B\u8868\u793A\u65B9\u6CD5\u304C\u5168\u6587\u7701\u7565\u306E\u5834\u5408\u5FC5\u9808\u3067\u3059");
  }

  return null;
});
/* harmony default export */ __webpack_exports__["default"] = (RequiredFileName);

/***/ }),

/***/ "./src/components/TextCodeArea.js":
/*!****************************************!*\
  !*** ./src/components/TextCodeArea.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const TextCodeArea = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_ref => {
  let {
    codeArea,
    setAttributes
  } = _ref;
  // console.log("TextCodeAreaレンダー"); //デバック
  //▼テキストエリア（TextareaControl）の行数
  let codeAreaRows = codeArea.split(/\r|\r\n|\n/).length > 3 ? codeArea.split(/\r|\r\n|\n/).length : 3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    placeholder: "Code...",
    value: codeArea,
    onChange: code => setAttributes({
      codeArea: code
    }),
    rows: codeAreaRows
  });
});
/* harmony default export */ __webpack_exports__["default"] = (TextCodeArea);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RequiredFileName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RequiredFileName.js */ "./src/components/RequiredFileName.js");
/* harmony import */ var _components_CodeFileShowMode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CodeFileShowMode.js */ "./src/components/CodeFileShowMode.js");
/* harmony import */ var _components_TextCodeArea_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TextCodeArea.js */ "./src/components/TextCodeArea.js");
/* harmony import */ var _components_GetViewMode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GetViewMode.js */ "./src/components/GetViewMode.js");
/* harmony import */ var _components_OjaInspector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OjaInspector.js */ "./src/components/OjaInspector.js");
/* harmony import */ var _views_PreviewRender_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/PreviewRender.js */ "./views/PreviewRender.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");











 // import React, {memo, useMemo, useCallBack} from 'react';

function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.useBlockProps)();
  const {
    attributes: {
      codeArea,
      fileName
    },
    attributes,
    className,
    setAttributes
  } = props;
  const {
    isEditMode,
    codeMode,
    excerptLength,
    ...renderAttr
  } = attributes; // 実行結果をメモしたいけど、、上手く行かない、、
  // renderAttrをuseEffectの依存配列に渡すと、ナンバーのレンダリングが反映されるけど、バグが起きるので一旦保留にする
  // 依存配列をオブジェクトから配列に変換してみた、、けど、、
  // const dependenceAttr = Object.keys(renderAttr);
  // const previewRender = useMemo(() => PreviewRender(props), [dependenceAttr]);
  // ▼管理画面上でcode−prettifyを実行する関数を登録するフック

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    PR.prettyPrint();
  }, [isEditMode]); // returnを組み立てる

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_GetViewMode_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isEditMode: isEditMode,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_OjaInspector_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), isEditMode && [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: className
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_RequiredFileName_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    codeMode: codeMode,
    fileName: fileName
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "File Name",
    type: "string",
    className: "filename",
    value: fileName,
    onChange: val => setAttributes({
      fileName: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_CodeFileShowMode_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    codeMode: codeMode,
    excerptLength: excerptLength,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_TextCodeArea_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    codeArea: codeArea,
    setAttributes: setAttributes
  }))], !attributes.isEditMode && [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      isEditMode: true
    }),
    isLink: true,
    icon: "edit"
  }, "\u7DE8\u96C6\u30E2\u30FC\u30C9"), (0,_views_PreviewRender_js__WEBPACK_IMPORTED_MODULE_8__["default"])(props)]);
} //export default function Edit(props)

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("oja/code-gutenberg", {
  title: "Oja Code Gutenberg",
  description: "プログラミング言語をシンタックスハイライトします ",
  //説明（オプション）
  icon: "smiley",
  //アイコン（オプション）
  category: "common",
  keywords: ["code", "oja", "pre"],
  supports: {
    customClassName: false,
    anchor: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./views/PreviewRender.js":
/*!********************************!*\
  !*** ./views/PreviewRender.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 //プレビューをレンダリングする関数

const PreviewRender = _ref => {
  let {
    className,
    attributes
  } = _ref;
  console.log("PreviewRenderレンダー"); //デバック

  const {
    codeArea,
    align,
    skin,
    fileName,
    maxWidthEnable,
    linenumStart,
    linenums,
    lang,
    fontFamily,
    maxWidth
  } = attributes; // コードが入力されていない時

  if (codeArea === "") {
    return null;
  } // ブロックスタイル用クラス


  let addBlockClass = "",
      addInlineStyle = {},
      addPreClass = "",
      addFontFamily = {}; //配置

  if (align) {
    addBlockClass = " align" + align;
  } //デザインスキン


  if (skin) {
    addBlockClass += " " + skin;
  } //ファイル名が指定されていれば filename_wrapper クラスを追加


  if (fileName) {
    addBlockClass += " filename_wrapper";
  } // maxWidthEnable が true なら max-width をインラインスタイルで設定


  if (maxWidthEnable) {
    addInlineStyle = {
      maxWidth: maxWidth
    };
  } // linenums がtrueならクラスを追加


  if (linenums) {
    addPreClass = " linenums"; // 行の開始番号が指定されていればその値をクラスに追加

    if (linenumStart !== 1) {
      addPreClass += ":" + linenumStart;
    }
  } //言語が指定されていればそのクラスを指定


  if (lang) {
    addPreClass += " lang-" + lang;
  } //書式設定があればインラインスタイルで指定


  if (fontFamily !== "default") {
    addFontFamily = {
      fontFamily: fontFamily
    };
  } //最終的なマークアップをレンダリング


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className + addBlockClass,
    style: addInlineStyle
  }, attributes.fileName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "file_name"
  }, attributes.fileName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", {
    className: "prettyprint" + addPreClass,
    style: addFontFamily
  }, attributes.codeArea));
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewRender);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkoja_code_gutenberg"] = self["webpackChunkoja_code_gutenberg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map