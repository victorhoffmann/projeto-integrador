const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/admin')

router.post('/:id/delete', controller.listDelete)    
router.get('/', controller.listTable)

module.exports = router