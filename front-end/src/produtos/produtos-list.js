angular.module('produtos.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/produtos', {
    templateUrl: 'produtos-list.html',
    controller: 'ProdutosListCtrl'
  });
}])

.controller('ProdutosListCtrl', [function() {

}]);