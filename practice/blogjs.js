var app=angular.module("myblog",['ngMaterial','ngMessages','ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/Home',{templateUrl:'homepg.html',controller:'mainCtrl'}).
	when('/Nature',{templateUrl:'nature.html',controller:'mainCtrl'}).
	when('/Food',{templateUrl:'food.html',controller:'mainCtrl'}).
	when('/AddNew',{templateUrl:'addnew.html',controller:'mainCtrl'}).
	otherwise({redirectTo:'/Home'});
}]);

app
.controller('mainCtrl',function($scope)
{

	
	console.log("Inside Controller");
	$scope.naturearray=[{	
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
		}];


	$scope.submitForm=function(isValid){
		console.log("In submit");

		var no=$scope.naturearray.length;
		var no1=$scope.foodarray.length;

		console.log(no);
		console.log(no1);

		if($scope.category1=="nature")
		{

			console.log($scope.btitle);
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
			$scope.naturearray.push(obj);
			var no2=$scope.naturearray.length;
			console.log(no2);
			console.log("after push");

		}
		if($scope.category1=="food")
		{		
			var obj1 = {
				"category": "Food",
				"title": $scope.btitle,
				"imgpath": $scope.imgpath,
				"blogtext": $scope.blogtext1
			}
			$scope.foodarray.push(obj1);
		}


		var no=$scope.naturearray.length;
		var no1=$scope.foodarray.length;

	};


});
