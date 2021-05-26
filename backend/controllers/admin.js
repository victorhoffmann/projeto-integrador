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
      const { id } = req.params,
        produto = await Produto.destroy({
          where: { id },
        });
      if (produto) {
        res.send('Deu certo')
      } else {
        res.status(500).send("Ops... Algo de errado não deu certo!");
      }
    },
}

module.exports = controller