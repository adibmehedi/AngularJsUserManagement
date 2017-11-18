(function () {
    "use strict";

    angular
        .module('UserApp')
        .service('UserService', UserService);

  // userService.$inject=['$scope'];

    function UserService(){

        var service=this;

        this.addNewUser=function(formData){
            debugger;
            alert("Service");
            console.log("UserService to addNewUser:",formData.toString());
        }

    }    



})();



