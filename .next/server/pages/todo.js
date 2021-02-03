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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/todo.module.css */ \"./src/pages/styles/todo.module.css\");\n/* harmony import */ var _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/components/AddTask.jsx\";\n\n\n\nconst AddTask = ({\n  onAdd\n}) => {\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''); // useEffect(() => {\n  //   const storedTasks = JSON.parse(localStorage.getItem('tasks'));\n  //   if (storedTasks) setText(storedTasks);\n  // }, []);\n  // useEffect(() => {\n  //   localStorage.setItem('tasks', JSON.stringify(text));\n  // }, [text]);\n\n  console.log(text);\n\n  const onSubmit = e => {\n    e.preventDefault();\n\n    if (!text) {\n      alert('Please add a task');\n      return;\n    }\n\n    onAdd({\n      text\n    });\n    setText('');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    onSubmit: onSubmit,\n    className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formcontainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: \"Adicionar tarefa \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.addtask,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: \"Add Task\",\n        value: text,\n        onChange: e => {\n          setText(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\",\n        value: \"Save Task\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9BZGRUYXNrLmpzeD9iMWU2Il0sIm5hbWVzIjpbIkFkZFRhc2siLCJvbkFkZCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInN0eWxlcyIsImZvcm1jb250YWluZXIiLCJhZGR0YXNrIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEMsQ0FENkIsQ0FHN0I7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztBQUVBLFFBQU1LLFFBQVEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSSxDQUFDUCxJQUFMLEVBQVc7QUFDVFEsV0FBSyxDQUFDLG1CQUFELENBQUw7QUFDQTtBQUNEOztBQUVEVCxTQUFLLENBQUM7QUFBRUM7QUFBRixLQUFELENBQUw7QUFFQUMsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBTSxZQUFRLEVBQUVJLFFBQWhCO0FBQTBCLGFBQVMsRUFBRUksOERBQU0sQ0FBQ0MsYUFBNUM7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxPQUF2QjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxtQkFBVyxFQUFDLFVBRmQ7QUFHRSxhQUFLLEVBQUVYLElBSFQ7QUFJRSxnQkFBUSxFQUFHTSxDQUFELElBQU87QUFDZkwsaUJBQU8sQ0FBQ0ssQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBM0NEOztBQTZDZWYsc0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9BZGRUYXNrLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3RvZG8ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFkZFRhc2sgPSAoeyBvbkFkZCB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIC8vICAgaWYgKHN0b3JlZFRhc2tzKSBzZXRUZXh0KHN0b3JlZFRhc2tzKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGV4dCkpO1xuICAvLyB9LCBbdGV4dF0pO1xuXG4gIGNvbnNvbGUubG9nKHRleHQpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgYWRkIGEgdGFzaycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQWRkKHsgdGV4dCB9KTtcblxuICAgIHNldFRleHQoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtY29udGFpbmVyfT5cbiAgICAgIDxsYWJlbD5BZGljaW9uYXIgdGFyZWZhIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZHRhc2t9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgVGFzaydcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTYXZlIFRhc2snIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUYXNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/AddTask.jsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"./src/pages/components/Tasks.jsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"./src/pages/components/AddTask.jsx\");\n\nvar _jsxFileName = \"/home/cesar/Code/portfoliocesar/src/pages/todo/index.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import { Container } from './todo.style';\n // import Button from '../components/Button';\n\n\n\n\nfunction ToDo() {\n  const {\n    0: tasks,\n    1: setTasks\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const storedTasks = JSON.parse(localStorage.getItem('tasks'));\n    if (storedTasks) setTasks(storedTasks);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }, [tasks]); // Add Task\n\n  const addTask = task => {\n    const id = Math.floor(Math.random() * 10000) + 1;\n\n    const newTask = _objectSpread({\n      id\n    }, task);\n\n    setTasks([...tasks, newTask]);\n  }; // Delete task\n\n\n  const deleteTask = id => {\n    setTasks(tasks.filter(task => task.id !== id));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Lista de tarefas aqui\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onAdd: addTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), tasks.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      tasks: tasks,\n      onDelete: deleteTask\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, this) : 'No tasks to show']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3g/YzhmZCJdLCJuYW1lcyI6WyJUb0RvIiwidGFza3MiLCJzZXRUYXNrcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RvcmVkVGFza3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFkZFRhc2siLCJ0YXNrIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuZXdUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBcEI7QUFDQSxRQUFJSixXQUFKLEVBQWlCSCxRQUFRLENBQUNHLFdBQUQsQ0FBUjtBQUNsQixHQUhRLEVBR04sRUFITSxDQUFUO0FBS0FELHlEQUFTLENBQUMsTUFBTTtBQUNkSSxnQkFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixJQUFJLENBQUNLLFNBQUwsQ0FBZVYsS0FBZixDQUE5QjtBQUNELEdBRlEsRUFFTixDQUFDQSxLQUFELENBRk0sQ0FBVCxDQVJjLENBWWQ7O0FBQ0EsUUFBTVcsT0FBTyxHQUFJQyxJQUFELElBQVU7QUFDeEIsVUFBTUMsRUFBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEtBQTNCLElBQW9DLENBQS9DOztBQUNBLFVBQU1DLE9BQU87QUFBS0o7QUFBTCxPQUFZRCxJQUFaLENBQWI7O0FBRUFYLFlBQVEsQ0FBQyxDQUFDLEdBQUdELEtBQUosRUFBV2lCLE9BQVgsQ0FBRCxDQUFSO0FBQ0QsR0FMRCxDQWJjLENBb0JkOzs7QUFDQSxRQUFNQyxVQUFVLEdBQUlMLEVBQUQsSUFBUTtBQUN6QlosWUFBUSxDQUFDRCxLQUFLLENBQUNtQixNQUFOLENBQWNQLElBQUQsSUFBVUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlBLEVBQW5DLENBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsMkRBQUQ7QUFBUyxXQUFLLEVBQUVGO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQUtHWCxLQUFLLENBQUNvQixNQUFOLEdBQWUsQ0FBZixnQkFDQyxxRUFBQyx5REFBRDtBQUFPLFdBQUssRUFBRXBCLEtBQWQ7QUFBcUIsY0FBUSxFQUFFa0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEdBR0Msa0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFY25CLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3RvZG8vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi90b2RvLnN0eWxlJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBUYXNrcyBmcm9tICcuLi9jb21wb25lbnRzL1Rhc2tzJztcbmltcG9ydCBBZGRUYXNrIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkVGFzayc7XG5cbmZ1bmN0aW9uIFRvRG8oKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgICBpZiAoc3RvcmVkVGFza3MpIHNldFRhc2tzKHN0b3JlZFRhc2tzKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfSwgW3Rhc2tzXSk7XG5cbiAgLy8gQWRkIFRhc2tcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgKyAxO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IGlkLCAuLi50YXNrIH07XG5cbiAgICBzZXRUYXNrcyhbLi4udGFza3MsIG5ld1Rhc2tdKTtcbiAgfTtcblxuICAvLyBEZWxldGUgdGFza1xuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgc2V0VGFza3ModGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5MaXN0YSBkZSB0YXJlZmFzIGFxdWk8L2gxPlxuICAgICAgey8qIDxCdXR0b24gY29sb3I9J2dyZWVuJyB0ZXh0PSdBZGQnIC8+ICovfVxuXG4gICAgICA8QWRkVGFzayBvbkFkZD17YWRkVGFza30gLz5cbiAgICAgIHt0YXNrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8VGFza3MgdGFza3M9e3Rhc2tzfSBvbkRlbGV0ZT17ZGVsZXRlVGFza30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgICdObyB0YXNrcyB0byBzaG93J1xuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

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