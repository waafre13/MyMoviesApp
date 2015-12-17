﻿
(function() {
    var myMoviesApp = angular.module("MyMoviesApp", ["ngRoute"]);

    myMoviesApp.config(function($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "Pages/mainPage.html",
                controller: "MainController"
            })
            .when("/viewAllMovies", {
                templateUrl: "Pages/viewAllMovies.html",
                controller: "MainController"
            })
            .when("/manageMovies", {
                templateUrl: "Pages/manageMovies.html",
                controller: "MainController"
            })
            .when("/createNewMovie", {
                templateUrl: "Pages/createNewMovie.html",
                controller: "MainController"
            })
        ;

    });


    myMoviesApp.controller("MainController", ["$scope", function ($scope) {

        $scope.test = "Fredric";

        //API Urls

        //

    }]);

    myMoviesApp.controller("MoviesController", ["$scope", function ($scope) {

        $scope.test = "Fredric";


    }]);

    myMoviesApp.controller("ReviewsController", ["$scope", function ($scope) {

        $scope.test = "Fredric";

        

    }]);

    myMoviesApp.factory("MoviesFactory", [
        function() {

            //TODO: FACTORY: getMovies, getMovie(id)r object, updateMovie()

            return {
                
                getMovies: function() {
                    return "hi";
                }

            };
        }
    ]);

}());