const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

const root_dir = require('./util/path');
const admin = require('./routes/admin');
//const admin_routes = admin.routes;
const shop_routes = require('./routes/shop');

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", admin.routes)
app.use(shop_routes)

app.use("/", (req, res, next) => {
    res.status(404).render('404', { doc_title: 'Not Found', path: "" });
})

app.listen(3000); 
