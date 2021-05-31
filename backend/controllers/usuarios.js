const { Usuario } = require('../models'),
  Sequelize = require('sequelize'),
  { Op } = Sequelize

const controller = {
    userList: async (req, res, next) => {
        const usuarios = await Usuario.findAll();
          return res.json({
            usuarios
          })
    },

    userDelete: async (req, res, next) => {
      const { id } = req.params,
        usuario = await Usuario.destroy({
          where: { id },
          force: true
        });
        return res.status(200).json({message: "Item deletado"})
    },

    userAdd: async (req, res, next) => {
      try {
        const { nome, email, senha, cpf_cnpj, id_funcao } = req.body;
        const usuario = await Usuario.create({
          nome,
          email,
          senha,
          cpf_cnpj,
          id_funcao,
        });
        if (usuario) {
          return res.status(200).json({message: "Usuario adicionado"})
        } 
        throw {message: 'Erro'}
          } catch (error) {
          return res.status(400).json({ message: "Erro ao adicionar o usuario" });
      }
    },

    userUpdate: async (req, res, next) => {
      const { id } = req.params,
        { nome, email, senha, cpf_cnpj, id_funcao } = req.body,
        usuario = await Usuario.update(
          { nome, email, senha, cpf_cnpj, id_funcao },
          { where: { id } }
        );
      if (!usuario) {
        return res.status(500).json({message: "Ops... Erro ao atualizar o usuario!"});
      }
      return res.status(200).json({message: 'Usuario atualizado com sucesso!'})
  
    },

    userIndex: async (req, res, next) => {
      const { id } = req.params,
        usuario = await Usuario.findOne({ where: { id } });
          res.json({
            usuario
          })
    },

}

module.exports = controller