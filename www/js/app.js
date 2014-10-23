angular.module('ayremovil', ['ionic', 'ayremovil.controllers', 'ayremovil.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      views: {
        'login': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.perfil', {
      url: "/perfil",
      views: {
        'menuContent' :{
          templateUrl: "templates/perfil.html",
          controller: 'PerfilCtrl'
        }
      }
    })
    
    .state('app.horario', {
      url: "/horario",
      views: {
        'menuContent' :{
          templateUrl: "templates/horario.html",
          controller: 'HorarioCtrl'
        }
      }
    })
    .state('app.notas', {
      url: "/notas",
      views: {
        'menuContent' :{
          templateUrl: "templates/notas.html",
          controller: 'NotasCtrl'
        }
      }
    });

  // si ningun estado coincide se hace la siguiente redireccion
  $urlRouterProvider.otherwise('/login');

});

