const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const root_dir = require('./util/path');
const admin_routes = require('./routes/admin');
const shop_routes = require('./routes/shop');

const app = express();

app.use(body_parser.urlencoded({ extended: false }));

app.use("/admin", admin_routes)
app.use(shop_routes)

app.use("/", (req, res, next) => {
    res.status(404).sendFile(path.join(root_dir, 'views', '404.html'))
})

app.listen(3000); 
