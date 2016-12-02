app.service('productsService', ['$http', function($http){
    return {
        getAllProducts: function(){
            return $http.get('http://products-clone.dev/products')
        }
    }
}])