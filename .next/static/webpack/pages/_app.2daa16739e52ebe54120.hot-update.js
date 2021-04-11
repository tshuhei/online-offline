webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\nvar initial = {\n  username: \"\",\n  target: \"\",\n  peer: null\n};\n\nfunction connectionReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"CREATE\":\n      return {\n        username: action.message,\n        target: state.target,\n        peer: state.peer\n      };\n\n    case \"TARGET\":\n      return {\n        username: state.username,\n        target: action.message,\n        peer: action.peer\n      };\n\n    default:\n      return state;\n  }\n}\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(connectionReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJwZWVyIiwiY29ubmVjdGlvblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtZXNzYWdlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxVQUFRLEVBQUUsRUFERTtBQUVaQyxRQUFNLEVBQUUsRUFGSTtBQUdaQyxNQUFJLEVBQUU7QUFITSxDQUFoQjs7QUFNQSxTQUFTQyxpQkFBVCxHQUFtRDtBQUFBLE1BQXhCQyxLQUF3Qix1RUFBaEJMLE9BQWdCO0FBQUEsTUFBUE0sTUFBTzs7QUFDL0MsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxRQUFMO0FBQ0ksYUFBTTtBQUNGTixnQkFBUSxFQUFFSyxNQUFNLENBQUNFLE9BRGY7QUFFRk4sY0FBTSxFQUFFRyxLQUFLLENBQUNILE1BRlo7QUFHRkMsWUFBSSxFQUFFRSxLQUFLLENBQUNGO0FBSFYsT0FBTjs7QUFLSixTQUFLLFFBQUw7QUFDSSxhQUFNO0FBQ0ZGLGdCQUFRLEVBQUVJLEtBQUssQ0FBQ0osUUFEZDtBQUVGQyxjQUFNLEVBQUVJLE1BQU0sQ0FBQ0UsT0FGYjtBQUdGTCxZQUFJLEVBQUVHLE1BQU0sQ0FBQ0g7QUFIWCxPQUFOOztBQUtKO0FBQ0ksYUFBT0UsS0FBUDtBQWRSO0FBZ0JIOztBQUVNLFNBQVNJLFNBQVQsR0FBbUM7QUFBQSxNQUFoQkosS0FBZ0IsdUVBQVJMLE9BQVE7QUFDdEMsU0FBT1UseURBQVcsQ0FBQ04saUJBQUQsRUFBbUJDLEtBQW5CLEVBQXlCTSw2REFBZSxDQUFDQyxtREFBRCxDQUF4QyxDQUFsQjtBQUNIIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuY29uc3QgaW5pdGlhbCA9IHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICB0YXJnZXQ6IFwiXCIsXG4gICAgcGVlcjogbnVsbFxufVxuXG5mdW5jdGlvbiBjb25uZWN0aW9uUmVkdWNlcihzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbil7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBcIkNSRUFURVwiOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICAgICAgICBwZWVyOiBzdGF0ZS5wZWVyXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiVEFSR0VUXCI6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHN0YXRlLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHRhcmdldDogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgcGVlcjogYWN0aW9uLnBlZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKXtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoY29ubmVjdGlvblJlZHVjZXIsc3RhdGUsYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})