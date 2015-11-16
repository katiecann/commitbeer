'use strict';

/**
 * @ngdoc function
 * @name commitbeerApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the commitbeerApp
 */
angular.module('commitbeerApp')
  .controller('ResultsCtrl', function ($scope, uiGmapGoogleMapApi) {
  	$scope.markers = [];
  	
  	uiGmapGoogleMapApi.then(function() {

    });
});

/**
TODO:  Where does this go? ->

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

*/