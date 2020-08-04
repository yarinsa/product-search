"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.availableResultItemBuilders = exports.ResultItemBuilder = void 0;
var computers_builder_1 = require("./computers.builder");
var toys_builder_1 = require("./toys.builder");
/**
 * produces default result -
 * The result tags are the letters
 * combining the title reversed.
 * @param key Category name
 */
var ResultItemBuilder = /** @class */ (function () {
    function ResultItemBuilder(category) {
        this.handle = function (product) {
            return {
                imageUrl: product.imageUrl,
                title: product.title,
                tags: __spreadArrays(['any'], product.title.split('').reverse())
            };
        };
        return exports.availableResultItemBuilders[category]
            ? exports.availableResultItemBuilders[category]
            : this;
    }
    return ResultItemBuilder;
}());
exports.ResultItemBuilder = ResultItemBuilder;
exports.availableResultItemBuilders = {
    Toys: new toys_builder_1.ToyResultItemBuilder(),
    Computers: new computers_builder_1.ComputerResultItemBuilder()
};
