angular.module('produtos.form', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/form', {
      templateUrl: 'form/produtos-form.html',
      controller: 'ProdutosFormCtrl'
    });
  }])

  .controller('ProdutosFormCtrl', function ($scope) {
    $scope.submitForm = function (isValid) {
      if (isValid) {
        alert('our form is amazing');
      }
    };
  });