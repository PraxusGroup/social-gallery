angular
  .module('social-gallery', [
    'ngMaterial',
    'ngMdIcons',
    'ngNewRouter',
    'app.home',
    'app.login',
    'app.register'
  ])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  { path: '/',           component: 'home'      },
  { path: '/login',      component: 'login'     },
  { path: '/register',   component: 'register'  }
];

function AppController ($router) {

}
