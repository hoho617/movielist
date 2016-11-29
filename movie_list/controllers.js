/*主模块*/
(function(angular) {
    var module = angular.module('moviecat.movie_list', ['ngRoute', 'moviecat.service.http']);
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:type/:page', {
            templateUrl: 'movie_list/view.html',
            controller: 'MovieListController'
        });

    }]);

    // 注册控制器
    module.controller('MovieListController', ['$scope', '$routeParams', '$route', 'HttpService', 'AppConfig', function($scope, $routeParams, $route, HttpService, AppConfig) {
        $scope.loading = true;
        $scope.subjects = [];
        $scope.totalCount = 0;
        $scope.title = 'Loading...';
        // 分页操作
        var count = AppConfig.pageCount;
        var page = parseInt($routeParams.page);
        var start = (page - 1) * count;
        $scope.totalPage = 0;
        $scope.currentPage = page;
        HttpService.jsonp(AppConfig.listApiAddress + $routeParams.type + '', {
            start: start,
            count: count,
            q: $routeParams.q
        }, function(data) {
            $scope.subjects = data.subjects;
            $scope.title = data.title;
            $scope.totalCount = data.total;
            $scope.totalPage = Math.ceil($scope.totalCount / count);
            $scope.loading = false;
            $scope.$apply();
        });
        // 点击左右切换箭头
        $scope.goPage = function(page) {
            if (page >= 1 && page <= $scope.totalPage) {
                $route.updateParams({
                    page: page
                });
            }
        }
    }]);
})(angular);
