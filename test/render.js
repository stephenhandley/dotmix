var DotMix = require('../index');

function render (options) {
  this.render = function(text) {
    this.rendered = options.greeting + ' ' + text;
  }
  
  return this;
}
DotMix(render);

module.exports = render;