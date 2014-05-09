var Dotmix = require('../index');

var render = {
  include : function (data) {
    return {
      render : function (text) {
        this.rendered = data.greeting + ' ' + text;
      }
    }
  }
};
Dotmix(render);

module.exports = render;