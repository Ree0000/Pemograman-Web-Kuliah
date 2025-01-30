const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let categories = [];
let products = [];
let suppliers = [];
let purchases = [];
let sales = [];

// CRUD Categories
app.get('/categories', (req, res) => {
    res.json(categories);
});

app.post('/categories', (req, res) => {
    const category = req.body;
    categories.push(category);
    res.status(201).json(category);
});

app.put('/categories/:id', (req, res) => {
    const id = req.params.id;
    const updatedCategory = req.body;
    categories[id] = updatedCategory;
    res.json(updatedCategory);
});

app.delete('/categories/:id', (req, res) => {
    const id = req.params.id;
    categories.splice(id, 1);
    res.status(204).send();
});

// CRUD Products
app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    products[id] = updatedProduct;
    res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    products.splice(id, 1);
    res.status(204).send();
});

// CRUD Suppliers
app.get('/suppliers', (req, res) => {
    res.json(suppliers);
});

app.post('/suppliers', (req, res) => {
    const supplier = req.body;
    suppliers.push(supplier);
    res.status(201).json(supplier);
});

app.put('/suppliers/:id', (req, res) => {
    const id = req.params.id;
    const updatedSupplier = req.body;
    suppliers[id] = updatedSupplier;
    res.json(updatedSupplier);
});

app.delete('/suppliers/:id', (req, res) => {
    const id = req.params.id;
    suppliers.splice(id, 1);
    res.status(204).send();
});

// CRUD Purchase Transactions
app.get('/purchases', (req, res) => {
    res.json(purchases);
});

app.post('/purchases', (req, res) => {
    const purchase = req.body;
    purchases.push(purchase);
    res.status(201).json(purchase);
});

app.put('/purchases/:id', (req, res) => {
    const id = req.params.id;
    const updatedPurchase = req.body;
    purchases[id] = updatedPurchase;
    res.json(updatedPurchase);
});

app.delete('/purchases/:id', (req, res) => {
    const id = req.params.id;
    purchases.splice(id, 1);
    res.status(204).send();
});

// CRUD Sales Transactions
app.get('/sales', (req, res) => {
    res.json(sales);
});

app.post('/sales', (req, res) => {
    const sale = req.body;
    sales.push(sale);
    res.status(201).json(sale);
});

app.put('/sales/:id', (req, res) => {
    const id = req.params.id;
    const updatedSale = req.body;
    sales[id] = updatedSale;
    res.json(updatedSale);
});

app.delete('/sales/:id', (req, res) => {
    const id = req.params.id;
    sales.splice(id, 1);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
