var DotMix = require('../index');

function blather (options) {
  this.blather = function(text) {
    this.blathered = text;
  }
}
DotMix(blather);

module.exports = blather;