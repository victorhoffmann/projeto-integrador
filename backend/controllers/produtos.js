const { Produto } = require('../models'),
  Sequelize = require('sequelize'),
  { Op } = Sequelize

const controller = {
  itemList: async (req, res, next) => {
    const produtos = await Produto.findAll();
    res.json({
      produtos
    })
  },

  pesquisaHome: async (req, res, next) => {
    let { searchValue } = req.body;
    let searchParam = `nome`;
    if (!searchValue) searchValue = await req.params.searchValue;

    let whereClause = {};
    whereClause[searchParam] = { [Op.like]: `%${searchValue}%` };

    const produtos = await Produto.findAll({ where: whereClause })
    res.json({
      produtos
    })
  },

  fazerPesquisa: async (req, res, next) => {
    let { searchValue } = req.body;
    console.log(searchValue)
    res.redirect(`/pesquisa/${searchValue}`)
  },

  filtroProduto: async (req, res, next) => {
    const { categoria_id } = req.params,
      produtos = await Produto.findAll({
        where: {
          categoria_id
        }
      });
    res.json({
      produtos
    })
  },

  carrinho: async (req, res, next) => {
    const { id } = req.body,
      produtos = await Produto.findAll({
        where: {
          id: {
            [Op.in]: id
          }
        }
      });
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
        return res.status(200).json({ message: "Produto adicionado" })
      }
      throw { message: 'Erro' }
    } catch (error) {
      return res.status(400).json({ message: "Erro ao adicionar o produto" });
    }
  },

  itemDelete: async (req, res, next) => {
    const { id } = req.params,
      produto = await Produto.destroy({
        where: { id },
        force: true
      });
    return res.status(200).json({ message: "Item deletado" })
  },

  itemUpdate: async (req, res, next) => {
    const { id } = req.params,
      { nome, categoria_id, preco, descricao, qnt_disponivel } = req.body,
      produto = await Produto.update(
        { nome, categoria_id, preco, descricao, qnt_disponivel },
        { where: { id } }
      );
    if (!produto) {
      return res.status(500).json({ message: "Ops... Erro ao atualizar o produto!" });
    }
  },

  itemIndex: async (req, res, next) => {
    const { id } = req.params,
      produto = await Produto.findOne({ where: { id } });
    res.json({
      produto
    })
  },

  randomProdutos: async (req, res, next) => {
    const produtos = await Produto.findAll({
      order: [
        Sequelize.fn('RAND'),
      ], limit: 3
    });
    res.json({
      produtos
    })
  },
}

module.exports = controller