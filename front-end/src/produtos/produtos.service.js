var app = angular.module('produtos.service', []);

app.factory('produtoService', function (config, $http) {
    return {

        get: function () {
            return $http.get(config.apiUrl + '/api/produtos')
                .then(function (resp) {
                    return resp.data;
                });
        },

        getById: function (id) {
            return $http.get(config.apiUrl + '/api/produtos/' + id)
                .then(function (resp) {
                    return resp.data;
                });
        },

        save: function (model) {
            return $http.post(config.apiUrl + '/api/produtos', model)
                .then(function (resp) {
                    return resp.data;
                });
        },

        edit: function (id, model) {
            return $http.put(config.apiUrl + '/api/produtos/' + id, model)
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