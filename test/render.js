var DotMix = require('../index');

function render (options) {
  this.render = function(text) {
    this.rendered = options.greeting + ' ' + text;
  }
}
DotMix(render);

module.exports = render;