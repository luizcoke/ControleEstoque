angular.module('shared.module', [])

.controller('FooterCtrl', ['$scope', 'config', function($scope, config) {
    $scope.version = config.version;
}]);