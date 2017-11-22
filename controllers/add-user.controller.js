(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('AddUserController', AddUserController);

    

    function AddUserController($scope,$location, UserService) {
        var vm = this;
        vm.addNewUser = function () {
            UserService.addNewUser(vm.FormData);
            $location.path('/home');
        }
    }


    AddUserController.$inject = ['$scope','$location', 'UserService'];

})();