webpackHotUpdate_N_E("pages/todo",{

/***/ "./src/pages/todo/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.style */ \"./src/pages/todo/todo.style.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ \"./src/pages/components/Button.jsx\");\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tasks */ \"./src/pages/components/Tasks.jsx\");\n\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/todo/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ToDo() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    id: 1,\n    text: 'Dogwalker'\n  }, {\n    id: 2,\n    text: 'go to shopping'\n  }]),\n      tasks = _useState[0],\n      setTasks = _useState[1];\n\n  var onClick = function onClick() {\n    console.log('clicado');\n  };\n\n  var deleteTask = function deleteTask(id) {\n    setTasks(tasks.filter(function (task) {\n      return task.id !== id;\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_todo_style__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Lista de tarefas aqui\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      color: \"green\",\n      text: \"Add\",\n      onClick: onClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), tasks.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Tasks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      tasks: tasks,\n      onDelete: deleteTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, this) : 'No tasks to show']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ToDo, \"7/EkAPr0v4W4lX2I1aBPWpKYb1E=\");\n\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\n\nvar _c;\n\n$RefreshReg$(_c, \"ToDo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG8vaW5kZXguanN4P2M4ZmQiXSwibmFtZXMiOlsiVG9EbyIsInVzZVN0YXRlIiwiaWQiLCJ0ZXh0IiwidGFza3MiLCJzZXRUYXNrcyIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlVGFzayIsImZpbHRlciIsInRhc2siLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsQ0FDakM7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEaUMsRUFLakM7QUFDRUQsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMaUMsQ0FBRCxDQURwQjtBQUFBLE1BQ1BDLEtBRE87QUFBQSxNQUNBQyxRQURBOztBQVlkLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNQLEVBQUQsRUFBUTtBQUN6QkcsWUFBUSxDQUFDRCxLQUFLLENBQUNNLE1BQU4sQ0FBYSxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDVCxFQUFMLEtBQVlBLEVBQXRCO0FBQUEsS0FBYixDQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDBEQUFEO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBc0IsVUFBSSxFQUFDLEtBQTNCO0FBQWlDLGFBQU8sRUFBRUk7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dGLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQWYsZ0JBQ0MscUVBQUMseURBQUQ7QUFBTyxXQUFLLEVBQUVSLEtBQWQ7QUFBcUIsY0FBUSxFQUFFSztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FHQyxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztHQS9CUVQsSTs7S0FBQUEsSTtBQWlDTUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3RvZG8uc3R5bGUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBUYXNrcyBmcm9tICcuLi9jb21wb25lbnRzL1Rhc2tzJztcblxuZnVuY3Rpb24gVG9EbygpIHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0ZXh0OiAnRG9nd2Fsa2VyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGV4dDogJ2dvIHRvIHNob3BwaW5nJyxcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbGljYWRvJyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICAgIHNldFRhc2tzKHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDE+TGlzdGEgZGUgdGFyZWZhcyBhcXVpPC9oMT5cbiAgICAgIDxCdXR0b24gY29sb3I9J2dyZWVuJyB0ZXh0PSdBZGQnIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgICB7dGFza3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPFRhc2tzIHRhc2tzPXt0YXNrc30gb25EZWxldGU9e2RlbGV0ZVRhc2t9IC8+XG4gICAgICApIDogKFxuICAgICAgICAnTm8gdGFza3MgdG8gc2hvdydcbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

/***/ })

})