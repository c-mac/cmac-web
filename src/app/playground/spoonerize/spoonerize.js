angular.module('playground.spoonerize', [])

.config(function ($stateProvider) {
	$stateProvider.state('spoonerize', {
		url: '/playground/spoonerize',
    views: {
      "main": {
        controller: 'ScrabbleCtrl',
        templateUrl: 'playground/spoonerize/spoonerize.tpl.html'
      }
    },
    data:{ pageTitle: 'Spoonerize' }
	});
})

.controller('SpoonerizeCtrl', function($scope) {
	this.output = "";
	
	this.spoonerize = function() {
		var temp = this.wordOne.charAt(0);
		this.wordOne = this.wordTwo.charAt(0) + this.wordOne.substring(1, this.wordOne.length);
		this.wordTwo = temp + this.wordTwo.substring(1, this.wordTwo.length);
		this.output = this.wordOne + " " + this.wordTwo;
		this.wordOne = "";
		this.wordTwo = "";
	};
})

.directive('cmSpoonerize', function() {
	return {
		restrict: 'E',
		templateUrl: 'playground/spoonerize/spoonerize.tpl.html',
		controller: 'SpoonerizeCtrl',
		controllerAs: 'spoon'
	};	
})

;
