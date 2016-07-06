
(function() {
    angular
        .module('app.directives.mainNav')
        .controller('MainNav', mainNavController);

    function mainNavController() {
        var vm = this;

        // Bindable Members
        vm.name = 'mainNav';
        ////////////

    }
}());