const { connection, DataTypes } = require('../config/database')
const People = require('./people')

const Cidade = connection.define('stabcidade', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'codcidade'
  },
  descricao: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  ibge: {
    type: DataTypes.STRING(7),
    allowNull: true
  }
}, {
  tableName: 'stabcidade',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "codcidade" },
      ]
    }
  ]
})

module.exports = Cidade