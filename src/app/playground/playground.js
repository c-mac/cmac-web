/**
 * The root of the "playground" section of the app, which, as of now, will contain fun little
 * AngularJS code snippets 
 */
angular.module( 'cmac.playground', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider
  
  .state( 'playground', {
    url: '/playground',
    views: {
      "main": {
        controller: 'PlaygroundCtrl',
        templateUrl: 'playground/playground.tpl.html'
      }
    },
    data:{ pageTitle: 'Playground' }
  })
  
  .state( 'playground.scrabble', {
  	url: '/scrabble',
  	templateUrl: 'playground/scrabble.tpl.html
  });
})

.controller( 'PlaygroundCtrl', function PlaygroundController( $scope ) {
	
})

;

