const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stablogradouro_tip', {
    tiplogradouro: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stablogradouro_tip',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tiplogradouro" },
        ]
      },
    ]
  });
};
