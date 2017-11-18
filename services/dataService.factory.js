(function () {
    "use strict";

    angular
        .module('UserApp')
        .factory('dataService', dataService);

    dataService.$inject=['$http'];

    function dataService($http){

        var service={
            getUser:getUser,
            addUser:addUser
        }

        return service;


        function addUser(name,email,phone,address){
            debugger;

        }

        function getUser(){

        }

    }    



})();



