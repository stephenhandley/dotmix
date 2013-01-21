function mixin (source, target, options) {
  if (arguments.length < 3) {
    options = {};
  }
  source.call(target.prototype, options);
}

function Mixin (source) {
  source.mixin = function (target, options) {
    mixin(source, target, options);
    return source;
  };
}
Mixin.mixin = mixin;

module.exports = Mixin;