// Set up our Front-End Framework using AngularJS

// Instantiate the app
angular.module('MeetlyApp', [
  'MeetlyApp.form',
  'MeetlyApp.map',
  'MeetlyApp.services',
  'MeetlyApp.yelp',
  'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/views/form.html',
        controller: 'formController'
    })
    .state('map-view', {
      url: '/map-view',
      templateUrl: 'app/views/map-view.html',
      controller: 'mapController'
    })
    .state('yelp-view' {
      url: '/yelp-view',
      templateUrl: 'app/views/yelp-view.html',
      controller: 'yelpController'
    })



























});
