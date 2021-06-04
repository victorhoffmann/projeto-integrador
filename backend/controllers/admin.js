const { Usuario } = require('../models'),
  Sequelize = require('sequelize'),
  { Op } = Sequelize;

const jwt = require("../helpers/jwt");


const controller = {
    login: async (req, res, next) => {
      const { email, senha } = req.body;
      if (!email || !senha) res.status(400).json({ message: "Campos inválidos" });
      let user = await Usuario.findOne({ where: { email } });
      if (user === null)
        res.status(400).json({ message: "Ops, usuário não encontrado" });
      let token = jwt.generateToken(user.id);
      user = user.toJSON();
      delete user.senha;
      res.status(200).json({
        message: "Login realizado com sucesso",
        token,
        user,
      });
    },

    isAdmin: async (req, res, next) => {
      return res.status(200).json({message: 'É administrador'})
    }

}

module.exports = controller