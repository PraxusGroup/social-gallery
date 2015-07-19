angular
  .module('social-gallery', [
    'lbServices',
    'ngAnimate',
    'ngFileUpload',
    'ngMdIcons',
    'ui.router'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    AppConfig
  ])
  .controller('AppController', [
    '$rootScope',
    '$timeout',
    '$q',
    'LoopBackAuth',
    'Person',
    AppController
  ]);

function AppConfig ($stateProvider, $urlRouterProvider, $httpProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    })
    .state('homePage', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    })
    .state('upload', {
      url: '/upload',
      templateUrl: 'components/upload/upload.html',
      controller: 'UploadController'
    });

  $urlRouterProvider.otherwise('home');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

function AppController ($rootScope, $timeout, $q, LoopBackAuth, Person) {

  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();

  $rootScope.currentUser = true;

  Person.getCurrent(
    function(response){
      $rootScope.currentUser = response;
    },
    function(error){
      LoopBackAuth.clearStorage();
      $rootScope.currentUser = null;
    });

  $rootScope.$on('$viewContentLoading', enableLoading);
  $rootScope.$on('$viewContentLoaded', disableLoading);

  ///////////////////////
  ///// File Handling
  ///////////////////////

  $rootScope.getFileData = function getFileData(file){
    var deferred = $q.defer();

    var reader = new FileReader();

    reader.onload = function(event) {
      deferred.resolve(compressImage(event.srcElement.result, file.type));
    };

    reader.readAsDataURL(file);

    return deferred.promise;
  };


  function compressImage(fileData, type){
    var imageContainer = new Image();
    imageContainer.src = fileData;

    var cvs = document.createElement('canvas');
    var resize = document.createElement('canvas');
    var width = imageContainer.naturalWidth;
    var height = imageContainer.naturalHeight;
    var ctx = cvs.getContext("2d");
    var ratio;

    if(height > 1080 || width > 1080){
      if(width > height){
        ratio = height/width;
        width = 1080;
        height = ratio*width;
      }else{
        ratio = width/height;
        height = 1080;
        width = ratio*height;
      }
    }

    cvs.width = width;
    cvs.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(imageContainer, 0, 0, width, height);

    fileData = cvs.toDataURL(type, 0.7);

    return fileData;
  }

  ///////////////////////
  ///// Auth Services
  ///////////////////////
  ///// @TODO move this to a service that handles login/register better
  ///////////////////////

  $rootScope.loginUser = function (loginFields){
    enableLoading();

    var promise = Person.login(loginFields).$promise;

    promise
      .then(processAuth, authError)
      .finally(disableLoading);

    return promise;
  };

  $rootScope.logout = function(){
    enableLoading();

    Person.logout().$promise
      .then(function(){
        $rootScope.currentUser = null;
      })
      .finally(disableLoading);

  };

  function processAuth(response){
    LoopBackAuth.currentUserId = response.userId;
    LoopBackAuth.accessTokenId = response.id;
    LoopBackAuth.save();

    $rootScope.currentUser = response.user;
  }

  function authError(error){
    //log error here
  }

  function enableLoading(){
    $rootScope.loading = true;
  }

  function disableLoading(){
    $timeout(function(){
      $rootScope.loading = false;
    }, 1000);
  }

}
