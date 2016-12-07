/**
 * Created by user on 12/2/2016.
 */
app.controller('EditProductCtrl',['$routeParams','productsService','$scope', function($routeParams, productsService, $scope){
    $scope.id = $routeParams.id;

    productsService.getProductItem( $scope.id).success(function(data){
        $scope.product = data;
        console.log($scope.product);
    });

    $scope.productEdit = function(id){
      window.location = '/products/:id/edit';
    }
}]);
