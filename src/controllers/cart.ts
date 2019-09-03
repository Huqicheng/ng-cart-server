import {Cart} from '../models/cart'
import {Item} from '../models/item'
import {itemDatabase, cart} from '../data/mock'

const deep_copy = (obj => JSON.parse ( JSON.stringify(obj)));

export const addOne = (req, res, next) => {
    const itemId: number = req.body.itemId;
    const item:Item = itemDatabase[itemId].copy();

    cart.add(item);

    return res.json({success: 1, cart: cart.mergeItems()}); 
}


export const removeOne = (req, res, next) => {
    const itemId: number = req.body.itemId;

    cart.remove(itemId);

    return res.json({success: 1, cart: cart.mergeItems()});
}