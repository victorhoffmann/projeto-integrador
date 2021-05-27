const { Produto } = require('../models'),
  { Categoria } = require('../models')
  Sequelize = require('sequelize'),
  { Op } = Sequelize

const controller = {
    itemList: async (req, res, next) => {
        const produtos = await Produto.findAll();
          res.json({
            produtos
          })
    },

    itemAdd: async (req, res, next) => {
      try {
        const { nome, categoria_id, preco, descricao, qnt_disponivel } = req.body;
        const produto = await Produto.create({
          nome,
          categoria_id,
          preco,
          descricao,
          qnt_disponivel,
        });
        if (produto) {
          res.redirect("/admin");
        } else {
          res.status(500).send("Ops... Algo de errado não deu certo!");
        }
      } catch (error) {
        res.status(400).json({ message: "Algo de errado não está certo" });
      }
    },

    itemDelete: async (req, res, next) => {
      const { id } = req.params,
        produto = await Produto.destroy({
          where: { id },
          force: true
        });
    },

    itemUpdate: async (req, res, next) => {
      const { id } = req.params,
        { nome, categoria_id, preco, descricao, qnt_disponivel } = req.body,
        produto = await Produto.update(
          { nome, categoria_id, preco, descricao, qnt_disponivel },
          { where: { id } }
        );
      if (!produto) {
        res.status(500).send("Ops... Algo de errado não deu certo!");
      } else {
        res.redirect('/admin')
      }
    },

    itemIndex: async (req, res, next) => {
      const { id } = req.params,
        produto = await Produto.findOne({ where: { id } });
          res.json({
            produto
          })
    },
}

module.exports = controller