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

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
}
}

class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

const milk = new productProperties("milk", 9.99, 3, "05 2025");
console.log(milk.getTotalValue());
console.log(milk.toString()); 



const water = new productProperties ("water",2,3,"never");
console.log(water.toString());

const products = [milk, water];

productProperties.applyDiscount(products, 0.05);

products.forEach(product => console.log(product.toString()));