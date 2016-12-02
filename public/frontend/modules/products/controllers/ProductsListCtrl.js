/**
 * Created by user on 12/2/2016.
 */
app.controller('ProductsListCtrl', ['$scope','productsService', function($scope, productsService){
    alert(3333333);
    productsService.getAllProducts().success(function(data){
        console.log(data);
    })
}]);
