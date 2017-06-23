
'use strict';

var dummySize = { width: undefined, height: undefined };

var sizesDiffer = function sizesDiffer(one, two) {
  one = one || dummySize;
  two = two || dummySize;
  return one !== two && (one.width !== two.width || one.height !== two.height);
};

module.exports = sizesDiffer;