(function() {
    'use strict';
    angular.element(document).ready(function() {
        $('html').attr('ng-controller', 'AppController as app');
        $.bootstrap({
            bootstrapModule: 'app',
            appCode: 'APP',
            allowUrlOverrideOfConfig: true
        });
    });
}());