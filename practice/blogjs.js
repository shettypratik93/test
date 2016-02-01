var app=angular.module("myblog",['ngMaterial','ngMessages']);

app.controller('mainCtrl',function($scope){


	$scope.naturearray=[

		{	
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



		}
		
	];
	$scope.foodarray=[

		{	
			category:"Food",
			title:"Mouthwatering Pani Puri",
			imgpath:"panipuri.jpg",
			blogtext:" Food1"

		},

		{

			category:"Food",
			title:"DESERTS!!!!",
			imgpath:"desert.JPG",
			blogtext:"Food2"



		}


	];


	$scope.submitForm=function(isValid){


		//console.log("In submit");
		if($scope.category1=="nature")
		{

		/*	console.log($scope.btitle);
			console.log($scope.imgpath);
			console.log($scope.blogtext);
			console.log($scope.category);
*/

			$scope.naturearray.push("Nature",$scope.btitle,$scope.imgpath,$scope.blogtext);
		}

	};


});
