var app = angular.module("portal", ['ngMaterial', 'ngMessages', 'ui.router','ng-fusioncharts']);

 // $scope.Regex = /^([a-zA-Z]+)$/;
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

   // $urlRouterProvider.when('', '/Formin');
    //$urlRouterProvider.otherwise('/Formin');

    $stateProvider
        .state('Form', {
            views: {
                "mainview": {
                    url: '/Formin',
                    templateUrl: 'webform.html',
                    controller: 'webportal',
                }
            }
        })
        .state('Report', {
            views: {
                "mainview": {
            url: '/Report',
            templateUrl: 'webportal1.html',
            controller: 'webportal2',
        }

    }

})





}]);




app.service('WebPortalSv', function() {

    var main = {};
    main.details = [];

    main.sumAll=0;
       main.sumMedical = 0;
         main.sumGrocery = 0;
         main.sumSuper = 0;
         main.medCnt = 0;
        main.groceryCnt = 0;
         main.superCnt = 0;

         main.avgAll=0;
         main.avgMed=0;
         main.avgGrocery=0;
        main.avgSuper=0;

        console.log("in service: "+main.sumAll);

    // console.log(details);
    return main;




});


app.controller("webportal2",function($scope,WebPortalSv,$state){


console.log("in report controller");

 WebPortalSv.sumAll=0;
       WebPortalSv.sumMedical = 0;
         WebPortalSv.sumGrocery = 0;
         WebPortalSv.sumSuper = 0;
         WebPortalSv.medCnt = 0;
        WebPortalSv.groceryCnt = 0;
         WebPortalSv.superCnt = 0;

         WebPortalSv.avgAll=0;
         WebPortalSv.avgMed=0;
         WebPortalSv.avgGrocery=0;
        WebPortalSv.avgSuper=0;

    for (var i = 0; i < WebPortalSv.details.length; i++) {
            WebPortalSv.sumAll += WebPortalSv.details[i].shopbudget;

            if (WebPortalSv.details[i].typeofshop === "Medical") {

                WebPortalSv.sumMedical += WebPortalSv.details[i].shopbudget;
                WebPortalSv.medCnt++;
                console.log(WebPortalSv.medCnt);
            } else if (WebPortalSv.details[i].typeofshop === "Grocery") {

                WebPortalSv.sumGrocery += WebPortalSv.details[i].shopbudget;
                WebPortalSv.groceryCnt++;
            }


            if (WebPortalSv.details[i].typeofshop === "Supermarket") {

                WebPortalSv.sumSuper += WebPortalSv.details[i].shopbudget;
                WebPortalSv.superCnt++;
            }

        }
        // console.log("Total budget all: "+WebPortalSv.sumAll);
        // console.log("Total budget med: "+$scope.sumMedical);
        // console.log("Total budget super: "+$scope.sumSuper);
        // console.log("Total budget grocery: "+$scope.sumGrocery);


        WebPortalSv.avgAll = WebPortalSv.sumAll / WebPortalSv.details.length;
        // console.log("in service"+WebPortalSv.avgAll);
        WebPortalSv.avgMed = WebPortalSv.sumMedical / WebPortalSv.medCnt;
        WebPortalSv.avgGrocery = WebPortalSv.sumGrocery / WebPortalSv.groceryCnt;
        WebPortalSv.avgSuper = WebPortalSv.sumSuper / WebPortalSv.superCnt;


        $scope.noshops=WebPortalSv.details.length;

                $scope.sumall=WebPortalSv.sumAll;
        $scope.allavg=WebPortalSv.avgAll;
        $scope.nomed=WebPortalSv.medCnt;
        $scope.medsum=WebPortalSv.sumMedical;

        if(isNaN(WebPortalSv.avgMed))
        {
             $scope.medavg=0; 
        }
        
        else{
           
           $scope.medavg=WebPortalSv.avgMed;  
        }

        if(isNaN(WebPortalSv.avgGrocery))
        {
             $scope.groceryavg=0; 
        }
        
        else{
           
           $scope.groceryavg=WebPortalSv.avgGrocery;  
        }

        if(isNaN(WebPortalSv.avgSuper))
        {
             $scope.superavg=0; 
        }
        
        else{
           
           $scope.superavg=WebPortalSv.avgSuper;  
        }

        $scope.nosuper=WebPortalSv.superCnt;
         $scope.supersum=WebPortalSv.sumSuper;
        //$scope.superavg=WebPortalSv.avgSuper;

        $scope.nogrocery=WebPortalSv.groceryCnt;
         $scope.grocerysum=WebPortalSv.sumGrocery;
        //$scope.groceryavg=WebPortalSv.avgGrocery;

        $scope.graphvalue={
            chart:{
                caption:"No of shops",
                theme:"ocean"
            },
            data:[{
                    label:"Medical Shops",
                    value:WebPortalSv.medCnt

            },
            {
                    label:"Grocery Shops",
                    value:WebPortalSv.groceryCnt

            },
            {
                    label:"Supermarkets",
                    value:WebPortalSv.superCnt

            }

            ]
        };


        $scope.graphvalue2={
            chart:{
                caption:"Average budget",
                theme:"ocean"
            },
            data:[{
                    label:"Medical Shops",
                    value:WebPortalSv.avgMed

            },
            {
                    label:"Grocery Shops",
                    value:WebPortalSv.avgGrocery

            },
            {
                    label:"Supermarkets",
                    value:WebPortalSv.avgSuper

            }

            ]
        };



});



app.controller("webportal", function($scope, WebPortalSv,$state,$mdToast) {
     $scope.Regex = /^([a-zA-Z\s]+)$/;
     $scope.RegexNum = /^([1-9][0-9]+)$/;

     $scope.reportCheck=true;

    console.log("Hello controller");
    //$state.go("Form");
    $scope.types = ['Medical', 'Grocery', 'Supermarket'];

    $scope.addShop = function($state) {
        console.log("in add");

        console.log($scope.shopname);


        var obj = {

            "nameshop": $scope.shopname,
            "nameowner": $scope.ownername,
            "typeofshop": $scope.shoptype,
            "shopbudget": parseInt($scope.budget),
            "area": $scope.txtarea,
            "city": $scope.txtcity,
            "district": $scope.txtdist,
            "pin": $scope.txtpin


        };

        console.log(obj);
        WebPortalSv.details.push(obj);
      //  console.log(WebPortalSv.details);
         $mdToast.show(
            $mdToast.simple()
            .textContent('data added succesfully!')
            .position('bottom right')
            .hideDelay(700));

         $scope.reportCheck=false;

        $scope.shopname = "";
        $scope.ownername = "";
        $scope.shoptype = "";
        $scope.budget = "";
        $scope.txtarea = "";
        $scope.txtcity = "";
        $scope.txtdist = "";
        $scope.txtpin = "";
        $scope.reg.$setUntouched();
        $scope.reg.$setPristine();


        



    }


    $scope.generateReport = function() {

        console.log("in generate Report");
        $state.go("Report");

      

        
    }


});
