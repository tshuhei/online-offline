webpackHotUpdate_N_E("pages/target",{

/***/ "./components/TargetForm.js":
/*!**********************************!*\
  !*** ./components/TargetForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var skyway_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! skyway-js */ \"./node_modules/skyway-js/dist/skyway.js\");\n/* harmony import */ var skyway_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(skyway_js__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/shuhei/Examine/online-offline/components/TargetForm.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar TargetForm = /*#__PURE__*/function (_Component) {\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(TargetForm, _Component);\n\n  var _super = _createSuper(TargetForm);\n\n  function TargetForm(props) {\n    var _this;\n\n    Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TargetForm);\n\n    _this = _super.call(this, props);\n    _this.doSubmit = _this.doSubmit.bind(Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.doChange = _this.doChange.bind(Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    console.log(_this.props.username);\n    var peer = new skyway_js__WEBPACK_IMPORTED_MODULE_10___default.a(_this.props.username, {\n      key: '76263a48-cad2-4f85-a676-1da2490a20c9',\n      debug: 3\n    });\n    _this.state = {\n      target: \"\",\n      peer: peer\n    };\n    return _this;\n  }\n\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TargetForm, [{\n    key: \"doSubmit\",\n    value: function doSubmit(e) {\n      e.preventDefault();\n      console.log(\"Target Clicked!\");\n      console.log(this.state.target);\n      var action = {\n        type: \"TARGET\",\n        message: this.state.target,\n        peer: this.state.peer,\n        iscalled: true\n      };\n      this.props.dispatch(action);\n      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(\"/room\");\n    }\n  }, {\n    key: \"doChange\",\n    value: function doChange(e) {\n      this.setState({\n        target: e.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              \"for\": \"target\",\n              children: \"Target User ID:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 25\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              id: \"target\",\n              name: \"target\",\n              onChange: this.doChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"submit\",\n              value: \"Connect\",\n              onClick: this.doSubmit\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return TargetForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nTargetForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(TargetForm);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TargetForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXJnZXRGb3JtLmpzP2QwZWUiXSwibmFtZXMiOlsiVGFyZ2V0Rm9ybSIsInByb3BzIiwiZG9TdWJtaXQiLCJiaW5kIiwiZG9DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJwZWVyIiwiUGVlciIsImtleSIsImRlYnVnIiwic3RhdGUiLCJ0YXJnZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJ0eXBlIiwibWVzc2FnZSIsImlzY2FsbGVkIiwiZGlzcGF0Y2giLCJSb3V0ZXIiLCJwdXNoIiwic2V0U3RhdGUiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFU7Ozs7O0FBRUYsc0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLDBKQUFoQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLDBKQUFoQjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLTCxLQUFMLENBQVdNLFFBQXZCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQUlDLGlEQUFKLENBQVMsTUFBS1IsS0FBTCxDQUFXTSxRQUFwQixFQUE2QjtBQUNwQ0csU0FBRyxFQUFFLHNDQUQrQjtBQUVwQ0MsV0FBSyxFQUFFO0FBRjZCLEtBQTdCLENBQVg7QUFJQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsWUFBTSxFQUFFLEVBREM7QUFFVEwsVUFBSSxFQUFFQTtBQUZHLEtBQWI7QUFUYztBQWFqQjs7Ozs2QkFFUU0sQyxFQUFFO0FBQ1BBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBVixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTSxLQUFMLENBQVdDLE1BQXZCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHO0FBQ1RDLFlBQUksRUFBRSxRQURHO0FBRVRDLGVBQU8sRUFBRSxLQUFLTixLQUFMLENBQVdDLE1BRlg7QUFHVEwsWUFBSSxFQUFFLEtBQUtJLEtBQUwsQ0FBV0osSUFIUjtBQUlUVyxnQkFBUSxFQUFFO0FBSkQsT0FBYjtBQU1BLFdBQUtsQixLQUFMLENBQVdtQixRQUFYLENBQW9CSixNQUFwQjtBQUNBSyx3REFBTSxDQUFDQyxJQUFQLENBQVksT0FBWjtBQUNIOzs7NkJBRVFSLEMsRUFBRTtBQUNQLFdBQUtTLFFBQUwsQ0FBYztBQUNWVixjQUFNLEVBQUVDLENBQUMsQ0FBQ0QsTUFBRixDQUFTVztBQURQLE9BQWQ7QUFHSDs7OzZCQUVPO0FBQ0osMEJBQ0k7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQUEsb0NBQ0k7QUFBTyxxQkFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQUUsRUFBQyxRQUF0QjtBQUErQixrQkFBSSxFQUFDLFFBQXBDO0FBQTZDLHNCQUFRLEVBQUUsS0FBS3BCO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBS0k7QUFBQSxtQ0FDSTtBQUFPLGtCQUFJLEVBQUMsUUFBWjtBQUFxQixtQkFBSyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFPLEVBQUUsS0FBS0Y7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBYUg7Ozs7RUFuRG9CdUIsK0M7O0FBc0R6QnpCLFVBQVUsR0FBRzBCLDJEQUFPLENBQUMsVUFBQ2QsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JaLFVBQXhCLENBQWI7QUFDZUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhcmdldEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBlZXIgZnJvbSAnc2t5d2F5LWpzJztcblxuXG5jbGFzcyBUYXJnZXRGb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZG9TdWJtaXQgPSB0aGlzLmRvU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9DaGFuZ2UgPSB0aGlzLmRvQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlcm5hbWUpO1xuICAgICAgICBsZXQgcGVlciA9IG5ldyBQZWVyKHRoaXMucHJvcHMudXNlcm5hbWUse1xuICAgICAgICAgICAga2V5OiAnNzYyNjNhNDgtY2FkMi00Zjg1LWE2NzYtMWRhMjQ5MGEyMGM5JyxcbiAgICAgICAgICAgIGRlYnVnOiAzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJcIixcbiAgICAgICAgICAgIHBlZXI6IHBlZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvU3VibWl0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFyZ2V0IENsaWNrZWQhXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRhcmdldCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBcIlRBUkdFVFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS50YXJnZXQsXG4gICAgICAgICAgICBwZWVyOiB0aGlzLnN0YXRlLnBlZXIsXG4gICAgICAgICAgICBpc2NhbGxlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvcm9vbVwiKTtcbiAgICB9XG5cbiAgICBkb0NoYW5nZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFyZ2V0XCI+VGFyZ2V0IFVzZXIgSUQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFyZ2V0XCIgbmFtZT1cInRhcmdldFwiIG9uQ2hhbmdlPXt0aGlzLmRvQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbm5lY3RcIiBvbkNsaWNrPXt0aGlzLmRvU3VibWl0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGFyZ2V0Rm9ybSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKFRhcmdldEZvcm0pO1xuZXhwb3J0IGRlZmF1bHQgVGFyZ2V0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TargetForm.js\n");

/***/ })

})