(function() {
    'use strict';
    angular.module('app.service.nav')
        .config(config)
        .run(run);

    function config(analyticServiceProvider) {
    }

    function run(analyticService){
        analyticService.init();
    }
}());