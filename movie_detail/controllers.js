/*主模块*/
(function(angular) {
    var module = angular.module('moviecat.movie_detail', ['ngRoute', 'moviecat.service.http']);
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:id', {
            templateUrl: 'movie_detail/view.html',
            controller: 'MovieDetailController'
        });

    }]);

    // 注册控制器
    module.controller('MovieDetailController', ['$scope', '$routeParams', '$route', 'HttpService', 'AppConfig', function($scope, $routeParams, $route, HttpService, AppConfig) {
        $scope.loading = true;
        $scope.movie = {};
        var id = $routeParams.id;
        var detailApiAddress = AppConfig.detailApiAddress + id;
        HttpService.jsonp(detailApiAddress, {}, function(data) {
            $scope.movie = data;
            $scope.loading = false;
            $scope.$apply();
        });
    }]);
})(angular);
