//var start = Date.now();

var assert = require('assert');
var DotMix = require('../index');

var render = require('./render');

// Lib / object version
function SomeObject () {
  this.rendered = 'barf'; // overwritten by render call
}
var greeting = 'Hi totally!';
var str = 'hi';
var expected = greeting + ' ' + str;

render.mix(SomeObject, { greeting: greeting });
so = new SomeObject();
assert.notEqual(so.rendered, expected);
so.render(str);
assert.equal(so.rendered, expected);

// Can also access underlying mixin function directly
// this is kinda stupid... maybe shouldn't have exposed
function OtherObject () {
  this.rendered = 'noooope';
}

var barf = 'barf';
var unlimited = 'unlimited';
var expected = barf + ' ' + unlimited;

DotMix.mix(render, OtherObject, { greeting : barf });
oo = new OtherObject();
assert.notEqual(oo.rendered, expected)
oo.render(unlimited)
assert.equal(oo.rendered, expected);

console.log('0MG');

//var end = Date.now();
//console.log(end - start); // For index.js: 6, for old_index.js: 7