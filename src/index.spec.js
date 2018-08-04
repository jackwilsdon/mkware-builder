var createBuilder = require('.');
var mkware = require('mkware');

it('returns a builder using the default mkware function', function() {
  var builder = createBuilder();

  expect(builder.mkware).toBe(mkware);
});
