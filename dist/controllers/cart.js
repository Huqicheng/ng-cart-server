"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../data/mock");
const deep_copy = (obj => JSON.parse(JSON.stringify(obj)));
exports.addOne = (req, res, next) => {
    const itemId = req.body.itemId;
    const item = mock_1.itemDatabase[itemId].copy();
    mock_1.cart.add(item);
    return res.json({ success: 1, cart: mock_1.cart.mergeItems() });
};
exports.removeOne = (req, res, next) => {
    const itemId = req.body.itemId;
    mock_1.cart.remove(itemId);
    return res.json({ success: 1, cart: mock_1.cart.mergeItems() });
};
//# sourceMappingURL=cart.js.map