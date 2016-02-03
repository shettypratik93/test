var app=angular.module("myblog",['ngMaterial','ngMessages','ui.router']);


app.service('arrayService',function(){

	var main={};
	main.snaturearray=[];
	main.snaturearray=[{	
			category:"Nature",
			title:"Slpendid Kashmir",
			imgpath:"kashmir.jpg",
			blogtext:"Over 15km around, Dal Lake is Srinagar's jewel, a vast, mirror-flat sheet of water reflecting the carved wooden balconies of the houseboats and the misty peaks of the Pir Panjal mountains. Flotillas of gaily painted shikaras (gondola-like taxi boats) skiff around the lake, transporting goods to market, children to school and travellers from houseboat to shore. "

		}];
	main.sfoodarray=[];
	main.sfoodarray=[{
			category:"Food",
			title:"Mouthwatering Pani Puri",
			imgpath:"panipuri.jpg",
			blogtext:" Food1"


	}];

	return main;

	


});

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/Home');


	$stateProvider
	.state('Home',{url:'/Home',templateUrl:'homepg.html',controller:'mainCtrl',})
	.state('Nature',{url:'/Nature',templateUrl:'nature.html',controller:'mainCtrl',})
	.state('Food',{url:'/Food',templateUrl:'food.html',controller:'mainCtrl',})
	.state('AddNew',{url:'/AddNew',templateUrl:'addnew.html',controller:'mainCtrl',});
	
}]);

app.controller('mainCtrl',function($scope,arrayService)
{	
	$scope.placeholder="Blog Category: ";
	$scope.fordisplayn={};

	

	$scope.fordisplayn=arrayService.snaturearray;
	console.log($scope.fordisplayn);
	$scope.fordisplayf=arrayService.sfoodarray;
	console.log($scope.fordisplayf);

	
	console.log("Inside Controller");

/*	$scope.naturearray=[{	
			category:"Nature",
			title:"Slpendid Kashmir",
			imgpath:"kashmir.jpg",
			blogtext:"Over 15km around, Dal Lake is Srinagar's jewel, a vast, mirror-flat sheet of water reflecting the carved wooden balconies of the houseboats and the misty peaks of the Pir Panjal mountains. Flotillas of gaily painted shikaras (gondola-like taxi boats) skiff around the lake, transporting goods to market, children to school and travellers from houseboat to shore. "

		},
		{
			category:"Nature",
			title:"Beautiful New Zealand",
			imgpath:"newzealand.jpg",
			blogtext:"A tiny paradise covering only 250 hectares, Ulva Island/Te Wharawhara is a great place to see lots of native New Zealand birds. To get the most out of Ulva Island, go on a tour with Ulva’s Guided Walks ."
		}];

	$scope.foodarray=[{	
			category:"Food",
			title:"Mouthwatering Pani Puri",
			imgpath:"panipuri.jpg",
			blogtext:" Food1"

		},{

			category:"Food",
			title:"DESERTS!!!!",
			imgpath:"desert.JPG",
			blogtext:"Food2"
		}];*/


	$scope.submitForm=function(isValid){
		console.log("In submit");

		// var no=$scope.naturearray.length;
		// var no1=$scope.foodarray.length;

		console.log($scope.category1);
		// console.log(no1);

		if($scope.category1=="nature")
		{

			console.log("asd");
			console.log($scope.imgpath);
			console.log($scope.blogtext1);
			console.log($scope.category1);

			var obj = {
				"category": "Nature",
				"title": $scope.btitle,
				"imgpath": $scope.imgpath,
				"blogtext": $scope.blogtext1
			}

			console.log(obj);
			console.log("before push");


			arrayService.snaturearray.push(obj);
			
			 // $rootscope.$apply(function () {
			// $scope.naturearray.push(obj);
		// });
			// var no2=$scope.naturearray.length;
			// console.log(no2);
			// console.log($scope.naturearray);

		}
		if($scope.category1=="food")
		{		
			var obj1 = {
				"category": "Food",
				"title": $scope.btitle,
				"imgpath": $scope.imgpath,
				"blogtext": $scope.blogtext1
			}
			// $scope.foodarray.push(obj1);

			arrayService.sfoodarray.push(obj1);
		}


		// var no=$scope.naturearray.length;
		// var no1=$scope.foodarray.length;

	};


});
