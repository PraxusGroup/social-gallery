angular
  .module('social-gallery')
  .controller('UploadController', [
      '$scope',
      '$rootScope',
      UploadController
    ]);

function UploadController ($scope, $rootScope) {
  $scope.name = "Upload";
}
