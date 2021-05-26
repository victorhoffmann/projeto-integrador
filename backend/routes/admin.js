const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/admin')

router.delete('/:id', controller.listDelete)    
router.get('/', controller.listTable)

module.exports = router