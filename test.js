var Mix = require('./index');
var assert = require('assert');

function render (options) {
  this.render = function(text) {
    this.rendered = options.greeting + ' ' + text;
  }
  
  return this;
}
Mix(render);

function SomeObject () {
  this.rendered = 'barf'; // overwritten by render call
}
var greeting = 'Hi totally!';
render.mix(SomeObject, { greeting: greeting });

so = new SomeObject();
var str = 'hi';
var expected = greeting + ' ' + str;
assert.notEqual(so.rendered, expected);
so.render(str);
assert.equal(so.rendered, expected);

// this is kinda stupid... probably shouldn't have added

function OtherObject () {
  this.rendered = 'noooope';
}
var barf = 'barf';
var unlimited = 'unlimited';
var expected = barf + ' ' + unlimited;
Mix.mix(render, OtherObject, { greeting : barf});
oo = new OtherObject();
assert.notEqual(oo.rendered, expected)
oo.render(unlimited)
assert.equal(oo.rendered, expected);


console.log('0MG');