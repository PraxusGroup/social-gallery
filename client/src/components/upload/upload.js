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
            transformUploadCard('#flow-container', '#upload-card', 'ramjet-hidden');
          });
        });
    }
  });

  $scope.clearUpload = function(){
    transformUploadCard('#upload-card', '#flow-container', 'ramjet-hidden');
    $timeout(function(){
      $scope.file = null;
      $scope.fileData = null;
    });
  };

  $scope.submitUpload = function(){
    if($scope.file){
      Upload.upload({
          url: 'http://'+window.location.host+'/api/media/images/upload',
          file: $scope.file
      }).progress(function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
      }).success(function (data, status, headers, config) {
          console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
      }).error(function (data, status, headers, config) {
          console.log('error status: ' + status);
      });
    }
  };

  function transformUploadCard(from, to, extraClass){
    from = $(from).get(0);
    to = $(to).get(0);
    to.classList.remove('hidden');

    ramjet.transform(from, to, {
      easing: function(t){
        return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
      },
      duration: 600,
      done: function () {
        // this function is called as soon as the transition completes
        to.classList.remove('hidden');

        if(extraClass){
          to.classList.remove(extraClass);
          from.classList.add(extraClass);
        }

      }
    });

    to.classList.add('hidden');
    from.classList.add('hidden');
  }



}
