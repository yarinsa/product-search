"use strict";
exports.__esModule = true;
exports.ToyResultItemBuilder = void 0;
/**
 * Toys category handler
 * return result item when the tags are the price
 * @param product - produce item from api
 */
var ToyResultItemBuilder = /** @class */ (function () {
    function ToyResultItemBuilder() {
        this.handle = function (product) {
            return {
                imageUrl: product.imageUrl,
                title: product.title,
                tags: ['toys', product.price.toString()]
            };
        };
    }
    return ToyResultItemBuilder;
}());
exports.ToyResultItemBuilder = ToyResultItemBuilder;
