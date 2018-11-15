/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: multiplicacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiplicacao\", function() { return multiplicacao; });\nfunction multiplicacao(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TodoList =\n/*#__PURE__*/\nfunction () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    this.todo = [];\n  }\n\n  _createClass(TodoList, [{\n    key: \"addTodo\",\n    value: function addTodo() {\n      this.todo.push(\"Todo\");\n    }\n  }, {\n    key: \"showTodo\",\n    value: function showTodo() {\n      console.log(this.todo);\n      return this.todo;\n    }\n  }]);\n\n  return TodoList;\n}();\n/*\nconst todo = new TodoList();\n\ndocument.getElementById('addTodo').onclick = function() {\n    todo.addTodo();\n}\n\ndocument.getElementById('showTodo').onclick = function() {\n    var div = document.getElementById('display');\n    div.innerText = \"<h1>\" + todo.showTodo() +\"</h1>\"+ \"\\n\";\n} \n\n\nconst arr = [1, 3, 4, 5, 8, 9];\n\nconst newArr = arr.map(function(item, index){\n    return item * index;\n});\n\nconsole.log(newArr);\n\nconst sum = arr.reduce(function(total, next){\n    return total + next;\n});\n\nconsole.log(sum);\n\nconst filter = arr.filter(function(item){\n    return item % 2 === 0;\n});\n\nconsole.log(filter);\n\nconst find = arr.find(function(item){\n    return item === 4;\n});\n\nconsole.log(find);\n\nconst arr = [1, 3, 4, 5, 8, 9];\n\nconst newArr = arr.map(item => item * 2);\n\nconsole.log(newArr);\n\nconst teste = () => {\n    return 'Teste';\n}\n\nconst soma = (a = 2, b = 5) => a + b;\n\nconsole.log(soma(1));\nconsole.log(soma());\n*/\n\n\nvar usuario = {\n  nome: 'Heitor Neto',\n  idade: 34,\n  endereco: {\n    cidade: 'Uberlandia',\n    estado: 'Minas Gerais'\n  }\n};\nvar arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n/*\nfunction mostraNome({nome, idade}){\n    console.log(nome, idade);\n}\n\nconsole.log(usuario);\n\nconst {nome, idade, endereco: {cidade}} = usuario;\nconsole.log(nome);\nconsole.log(idade);\nconsole.log(cidade);\n\nmostraNome(usuario);\n*/\n//REST\n\nvar nome = usuario.nome,\n    resto = _objectWithoutProperties(usuario, [\"nome\"]);\n\nconsole.log(nome);\nconsole.log(resto);\nvar a = arr[0],\n    b = arr[1],\n    c = arr[2],\n    d = arr.slice(3);\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\nconsole.log(d);\n\nfunction soma() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(soma(1, 2, 3, 4)); //SPREAD\n\nvar arr1 = [1, 2, 3];\nvar arr2 = [4, 5, 6];\nvar arr3 = arr1.concat(arr2);\nconsole.log(arr3);\n\nvar usuario1 = _objectSpread({}, usuario, {\n  nome: 'Joao de Deus'\n});\n\nconsole.log(usuario1);\nconsole.log(\"2 x 2 = \".concat(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"multiplicacao\"])(2, 2)));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });