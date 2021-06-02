const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/admin')
    authMiddleware = require('../middlewares/auth')
    isAdminMiddleware = require('../middlewares/isAdmin')

router.get('/is-admin', authMiddleware, isAdminMiddleware, controller.isAdmin)
router.post('/', controller.login)

module.exports = router