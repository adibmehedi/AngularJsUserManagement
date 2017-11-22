(function () {
    "use strict";

    angular
        .module('UserApp')
        .service('UserService', UserService);

    UserService.$inject=['dataService'];

    function UserService(dataService){

        var service=this;

        service.addNewUser=function(formData){
            dataService.addUser(formData.name,formData.email,formData.phone,formData.address);
        }

        service.getUser=function(){
            return dataService.getUser();
        }

        service.deleteUser=function(index){
            dataService.deleteUser(index);
        }

        service.getUserDetails=function(userId){
            debugger;
            return dataService.getUserDetails(userId);
        }

        service.updateData=function(formData){
            debugger;
           dataService.updateUser(formData.$id,formData.name,formData.email,formData.phone,formData.address);
        }

    }    



})();



