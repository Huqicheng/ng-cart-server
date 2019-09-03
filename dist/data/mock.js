"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../models/item");
const cart_1 = require("../models/cart");
exports.itemDatabase = {
    1: new item_1.Item(1, "item1".toString(), 100.0, 100.0, ""),
    2: new item_1.Item(2, "item2".toString(), 100.0, 100.0, ""),
    3: new item_1.Item(3, "item3".toString(), 100.0, 100.0, ""),
};
exports.cart = new cart_1.Cart();
//# sourceMappingURL=mock.js.map