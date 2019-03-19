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
                    templateUrl: './components/card-produtos/card-produtos.component.html',
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