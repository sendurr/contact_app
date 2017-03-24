(function(){
    var module = angular.module("mycontactapp");
    module.controller("MainCtrl", function(contactDataSvc,defaultImageSvc){
    	//console.log("mine");
        var self= this;
        self.editMode=false;
        self.addMode=false;
        //self.newContact.picture.medium="https://randomuser.me/api/portraits/med/women/16.jpg";
        contactDataSvc.getContacts().then(function(response){
            self.contacts = response.data;
            //console.log("success");
            //console.log(self.contacts);
            //self.selectedContact = self.contacts[0]; 
        }, function(){
            console.log("API call failed");
        })
    	
        self.selectContact = function(index){
            self.successMsg = "";
            self.failedMsg = "";
            self.editMode=false;
        	self.selectedContact = self.contacts[index];
            //console.log(self.contacts.last());	
        }

        self.toggleEditMode = function(){
            self.editMode=!self.editMode;
        }

        self.toggleAddMode = function(){
            self.addMode=!self.addMode;
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

        self.addData = function(){
            /*self.selectedContact.id = new Date().toTimeString();
            //self.selectedContact.selectedContact.picture.medium = defaultImageSvc;
            self.selectedContact.name.first = "";
            self.selectedContact.name.last = "";
            self.selectedContact.location.street = "";
            self.selectedContact.location.city = "";
            self.selectedContact.location.state = "";
            self.selectedContact.cell = "";*/
            self.selectedContact = {
                "id" : new Date().toTimeString()
            };
            self.toggleAddMode();
        }

        self.saveNewData = function(){

            contactDataSvc.postContact(self.selectedContact).then(function(response){
                console.log("successfully updated!");
                self.successMsg = "successfully added new contact!";
                contactDataSvc.getContacts().then(function(response){
                    self.contacts = response.data;
                    //console.log("success");
                    //console.log(self.contacts);
                    //self.selectedContact = self.contacts[0]; 
                }, function(){
                    console.log("API call failed");
                })
            },function(response){
                console.log("Update failed");
                self.failedMsg = "Error updating. Please try again later";
            });
            self.toggleAddMode();  
        }

    });
})();