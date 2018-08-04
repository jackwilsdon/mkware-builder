var mkware = require('mkware');

/**
 * A middleware builder. Calling the builder directly will execute the
 * middleware with the provided arguments.
 *
 * @typedef {Function} MkwareBuilder
 * @property {Function} mkware the function used to build the middleware pipe
 * @property {Function[]} wares a list of all middlewares in the builder
 * @property {Function} use add the provided middleware to the stack
 */

/**
 * Create a middleware pipe builder builder.
 *
 * @param {Function} mkware the function to call with the built list of
 *                          middlewares
 * @returns {Function} a funciton which returns a new builder using the
 *                     provided function to create the middleware pipe
 */
module.exports = function builderFactory(mkware) {
  return function createBuilder() {
    var builder = function() {
      return builder.mkware.apply(null, builder.wares).apply(null, arguments);
    };

    builder.mkware = mkware;

    builder.wares = [];

    builder.use = function(ware) {
      builder.wares.push(ware);
    };

    return builder;
  };
};
