(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('AddUserController', AddUserController);

    AddUserController.$inject = ['$scope','$location', 'UserService'];

    function AddUserController($scope,$location, UserService) {
        var vm = this;
        vm.addNewUser = function () {
            UserService.addNewUser(vm.FormData);
            $location.path('/home');
        }
    }

})();