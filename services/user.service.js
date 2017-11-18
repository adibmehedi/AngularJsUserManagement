(function () {
    "use strict";

    angular
        .module('UserApp')
        .service('UserService', UserService);

    UserService.$inject=['dataService'];

    function UserService(dataService){

        var service=this;

        service.addNewUser=function(formData){
            debugger;
            dataService.addUser(formData.name,formData.email,formData.phone,formData.address);
          
        }

        service.getUser=function(){
            debugger;
            return dataService.getUser();
        }

    }    



})();



