angular
  .module('app.register', [])
  .controller('RegisterController', ['$scope', '$rootScope', RegisterController]);

function RegisterController ($scope, $rootScope) {
  $scope.register = function(){
    console.log('hello');
  };
}
