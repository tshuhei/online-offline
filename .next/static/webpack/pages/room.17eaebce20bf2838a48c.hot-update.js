webpackHotUpdate_N_E("pages/room",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/shuhei/Examine/online-offline/components/Room.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Room = /*#__PURE__*/function (_Component) {\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Room, _Component);\n\n  var _super = _createSuper(Room);\n\n  function Room(props) {\n    var _this;\n\n    Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Room);\n\n    _this = _super.call(this, props);\n    initializeScreenShare();\n\n    if (_this.props.iscalled) {\n      makeCall();\n    } else {\n      respondCall();\n    }\n\n    return _this;\n  }\n\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Room, [{\n    key: \"initializeScreenShare\",\n    value: function initializeScreenShare() {\n      var _this2 = this;\n\n      navigator.mediaDevices.getDisplayMedia({\n        video: true\n      }).then(function (stream) {\n        //const videoElm = document.getElementById(\"my-video\");\n        //videoElm.srcObject = stream;\n        //videoElm.play();\n        _this2.setState({\n          localStream: stream\n        });\n      })[\"catch\"](function (error) {\n        console.log(\"mediaDevice.getDisplayMedia() error:\", error);\n        return;\n      });\n    }\n  }, {\n    key: \"makeCall\",\n    value: function makeCall() {\n      console.log(\"Make Call!\");\n    }\n  }, {\n    key: \"respondCall\",\n    value: function respondCall() {\n      console.log(\"Respond Call\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"This is room\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Room;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\nRoom = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (state) {\n  return state;\n})(Room);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzPzI4NzkiXSwibmFtZXMiOlsiUm9vbSIsInByb3BzIiwiaW5pdGlhbGl6ZVNjcmVlblNoYXJlIiwiaXNjYWxsZWQiLCJtYWtlQ2FsbCIsInJlc3BvbmRDYWxsIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0RGlzcGxheU1lZGlhIiwidmlkZW8iLCJ0aGVuIiwic3RyZWFtIiwic2V0U3RhdGUiLCJsb2NhbFN0cmVhbSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFHTUEsSTs7Ozs7QUFFRixnQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0FDLHlCQUFxQjs7QUFDckIsUUFBRyxNQUFLRCxLQUFMLENBQVdFLFFBQWQsRUFBdUI7QUFDbkJDLGNBQVE7QUFDWCxLQUZELE1BRUs7QUFDREMsaUJBQVc7QUFDZDs7QUFQYTtBQVFqQjs7Ozs0Q0FFc0I7QUFBQTs7QUFDbkJDLGVBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsZUFBdkIsQ0FBdUM7QUFBQ0MsYUFBSyxFQUFFO0FBQVIsT0FBdkMsRUFDQ0MsSUFERCxDQUNPLFVBQUFDLE1BQU0sRUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZDLHFCQUFXLEVBQUVGO0FBREgsU0FBZDtBQUdILE9BUkQsV0FRVSxVQUFBRyxLQUFLLEVBQUc7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVksc0NBQVosRUFBb0RGLEtBQXBEO0FBQ0E7QUFDSCxPQVhEO0FBWUg7OzsrQkFFUztBQUNOQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0g7OztrQ0FFWTtBQUNURCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7Ozs2QkFFTztBQUNKLDBCQUNJO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFLSDs7OztFQXpDY0MsK0M7O0FBNENuQmpCLElBQUksR0FBR2tCLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JuQixJQUF4QixDQUFQO0FBQ2VBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Sb29tLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5jbGFzcyBSb29tIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGluaXRpYWxpemVTY3JlZW5TaGFyZSgpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmlzY2FsbGVkKXtcbiAgICAgICAgICAgIG1ha2VDYWxsKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzcG9uZENhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemVTY3JlZW5TaGFyZSgpe1xuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYSh7dmlkZW86IHRydWV9KVxuICAgICAgICAudGhlbiggc3RyZWFtID0+IHtcbiAgICAgICAgICAgIC8vY29uc3QgdmlkZW9FbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LXZpZGVvXCIpO1xuICAgICAgICAgICAgLy92aWRlb0VsbS5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgICAvL3ZpZGVvRWxtLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvY2FsU3RyZWFtOiBzdHJlYW0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goIGVycm9yID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZWRpYURldmljZS5nZXREaXNwbGF5TWVkaWEoKSBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1ha2VDYWxsKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBDYWxsIVwiKTtcbiAgICB9XG5cbiAgICByZXNwb25kQ2FsbCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbmQgQ2FsbFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyByb29tPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Sb29tID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoUm9vbSk7XG5leHBvcnQgZGVmYXVsdCBSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Room.js\n");

/***/ })

})