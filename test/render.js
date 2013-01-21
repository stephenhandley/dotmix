var Mixin = require('../index');

function render (options) {
  this.render = function(text) {
    this.rendered = options.greeting + ' ' + text;
  }
}
Mixin(render);

module.exports = render;