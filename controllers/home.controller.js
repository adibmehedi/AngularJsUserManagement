(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'UserService'];

    function HomeController($scope, UserService) {
        var vm = this;
        vm.users=UserService.getUser();
        
    }

})();