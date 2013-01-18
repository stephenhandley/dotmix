function mix (mixin, target, options) {
  if (arguments.length < 3) {
    options = {};
  }
  mixin.call(target.prototype, options);
}

function DotMix (mixin) {
  mixin.mix = function (target, options) {
    mix(mixin, target, options);
    return mixin;
  };
}
DotMix.mix = mix;

module.exports = DotMix;