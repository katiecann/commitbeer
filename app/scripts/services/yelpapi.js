'use strict';

/**
 * @ngdoc service
 * @name commitbeerApp.yelpApi
 * @description
 * # yelpApi
 * Factory in the commitbeerApp.
 */

 //TODO:  FIGURE OUT YELP API SIGNATURE REQUIREMENTS
/**
angular.module('commitbeerApp')
  .factory('yelpapi', function ($resource) {
    // Service logic
    // ...

    // Public API here
    //Using Open Weather Map API as placeholder to make sure calls work before figuring our YELP API
    return $resource('https://api.yelp.com/v2/search/?term=wifi&location=:location&limit=20&radius_filter=5000&category_filter=bars,breweries,beer_and_wine', {}, {
      find: {
        method:'GET',
        url: 'https://api.yelp.com/v2/search/?',
        params:{
            location: null,
            oauth_consumer_key : 'nTnuQt3-And40RQRqw9bow',
            oauth_token : 'rDntJReWCt89Bpn6Z5vZCZgQ4MMJjcVF',
            oauth_nonce : '293647061',
            oauth_timestamp : '1448258587',
            oauth_signature_method : 'HMAC-SHA1',
            oauth_version : '1.0'
        },
        consumerSecret: '5fwBbTCHfjZJLrUGPKN95_qRBIE',
        tokenSecret: 'nmutDCrW-wo60B1bx7pYq0S8bHg',
        encodedSignature: oauthSignature.generate(method, url, params, consumerSecret, tokenSecret),
        isArray: false
      }
    });
  });
*/