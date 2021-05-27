module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define('Categoria', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false
      },
    }, {
      tableName: 'categorias',
      timestamps: false
    })
    return Categoria
}