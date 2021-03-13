const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabbairro', {
    Codbairro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codcidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    idrota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
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
  });
};
