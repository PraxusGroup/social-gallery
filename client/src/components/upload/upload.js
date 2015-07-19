angular
  .module('social-gallery')
  .controller('UploadController', [
      '$scope',
      '$rootScope',
      '$timeout',
      'Upload',
      'Metadata',
      UploadController
    ]);

function UploadController ($scope, $rootScope, $timeout, Upload, Metadata) {

  $(document).ready(function() {
    $('textarea#caption').characterCounter();
  });

  $(document).on("mousedown", ".fileupload", function (e) {
    $(this).find('input[type="file"]').trigger('click');
    e.stopPropagation();
  });

  $(document).on("mousedown", ".fileupload input", function (e) {
    e.stopPropagation();
  });

  $scope.$watch('file', function (file) {
    if((file && !Array.isArray(file)) || (Array.isArray(file) && file[0])){
      if(Array.isArray(file))
        file = file[0];

      $rootScope.getFileData(file)
        .then(function(res){
          $scope.fileData = res;
          $timeout(function(){
            transformUploadCard('ramjet-hidden');
          });
        });
    }
  });

  $scope.submitUpload = function(){
    if($scope.file){

    }
  };

  function transformUploadCard(extraClass){
    var from = $('#flow-container').get(0);
    var to = $('#upload-card').get(0);
    to.classList.remove('hidden');

    ramjet.transform(from, to, {
      easing: function(t){
        return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
      },
      duration: 600,
      done: function () {
        // this function is called as soon as the transition completes
        to.classList.remove('hidden');

        if(extraClass)
          to.classList.remove(extraClass);
      }
    });

    to.classList.add('hidden');
    from.classList.add('hidden');
  }



}
