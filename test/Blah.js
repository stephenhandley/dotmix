var Dotmix = require('../index');

var Blah = {
  include : function (data) {
    return {
      blah : function (text) {
        return (data.greeting + ' ' + text);
      }
    }
  },
  extend : {
    barf : function (food) {
      return ("NOW BARFING: " + food);
    }
  }
};

Dotmix(Blah);

module.exports = Blah;