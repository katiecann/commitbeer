'use strict';

/**
 * @ngdoc service
 * @name commitbeerApp.googleMapsApi
 * @description
 * # googleMapsApi
 * Factory in the commitbeerApp.
 */
angular.module('commitbeerApp')
  .factory('googleMapsApi', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://maps.googleapis.com/maps/api/js?key=AIzaSyD-khOpvFEsdevCH1JOts3w670V4AzQ4OA&signed_in=true&callback=initMap', {}, {
      query: {
        method:'GET',
        params:{
          cityID: 'Seattle, WA USA'
        },
        isArray:false
      }
    });
  });