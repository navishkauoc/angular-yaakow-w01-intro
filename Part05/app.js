// (function(){
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController',DIController);

//     function DIController($scope,$filter){
//         $scope.name = "Navishka";

//         $scope.upper = function (){
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         }
//     }
// })();

!function(){"use strict";angular.module("DIApp",[]).controller("DIController",function(n,e){n.name="Navishka",n.upper=function(){var a=e("uppercase");n.name=a(n.name)}})}();