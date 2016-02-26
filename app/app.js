(function(){
    "use strict";

    angular
        .module("productManagement", [])
        .controller("productListCtrl", productListCtrl);

    function productListCtrl() {
        var vm = this;
        vm.products = [{
            imageUrl: '',
            productName: 'product 1',
            productCode: '452355',
            releaseDate: '2016-10-02',
            price: 14
        }, {
            imageUrl: '',
            productName: 'product 2',
            productCode: '989728373',
            releaseDate: '2016-02-23',
            price: 23
        }]
    }
}());