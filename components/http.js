/*自定义一个jsonp的服务HttpService*/
(function(angular) {
    angular.module('moviecat.service.http', [])
        .service('HttpService', ['$document', '$window', function($document, $window) {
            this.jsonp = function(url, data, callback) {
                // 1.挂载回调函数
                var callbackName = 'my_callback_' + Math.random().toString().replace('.', '');
                $window[callbackName] = callback;
                //2.处理将data转换成字符串形式
                var queryString = url.indexOf('?') == -1 ? '?' : '&';
                for (var key in data) {
                    queryString += key + '=' + data[key] + '&';
                }
                //3.处理URL中的回调函数
                queryString += 'callback=' + callbackName;
                //4.创建一个script标签，并将其添加到页面中
                var scriptEle = $document[0].createElement('script');
                scriptEle.src = url + queryString;
                $document[0].body.appendChild(scriptEle);
            };
        }]);
})(angular);
