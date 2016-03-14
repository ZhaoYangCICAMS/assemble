'use strict';

module.exports = function(prop, options) {
  if (typeof prop === 'object') {
    options = prop;
    prop = '';
  }
  var val = prop ? this.view[prop] : this.view;
  return options.fn ? options.fn(val) : val;
};
