/*
 * @Author: Administrator
 * @Date:   2016-11-29 18:05:01
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-11-29 18:27:16
 */
/*自定义一个search指令*/
(function(angular) {
    'use strict';
    angular.module('moviecat.directives.search', ['ngRoute'])
        .directive('search', ['$route', function($route) {
            return {
                restrict: 'AE',
                template: '<form ng-submit="search()"><input type="text" placeholder="搜索从这里开始..." ng-model="input"><button type="submit"></button></form>',
                replace: true,
                link: function($scope, iElement, iAttrs) {
                    $scope.input = '';
                    $scope.search = function() {
                        $route.updateParams({
                            'type': 'search',
                            q: $scope.input
                        });
                    }
                }
            };
        }])
})(angular);
