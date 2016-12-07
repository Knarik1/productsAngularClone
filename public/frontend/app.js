/**
 * Created by user on 12/2/2016.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
    $routeProvider
       .when('/products', {
           templateUrl: 'http://products-clone.dev/frontend/modules/products/views/allProducts.html',
           controller: 'ProductsListCtrl'
       })
        .when('/productItem/:id', {
            templateUrl:'http://products-clone.dev/frontend/modules/products/views/productShow.html',
            controller: 'ProductShowCtrl'
        })
        .when('/createProduct', {
            templateUrl: 'http://products-clone.dev/frontend/modules/products/views/createProduct.html',
            controller: 'CreateProductCtrl'
        })
        .when('/products/:id/edit', {
            templateUrl: 'http://products-clone.dev/frontend/modules/products/views/editProduct.html',
            controller: 'EditProductCtrl'
        })
}]);
