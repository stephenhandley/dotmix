function mix () {
  var args = Array.prototype.slice.call(arguments);
  var source = args.shift();
  var target = args.shift();
  source.apply(target.prototype, args);
}

function attachMix (mixable) {
  mixable.mix = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(mixable);
    mix.apply(null, args);
  };
  
  return this;
}

attachMix.mix = mix;

module.exports = attachMix;