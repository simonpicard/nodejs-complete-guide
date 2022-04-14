const express = require('express');
const body_parser = require('body-parser');

const admin_routes = require('./routes/admin');
const shop_routes = require('./routes/shop');

const app = express();

app.use(body_parser.urlencoded({ extended: false }));

app.use(admin_routes)
app.use(shop_routes)

app.use("/", (req, res, next) => {
    res.send("<h1>404</h1>")
})

app.listen(3000); 
