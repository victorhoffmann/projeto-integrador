module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false
      },
      email: {
        type: DataType.STRING,
        allowNull: false
      },
      senha: {
        type: DataType.STRING,
        allowNull: false
      },
      cpf_cnpj: {
        type: DataType.STRING,
        allowNull: false
      },
      id_funcao: {
        type: DataType.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'usuarios',
      timestamps: false
    })
    return Usuario
}
  