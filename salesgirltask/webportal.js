var app = angular.module("portal", ['ngMaterial', 'ngMessages']);

app.service('WebPortalSv',function(){

	var main={};
	main.details=[];


	// console.log(details);
	return main;

	


});



app.controller("webportal", function($scope, WebPortalSv) {




	$scope.types=['Medical','Grocery','Supermarket'];

	$scope.addShop= function(){

		var obj={

			"nameshop":$scope.shopname,
			"nameowner":$scope.ownername,
			"typeofshop":$scope.shoptype,
			"shopbudget":$scope.budget,
			"area":$scope.txtarea,
			"city":$scope.txtcity,
			"district":$scope.txtdist,
			"pin":$scope.txtpin


		};

		console.log(obj);
		WebPortalSv.details.push(obj);
		console.log(WebPortalSv.details);


		$scope.shopname="";
		$scope.ownername="";
		$scope.shoptype="";
		$scope.budget="";
		$scope.txtarea="";
		$scope.txtcity="";
		$scope.txtdist="";
		$scope.txtpin=""; 
		$scope.isVisible=false;


	}


	$scope.generateReport=function(){

		$scope.sumAll=0;
		$scope.sumMedical=0;
		$scope.sumGrocery=0;
		$scope.sumSuper=0;
		$scope.medCnt=0;
		$scope.groceryCnt=0;
		$scope.superCnt=0;

		for(var i=0;i<WebPortalSv.details.length;i++)
		{
			$scope.sumAll+=WebPortalSv.details[i].shopbudget;

			if(WebPortalSv.details[i].typeofshop==="Medical")
			{

				$scope.sumMedical+=WebPortalSv.details[i].shopbudget;
				$scope.medCnt++;
			}


			else if(WebPortalSv.details[i].typeofshop==="Grocery")
			{

				$scope.sumGrocery+=WebPortalSv.details[i].shopbudget;
				$scope.groceryCnt++;
			}


			if(WebPortalSv.details[i].typeofshop==="Supermarket")
			{

				$scope.sumSuper+=WebPortalSv.details[i].shopbudget;
				$scope.superCnt++;
			}

		}
		// console.log("Total budget all: "+$scope.sumAll);
		// console.log("Total budget med: "+$scope.sumMedical);
		// console.log("Total budget super: "+$scope.sumSuper);
		// console.log("Total budget grocery: "+$scope.sumGrocery);
		
		$scope.avgAll=$scope.sumAll/WebPortalSv.details.length;
		$scope.avgMed=$scope.sumMedical/$scope.medCnt;
		$scope.avgGrocery=$scope.sumGrocery/$scope.groceryCnt;
		$scope.avgSuper=$scope.sumSuper/$scope.superCnt;
	}


});