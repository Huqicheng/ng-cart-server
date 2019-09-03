export class Item {

    constructor(
            public id: number,
            private _name: string,
            public currentPrice: number,
            public originalPrice: number,
            private _image: string) {
    }

    copy():Item {
        const item: Item = this;
        return new Item(item.id, item.name, item.currentPrice, item.originalPrice, item.image);
    }

    get name(): string { 
        return this._name;
    }
    set name(val: string) {
        this._name = val;
    }

    get image(): string { 
        return this._image;
    }
    set image(val: string) {
        this._image = val;
    }
}

export class CartItem extends Item {
    private _itemPrices: Array<number> = [];

    constructor(item: Item) {
        super(item.id, item.name, item.currentPrice, item.originalPrice, item.image);
    }

    set itemPrices(prices: Array<number>) {
        this._itemPrices = prices;
    }

    get itemPrices(): Array<number> {
        return this._itemPrices;
    }
}