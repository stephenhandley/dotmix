```
var Mix = require('./index');
var assert = require('assert');

function render (options) {
  this.render = function(text) {
    this.rendered = text;
  }
  
  return this;
}
Mix(render);

function SomeObject () {
  this.rendered = 'barf'; // overwritten by render call
}
render.mix(SomeObject);

so = new SomeObject();
var str = 'hi';
assert.notEqual(so.rendered, str);
so.render(str);
assert.equal(so.rendered, str);

console.log('0MG');
```