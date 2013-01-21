Some conveniences around functional mixins as described in Angus Croll's ["A fresh look at JavaScript Mixins"](http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/) 

Add a "mixin" method to a mixin source like this
```
var Mixin = require('dotmixin');

function Blah (options) {
  this.blah = function(text) {
    console.log(options.greeting + ' ' + text);
  };
}
Mixin(Blah);

module.exports = Blah;
```

and then mix that into a target like this
```
var Blah = require('./Blah');

function Barf () {}
Blah.mixin(Barf, { greeting: 'wow...' });

barf = new Barf();
barf.blah('barf!!');  // 'wow... barf!!'

```

