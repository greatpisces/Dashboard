var pokemon = angular.module("pokemon", ["customFilters", "customConfigs"]);

pokemon.controller("pokemonList", function ($scope, $http, $filter, parameter) {

    $scope.abc = function() {
        console.log("123");
    }
    /*
    侧栏
     */
    $scope.isSidebarOpen = true;

    $scope.toggleSidebar = function() {
        $scope.isSidebarOpen = !$scope.isSidebarOpen;
    }

    $scope.sidebarOpen = function() {
        return $scope.isSidebarOpen == true ? "sidebar-open" : "";
    }
    /*
    过滤
     */
    $scope.selectedArea = null;

    $scope.selectArea = function(area) {
        $scope.selectedArea = area;
        //从第一页显示
        $scope.selectedPage = 1;
    }

    $scope.areaFilterFn = function(pokemon) {
        return $scope.selectedArea == null || (pokemon.area.indexOf($scope.selectedArea) >= 0);
    }
    /*
    分页
     */
    $scope.selectedPage = 1;

    $scope.pageSize = parameter.pageSize;

    $scope.selectPage = function(newPage) {
        $scope.selectedPage = newPage;
    }

    $scope.getPageClass = function(page) {
        return $scope.selectedPage == page ? "active" : "";
    }

    $scope.previousPage = function() {
        $scope.selectedPage == 1 ? '' : $scope.selectedPage = $scope.selectedPage - 1;
    }

    $scope.nextPage = function() {
        var filterList = $filter("filter")($scope.data.pokemonList, function(value) {
            return $scope.selectedArea == null || (value.area.indexOf($scope.selectedArea) >= 0);
        });
        var pageNum = Math.ceil(filterList.length / $scope.pageSize);
        $scope.selectedPage == pageNum ? '' : $scope.selectedPage = $scope.selectedPage + 1;
    }


    /*
    数据加载
     */
    $http.get("json/pokemon.json").then(
        function (data) {
            $scope.data = data.data;
        },
        function (err) {
            $scope.error = 'Could not load notes';
        }
    );

    /*
    测试
     */
});