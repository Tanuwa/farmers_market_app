var app = angular.module("BuyLocalApp");
app.controller("HomeCtrl", ["$scope", "infoReqServ", function ($scope, infoReqServ) {

	$scope.fetchVendor = function (info) {
		infoReqServ.getVendors(info).then(function (response) {

			$scope.vendors = response.data;
			console.log(response.data)

		})
	}
}]);



// if(event.charCode==13){
//             $rootScope.$apply(function(){
//                 $location.path('/vendors');
//             });
//         }


//change this to vendors controller
