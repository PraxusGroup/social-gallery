angular
  .module('social-gallery')
  .controller('RegisterController', [
    '$scope',
    '$rootScope',
    'Person',
    'LoopBackAuth',
    RegisterController
  ]);

function RegisterController ($scope, $rootScope, Person, LoopBackAuth) {

  $scope.submitRegister = function(){

    if($scope.user.password !== $scope.confirm){
      return Materialize.toast('Passwords do not match', 4000);
    }

    Person
      .create($scope.user)
      .$promise
      .then(afterRegister, registerError);

  };

  function afterRegister(response){
    Materialize.toast('Success!! Logging you in.', 4000);

    $rootScope.loginUser($scope.user)
      .then(function(){
        $('#RegisterModal').closeModal();
      });
  }

  function registerError(error){
    Materialize.toast('You\'ve already registered dummy', 4000);
    console.log(error);
  }

}
