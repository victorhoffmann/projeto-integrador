const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/usuarios')
 
router.delete('/:id', controller.userDelete)
router.post('/:id', controller.userUpdate)
router.get('/:id', controller.userIndex)
router.post('/', controller.userAdd)  
router.get('/', controller.userList)

module.exports = router