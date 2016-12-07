/**
 * Created by user on 12/2/2016.
 */
app.controller('ProductsListCtrl', ['$scope','productsService', function($scope, productsService){
    $scope.allProducts =function(){
        productsService.getAllProducts().success(function(data){
            console.log(data);
            $scope.products = data;
        });
    };
    $scope.allProducts();

    $scope.delete=function(product_id){
        productsService.deleteProduct(product_id).success(function(data){
            alert('ok');
            $scope.allProducts();
        })
    };
}]);
