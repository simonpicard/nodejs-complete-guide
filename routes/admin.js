const express = require('express');
const path = require('path');

const root_dir = require('../util/path');

const router = express.Router();

const products = [];


router.get('/add-product', (req, res, next) => {
    res.render('add-product', { prods: products, doc_title: 'Add a product', path: "/admin/add-product" })
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    products.push({ "title": req.body.title })
    res.redirect('/');
});

exports.routes = router;
exports.products = products;