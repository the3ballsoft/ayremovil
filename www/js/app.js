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

    .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
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
    })
    .state('app.historial', {
      url: "/historial",
      views: {
        'menuContent' :{
          templateUrl: "templates/historial.html",
          controller: 'HistorialCtrl'
        }
      }
    })

    .state('app.herramientas', {
      url: "/herramientas",
      views: {
        'menuContent' :{
          templateUrl: "templates/herramientas.html",
          controller: 'HerramientasCtrl'
        }
      }
    })

    .state('app.directorio', {
      url: "/herramientas/directorio",
      views: {
        'menuContent' :{
          templateUrl: "templates/herramientas/directorio.html",
          controller: 'DirectorioCtrl'
        }
      }

    })
    
    .state('app.calendario', {
      url: "/herramientas/calendario",
      views: {
        'menuContent' :{
          templateUrl: "templates/herramientas/calendario.html",
          controller: 'CalendarioCtrl'
        }
      }
    })

    .state('app.manual', {
      url: "/herramientas/manual",
      views: {
        'menuContent' :{
          templateUrl: "templates/herramientas/manual.html",
          controller: 'ManualCtrl'
        }
      }
    })

    .state('app.calculadora', {
      url: "/herramientas/calculadora",
      views: {
        'menuContent' :{
          templateUrl: "templates/herramientas/calculadora.html",
          controller: 'CalculadoraCtrl'
        }
      }
    });

// onclick="window.open('http://www.nraboy.com/contact', '_system', 'location=yes'); return false;"
  // si ningun estado coincide se hace la siguiente redireccion
  $urlRouterProvider.otherwise('/login');

});

