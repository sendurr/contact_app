(function(){
    var module = angular.module("mycontactapp");
    module.controller("MainCtrl", function(contactDataSvc){
    	//console.log("mine");
        var self= this;
        self.editMode=false;
        contactDataSvc.getContacts().then(function(response){
            self.contacts = response.data;
            //console.log("success");
            //console.log(self.contacts);
            self.selectedContact = self.contacts[0]; 
        }, function(){
            console.log("API call failed");
        })
    	
        self.selectContact = function(index){
            self.successMsg = "";
            self.failedMsg = "";
            self.editMode=false;
        	self.selectedContact = self.contacts[index];    	
        }

        self.toggleEditMode = function(){
            self.editMode=!self.editMode;
        }

        self.saveData = function(){
            contactDataSvc.putContact(self.selectedContact).then(function(response){
                console.log("successfully updated!");
                self.successMsg = "successfully updated!";
            },function(response){
                console.log("Update failed");
                self.failedMsg = "Error updating. Please try again later";
            });
            self.toggleEditMode();
        }

    });
})();