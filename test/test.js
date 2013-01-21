//var start = Date.now();

var assert = require('assert');
var Mixin = require('../index');

var render = require('./render');
var blather = require('./blather');

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
assert.notEqual(so.rendered, expected);
so.render(str);
assert.equal(so.rendered, expected);

assert.notEqual(so.blathered, str);
so.blather(str);
assert.equal(so.blathered, str);

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
assert.notEqual(oo.rendered, expected)
oo.render(unlimited)
assert.equal(oo.rendered, expected);

console.log('0MG');

//var end = Date.now();
//console.log(end - start); // For index.js: 6, for old_index.js: 7