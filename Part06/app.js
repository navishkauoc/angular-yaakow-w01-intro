(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Navishka";

  $scope.sayMessage = function(){
    return "Navishka likes to eat healthy snacks at night!";
  };
}

})();
