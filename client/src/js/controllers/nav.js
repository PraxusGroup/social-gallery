angular
  .module('social-gallery')
  .controller('NavCtrl', ['$scope', '$rootScope',
      function($scope, $rootScope) {

        $scope.icons = {
          gallery : 'insert_photo',
          upload: 'cloud_upload'
        };

      }
    ]);
