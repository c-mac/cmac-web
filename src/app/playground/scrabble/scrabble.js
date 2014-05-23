angular.module('playground.scrabble', [])

.controller('ScrabbleCtrl', function($scope, ScrabbleService) {

	this.letters = ScrabbleService.getLetters();

	this.getLetterValue = function(letter) {
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].name === letter) {
				return this.letters[i].value;
			}
		}
	};
	
	this.clearWord = function() {
		this.word = "";
		this.wordScore = 0;
	};
	
	this.scoreWord = function() {
		this.wordScore = 0;
		for (var j = 0; j < this.word.length; j++) {
			this.wordScore += this.getLetterValue(this.word[j]);
		}
	};
})

.directive('cmScrabbleize', function() {
	return {
		restrict : 'E',
		templateUrl : 'playground/scrabble/scrabble.tpl.html',
		controller : 'ScrabbleCtrl',
		controllerAs : 'scrabble'
	};
})

.service('ScrabbleService', function() {
	
		this.letters = [
			{name : 'a', value : 1}, 			{name : 'b', value : 3}, 			{name : 'c', value : 3},
			{name : 'd', value : 2}, 			{name : 'e', value : 1}, 			{name : 'f', value : 4},
			{name : 'g', value : 2}, 			{name : 'h', value : 4}, 			{name : 'i', value : 1},
			{name : 'j', value : 8}, 			{name : 'k', value : 5}, 			{name : 'l', value : 1},
			{name : 'm', value : 3}, 			{name : 'n', value : 1}, 			{name : 'o', value : 1},
			{name : 'p', value : 3}, 			{name : 'q', value : 10}, 			{name : 'r', value : 1},
			{name : 's', value : 1}, 			{name : 't', value : 1}, 			{name : 'u', value : 1},
			{name : 'v', value : 4}, 			{name : 'w', value : 4}, 			{name : 'x', value : 20},
			{name : 'y', value : 4}, 			{name : 'z', value : 10}			
		];
		
		this.getLetters = function() {
			return this.letters;
		};	
		
});
 