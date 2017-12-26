var app = angular.module("CarShopApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/home.html"
    })       
      .when("/contactUs", {
        templateUrl : "view/contactUs.html"
    }) 
       .when("/gallery", {
        templateUrl : "view/gallery.html"
    }) 
        .when("/service", {
        templateUrl : "view/service.html"
    }) 
        .when("/whyUs", {
        templateUrl : "view/whyUs.html"
    }) 
});