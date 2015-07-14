angular
  .module('social-gallery', [
    'lbServices',
    'ngMdIcons',
    'ngAnimate',
    'ui.router'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    AppConfig
  ])
  .controller('AppController', [
    '$rootScope',
    '$timeout',
    'Person',
    'LoopBackAuth',
    AppController
  ]);

function AppConfig ($stateProvider, $urlRouterProvider){
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
    });

  $urlRouterProvider.otherwise('home');
}

function AppController ($rootScope, $timeout, Person, LoopBackAuth) {

  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();

  Person.getCurrent(function(response){
      $rootScope.currentUser = response;
    },
    function(error){
      LoopBackAuth.clearStorage();
    });

  $rootScope.$on('$viewContentLoading', enableLoading);
  $rootScope.$on('$viewContentLoaded', disableLoading);

  ///////////////////////
  ///// Auth Services
  ///////////////////////
  //// @TODO move this to a service that handles login/register better
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
    Person.logout();
    $rootScope.currentUser = null;
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
    $rootScope.loading = false;
  }

}
