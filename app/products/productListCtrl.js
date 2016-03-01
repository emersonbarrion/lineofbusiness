(function (angular) {
    "use strict";

    var ProductListCtrl = function () {
        var vm = this;
        vm.products = [{
            imageUrl: '',
            productName: 'product 5',
            productCode: '452355',
            releaseDate: '2016-10-02',
            price: 14
        }, {
            imageUrl: '',
            productName: 'product 2',
            productCode: '989728373',
            releaseDate: '2016-02-23',
            price: 23
        }];

        vm.showPrice = false;
        vm.togglePrice = function () {
            vm.showPrice = !vm.showPrice;
        };
    };

    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);

}(window.angular));
