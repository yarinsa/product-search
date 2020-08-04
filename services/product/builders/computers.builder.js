"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ComputerResultItemBuilder = void 0;
/**
 * Computers category handler
 * return result item when the tags
 * are the words combining the title.
 * @param product  - produce item from api
 */
var ComputerResultItemBuilder = /** @class */ (function () {
    function ComputerResultItemBuilder() {
        this.handle = function (product) {
            return {
                imageUrl: product.imageUrl,
                title: product.title,
                tags: __spreadArrays(['computer'], product.title.split(' '))
            };
        };
    }
    return ComputerResultItemBuilder;
}());
exports.ComputerResultItemBuilder = ComputerResultItemBuilder;
