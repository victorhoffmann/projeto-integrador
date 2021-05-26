module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false
      },
      categoria_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      preco: {
        type: DataType.DECIMAL,
        allowNull: false
      },
      descricao: {
        type: DataType.STRING,
        allowNull: false
      },
      qnt_disponivel: {
        type: DataType.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'produtos',
      timestamps: false
    })
    return Produto
}
  