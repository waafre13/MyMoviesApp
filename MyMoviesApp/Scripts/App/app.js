
(function() {

    var myMoviesApp = angular.module("MyMoviesApp", []);

    myMoviesApp.controller("MainController", [
        "$http", "$scope", function($http, $scope) {
            alert("ALERT!");
            $scope.test = "Fredric";

            //API Urls

            //

        }
    ]);


}());