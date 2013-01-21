var Mixin = require('../index');

function blather (options) {
  this.blather = function(text) {
    this.blathered = text;
  }
}
Mixin(blather);

module.exports = blather;