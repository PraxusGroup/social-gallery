angular
  .module('social-gallery')
  .controller('LoginController', ['$scope', '$rootScope', LoginController]);

function LoginController ($scope, $rootScope) {
  
  $scope.submitLogin = function(){

    $rootScope.loginUser($scope.login)
      .then(function(){
        $('#LoginModal').closeModal();
      });

  };

}
