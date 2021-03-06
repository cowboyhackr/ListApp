Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchStepCount = watchStepCount;
exports.getStepCountAsync = getStepCountAsync;
exports.isAvailableAsync = isAvailableAsync;

var _reactNative = require('react-native');

var _invariant = require('invariant');

var _invariant2 = babelHelpers.interopRequireDefault(_invariant);

var PedometerEventEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.ExponentPedometer);

var _listenerCount = 0;

function watchStepCount(callback) {
  if (_listenerCount === 0) {
    _reactNative.NativeModules.ExponentPedometer.watchStepCount();
  }
  _listenerCount++;

  var listener = PedometerEventEmitter.addListener('Exponent.pedometerUpdate', callback);

  return {
    remove: function remove() {
      listener.remove();
      _listenerCount--;
      if (_listenerCount === 0) {
        _reactNative.NativeModules.ExponentPedometer.stopWatchingStepCount();
      }
    }
  };
}

function getStepCountAsync(start, end) {
  return regeneratorRuntime.async(function getStepCountAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _invariant2.default)(start <= end, 'Pedometer: The start date must be smaller than the end date.');
          _context.next = 3;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentPedometer.getStepCountAsync(start.getTime(), end.getTime()));

        case 3:
          return _context.abrupt('return', _context.sent);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

function isAvailableAsync() {
  return regeneratorRuntime.async(function isAvailableAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentPedometer.isAvailableAsync());

        case 2:
          return _context2.abrupt('return', _context2.sent);

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}