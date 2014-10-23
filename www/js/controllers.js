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
        $scope.dias = [];

       //se crea el arbol para la lista en acordeon
        for (var i=0; i<6; i++) {
          switch(i){

            case 0:
              $scope.dias[i] = { nombre: "Lunes" };
            break;

            case 1:
              $scope.dias[i] = { nombre: "Martes" };
            break;

            case 2:
              $scope.dias[i] = { nombre : "Miercoles" };
            break;

            case 3:
              $scope.dias[i] = {nombre : "Jueves" };
            break;

            case 4:
              $scope.dias[i] = { nombre : "Viernes" };
            break;

            case 5:
              $scope.dias[i] = { nombre : "Sabado" };
            break;
          }
          
        }
        console.log($scope.dias);
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
 .controller('NotasCtrl', function($scope, Matricula, $stateParams) {
      Matricula.get(function(data){

        console.log(data);
        $scope.asignaturas = [];

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

