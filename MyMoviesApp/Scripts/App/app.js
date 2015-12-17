
(function() {
    var myMoviesApp = angular.module("MyMoviesApp", ["ngRoute"]);

    myMoviesApp.config(function($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "Pages/mainPage.html",
                controller: "MainController"
            });

    });


    myMoviesApp.controller("MainController", ["$scope", function ($scope) {

        $scope.test = "Fredric";

        //API Urls

        //

    }]);

}());