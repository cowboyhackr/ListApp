Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/private/var/git/ListApp/node_modules/react-navigation/src/navigators/createNavigator.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var createNavigator = function createNavigator(router, routeConfigs, navigatorConfig, navigatorType) {
  return function (View) {
    var _class, _temp;

    var Navigator = (_temp = _class = function (_React$Component) {
      babelHelpers.inherits(Navigator, _React$Component);

      function Navigator() {
        babelHelpers.classCallCheck(this, Navigator);
        return babelHelpers.possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).apply(this, arguments));
      }

      babelHelpers.createClass(Navigator, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(View, babelHelpers.extends({}, this.props, { router: router, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }));
        }
      }]);
      return Navigator;
    }(_react2.default.Component), _class.router = router, _class.routeConfigs = routeConfigs, _class.navigatorConfig = navigatorConfig, _class.navigatorType = navigatorType, _temp);


    return Navigator;
  };
};

exports.default = createNavigator;