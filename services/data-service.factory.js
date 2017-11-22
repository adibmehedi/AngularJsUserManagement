(function () {
    "use strict";

    angular
        .module('UserApp')
        .factory('dataService', dataService);

    dataService.$inject=['$firebaseArray', 'APP_CONFIG'];

    function dataService($firebaseArray, APP_CONFIG){
        firebase.initializeApp(APP_CONFIG.FIREBASE_API_CREDENTIALS);
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
           
            var childRef=ref.child(id);
            debugger;
            childRef.update({
                name: name,
                email:email,
                phone:phone,
                address:address
            });
        }

    }    



})();



