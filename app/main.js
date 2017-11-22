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
                templateUrl:'views/add-user.view.html',
                controller:'AddUserController as vm'
            })
            .when("/edit/:userId",{
                templateUrl:'views/edit-user.view.html',
                controller:'EditUserController as vm'
            })
            .when("/users/:userId",{
                templateUrl:'views/display-user.view.html',
                controller: 'DisplayController as vm'
            })
            .otherwise({
                redirectTo:'/'
            });
    }

})();



