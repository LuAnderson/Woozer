var app = angular.module('wooza', ['ngRoute']).config(
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: './components/card-produtos/card-produtos.component.html',
                controller: 'cardProdutos',
                controllerAs: 'vm'
            })
            .when('/tablet', {
                templateUrl: './components/card-tablet/card-tablet.component.html',
                controller: 'tabletProdutos',
                controllerAs: 'vm'
            })
            .when('/computador', {
                templateUrl: './components/planos/planos.component.html',
                controller: 'computadorProdutos',
                controllerAs: 'vm'
            })
            .when('/wifi', {
                templateUrl: './components/planos/planos.component.html',
                controller: 'wifiProdutos',
                controllerAs: 'vm'
            })
            .when('/formulario', {
                templateUrl: './components/formulario/formulario.component.html',
                controller: 'formUser',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/'
            });
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

app.controller("tabletProdutos", ["$scope", "$http", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01'
    }).then(function (response) {
        console.log("(tabletProdutos) Resposta Obtida:", response.status, "retornando as seguintes informações: ", response.data);
        $scope.produtos = response.data;
    }, function (error) {
        console.log("Não foi possível conectar com a API, erro: ", error);
    });
}]);

app.controller("computadorProdutos", ["$scope", "$http", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02'
    }).then(function (response) {
        console.log("(computadorProdutos) Resposta Obtida:", response.status, "retornando as seguintes informações: ", response.data);
        $scope.produto = response.data;
    }, function (error) {
        console.log("Não foi possível conectar com a API, erro: ", error);
    });
}]);

app.controller("wifiProdutos", ["$scope", "$http", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03'
    }).then(function (response) {
        console.log("(wifiProdutos) Resposta Obtida:", response.status, "retornando as seguintes informações: ", response.data);
        $scope.produto = response.data;
    }, function (error) {
        console.log("Não foi possível conectar com a API, erro: ", error);
    });
}]);

app.controller('formUser', function ($scope) {
    $scope.master = {};
    $scope.send = function () { 
        console.log("$scope.userInfo: ", $scope.userInfo);
    };
});