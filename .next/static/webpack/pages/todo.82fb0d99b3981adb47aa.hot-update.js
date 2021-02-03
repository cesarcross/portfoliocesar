webpackHotUpdate_N_E("pages/todo",{

/***/ "./src/pages/components/AddTask.jsx":
/*!******************************************!*\
  !*** ./src/pages/components/AddTask.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/todo.module.css */ \"./src/pages/styles/todo.module.css\");\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/AddTask.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar AddTask = function AddTask(_ref) {\n  _s();\n\n  var onAdd = _ref.onAdd;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem('tasks', text);\n  }, [text]);\n  console.log(text);\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n\n    if (!text) {\n      alert('Please add a task');\n      return;\n    }\n\n    onAdd({\n      text: text\n    });\n    setText('');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    onSubmit: onSubmit,\n    className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formcontainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: \"Adicionar tarefa \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.addtask,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: \"Add Task\",\n        value: text,\n        onChange: function onChange(e) {\n          setText(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\",\n        value: \"Save Task\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddTask, \"4ujWDM02ns4tez/JXYjL1bw6ipA=\");\n\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddTask\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQWRkVGFzay5qc3g/YjFlNiJdLCJuYW1lcyI6WyJBZGRUYXNrIiwib25BZGQiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Iiwic3R5bGVzIiwiZm9ybWNvbnRhaW5lciIsImFkZHRhc2siLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBRzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkosSUFBOUI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7QUFJQUssU0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7O0FBRUEsTUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSSxDQUFDVCxJQUFMLEVBQVc7QUFDVFUsV0FBSyxDQUFDLG1CQUFELENBQUw7QUFDQTtBQUNEOztBQUVEWixTQUFLLENBQUM7QUFBRUUsVUFBSSxFQUFKQTtBQUFGLEtBQUQsQ0FBTDtBQUVBQyxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsR0FYRDs7QUFhQSxzQkFDRTtBQUFNLFlBQVEsRUFBRU0sUUFBaEI7QUFBMEIsYUFBUyxFQUFFSSw4REFBTSxDQUFDQyxhQUE1QztBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsT0FBdkI7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQyxVQUZkO0FBR0UsYUFBSyxFQUFFYixJQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ1EsQ0FBRCxFQUFPO0FBQ2ZQLGlCQUFPLENBQUNPLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXRDRDs7R0FBTWxCLE87O0tBQUFBLE87QUF3Q1NBLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQWRkVGFzay5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy90b2RvLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBBZGRUYXNrID0gKHsgb25BZGQgfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0ZXh0KTtcbiAgfSwgW3RleHRdKTtcblxuICBjb25zb2xlLmxvZyh0ZXh0KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGFkZCBhIHRhc2snKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkFkZCh7IHRleHQgfSk7XG5cbiAgICBzZXRUZXh0KCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWNvbnRhaW5lcn0+XG4gICAgICA8bGFiZWw+QWRpY2lvbmFyIHRhcmVmYSA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGR0YXNrfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nQWRkIFRhc2snXG4gICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU2F2ZSBUYXNrJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/AddTask.jsx\n");

/***/ })

})