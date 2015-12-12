'use strict';

/**
 * @ngdoc service
 * @name commitbeerApp.yelpApi
 * @description
 * # yelpApi
 * Factory in the commitbeerApp.
 */

angular.module('commitbeerApp')
  .factory('yelpapi', function ($resource) {
    return $resource('http://beermapping.com/webservice/loccity/47249e5e63a967c13caaa2b23f409054/:city', {}, {
      query: {
        method:'GET',
        params:{
            city: null
        },
        isArray:false
      }
    });
  });



/**
 * @ngdoc service
 * @name commitbeerApp.yelpApi
 * @description
 * # yelpApi
 * Factory in the commitbeerApp.
 */


//  Attempt at Yelp API Call, saving for future attempts
/**
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
*/
