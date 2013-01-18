Add a "mix" method to a source like this (blah.js)
```
var DotMix = require('dotmix');

function blah (options) {
  this.blah = function(text) {
    console.log(options.greeting + ' ' + text);
  }
}
DotMix(blah);

module.exports = blah;
```

and then mix that into a target like this
```
var blah = require('./blah');

function Barf () {}
blah.mix(Barf, { greeting: 'wow...' });

barf = new Barf();
barf.blah('barf!!')   // 'wow... barf!!'

```