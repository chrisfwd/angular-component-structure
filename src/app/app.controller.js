(function () {
    'use strict';
    /**
     * Main Application Controller
     */
    angular
        .module('app')
        .controller('AppController', App);

    function App($scope, $state, $stateParams) {
        var vm = this;
        vm.$state = $state;
        vm.$stateParams = $stateParams;
    }

} ());
