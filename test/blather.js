var Dotmix = require('../index');

var blather = {
  include : {
    blather : function (text) {
      this.blathered = text;
    }
  }
};
Dotmix(blather);

module.exports = blather;