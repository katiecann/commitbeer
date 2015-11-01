'use strict';

describe('Service: yelpApi', function () {

  // load the service's module
  beforeEach(module('commitbeerApp'));

  // instantiate service
  var yelpApi;
  beforeEach(inject(function (_yelpApi_) {
    yelpApi = _yelpApi_;
  }));

  it('should do something', function () {
    expect(!!yelpApi).toBe(true);
  });

});
