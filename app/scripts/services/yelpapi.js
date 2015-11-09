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
    return $resource('https://api.yelp.com/v2/search/?oauth_consumer_key=nTnuQt3-And40RQRqw9bow&oauth_nonce=142750090&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1446779414&oauth_version=1.0&term=wifi&location=:location&radius_filter=5000&category_filter=bars,breweries,pubs,beer_and_wine', {}, {
      query: {
        method:'GET',
        params:{
            location: null
        },
        isArray:false
      }
    });
  });