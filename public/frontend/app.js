/**
 * Created by user on 12/2/2016.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
       .when('/products', {
           templateUrl: 'allProducts.html',
           controller: 'ProductsListCtrl'
       })
}]);
