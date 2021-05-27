const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/admin')

router.delete('/:id', controller.itemDelete)
router.post('/:id', controller.itemUpdate)
router.get('/:id', controller.itemIndex)
router.post('/', controller.itemAdd)        
router.get('/', controller.itemList)

module.exports = router