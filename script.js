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



class store {
     constructor(){
        this.inventory = [];
     }

    addProduct(product) {
        this.inventory.push(product);
    }


    getInventoryValue(){
        let totalValue = 0;

    for (let i = 0; i < this.inventory.length; i++) {
        const product = this.inventory[i]; 
        totalValue += product.getTotalValue(); 
    }
    return totalValue;
}

findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) {
        const product = this.inventory[i]; 

        if (product.name === name) {
            return product; 
        }
    }

    return null; 
}
}


const milk = new productProperties("milk", 9.99, 3, "05 2025");

const water = new productProperties ("water",2,3,"never");

const chicken = new perishableProductProperties("chicken", 10 , 3 , "12-2024");
const nuggets = new perishableProductProperties("nuggets", 3, 10, "02-2025");
const cheese = new perishableProductProperties("cheese", 6, 2, "01-2025");

const myStore = new store();

myStore.addProduct(milk);
myStore.addProduct(water);
myStore.addProduct(chicken);
myStore.addProduct(nuggets);
myStore.addProduct(cheese);

console.log(`Total before discount: $ ${myStore.getInventoryValue()}`);

productProperties.applyDiscount(myStore.inventory, 0.15);


console.log(`Total after discount: $ ${myStore.getInventoryValue()}`);

const searchProduct = "milk";

const foundProduct = myStore.findProductByName(searchProduct);

if (foundProduct) {
    console.log(foundProduct.toString());
} 

