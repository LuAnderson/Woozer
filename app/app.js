var app = angular.module('wooza', ['ngRoute']).config(
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: './components/card-produtos/card-produtos.component.html',
                controller: 'cardProdutos',
                controllerAs: 'vm'
            })
    });


app.controller("cardProdutos", ["$scope", "$http", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas'
    }).then(function (response) {
        console.log("Resposta Obtida:", response.status, "retornando as seguintes informações: ", response.data);
        $scope.produtos = response.data;
    }, function (error) {
        console.log("Não foi possível conectar com a API, erro: ", error);
    });
}]);