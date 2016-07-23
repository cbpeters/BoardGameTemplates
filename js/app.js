var gameApp = angular.module('gameApp', []);
gameApp.directive('cards', function () {
    return {        
        controller: function($scope, $http) {    
            $http.get('/cards.json').then(function(result){
                $scope.cards = result.data;                
            });

            $http.get('/quests.json').then(function(result){
                $scope.quests = result.data;                
            });
            
        }
    };
});