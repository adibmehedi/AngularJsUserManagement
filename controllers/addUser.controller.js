(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('AddUserController', AddUserController);

    AddUserController.$inject = ['$scope', 'UserService'];

    function AddUserController($scope, UserService) {
        var vm = this;
        vm.addNewUser = function () {
            debugger;
            UserService.addNewUser(vm.FormData);
            debugger;
        }
    }



})();



