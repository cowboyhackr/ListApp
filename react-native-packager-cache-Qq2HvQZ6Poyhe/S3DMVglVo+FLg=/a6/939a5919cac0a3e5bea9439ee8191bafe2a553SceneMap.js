Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/private/var/git/ListApp/node_modules/react-native-tab-view/src/SceneMap.js';
exports.default = SceneMap;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

function SceneMap(scenes) {
  var SceneComponent = function (_PureComponent) {
    babelHelpers.inherits(SceneComponent, _PureComponent);

    function SceneComponent() {
      babelHelpers.classCallCheck(this, SceneComponent);
      return babelHelpers.possibleConstructorReturn(this, (SceneComponent.__proto__ || Object.getPrototypeOf(SceneComponent)).apply(this, arguments));
    }

    babelHelpers.createClass(SceneComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(scenes[this.props.route.key], this.props);
      }
    }]);
    return SceneComponent;
  }(_react.PureComponent);

  return function (_ref) {
    var route = _ref.route;
    return _react2.default.createElement(SceneComponent, { key: route.key, route: route, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    });
  };
}