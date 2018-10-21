var app = angular.module('produtos.service', []);

app.factory('produtoService', function (config, $http) {
    return {
        get: function () {
            return $http.get(config.apiUrl + '/api/produtos')
                .then(function (resp) {
                    return resp.data;
                });
        },

        delete: function (id) {
            return $http.delete(config.apiUrl + '/api/produtos/ ' + id)
                .then(function (resp) {
                    return resp.data;
                });
        },
    };
});