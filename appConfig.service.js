(function(){
	var module = angular.module("mycontactapp");
	module.service("appServiceSvc",function(appNameSvc){
			this.title = appNameSvc,
			this.Author = "Sendurr",
			this.builtdate =  new Date().toDateString()
	});
})();