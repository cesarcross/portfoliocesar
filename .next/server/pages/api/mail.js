module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/mail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/mail.js":
/*!*******************************!*\
  !*** ./src/pages/api/mail.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default.a.setApiKey(process.env.SENDGRID_API_KEY);\nasync function handler(req, res) {\n  const {\n    name,\n    email,\n    message\n  } = req.body;\n\n  try {\n    await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default.a.send({\n      to: 'cesarcorregiari@gmail.com',\n      from: email,\n      subject: `Nova mensagem de ${name}`,\n      text: message // html: `<p>Assunto: ${subjectMatter}</p>\n      // <p>${textArea}</p>`,\n\n    });\n    return res.status(200).json({\n      msg: 'Message sent successfully.'\n    });\n  } catch (error) {\n    return res.status(error.statusCode || 500).json({\n      error: error.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL21haWwuanM/MWU0NCJdLCJuYW1lcyI6WyJzZW5kZ3JpZCIsInNldEFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJTRU5ER1JJRF9BUElfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJib2R5Iiwic2VuZCIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJ0ZXh0Iiwic3RhdHVzIiwianNvbiIsIm1zZyIsImVycm9yIiwic3RhdHVzQ29kZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQSxxREFBUSxDQUFDQyxTQUFULENBQW1CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQS9CO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJKLEdBQUcsQ0FBQ0ssSUFBckM7O0FBRUEsTUFBSTtBQUNGLFVBQU1YLHFEQUFRLENBQUNZLElBQVQsQ0FBYztBQUNsQkMsUUFBRSxFQUFFLDJCQURjO0FBRWxCQyxVQUFJLEVBQUVMLEtBRlk7QUFHbEJNLGFBQU8sRUFBRyxvQkFBbUJQLElBQUssRUFIaEI7QUFJbEJRLFVBQUksRUFBRU4sT0FKWSxDQUtsQjtBQUNBOztBQU5rQixLQUFkLENBQU47QUFTQSxXQUFPSCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFyQixDQUFQO0FBQ0QsR0FYRCxDQVdFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU9iLEdBQUcsQ0FBQ1UsTUFBSixDQUFXRyxLQUFLLENBQUNDLFVBQU4sSUFBb0IsR0FBL0IsRUFBb0NILElBQXBDLENBQXlDO0FBQUVFLFdBQUssRUFBRUEsS0FBSyxDQUFDVjtBQUFmLEtBQXpDLENBQVA7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9tYWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbmRncmlkIGZyb20gJ0BzZW5kZ3JpZC9tYWlsJztcblxuc2VuZGdyaWQuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgc2VuZGdyaWQuc2VuZCh7XG4gICAgICB0bzogJ2Nlc2FyY29ycmVnaWFyaUBnbWFpbC5jb20nLFxuICAgICAgZnJvbTogZW1haWwsXG4gICAgICBzdWJqZWN0OiBgTm92YSBtZW5zYWdlbSBkZSAke25hbWV9YCxcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAvLyBodG1sOiBgPHA+QXNzdW50bzogJHtzdWJqZWN0TWF0dGVyfTwvcD5cbiAgICAgIC8vIDxwPiR7dGV4dEFyZWF9PC9wPmAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6ICdNZXNzYWdlIHNlbnQgc3VjY2Vzc2Z1bGx5LicgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/mail.js\n");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sendgrid/mail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2VuZGdyaWQvbWFpbFwiPzJmN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNlbmRncmlkL21haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2VuZGdyaWQvbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sendgrid/mail\n");

/***/ })

/******/ });