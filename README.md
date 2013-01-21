# Description

Some conveniences around functional mixins as described in Angus Croll's ["A fresh look at JavaScript Mixins"](http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/) 


# Latest Version

0.0.1

# Installation
```
npm install dotmixin
```

or in package.json 

```json
{
  ...
  "dependencies": {
    "dotmixinn": "~0.0.1"
  }
}
```

# Usage

Add a "mixin" method to a mixin source like this
```js
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
```js
var Blah = require('./Blah');

function Barf () {}
Blah.mixin(Barf, { greeting: 'wow...' });

barf = new Barf();
barf.blah('barf!!');  // 'wow... barf!!'

```

# Notes / TODO

Mixin sources should be a function accepting a single "options" object as an argument that provides for mixin-level configuration. 

At some point would be cool to have webpage listing sources (probably just subset of npm modules that have "dotmixin" as a package.json keyword)

Sources should have also be augmented with a .describeMixin function that returns a list of the properties they add to the target. When that function is called with an argument name, show details about that function/property and its arguments.

For the example above.. 
```js
Blah.describeMixin() // ['blah']
Blah.describeMixin('blah') // { type: Function, arguments: ['text'] }
```

Should develop convention in the options argument to allow for aliasing of the added functions & properties to avoid namespace collisions.

How to handle dependencies? Should it be possible to only mixin a subset of properties? 





