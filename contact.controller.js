(function(){
    var module = angular.module("mycontactapp");
    module.controller("MainCtrl", function(contactDataSvc){
    	//console.log("mine");
        var self= this;
        contactDataSvc.getContacts().then(function(response){
            self.contacts = response.data;
            //console.log("success");
            //console.log(self.contacts);
            self.selectedContact = self.contacts[0]; 
        }, function(){
            console.log("API call failed");
        })
    	
        self.selectContact = function(index){
        	self.selectedContact = self.contacts[index];    	
        }
    });
})();