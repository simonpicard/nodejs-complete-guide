const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProdcut;
            if (existingProduct) {
                updatedProdcut = { ...existingProduct }
                updatedProdcut.qty = updatedProdcut.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProdcut;
            }
            else {
                updatedProdcut = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProdcut];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        }
        )
    }


}