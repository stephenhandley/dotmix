var Assert  = require('assert');
var Asserts = require('asserts');

var Dotmix = require('../index');

Asserts(function () {
  var render  = require('./render');
  var blather = require('./blather');
  var Blah    = require('./Blah');
  
  return {
    "should include properly" : {
      "using <source>.mix": function () {
        // Lib / object version
        function SomeObject () {
          this.rendered = 'barf'; // overwritten by render call
          this.blathered = 'no';
        }

        var greeting = 'Hi totally!';
        var str = 'hi';
        var expected = greeting + ' ' + str;

        render.mix({
          into : SomeObject,
          data : { 
            greeting: greeting 
          }
        });
      
        blather.mix({
          into : SomeObject
        });

        so = new SomeObject();
        Assert.notEqual(so.rendered, expected);
        so.render(str);
        Assert.equal(so.rendered, expected);

        Assert.notEqual(so.blathered, str);
        so.blather(str);
        Assert.equal(so.blathered, str);
      },

      "using Dotmix.mix": function () {
        // Can also access underlying mix function directly
        // this is kinda stupid... maybe shouldn't have exposed
        function OtherObject () {
          this.rendered = 'noooope';
        }

        var barf = 'barf';
        var unlimited = 'unlimited';
        var expected = barf + ' ' + unlimited;

        Dotmix.mix({
          from : render, 
          into : OtherObject, 
          data : { 
            greeting : barf
          }
        });

        oo = new OtherObject();
        Assert.notEqual(oo.rendered, expected)
        oo.render(unlimited)
        Assert.equal(oo.rendered, expected);
      }
    },
    
    "should extend properly" : function () {
      function Barf () {}
      Blah.mix({
        into : Barf, 
        data : { 
          greeting: 'wow...' 
        }
      });

      barf = new Barf();
      
      var wow = barf.blah('barf!!'); 
      Assert.equal(wow, 'wow... barf!!');
      
      var pancakes = Barf.barf('pancakes');
      Assert.equal(pancakes, 'NOW BARFING: pancakes')
    },
    
    "should respect existing properties" : function () {
      function AlreadyBlah () {}
      AlreadyBlah.prototype.blah = function (txt) {
        return txt;
      };
      
      return {
        "by not overwriting them" : function () {
          Assert.throws(function () {
            Blah.mix({
              into : AlreadyBlah
            });
          }, /Mix would overwrite existing property blah/);
        },
        
        "by them to be aliased" : function () {
          var greeting = 'wow...';
          
          Blah.mix({
            into  : AlreadyBlah,
            data : { 
              greeting: greeting
            },
            alias : {
              blah : 'blah2'
            } 
          });
          
          ab = new AlreadyBlah();
          
          var _barf_ = 'barf!!';
          
          var blah1 = ab.blah(_barf_); 
          Assert.equal(blah1, _barf_);
          
          var blah2 = ab.blah2(_barf_);
          Assert.equal(blah2, greeting + ' ' + _barf_);
        }
      }
    },
    
    "should properly support prefixing" : function () {
      var greeting = 'so..';
      var _blah_   = 'blah';
      
      function Hi () {}
      Blah.mix({
        into   : Hi,
        prefix : '__',
        data   : { 
          greeting: greeting
        },
      });
      
      hi = new Hi();
      
      Assert.throws(function () { hi.blah(_blah_) }, /has no method/);
      
      var actual   = hi.__blah(_blah_);
      var expected = greeting + ' ' + _blah_;
      Assert.equal(actual, expected);
    },
    
    "should support only including specific properties via 'include' and 'extend' options" : function () {
      var tons = {
        include : {
          derp  : function () { return 'derp' },
          dorp  : function () { return 'dorp' },
          spork : function () { return 'spork' }
        },
        extend : {
          fork   : function () { return 'fork' },
          torque : function () { return 'torque' },
          cork   : function () { return 'cork' },
          mork   : function () { return 'mork' }
        }
      };
      Dotmix(tons);
      
      function Duh () {}
      tons.mix({
        into    : Duh,
        include : ['derp', 'dorp'],
        extend  : ['fork', 'cork']
      })
      
      duh = new Duh();
      Assert.equal(duh.derp(), 'derp');
      Assert.equal(duh.dorp(), 'dorp');
      Assert.throws(function () { duh.spork(); }, /has no method 'spork'/);
      
      Assert.equal(Duh.fork(), 'fork');
      Assert.equal(Duh.cork(), 'cork');
      Assert.throws(function () { Duh.torque(); }, /has no method 'torque'/);
      Assert.throws(function () { Duh.mork(); }, /has no method 'mork'/);
    }
  }
});




