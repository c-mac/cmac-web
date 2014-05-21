angular.module('playground.scrabble', [])

.controller('ScrabbleCtrl', function($scope) {

	this.letters = [{
		name : 'a',
		value : 1
	}, {
		name : 'b',
		value : 2
	}, {
		name : 'c',
		value : 3
	}];

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
})
.directive('cmScrabbleize', function() {
	return {
		restrict: 'E',
		templateUrl: 'playground/scrabble/scrabble.tpl.html',
		controller: 'ScrabbleCtrl',
		controllerAs: 'scrabble'
	};
});
