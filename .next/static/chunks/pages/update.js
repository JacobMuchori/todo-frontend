/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/update"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjacob%2Ftodo-frontend%2Fsrc%2Fpages%2Fupdate.js&page=%2Fupdate!":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjacob%2Ftodo-frontend%2Fsrc%2Fpages%2Fupdate.js&page=%2Fupdate! ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/update\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/update.js */ \"./src/pages/update.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/update\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGamFjb2IlMkZ0b2RvLWZyb250ZW5kJTJGc3JjJTJGcGFnZXMlMkZ1cGRhdGUuanMmcGFnZT0lMkZ1cGRhdGUhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0RBQXVCO0FBQzlDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz81MGQyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvdXBkYXRlXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9zcmMvcGFnZXMvdXBkYXRlLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi91cGRhdGVcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjacob%2Ftodo-frontend%2Fsrc%2Fpages%2Fupdate.js&page=%2Fupdate!\n"));

/***/ }),

/***/ "./src/pages/update.js":
/*!*****************************!*\
  !*** ./src/pages/update.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Update; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Update() {\n    _s();\n    const options = [\n        {\n            label: 1,\n            value: 1\n        },\n        {\n            label: 2,\n            value: 2\n        },\n        {\n            label: 3,\n            value: 3\n        },\n        {\n            label: 4,\n            value: 4\n        }\n    ];\n    const [title, SetTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [decsription, SetDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, SetStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priority, SetPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    title: title,\n                    decsription: decsription,\n                    status: status,\n                    priority: priority\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"form\",\n            onSubmit: (event)=>handleSubmit(event),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Title:\"\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Input title\",\n                    value: title,\n                    onChange: (e)=>SetTitle(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Decsription:\"\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Input description\",\n                    value: decsription,\n                    onChange: (e)=>SetDescription(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Status:\"\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    type: \"number\",\n                    placeholder: \"Input status\",\n                    value: status,\n                    onChange: (e)=>SetStatus(e.target.value),\n                    children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: option.value,\n                            children: option.label\n                        }, void 0, false, {\n                            fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Priority:\"\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    type: \"number\",\n                    placeholder: \"Input priority\",\n                    value: priority,\n                    onChange: (e)=>SetPriority(e.target.value),\n                    children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: option.value,\n                            children: option.label\n                        }, void 0, false, {\n                            fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jacob/todo-frontend/src/pages/update.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(Update, \"MhMiKRz3lH49ugLqBcqv0XrAgxk=\");\n_c = Update;\nvar _c;\n$RefreshReg$(_c, \"Update\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFFakIsU0FBU0MsU0FBUzs7SUFFN0IsTUFBTUMsVUFBVTtRQUNaO1lBQ0lDLE9BQU87WUFDUEMsT0FBTztRQUNYO1FBQ0E7WUFDSUQsT0FBTztZQUNQQyxPQUFPO1FBQ1g7UUFDQTtZQUNJRCxPQUFPO1lBQ1BDLE9BQU87UUFDWDtRQUNBO1lBQ0lELE9BQU87WUFDUEMsT0FBTztRQUNYO0tBQ1A7SUFHRyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNoRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1hLGVBQWUsT0FBT0MsUUFBVTtRQUNsQ0EsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGNBQWM7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ2pCaEIsT0FBT0E7b0JBQ1BFLGFBQWFBO29CQUNiRSxRQUFRQTtvQkFDUkUsVUFBVUE7Z0JBQ2Q7WUFDRjtZQUVBLE1BQU1XLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtZQUVoQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUNkLEVBQUUsT0FBT0ksT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFRixxQkFDSSw4REFBQ0M7a0JBQ0QsNEVBQUNDO1lBQUtDLFdBQVU7WUFBT0MsVUFBVWhCLENBQUFBLFFBQVNELGFBQWFDOzs4QkFDbkQsOERBQUNYOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUM0QjtvQkFBTUMsTUFBSztvQkFBT0MsYUFBWTtvQkFBYzdCLE9BQU9DO29CQUFPNkIsVUFBVUMsQ0FBQUEsSUFBSzdCLFNBQVM2QixFQUFFQyxNQUFNLENBQUNoQyxLQUFLOzs7Ozs7OEJBQ2pHLDhEQUFDRDs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDNEI7b0JBQU1DLE1BQUs7b0JBQU9DLGFBQVk7b0JBQW9CN0IsT0FBT0c7b0JBQWEyQixVQUFVQyxDQUFBQSxJQUFLM0IsZUFBZTJCLEVBQUVDLE1BQU0sQ0FBQ2hDLEtBQUs7Ozs7Ozs4QkFDbkgsOERBQUNEOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUNrQztvQkFBT0wsTUFBSztvQkFBU0MsYUFBWTtvQkFBZTdCLE9BQU9LO29CQUFReUIsVUFBVUMsQ0FBQUEsSUFBS3pCLFVBQVV5QixFQUFFQyxNQUFNLENBQUNoQyxLQUFLOzhCQUNsR0YsUUFBUW9DLEdBQUcsQ0FBQyxDQUFDQyx1QkFDViw4REFBQ0E7NEJBQU9uQyxPQUFPbUMsT0FBT25DLEtBQUs7c0NBQUdtQyxPQUFPcEMsS0FBSzs7Ozs7Ozs7Ozs7OEJBR2xELDhEQUFDQTs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDa0M7b0JBQU9MLE1BQUs7b0JBQVNDLGFBQVk7b0JBQWlCN0IsT0FBT087b0JBQVV1QixVQUFVQyxDQUFBQSxJQUFLdkIsWUFBWXVCLEVBQUVDLE1BQU0sQ0FBQ2hDLEtBQUs7OEJBQ3hHRixRQUFRb0MsR0FBRyxDQUFDLENBQUNDLHVCQUNWLDhEQUFDQTs0QkFBT25DLE9BQU9tQyxPQUFPbkMsS0FBSztzQ0FBR21DLE9BQU9wQyxLQUFLOzs7Ozs7Ozs7Ozs4QkFHbEQsOERBQUM0QjtvQkFBTUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEIsQ0FBQztHQXhFdUIvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdXBkYXRlLmpzPzI3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGUoKSB7XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogMSxcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAyLFxuICAgICAgICAgICAgdmFsdWU6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IDMsXG4gICAgICAgICAgICB2YWx1ZTogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogNCxcbiAgICAgICAgICAgIHZhbHVlOiA0XG4gICAgICAgIH1cbl07XG5cblxuICAgIGNvbnN0IFt0aXRsZSwgU2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbZGVjc3JpcHRpb24sIFNldERlc2NyaXB0aW9uIF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtzdGF0dXMsIFNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwcmlvcml0eSwgU2V0UHJpb3JpdHldID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgZGVjc3JpcHRpb246IGRlY3NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17ZXZlbnQgPT4gaGFuZGxlU3VibWl0KGV2ZW50KX0+XG4gICAgICAgICAgICA8bGFiZWw+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgdGl0bGVcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtlID0+IFNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbD5EZWNzcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBkZXNjcmlwdGlvblwiIHZhbHVlPXtkZWNzcmlwdGlvbn0gb25DaGFuZ2U9e2UgPT4gU2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGxhYmVsPlN0YXR1czo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBzdGF0dXNcIiB2YWx1ZT17c3RhdHVzfSBvbkNoYW5nZT17ZSA9PiBTZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb24udmFsdWV9PntvcHRpb24ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxsYWJlbD5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBwcmlvcml0eVwiIHZhbHVlPXtwcmlvcml0eX0gb25DaGFuZ2U9e2UgPT4gU2V0UHJpb3JpdHkoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb24udmFsdWV9PntvcHRpb24ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVXBkYXRlIiwib3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJ0aXRsZSIsIlNldFRpdGxlIiwiZGVjc3JpcHRpb24iLCJTZXREZXNjcmlwdGlvbiIsInN0YXR1cyIsIlNldFN0YXR1cyIsInByaW9yaXR5IiwiU2V0UHJpb3JpdHkiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdCIsIm1hcCIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/update.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjacob%2Ftodo-frontend%2Fsrc%2Fpages%2Fupdate.js&page=%2Fupdate!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);