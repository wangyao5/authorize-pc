var $scope.authorizeArray = [];
var add = function(index) {
	$scope.authorizeArray[index].array.push({"bCategory":"","lCategroy":"","company":"","amount":0, "edited":true, "ableSave":false});
};

var switch = function(parentIndex, childIndex){
	$scope.authorizeArray[parentIndex].array[childIndex]['edited'] = true;
};

var changed = function(parentIndex, childIndex) {
	var curAuthorizes = $scope.authorizeArray[parentIndex];
	var curItem = curAuthorizes[childIndex];
	$scope.authorizeArray[index].array[childIndex]['ableSave'] = true;
	angular.forEach(currAuthorize, function(item, index){
		if (index != childIndex) {
			if(item.bCategory == curItem.bCategory && item.lCategroy == curItem.lCategroy && item.company == curItem.company) {
				alert("此流程类别已配置");
				$scope.authorizeArray[index].array[childIndex]['ableSave'] = false;
			}
		}
	});
};

var checked = function(parentIndex, childIndex) {
	$scope.authorizeArray[index].array[childIndex]['checked'] = true;
}

var save = function(index) {
	var saveAuthorizeArray = [];
	angular.forEach($scope.authorizeArray[index].array, function(item){
		if (item.checked) {
			saveAuthorizeArray.push(item);
		}
	});

	//调用保存
}