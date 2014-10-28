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

})
.factory('Matricula', function($http) {
  var apiUrl = 'http://ayremovil.herokuapp.com/matricula_academica?codigo=';

  var matricula = undefined;

  var handleError = function(data){
    return "Error consultado matricula";
  };

  return {
    get: function(callback){
      var registro = JSON.parse(window.localStorage.getItem("loginDetails")).codigo;
   
      var request = $http({
                        method: "get",
                        url: apiUrl+registro,
                    });
      request.success(callback).error(handleError);
    }
  };

})
.factory('Horario', function($http) {
  

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
      "dia": "lunes",
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


  return {
    get: function(){
      return Dmatricula;
    }
  };

});
   
 
                   
 