const { Usuario } = require("../models");
module.exports = async (req, res, next) => {
  try {
    const user = await Usuario.findOne({ where: { id: req.user.id } });
    if (user.id_funcao !== 1)
      return res.status(403).json({ message: "Voce não é admin cara" });
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Você não é admin" });
  }
};
