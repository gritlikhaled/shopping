// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Calculate total price for this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = []; // Array to store ShoppingCartItem instances
    }

    // Add an item to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Remove an item from the cart by product ID
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Get total of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Display items in the cart
    displayCart() {
        if (this.items.length === 0) {
            console.log("The shopping cart is empty.");
        } else {
            console.log("Shopping Cart Items:");
            this.items.forEach(item => {
                console.log(`- ${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
            });
            console.log(`Total: $${this.getTotalPrice().toFixed(2)}`);
        }
    }
}

// Test the implementation
(function testShoppingCart() {
    // Create products
    const product1 = new Product(1, "Cleaning Spray", 12.99);
    const product2 = new Product(2, "Mop", 24.49);
    const product3 = new Product(3, "Scrubber", 6.75);

    // Create a shopping cart
    const cart = new ShoppingCart();

    // Add items to the cart
    cart.addItem(product1, 2);
    cart.addItem(product2, 1);
    cart.addItem(product3, 3);

    // Display the cart
    console.log("Initial Cart:");
    cart.displayCart();

    // Remove an item from the cart
    cart.removeItem(2);

    // Display the cart again
    console.log("\nCart After Removing an Item:");
    cart.displayCart();
})();
