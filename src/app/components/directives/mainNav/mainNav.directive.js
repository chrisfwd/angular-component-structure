/**
 * mainNav directive
 */
(function() {
    angular
        .module('app.directives.mainNav')
        .directive('mainNav', mainNav);

    function mainNav() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                options: '<'
            },
            templateUrl: 'components/directives/mainNav/mainNav.html',
            controller: 'MainNavController',
            controllerAs: 'mainNav',
            bindToController: true
        };

        return directive;
    }

}());