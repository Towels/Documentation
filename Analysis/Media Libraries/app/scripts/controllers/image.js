'use strict';

/**
 * @ngdoc function
 * @name graphOfContentApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the graphOfContentApp
 */
angular.module('graphOfContentApp')
  .controller('ImageCtrl', function ($scope) {
  	$scope.images = [
  		{'title':'Prague Market', 'url': '/db/prague.jpg'},
  		{'title':'Serra Da Estrela', 'url': '/db/serra.jpg'}
  	];
  });
