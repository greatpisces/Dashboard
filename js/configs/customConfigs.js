angular.module("customConfigs", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/pokemonList", {
            templateUrl: "/Dashboard/views/pokemonList.html"
        }).otherwise({
            templateUrl: "/Dashboard/views/pokemonList.html"
        });
    })
    .constant("parameter", {
        pageSize: 36
    });