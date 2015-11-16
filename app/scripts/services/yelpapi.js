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
    // Service logic
    // ...

    // Public API here
    //Using Open Weather Map API as placeholder to make sure calls work before figuring our YELP API
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:query&mode=json&APPID=1c6578fa25ca04d52842e79521226c8c', {}, {
      find: {
        method:'GET',
        params:{
            query: ""
        },
        isArray:false
      }
    });
  });