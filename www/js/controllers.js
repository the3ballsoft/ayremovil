angular.module('ayremovil.controllers', [])

 .controller('LoginCtrl', function($scope, Auth, $window) {
  	$scope.login = function (codigo, password){

  		Auth.login(codigo, password, function(data){
  			if(data.msg === "false"){
  				alert("Contraseña invalida!");
  				return;
  			}
  			if(data.msg === "true"){
  				window.localStorage.setItem("loginDetails", JSON.stringify(
		  		{   "fecha": new Date(),
		  			  "codigo": codigo
		  		}));
		  		$window.location='#/app/perfil';
  			}
  			
  		});
	  	
	}
  })

  .controller('AppCtrl', function($scope, $stateParams) {
  		//garrido pon los 40
  })

  .controller('PerfilCtrl', function($scope, Estudiante, $stateParams) {
  		Estudiante.get(function(data){
  			console.log(data);
  			$scope.estudiante = data;
  		});
  })

  .controller('HorarioCtrl', function($scope, Matricula, $stateParams) {

    Matricula.get(function(data){

        console.log(data);
        $scope.asignaturas = [];

       //se crea el arbol para la lista en acordeon
        for (var i=0; i<data.length; i++) {
          $scope.asignaturas[i] = {
            name: data[i].materia.nombre,
            clases: []
          };
          $scope.asignaturas[i].docente = data[i].docente;
          $scope.asignaturas[i].clases.push(data[i].horario);
          // for (var j=0; j<data[i].horario.length; j++) {
          //   console.log(data[i].horario);
            
          // }
        }

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

  });

