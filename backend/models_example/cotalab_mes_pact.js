const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotalab_mes_pact', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    codestabelecimento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cotalab_mes_pact',
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
  });
};
