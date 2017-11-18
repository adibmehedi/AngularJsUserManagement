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
                redirectTo:'/'
            })
            .when("/users/add",{
                templateUrl:'views/addUser.view.html',
                controller:'AddUserController as vm'
            })
            .when("/edit/:userId",{
                templateUrl:'views/editUser.view.html',
                 controller:'EditUserController as vm'
            })
            .when("/users/:userId",{
                templateUrl:'views/displayUser.view.html',
                controller: 'DisplayController as vm'
            })
            .otherwise({
                redirectTo:'/'
            });
    }

})();



