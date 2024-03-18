function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity; 
}

Product.prototype.sell = function (quantity) {
    if(quantity <= this.quantity) this.quantity -= quantity;
    else throw Error(`There is no enough stock for this purchase!!!
    You can purchase up to ${this.quantity} ${this.name}.`);
}

Product.prototype.return = function (quantity) {
    this.quantity += quantity;
}

Product.prototype.getInventory = function () {
    return `We have ${this.quantity} of ${this.name}.`;
}

Product.prototype.getValue = function () {
    return `The total value of ${this.name} items is $${this.quantity * this.price}.`;
}

Product.prototype.discount = function (percentage) { // 10
    this.price -= this.price * (percentage / 100);
}

const product1 = new Product('Remote', 10, 6);
const product2 = new Product('Monitor', 100, 5);
const product3 = new Product('Laptop', 1000, 3);
const product4 = new Product('Phone', 500, 10);

console.log(product3.getInventory()); 
console.log(product3.getValue()); 

product2.return(2);

console.log(product2);

// product1.sell(7); Error


console.log(product4);
console.log(product4.quantity);

product4.sell(3);
console.log(product4);
console.log(product4.quantity);

product4.sell(7);
console.log(product4);
console.log(product4.quantity);

product4.discount(25);
console.log(product4);