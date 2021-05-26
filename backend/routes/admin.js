const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/admin')

router.get('/', controller.admintable)

module.exports = router