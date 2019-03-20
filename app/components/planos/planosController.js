'use strict';

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
                    url: 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03'
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