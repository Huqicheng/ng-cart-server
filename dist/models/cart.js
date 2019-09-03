"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
const R = require("ramda");
var sumOfArr = R.curry(arr => {
    var sum = 0;
    arr.forEach(i => sum += i);
    return sum;
});
var lenOfArr = R.curry(arr => {
    return arr.length;
});
var aveOfArr = R.converge(R.divide, [sumOfArr, lenOfArr]);
class Cart {
    constructor() {
        this._itemList = [];
    }
    add(item) {
        this._itemList.push(item);
    }
    // return false means has removed all items with id itemId
    remove(itemId) {
        var index = -1;
        for (var i = 0; i < lenOfArr(this._itemList); i++) {
            var item = this.itemList[i];
            // just remove the first one
            if (item.id == itemId) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this._itemList.splice(index, 1);
            return true;
        }
        return false;
    }
    get itemList() {
        return this._itemList;
    }
    mergeItems() {
        var map = new Map();
        for (var i = 0; i < lenOfArr(this._itemList); i++) {
            var item = this._itemList[i];
            if (!map[item.id]) {
                var cartItem = new item_1.CartItem(item);
                map[item.id] = cartItem;
            }
            map[item.id].itemPrices.push(item.currentPrice);
        }
        return map;
    }
}
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map