var _class,
    _temp,
    _jsxFileName = '/private/var/git/ListApp/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var HomeScreen = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(HomeScreen, _React$Component);

  function HomeScreen() {
    babelHelpers.classCallCheck(this, HomeScreen);
    return babelHelpers.possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).apply(this, arguments));
  }

  babelHelpers.createClass(HomeScreen, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'Hello, Navigation!'
      );
    }
  }]);
  return HomeScreen;
}(_react2.default.Component), _class.navigationOptions = {
  title: 'Welcome'
}, _temp);


var SimpleApp = (0, _reactNavigation.StackNavigator)({
  Home: { screen: HomeScreen }
});