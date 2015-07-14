angular
  .module('social-gallery')
  .controller('HomeController', [
      '$scope',
      '$rootScope',
      HomeController
    ]);

function HomeController ($scope, $rootScope) {
  $scope.name = "Hello";
}
