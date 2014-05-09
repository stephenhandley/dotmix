Type = require('type-of-is');

function _extend (options) {
  var from   = options.from;
  var into   = options.into;
  var data   = options.data;
  var alias  = options.alias;
  var prefix = options.prefix;
  
  var only = null;
  if (options.hasOwnProperty('only')) {
    only = options.only;
  }
  
  if (Type(from, Function)) {
    from = from(data);
  }
  
  for (var from_k in from) {
    if (only && (only.indexOf(from_k) === -1)) {
      continue;
    }
    
    if (from.hasOwnProperty(from_k)) {
      var into_k = alias.hasOwnProperty(from_k) ? alias[from_k] : from_k;
      if (prefix) {
        into_k = prefix + into_k;
      }
      
      if (into.hasOwnProperty(into_k)) {
        var err = 'Mix would overwrite existing property ' + into_k + '. Use alias option to rename.';
        throw err;
      }
      
      var pd = Object.getOwnPropertyDescriptor(from, from_k);
      var has_enum_opt = options.hasOwnProperty('enumerable');
      pd.enumerable = has_enum_opt ? options.enumerable : false;
      Object.defineProperty(into, into_k, pd); 
    }
  }
}

function mix (options) {  
  if (!options.data) {
    options.data = {};
  }
  
  if (!options.alias) {
    options.alias = {};
  }
  
  var include = options.from.include;
  var extend  = options.from.extend;
  delete options.from;
  
  var into = options.into;
  delete options.into;
  
  
  var include_filter = null;
  if (options.hasOwnProperty('include')) {
    include_filter = options.include;
    delete options.include;
  }
  
  var extend_filter = null;
  if (options.hasOwnProperty('extend')) {
    extend_filter = options.extend;
    delete options.extend;
  }
  
  if (include) {
    options.from = include;
    options.into = into.prototype;
    if (include_filter) {
      options.only = include_filter;
    }
    _extend(options);
  }
  
  if (extend) {
    options.from = extend;
    options.into = into;
    if (extend_filter) {
      options.only = extend_filter;
    }
    _extend(options);
  }
}

function Dotmix (source) {
  source.mix = function (options) {
    options.from = source;
    mix(options);
    return source;
  };
}

Dotmix.mix = mix;
module.exports = Dotmix;
