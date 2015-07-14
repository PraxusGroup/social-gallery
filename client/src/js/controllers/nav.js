angular
  .module('social-gallery')
  .controller('NavController', ['$scope', '$rootScope', NavController]);

function NavController($scope, $rootScope) {

  $scope.icons = {
    gallery : 'insert_photo',
    upload: 'cloud_upload'
  };

  $scope.openRegisterModal = function(){
    $('.button-collapse').sideNav('hide');
    $('#RegisterModal').openModal();
  };

  $scope.openLoginModal = function(){
    $('.button-collapse').sideNav('hide');
    $('#LoginModal').openModal();
  };

}
