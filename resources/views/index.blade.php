<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Products clone</title>
    <link rel="stylesheet" href="frontend/node_modules/bootstrap/dist/css/bootstrap.min.css">

    <script src="frontend/node_modules/angular/angular.min.js"></script>
    <script src="frontend/node_modules/angular-route/angular-route.min.js"></script>
    <script src="frontend/app.js"></script>

    <script src="frontend/modules/products/services/productsService.js"></script>

    <script src="frontend/modules/products/controllers/ProductsListCtrl.js"></script>
    <script src="frontend/modules/products/controllers/ProductShowCtrl.js"></script>
    <script src="frontend/modules/products/controllers/CreateProductCtrl.js"></script>


</head>
<body ng-app="myApp">
    <div ng-view>
    </div>
</body>
</html>