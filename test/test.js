var Assert = require('assert');
var Asserts = require('asserts');

var Mixin = require('../index');

Asserts(function () {
    var render = require('./render');
    var blather = require('./blather');

    return {
    "should mixin properly" : {

      "using source.mixin(dest)": function () {
        // Lib / object version
        function SomeObject () {
          this.rendered = 'barf'; // overwritten by render call
          this.blathered = 'no';
        }

        var greeting = 'Hi totally!';
        var str = 'hi';
        var expected = greeting + ' ' + str;

        render.mixin(SomeObject, { greeting: greeting });
        blather.mixin(SomeObject);

        so = new SomeObject();
        Assert.notEqual(so.rendered, expected);
        so.render(str);
        Assert.equal(so.rendered, expected);

        Assert.notEqual(so.blathered, str);
        so.blather(str);
        Assert.equal(so.blathered, str);
      },

      "using Mixin.mixin(source, destination)": function () {
        // Can also access underlying mixin function directly
        // this is kinda stupid... maybe shouldn't have exposed
        function OtherObject () {
          this.rendered = 'noooope';
        }

        var barf = 'barf';
        var unlimited = 'unlimited';
        var expected = barf + ' ' + unlimited;

        Mixin.mixin(render, OtherObject, { greeting : barf });

        oo = new OtherObject();
        Assert.notEqual(oo.rendered, expected)
        oo.render(unlimited)
        Assert.equal(oo.rendered, expected);
      }
    }
  }
});




