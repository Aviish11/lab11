class productProperties {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(price,quantity){
        const total = this.price * this.quantity;
        return total;
    }

    toString(name, price, quantity){
        return `Product: ${this.name}, Price: $ ${this.price}, Quantity: ${this.quantity}`;
    }
}


class perishableProductProperties extends productProperties {
    
}

const product = new productProperties("milk", 9.99, 3);
console.log(product.getTotalValue());
console.log(product.toString()); 