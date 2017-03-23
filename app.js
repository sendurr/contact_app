
var module = angular.module("mycontactapp", []);

module.value("appNameSvc","Welcome to Contact App");
module.value("appDataSvc", {
	"title": "Contact App information",
	"Author": "Sendurr",
	version: 1
});
module.constant("initializeSvc", function(){
	console.log("The page is loaded");
})

module.factory("appFactorySvc",function(appNameSvc){
	var data={
		"title": appNameSvc,
		"Author": "Sendurr",
		builtdate: new Date().toDateString()
	};
	return data;
});

module.controller("MainCtrl", function(){
	//console.log("mine");
    this.contacts =[{"gender":"female","name":{"title":"ms","first":"galina","last":"alsemgeest"},"location":{"street":"2467 kanaalstraat","city":"beemster","state":"utrecht","postcode":38819},"email":"galina.alsemgeest@example.com","login":{"username":"greenwolf270","password":"gerard","salt":"sK2NZks4","md5":"b456562e7dee3b0e2e90e9f15f93c95f","sha1":"12584c96578ea80c580b0b8e32b997e41ef38db7","sha256":"3e8f5c6e2fed44c37fc3c4e6a51d75968e79283b3cdf49e5a9fdb4d0e3a14ca0"},"dob":"1968-12-13 23:59:51","registered":"2013-02-20 16:36:00","phone":"(945)-924-2833","cell":"(562)-410-8475","id":{"name":"BSN","value":"61720617"},"picture":{"large":"https://randomuser.me/api/portraits/women/30.jpg","medium":"https://randomuser.me/api/portraits/med/women/30.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/30.jpg"},"nat":"NL"},
                    {"gender":"female","name":{"title":"mrs","first":"séléna","last":"rey"},"location":{"street":"4691 rue barrier","city":"le havre","state":"creuse","postcode":52226},"email":"séléna.rey@example.com","login":{"username":"silvermeercat446","password":"chevelle","salt":"hdJS2BLT","md5":"57c80e6ef8d59a2bd270b78a7d424ef3","sha1":"df0bfebe21a8eac3905736956998f0964a8ed5cc","sha256":"3a998e679a1f82e08e4e9458876b437247d2da43111a4d9c2e6090109e4ffe97"},"dob":"1960-06-24 10:03:41","registered":"2005-03-13 18:35:00","phone":"01-06-29-77-86","cell":"06-13-46-79-70","id":{"name":"INSEE","value":"260519516636 47"},"picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"FR"},
                    {"gender":"male","name":{"title":"mr","first":"ceyhun","last":"karabulut"},"location":{"street":"8001 bağdat cd","city":"burdur","state":"uşak","postcode":71177},"email":"ceyhun.karabulut@example.com","login":{"username":"organicpanda662","password":"pumper","salt":"xzFniyB6","md5":"121d8bf7ed277cd587361e2e1ae02349","sha1":"52dad8783d4f81e72b151f89b541a8266835312d","sha256":"85f0b2bc004e75c8710f31592737251162553f54e3dab6892e40c8261de68600"},"dob":"1984-08-08 06:42:23","registered":"2005-05-20 13:27:07","phone":"(118)-415-7713","cell":"(409)-065-1028","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/73.jpg","medium":"https://randomuser.me/api/portraits/med/men/73.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/73.jpg"},"nat":"TR"},
                    {"gender":"male","name":{"title":"mr","first":"ümit","last":"erbay"},"location":{"street":"9121 tunalı hilmi cd","city":"rize","state":"trabzon","postcode":21036},"email":"ümit.erbay@example.com","login":{"username":"purpletiger825","password":"boobies","salt":"roOW17ja","md5":"16aa5059c87eb6a286c9dc0d6d06b1ba","sha1":"d45f1227eee541d4fa72aed2dec103b093d05540","sha256":"b9e2968ad0ca188fa9b67ccfc2ab97258905e1072ea8bf2b4a82cb5b3dd45112"},"dob":"1988-02-13 22:02:56","registered":"2003-02-15 19:09:34","phone":"(021)-466-8509","cell":"(874)-800-3635","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/37.jpg","medium":"https://randomuser.me/api/portraits/med/men/37.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/37.jpg"},"nat":"TR"}];
	this.selectedContact = this.contacts[0]; 
    this.selectContact = function(index){
    	this.selectedContact = this.contacts[index];    	
    }


    //console.log("here" + this.selectedContact); */
});

module.controller("headerCtrl", function(appFactorySvc){
	this.apptitle = appFactorySvc.title;
	this.builtdate = appFactorySvc.builtdate;
	this.Author = appFactorySvc.Author;
	//initializeSvc();

});

module.controller("footerCtrl", function(appFactorySvc){
	this.apptitle = "Site information";
	this.builtdate = appFactorySvc.builtdate;
	this.Author = appFactorySvc.Author;
});