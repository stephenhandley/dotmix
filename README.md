Add a "mix" method to a source like this (Blah.js)
```
var DotMix = require('dotmix');

function Blah (options) {
  this.blah = function(text) {
    console.log(options.greeting + ' ' + text);
  }
}
DotMix(Blah);

module.exports = Blah;
```

and then mix that into a target like this
```
var Blah = require('./Blah');

function Barf () {}
Blah.mix(Barf, { greeting: 'wow...' });

barf = new Barf();
barf.blah('barf!!')   // 'wow... barf!!'

```