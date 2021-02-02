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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/todo.module.css */ \"./src/pages/styles/todo.module.css\");\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/AddTask.jsx\";\n\n\n\nconst AddTask = ({\n  onAdd\n}) => {\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  console.log(text);\n\n  const onSubmit = e => {\n    e.preventDefault();\n\n    if (!text) {\n      alert('Please add a task');\n      return;\n    }\n\n    onAdd({\n      text\n    });\n    setText('');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    onSubmit: onSubmit,\n    className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formcontainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: \"Adicionar tarefa \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.addtask,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: \"Add Task\",\n        value: text,\n        onChange: e => setText(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\",\n        value: \"Save Task\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9BZGRUYXNrLmpzeD9iMWU2Il0sIm5hbWVzIjpbIkFkZFRhc2siLCJvbkFkZCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInN0eWxlcyIsImZvcm1jb250YWluZXIiLCJhZGR0YXNrIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7O0FBRUEsUUFBTUssUUFBUSxHQUFJQyxDQUFELElBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxRQUFJLENBQUNQLElBQUwsRUFBVztBQUNUUSxXQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBRURULFNBQUssQ0FBQztBQUFFQztBQUFGLEtBQUQsQ0FBTDtBQUVBQyxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsR0FYRDs7QUFhQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUksUUFBaEI7QUFBMEIsYUFBUyxFQUFFSSw4REFBTSxDQUFDQyxhQUE1QztBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVELDhEQUFNLENBQUNFLE9BQXZCO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLG1CQUFXLEVBQUMsVUFGZDtBQUdFLGFBQUssRUFBRVgsSUFIVDtBQUlFLGdCQUFRLEVBQUdNLENBQUQsSUFBT0wsT0FBTyxDQUFDSyxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVjtBQUoxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFjRCxDQWhDRDs7QUFrQ2VmLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQWRkVGFzay5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdG9kby5tb2R1bGUuY3NzJztcblxuY29uc3QgQWRkVGFzayA9ICh7IG9uQWRkIH0pID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnNvbGUubG9nKHRleHQpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgYWRkIGEgdGFzaycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQWRkKHsgdGV4dCB9KTtcblxuICAgIHNldFRleHQoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtY29udGFpbmVyfT5cbiAgICAgIDxsYWJlbD5BZGljaW9uYXIgdGFyZWZhIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZHRhc2t9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgVGFzaydcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU2F2ZSBUYXNrJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/AddTask.jsx\n");

/***/ }),

/***/ "./src/pages/components/Task.jsx":
/*!***************************************!*\
  !*** ./src/pages/components/Task.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/todo.module.css */ \"./src/pages/styles/todo.module.css\");\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/Task.jsx\";\n\n\n\nconst Task = ({\n  task,\n  onDelete\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.taskcontainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: [task.text, ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaRegCheckCircle\"], {\n        style: {\n          color: 'green',\n          cursor: 'pointer'\n        },\n        onClick: () => onDelete(task.id)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9UYXNrLmpzeD8xNTRmIl0sIm5hbWVzIjpbIlRhc2siLCJ0YXNrIiwib25EZWxldGUiLCJzdHlsZXMiLCJ0YXNrY29udGFpbmVyIiwidGV4dCIsImNvbG9yIiwiY3Vyc29yIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBd0I7QUFDbkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBQXZCO0FBQUEsMkJBQ0U7QUFBQSxpQkFDR0gsSUFBSSxDQUFDSSxJQURSLEVBQ2MsR0FEZCxlQUVFLHFFQUFDLCtEQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxPQUFUO0FBQWtCQyxnQkFBTSxFQUFFO0FBQTFCLFNBRFQ7QUFFRSxlQUFPLEVBQUUsTUFBTUwsUUFBUSxDQUFDRCxJQUFJLENBQUNPLEVBQU47QUFGekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQWJEOztBQWVlUixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9jb21wb25lbnRzL1Rhc2suanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFSZWdDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdG9kby5tb2R1bGUuY3NzJztcblxuY29uc3QgVGFzayA9ICh7IHRhc2ssIG9uRGVsZXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tjb250YWluZXJ9PlxuICAgICAgPGg0PlxuICAgICAgICB7dGFzay50ZXh0fXsnICd9XG4gICAgICAgIDxGYVJlZ0NoZWNrQ2lyY2xlXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGUodGFzay5pZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2g0PlxuICAgICAgey8qIDxwPnt0YXNrLmlkfTwvcD4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/Task.jsx\n");

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

