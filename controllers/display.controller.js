(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('DisplayController', DisplayController);

    DisplayController.$inject = ['$scope', '$routeParams', '$location', 'UserService'];

    function DisplayController($scope, $routeParams, $location, UserService) {
        var vm = this;

        var userId = $routeParams.userId;
        vm.userData = UserService.getUserDetails(userId);
        vm.editUser = editUser;

        function editUser(id) {
            $location.path('/edit/' + id + "/");
        }

        debugger;


    }

})();