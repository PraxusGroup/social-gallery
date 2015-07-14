angular
  .module('social-gallery', [
    'ngMdIcons',
    'ui.router',
    'lbServices'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    AppConfig
  ])
  .controller('AppController', [
    '$rootScope',
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

function AppController ($rootScope, Person, LoopBackAuth) {

  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();

  Person.getCurrent(function(response){
      $rootScope.currentUser = response;
    },
    function(error){
      localStorage.clear();
    });

  //@TODO move this to a service that handles login/register better

  $rootScope.loginUser = function (loginFields){
    var promise = Person.login(loginFields).$promise;

    promise.then(processAuth, authError);

    return promise;
  };

  function processAuth(response){
    LoopBackAuth.currentUserId = response.userId;
    LoopBackAuth.accessTokenId = response.id;
    LoopBackAuth.save();
  }

  function authError(error){

  }

}