/***/ "./src/pages/styles/todo.module.css":
/*!******************************************!*\
  !*** ./src/pages/styles/todo.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"formcontainer\": \"todo_formcontainer__2cAXZ\",\n\t\"addtask\": \"todo_addtask__2h1M5\",\n\t\"taskcontainer\": \"todo_taskcontainer__6piPF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3R5bGVzL3RvZG8ubW9kdWxlLmNzcz85MjBkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9zdHlsZXMvdG9kby5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybWNvbnRhaW5lclwiOiBcInRvZG9fZm9ybWNvbnRhaW5lcl9fMmNBWFpcIixcblx0XCJhZGR0YXNrXCI6IFwidG9kb19hZGR0YXNrX18yaDFNNVwiLFxuXHRcInRhc2tjb250YWluZXJcIjogXCJ0b2RvX3Rhc2tjb250YWluZXJfXzZwaVBGXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/styles/todo.module.css\n");

/***/ }),

/***/ "./src/pages/todo/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"./src/pages/components/Tasks.jsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"./src/pages/components/AddTask.jsx\");\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/todo/index.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import { Container } from './todo.style';\n// import Button from '../components/Button';\n\n\n\n\nfunction ToDo() {\n  const {\n    0: tasks,\n    1: setTasks\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    id: 1,\n    text: 'Dogwalker'\n  }, {\n    id: 2,\n    text: 'go to shopping'\n  }]); // Add Task\n\n  const addTask = task => {\n    const id = Math.floor(Math.random() * 10000) + 1;\n\n    const newTask = _objectSpread({\n      id\n    }, task);\n\n    setTasks([...tasks, newTask]);\n  }; // Save Task to LocalStorage\n  // Delete Task\n\n\n  const deleteTask = id => {\n    setTasks(tasks.filter(task => task.id !== id));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Tarefas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onAdd: addTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), tasks.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      tasks: tasks,\n      onDelete: deleteTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this) : 'No tasks to show']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3g/YzhmZCJdLCJuYW1lcyI6WyJUb0RvIiwidGFza3MiLCJzZXRUYXNrcyIsInVzZVN0YXRlIiwiaWQiLCJ0ZXh0IiwiYWRkVGFzayIsInRhc2siLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuZXdUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxDQUNqQztBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURpQyxFQUtqQztBQUNFRCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxpQyxDQUFELENBQWxDLENBRGMsQ0FZZDs7QUFDQSxRQUFNQyxPQUFPLEdBQUlDLElBQUQsSUFBVTtBQUN4QixVQUFNSCxFQUFFLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBM0IsSUFBb0MsQ0FBL0M7O0FBQ0EsVUFBTUMsT0FBTztBQUFLUDtBQUFMLE9BQVlHLElBQVosQ0FBYjs7QUFFQUwsWUFBUSxDQUFDLENBQUMsR0FBR0QsS0FBSixFQUFXVSxPQUFYLENBQUQsQ0FBUjtBQUNELEdBTEQsQ0FiYyxDQW9CZDtBQUVBOzs7QUFDQSxRQUFNQyxVQUFVLEdBQUlSLEVBQUQsSUFBUTtBQUN6QkYsWUFBUSxDQUFDRCxLQUFLLENBQUNZLE1BQU4sQ0FBY04sSUFBRCxJQUFVQSxJQUFJLENBQUNILEVBQUwsS0FBWUEsRUFBbkMsQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRSxxRUFBQywyREFBRDtBQUFTLFdBQUssRUFBRUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUdMLEtBQUssQ0FBQ2EsTUFBTixHQUFlLENBQWYsZ0JBQ0MscUVBQUMseURBQUQ7QUFBTyxXQUFLLEVBQUViLEtBQWQ7QUFBcUIsY0FBUSxFQUFFVztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FHQyxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztBQUVjWixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy90b2RvL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vdG9kby5zdHlsZSc7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFza3MnO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSAnLi4vY29tcG9uZW50cy9BZGRUYXNrJztcblxuZnVuY3Rpb24gVG9EbygpIHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0ZXh0OiAnRG9nd2Fsa2VyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGV4dDogJ2dvIHRvIHNob3BwaW5nJyxcbiAgICB9LFxuICBdKTtcblxuICAvLyBBZGQgVGFza1xuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSArIDE7XG4gICAgY29uc3QgbmV3VGFzayA9IHsgaWQsIC4uLnRhc2sgfTtcblxuICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICB9O1xuXG4gIC8vIFNhdmUgVGFzayB0byBMb2NhbFN0b3JhZ2VcblxuICAvLyBEZWxldGUgVGFza1xuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgc2V0VGFza3ModGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5UYXJlZmFzPC9oMj5cbiAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPSdncmVlbicgdGV4dD0nQWRkJyAvPiAqL31cbiAgICAgIDxBZGRUYXNrIG9uQWRkPXthZGRUYXNrfSAvPlxuICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxUYXNrcyB0YXNrcz17dGFza3N9IG9uRGVsZXRlPXtkZWxldGVUYXNrfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgJ05vIHRhc2tzIHRvIHNob3cnXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

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

/***/ })

/******/ });