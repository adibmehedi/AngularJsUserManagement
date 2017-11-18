(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('DisplayController', DisplayController);

    DisplayController.$inject = ['$scope','$routeParams', 'UserService'];

    function DisplayController($scope, $routeParams, UserService) {
        var vm = this;

        var userId=$routeParams.userId;
        vm.userData=UserService.getUserDetails(userId);
        debugger;
    }

})();