const cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    }
];

function calculateCartTotal(cart) {
    let total = 0;

    for (let item of cart) {
        total += item.price * item.quantity;
    }

    return total;
}

console.log(calculateCartTotal(cart));