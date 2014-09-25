angular.module('ayremovil.controllers', [])

.controller('LoginCtrl', function($scope, Auth) {
  $scope.login = function (codigo, password){
  	Auth.login(codigo, password);
  };
});