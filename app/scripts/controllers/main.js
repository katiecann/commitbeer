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
     $scope.location = "";

     $scope.findBusinesses = function() {
     	console.log(yelpapi);
         $scope.businessesFound = yelpapi.retrieveYelp({
             query: $scope.location
         });
     };
   });
