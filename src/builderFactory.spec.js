var builderFactory = require('./builderFactory');
var mkware = require('mkware');

it('returns a function which returns a builder', function() {
  var createBuilder = builderFactory(mkware);

  expect(typeof createBuilder).toBe('function');

  var builder = createBuilder();

  expect(typeof builder).toBe('function');
});

it('has a mkware function on the returned builder', function() {
  var builder = builderFactory(mkware)();

  expect(typeof builder.mkware).toBe('function');
});

it('has a wares array on the returned builder', function() {
  var builder = builderFactory(mkware)();

  expect(Array.isArray(builder.wares)).toBe(true);
});

it('has a use method on the returned builder', function() {
  var builder = builderFactory(mkware)();

  expect(typeof builder.use).toBe('function');
});

it('adds a middleware to the list of middlewares when use is called', function() {
  var builder = builderFactory(mkware)();
  var wares = [jest.fn(), jest.fn(), jest.fn()];

  wares.forEach(function(ware) {
    builder.use(ware);
  });

  expect(builder.wares).toEqual(wares);
});

it('calls the mkware function with a list of middlewares when the builder is called', function() {
  var fakeMkware = jest.fn(function() {
    return jest.fn();
  });

  var builder = builderFactory(fakeMkware)();
  var wares = [jest.fn(), jest.fn(), jest.fn()];

  wares.forEach(function(ware) {
    builder.use(ware);
  });

  builder();

  expect(fakeMkware).toBeCalledWith.apply(null, wares);
});

it('calls the function returned from mkware with arguments passed to the builder', function() {
  var fakeExecute = jest.fn();
  var fakeMkware = jest.fn(function() {
    return fakeExecute;
  });

  var builder = builderFactory(fakeMkware)();
  var wares = [jest.fn(), jest.fn(), jest.fn()];

  wares.forEach(function(ware) {
    builder.use(ware);
  });

  builder(1, 2, 3);

  expect(fakeExecute).toBeCalledWith(1, 2, 3);
});
