var createBuilder = require('./promise');
var mkware = require('mkware/promise');

it('returns a builder using the mkware promise function', function() {
  var builder = createBuilder();

  expect(builder.mkware).toBe(mkware);
});
