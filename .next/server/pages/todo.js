module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/todo/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/components/AddTask.jsx":
/*!******************************************!*\
  !*** ./src/pages/components/AddTask.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/AddTask.jsx\";\n\n\nconst AddTask = ({\n  onAdd\n}) => {\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const onSubmit = e => {\n    e.preventDefault();\n\n    if (!text) {\n      alert('Please add a task');\n      return;\n    }\n\n    onAdd({\n      text\n    });\n    setText('');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Task\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: \"Add Task\",\n        value: text,\n        onChange: e => setText(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"submit\",\n      value: \"Save Task\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9BZGRUYXNrLmpzeD9iMWU2Il0sIm5hbWVzIjpbIkFkZFRhc2siLCJvbkFkZCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFFQSxRQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUksQ0FBQ0wsSUFBTCxFQUFXO0FBQ1RNLFdBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0E7QUFDRDs7QUFFRFAsU0FBSyxDQUFDO0FBQUVDO0FBQUYsS0FBRCxDQUFMO0FBRUFDLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQVhEOztBQWFBLHNCQUNFO0FBQU0sWUFBUSxFQUFFRSxRQUFoQjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQyxVQUZkO0FBR0UsYUFBSyxFQUFFSCxJQUhUO0FBSUUsZ0JBQVEsRUFBR0ksQ0FBRCxJQUFPSCxPQUFPLENBQUNHLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWO0FBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0U7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixXQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBL0JEOztBQWlDZVYsc0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9BZGRUYXNrLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGRUYXNrID0gKHsgb25BZGQgfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdGV4dCkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBhZGQgYSB0YXNrJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25BZGQoeyB0ZXh0IH0pO1xuXG4gICAgc2V0VGV4dCgnJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlRhc2s8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgVGFzaydcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTYXZlIFRhc2snIC8+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/AddTask.jsx\n");

/***/ }),

/***/ "./src/pages/components/Button.jsx":
/*!*****************************************!*\
  !*** ./src/pages/components/Button.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/Button.jsx\";\n\nconst Button = ({\n  color,\n  text,\n  onClick\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    style: {\n      backgroundColor: color\n    },\n    onClick: onClick,\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9CdXR0b24uanN4P2FkN2MiXSwibmFtZXMiOlsiQnV0dG9uIiwiY29sb3IiLCJ0ZXh0Iiwib25DbGljayIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxNQUFUO0FBQWVDO0FBQWYsQ0FBRCxLQUE4QjtBQUMzQyxzQkFDRTtBQUFRLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFSDtBQUFuQixLQUFmO0FBQTJDLFdBQU8sRUFBRUUsT0FBcEQ7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUWVGLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQnV0dG9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1dHRvbiA9ICh7IGNvbG9yLCB0ZXh0LCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gb25DbGljaz17b25DbGlja30+XG4gICAgICB7dGV4dH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/Button.jsx\n");

/***/ }),

/***/ "./src/pages/components/Task.jsx":
/*!***************************************!*\
  !*** ./src/pages/components/Task.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/Task.jsx\";\n\n\nconst Task = ({\n  task,\n  onDelete\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: [task.text, ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaTimes\"], {\n        style: {\n          color: 'red',\n          cursor: 'pointer'\n        },\n        onClick: () => onDelete(task.id)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: task.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9UYXNrLmpzeD8xNTRmIl0sIm5hbWVzIjpbIlRhc2siLCJ0YXNrIiwib25EZWxldGUiLCJ0ZXh0IiwiY29sb3IiLCJjdXJzb3IiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFELEtBQXdCO0FBQ25DLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxpQkFDR0QsSUFBSSxDQUFDRSxJQURSLEVBQ2MsR0FEZCxlQUVFLHFFQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxLQUFUO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBRFQ7QUFFRSxlQUFPLEVBQUUsTUFBTUgsUUFBUSxDQUFDRCxJQUFJLENBQUNLLEVBQU47QUFGekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFBLGdCQUFJTCxJQUFJLENBQUNLO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBYkQ7O0FBZWVOLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvVGFzay5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVRpbWVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5jb25zdCBUYXNrID0gKHsgdGFzaywgb25EZWxldGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+XG4gICAgICAgIHt0YXNrLnRleHR9eycgJ31cbiAgICAgICAgPEZhVGltZXNcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUodGFzay5pZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2gzPlxuICAgICAgPHA+e3Rhc2suaWR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/Task.jsx\n");

/***/ }),

/***/ "./src/pages/components/Tasks.jsx":
/*!****************************************!*\
  !*** ./src/pages/components/Tasks.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/pages/components/Task.jsx\");\n\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/Tasks.jsx\";\n\n\nconst Tasks = ({\n  tasks,\n  onDelete\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: tasks.map(task => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      task: task,\n      onDelete: onDelete\n    }, task.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9UYXNrcy5qc3g/NjIyZSJdLCJuYW1lcyI6WyJUYXNrcyIsInRhc2tzIiwib25EZWxldGUiLCJtYXAiLCJ0YXNrIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUF5QjtBQUNyQyxzQkFDRTtBQUFBLGNBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELGlCQUNULHFFQUFDLDZDQUFEO0FBQW9CLFVBQUksRUFBRUEsSUFBMUI7QUFBZ0MsY0FBUSxFQUFFRjtBQUExQyxPQUFXRSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESCxtQkFERjtBQU9ELENBUkQ7O0FBVWVMLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvVGFza3MuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcblxuY29uc3QgVGFza3MgPSAoeyB0YXNrcywgb25EZWxldGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgIDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25EZWxldGU9e29uRGVsZXRlfSAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/Tasks.jsx\n");

/***/ }),

