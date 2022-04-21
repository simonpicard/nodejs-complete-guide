const express = require('express');
const path = require('path');

const root_dir = require('../util/path');
const admin = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = admin.products;
    console.log(products);
    res.render('shop', { prods: products, doc_title: 'My Shop', path: "/" })
});

module.exports = router;