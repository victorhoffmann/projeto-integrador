const { Produto } = require('../models'),
  Sequelize = require('sequelize'),
  { Op } = Sequelize

const controller = {
    admintable: async (req, res, next) => {
        const produtos = await Produto.findAll();
          res.json({
            produtos
          })
        }
}

module.exports = controller