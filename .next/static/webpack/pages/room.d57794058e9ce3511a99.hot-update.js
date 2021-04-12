webpackHotUpdate_N_E("pages/room",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/shuhei/Examine/online-offline/components/Room.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Room = /*#__PURE__*/function (_Component) {\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Room, _Component);\n\n  var _super = _createSuper(Room);\n\n  function Room(props) {\n    var _this;\n\n    Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Room);\n\n    _this = _super.call(this, props);\n\n    _this.initializeScreenShare();\n\n    if (_this.props.iscalled) {\n      _this.makeCall();\n    } else {\n      _this.respondCall();\n    }\n\n    return _this;\n  }\n\n  Object(_Users_shuhei_Examine_online_offline_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Room, [{\n    key: \"initializeScreenShare\",\n    value: function initializeScreenShare() {\n      var _this2 = this;\n\n      navigator.mediaDevices.getDisplayMedia({\n        video: true\n      }).then(function (stream) {\n        //const videoElm = document.getElementById(\"my-video\");\n        //videoElm.srcObject = stream;\n        //videoElm.play();\n        _this2.setState({\n          localStream: stream\n        });\n\n        _this2.props.mediaConnection.replaceStream(stream);\n      })[\"catch\"](function (error) {\n        console.log(\"mediaDevice.getDisplayMedia() error:\", error);\n        return;\n      });\n      this.props.mediaConnection.on('stream', function (stream) {\n        // video要素にカメラ映像をセットして再生\n        var videoElm = document.getElementById('target-video');\n        videoElm.srcObject = stream;\n        videoElm.play();\n      });\n    }\n  }, {\n    key: \"makeCall\",\n    value: function makeCall() {\n      console.log(\"Make Call!\");\n    }\n  }, {\n    key: \"respondCall\",\n    value: function respondCall() {\n      console.log(\"Respond Call\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"This is room\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n          id: \"target-video\",\n          width: \"400px\",\n          autoplay: true,\n          muted: true,\n          playsinline: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Room;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\nRoom = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (state) {\n  return state;\n})(Room);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLmpzPzI4NzkiXSwibmFtZXMiOlsiUm9vbSIsInByb3BzIiwiaW5pdGlhbGl6ZVNjcmVlblNoYXJlIiwiaXNjYWxsZWQiLCJtYWtlQ2FsbCIsInJlc3BvbmRDYWxsIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0RGlzcGxheU1lZGlhIiwidmlkZW8iLCJ0aGVuIiwic3RyZWFtIiwic2V0U3RhdGUiLCJsb2NhbFN0cmVhbSIsIm1lZGlhQ29ubmVjdGlvbiIsInJlcGxhY2VTdHJlYW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvbiIsInZpZGVvRWxtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyY09iamVjdCIsInBsYXkiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBR01BLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFDQSxVQUFLQyxxQkFBTDs7QUFDQSxRQUFHLE1BQUtELEtBQUwsQ0FBV0UsUUFBZCxFQUF1QjtBQUNuQixZQUFLQyxRQUFMO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsWUFBS0MsV0FBTDtBQUNIOztBQVBhO0FBUWpCOzs7OzRDQUVzQjtBQUFBOztBQUNuQkMsZUFBUyxDQUFDQyxZQUFWLENBQXVCQyxlQUF2QixDQUF1QztBQUFDQyxhQUFLLEVBQUU7QUFBUixPQUF2QyxFQUNDQyxJQURELENBQ08sVUFBQUMsTUFBTSxFQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFDVkMscUJBQVcsRUFBRUY7QUFESCxTQUFkOztBQUdBLGNBQUksQ0FBQ1YsS0FBTCxDQUFXYSxlQUFYLENBQTJCQyxhQUEzQixDQUF5Q0osTUFBekM7QUFDSCxPQVRELFdBU1UsVUFBQUssS0FBSyxFQUFHO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaLEVBQW9ERixLQUFwRDtBQUNBO0FBQ0gsT0FaRDtBQWFBLFdBQUtmLEtBQUwsQ0FBV2EsZUFBWCxDQUEyQkssRUFBM0IsQ0FBOEIsUUFBOUIsRUFBd0MsVUFBQVIsTUFBTSxFQUFJO0FBQzlDO0FBQ0EsWUFBTVMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBakI7QUFDQUYsZ0JBQVEsQ0FBQ0csU0FBVCxHQUFxQlosTUFBckI7QUFDQVMsZ0JBQVEsQ0FBQ0ksSUFBVDtBQUNILE9BTEQ7QUFNSDs7OytCQUVTO0FBQ05QLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDSDs7O2tDQUVZO0FBQ1RELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDSDs7OzZCQUVPO0FBQ0osMEJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU8sWUFBRSxFQUFDLGNBQVY7QUFBeUIsZUFBSyxFQUFDLE9BQS9CO0FBQXVDLGtCQUFRLE1BQS9DO0FBQWdELGVBQUssTUFBckQ7QUFBc0QscUJBQVc7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQU1IOzs7O0VBakRjTywrQzs7QUFvRG5CekIsSUFBSSxHQUFHMEIsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QjNCLElBQXhCLENBQVA7QUFDZUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmNsYXNzIFJvb20gZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2NyZWVuU2hhcmUoKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc2NhbGxlZCl7XG4gICAgICAgICAgICB0aGlzLm1ha2VDYWxsKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5yZXNwb25kQ2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZVNjcmVlblNoYXJlKCl7XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKHt2aWRlbzogdHJ1ZX0pXG4gICAgICAgIC50aGVuKCBzdHJlYW0gPT4ge1xuICAgICAgICAgICAgLy9jb25zdCB2aWRlb0VsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktdmlkZW9cIik7XG4gICAgICAgICAgICAvL3ZpZGVvRWxtLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgIC8vdmlkZW9FbG0ucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9jYWxTdHJlYW06IHN0cmVhbSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5tZWRpYUNvbm5lY3Rpb24ucmVwbGFjZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICB9KS5jYXRjaCggZXJyb3IgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lZGlhRGV2aWNlLmdldERpc3BsYXlNZWRpYSgpIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMubWVkaWFDb25uZWN0aW9uLm9uKCdzdHJlYW0nLCBzdHJlYW0gPT4ge1xuICAgICAgICAgICAgLy8gdmlkZW/opoHntKDjgavjgqvjg6Hjg6nmmKDlg4/jgpLjgrvjg4Pjg4jjgZfjgablho3nlJ9cbiAgICAgICAgICAgIGNvbnN0IHZpZGVvRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldC12aWRlbycpO1xuICAgICAgICAgICAgdmlkZW9FbG0uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgICAgdmlkZW9FbG0ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlQ2FsbCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1ha2UgQ2FsbCFcIik7XG4gICAgfVxuXG4gICAgcmVzcG9uZENhbGwoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25kIENhbGxcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgcm9vbTwvcD5cbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJ0YXJnZXQtdmlkZW9cIiB3aWR0aD1cIjQwMHB4XCIgYXV0b3BsYXkgbXV0ZWQgcGxheXNpbmxpbmU+PC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUm9vbSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKFJvb20pO1xuZXhwb3J0IGRlZmF1bHQgUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Room.js\n");

/***/ })

})