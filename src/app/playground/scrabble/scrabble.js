angular.module('playground.scrabble', ['scrabble.letters'])

.config(function ($stateProvider) {
  $stateProvider.state( 'scrabble', {
    views: {
      "main": {
        controller: 'ScrabbleCtrl as scrabble',
        templateUrl: 'playground/scrabble/scrabble.tpl.html'
      }
    },
    data:{ pageTitle: 'Scrabble' }
  });
})

.controller('ScrabbleCtrl', function($scope, LettersService, ScrabbleService) {
	
	this.ls = LettersService;
	this.letters = LettersService.getLetters();
	this.bonuses = ScrabbleService.getBonuses();
	
	this.clearWord = function() {
		this.word = [];
		this.wordScore = 0;
	};
	
	this.scoreWord = function() {
		this.wordScore = 0;
		for (var i = 0; i < this.word.length; i++) {
			this.wordScore += this.word[i].value;
		}
	};
	
	this.wordChanged = function() {
		this.clearWord();
		
		for (var i = 0, len = this.input.length; i < len; i++) {
			var lower = angular.lowercase(this.input[i]);
			this.word.push({"name":this.input[i],
							"value":this.ls.getLetterValue(this.input[i]),
							"bonus":"none"});
		}
		this.scoreWord();
	};
	

})

.service('ScrabbleService', function() {
	this.getWord = function() {
		return this.word;
	};
	
	this.bonuses = ['DLS', 'TLS'];
	
	this.getBonuses = function() {
		return this.bonuses;
	};
})

;
 