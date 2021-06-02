const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/produtos')
    authMiddleware = require('../middlewares/auth')
    isAdminMiddleware = require('../middlewares/isAdmin')

router.delete('/:id', controller.itemDelete)
router.post('/:id', controller.itemUpdate)
router.get('/:id', controller.itemIndex)
router.post('/', controller.itemAdd)        
router.get('/', authMiddleware, isAdminMiddleware ,controller.itemList)

module.exports = router