'use strict';

/**
 * @ngdoc function
 * @name commitbeerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the commitbeerApp
 */
angular.module('commitbeerApp')
.controller('MainCtrl', function ($scope, yelpapi) {
  $scope.city = "";

  $scope.findLocations = function() {
      $scope.locationsFound = yelpapi.query({
          city: $scope.city
      });
  };
});

