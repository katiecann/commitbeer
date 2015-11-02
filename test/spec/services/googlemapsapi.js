'use strict';

describe('Service: googleMapsApi', function () {

  // load the service's module
  beforeEach(module('commitbeerApp'));

  // instantiate service
  var googleMapsApi;
  beforeEach(inject(function (_googleMapsApi_) {
    googleMapsApi = _googleMapsApi_;
  }));

  it('should do something', function () {
    expect(!!googleMapsApi).toBe(true);
  });

});
