"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const R = require("ramda");
exports.curriedPromotion = R.curry((promo) => promo.applyPromotion);
class Promotion {
    applyPromotion(items) {
        // do nothing
        throw new Error('applyPromotion not been implemented!');
    }
}
exports.Promotion = Promotion;
class PercentOffDiscount extends Promotion {
    get percentage() {
        return this._percentage;
    }
    set percentage(val) {
        this._percentage = val;
    }
    applyPromotion(items) {
        var p = 1 - this._percentage;
        items.forEach((item, key) => {
        });
        return items;
    }
}
exports.PercentOffDiscount = PercentOffDiscount;
//# sourceMappingURL=promotion.js.map