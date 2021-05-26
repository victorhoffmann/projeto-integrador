const express = require('express'),
  router = express.Router(),
  controller = require('../controllers/index')

router.get('/', controller.index);

module.exports = router;
