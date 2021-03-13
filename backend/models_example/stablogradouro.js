const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stablogradouro', {
    codlogradouro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    tiplogradouro: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: ""
    },
    nomepopular: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codbairro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codcidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stablogradouro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codlogradouro" },
        ]
      },
    ]
  });
};
