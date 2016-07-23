var gameApp = angular.module('gameApp', []);
gameApp.directive('cards', function () {
    return {        
        controller: function($scope, $http) {    
            $http.get('/cards.json')
                .then(function(result){
                    $scope.cards = result.data;                
                });
        }
    };
});