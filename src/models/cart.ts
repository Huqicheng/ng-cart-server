import {Item, CartItem} from './item'
import * as R from 'ramda'

var sumOfArr = R.curry(arr => {
    var sum = 0;
    arr.forEach(i => sum += i);
    return sum;
});

var lenOfArr = R.curry(arr => {
    return arr.length;
});

var aveOfArr = R.converge(R.divide, [sumOfArr, lenOfArr]);

export class Cart {
    constructor(private _itemList: Array<Item>) {

    }

    public add(item: Item) {
        this._itemList.push(item);
    }

    // return false means has removed all items with id itemId
    public remove(itemId: number): boolean {
        var index:number = -1;
        for (var i = 0; i < lenOfArr(this._itemList); i++) {
            var item:Item = this.itemList[i];

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

    get itemList(): Array<Item> {
        return this._itemList;
    }

    public mergeItems(): Map<number, CartItem> {
        var map: Map<number, CartItem> = new Map<number, CartItem>();
        for (var i = 0; i < lenOfArr(this._itemList); i++) {
            var item:Item = this._itemList[i];
            if (!map[item.id]) {
                var cartItem: CartItem = new CartItem(item);
                map[item.id] = cartItem;
            }

            map[item.id].itemPrices.push(item.currentPrice);
        }
        return map;
    }
}