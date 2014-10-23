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
        data = Dmatricula;

        console.log(data);
        $scope.asignaturas = [];
        $scope.dias = [{"dia":"lunes","clases":[]},{"dia":"martes","clases":[]}, {"dia":"miercoles","clases":[]},{"dia":"jueves","clases":[]}, {"dia":"viernes","clases":[]}, {"dia":"sabado","clases":[]}];


       //se crea el arbol para la lista en acordeon
        for (var i=0; i<data.length; i++) {
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
          
          // $scope.asignaturas[i] = {
          //   name: data[i].materia.nombre,
          //   clases: []
          // };
          // $scope.asignaturas[i].docente = data[i].docente;

          // for (var k = 0; k < data[i].horario.length; k++) {
          //   $scope.asignaturas[i].clases.push(data[i].horario[k]);  
          // };
          
          // for (var j=0; j<data[i].horario.length; j++) {
          //   console.log(data[i].horario);
            
          // }
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

.controller('SabanaCtrl', function($scope, Matricula, $stateParams) {

  });































































var Dmatricula = [
  {
    "materia": {
      "nombre": "Introduccion a la carrera",
      "creditos": "1",
      "id": "53d53b0ff608870200e64be8",
      "createdAt": "2014-07-27T17:46:55.593Z",
      "updatedAt": "2014-07-27T17:46:55.593Z"
    },
    "codigo": "2010114051",
    "createdAt": "2014-07-27T17:58:03.913Z",
    "docente": "Ines Meriño Fuentes",
    "estado": "EnCurso",
    "hab": "0",
    "horario":  
    [
      {
        "dia": "lunes",
        "hora": "6-8",
        "salon": "Sierra norte 202"
      },
      {
        "dia": "jueves",
        "hora": "6-9",
        "salon": "Bloque 8"
      },
      {
        "dia": "viernes",
        "hora": "9-12",
        "salon": "Sierra norte 102"
      }
    ],
    "periodo": "20121",
    "seg1": "0",
    "seg2": "0",
    "seg3": "0",
    "updatedAt": "2014-10-16T20:20:44.340Z",
    "id": "53d53dabf608870200e64bee"
  },
  {
    "materia": {
      "nombre": "Algoritmos",
      "creditos": "3",
      "id": "53d53b27f608870200e64be9",
      "createdAt": "2014-07-27T17:47:19.327Z",
      "updatedAt": "2014-07-27T17:47:19.327Z"
    },
    "codigo": "2010114051",
    "createdAt": "2014-07-27T18:02:21.384Z",
    "docente": "Juan Guillermo Arrieta",
    "estado": "EnCurso",
    "hab": "0",
    "horario": [{
      "dia": "miercoles",
      "hora": "8-12",
      "salon": "Lab. Sistemas Operativos"
    }],
    "periodo": "20121",
    "seg1": "0",
    "seg2": "0",
    "seg3": "0",
    "updatedAt": "2014-10-16T20:26:01.010Z",
    "id": "53d53eadf608870200e64bef"
  }
]