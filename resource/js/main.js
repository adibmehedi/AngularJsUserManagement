(function () {
    "use strict";

    angular
        .module('UserApp', ['ngRoute','firebase'])
        .config(Config);

    Config.$inject=['$routeProvider'];

    function Config($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl:'views/home.view.html',
                controller:'HomeController as vm'
            })
            .when("/users",{
                templateUrl:'views/displayUser.view.html'
            })
            .when("/users/add",{
                templateUrl:'views/addUser.view.html',
                controller:'AddUserController as vm'
            })
            .when("/users/edit",{
                templateUrl:'views/editUser.view.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    }

})();



