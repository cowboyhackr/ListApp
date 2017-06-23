'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/private/var/git/ListApp/node_modules/expo/src/LinearGradient.ios.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var LinearGradient = (_temp = _class = function (_Component) {
  babelHelpers.inherits(LinearGradient, _Component);

  function LinearGradient() {
    babelHelpers.classCallCheck(this, LinearGradient);
    return babelHelpers.possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
  }

  babelHelpers.createClass(LinearGradient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          colors = _props.colors,
          locations = _props.locations,
          otherProps = babelHelpers.objectWithoutProperties(_props, ['colors', 'locations']);

      if (colors && locations && colors.length !== locations.length) {
        console.warn('LinearGradient colors and locations props should be arrays of the same length');
      }

      return _react2.default.createElement(NativeLinearGradient, babelHelpers.extends({}, otherProps, {
        colors: colors.map(_reactNative.processColor),
        locations: locations ? locations.slice(0, colors.length) : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);
  return LinearGradient;
}(_react.Component), _class.propTypes = babelHelpers.extends({
  start: _react.PropTypes.arrayOf(_react.PropTypes.number),
  end: _react.PropTypes.arrayOf(_react.PropTypes.number),
  colors: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  locations: _react.PropTypes.arrayOf(_react.PropTypes.number)
}, _reactNative.ViewPropTypes), _temp);
exports.default = LinearGradient;


var NativeLinearGradient = (0, _reactNative.requireNativeComponent)('ExponentLinearGradient', null);