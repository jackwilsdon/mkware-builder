var mkware = require('mkware/promise');
var builderFactory = require('./builderFactory');

/**
 * Create a middleware pipe builder.
 *
 * @returns {MkwareBuilder} the builder. Calling this method will execute any
 *                          middleware added to the builder, passing all
 *                          arguments to the first middleware
 */
module.exports = builderFactory(mkware);
