angular
  .module('social-gallery', [
    'lbServices',
    'ngMdIcons',
    'ngAnimate',
    'ui.router',
    'flow'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    'flowFactoryProvider',
    AppConfig
  ])
  .controller('AppController', [
    '$rootScope',
    '$timeout',
    'Person',
    'LoopBackAuth',
    AppController
  ]);

function AppConfig ($stateProvider, $urlRouterProvider, flowFactoryProvider){
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

  flowFactoryProvider.defaults = {
    target: 'api/media/images/upload',
    permanentErrors: [404, 500, 501],
    singleFile: true
  };
}

function AppController ($rootScope, $timeout, Person, LoopBackAuth) {

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
