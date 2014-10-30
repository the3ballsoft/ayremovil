angular.module('ayremovil.controllers', [])

 .controller('LoginCtrl', function($scope, Auth, $window, $ionicLoading) {
  	$scope.login = function (codigo, password){

      $scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        maxWidth: 200
      });

  		Auth.login(codigo, password, function(data){
  			if(data.msg === "false"){
          $scope.loadingIndicator.hide();
  				alert("Contraseña invalida!");
  				return;
  			}
  			if(data.msg === "true"){
  				window.localStorage.setItem("loginDetails", JSON.stringify(
		  		{   "fecha": new Date(),
		  			  "codigo": codigo
		  		}));
          $scope.loadingIndicator.hide();
		  		$window.location='#/app/perfil';
  			}
  			
  		});
	  	
	}
  })

  .controller('AppCtrl', function($scope, $stateParams) {

  })

  .controller('NoticiasCtrl', function($scope, $stateParams, $ionicLoading) {
    $scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        maxWidth: 200
      });
    $scope.loadingIndicator.hide();
  })

  .controller('PerfilCtrl', function($scope, Estudiante, $stateParams, $ionicLoading) {
  		$scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        noBackdrop: true,
        maxWidth: 200
      });

      Estudiante.get(function(data){
  			console.log(data);
  			$scope.estudiante = data;
        $scope.loadingIndicator.hide();
  		});
  })
  .controller('HorarioCtrl', function($scope, Horario, $stateParams, $ionicLoading) {
        $scope.loadingIndicator = $ionicLoading.show({
          content: 'Cargando',
          animation: 'fade-in',
          maxWidth: 200
        });

        data = Horario.get();
        
        $scope.asignaturas = [];
        $scope.dias = [{"dia":"lunes","clases":[]},{"dia":"martes","clases":[]}, {"dia":"miercoles","clases":[]},{"dia":"jueves","clases":[]}, {"dia":"viernes","clases":[]}, {"dia":"sabado","clases":[]}];


       //se crea el arbol para la lista en acordeon
        for (var i=0; i<data.length; i++) {

          $scope.asignaturas[i] = {
            name: data[i].materia.nombre,
            clases: []
          };
          notas = {
            seg1: parseInt(data[i].seg1),
            seg2: parseInt(data[i].seg2),
            seg3: parseInt(data[i].seg3)
          }
          $scope.asignaturas[i].docente = data[i].docente;
          $scope.asignaturas[i].clases.push(notas);

            for (var k = 0; k < data[i].horario.length; k++) {
              for (var j = 0; j < $scope.dias.length; j++) {
                if( data[i].horario[k].dia == $scope.dias[j].dia){
                  var clase ={
                    "docente": data[i].docente,
                    "nombre": data[i].materia.nombre,
                    "hora": data[i].horario[k].hora,
                    "dia": data[i].horario[k].dia,
                    "salon": data[i].horario[k].salon
                  }
                  $scope.dias[j].clases.push(clase);

                }
              }
            };
          

        }
        console.log($scope.dias);
        $scope.loadingIndicator.hide();
    
   
    /*
     * Si tiene una materia seleccionada, la deselecciona para abrir
     * la nueva materia solicitada
     */
    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;

    };   

  })
 .controller('NotasCtrl', function($scope, Matricula, $stateParams, $ionicLoading) {
      
      $scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        maxWidth: 200
      });

      Matricula.get(function(data){
        

        console.log(data);
        $scope.asignaturas = [];
        $scope.dias = [{"dia":"lunes","clases":[]},{"dia":"martes","clases":[]}, {"dia":"miercoles","clases":[]},{"dia":"jueves","clases":[]}, {"dia":"viernes","clases":[]}, {"dia":"sabado","clases":[]}];


       //se crea el arbol para la lista en acordeon
        for (var i=0; i<data.length; i++) {

          $scope.asignaturas[i] = {
            name: data[i].materia.nombre,
            clases: []
          };
          notas = {
            seg1: parseInt(data[i].seg1),
            seg2: parseInt(data[i].seg2),
            seg3: parseInt(data[i].seg3)
          }
          $scope.asignaturas[i].docente = data[i].docente;
          $scope.asignaturas[i].clases.push(notas);

            for (var k = 0; k < data[i].horario.length; k++) {
              for (var j = 0; j < $scope.dias.length; j++) {
                if( data[i].horario[k].dia == $scope.dias[j].dia){
                  var clase ={
                    "docente": data[i].docente,
                    "nombre": data[i].materia.nombre,
                    "hora": data[i].horario[k].hora,
                    "dia": data[i].horario[k].dia,
                    "salon": data[i].horario[k].salon
                  }
                  $scope.dias[j].clases.push(clase);

                }
              }
            };
        }
        console.log($scope.dias);
        $scope.loadingIndicator.hide();
      });
   
    /*
     * Si tiene una materia seleccionada, la deselecciona para abrir
     * la nueva materia solicitada
     */
    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;

    };  

  })

.controller('HistorialCtrl', function($scope, Historial, $stateParams, $ionicLoading) {
    $scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        maxWidth: 200
      });
    $scope.loadingIndicator.hide();

    var data = Historial.get(data);
    //console.log(data);

    $scope.periodos = data;
    
    console.log($scope.periodos);
    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;

    };  

  })

.controller('HerramientasCtrl', function($scope, $stateParams, $ionicLoading) {
    $scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        maxWidth: 200
      });
    $scope.loadingIndicator.hide();
})

.controller('DirectorioCtrl', function($scope, $stateParams, $ionicLoading) {
    $scope.loadingIndicator = $ionicLoading.show({
        content: 'Cargando',
        animation: 'fade-in',
        maxWidth: 200
      });
    $scope.loadingIndicator.hide();
})

.controller('ManualCtrl', function($scope, $stateParams, Manual) {
    $scope.contenido = Manual.get();
    console.log($scope.contenido);

    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;

    };
});
