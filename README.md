# Description

Simple mixin implementation.

# Latest Version

1.0.1

# Installation

```
npm install dotmix --save
```

# Usage

Add a "mix" method to a source like this:

```js
var Dotmix = require('dotmix');

var Blah = {
  include : function (data) {
    return {
      blah : function (text) {
        return (data.greeting + ' ' + text);
      }
    }
  },
  extend : {
    barf : function (food) {
      return ("NOW BARFING: " + food);
    }
  }
};

Dotmix(Blah);

module.exports = Blah;
```

Mixin sources should be objects with include and/or extend attributes. Their values can be either an object, or if you want to pass configuration data, functions accepting that single data argument and returning an object.

You mix into a target like this:
```js
var Blah = require('./Blah');

function Barf (derp) {
  this.derp = derp;
}

Blah.mix({
  into : Barf, 
  data : { 
    greeting: 'wow...' 
  }
});

barf = new Barf();
barf.blah('barf!!');   // wow... barf!!
Barf.barf('pancakes'); // NOW BARFING: pancakes

```

It's also possible to use the Dotmix.mix method directly

```js
var Dotmix = require('dotmix');

var Foo = {
  include : {
    foo : function () {
      return 'food';
    }
  }
};

function Duh (derp) {
  this.derp = derp;
}

Dotmix.mix({
  from : Foo, 
  into : Duh
});

duh = new Duh();
duh.foo() // 'food'
```

# Notes 

Includes ideas from 
- ["A fresh look at JavaScript Mixins"](http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/)
- ["The Little Book on CoffeeScript - Classes"](http://arcturo.github.io/library/coffeescript/03_classes.html)

# TODO

- list of mixin sources (probably just subset of npm modules that have "dotmix" as a package.json keyword)

#Build status
[![build status](https://secure.travis-ci.org/stephenhandley/dotmix.png)](http://travis-ci.org/stephenhandley/dotmix)