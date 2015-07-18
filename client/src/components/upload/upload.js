angular
  .module('social-gallery')
  .controller('UploadController', [
      '$scope',
      '$rootScope',
      '$timeout',
      UploadController
    ]);

function UploadController ($scope, $rootScope, $timeout) {
  $scope.name = "Upload";

  $(document).on("mousedown", ".fileupload", function (e) {
    $(this).find('input[type="file"]').trigger('click');
    e.stopPropagation();
  });

  $(document).on("mousedown", ".fileupload input", function (e) {
    e.stopPropagation();
  });

  $rootScope.filesAdded = function($files, $event, $flow){
    $timeout(function(){

      var file = $flow.files[0].file;
      var type = $flow.files[0].file.type;
      var reader = new FileReader();

      $scope.file = $flow.files[0];

      reader.onload = function(event) {
        $timeout(function(){
          $scope.fileData = event.srcElement.result;
        });
      };

      reader.readAsDataURL(file);

      console.log($scope.file);
    });

  };
}
