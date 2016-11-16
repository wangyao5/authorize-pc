angular.module('app.service', [])
	.service('service', ['$http', '$q', 'URL', function($http, $q, URL){
		var httpGet = function (url, params) {
            var queryUrl = url;
            var httpContent = {
                method: 'GET',
                params: params,
                url: queryUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                timeout: 60000
            };
            var deferred = $q.defer();
            $http(httpContent).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        };

        var httpPostMehod = function (url, data) {
            var queryUrl = url;
            var httpContent = {
                method: 'POST',
                data: data,
                url: queryUrl,
                timeout: 60000
            };
            var deferred = $q.defer();
            $http(httpContent).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        };

        var getObject = function(httppromise) {
            var deferred = $q.defer();
            httppromise.then(function(data){
                console.log(data);
                if (data.status == 0) {
                    deferred.resolve(data.object);
                }
            })
            return deferred.promise;
        }

        return {
            getUser: function() {
                var promise = httpGet(URL + '/user/query');
                return getObject(promise);
            },

        	getCompany:function(){
                var promise = httpGet(URL + '/company/query');
                return getObject(promise);
        	},

            save:function(companyArray){
                console.log("save company");
                console.log(companyArray);
            },

            getWorkFlowOp: function() {
                var deferred = $q.defer();
                var promise = httpGet(URL + '/flow/query');
                return getObject(promise);
            },

            getWorkFlowName: function() {
                return httpGet('mock/getWorkFlowName.json');
            },

            getWorkFlowBCategory: function() {
                return httpGet('mock/getWorkFlowBCategory.json');
            },

            getWorkFlowLCategory: function() {
                return httpGet('mock/getWorkFlowLCategory.json');
            },

            getVp: function() {
                return httpGet('mock/vp.json');
            },

            queryAuthorize: function() {
                return httpGet('mock/authorizeQuery.json');
            }
        }

	}]);