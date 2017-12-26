var app = angular.module("CarShopApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "assets/view/home.html"
    })       
      .when("/contactUs", {
        templateUrl : "assets/view/contact.html"
    }) 
       .when("/gallery", {
        templateUrl : "assets/view/gallery.html",
         controller: 'galleryController',
    }) 
        
});