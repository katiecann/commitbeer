"use strict";angular.module("commitbeerApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/results",{templateUrl:"views/results.html",controller:"MainCtrl",controllerAs:"results"}).otherwise({redirectTo:"/"})}]),angular.module("commitbeerApp").controller("MainCtrl",["$scope","yelpapi",function(a,b){a.businessesFound=b.find(),a.findBusinesses=function(){a.businessesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("commitbeerApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("commitbeerApp").factory("yelpApi",["$resource",function(a){return a("https://api.yelp.com/v2/search/?oauth_consumer_key=nTnuQt3-And40RQRqw9bow&oauth_nonce=142750090&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1446779414&oauth_version=1.0&term=wifi&location=:location&radius_filter=5000&category_filter=bars,breweries,pubs,beer_and_wine",{},{query:{method:"GET",params:{location:null},isArray:!1}})}]),angular.module("commitbeerApp").controller("ResultsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("commitbeerApp").factory("googleMapsApi",["$resource",function(a){return a("https://maps.googleapis.com/maps/api/js?key=AIzaSyD-khOpvFEsdevCH1JOts3w670V4AzQ4OA&signed_in=true&callback=initMap",{},{query:{method:"GET",params:{cityID:"Seattle, WA USA"},isArray:!1}})}]),angular.module("commitbeerApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div ng-app ng-controller="MainCtrl"> <div class="jumbotron"> <div class="container"> <h1>Looking for a beer while you work?</h1> <p class="lead"> Enter your location to find BEER and WIFI </p> <div class="col-lg-12"> <div class="input-group input-group-lg" id="search-bar"> <input type="text" class="form-control" placeholder="Location..." ng-model="location"> <span class="input-group-btn"> <a href="#/results" class="btn btn-lg btn-primary" ng-click="findBusinesses()" type="button">Get Beer!</a> </span> </div> </div> </div> </div> </div>'),a.put("views/results.html",'<div class="container"> <h2>Search Results</h2> </div> <div class="panel panel-default" ng-repeat="businesses in businessesFound.list"> <div class="panel-heading"> <h3 class="panel-title">{{businesses.name}}</h3> </div> <div class="panel-body"> {{business.location.display_address}} <img src="{{businesses.image_url}}" class="img-circle"> </div> </div>')}]);