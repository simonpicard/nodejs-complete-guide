const express = require('express');
const body_parser = require('body-parser');

app = express();

app.set("view engine", "ejs");

app.use(body_parser.urlencoded({ extended: false }));

const users = [];

app.get('/show_users', (req, res) => {
    res.render("show_users", { doc_title: 'show_users', users: users });
});

app.get('/', (req, res) => {
    res.render("add_user", { doc_title: 'Register' })
});

app.post('/add_user', (req, res) => {
    users.push({ "name": req.body.name })
    res.redirect('/show_users')
});

app.listen(3000);