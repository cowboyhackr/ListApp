Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/private/var/git/ListApp/node_modules/react-navigation/src/views/Drawer/DrawerNavigatorItems.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TouchableItem = require('../TouchableItem');

var _TouchableItem2 = babelHelpers.interopRequireDefault(_TouchableItem);

var DrawerNavigatorItems = function DrawerNavigatorItems(_ref) {
  var _ref$navigation = _ref.navigation,
      state = _ref$navigation.state,
      navigate = _ref$navigation.navigate,
      items = _ref.items,
      activeItemKey = _ref.activeItemKey,
      activeTintColor = _ref.activeTintColor,
      activeBackgroundColor = _ref.activeBackgroundColor,
      inactiveTintColor = _ref.inactiveTintColor,
      inactiveBackgroundColor = _ref.inactiveBackgroundColor,
      getLabel = _ref.getLabel,
      renderIcon = _ref.renderIcon,
      onItemPress = _ref.onItemPress,
      style = _ref.style,
      labelStyle = _ref.labelStyle;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, style], __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    },
    items.map(function (route, index) {
      var focused = activeItemKey === route.key;
      var color = focused ? activeTintColor : inactiveTintColor;
      var backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
      var scene = { route: route, index: index, focused: focused, tintColor: color };
      var icon = renderIcon(scene);
      var label = getLabel(scene);
      return _react2.default.createElement(
        _TouchableItem2.default,
        {
          key: route.key,
          onPress: function onPress() {
            onItemPress({ route: route, focused: focused });
          },
          delayPressIn: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: [styles.item, { backgroundColor: backgroundColor }], __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          icon ? _react2.default.createElement(
            _reactNative.View,
            {
              style: [styles.icon, focused ? null : styles.inactiveIcon],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            icon
          ) : null,
          typeof label === 'string' ? _react2.default.createElement(
            _reactNative.Text,
            { style: [styles.label, { color: color }, labelStyle], __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            },
            label
          ) : label
        )
      );
    })
  );
};

DrawerNavigatorItems.defaultProps = {
  activeTintColor: '#2196f3',
  activeBackgroundColor: 'rgba(0, 0, 0, .04)',
  inactiveTintColor: 'rgba(0, 0, 0, .87)',
  inactiveBackgroundColor: 'transparent'
};

var styles = _reactNative.StyleSheet.create({
  container: {
    marginTop: _reactNative.Platform.OS === 'ios' ? 20 : 0,
    paddingVertical: 4
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  },
  inactiveIcon: {
    opacity: 0.62
  },
  label: {
    margin: 16,
    fontWeight: 'bold'
  }
});

exports.default = DrawerNavigatorItems;