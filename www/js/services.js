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

})

.factory('Manual', function($http) {
  

var datosReglamento = [
  {
    "titulo" : "DE LOS PRINCIPIOS GENERALES",
    "articulos" : [
      {
         "nombre" : "ARTICULO 1",
         "contenido": "Los principios consagrados en el Proyecto Educativo Institucional constituyen la base para la interpretación del reglamento estudiantil de la UNIVERSIDAD DEL MAGDALENA, como una institución de servicio público que en cumplimiento de su función social, se consolida como un centro de ciencia y cultura que promueve el contacto de los estudiantes con las expresiones culturales, artística, estéticas, deportivas, académicas y científicas; orientando todos los procesos hacia la formación humana integral de ciudadanos habilitados para el ejercicio profesional en las diferentes áreas del saber , tal como se define en su misión institucional.",
      },
      {
         "nombre" : "ARTICULO 2",
         "contenido": "Dentro de los limites de la Constitución y la Ley, la Universidad es autónoma para: desarrollar sus programas académicos y de extensión; designar su personal, organización y gobierno. Es de su propia naturaleza el ejercicio libre y responsable de la cátedra, el aprendizaje, la investigación y la controversia ideológica y política.",
      },
      {
         "nombre" : "ARTICULO 3",
         "contenido": "El proceso de formación debe desarrollarse dentro de claros criterios éticos y académicos, de tal forma que se dé un clima favorable donde impere la razón, el mutuo respeto por la función humana y social de la educación superior, así como una actitud de sana crítica que estimule la búsqueda permanente de nuevas expresiones de la ciencia, la cultura y el arte.",
      },
    ]       
  },
  {
    "titulo" : "DEL CAMPO DE APLICACIÓN",
    "articulos" : [
      {
         "nombre" : "ARTICULO 11",
         "contenido": "El presente reglamento es aplicable a toda persona que tenga la calidad de estudiante en un Programa Académico de la Universidad del Magdalena. Será considerado Estudiante de la Universidad del Magdalena, toda persona que posea matrícula vigente en cualquiera de los Programas Académicos de la Universidad debidamente autorizados en las diferentes modalidades educativas.",
      },
      {
         "nombre" : "ARTICULO 12",
         "contenido": "La calidad de estudiante se adquiere mediante el acto voluntario de matrícula inicial en un programa académico de la Universidad debidamente autorizado.",
      },
      {
         "nombre" : "ARTICULO 13",
         "contenido": " ",
      },
    ]    
  },
  {
    "titulo" : "DEL INGRESO A LA UNIVERSIDAD",
    "articulos" : [
      {
         "nombre" : "ARTICULO 14",
         "contenido": "Inscripción es el acto mediante el cual un aspirante solicita ser admitido a un programa académico ofrecido por la Universidad.",
      },
      {
         "nombre" : "ARTICULO 15",
         "contenido": "",
      },
      {
         "nombre" : "ARTICULO 16",
         "contenido": "",
      },
    ]     
  }
];


  return {
    get: function(){
      return datosReglamento;
    }
  };

});
   
 
                   
 