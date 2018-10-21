angular.module('produtos.list', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/produtos', {
      templateUrl: 'list/produtos-list.html',
      controller: 'ProdutosListCtrl'
    });
  }])

  .controller('ProdutosListCtrl', ['$scope', 'produtoService', function ($scope, produtoService) {

    onInit();

    $scope.remove = function (id) {
      produtoService.delete(id).then(function () {
        onInit();
      });
    };

    function onInit() {
      produtoService.get().then(function (resp) {
        $scope.produtos = resp;
      });
    }

  }]);