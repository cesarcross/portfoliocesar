webpackHotUpdate_N_E("pages/todo",{

/***/ "./src/pages/todo/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_cesar_Code_portfoliocesar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_cesar_Code_portfoliocesar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ \"./src/pages/components/Button.jsx\");\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tasks */ \"./src/pages/components/Tasks.jsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddTask */ \"./src/pages/components/AddTask.jsx\");\n\n\n\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/todo/index.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_cesar_Code_portfoliocesar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// import { Container } from './todo.style';\n\n\n\n // import './index.style';\n\nfunction ToDo() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([{\n    id: 1,\n    text: 'Dogwalker'\n  }, {\n    id: 2,\n    text: 'go to shopping'\n  }]),\n      tasks = _useState[0],\n      setTasks = _useState[1]; // Add Task\n\n\n  var addTask = function addTask(task) {\n    var id = Math.floor(Math.random() * 10000) + 1;\n\n    var newTask = _objectSpread({\n      id: id\n    }, task);\n\n    setTasks([].concat(Object(_home_cesar_Code_portfoliocesar_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks), [newTask]));\n  }; // Delete task\n\n\n  var deleteTask = function deleteTask(id) {\n    setTasks(tasks.filter(function (task) {\n      return task.id !== id;\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Lista de tarefas aqui\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      color: \"green\",\n      text: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddTask__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onAdd: addTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), tasks.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Tasks__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      tasks: tasks,\n      onDelete: deleteTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, this) : 'No tasks to show']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ToDo, \"7/EkAPr0v4W4lX2I1aBPWpKYb1E=\");\n\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\n\nvar _c;\n\n$RefreshReg$(_c, \"ToDo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG8vaW5kZXguanN4P2M4ZmQiXSwibmFtZXMiOlsiVG9EbyIsInVzZVN0YXRlIiwiaWQiLCJ0ZXh0IiwidGFza3MiLCJzZXRUYXNrcyIsImFkZFRhc2siLCJ0YXNrIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VGFzayIsImRlbGV0ZVRhc2siLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLENBQ2pDO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGlDLEVBS2pDO0FBQ0VELE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGlDLENBQUQsQ0FEcEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsUUFEQSxpQkFZZDs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3hCLFFBQU1MLEVBQUUsR0FBR00sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUEzQixJQUFvQyxDQUEvQzs7QUFDQSxRQUFNQyxPQUFPO0FBQUtULFFBQUUsRUFBRkE7QUFBTCxPQUFZSyxJQUFaLENBQWI7O0FBRUFGLFlBQVEsb0pBQUtELEtBQUwsSUFBWU8sT0FBWixHQUFSO0FBQ0QsR0FMRCxDQWJjLENBb0JkOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDVixFQUFELEVBQVE7QUFDekJHLFlBQVEsQ0FBQ0QsS0FBSyxDQUFDUyxNQUFOLENBQWEsVUFBQ04sSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0wsRUFBTCxLQUFZQSxFQUF0QjtBQUFBLEtBQWIsQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQywwREFBRDtBQUFRLFdBQUssRUFBQyxPQUFkO0FBQXNCLFVBQUksRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJRSxxRUFBQywyREFBRDtBQUFTLFdBQUssRUFBRUk7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBS0dGLEtBQUssQ0FBQ1UsTUFBTixHQUFlLENBQWYsZ0JBQ0MscUVBQUMseURBQUQ7QUFBTyxXQUFLLEVBQUVWLEtBQWQ7QUFBcUIsY0FBUSxFQUFFUTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FHQyxrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQXRDUVosSTs7S0FBQUEsSTtBQXdDTUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3RvZG8uc3R5bGUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBUYXNrcyBmcm9tICcuLi9jb21wb25lbnRzL1Rhc2tzJztcbmltcG9ydCBBZGRUYXNrIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkVGFzayc7XG5cbi8vIGltcG9ydCAnLi9pbmRleC5zdHlsZSc7XG5cbmZ1bmN0aW9uIFRvRG8oKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGV4dDogJ0RvZ3dhbGtlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRleHQ6ICdnbyB0byBzaG9wcGluZycsXG4gICAgfSxcbiAgXSk7XG5cbiAgLy8gQWRkIFRhc2tcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgKyAxO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IGlkLCAuLi50YXNrIH07XG5cbiAgICBzZXRUYXNrcyhbLi4udGFza3MsIG5ld1Rhc2tdKTtcbiAgfTtcblxuICAvLyBEZWxldGUgdGFza1xuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgc2V0VGFza3ModGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5MaXN0YSBkZSB0YXJlZmFzIGFxdWk8L2gxPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nZ3JlZW4nIHRleHQ9J0FkZCcgLz5cblxuICAgICAgPEFkZFRhc2sgb25BZGQ9e2FkZFRhc2t9IC8+XG4gICAgICB7dGFza3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPFRhc2tzIHRhc2tzPXt0YXNrc30gb25EZWxldGU9e2RlbGV0ZVRhc2t9IC8+XG4gICAgICApIDogKFxuICAgICAgICAnTm8gdGFza3MgdG8gc2hvdydcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

/***/ })

})