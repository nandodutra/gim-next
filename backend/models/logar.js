const { connection, DataTypes } = require('../config/database')

const Logar = connection.define('logar', {
    dia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: true
    }
  }, {
    tableName: 'logar',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dia" },
        ]
      },
    ]
  })

module.exports = Logar
