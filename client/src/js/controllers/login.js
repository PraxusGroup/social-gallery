angular
  .module('social-gallery')
  .controller('LoginController', ['$scope', '$rootScope', LoginController]);

function LoginController ($scope, $rootScope) {
  $scope.register = function(){
    console.log('hello');
  };
}
