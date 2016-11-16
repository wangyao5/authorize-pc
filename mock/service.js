angular.module('app.service', [])
	.service('service', ['$http', '$q', function($http, $q){
		var publicHttpMehod = function (mehodName, url, data) {
            var queryUrl = url;
            var httpContnt = {
                method: mehodName,
                params: data,
                url: queryUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                timeout: 60000
            };
            var deferred = $q.defer();
            $http(httpContnt).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        };

        return {
            getUser: function() {
                return publicHttpMehod('GET', 'mock/allUser.json');
            },

        	getCompany:function(){
        		return publicHttpMehod('GET', 'mock/company.json');
        	},

            save:function(companyArray){
                console.log("save company");
                console.log(companyArray);
            },

            getWorkFlowOp: function() {
                return publicHttpMehod('GET', 'mock/workflowop.json');
            },

            getWorkFlowName: function() {
                return publicHttpMehod('GET', 'mock/getWorkFlowName.json');
            },

            getWorkFlowBCategory: function() {
                return publicHttpMehod('GET', 'mock/getWorkFlowBCategory.json');
            },

            getWorkFlowLCategory: function() {
                return publicHttpMehod('GET', 'mock/getWorkFlowLCategory.json');
            },

            getVp: function() {
                return publicHttpMehod('GET', 'mock/vp.json');
            },

            queryAuthorize: function() {
                return publicHttpMehod('GET', 'mock/authorizeQuery.json');
            }
        }

	}]);