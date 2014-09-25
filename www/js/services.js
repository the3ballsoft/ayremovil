angular.module('ayremovil.services', [])

.factory('Auth', function($http) {
  var apiUrl = 'http://ayremovil.herokuapp.com/auth/login';

   //si es correcto la consulta al servidor externo
  var handleSuccess = function(data){
    if(data.msg === "true"){
      alert("Login correcto");
      return true;
    }
    if(data.msg === "false"){
      alert("Contraseña invalida");
      return false;
    }
  };
  //si devuelve un error 
  var handleError = function(data){
    alert(data.msg);
    return false;
  };

  /* Objeto devuelto */
  return {
    login: function(cod, pass){

      var datos = {"codigo" : cod, "password" : pass};

      var request = $http({
                        method: "post",
                        url: apiUrl,
                        data: datos
                    });
      request.success(handleSuccess).error(handleError);
    }

  }; //return


});
   
 
                   
 