Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/private/var/git/ListApp/node_modules/react-navigation/src/navigators/DrawerNavigator.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _createNavigator = require('./createNavigator');

var _createNavigator2 = babelHelpers.interopRequireDefault(_createNavigator);

var _createNavigationContainer = require('../createNavigationContainer');

var _createNavigationContainer2 = babelHelpers.interopRequireDefault(_createNavigationContainer);

var _TabRouter = require('../routers/TabRouter');

var _TabRouter2 = babelHelpers.interopRequireDefault(_TabRouter);

var _DrawerScreen = require('../views/Drawer/DrawerScreen');

var _DrawerScreen2 = babelHelpers.interopRequireDefault(_DrawerScreen);

var _DrawerView = require('../views/Drawer/DrawerView');

var _DrawerView2 = babelHelpers.interopRequireDefault(_DrawerView);

var _DrawerNavigatorItems = require('../views/Drawer/DrawerNavigatorItems');

var _DrawerNavigatorItems2 = babelHelpers.interopRequireDefault(_DrawerNavigatorItems);

var _NavigatorTypes = require('./NavigatorTypes');

var _NavigatorTypes2 = babelHelpers.interopRequireDefault(_NavigatorTypes);

var DefaultDrawerConfig = {
  drawerWidth: _reactNative.Dimensions.get('window').width - (_reactNative.Platform.OS === 'android' ? 56 : 64),
  contentComponent: _DrawerNavigatorItems2.default,
  drawerPosition: 'left'
};

var DrawerNavigator = function DrawerNavigator(routeConfigs, config) {
  var mergedConfig = babelHelpers.extends({}, DefaultDrawerConfig, config);
  var containerConfig = mergedConfig.containerConfig,
      drawerWidth = mergedConfig.drawerWidth,
      contentComponent = mergedConfig.contentComponent,
      contentOptions = mergedConfig.contentOptions,
      drawerPosition = mergedConfig.drawerPosition,
      tabsConfig = babelHelpers.objectWithoutProperties(mergedConfig, ['containerConfig', 'drawerWidth', 'contentComponent', 'contentOptions', 'drawerPosition']);


  var contentRouter = (0, _TabRouter2.default)(routeConfigs, tabsConfig);

  var drawerRouter = (0, _TabRouter2.default)({
    DrawerClose: {
      screen: (0, _createNavigator2.default)(contentRouter, routeConfigs, config, _NavigatorTypes2.default.DRAWER)(function (props) {
        return _react2.default.createElement(_DrawerScreen2.default, babelHelpers.extends({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }));
      })
    },
    DrawerOpen: {
      screen: function screen() {
        return null;
      }
    }
  }, {
    initialRouteName: 'DrawerClose'
  });

  var navigator = (0, _createNavigator2.default)(drawerRouter, routeConfigs, config, _NavigatorTypes2.default.DRAWER)(function (props) {
    return _react2.default.createElement(_DrawerView2.default, babelHelpers.extends({}, props, {
      drawerWidth: drawerWidth,
      contentComponent: contentComponent,
      contentOptions: contentOptions,
      drawerPosition: drawerPosition,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }));
  });

  return (0, _createNavigationContainer2.default)(navigator, containerConfig);
};

exports.default = DrawerNavigator;