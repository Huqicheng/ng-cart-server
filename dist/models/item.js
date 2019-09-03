"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, _name, currentPrice, originalPrice, _image) {
        this.id = id;
        this._name = _name;
        this.currentPrice = currentPrice;
        this.originalPrice = originalPrice;
        this._image = _image;
    }
    copy() {
        const item = this;
        return new Item(item.id, item.name, item.currentPrice, item.originalPrice, item.image);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get image() {
        return this._image;
    }
    set image(val) {
        this._image = val;
    }
}
exports.Item = Item;
class CartItem extends Item {
    constructor(item) {
        super(item.id, item.name, item.currentPrice, item.originalPrice, item.image);
        this._itemPrices = [];
    }
    set itemPrices(prices) {
        this._itemPrices = prices;
    }
    get itemPrices() {
        return this._itemPrices;
    }
}
exports.CartItem = CartItem;
//# sourceMappingURL=item.js.map