/**
 * The root of the "playground" section of the app, which, as of now, will contain fun little
 * AngularJS code snippets 
 */
angular.module( 'cmac.playground', [
  'ui.router',
  'ui.bootstrap'
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


.directive('cmScrabbleize', function() {
	return {
		restrict: 'E',
		templateUrl: 'playground/scrabble.tpl.html',
		controller: function($scope) {
			
			this.letters = 
			[
				{name:'a', value:1},
				{name:'b', value:2},
				{name:'c', value:3}
			];	
												
			this.score = function() {
				this.wordScore = 0;
				
				for (var j = 0; j < this.word.length; j++) {
					for (var i = 0; i < this.letters.length; i++) {
						if (angular.equals(this.word[j], this.letters[i].name)) {
							this.wordScore += this.letters[i].value;
						}
					}
				}
				this.word = "";
			};
		},
		controllerAs: 'scrabble'
	};
})

;

