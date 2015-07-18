angular
  .module('social-gallery')
  .controller('HomeController', [
      '$scope',
      '$rootScope',
      HomeController
    ]);

function HomeController ($scope, $rootScope) {
  $scope.name = "Hello";
  $scope.filesAdded = function($file, $event, $flow){
    console.log($file);
    console.log($event);
    console.log($flow);
  };
}
