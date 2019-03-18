'use strict';

var app = angular
    .module('wooza', ['ngRoute']).config(
        function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: './components/card-produtos/card-produtos.component.html',
                    controller: 'cardProdutos',
                    controllerAs: 'vm'
                })
                .when('/TBT01', {
                    templateUrl: './components/card-tablet/card-tablet.component.html',
                    controller: 'tabletProdutos',
                    controllerAs: 'vm'
                })
                .when('/CPT02', {
                    templateUrl: './components/planos/planos.component.html',
                    controller: 'computadorProdutos',
                    controllerAs: 'vm'
                })
                .when('/WF03', {
                    templateUrl: './components/planos/planos.component.html',
                    controller: 'wifiProdutos',
                    controllerAs: 'vm'
                })
                .when('/formulario/:id', {
                    templateUrl: './components/formulario/formulario.component.html',
                    controller: 'formUser',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });
        });


app.controller("cardProdutos", function ($scope, Produtos) {
    $scope.produtos = {};

    Produtos.getProdutos(function (obj) {
        $scope.produtos = obj.data;
    });
});

app.controller("tabletProdutos", function ($scope, Tablet) {
    $scope.produtos = {};

    Tablet.getTablet(function (obj) {
        $scope.produtos = obj.data;
    });
});

app.controller("computadorProdutos", function ($scope, Computador) {
    $scope.produto = {};

    Computador.getComputador(function (obj) {
        $scope.produto = obj.data;
    });
});

app.controller("wifiProdutos", function ($scope, Wifi) {
    $scope.produto = {};

    Wifi.getWifi(function (obj) {
        $scope.produto = obj.data;
    });
});

app.controller('formUser', function ($scope) {
    $scope.sendForm = function () {
        console.log("$scope.userInfo: ", $scope.userInfo);
    };
});

app.factory('Produtos', function ($http) {
    var produtosList;
    var obj = {};

    obj = {
        getProdutos: function (callback) {
            if (produtosList) {
                callback(produtosList);
                return false;
            } else {

                $http({
                    method: 'GET',
                    url: 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas'
                }).then(function (data) {
                    obj.saveProdutos(data);
                    callback(data);

                })
            }
        },
        saveProdutos: function (data) {
            produtosList = data;
        }
    }

    return obj;
})

app.factory('Tablet', function ($http) {
    var tabletList;
    var obj = {};

    obj = {
        getTablet: function (callback) {
            if (tabletList) {
                callback(tabletList);
                return false;
            } else {

                $http({
                    method: 'GET',
                    url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01'
                }).then(function (data) {
                    obj.saveTablet(data);
                    callback(data);

                })
            }
        },
        saveTablet: function (data) {
            tabletList = data;
        }
    }

    return obj;
})

app.factory('Computador', function ($http) {
    var computadorList;
    var obj = {};

    obj = {
        getComputador: function (callback) {
            if (computadorList) {
                callback(computadorList);
                return false;
            } else {

                $http({
                    method: 'GET',
                    url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02'
                }).then(function (data) {
                    obj.saveComputador(data);
                    callback(data);

                })
            }
        },
        saveComputador: function (data) {
            computadorList = data;
        }
    }

    return obj;
})

app.factory('Wifi', function ($http) {
    var wifiList;
    var obj = {};

    obj = {
        getWifi: function (callback) {
            if (wifiList) {
                callback(wifiList);
                return false;
            } else {

                $http({
                    method: 'GET',
                    url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02'
                }).then(function (data) {
                    obj.saveWifi(data);
                    callback(data);

                })
            }
        },
        saveWifi: function (data) {
            wifiList = data;
        }
    }

    return obj;
})