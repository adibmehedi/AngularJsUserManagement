(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('EditUserController', EditUserController);

    EditUserController.$inject = ['$scope', '$routeParams', '$location', 'UserService'];

    function EditUserController($scope, $routeParams, $location, UserService) {
        var vm = this;

        var userId = $routeParams.userId;
        vm.formData = UserService.getUserDetails(userId);
        vm.updateData = updateData;

        function updateData(id) {
            UserService.updateData(vm.formData);
            $location.path('/users/'+id);
        }
        debugger;
    }

})();