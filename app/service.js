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

        var httpPost = function (url, data) {
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
            });
            return deferred.promise;
        };

        return {
            getUser: function() {
                var promise = httpGet(URL + '/user/query');
                return getObject(promise);
            },

        	getCompany:function(){
                var promise = httpGet(URL + '/company/query');
                return getObject(promise);
        	},

            saveCompany:function(companyArray){
                var promise = httpPost(URL + '/company/save', companyArray);
                return getObject(promise);
            },

            getWorkFlowOp: function() {
                var promise = httpGet(URL + '/flow/query');
                return getObject(promise);
            },

            getWorkFlowName: function() {
                var promise = httpGet(URL + '/flow/names');
                return getObject(promise);
            },

            getWorkFlowBCategory: function() {
                var promise = httpGet(URL + '/flow/bigs');
                return getObject(promise);
            },

            getWorkFlowLCategory: function() {
                var promise = httpGet(URL + '/flow/lits');
                return getObject(promise);
            },

            saveWorkFlow: function(workFlwoArray) {
                var promise = httpPost(URL + '/flow/save', workFlwoArray);
                return getObject(promise);
            },

            getVp: function() {
                var promise = httpGet(URL + '/user/vp');
                return getObject(promise);
            },

            queryAuthorize: function(query) {
                // var promise;
                // if (query){
                //     promise = httpPost(URL + '/auth/query',query);
                // } else {
                //     promise = httpPost(URL + '/auth/query');
                // }
                //
                // return getObject(promise);
                var data = [
                    {"workFlowName":"成本类通用合同", "amount":"4000",
                     "auth":[
                        {"bCategory":"框架协议(原主合同)","lCategory":"地产工程","company":"乐视网","amount":"5000000"},
                        {"bCategory":"框架协议(原主合同)","lCategory":"地产工程","company":"乐视网","amount":"5000000"},
                        {"bCategory":"框架协议(原主合同)","lCategory":"地产工程","company":"乐视网","amount":"5000000"}
                     ]
                    },
                    {"workFlowName":"成本类通用合同1", "amount":5000,
                     "auth":[
                        {"bCategory":"框架协议(原主合同)","lCategory":"地产工程","company":"乐视网","amount":"5000000"},
                        {"bCategory":"框架协议(原主合同)","lCategory":"地产工程","company":"乐视网","amount":"5000000"},
                        {"bCategory":"框架协议(原主合同)","lCategory":"地产工程","company":"乐视网","amount":"5000000"}
                      ]
                    }
                ];
                var deferred = $q.defer();
                deferred.resolve(data);
                return deferred.promise;
                // return httpGet('../mock/authorizeQuery.json');
            },

            saveAuthorize: function (authorizeArray) {
                 var promise = httpPost(URL + '/auth/save', authorizeArray);
                 return getObject(promise);
            }
        }

	}]);