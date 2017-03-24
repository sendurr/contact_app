(function(){
    var module = angular.module("mycontactapp");
    module.controller("MainCtrl", function(contactDataSvc){
    	//console.log("mine");
        this.contacts = contactDataSvc.contacts;
    	this.selectedContact = this.contacts[0]; 
        this.selectContact = function(index){
        	this.selectedContact = this.contacts[index];    	
        }
    });
})();