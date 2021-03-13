const { connection, DataTypes } = require('../config/database')

const Cota = connection.define('cotas', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  dataInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'data_inicio'
  },
  dataFim: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'data_fim'
  }
}, {
  tableName: 'cotas',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
})

module.exports = Cota