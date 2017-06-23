
'use strict';

var _jsxFileName = '/private/var/git/ListApp/node_modules/react-native/Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js';
var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var StyleSheet = require('StyleSheet');
var ViewPropTypes = require('ViewPropTypes');

var requireNativeComponent = require('requireNativeComponent');

var PropTypes = React.PropTypes;

var SEGMENTED_CONTROL_REFERENCE = 'segmentedcontrol';

var SegmentedControlIOS = React.createClass({
  displayName: 'SegmentedControlIOS',

  mixins: [NativeMethodsMixin],

  propTypes: babelHelpers.extends({}, ViewPropTypes, {
    values: PropTypes.arrayOf(PropTypes.string),

    selectedIndex: PropTypes.number,

    onValueChange: PropTypes.func,

    onChange: PropTypes.func,

    enabled: PropTypes.bool,

    tintColor: PropTypes.string,

    momentary: PropTypes.bool
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      values: [],
      enabled: true
    };
  },

  _onChange: function _onChange(event) {
    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
  },

  render: function render() {
    return React.createElement(RCTSegmentedControl, babelHelpers.extends({}, this.props, {
      ref: SEGMENTED_CONTROL_REFERENCE,
      style: [styles.segmentedControl, this.props.style],
      onChange: this._onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    }));
  }
});

var styles = StyleSheet.create({
  segmentedControl: {
    height: 28
  }
});

var RCTSegmentedControl = requireNativeComponent('RCTSegmentedControl', SegmentedControlIOS);

module.exports = SegmentedControlIOS;