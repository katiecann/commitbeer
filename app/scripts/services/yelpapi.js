'use strict';

/**
 * @ngdoc service
 * @name commitbeerApp.yelpApi
 * @description
 * # yelpApi
 * Factory in the commitbeerApp.
 */
angular.module('commitbeerApp')
  .factory('yelpApi', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://api.yelp.com/v2/search/?term=wifi&location=:location&radius_filter=5000&category_filter=bars,breweries,pubs,beer_and_wine', {}, {
      query: {
        method:'GET',
        params:{
            location: null
        },
        isArray:false
      }
    });
  });