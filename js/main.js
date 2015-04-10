(function(){
	var app = angular.module('store', []);

	app.controller('PoCController', function(){
		this.data = data;
		this.Location = {
			Name: "",
			Copy: ""
		};
		this.News = [];
		this.Services = [];
		this.List = ["Denver", "Boulder", "National"];
		this.setActive = function(location){
			this.Location.Name = location;
			this.Location.Copy = this.data.Locations[location].Copy;
			this.Services = this.data.Services;
			this.News = setNews(location, this.data.News);
			this.Links = this.data.Locations[location].Links;
		}
		this.setActive("Denver");

	});
	
	function setNews(location, initArray){
		var NewsArray = [];
		var NationalArray = [];
		for(var i = 0; i < initArray.length; i++){
			if (initArray[i].Locations[location] == true){
				NewsArray.push(initArray[i]);
			}
			if (initArray[i].Locations["National"] == true){
				NationalArray.push(initArray[i]);
			}
		}
		
		for(var i = 0; NewsArray.length <= 3; i++){
			NewsArray.push(NationalArray[i]);
		}

		return NewsArray;
	};
	
	app.directive('servicesModule' , function(){
		return {
			template:'<div class="row services"><h2>Services Provided in {{pocCtrl.Location.Name}}</h2><div class="col-md-6" ng-repeat="service in pocCtrl.Services" class="repeated-item" ng-if="service.Locations.indexOf(pocCtrl.Location.Name) != -1"><div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">{{service.Headline}}</h4><p class="list-group-item-text">{{service.Copy}}</p></a></div></div></div>'
		}
	})
})();