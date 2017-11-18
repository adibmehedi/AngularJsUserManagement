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
            addUser:addUser,
            deleteUser:deleteUser,
            getUserDetails:getUserDetails,
            updateUser:updateUser
        }

        return service;


        function addUser(name,email,phone,address){
           users.$add({
               name: name,
               email:email,
               phone:phone,
               address:address,
           });
        }

        function getUser(){
            return users;
        }

        function deleteUser(index){
            var user=users[index];
            debugger;
            users.$remove(user);
        }

        function getUserDetails(userId){
            debugger;
            return users.$getRecord(userId);
        }

        function updateUser(id,name,email,phone,address){
           

            // var user{
            //     $id:id, 
            //     name: name,
            //    email:email,
            //    phone:phone,
            //    address:address,
            // };
             
            // debugger;
        }

    }    



})();



