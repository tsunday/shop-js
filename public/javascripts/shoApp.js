// Define the `shoApp` module
var shoApp = angular.module('shoApp', []);

// Define the `ProductListController` controller on the `shoApp` module
shoApp.controller('ProductListController', function ProductListController($scope, $http) {
  
   $scope.showData = function( ){
     //show more functionality
			var pagesShown = 1;
		  var pageSize = 3;

     $http.get('http://localhost:3000/products/').
        then(function(response) {
            $scope.datalists = response.data;
        });
     $scope.datalists = [];
     
     
		    
		    $scope.paginationLimit = function(data) {
		        return pageSize * pagesShown;
		    };
		    $scope.hasMoreItemsToShow = function() {
		        return pagesShown < ($scope.datalists.length / pageSize);
		    };
		    $scope.showMoreItems = function() {
		        pagesShown = pagesShown + 1;
		    };	     
 };

});

shoApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
