angular.module('produtos.view', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/produto/view/:idProduto', {
        templateUrl: 'view/produtos-view.html',
        controller: 'ProdutosViewCtrl'
      });
  }])

  .controller('ProdutosViewCtrl',
    ['$scope', '$routeParams', 'produtoService',
      function ($scope, $routeParams, produtoService) {

        var idProduto = $routeParams.idProduto;

        if (idProduto) {
          produtoService.getById(idProduto, $scope.produto).then(function (resp) {
            $scope.produto = resp;
          });
        }
      }]);