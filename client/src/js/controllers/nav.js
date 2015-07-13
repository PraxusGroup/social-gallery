angular
  .module('social-gallery')
  .controller('NavCtrl', ['$scope', '$rootScope', NavController]);

function NavController($scope, $rootScope) {

  $scope.icons = {
    gallery : 'insert_photo',
    upload: 'cloud_upload'
  };

}
