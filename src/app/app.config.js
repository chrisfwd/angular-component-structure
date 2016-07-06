(function() {
    'use strict';
    angular
        .module('app')
        .config(routes)
        .constant('_', _)
        .constant('moment', moment);


    function routes($httpProvider, $urlRouterProvider, RestangularProvider, APP_CONFIG, $compileProvider, blockUIConfig, IdleProvider) {
        var url = APP_CONFIG.BASE_URL;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('httpReqAppCodeInterceptor');

        applicationConfigServiceProvider.setConfig(APP_CONFIG);
        $urlRouterProvider.otherwise('/');
        RestangularProvider.setBaseUrl(url);
        RestangularProvider.setDefaultRequestParams({
            APP_CODE: APP_CONFIG.APP_CODE
        });

        // Spinner Configuration
        blockUIConfig.template = "<div class=\"block-ui-overlay\"></div><div class=\"block-ui-message-container\" aria-live=\"assertive\" aria-atomic=\"true\"><div class=\"block-ui-message\" ng-class=\"$_blockUiMessageClass\"><span><i class=\"fa fa-refresh fa-spin fa-3x\"></i></span></div></div>";

        $compileProvider.debugInfoEnabled(false);
        if (APP_CONFIG.ENV === 'development' || APP_CONFIG.ENV === 'ftest') {
            $compileProvider.debugInfoEnabled(true);
        }

        // Config for session timeout
        IdleProvider.idle(1500); // in seconds (25 mins)
        IdleProvider.timeout(300); // in seconds (5 mins)
    }
} ());
