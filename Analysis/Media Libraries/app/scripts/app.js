'use strict';

/**
 * @ngdoc overview
 * @name graphOfContentApp
 * @description
 * # graphOfContentApp
 *
 * Main module of the application.
 */
angular
  .module('graphOfContentApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/image', {
        templateUrl: 'views/image.html',
        controller: 'ImageCtrl'
      })
      .when('/generic', {
        templateUrl: 'views/generic.html',
        controller: 'GenericCtrl'
      })
      .when('/pdf', {
        templateUrl: 'views/pdf.html',
        controller: 'PDFCtrl'
      })
      .when('/presentation', {
        templateUrl: 'views/presentation.html',
        controller: 'PresentationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
