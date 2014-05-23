/**
 * The root of the "playground" section of the app, which, as of now, will contain fun little
 * AngularJS code snippets 
 */
angular.module( 'playground', [
  'ui.router',
  'ui.bootstrap',
  'playground.scrabble'
])

.config(function ($stateProvider) {
  $stateProvider.state( 'playground', {
    url: '/playground',
    views: {
      "main": {
        controller: 'PlaygroundCtrl',
        templateUrl: 'playground/playground.tpl.html'
      }
    },
    data:{ pageTitle: 'Playground' }
  });
})

.controller( 'PlaygroundCtrl', function ($scope) {
	console.log("in the playground ctrl");
	$scope.dropdownDemoItems = [
		"The first choice!",
		"And another choice for you.",
		"but wait! A third!"
	];
	
	$scope.people = ['Cameron', 'David'];
})

;

