class productProperties {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(price,quantity){
        const total = price * quantity;
        return total;
    }

    toString(name, price, quantity){
        console.log(`Product: ${name}, Price: $ ${price}, Quantity: ${quantity}`);
        
    }
}