/***/ "./src/pages/todo/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.style */ \"./src/pages/todo/todo.style.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ \"./src/pages/components/Button.jsx\");\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tasks */ \"./src/pages/components/Tasks.jsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AddTask */ \"./src/pages/components/AddTask.jsx\");\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/todo/index.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction ToDo() {\n  const {\n    0: tasks,\n    1: setTasks\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    id: 1,\n    text: 'Dogwalker'\n  }, {\n    id: 2,\n    text: 'go to shopping'\n  }]); // Add Task\n\n  const addTask = task => {\n    const id = Math.floor(Math.random() * 10000) + 1;\n\n    const newTask = _objectSpread({\n      id\n    }, task);\n\n    setTasks([...tasks, newTask]);\n  }; // Delete task\n\n\n  const deleteTask = id => {\n    setTasks(tasks.filter(task => task.id !== id));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_todo_style__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Lista de tarefas aqui\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      color: \"green\",\n      text: \"Add\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onAdd: addTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), tasks.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Tasks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      tasks: tasks,\n      onDelete: deleteTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, this) : 'No tasks to show']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3g/YzhmZCJdLCJuYW1lcyI6WyJUb0RvIiwidGFza3MiLCJzZXRUYXNrcyIsInVzZVN0YXRlIiwiaWQiLCJ0ZXh0IiwiYWRkVGFzayIsInRhc2siLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuZXdUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLENBQ2pDO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGlDLEVBS2pDO0FBQ0VELE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGlDLENBQUQsQ0FBbEMsQ0FEYyxDQVlkOztBQUNBLFFBQU1DLE9BQU8sR0FBSUMsSUFBRCxJQUFVO0FBQ3hCLFVBQU1ILEVBQUUsR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUEzQixJQUFvQyxDQUEvQzs7QUFDQSxVQUFNQyxPQUFPO0FBQUtQO0FBQUwsT0FBWUcsSUFBWixDQUFiOztBQUVBTCxZQUFRLENBQUMsQ0FBQyxHQUFHRCxLQUFKLEVBQVdVLE9BQVgsQ0FBRCxDQUFSO0FBQ0QsR0FMRCxDQWJjLENBb0JkOzs7QUFDQSxRQUFNQyxVQUFVLEdBQUlSLEVBQUQsSUFBUTtBQUN6QkYsWUFBUSxDQUFDRCxLQUFLLENBQUNZLE1BQU4sQ0FBY04sSUFBRCxJQUFVQSxJQUFJLENBQUNILEVBQUwsS0FBWUEsRUFBbkMsQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxxREFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQywwREFBRDtBQUFRLFdBQUssRUFBQyxPQUFkO0FBQXNCLFVBQUksRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJRSxxRUFBQywyREFBRDtBQUFTLFdBQUssRUFBRUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBS0dMLEtBQUssQ0FBQ2EsTUFBTixHQUFlLENBQWYsZ0JBQ0MscUVBQUMseURBQUQ7QUFBTyxXQUFLLEVBQUViLEtBQWQ7QUFBcUIsY0FBUSxFQUFFVztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FHQyxrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUVjWixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy90b2RvL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vdG9kby5zdHlsZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFza3MnO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSAnLi4vY29tcG9uZW50cy9BZGRUYXNrJztcblxuZnVuY3Rpb24gVG9EbygpIHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0ZXh0OiAnRG9nd2Fsa2VyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGV4dDogJ2dvIHRvIHNob3BwaW5nJyxcbiAgICB9LFxuICBdKTtcblxuICAvLyBBZGQgVGFza1xuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSArIDE7XG4gICAgY29uc3QgbmV3VGFzayA9IHsgaWQsIC4uLnRhc2sgfTtcblxuICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICB9O1xuXG4gIC8vIERlbGV0ZSB0YXNrXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgICBzZXRUYXNrcyh0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPkxpc3RhIGRlIHRhcmVmYXMgYXF1aTwvaDE+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdncmVlbicgdGV4dD0nQWRkJyAvPlxuXG4gICAgICA8QWRkVGFzayBvbkFkZD17YWRkVGFza30gLz5cbiAgICAgIHt0YXNrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8VGFza3MgdGFza3M9e3Rhc2tzfSBvbkRlbGV0ZT17ZGVsZXRlVGFza30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgICdObyB0YXNrcyB0byBzaG93J1xuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

/***/ }),

/***/ "./src/pages/todo/todo.style.tsx":
/*!***************************************!*\
  !*** ./src/pages/todo/todo.style.tsx ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"todostyle__Container\",\n  componentId: \"sc-16ka1k2-0\"\n})([\"border:1px solid greenyellow;background:#949597;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9kby90b2RvLnN0eWxlLnRzeD8wZjAwIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3REFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy90b2RvL3RvZG8uc3R5bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcbiAgYmFja2dyb3VuZDogIzk0OTU5NztcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/todo.style.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });