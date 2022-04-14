const express = require('express');
const path = require('path');

const root_dir = require('../util/path');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(root_dir, 'views', 'shop.html'))
});

module.exports = router;