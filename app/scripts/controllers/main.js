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
         $scope.businessesFound = yelpapi.find({
             query: $scope.location
         });
     };
   });
