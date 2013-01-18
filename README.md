Add a ".mix" method to a source like this (blah.js)
```
var DotMix = require('../index');

function blah (options) {
  this.blah = function(text) {
    console.log(options.greeting + ' ' + text);
  }
  
  return this;
}
DotMix(blah);

module.exports = blah;
```

and then mix it into a target like this
```
var blah = require('./blah');

function Barf () {}
blah.mix(Barf, { greeting: 'wow...' });
barf = new Barf();
barf.render('barf!!')   // 'wow... barf!!'

```