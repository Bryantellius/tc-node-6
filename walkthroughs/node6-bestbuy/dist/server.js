/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.js":
/*!************************************!*\
  !*** ./src/server/config/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n // ensures that env variables are loaded\n\nconst envFound = dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\n\nif (!envFound) {\n  throw new Error(\"Couldn't find .env!\");\n} // exports env variables for use\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  mysql: {\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASS,\n    database: process.env.DB_SCHEMA\n  },\n  port: parseInt(process.env.PORT)\n});\n\n//# sourceURL=webpack://fullstack_starter/./src/server/config/index.js?");

/***/ }),

/***/ "./src/server/db/models/index.js":
/*!***************************************!*\
  !*** ./src/server/db/models/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/server/config/index.js\");\n\n\nconst connection = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool(_config__WEBPACK_IMPORTED_MODULE_1__.default.mysql);\n\nconst query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    connection.query(query, values, (err, results) => {\n      if (err) reject(err);\n      resolve(results);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (query);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/db/models/index.js?");

/***/ }),

/***/ "./src/server/db/queries/products.js":
/*!*******************************************!*\
  !*** ./src/server/db/queries/products.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n // write parameterized query functions below\n\nconst getAll = async (limit = 10, offset = 0, Name) => {\n  let qs = `SELECT * FROM products${Name ? \" WHERE Name LIKE ? \" : \" \"} LIMIT ? OFFSET ?`;\n  let values = [parseInt(limit), parseInt(offset)];\n  if (Name) values.unshift(`%${Name}%`);\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(qs, values);\n};\n\nconst getOne = async ProductId => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM products WHERE ProductId = ?\", [ProductId]);\n};\n\nconst addOne = async product => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"INSERT INTO products SET ?\", [product]);\n};\n\nconst updateOne = async (ProductId, product) => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"UPDATE products SET ? WHERE ProductId = ?\", [product, ProductId]);\n};\n\nconst deleteOne = async ProductId => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"DELETE FROM products WHERE ProductId = ?\", [ProductId]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getAll,\n  getOne,\n  addOne,\n  updateOne,\n  deleteOne\n});\n\n//# sourceURL=webpack://fullstack_starter/./src/server/db/queries/products.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ \"./src/server/routes/products.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/test\", (req, res, next) => {\n  res.send(\"Hello World!\");\n});\nrouter.use(\"/products\", _products__WEBPACK_IMPORTED_MODULE_1__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/products.js":
/*!***************************************!*\
  !*** ./src/server/routes/products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_queries_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/queries/products */ \"./src/server/db/queries/products.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/\", async (req, res, next) => {\n  try {\n    let {\n      id,\n      limit,\n      startingAt,\n      Name\n    } = req.query;\n\n    if (id) {\n      let results = await _db_queries_products__WEBPACK_IMPORTED_MODULE_1__.default.getOne(parseInt(id));\n      res.json({\n        data: results[0] || \"No results\",\n        count: results.length\n      });\n    } else {\n      let results = await _db_queries_products__WEBPACK_IMPORTED_MODULE_1__.default.getAll(limit, startingAt, Name);\n      res.json({\n        data: results,\n        count: results.length,\n        startingAt: parseInt(startingAt) || 0\n      });\n    }\n  } catch (e) {\n    next(e);\n  }\n});\nrouter.post(\"/\", async (req, res, next) => {\n  try {\n    let newProduct = req.body;\n    let {\n      insertId\n    } = await _db_queries_products__WEBPACK_IMPORTED_MODULE_1__.default.addOne(newProduct);\n    res.json({\n      insertId,\n      msg: `Successfully added new product!`\n    });\n  } catch (e) {\n    next(e);\n  }\n});\nrouter.put(\"/\", async (req, res, next) => {\n  try {\n    let updatedProduct = req.body;\n\n    if (!updatedProduct.ProductId) {\n      res.status(400).json({\n        msg: `You must provide a 'ProductId' field for updated products.`\n      });\n    } else {\n      let {\n        affectedRows\n      } = await _db_queries_products__WEBPACK_IMPORTED_MODULE_1__.default.updateOne(updatedProduct.ProductId, updatedProduct);\n      res.json({\n        affectedRows,\n        msg: `Updated the product at '${updatedProduct.ProductId}'`\n      });\n    }\n  } catch (e) {\n    next(e);\n  }\n});\nrouter.delete(\"/\", async (req, res, next) => {\n  try {\n    let {\n      id\n    } = req.query;\n\n    if (id) {\n      let {\n        affectedRows\n      } = await _db_queries_products__WEBPACK_IMPORTED_MODULE_1__.default.deleteOne(id);\n      res.json({\n        affectedRows,\n        msg: `Deleted the product at '${id}'`\n      });\n    } else {\n      res.status(400).json({\n        msg: `You must provide an 'id' query parameter for deleted product.`\n      });\n    }\n  } catch (e) {\n    next(e);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://fullstack_starter/./src/server/routes/products.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/server/config/index.js\");\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // parses incoming request body as json if header indicates application/json\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json()); // logs incoming request information to the dev console\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(\"dev\")); // directs incoming static asset requests to the public folder\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"public\"));\napp.use(\"/api\", _routes__WEBPACK_IMPORTED_MODULE_2__.default); // sends the react app index.html\n\napp.use(\"*\", (req, res, next) => {\n  try {\n    res.sendFile((0,path__WEBPACK_IMPORTED_MODULE_3__.join)(__dirname, \"../public/index.html\"));\n  } catch (error) {\n    next(error);\n  }\n}); // generic error handler\n\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(err.status || 500).json({\n    name: err.name || \"Unknown error\",\n    msg: err.message || \"An error occurred on the server.\"\n  });\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_4__.default.port || 3000, () => console.log(`Server listening on port ${_config__WEBPACK_IMPORTED_MODULE_4__.default.port}...`));\n\n//# sourceURL=webpack://fullstack_starter/./src/server/server.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;