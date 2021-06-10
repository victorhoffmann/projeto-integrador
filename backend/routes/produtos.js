const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/produtos')
    authMiddleware = require('../middlewares/auth')
    isAdminMiddleware = require('../middlewares/isAdmin')

router.post('/pesquisar', controller.fazerPesquisa)
router.post('/searchHome/:searchValue', controller.pesquisaHome)
router.get('/searchHome/:searchValue', controller.pesquisaHome)
router.get('/carrinho', controller.carrinho)
router.get('/random/', controller.randomProdutos)
router.get('/categorias/:categoria_id', controller.filtroProduto)
router.get('/categorias/', controller.itemList)
router.delete('/:id', controller.itemDelete)
router.post('/:id', controller.itemUpdate)
router.get('/:id', controller.itemIndex)
router.post('/', controller.itemAdd)        
router.get('/', authMiddleware, isAdminMiddleware, controller.itemList)

module.exports = router