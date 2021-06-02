const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/usuarios')
    authMiddleware = require('../middlewares/auth')
    isAdminMiddleware = require('../middlewares/isAdmin')
 
router.delete('/:id', controller.userDelete)
router.post('/:id', controller.userUpdate)
router.get('/:id', controller.userIndex)
router.post('/', controller.userAdd)  
router.get('/',  authMiddleware, isAdminMiddleware, controller.userList)

module.exports = router