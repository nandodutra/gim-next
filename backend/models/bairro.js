const { connection, DataTypes } = require('../config/database')

const Bairro = connection.define('stabbairro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Codbairro'
    },
    cidadeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'codcidade'
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      field: 'Descricao'
    },
    idrota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'stabbairro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Codbairro" },
        ]
      },
    ]
  })

module.exports = Bairro