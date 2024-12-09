const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let products = [];

// Create a product
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).send(product);
});

// Get all products
app.get('/products', (req, res) => {
    res.status(200).send(products);
});

// Update a product
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    products = products.map(p => (p.id === id ? updatedProduct : p));
    res.status(200).send(updatedProduct);
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== id);
    res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
