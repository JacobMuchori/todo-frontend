"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_registration.js":
/*!************************************!*\
  !*** ./src/pages/_registration.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Registration() {\n    _s();\n    const [user_name, SetUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, SetEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, SetPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Please create your username\",\n                    value: user_name,\n                    onChange: (e)=>SetUsername(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/_registration.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Please create your username\",\n                    value: email,\n                    onChange: (e)=>SetEmail(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/_registration.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: password,\n                    onChange: (e)=>SetPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/_registration.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"/home/jacob/todo-frontend/src/pages/_registration.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jacob/todo-frontend/src/pages/_registration.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jacob/todo-frontend/src/pages/_registration.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(Registration, \"MR9Jmn+OgovL1T3NJw4aSKMde1Q=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX3JlZ2lzdHJhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBRWpCLFNBQVNDLGVBQWU7O0lBRW5DLE1BQU0sQ0FBQ0MsV0FBV0MsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMxQyxNQUFNLENBQUNJLE9BQU9DLFNBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNJLDhEQUFDUTtrQkFDRCw0RUFBQ0M7OzhCQUNHLDhEQUFDQztvQkFBTUMsTUFBSztvQkFBT0MsYUFBWTtvQkFBOEJDLE9BQU9YO29CQUFXWSxVQUFVQyxDQUFBQSxJQUFLWixZQUFZWSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4QkFDeEgsOERBQUNIO29CQUFNQyxNQUFLO29CQUFPQyxhQUFZO29CQUE2QkMsT0FBT1Q7b0JBQU9VLFVBQVVDLENBQUFBLElBQUtWLFNBQVNVLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzhCQUNoSCw4REFBQ0g7b0JBQU1DLE1BQUs7b0JBQU9FLE9BQU9QO29CQUFVUSxVQUFVQyxDQUFBQSxJQUFLUixZQUFZUSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4QkFDN0UsOERBQUNIO29CQUFNQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QixDQUFDO0dBaEJ1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19yZWdpc3RyYXRpb24uanM/NTE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbigpIHtcblxuICAgIGNvbnN0IFt1c2VyX25hbWUsIFNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2VtYWlsLCBTZXRFbWFpbCBdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcGFzc3dvcmQsIFNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBjcmVhdGUgeW91ciB1c2VybmFtZVwiIHZhbHVlPXt1c2VyX25hbWV9IG9uQ2hhbmdlPXtlID0+IFNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGNyZWF0ZSB5b3VyIHVzZXJuYW1lXCJ2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IFNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gU2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWdpc3RyYXRpb24iLCJ1c2VyX25hbWUiLCJTZXRVc2VybmFtZSIsImVtYWlsIiwiU2V0RW1haWwiLCJwYXNzd29yZCIsIlNldFBhc3N3b3JkIiwiZGl2IiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_registration.js\n"));

/***/ })

});