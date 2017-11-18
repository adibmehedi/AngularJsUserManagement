(function () {
    "use strict";

    angular
        .module('UserApp')
        .factory('dataService', dataService);

    var config = {
    apiKey: "AIzaSyDSCKlrKxxVw9jc1YXjRmR0tdPXgGKetMw",
    authDomain: "usermanager-93671.firebaseapp.com",
    databaseURL: "https://usermanager-93671.firebaseio.com",
    projectId: "usermanager-93671",
    storageBucket: "usermanager-93671.appspot.com",
    messagingSenderId: "131121448496"
    };

    firebase.initializeApp(config);

    function dataService($firebaseArray){

        var ref = firebase.database().ref().child("users");
        var users=$firebaseArray(ref);

        var service={
            getUser:getUser,
            addUser:addUser
        }

        return service;


        function addUser(name,email,phone,address){
            debugger;
           users.$add({
               name: name,
               email:email,
               phone:phone,
               address:address
           });
        }

        function getUser(){
            debugger;
            return users;
        }

    }    



})();



