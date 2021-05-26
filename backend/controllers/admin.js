const { Produto } = require('../models'),
  Sequelize = require('sequelize'),
  { Op } = Sequelize

const controller = {
    listTable: async (req, res, next) => {
        const produtos = await Produto.findAll();
          res.json({
            produtos
          })
    },
    listDelete: async (req, res, next) => {
      console.log("Controller Entrou")
      const { id } = req.params,
        produto = await Produto.destroy({
          where: { id },
          force: true
        });
      
    },
}

module.exports = controller