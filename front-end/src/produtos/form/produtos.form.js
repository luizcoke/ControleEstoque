angular.module('produtos.form', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/produto/form', {
        templateUrl: 'form/produtos-form.html',
        controller: 'ProdutosFormCtrl'
      })
      .when('/produto/form/:idProduto', {
        templateUrl: 'form/produtos-form.html',
        controller: 'ProdutosFormCtrl'
      });
  }])

  .controller('ProdutosFormCtrl',
    ['$scope', '$routeParams', '$location', 'produtoService',
      function ($scope, $routeParams, $location, produtoService) {
        
        var idProduto = $routeParams.idProduto;

        if (idProduto) {
          produtoService.getById(idProduto, $scope.produto).then(function (resp) {
            $scope.produto = resp;
          });
        }

        $scope.submitForm = function (isValid) {
          if (isValid) {


            if (idProduto) {
              produtoService.edit(idProduto, $scope.produto).then(function () {
                $location.path('/produto/view/' + idProduto);
              });

            } else {
              produtoService.save($scope.produto).then(function (resp) {
                $location.path('/produto/view/' + resp.idProduto);
              });
            }

          }
        };

      }]);