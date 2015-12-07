
/**
 * @ngdoc service
 * @name commitbeerApp.yelpApi
 * @description
 * # yelpApi
 * Factory in the commitbeerApp.
 */

 (function () {

  'use strict';

  angular.module('commitbeerApp')
    .factory('yelpapi', ['$http',
      function ($http) {

        var randomString = function (length, chars) {
          var result = '';
          for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
          }
          return result;
        };

        var retrieveYelp = function (name, callback) {
          var method =  'GET';
          var url =     'http://api.yelp.com/v2/search';
          var params = {
            callback:                 'angular.callbacks._0',
            location:                 null,
            category_filter:          'bars,breweries,beer_and_wine',
            raius_filter:             '5000',
            oauth_consumer_key:       'nTnuQt3-And40RQRqw9bow', // consumer key
            oauth_token:              'rDntJReWCt89Bpn6Z5vZCZgQ4MMJjcVF', //Token
            oauth_signature_method:   'HMAC-SHA1',
            oauth_timestamp:          new Date().getTime(),
            oauth_nonce:              randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            term:                     'wifi'
          }; // end params
          var consumerSecret =        '5fwBbTCHfjZJLrUGPKN95_qRBIE'; //Consumer Secret
          var tokenSecret =           'nmutDCrW-wo60B1bx7pYq0S8bHg'; //Token Secret
          var oauthSignature =        '';
          var signature = 
            oauthSignature.generate(
              method, 
              url, 
              params, 
              consumerSecret, 
              tokenSecret, 
              { encodeSignature: false }
            ); 
            // end signature
          params.oauth_signature = signature;
          $http.jsonp(url, { params : params })
            .success(callback);
        }; // end retrieveYelp

        return {
          retrieveYelp: retrieveYelp      
        };

      } // end function

    ]); // end factory

 }()); // end iife


/**
angular.module('commitbeerApp')
  .factory('yelpapi', function ($resource) {
    // Service logic
    // ...
    var oauth_consumer_key = 'nTnuQt3-And40RQRqw9bow';
    var oauth_token = 'rDntJReWCt89Bpn6Z5vZCZgQ4MMJjcVF';
    var oauth_nonce = '293647061';
    var oauth_timestamp = '1448258587';
    var oauth_signature_method = 'HMAC-SHA1';
    var oauth_version = '1.0';
    var consumerSecret = '5fwBbTCHfjZJLrUGPKN95_qRBIE';
    var tokenSecret = 'nmutDCrW-wo60B1bx7pYq0S8bHg';
    var url = 'https://api.yelp.com/v2/search/?';
    var method = 'GET';
    var oauthSignature;
    var params;
    // Public API here
    return $resource('https://api.yelp.com/v2/search/?term=wifi&location=:location&limit=20&radius_filter=5000&category_filter=bars,breweries,beer_and_wine&oauth_consumer_key=:oauth_consumer_key&', {}, {
      find: {
        method: method,
        url: url,
        params:{
            location: null,
            oauth_consumer_key: oauth_consumer_key,
            oauth_token: oauth_token,
            oauth_nonce: oauth_nonce,
            oauth_timestamp: oauth_timestamp,
            oauth_signature_method: oauth_signature_method,
            oauth_version: oauth_version,
            consumerSecret: consumerSecret,
            tokenSecret: tokenSecret,
            encodedSignature: oauthSignature.generate(method, url, params, consumerSecret, tokenSecret),
            isArray: false
        },
      }
    });
  });
*/
