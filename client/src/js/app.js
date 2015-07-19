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
      deferred.resolve(event.srcElement.result);
    };

    reader.readAsDataURL(file);

    return deferred.promise;
  };

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
