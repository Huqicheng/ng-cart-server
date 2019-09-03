import {Item} from './item'
import * as R from 'ramda'

export var curriedPromotion = R.curry((promo: Promotion) => promo.applyPromotion);

export class Promotion {
    applyPromotion(items: Map<number, Item>): Map<number, Item> {
        // do nothing
        throw new Error('applyPromotion not been implemented!');
    }
}

export class PercentOffDiscount extends Promotion {
    private _percentage: number; // e.g. 0.2 means 20% off 
    
    get percentage():number {
        return this._percentage;
    }
    set percentage(val: number) {
        this._percentage = val;
    }

    applyPromotion(items: Map<number, Item>): Map<number, Item> {
        var p: number = 1 - this._percentage;
        items.forEach((item: Item, key: number) => {
            
        });
        return items;
    }
}