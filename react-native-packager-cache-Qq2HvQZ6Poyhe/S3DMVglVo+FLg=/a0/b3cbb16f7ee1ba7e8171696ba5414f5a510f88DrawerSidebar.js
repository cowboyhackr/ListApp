Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/private/var/git/ListApp/node_modules/react-navigation/src/views/Drawer/DrawerSidebar.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _withCachedChildNavigation = require('../../withCachedChildNavigation');

var _withCachedChildNavigation2 = babelHelpers.interopRequireDefault(_withCachedChildNavigation);

var DrawerSidebar = function (_PureComponent) {
  babelHelpers.inherits(DrawerSidebar, _PureComponent);

  function DrawerSidebar() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, DrawerSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = DrawerSidebar.__proto__ || Object.getPrototypeOf(DrawerSidebar)).call.apply(_ref, [this].concat(args))), _this), _this._getScreenOptions = function (routeKey) {
      var DrawerScreen = _this.props.router.getComponentForRouteName('DrawerClose');
      return DrawerScreen.router.getScreenOptions(_this.props.childNavigationProps[routeKey], _this.props.screenProps);
    }, _this._getLabel = function (_ref2) {
      var focused = _ref2.focused,
          tintColor = _ref2.tintColor,
          route = _ref2.route;

      var _this$_getScreenOptio = _this._getScreenOptions(route.key),
          drawerLabel = _this$_getScreenOptio.drawerLabel,
          title = _this$_getScreenOptio.title;

      if (drawerLabel) {
        return typeof drawerLabel === 'function' ? drawerLabel({ tintColor: tintColor, focused: focused }) : drawerLabel;
      }

      if (typeof title === 'string') {
        return title;
      }

      return route.routeName;
    }, _this._renderIcon = function (_ref3) {
      var focused = _ref3.focused,
          tintColor = _ref3.tintColor,
          route = _ref3.route;

      var _this$_getScreenOptio2 = _this._getScreenOptions(route.key),
          drawerIcon = _this$_getScreenOptio2.drawerIcon;

      if (drawerIcon) {
        return typeof drawerIcon === 'function' ? drawerIcon({ tintColor: tintColor, focused: focused }) : drawerIcon;
      }
      return null;
    }, _this._onItemPress = function (_ref4) {
      var route = _ref4.route;

      _this.props.navigation.navigate('DrawerClose');
      _this.props.navigation.navigate(route.routeName);
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(DrawerSidebar, [{
    key: 'render',
    value: function render() {
      var ContentComponent = this.props.contentComponent;
      var state = this.props.navigation.state;

      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container, this.props.style], __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        },
        _react2.default.createElement(ContentComponent, babelHelpers.extends({}, this.props.contentOptions, {
          navigation: this.props.navigation,
          items: state.routes,
          activeItemKey: state.routes[state.index] && state.routes[state.index].key,
          screenProps: this.props.screenProps,
          getLabel: this._getLabel,
          renderIcon: this._renderIcon,
          onItemPress: this._onItemPress,
          router: this.props.router,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }))
      );
    }
  }]);
  return DrawerSidebar;
}(_react.PureComponent);

exports.default = (0, _withCachedChildNavigation2.default)(DrawerSidebar);


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});