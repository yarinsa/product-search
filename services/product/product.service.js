"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var rxjs_1 = require("rxjs");
var builders_1 = require("./builders");
var fetchers_1 = require("./fetchers");
var electron_1 = require("electron");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.fetcher = new fetchers_1.AmazonProductFetcher();
        this.makeResult = function (query) {
            return new rxjs_1.Observable(function (subscriber) {
                try {
                    var fetch_1 = _this.fetcher.getProducts(query);
                    var produce_1 = function (products) {
                        return products.map(function (product) {
                            return new builders_1.ResultItemBuilder(product.categoy).handle(product);
                        });
                    };
                    fetch_1.subscribe(function (products) { return subscriber.next(produce_1(products)); });
                }
                catch (error) {
                    subscriber.error(error);
                }
            });
        };
        electron_1.ipcMain.on('search-products', function (event, arg) {
            _this.makeResult(arg[0]).subscribe(function (result) {
                event.reply('search-products-reply', result);
            }, function (error) { return console.error(error); });
        });
    }
    ProductService.getInstance = function () {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
