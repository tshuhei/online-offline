webpackHotUpdate_N_E("pages/target",{

/***/ "./components/TargetForm.js":
/*!**********************************!*\
  !*** ./components/TargetForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var skyway_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! skyway-js */ \"./node_modules/skyway-js/dist/skyway.js\");\n/* harmony import */ var skyway_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(skyway_js__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/shuhei/Examine/online-offline/components/TargetForm.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar TargetForm = /*#__PURE__*/function (_Component) {\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(TargetForm, _Component);\n\n  var _super = _createSuper(TargetForm);\n\n  function TargetForm(props) {\n    var _this;\n\n    Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TargetForm);\n\n    _this = _super.call(this, props);\n    _this.doSubmit = _this.doSubmit.bind(Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.doChange = _this.doChange.bind(Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    console.log(_this.props.username);\n    var peer = new skyway_js__WEBPACK_IMPORTED_MODULE_10___default.a(_this.props.username, {\n      key: '76263a48-cad2-4f85-a676-1da2490a20c9',\n      debug: 3\n    });\n    peer.on(\"call\", function (mediaConnection) {\n      mediaConnection.answer(null);\n      var action = {\n        type: \"TARGET\",\n        message: mediaConnection.peer,\n        peer: _this.state.peer,\n        iscalled: false,\n        mediaConnection: mediaConnection\n      };\n\n      _this.props.dispatch(action);\n\n      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(\"/room\");\n    });\n    peer.on(\"error\", function (error) {\n      console.log(\"\".concat(error.type, \": \").concat(error.message));\n      alert(\"\".concat(error.type, \": \").concat(error.message));\n      return false;\n    });\n    _this.state = {\n      target: \"\",\n      peer: peer\n    };\n    return _this;\n  }\n\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TargetForm, [{\n    key: \"doSubmit\",\n    value: function doSubmit(e) {\n      e.preventDefault();\n      var mediaConnection = this.state.peer.call(this.state.target, null);\n      var action = {\n        type: \"TARGET\",\n        message: this.state.target,\n        peer: this.state.peer,\n        iscalled: true,\n        mediaConnection: mediaConnection\n      };\n      this.props.dispatch(action);\n      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(\"/room\");\n    }\n  }, {\n    key: \"doChange\",\n    value: function doChange(e) {\n      this.setState({\n        target: e.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          method: \"post\",\n          onSubmit: \"return doSubmit(e)\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              \"for\": \"target\",\n              children: \"Target User ID:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 25\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              id: \"target\",\n              name: \"target\",\n              onChange: this.doChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"submit\",\n              value: \"Connect\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return TargetForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nTargetForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(TargetForm);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TargetForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXJnZXRGb3JtLmpzP2QwZWUiXSwibmFtZXMiOlsiVGFyZ2V0Rm9ybSIsInByb3BzIiwiZG9TdWJtaXQiLCJiaW5kIiwiZG9DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJwZWVyIiwiUGVlciIsImtleSIsImRlYnVnIiwib24iLCJtZWRpYUNvbm5lY3Rpb24iLCJhbnN3ZXIiLCJhY3Rpb24iLCJ0eXBlIiwibWVzc2FnZSIsInN0YXRlIiwiaXNjYWxsZWQiLCJkaXNwYXRjaCIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImFsZXJ0IiwidGFyZ2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2FsbCIsInNldFN0YXRlIiwidmFsdWUiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwwSkFBaEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCwwSkFBaEI7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBS0wsS0FBTCxDQUFXTSxRQUF2QjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFJQyxpREFBSixDQUFTLE1BQUtSLEtBQUwsQ0FBV00sUUFBcEIsRUFBNkI7QUFDcENHLFNBQUcsRUFBRSxzQ0FEK0I7QUFFcENDLFdBQUssRUFBRTtBQUY2QixLQUE3QixDQUFYO0FBSUFILFFBQUksQ0FBQ0ksRUFBTCxDQUFRLE1BQVIsRUFBZSxVQUFBQyxlQUFlLEVBQUk7QUFDOUJBLHFCQUFlLENBQUNDLE1BQWhCLENBQXVCLElBQXZCO0FBQ0EsVUFBSUMsTUFBTSxHQUFHO0FBQ1RDLFlBQUksRUFBRSxRQURHO0FBRVRDLGVBQU8sRUFBRUosZUFBZSxDQUFDTCxJQUZoQjtBQUdUQSxZQUFJLEVBQUUsTUFBS1UsS0FBTCxDQUFXVixJQUhSO0FBSVRXLGdCQUFRLEVBQUUsS0FKRDtBQUtUTix1QkFBZSxFQUFFQTtBQUxSLE9BQWI7O0FBT0EsWUFBS1osS0FBTCxDQUFXbUIsUUFBWCxDQUFvQkwsTUFBcEI7O0FBQ0FNLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0gsS0FYRDtBQVlBZCxRQUFJLENBQUNJLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQUNXLEtBQUQsRUFBVztBQUN4QmxCLGFBQU8sQ0FBQ0MsR0FBUixXQUFlaUIsS0FBSyxDQUFDUCxJQUFyQixlQUE4Qk8sS0FBSyxDQUFDTixPQUFwQztBQUNBTyxXQUFLLFdBQUlELEtBQUssQ0FBQ1AsSUFBVixlQUFtQk8sS0FBSyxDQUFDTixPQUF6QixFQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0QsS0FKSDtBQUtBLFVBQUtDLEtBQUwsR0FBYTtBQUNUTyxZQUFNLEVBQUUsRUFEQztBQUVUakIsVUFBSSxFQUFFQTtBQUZHLEtBQWI7QUExQmM7QUE4QmpCOzs7OzZCQUVRa0IsQyxFQUFFO0FBQ1BBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1kLGVBQWUsR0FBRyxLQUFLSyxLQUFMLENBQVdWLElBQVgsQ0FBZ0JvQixJQUFoQixDQUFxQixLQUFLVixLQUFMLENBQVdPLE1BQWhDLEVBQXVDLElBQXZDLENBQXhCO0FBQ0EsVUFBSVYsTUFBTSxHQUFHO0FBQ1RDLFlBQUksRUFBRSxRQURHO0FBRVRDLGVBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdPLE1BRlg7QUFHVGpCLFlBQUksRUFBRSxLQUFLVSxLQUFMLENBQVdWLElBSFI7QUFJVFcsZ0JBQVEsRUFBRSxJQUpEO0FBS1ROLHVCQUFlLEVBQUVBO0FBTFIsT0FBYjtBQU9BLFdBQUtaLEtBQUwsQ0FBV21CLFFBQVgsQ0FBb0JMLE1BQXBCO0FBQ0FNLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0g7Ozs2QkFFUUksQyxFQUFFO0FBQ1AsV0FBS0csUUFBTCxDQUFjO0FBQ1ZKLGNBQU0sRUFBRUMsQ0FBQyxDQUFDRCxNQUFGLENBQVNLO0FBRFAsT0FBZDtBQUdIOzs7NkJBRU87QUFDSiwwQkFDSTtBQUFBLCtCQUNJO0FBQU0sZ0JBQU0sRUFBQyxNQUFiO0FBQW9CLGtCQUFRLEVBQUMsb0JBQTdCO0FBQUEsa0NBQ0k7QUFBQSxvQ0FDSTtBQUFPLHFCQUFJLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBRSxFQUFDLFFBQXRCO0FBQStCLGtCQUFJLEVBQUMsUUFBcEM7QUFBNkMsc0JBQVEsRUFBRSxLQUFLMUI7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFLSTtBQUFBLG1DQUNJO0FBQU8sa0JBQUksRUFBQyxRQUFaO0FBQXFCLG1CQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBYUg7Ozs7RUFwRW9CMkIsK0M7O0FBdUV6Qi9CLFVBQVUsR0FBR2dDLDJEQUFPLENBQUMsVUFBQ2QsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JsQixVQUF4QixDQUFiO0FBQ2VBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYXJnZXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQZWVyIGZyb20gJ3NreXdheS1qcyc7XG5cblxuY2xhc3MgVGFyZ2V0Rm9ybSBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmRvU3VibWl0ID0gdGhpcy5kb1N1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvQ2hhbmdlID0gdGhpcy5kb0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnVzZXJuYW1lKTtcbiAgICAgICAgbGV0IHBlZXIgPSBuZXcgUGVlcih0aGlzLnByb3BzLnVzZXJuYW1lLHtcbiAgICAgICAgICAgIGtleTogJzc2MjYzYTQ4LWNhZDItNGY4NS1hNjc2LTFkYTI0OTBhMjBjOScsXG4gICAgICAgICAgICBkZWJ1ZzogMyxcbiAgICAgICAgfSk7XG4gICAgICAgIHBlZXIub24oXCJjYWxsXCIsbWVkaWFDb25uZWN0aW9uID0+IHtcbiAgICAgICAgICAgIG1lZGlhQ29ubmVjdGlvbi5hbnN3ZXIobnVsbCk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFSR0VUXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVkaWFDb25uZWN0aW9uLnBlZXIsXG4gICAgICAgICAgICAgICAgcGVlcjogdGhpcy5zdGF0ZS5wZWVyLFxuICAgICAgICAgICAgICAgIGlzY2FsbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZWRpYUNvbm5lY3Rpb246IG1lZGlhQ29ubmVjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvcm9vbVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBlZXIub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2Vycm9yLnR5cGV9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICBhbGVydChgJHtlcnJvci50eXBlfTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiBcIlwiLFxuICAgICAgICAgICAgcGVlcjogcGVlclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9TdWJtaXQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVkaWFDb25uZWN0aW9uID0gdGhpcy5zdGF0ZS5wZWVyLmNhbGwodGhpcy5zdGF0ZS50YXJnZXQsbnVsbCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBcIlRBUkdFVFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS50YXJnZXQsXG4gICAgICAgICAgICBwZWVyOiB0aGlzLnN0YXRlLnBlZXIsXG4gICAgICAgICAgICBpc2NhbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lZGlhQ29ubmVjdGlvbjogbWVkaWFDb25uZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9yb29tXCIpO1xuICAgIH1cblxuICAgIGRvQ2hhbmdlKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9XCJyZXR1cm4gZG9TdWJtaXQoZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXJnZXRcIj5UYXJnZXQgVXNlciBJRDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXJnZXRcIiBuYW1lPVwidGFyZ2V0XCIgb25DaGFuZ2U9e3RoaXMuZG9DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ29ubmVjdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYXJnZXRGb3JtID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoVGFyZ2V0Rm9ybSk7XG5leHBvcnQgZGVmYXVsdCBUYXJnZXRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TargetForm.js\n");

/***/ })

})