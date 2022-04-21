const express = require('express');

app = express();

app.use(express.static(__dirname + '/public'));

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/views/users.html')
})

app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(3001)