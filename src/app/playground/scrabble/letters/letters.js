angular.module('scrabble.letters', ['playground.scrabble'])


.service('LettersService', function() {
		
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

	
	this.getLetterValue = function(letter) {
		letter = angular.lowercase(letter);
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].name === letter) {
				return this.letters[i].value;
			}
		}
	};
})

.controller('LettersCtrl', function($scope, ScrabbleService, LettersService) {
	
	this.ls = LettersService;
	
	this.applyBonus = function(letter) {
		letter.value = this.ls.getLetterValue(letter.name);
		if (letter.bonus === "DLS") {
			letter.value *= 2;
		}
		else if (letter.bonus === "TLS") {
			letter.value *= 3;
		}
	};

})

.directive('cmLetters', function() {
	return {
		restrict: 'E',
		controller: 'LettersCtrl',
		controllerAs: 'letters',
		templateUrl: 'playground/scrabble/letters/letters.tpl.html'
	};
})

;
	
