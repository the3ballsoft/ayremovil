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
		  		// console.log(window.localStorage.getItem("loginDetails"))
		  		$window.location='#/app/perfil';
  			}
  			
  		});
	  	
	}
  })

  .controller('AppCtrl', function($scope, $stateParams) {
  		
  })

  .controller('PerfilCtrl', function($scope, Estudiante, $stateParams) {
  		Estudiante.get(function(data){
  			console.log(data);
  			$scope.estudiante = data;
  		});
  });

