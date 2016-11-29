(function(angular) {
    'use strict';
    /*注册一个主模块*/
    var module = angular.module('moviecat', [
        'ngRoute',
        'moviecat.movie_detail',
        'moviecat.movie_list',
        'moviecat.directives.auto_focus',
        'moviecat.directives.search'
    ]);
    /*路由配置信息*/
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/in_theaters/1'
        });
    }]);

    /*为模块配置一些常量*/
    module.constant('AppConfig', {
        pageCount: 3,
        listApiAddress: 'http://api.douban.com/v2/movie/',
        detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
    });
})(angular);
