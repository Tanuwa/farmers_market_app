var app = angular.module("BuyLocalApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "components/home/home.html"
		})
		.when("/vendor/:vendorId", {
			templateUrl: "components/vendor/vendor.html",
			controller: "VendorCtrl"
		})
		.when("/vendors", {
			templateUrl: "components/vendors/vendors.html",
			controller: "VendorsCtrl"
		})
		.when("/login", {
			templateUrl: "components/login/login.html",
			controller: "LoginCtrl"
		})
		.when("/signup", {
			templateUrl: "components/signup/signup.html",
			controller: "SignupCtrl"
		})
		.when("/about", {
			templateUrl: "components/about/about.html"

		})
		.otherwise("/home", {
			redirectTo: "components/home/home.html"
		});
}]);
