'use strict';

app.controller("cardProdutos", function ($scope, Produtos) {
    $scope.produtos = {};

    Produtos.getProdutos(function (obj) {
        $scope.produtos = obj.data;
    });
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


app.controller("tabletProdutos", function ($scope, Tablet) {
    $scope.produtos = {};

    Tablet.getTablet(function (obj) {
        $scope.produtos = obj.data;
    });
});


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