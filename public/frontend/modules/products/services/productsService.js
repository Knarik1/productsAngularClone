app.service('productsService', ['$http', function($http){
    return {
        getAllProducts: function(){
            return $http.get('http://products-clone.dev/products')
        },
        getProductItem: function(id){
            return $http.get('http://products-clone.dev/products/'+ id)
        },
        deleteProduct: function(product_id){
            return $http.delete('http://products-clone.dev/products/'+ product_id)
        },
        postProductItem: function(product){
            return $http.post('http://products-clone.dev/products', product)
        }
    }
}]);