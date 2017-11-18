(function () {
    "use strict";

    angular
        .module('UserApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location', 'UserService'];

    function HomeController($scope, $location, UserService) {
        var vm = this;
        vm.users=UserService.getUser();

        vm.deleteUser=deleteUser;
        vm.displayUser=displayUser;

        function deleteUser(index){
            debugger;
            UserService.deleteUser(index);
        }

        function displayUser(id){
            debugger;
            $location.path('/users/'+id);
            
        }


        
    }

})();