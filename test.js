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
assert.notEqual(so.rendered, str);
so.render(str);
assert.equal(so.rendered, greeting + ' ' + str);

console.log('0MG');