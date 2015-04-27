/*global appServices, $*/
    appServices.factory('ajaxService', ['$http', '$rootScope', 'notifyService', '$q', '$upload', function ($http, $rootScope, notifyService, $q, $upload) {
        "use strict";

    var doPost = function (url, dataToSend, blockUi) {
        incrementAsyncRequestCount(blockUi);
        var def = $q.defer();
        $http.post(url, dataToSend)
            .success(function(data){
                decrementAsyncRequestCount(blockUi);
                def.resolve(data);
            })
            .error(function(data, status){
                decrementAsyncRequestCount(blockUi);
                handleRequestFail(def, status, data);
            });
        return def.promise;
    };

    var doGet = function (url, blockUi) {
        incrementAsyncRequestCount(blockUi);
        var def = $q.defer();
        $http.get(url)
            .success(function (data) {
                decrementAsyncRequestCount(blockUi);
                def.resolve(data);
            })
            .error(function (data, status) {
                decrementAsyncRequestCount(blockUi);
                handleRequestFail(def, status, data);
            });
        return def.promise;
    };

    var doUpload = function(url, fileToSend, dataToSend, blockUi) {
        incrementAsyncRequestCount(blockUi);
        var def = $q.defer();
        $upload.upload({
                url: url,
                method: 'POST',
                data: dataToSend,
                file: fileToSend
            })
            .success(function (data) {
                decrementAsyncRequestCount(blockUi);
                def.resolve(data);
            })
            .error(function (data, status) {
                decrementAsyncRequestCount(blockUi);
                handleRequestFail(def, status, data);
            });
        return def.promise;
    };

    function incrementAsyncRequestCount(blockUi) {
        if ($rootScope.incrementAsyncRequestCount && blockUi) {
            $rootScope.incrementAsyncRequestCount();
        }
    }

    function decrementAsyncRequestCount(blockUi) {
        if ($rootScope.decrementAsyncRequestCount && blockUi) {
            $rootScope.decrementAsyncRequestCount();
        }
    }

    function handleRequestFail(deferred, status, message) {
        var error = message || "Wystąpił błąd podczas przetwarzania";
	    notifyService.showErrorMessage(error);
        deferred.reject(status);
    }

    function doPostWithBlock(url, dataToSend) {
        return doPost(url, dataToSend, true);
    }

    function doGetWithBlock(url) {
        return doGet(url, true);
    }

    function doUploadWithBlock(url, fileToSend, dataToSend) {
        return doUpload(url, fileToSend, dataToSend, true);
    }


    return {
        doGet: doGet,
        doPost: doPost,
        doUpload: doUpload,
        doPostWithBlock: doPostWithBlock,
        doGetWithBlock: doGetWithBlock,
        doUploadWithBlock: doUploadWithBlock
    };
}]);
