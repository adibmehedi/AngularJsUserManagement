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
        vm.editUser=editUser;

        function editUser(id){
            $location.path('/edit/'+id+"/");
        }

        function deleteUser(index){
            UserService.deleteUser(index);
        }

        function displayUser(id){
            $location.path('/users/'+id);
        }


        
    }

})();