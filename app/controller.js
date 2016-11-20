angular.module("app.controller", [])    .controller('company', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service) {          $scope.companyArray = [];          service.getCompany().then(function(data){            angular.forEach(data, function(item, index, array){              data[index]['index']= index;            })            $scope.companyArray = data;          });          var bCompanyArray = [];          $scope.search = function(searchText){            if(!searchText && bCompanyArray.length>0) {              $scope.companyArray = bCompanyArray;            }            var searchResult = [];            angular.forEach($scope.companyArray, function(item, index, array){                if (item.name.indexOf(searchText) > -1) {                    item.index = index;                    searchResult.push(item);                }            });            bCompanyArray = $scope.companyArray;            $scope.companyArray = searchResult;          }          $scope.switch = function(index) {             $scope.companyArray[index].editer = true;          }          $scope.add = function() {            $scope.companyArray.push({name:'', index:$scope.companyArray.length, ableSave:true});          }          $scope.save = function() {              var checkSaveArray = [];              var checkedIndexs = [];              angular.forEach($scope.companyArray, function(item,index,array){                if (item.checked) {                  checkSaveArray.push(item);                  checkedIndexs.push(index);                }              });              if (checkedIndexs.length<=0) {                return;              }              service.saveCompany(checkSaveArray).then(function(data){                angular.forEach(checkedIndexs, function(item,index,array){                  $scope.companyArray[item] = data[index];                })              });          }          $scope.edited = function(editeItemIndex){            if (!$scope.companyArray[editeItemIndex].ableSave) {              $scope.companyArray[editeItemIndex].ableSave = true;              return;            }            angular.forEach($scope.companyArray,function(item,index,array){              if (editeItemIndex != index) {                if (item.name == $scope.companyArray[editeItemIndex].name) {                  alert("编辑了重复的公司名");                  $scope.companyArray[editeItemIndex].ableSave = false;                }              }            });          }    }])    .controller('wfop', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service) {        service.getWorkFlowOp().then(function(data){            angular.forEach(data, function(item,index,array){                data[index]['index'] = index;            });            $scope.workFlowOpArray = data;        });        $scope.currentWorkFlowNameDisplay = "全部";        service.getWorkFlowName().then(function(data) {            $scope.workFlowNameArray = data;        });        $scope.currentWorkFlowbCategoryDisplay = "全部";        var currentWorkFlowbCategoryArray = [];        var hasWorkFlowbCategoryArray = [];        service.getWorkFlowBCategory().then(function(data){            hasWorkFlowbCategoryArray = data;            initWorkFlowbCategory(hasWorkFlowbCategoryArray);        });        $scope.currentWorkFlowlCategoryDisplay = "全部";        var currentWorkFlowlCategoryArray = [];        var hasWorkFLowlCategoryArray = [];        service.getWorkFlowLCategory().then(function(data){            hasWorkFLowlCategoryArray = data;            initWorkFlowlCategory(hasWorkFLowlCategoryArray);        });        $scope.workFlowNameChecked = function(index){            $scope.currentWorkFlowNameDisplay = $scope.workFlowNameArray[index];            $scope.currentWorkFlowbCategoryDisplay = "全部";            $scope.currentWorkFlowlCategoryDisplay = "全部";            initWorkFlowbCategory(hasWorkFlowbCategoryArray);            initWorkFlowlCategory(hasWorkFLowlCategoryArray);        }        $scope.workFlowbCategoryChecked = function(index){            $scope.currentWorkFlowbCategoryDisplay = $scope.workFlowbCategoryArray[index];        }        $scope.workFlowlCategoryChecked = function(index){            $scope.currentWorkFlowlCategoryDisplay = $scope.workFlowlCategoryArray[index];        }        $scope.search = function(workFlowName, workFlowbCategory, workFlowlCategory) {            console.log("workFlowName:" + workFlowName);            console.log("workFlowbCategory:" + workFlowbCategory);            console.log("workFlowlCategory:" + workFlowlCategory);        }        $scope.reset = function() {            $scope.currentWorkFlowNameDisplay = "全部";            $scope.currentWorkFlowbCategoryDisplay = "全部";            $scope.currentWorkFlowlCategoryDisplay = "全部";        }        var addWorkFlowOpArray = []        $scope.add = function() {            $scope.workFlowOpArray.push({workFlowName:'', bCategory:'', lCategory:'', index:$scope.workFlowOpArray.length, ableSave:true});        }        $scope.save = function() {            var checkSaveArray = [];            var checkedIndexs = [];            angular.forEach($scope.workFlowOpArray, function(item,index,array){                if (item.checked) {                  checkSaveArray.push(item);                  checkedIndexs.push(index);                }            });            if (checkedIndexs.length<=0) {                 return;            }            service.saveWorkFlow(checkSaveArray).then(function(data){                angular.forEach(checkedIndexs, function(item,index,array){                  $scope.workFlowOpArray[item] = data[index];                })            });            service.getWorkFlowOp().then(function(data){                angular.forEach(data, function(item,index,array){                    data[index]['index'] = index;                });                $scope.workFlowOpArray = data;            });            $scope.currentWorkFlowNameDisplay = "全部";            service.getWorkFlowName().then(function(data) {                $scope.workFlowNameArray = data;            });            $scope.currentWorkFlowbCategoryDisplay = "全部";            var currentWorkFlowbCategoryArray = [];            var hasWorkFlowbCategoryArray = [];            service.getWorkFlowBCategory().then(function(data){                hasWorkFlowbCategoryArray = data;                initWorkFlowbCategory(hasWorkFlowbCategoryArray);            });            $scope.currentWorkFlowlCategoryDisplay = "全部";            var currentWorkFlowlCategoryArray = [];            var hasWorkFLowlCategoryArray = [];            service.getWorkFlowLCategory().then(function(data){                hasWorkFLowlCategoryArray = data;                initWorkFlowlCategory(hasWorkFLowlCategoryArray);            });        }        $scope.switch = function(index) {            $scope.workFlowOpArray[index].editer = true;        }        $scope.edited = function(editeItemIndex){            if (!$scope.workFlowOpArray[editeItemIndex].ableSave) {              $scope.workFlowOpArray[editeItemIndex].ableSave = true;              return;            }            angular.forEach($scope.workFlowOpArray,function(item,index,array){              if (editeItemIndex != index) {                if (item.workFlowName == $scope.workFlowOpArray[editeItemIndex].workFlowName &&                    item.bCategory == $scope.workFlowOpArray[editeItemIndex].bCategory &&                    item.lCategory == $scope.workFlowOpArray[editeItemIndex].lCategory) {                    alert("编辑了重复的基础数据");                    $scope.workFlowOpArray[editeItemIndex].ableSave = false;                }              }            })        }        var initWorkFlowbCategory = function(workFlowbCategoryArray) {            angular.forEach(workFlowbCategoryArray, function(item, index, array){                if (item.workFlowName == $scope.currentWorkFlowNameDisplay) {                    currentWorkFlowbCategoryArray = item.bCategory;                    return;                }            });            $scope.workFlowbCategoryArray = currentWorkFlowbCategoryArray;        }        var initWorkFlowlCategory = function(workFlowlCategoryArray) {            angular.forEach(workFlowlCategoryArray, function(item, index, array){                if (item.workFlowName == $scope.currentWorkFlowNameDisplay) {                    currentWorkFlowlCategoryArray = item.lCategory;                    return;                }            });            $scope.workFlowlCategoryArray = currentWorkFlowlCategoryArray;        }    }])    .controller('search', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service) {        $scope.checkedVp = "全部";        service.getVp().then(function(data){            $scope.vpArray = data;        });        service.queryAuthorize().then(function(data){            $scope.authorize = data;        });        $scope.vpChecked = function(index) {            $scope.checkedVp = $scope.vpArray[index].name;        }        $scope.currentWorkFlowNameDisplay = "全部";        service.getWorkFlowName().then(function(data) {            $scope.workFlowNameArray = data;        })        $scope.workFlowNameChecked = function(index){            $scope.currentWorkFlowNameDisplay = $scope.workFlowNameArray[index];            initWorkFlowbCategory(hasWorkFlowbCategoryArray);            initWorkFlowlCategory(hasWorkFLowlCategoryArray);        }        $scope.currentWorkFlowbCategoryDisplay = "全部";        var hasWorkFlowbCategoryArray = []        service.getWorkFlowBCategory().then(function(data){            hasWorkFlowbCategoryArray = data;            initWorkFlowbCategory(hasWorkFlowbCategoryArray);        })        $scope.currentWorkFlowlCategoryDisplay = "全部";        var hasWorkFLowlCategoryArray = [];        service.getWorkFlowLCategory().then(function(data){            hasWorkFLowlCategoryArray = data;            initWorkFlowlCategory(hasWorkFLowlCategoryArray);        })        $scope.workFlowbCategoryChecked = function(index){            $scope.currentWorkFlowbCategoryDisplay = $scope.workFlowbCategoryArray[index];        }        $scope.workFlowlCategoryChecked = function(index){            $scope.currentWorkFlowlCategoryDisplay = $scope.workFlowlCategoryArray[index];        }        var initWorkFlowbCategory = function(workFlowbCategoryArray){            var currentWorkFlowbCategoryArray = [];            angular.forEach(workFlowbCategoryArray, function(item, index, array){                if (item.workFlowName == $scope.currentWorkFlowNameDisplay) {                    $scope.workFlowbCategoryArray = item.bCategory;                    return;                }            });        }        var initWorkFlowlCategory = function(workFlowlCategoryArray){            var currentWorkFlowlCategoryArray = [];            angular.forEach(workFlowlCategoryArray, function(item, index, array){                if (item.workFlowName == $scope.currentWorkFlowNameDisplay) {                    $scope.workFlowlCategoryArray = item.lCategory;                    return;                }            });        }    }])    .controller('userop', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service){        var hasUserArray = [];        service.getUser().then(function(data){            hasUserArray = data;            $scope.userArray = hasUserArray;        });        var addUser = [];        $scope.addUser = function(){            console.log("addUser");        }        $scope.save = function(){            console.log("save");        }        $scope.search = function(searchText){            console.log(searchText);        }    }])    .controller('authorize', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service){        service.getWorkFlowOp().then(function(data){            angular.forEach(data, function(item,index,array){                  data[index]['index'] = index;              });             $scope.workFlowOpArray = data;        });        $scope.currentWorkFlowNameDisplay = "全部";        var hasWorkFlowNameArray = [];        service.getWorkFlowName().then(function(data) {            hasWorkFlowNameArray = data;            $scope.workFlowNameArray = hasWorkFlowNameArray;        });         $scope.currentWorkFlowbCategoryDisplay = "全部";        var currentWorkFlowbCategoryArray = [];        var hasWorkFlowbCategoryArray = [];        service.getWorkFlowBCategory().then(function(data){            hasWorkFlowbCategoryArray = data;            initWorkFlowbCategory(hasWorkFlowbCategoryArray);        });        $scope.currentWorkFlowlCategoryDisplay = "全部";        var currentWorkFlowlCategoryArray = [];        var hasWorkFLowlCategoryArray = [];        service.getWorkFlowLCategory().then(function(data){            hasWorkFLowlCategoryArray = data;            initWorkFlowlCategory(hasWorkFLowlCategoryArray);        });        var hasWorkFlowOp = [];        service.getWorkFlowOp().then(function(data){            angular.forEach(data, function(item,index,array){                  item['index'] = index;                  hasWorkFlowOp.push(item);              });            $scope.workFlowOp = hasWorkFlowOp;        });        $scope.workFlowNameChecked = function(index){            $scope.currentWorkFlowNameDisplay = $scope.workFlowNameArray[index];            $scope.currentWorkFlowbCategoryDisplay = "全部";            $scope.currentWorkFlowlCategoryDisplay = "全部";            initWorkFlowbCategory(hasWorkFlowbCategoryArray);            initWorkFlowlCategory(hasWorkFLowlCategoryArray);        };        $scope.workFlowbCategoryChecked = function(index){            $scope.currentWorkFlowbCategoryDisplay = $scope.workFlowbCategoryArray[index];        };        $scope.workFlowlCategoryChecked = function(index){            $scope.currentWorkFlowlCategoryDisplay = $scope.workFlowlCategoryArray[index];        };        $scope.authorizeArray = [];        var workFlowNames = [];        service.queryAuthorize().then(function(data) {            angular.forEach(data, function(item, index, array){                var workFlowNameIndex = workFlowNames.indexOf(item.workFlowName);                if (workFlowNameIndex > -1) {                    item.index = $scope.authorizeArray[workFlowNameIndex].items.length;                    $scope.authorizeArray[workFlowNameIndex].items.push(item);                } else {                    item.index = 0;                    $scope.authorizeArray.push({name:item.workFlowName, items:[item]});                    workFlowNames.push(data.workFlowName);                }            });        });        $scope.switch = function(index) {        };        $scope.add = function(index) {            var itemIndex = $scope.authorizeArray[index].items.length;            $scope.authorizeArray[index].items.push({index:itemIndex, bCategory:'', lCategory:'', company: '', amount:''});            console.log(index);        };        $scope.save = function(){            console.log("save");        };        $scope.search = function(searchText){            console.log(searchText);        };        var initWorkFlowbCategory = function(workFlowbCategoryArray){            var currentWorkFlowbCategoryArray = [];            angular.forEach(workFlowbCategoryArray, function(item, index, array){                if (item.workFlowName == $scope.currentWorkFlowNameDisplay) {                    $scope.workFlowbCategoryArray = item.bCategory;                    return;                }            });        };        var initWorkFlowlCategory = function(workFlowlCategoryArray){            var currentWorkFlowlCategoryArray = [];            angular.forEach(workFlowlCategoryArray, function(item, index, array){                if (item.workFlowName == $scope.currentWorkFlowNameDisplay) {                    $scope.workFlowlCategoryArray = item.lCategory;                    return;                }            });        };    }]);