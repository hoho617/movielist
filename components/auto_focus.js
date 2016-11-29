/**
 * Created by Administrator on 2016/11/26.
 */
/*自定义一个指令实现焦点切换*/
(function(angular) {
    angular.module('moviecat.directives.auto_focus', [])
        .directive('autoFocus', ['$location', function($location) {
            return {
                restrict: 'A',
                link: function(scope, iElement, iAttrs) {
                    scope.$location = $location;
                    scope.$watch('$location.path()', function(now) {
                        var aLink = iElement.children().attr('href');
                        var type = aLink.replace(/#(\/.+?)\/\d+/, '$1');
                        if (now.startsWith(type)) {
                            iElement.parent().children().removeClass('active');
                            iElement.addClass('active');
                        }
                    });
                }
            };
        }])
})(angular);
