angular.module('ayremovil.services', [])

.factory('Auth', function($http) {
  var apiUrl = 'http://ayremovil.herokuapp.com/auth/login';

  //  //si es correcto la consulta al servidor externo
  // var handleSuccess = function(data, callback){
  //   if(data.msg === "true"){
  //     // alert("Login correcto!");
  //     console.log(data.msg);
  //     callback(true);
  //   }
  //   if(data.msg === "false"){
  //     console.log(data.msg);
  //     callback(false);
  //   }
  // };
  //si devuelve un error 
  var handleError = function(data){
    alert(data.msg);
    console.log(data.msg);
    return false;
  };

  /* Objeto devuelto */
  return {
    login: function(cod, pass, callback){

      var datos = {"codigo" : cod, "password" : pass};

      var request = $http({
                        method: "post",
                        url: apiUrl,
                        data: datos
                    });      
      request.success(callback).error(handleError);
    }

  }; //return


})

.factory('Estudiante', function($http) {
  var apiUrl = 'http://ayremovil.herokuapp.com/estudiante/';

  var estudiante = undefined;

  var handleError = function(data){
    return "Error";
  };

  return {
    get: function(callback){
      var registro = JSON.parse(window.localStorage.getItem("loginDetails")).codigo;
   
      var request = $http({
                        method: "get",
                        url: apiUrl+registro,
                    });
      request.success(callback).error(handleError);
    },
    getObj: function(){
      return estudiante;
    }
  };

});
   
 
                   
 