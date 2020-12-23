webpackHotUpdate(5,{

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(906);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(726);

var _Layout = __webpack_require__(1464);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rufat/Desktop/L2_Sem2/Blockchain/kickstart/pages/index.js?entry';
// import 'semantic-ui-css/semantic.min.css';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, 'view campaign'),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }); // 2nd items is const one
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('link', {
                async: true,
                rel: 'stylesheet'
                // href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
                , href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Open Campaigns'), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployed().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQU07O0FBRWYsQUFBTyxBQUFhOzs7Ozs7O0FBRHBCOzs7SSxBQUdNOzs7Ozs7Ozs7Ozs7Z0JBVVEsYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFGVixBQUVVLEFBQ2I7MkJBSEosQUFBTyxBQUdJLEFBRWQ7QUFMVSxBQUNIO0FBRlIsQUFBYyxBQVFkLGFBUmM7O2lEQVFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBcUI7OEJBQXJCO2dDQVRPLEFBU2QsQUFBTztBQUFBO2FBQUEsRUFUTyxBQUNkLENBUXdDLEFBQzNDOzs7O2lDQUVRLEFBQ0w7bUNBQ1ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQTt1QkFDSSxBQUVJO3FCQUFJLEFBQ0o7QUFISjtBQUNJLGtCQUdBLE1BSkosQUFJUzs7OEJBSlQ7Z0NBREosQUFDSSxBQU9BO0FBUEE7Z0NBT0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUkosQUFRSSxBQUNDLHdCQVRMLEFBU0ssQUFBSyxBQUVOLG1DQUFBLEFBQUM7eUJBQUQsQUFDWSxBQUNSO3NCQUZKLEFBRVMsQUFDTDt5QkFISjs7OEJBQUE7Z0NBYnBCLEFBQ1ksQUFDSSxBQVdJLEFBUXZCO0FBUnVCO0FBQ0k7Ozs7Ozs7Ozs7Ozt1Q0FqQ0Esa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGMsQUFBaEIsQUFBOEI7O2lDQUFoRDtBO2lFQUdDLEVBQUUsVyxBQUFGLEFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QzVCLEEsQUE5QzRCOztrQkE4QzVCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVmYXQvRGVza3RvcC9MMl9TZW0yL0Jsb2NrY2hhaW4va2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/rufat/Desktop/L2_Sem2/Blockchain/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/rufat/Desktop/L2_Sem2/Blockchain/kickstart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kODViYTFlNTM1Zjg3MDQ3NzE2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTQ0NWY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuLy8gaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWQoKS5jYWxsKCk7XG5cblxuICAgICAgICByZXR1cm4geyBjYW1wYWlnbnM6IGNhbXBhaWduc307XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8YT52aWV3IGNhbXBhaWduPC9hPixcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zID0ge2l0ZW1zfSAvPjsgIC8vIDJuZCBpdGVtcyBpcyBjb25zdCBvbmVcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gICggICBcbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQCR7cHJvcHMudmVyc2lvbnMuc3VpfS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVdBOztBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUhBO0FBQ0E7O0FBREE7QUFPQTtBQVBBO0FBT0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBSEE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWpDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==